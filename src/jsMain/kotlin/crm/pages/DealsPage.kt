package crm.pages

import crm.api.CrmRepository
import crm.api.DealDto
import crm.api.ApiCreateDealRequest
import crm.api.ApiCrmRepository
import crm.api.FlexCrmApiProvider
import crm.renderApp
import crm.utils.*
import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import org.w3c.dom.DragEvent
import org.w3c.dom.Element
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.HTMLSelectElement
import org.w3c.dom.HTMLTextAreaElement

private val repository: CrmRepository = ApiCrmRepository

fun renderDeals(): Element = div {
    val kanbanContainer = div()

    appendChild(div("page-head") {
        appendChild(div {
            appendChild(tag("h1") { textContent = "Сделки" })
            appendChild(div("muted") { textContent = "Управление продажами в формате воронки" })
        })
        appendChild(div {
            setAttribute("style", "display: flex; gap: 10px;")

            appendChild(button("+ Добавить стадию", "secondary") {
                val newStage = window.prompt("Введите название новой стадии воронки:")
                if (!newStage.isNullOrBlank()) {
                    MainScope().launch {
                        repository.addFunnelStage(newStage.trim())
                        renderApp()
                    }
                }
            })

            appendChild(button("+ Добавить сделку", "primary") {
                MainScope().launch {
                    runCatching { showAddDealModal(initialStage = null) { renderApp() } }
                        .onFailure { error -> window.alert(error.message ?: "Не удалось подготовить форму сделки") }
                }
            })
        })
    })

    appendChild(kanbanContainer)
    kanbanContainer.textContent = "Загрузка сделок..."

    MainScope().launch {
        runCatching {
            val currentStages = repository.getFunnelStages()
            val deals = repository.getDeals()
            kanbanContainer.innerHTML = ""

            if (currentStages.isEmpty()) {
                kanbanContainer.appendChild(div("panel") {
                    setAttribute("style", "text-align: center; padding: 40px;")
                    appendChild(tag("h3") { textContent = "Воронка пуста" })
                    appendChild(div("muted") { textContent = "Добавьте первую стадию для отображения сделок." })
                    appendChild(button("+ Добавить стадию", "primary") {
                        val newStage = window.prompt("Введите название первой стадии:")
                        if (!newStage.isNullOrBlank()) {
                            MainScope().launch {
                                repository.addFunnelStage(newStage.trim())
                                renderApp()
                            }
                        }
                    }.apply { setAttribute("style", "margin-top: 16px;") })
                })
                return@runCatching
            }

            kanbanContainer.appendChild(div("kanban") {
                currentStages.forEachIndexed { stageIndex, stage ->
                    val stageDeals = deals.filter { it.stage == stage }
                    val totalAmount = stageDeals.sumOf { it.amount }

                    val col = div("kanban-col") {
                        appendChild(div("col-header") {
                            appendChild(div("col-title") { textContent = stage })
                            appendChild(button("✕", "col-delete-btn") {
                                if (window.confirm("Удалить стадию \"$stage\"?")) {
                                    MainScope().launch {
                                        repository.deleteFunnelStage(stage)
                                        renderApp()
                                    }
                                }
                            }.apply { title = "Удалить стадию" })
                        })

                        appendChild(div("col-meta") { textContent = "${stageDeals.size} сделок · ${money(totalAmount)}" })
                        stageDeals.forEach { deal -> appendChild(renderDealCard(deal, stageIndex, currentStages)) }
                        appendChild(button("+ Добавить сделку", "secondary") {
                            MainScope().launch {
                                runCatching { showAddDealModal(initialStage = stage) { renderApp() } }
                                    .onFailure { error -> window.alert(error.message ?: "Не удалось подготовить форму сделки") }
                            }
                        }.apply { setAttribute("style", "width: 100%; margin-top: 6px;") })
                    }

                    col.addEventListener("dragover", { e ->
                        e.preventDefault()
                        col.classList.add("drag-over")
                    })
                    col.addEventListener("dragleave", { _ -> col.classList.remove("drag-over") })
                    col.addEventListener("drop", { e ->
                        e.preventDefault()
                        col.classList.remove("drag-over")
                        val dragEvent = e.unsafeCast<DragEvent>()
                        val dealId = dragEvent.dataTransfer?.getData("text/plain")?.toLongOrNull()
                        if (dealId != null) {
                            MainScope().launch {
                                repository.updateDealStage(dealId, stage)
                                renderApp()
                            }
                        }
                    })
                    appendChild(col)
                }
            })
        }.onFailure { error -> kanbanContainer.textContent = error.message ?: "Не удалось загрузить сделки" }
    }
}

