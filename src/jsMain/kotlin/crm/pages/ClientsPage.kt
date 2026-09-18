package crm.pages

import crm.Page
import crm.api.ClientDto
import crm.api.CrmRepository
import crm.api.MockCrmRepository
import crm.currentPage
import crm.selectedClientId
import crm.renderApp
import crm.utils.*
import kotlinx.browser.document
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import org.w3c.dom.Element
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.HTMLSelectElement

private val repository: CrmRepository = MockCrmRepository

fun renderClients(): Element = div {
    val tableContainer = div()

    appendChild(div("page-head") {
        appendChild(div {
            appendChild(tag("h1") { textContent = "Клиенты" })
            appendChild(div("muted") { textContent = "Управление клиентской базой" })
        })
        appendChild(button("+ Добавить клиента", "primary") {
            showAddClientModal {
                renderApp()
            }
        })
    })

    appendChild(tableContainer)
    tableContainer.textContent = "Загрузка списка клиентов..."

    MainScope().launch {
        val clients = repository.getClients()
        tableContainer.innerHTML = ""

        tableContainer.appendChild(div("table-wrap") {
            appendChild(tag("table") {
                appendChild(tag("thead") {
                    appendChild(tag("tr") {
                        listOf("Имя", "Компания", "Телефон", "Email", "Статус", "Ответственный").forEach {
                            appendChild(tag("th") { textContent = it })
                        }
                    })
                })

                appendChild(tag("tbody") {
                    clients.forEach { client ->
                        appendChild(tag("tr") {
                            appendChild(tag("td") {
                                appendChild(button(client.name, "link-btn") {
                                    selectedClientId = client.id
                                    currentPage = Page.PROFILE
                                    renderApp()
                                })
                            })
                            appendChild(tag("td") { textContent = client.company })
                            appendChild(tag("td") { textContent = client.phone })
                            appendChild(tag("td") { textContent = client.email })
                            appendChild(tag("td") {
                                val badgeClass = when (client.status) {
                                    "Лид" -> "badge blue"
                                    "Потенциальный" -> "badge orange"
                                    else -> "badge"
                                }
                                appendChild(tag("span", badgeClass) { textContent = client.status })
                            })
                            appendChild(tag("td") { textContent = client.responsibleUser })
                        })
                    }
                })
            })
        })
    }
}

private fun showAddClientModal(onSuccess: () -> Unit) {
    val root = document.getElementById("root") ?: return

    val nameInput = (document.createElement("input") as HTMLInputElement).apply { className = "form-control"; placeholder = "Иван Иванов" }
    val companyInput = (document.createElement("input") as HTMLInputElement).apply { className = "form-control"; placeholder = "ООО Альфа" }
    val phoneInput = (document.createElement("input") as HTMLInputElement).apply { className = "form-control"; placeholder = "+7 999 000-00-00" }
    val emailInput = (document.createElement("input") as HTMLInputElement).apply { className = "form-control"; placeholder = "ivan@example.com" }

    val statusSelect = (document.createElement("select") as HTMLSelectElement).apply {
        className = "form-control"
        innerHTML = """
            <option value="Активный">Активный</option>
            <option value="Лид">Лид</option>
            <option value="Потенциальный">Потенциальный</option>
        """.trimIndent()
    }

    lateinit var modalBackdrop: Element

    val modal = div("modal-backdrop") {
        modalBackdrop = this
        appendChild(div("modal") {
            appendChild(tag("h2") { textContent = "Новый клиент" })

            appendChild(div("form-group") { appendChild(tag("label") { textContent = "ФИО *" }); appendChild(nameInput) })
            appendChild(div("form-group") { appendChild(tag("label") { textContent = "Компания" }); appendChild(companyInput) })
            appendChild(div("form-group") { appendChild(tag("label") { textContent = "Телефон" }); appendChild(phoneInput) })
            appendChild(div("form-group") { appendChild(tag("label") { textContent = "Email" }); appendChild(emailInput) })
            appendChild(div("form-group") { appendChild(tag("label") { textContent = "Статус" }); appendChild(statusSelect) })

            appendChild(div("modal-actions") {
                appendChild(button("Отмена", "secondary") {
                    root.removeChild(modalBackdrop)
                })
                appendChild(button("Сохранить", "primary") {
                    if (nameInput.value.isBlank()) {
                        kotlinx.browser.window.alert("Заполните ФИО клиента!")
                        return@button
                    }

                    val newClient = ClientDto(
                        id = 0,
                        name = nameInput.value,
                        company = companyInput.value.ifBlank { "-" },
                        phone = phoneInput.value.ifBlank { "-" },
                        email = emailInput.value.ifBlank { "-" },
                        status = statusSelect.value,
                        responsibleUser = "Егор"
                    )

                    MainScope().launch {
                        repository.addClient(newClient)
                        root.removeChild(modalBackdrop)
                        onSuccess()
                    }
                })
            })
        })
    }

    root.appendChild(modal)
}
