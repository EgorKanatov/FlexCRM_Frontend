package crm

import crm.pages.*
import crm.utils.*
import kotlinx.browser.document
import org.w3c.dom.Element

enum class Page { DASHBOARD, CLIENTS, DEALS, PROFILE, TASKS, SETTINGS }

var currentPage = Page.DASHBOARD
var selectedClientId: Long? = null

fun main() {
    renderApp()
}

fun renderApp() {
    val root = document.getElementById("root") ?: return
    root.innerHTML = ""

    val app = div("app") {
        appendChild(sidebar())
        appendChild(tag("main", "main") {
            appendChild(topbar())
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

private fun sidebar(): Element = tag("aside", "sidebar") {
    appendChild(div("brand") { textContent = "FlexCRM" })
    appendChild(tag("nav", "nav") {
        appendChild(navButton("🏠  Главная", Page.DASHBOARD))
        appendChild(navButton("👥  Клиенты", Page.CLIENTS))
        appendChild(navButton("💼  Сделки", Page.DEALS))
        appendChild(navButton("✅  Задачи", Page.TASKS))
        appendChild(navButton("⚙️  Настройки", Page.SETTINGS))
    })
}

private fun navButton(label: String, page: Page): Element = button(label, "nav-item") {
    currentPage = page
    renderApp()
}.apply {
    if (page == currentPage) className += " active"
}

private fun topbar(): Element = tag("header", "topbar") {
    appendChild(tag("input", "search").apply { setAttribute("placeholder", "Поиск...") })
    appendChild(div("user") {
        appendChild(div("avatar") { textContent = "Е" })
        appendChild(div {
            appendChild(tag("strong") { textContent = "Егор Канатов" })
            appendChild(div("muted") { textContent = "Администратор" })
        })
    })
}