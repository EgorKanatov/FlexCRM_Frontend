package crm.pages

import crm.Page
import crm.currentPage
import crm.renderApp
import crm.utils.*
import org.w3c.dom.Element

fun renderProfile(): Element = div {
    appendChild(div("page-head") {
        appendChild(button("← Клиенты", "secondary") {
            currentPage = Page.CLIENTS
            renderApp()
        })
        appendChild(button("+ Создать сделку", "primary") {})
    })

    appendChild(div("profile-head") {
        appendChild(div("avatar") { textContent = "ИП" })
        appendChild(div {
            appendChild(tag("h1") { textContent = "Иван Петров" })
            appendChild(div("muted") {
                textContent = "ООО Альфа · "
                appendChild(tag("span", "badge") { textContent = "Активный" })
            })
        })
    })

    appendChild(div("profile-grid") {
        appendChild(div("profile-card") {
            appendChild(tag("h3") { textContent = "Контактная информация" })
            appendChild(field("Имя", "Иван Петров"))
            appendChild(field("Компания", "ООО Альфа"))
            appendChild(field("Телефон", "+7 912 345-67-89"))
            appendChild(field("Email", "ivan@alfa.ru"))
            appendChild(field("Должность", "Генеральный директор"))
            appendChild(field("Ответственный", "Булат"))
            appendChild(field("Источник", "Сайт"))
        })

        appendChild(div {
            appendChild(div("profile-card") {
                setAttribute("style", "margin-bottom: 24px;")
                appendChild(tag("h3") { textContent = "Заметки" })
                appendChild(tag("p") { textContent = "Потенциально крупный клиент. Интересуется внедрением CRM для отдела продаж." })
                appendChild(div("tags") {
                    appendChild(tag("span", "tag blue") { textContent = "B2B" })
                    appendChild(tag("span", "tag blue") { textContent = "CRM" })
                    appendChild(tag("span", "tag blue") { textContent = "Приоритетный" })
                })
            })

            appendChild(div("profile-card") {
                appendChild(tag("h3") { textContent = "Последний комментарий" })
                appendChild(tag("p") {
                    appendChild(tag("strong") { textContent = "Егор: " })
                    appendChild(tag("span") { textContent = "Созвонились, ждём документы от клиента." })
                })
                appendChild(div("muted") {
                    setAttribute("style", "font-size: 12px; margin-top: 16px;")
                    textContent = "Здесь позже будет форма комментария и история взаимодействий."
                })
            })
        })
    })
}

private fun field(label: String, value: String) = div("field") {
    appendChild(tag("span", "muted") { textContent = label })
    appendChild(tag("strong") { textContent = value })
}
