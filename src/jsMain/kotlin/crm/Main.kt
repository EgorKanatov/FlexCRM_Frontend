package crm

import crm.pages.*
import crm.utils.*
import crm.api.ApiLoginRequest
import crm.api.ApiRegisterRequest
import crm.api.FlexCrmApiProvider
import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import org.w3c.dom.Element
import org.w3c.dom.HTMLInputElement

enum class Page { DASHBOARD, CLIENTS, DEALS, PROFILE, TASKS, SETTINGS }

enum class UserRole(val title: String, val description: String) {
    ADMIN("Владелец (Администратор)", "Полный доступ ко всем вкладкам и настройкам"),
    MANAGER("Менеджер", "Доступ к Главной, Клиентам, Сделкам и Задачам (без Настроек)"),
    EMPLOYEE("Сотрудник", "Ограниченный доступ: только вкладка Задачи")
}

data class User(
    val name: String,
    val email: String,
    val role: UserRole
)

var currentUser: User? = null

var currentPage = Page.DASHBOARD
var selectedClientId: Long? = null
private var registrationMode = false

fun getAvailablePages(role: UserRole): List<Page> {
    return when (role) {
        UserRole.ADMIN -> listOf(Page.DASHBOARD, Page.CLIENTS, Page.PROFILE, Page.DEALS, Page.TASKS, Page.SETTINGS)
        UserRole.MANAGER -> listOf(Page.DASHBOARD, Page.CLIENTS, Page.PROFILE, Page.DEALS, Page.TASKS)
        UserRole.EMPLOYEE -> listOf(Page.TASKS)
    }
}

fun main() {
    renderApp()
}

fun renderApp() {
    val root = document.getElementById("root") ?: return
    root.innerHTML = ""

    val user = currentUser
    if (user == null) {
        root.appendChild(renderAuthScreen())
        return
    }

    val allowedPages = getAvailablePages(user.role)
    if (currentPage !in allowedPages) {
        currentPage = allowedPages.first()
    }

    val app = div("app") {
        appendChild(sidebar(user))
        appendChild(tag("main", "main") {
            appendChild(topbar(user))
            appendChild(tag("section", "content") {
                when (currentPage) {
                    Page.DASHBOARD -> appendChild(renderDashboard())
                    Page.CLIENTS -> appendChild(renderClients())
                    Page.DEALS -> appendChild(renderDeals())
                    Page.PROFILE -> appendChild(renderProfile())
                    Page.TASKS -> appendChild(renderTasks())
                    Page.SETTINGS -> appendChild(renderSettings())
                }
            })
        })
    }
    root.appendChild(app)
}

private fun sidebar(user: User): Element = tag("aside", "sidebar") {
    val allowedPages = getAvailablePages(user.role)

    appendChild(div("brand") { textContent = "FlexCRM" })
    appendChild(tag("nav", "nav") {
        if (Page.DASHBOARD in allowedPages) appendChild(navButton("🏠  Главная", Page.DASHBOARD))
        if (Page.CLIENTS in allowedPages) appendChild(navButton("👥  Клиенты", Page.CLIENTS))
        if (Page.DEALS in allowedPages) appendChild(navButton("💼  Сделки", Page.DEALS))
        if (Page.TASKS in allowedPages) appendChild(navButton("✅  Задачи", Page.TASKS))
        if (Page.SETTINGS in allowedPages) appendChild(navButton("⚙️  Настройки", Page.SETTINGS))
    })
}

private fun navButton(label: String, page: Page): Element = button(label, "nav-item") {
    currentPage = page
    renderApp()
}.apply {
    if (page == currentPage) className += " active"
}

