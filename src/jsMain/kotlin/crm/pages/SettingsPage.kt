package crm.pages

import crm.currentUser
import crm.api.CrmRepository
import crm.api.EmployeeDto
import crm.api.MockCrmRepository
import crm.api.SettingsDto
import crm.renderApp
import crm.utils.*
import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import org.w3c.dom.Element
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.HTMLSelectElement

private val repository: CrmRepository = MockCrmRepository

fun renderSettings(): Element = div {
    val nameInput = (document.createElement("input") as HTMLInputElement).apply { className = "form-control" }
    val emailInput = (document.createElement("input") as HTMLInputElement).apply { className = "form-control" }
    val notifyEmailInput = (document.createElement("input") as HTMLInputElement).apply { type = "checkbox" }
    val notifyTelegramInput = (document.createElement("input") as HTMLInputElement).apply { type = "checkbox" }

    val employeesContainer = div()

    appendChild(div("page-head") {
        appendChild(div {
            appendChild(tag("h1") { textContent = "Настройки" })
            appendChild(div("muted") { textContent = "Конфигурация системы и управление персоналом" })
        })
        appendChild(button("Сохранить", "primary") {
            val updated = SettingsDto(
                name = nameInput.value,
                email = emailInput.value,
                notifyEmail = notifyEmailInput.checked,
                notifyTelegram = notifyTelegramInput.checked
            )
            MainScope().launch {
                repository.updateSettings(updated)
                window.alert("Сохранено!")
            }
        })
    })

    appendChild(div {
        setAttribute("style", "display: flex; gap: 24px; margin-bottom: 24px;")

        appendChild(div("panel") {
            setAttribute("style", "flex: 1;")
            appendChild(tag("h3") { textContent = "Личные данные" })

            appendChild(div("form-group") {
                appendChild(tag("label") { textContent = "Имя" })
                appendChild(nameInput)
            })
            appendChild(div("form-group") {
                appendChild(tag("label") { textContent = "Email" })
                appendChild(emailInput)
            })
        })

        appendChild(div("panel") {
            setAttribute("style", "flex: 1;")
            appendChild(tag("h3") { textContent = "Уведомления" })

            appendChild(div("form-group") {
                appendChild(tag("label") {
                    appendChild(notifyEmailInput)
                    appendChild(tag("span") { textContent = " Email о новых задачах" })
                })
            })
            appendChild(div("form-group") {
                appendChild(tag("label") {
                    appendChild(notifyTelegramInput)
                    appendChild(tag("span") { textContent = " Уведомления в Telegram" })
                })
            })
        })
    })

    // Employee management section (visible for admin)
    if (currentUser?.role?.name == "ADMIN") {
        appendChild(div("panel") {
            appendChild(div("page-head") {
                appendChild(tag("h3") { textContent = "Управление сотрудниками и менеджерами" })
                appendChild(button("+ Добавить сотрудника", "primary") {
                    showAddEmployeeModal {
                        renderApp()
                    }
                })
            })
            appendChild(employeesContainer)
        })
    }

    MainScope().launch {
        val settings = repository.getSettings()
        nameInput.value = settings.name
        emailInput.value = settings.email
        notifyEmailInput.checked = settings.notifyEmail
        notifyTelegramInput.checked = settings.notifyTelegram

        if (currentUser?.role?.name == "ADMIN") {
            val employees = repository.getEmployees()
            employeesContainer.innerHTML = ""

            if (employees.isEmpty()) {
                employeesContainer.appendChild(div("muted") { textContent = "Нет зарегистрированных сотрудников" })
            } else {
                employeesContainer.appendChild(tag("table") {
                    appendChild(tag("thead") {
                        appendChild(tag("tr") {
                            listOf("Имя", "Email", "Должность", "Телефон", "Действия").forEach {
                                appendChild(tag("th") { textContent = it })
                            }
                        })
                    })
                    appendChild(tag("tbody") {
                        employees.forEach { emp ->
                            appendChild(tag("tr") {
                                appendChild(tag("td") { textContent = emp.name })
                                appendChild(tag("td") { textContent = emp.email })
                                appendChild(tag("td") { textContent = emp.role })
                                appendChild(tag("td") { textContent = emp.phone })
                                appendChild(tag("td") {
                                    appendChild(button("Удалить", "secondary") {
                                        if (window.confirm("Удалить сотрудника ${emp.name}?")) {
                                            MainScope().launch {
                                                repository.deleteEmployee(emp.id)
                                                renderApp()
                                            }
                                        }
                                    }.apply {
                                        setAttribute("style", "font-size: 11px; padding: 4px 8px; color: #e53e3e; border-color: #fed7d7;")
                                    })
                                })
                            })
                        }
                    })
                })
            }
        }
    }
}

private fun showAddEmployeeModal(onSuccess: () -> Unit) {
    val root = document.getElementById("root") ?: return

    val nameInput = (document.createElement("input") as HTMLInputElement).apply { className = "form-control"; placeholder = "Иван Иванов" }
    val emailInput = (document.createElement("input") as HTMLInputElement).apply { className = "form-control"; placeholder = "login@flexcrm.ru" }
    val phoneInput = (document.createElement("input") as HTMLInputElement).apply { className = "form-control"; placeholder = "+7 999 000-00-00" }
    val roleSelect = (document.createElement("select") as HTMLSelectElement).apply {
        className = "form-control"
        innerHTML = """
            <option value="Менеджер">Менеджер</option>
            <option value="Сотрудник">Сотрудник</option>
            <option value="Администратор">Администратор</option>
        """.trimIndent()
    }

    lateinit var modalBackdrop: Element

    val modal = div("modal-backdrop") {
        modalBackdrop = this
        appendChild(div("modal") {
            appendChild(tag("h2") { textContent = "Добавить сотрудника" })

            appendChild(div("form-group") { appendChild(tag("label") { textContent = "Имя *" }); appendChild(nameInput) })
            appendChild(div("form-group") { appendChild(tag("label") { textContent = "Логин (Email) *" }); appendChild(emailInput) })
            appendChild(div("form-group") { appendChild(tag("label") { textContent = "Телефон" }); appendChild(phoneInput) })
            appendChild(div("form-group") { appendChild(tag("label") { textContent = "Роль / Должность" }); appendChild(roleSelect) })

            appendChild(div("modal-actions") {
                appendChild(button("Отмена", "secondary") {
                    root.removeChild(modalBackdrop)
                })
                appendChild(button("Создать", "primary") {
                    if (nameInput.value.isBlank() || emailInput.value.isBlank()) {
                        window.alert("Заполните имя и логин (email)!")
                        return@button
                    }

                    val newEmp = EmployeeDto(
                        id = 0,
                        name = nameInput.value,
                        email = emailInput.value,
                        role = roleSelect.value,
                        phone = phoneInput.value.ifBlank { "-" }
                    )

                    MainScope().launch {
                        repository.addEmployee(newEmp)
                        root.removeChild(modalBackdrop)
                        onSuccess()
                    }
                })
            })
        })
    }

    root.appendChild(modal)
}
