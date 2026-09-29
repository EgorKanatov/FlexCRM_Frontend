package crm

import crm.pages.*
import crm.utils.*
import kotlinx.browser.document
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

fun getAvailablePages(role: UserRole): List<Page> {
    return when (role) {
        UserRole.ADMIN -> listOf(Page.DASHBOARD, Page.CLIENTS, Page.DEALS, Page.TASKS, Page.SETTINGS)
        UserRole.MANAGER -> listOf(Page.DASHBOARD, Page.CLIENTS, Page.DEALS, Page.TASKS)
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
    appendChild(tag("input", "search").apply { setAttribute("placeholder", "Поиск...") })
    appendChild(div("user") {
        val initials = user.name.trim().take(1).ifEmpty { "U" }.uppercase()
        appendChild(div("avatar") { textContent = initials })
        appendChild(div {
            appendChild(tag("strong") { textContent = user.name })
            appendChild(div("muted") { textContent = user.role.title })
        })
        appendChild(button("Выйти", "secondary") {
            currentUser = null
            renderApp()
        }.apply {
            setAttribute("style", "margin-left: 14px; font-size: 12px; padding: 6px 12px; cursor: pointer; color: #e53e3e; border-color: #fed7d7;")
        })
    })
}

private fun renderAuthScreen(): Element {
    val nameInput = (document.createElement("input") as HTMLInputElement).apply {
        className = "form-control"
        placeholder = "Ваше имя"
        value = "Егор Канатов"
    }
    val emailInput = (document.createElement("input") as HTMLInputElement).apply {
        className = "form-control"
        placeholder = "Email"
        value = "admin@flexcrm.ru"
    }

    var selectedRole = UserRole.ADMIN

    return div("auth-wrapper") {
        appendChild(div("auth-card") {
            appendChild(tag("h2") { textContent = "FlexCRM" })
            appendChild(div("subtitle") { textContent = "Регистрация и выбор роли пользователя" })

            appendChild(div("form-group") {
                appendChild(tag("label") { textContent = "Имя пользователя *" })
                appendChild(nameInput)
            })

            appendChild(div("form-group") {
                appendChild(tag("label") { textContent = "Email" })
                appendChild(emailInput)
            })

            appendChild(div("form-group") {
                appendChild(tag("label") { textContent = "Позиция (должность) *" })

                UserRole.entries.forEach { role ->
                    val radio = (document.createElement("input") as HTMLInputElement).apply {
                        type = "radio"
                        name = "user_role"
                        value = role.name
                        checked = (role == selectedRole)
                        addEventListener("change", {
                            if (checked) selectedRole = role
                        })
                    }

                    appendChild(tag("label", "role-option") {
                        appendChild(radio)
                        appendChild(div("role-info") {
                            appendChild(tag("strong") { textContent = role.title })
                            appendChild(tag("span") { textContent = role.description })
                        })
                    })
                }
            })

            appendChild(button("Войти в систему", "primary") {
                val name = nameInput.value.ifBlank { "Пользователь" }
                val email = emailInput.value.ifBlank { "user@flexcrm.ru" }

                currentUser = User(name, email, selectedRole)
                renderApp()
            }.apply {
                setAttribute("style", "width: 100%; margin-top: 12px; padding: 12px; font-size: 15px;")
            })
        })
    }
}
