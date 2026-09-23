package crm.pages

import crm.api.CrmRepository
import crm.api.DealDto
import crm.api.MockCrmRepository
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

private val repository: CrmRepository = MockCrmRepository

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
                    val currentStages = repository.getFunnelStages()
                    showAddDealModal(initialStage = null, stages = currentStages) {
                        renderApp()
                    }
                }
            })
        })
    })

    appendChild(kanbanContainer)
    kanbanContainer.textContent = "Загрузка сделок..."

    MainScope().launch {
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
            return@launch
        }

        kanbanContainer.appendChild(div("kanban") {
            currentStages.forEachIndexed { stageIndex, stage ->
                val stageDeals = deals.filter { it.stage == stage }
                val totalAmount = stageDeals.sumOf { it.amount }

                val col = div("kanban-col") {
                    // Header стадии
                    appendChild(div("col-header") {
                        appendChild(div("col-title") { textContent = stage })
                        appendChild(button("✕", "col-delete-btn") {
                            if (window.confirm("Удалить стадию \"$stage\"?")) {
                                MainScope().launch {
                                    repository.deleteFunnelStage(stage)
                                    renderApp()
                                }
                            }
                        }.apply {
                            title = "Удалить стадию"
                        })
                    })

                    appendChild(div("col-meta") { textContent = "${stageDeals.size} сделок · ${money(totalAmount)}" })

                    // Карточки сделок
                    stageDeals.forEach { deal ->
                        appendChild(renderDealCard(deal, stageIndex, currentStages))
                    }

                    // Быстрое добавление сделки в данную стадию
                    appendChild(button("+ Добавить сделку", "secondary") {
                        showAddDealModal(initialStage = stage, stages = currentStages) {
                            renderApp()
                        }
                    }.apply {
                        setAttribute("style", "width: 100%; margin-top: 6px;")
                    })
                }

                // Drag and Drop обработчики на колонке
                col.addEventListener("dragover", { e ->
                    e.preventDefault()
                    col.classList.add("drag-over")
                })
                col.addEventListener("dragleave", { _ ->
                    col.classList.remove("drag-over")
                })
                col.addEventListener("drop", { e ->
                    e.preventDefault()
                    col.classList.remove("drag-over")
                    val dragEvent = e.unsafeCast<DragEvent>()
                    val dealIdStr = dragEvent.dataTransfer?.getData("text/plain")
                    val dealId = dealIdStr?.toLongOrNull()
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
private fun showAddDealModal(initialStage: String?, stages: List<String>, onSuccess: () -> Unit) {
    val root = document.getElementById("root") ?: return

    val companyInput = (document.createElement("input") as HTMLInputElement).apply { className = "form-control"; placeholder = "ООО Ромашка" }
    val amountInput = (document.createElement("input") as HTMLInputElement).apply { className = "form-control"; placeholder = "100000"; type = "number" }
    val ownerInput = (document.createElement("input") as HTMLInputElement).apply { className = "form-control"; placeholder = "Иван Петров" }

    val stageSelect = (document.createElement("select") as HTMLSelectElement).apply {
        className = "form-control"
        stages.forEach { stage ->
            val opt = document.createElement("option")
            opt.textContent = stage
            opt.setAttribute("value", stage)
            if (stage == initialStage) {
                opt.setAttribute("selected", "true")
            }
            appendChild(opt)
        }
    }

    lateinit var modalBackdrop: Element

    val modal = div("modal-backdrop") {
        modalBackdrop = this
        appendChild(div("modal") {
            appendChild(tag("h2") { textContent = "Новая сделка" })

            appendChild(div("form-group") { appendChild(tag("label") { textContent = "Компания / Клиент *" }); appendChild(companyInput) })
            appendChild(div("form-group") { appendChild(tag("label") { textContent = "Сумма (₽) *" }); appendChild(amountInput) })
            appendChild(div("form-group") { appendChild(tag("label") { textContent = "Ответственный *" }); appendChild(ownerInput) })
            appendChild(div("form-group") { appendChild(tag("label") { textContent = "Стадия воронки" }); appendChild(stageSelect) })

            appendChild(div("modal-actions") {
                appendChild(button("Отмена", "secondary") {
                    root.removeChild(modalBackdrop)
                })
                appendChild(button("Сохранить", "primary") {
                    if (companyInput.value.isBlank() || amountInput.value.isBlank()) {
                        window.alert("Заполните компанию и сумму!")
                        return@button
                    }

                    val newDeal = DealDto(
                        id = 0,
                        title = "Сделка " + companyInput.value,
                        company = companyInput.value,
                        amount = amountInput.value.toIntOrNull() ?: 0,
                        responsibleUser = ownerInput.value.ifBlank { "Егор" },
                        stage = stageSelect.value,
                        date = "16.09.2026"
                    )

                    MainScope().launch {
                        repository.addDeal(newDeal)
                        root.removeChild(modalBackdrop)
                        onSuccess()
                    }
                })
            })
        })
    }

    root.appendChild(modal)
}
