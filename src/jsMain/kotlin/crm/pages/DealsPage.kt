package crm.pages

import crm.api.CrmRepository
import crm.api.DealDto
import crm.api.MockCrmRepository
import crm.renderApp
import crm.utils.*
import kotlinx.browser.document
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import org.w3c.dom.Element
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.HTMLSelectElement

private val repository: CrmRepository = MockCrmRepository

private val stages = listOf("Новый лид", "Контакт установлен", "Переговоры", "Договор", "Успех")

fun renderDeals(): Element = div {
    val kanbanContainer = div()

    appendChild(div("page-head") {
        appendChild(div {
            appendChild(tag("h1") { textContent = "Сделки" })
            appendChild(div("muted") { textContent = "Управление продажами в формате воронки" })
        })
        appendChild(button("+ Добавить сделку", "primary") {
            showAddDealModal(initialStage = null) {
                renderApp()
            }
        })
    })

    appendChild(kanbanContainer)
    kanbanContainer.textContent = "Загрузка сделок..."

    MainScope().launch {
        val deals = repository.getDeals()
        kanbanContainer.innerHTML = ""

        kanbanContainer.appendChild(div("kanban") {
            stages.forEach { stage ->
                val stageDeals = deals.filter { it.stage == stage }
                val totalAmount = stageDeals.sumOf { it.amount }

                appendChild(div("kanban-col") {
                    appendChild(div("col-title") { textContent = stage })
                    appendChild(div("col-meta") { textContent = "${stageDeals.size} сделок · ${money(totalAmount)}" })

                    stageDeals.forEach { deal ->
                        appendChild(div("deal-card") {
                            appendChild(tag("strong") { textContent = deal.company })
                            appendChild(div { textContent = money(deal.amount) })
                            appendChild(div("deal-meta") {
                                appendChild(tag("span") { textContent = "👤 ${deal.responsibleUser}" })
                                appendChild(tag("br"))
                                appendChild(tag("span") { textContent = "📅 ${deal.date}" })
                            })
                        })
                    }

                    appendChild(button("+ Добавить сделку", "secondary") {
                        showAddDealModal(initialStage = stage) {
                            renderApp()
                        }
                    }.apply {
                        setAttribute("style", "width:100%")
                    })
                })
            }
        })
    }
}

// Модальное окно создания сделки
private fun showAddDealModal(initialStage: String?, onSuccess: () -> Unit) {
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
                        kotlinx.browser.window.alert("Заполните компанию и сумму!")
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
