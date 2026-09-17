package crm.pages

import crm.api.CrmRepository
import crm.api.MockCrmRepository
import crm.utils.*
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import org.w3c.dom.Element

private val repository: CrmRepository = MockCrmRepository

fun renderDashboard(): Element = div {
    val statsContainer = div()

    appendChild(div("page-head") {
        appendChild(div {
            appendChild(tag("h1") { textContent = "Добро пожаловать, Егор!" })
            appendChild(div("muted") { textContent = "Вот что происходит в вашей компании сегодня." })
        })
        appendChild(div("muted") { textContent = "11 сентября 2026" })
    })

    appendChild(statsContainer)
    statsContainer.textContent = "Загрузка статистики..."

    MainScope().launch {
        val stats = repository.getDashboardStats()
        statsContainer.innerHTML = ""

        statsContainer.appendChild(div("grid-4") {
            appendChild(stat("Клиенты", stats.clientsCount.toString(), "+12% за месяц"))
            appendChild(stat("Сделки", stats.dealsCount.toString(), "+5% за месяц"))
            appendChild(stat("Активные сделки", stats.activeDealsCount.toString(), "3 требуют внимания"))
            appendChild(stat("Задачи сегодня", stats.tasksTodayCount.toString(), "2 уже выполнены"))
        })

        statsContainer.appendChild(div("two-col") {
            appendChild(div("panel") {
                appendChild(tag("h3") { textContent = "Последние активности" })
                appendChild(activity("Иван Петров создал новую сделку", "10 минут назад"))
                appendChild(activity("Анна Смирнова добавила комментарий", "1 час назад"))
                appendChild(activity("Булат изменил статус сделки", "3 часа назад"))
                appendChild(activity("Ярик создал задачу", "5 часов назад"))
            })

            appendChild(div("panel") {
                appendChild(tag("h3") { textContent = "Ближайшие задачи" })
                appendChild(taskRow("Позвонить клиенту ООО Альфа", "Сегодня, 14:00"))
                appendChild(taskRow("Отправить договор", "Сегодня, 17:00"))
                appendChild(taskRow("Подготовить презентацию", "Завтра, 10:00"))
                appendChild(taskRow("Проверить документы", "13.09.2026"))
            })
        })
    }
}

private fun stat(label: String, value: String, note: String) = div("stat") {
    appendChild(div("stat-label") { textContent = label })
    appendChild(div("stat-value") { textContent = value })
    appendChild(div("good") { textContent = note })
}

private fun activity(text: String, time: String) = div("activity") {
    appendChild(tag("span") { textContent = text })
    appendChild(tag("span", "muted") { textContent = time })
}

private fun taskRow(text: String, deadline: String) = div("task-row") {
    appendChild(tag("span") { textContent = "☐ $text" })
    appendChild(tag("span", "muted") { textContent = deadline })
}