private fun topbar(user: User): Element = tag("header", "topbar") {
    appendChild(div("user") {
        val initials = user.name.trim().take(1).ifEmpty { "U" }.uppercase()
        appendChild(div("avatar") { textContent = initials })
        appendChild(div {
            appendChild(tag("strong") { textContent = user.name })
            appendChild(div("muted") { textContent = user.role.title })
        })
        appendChild(button("Выйти", "secondary") {
            MainScope().launch {
                FlexCrmApiProvider.client.logout()
                currentUser = null
                renderApp()
            }
        }.apply {
            setAttribute("style", "margin-left: 14px; font-size: 12px; padding: 6px 12px; cursor: pointer; color: #e53e3e; border-color: #fed7d7;")
        })
    })
}

private fun renderAuthScreen(): Element {
    val companyInput = (document.createElement("input") as HTMLInputElement).apply {
        className = "form-control"
        placeholder = "ООО Ромашка"
    }
    val firstNameInput = (document.createElement("input") as HTMLInputElement).apply {
        className = "form-control"
        placeholder = "Имя"
    }
    val lastNameInput = (document.createElement("input") as HTMLInputElement).apply {
        className = "form-control"
        placeholder = "Фамилия"
    }
    val emailInput = (document.createElement("input") as HTMLInputElement).apply {
        className = "form-control"
        placeholder = "Email"
        value = if (registrationMode) "" else "admin@flexcrm.ru"
    }
    val passwordInput = (document.createElement("input") as HTMLInputElement).apply {
        className = "form-control"
        type = "password"
        placeholder = "Пароль"
        value = if (registrationMode) "" else "StrongPassword123!"
    }

    return div("auth-wrapper") {
        appendChild(div("auth-card") {
            appendChild(tag("h2") { textContent = if (registrationMode) "Новая компания" else "FlexCRM" })
            appendChild(div("subtitle") {
                textContent = if (registrationMode) "Создайте компанию и аккаунт администратора" else "Войдите в рабочее пространство"
            })

            if (registrationMode) {
                appendChild(div("form-group") {
                    appendChild(tag("label") { textContent = "Название компании *" })
                    appendChild(companyInput)
                })
                appendChild(div("form-group") {
                    appendChild(tag("label") { textContent = "Имя администратора *" })
                    appendChild(firstNameInput)
                })
                appendChild(div("form-group") {
                    appendChild(tag("label") { textContent = "Фамилия администратора *" })
                    appendChild(lastNameInput)
                })
            }

            appendChild(div("form-group") {
                appendChild(tag("label") { textContent = "Email *" })
                appendChild(emailInput)
            })
            appendChild(div("form-group") {
                appendChild(tag("label") { textContent = "Пароль *" })
                appendChild(passwordInput)
            })

            appendChild(button(if (registrationMode) "Создать компанию" else "Войти", "primary") {
                MainScope().launch {
                    runCatching {
                        if (registrationMode) {
                            FlexCrmApiProvider.client.register(ApiRegisterRequest(
                                companyName = companyInput.value,
                                email = emailInput.value,
                                password = passwordInput.value,
                                firstName = firstNameInput.value,
                                lastName = lastNameInput.value
                            )).body.user
                        } else {
                            FlexCrmApiProvider.client.login(ApiLoginRequest(emailInput.value, passwordInput.value)).body.user
                        }
                    }.onSuccess { user ->
                        val role = UserRole.entries.firstOrNull { it.name == user.role } ?: UserRole.EMPLOYEE
                        currentUser = User("${user.firstName} ${user.lastName}".trim(), user.email, role)
                        registrationMode = false
                        renderApp()
                    }.onFailure { error ->
                        window.alert(error.message ?: "Не удалось выполнить запрос")
                    }
                }
            }.apply {
                setAttribute("style", "width: 100%; margin-top: 4px; padding: 12px; font-size: 14px;")
            })

            appendChild(button(
                if (registrationMode) "Уже есть аккаунт? Войти" else "Создать новую компанию",
                "auth-mode-toggle"
            ) {
                registrationMode = !registrationMode
                renderApp()
            })
        })
    }
}
