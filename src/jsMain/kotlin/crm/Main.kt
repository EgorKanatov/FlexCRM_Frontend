package crm

import crm.pages.*
import crm.utils.*
import kotlinx.browser.document
import org.w3c.dom.Element

enum class Page { DASHBOARD, CLIENTS, DEALS, PROFILE }

var currentPage = Page.DEALS

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
        appendChild(navButton("✅  Задачи", null))
        appendChild(navButton("🔻  Воронки", null))
        appendChild(navButton("⚙️  Настройки", null))
    })
}

private fun navButton(label: String, page: Page?): Element = button(label, "nav-item") {
    if (page != null) {
        currentPage = page
        renderApp()
    }
}.apply {
    if (page == currentPage) className += " active"
}

private fun topbar(): Element = tag("header", "topbar") {
    appendChild(tag("input", "search").apply { setAttribute("placeholder", "Поиск...") })
    appendChild(div("user") {
        appendChild(div("avatar") { textContent = "E" })
        appendChild(div {
            appendChild(tag("strong") { textContent = "Егор Иванов" })
            appendChild(div("muted") { textContent = "Администратор" })
        })
    })
}