private fun renderDealCard(deal: DealDto, stageIndex: Int, stages: List<String>): Element = div("deal-card") {
    setAttribute("draggable", "true")

    addEventListener("dragstart", { e ->
        val dragEvent = e.unsafeCast<DragEvent>()
        dragEvent.dataTransfer?.setData("text/plain", deal.id.toString())
    })

    appendChild(tag("strong") { textContent = deal.company })
    appendChild(div { textContent = money(deal.amount) })
    appendChild(div("deal-meta") {
        appendChild(tag("span") { textContent = "👤 ${deal.responsibleUser}" })
        appendChild(tag("br"))
        appendChild(tag("span") { textContent = "📅 ${deal.date}" })
    })

    appendChild(div("deal-card-footer") {
        val actionsLeft = div("card-actions") {
            if (stageIndex > 0) {
                val prevStage = stages[stageIndex - 1]
                appendChild(button("←", "card-btn") {
                    MainScope().launch {
                        repository.updateDealStage(deal.id, prevStage)
                        renderApp()
                    }
                }.apply { title = "Переместить в \"$prevStage\"" })
            }
            if (stageIndex < stages.size - 1) {
                val nextStage = stages[stageIndex + 1]
                appendChild(button("→", "card-btn") {
                    MainScope().launch {
                        repository.updateDealStage(deal.id, nextStage)
                        renderApp()
                    }
                }.apply { title = "Переместить в \"$nextStage\"" })
            }
        }

        val actionsRight = div("card-actions") {
            appendChild(button("🗑️", "card-btn danger") {
                if (window.confirm("Удалить сделку \"${deal.company}\"?")) {
                    MainScope().launch {
                        repository.deleteDeal(deal.id)
                        renderApp()
                    }
                }
            }.apply { title = "Удалить сделку" })
        }

        appendChild(actionsLeft)
        appendChild(actionsRight)
    })
}

// Модальное окно создания сделки
private suspend fun showAddDealModal(initialStage: String?, onSuccess: () -> Unit) {
    val root = document.getElementById("root") ?: return
    val api = FlexCrmApiProvider.client
    val clients = api.getClients().body
    val users = api.getUsers().body
    val pipelines = api.getPipelines().body
    if (clients.isEmpty() || users.isEmpty() || pipelines.isEmpty()) error("Для создания сделки нужны клиенты, сотрудники и воронка")

    val clientSelect = (document.createElement("select") as HTMLSelectElement).apply {
        className = "form-control"
        clients.forEach { client ->
            val option = document.createElement("option")
            option.textContent = client.companyName ?: "${client.firstName} ${client.lastName}".trim()
            option.setAttribute("value", client.id)
            appendChild(option)
        }
    }
    val ownerSelect = (document.createElement("select") as HTMLSelectElement).apply {
        className = "form-control"
        users.forEach { user ->
            val option = document.createElement("option")
            option.textContent = "${user.firstName} ${user.lastName}".trim()
            option.setAttribute("value", user.id)
            appendChild(option)
        }
    }
    val pipelineSelect = (document.createElement("select") as HTMLSelectElement).apply {
        className = "form-control"
        pipelines.forEach { pipeline ->
            val option = document.createElement("option")
            option.textContent = pipeline.name
            option.setAttribute("value", pipeline.id)
            appendChild(option)
        }
    }
    val stageSelect = (document.createElement("select") as HTMLSelectElement).apply { className = "form-control" }
    suspend fun reloadStages(selectedName: String? = null) {
        val stages = api.getPipelineStages(pipelineSelect.value).body
        stageSelect.innerHTML = ""
        stages.forEach { stage ->
            val option = document.createElement("option")
            option.textContent = stage.name
            option.setAttribute("value", stage.id)
            stageSelect.appendChild(option)
        }
        if (selectedName != null) {
            stages.firstOrNull { it.name == selectedName }?.let { stageSelect.value = it.id }
        }
    }
    reloadStages(initialStage)
    pipelineSelect.addEventListener("change", {
        MainScope().launch {
            runCatching { reloadStages() }
                .onFailure { error -> window.alert(error.message ?: "Не удалось загрузить стадии") }
        }
    })
    val titleInput = (document.createElement("input") as HTMLInputElement).apply {
        className = "form-control"
        placeholder = "Например, поставка оборудования"
    }
    val amountInput = (document.createElement("input") as HTMLInputElement).apply {
        className = "form-control"
        placeholder = "100000"
        type = "number"
        min = "0"
        step = "0.01"
    }
    val descriptionInput = (document.createElement("textarea") as HTMLTextAreaElement).apply {
        className = "form-control"
        placeholder = "Дополнительная информация"
        rows = 3
    }
    val expectedCloseInput = (document.createElement("input") as HTMLInputElement).apply {
        className = "form-control"
        type = "datetime-local"
    }

    lateinit var modalBackdrop: Element

    val modal = div("modal-backdrop") {
        modalBackdrop = this
        appendChild(div("modal") {
            appendChild(tag("h2") { textContent = "Новая сделка" })

            appendChild(div("form-group") { appendChild(tag("label") { textContent = "Название сделки *" }); appendChild(titleInput) })
            appendChild(div("form-group") { appendChild(tag("label") { textContent = "Клиент *" }); appendChild(clientSelect) })
            appendChild(div("form-group") { appendChild(tag("label") { textContent = "Сумма (₽) *" }); appendChild(amountInput) })
            appendChild(div("form-group") { appendChild(tag("label") { textContent = "Ответственный *" }); appendChild(ownerSelect) })
            appendChild(div("form-group") { appendChild(tag("label") { textContent = "Воронка *" }); appendChild(pipelineSelect) })
            appendChild(div("form-group") { appendChild(tag("label") { textContent = "Стадия *" }); appendChild(stageSelect) })
            appendChild(div("form-group") { appendChild(tag("label") { textContent = "Описание" }); appendChild(descriptionInput) })
            appendChild(div("form-group") { appendChild(tag("label") { textContent = "Ожидаемая дата закрытия" }); appendChild(expectedCloseInput) })

            appendChild(div("modal-actions") {
                appendChild(button("Отмена", "secondary") {
                    root.removeChild(modalBackdrop)
                })
                appendChild(button("Сохранить", "primary") {
                    val amount = amountInput.value.toDoubleOrNull()
                    if (titleInput.value.isBlank() || amount == null || amount < 0) {
                        window.alert("Укажите название сделки и неотрицательную сумму")
                        return@button
                    }

                    MainScope().launch {
                        runCatching {
                            api.createDeal(ApiCreateDealRequest(
                                title = titleInput.value.trim(),
                                clientId = clientSelect.value,
                                responsibleUserId = ownerSelect.value,
                                pipelineId = pipelineSelect.value,
                                stageId = stageSelect.value,
                                amount = amount,
                                description = descriptionInput.value.trim().ifBlank { null },
                                expectedCloseAt = expectedCloseInput.value.takeIf { it.isNotBlank() }?.let { "$it:00Z" }
                            ))
                        }.onSuccess {
                            root.removeChild(modalBackdrop)
                            onSuccess()
                        }.onFailure { error -> window.alert(error.message ?: "Не удалось создать сделку") }
                    }
                })
            })
        })
    }

    root.appendChild(modal)
}
