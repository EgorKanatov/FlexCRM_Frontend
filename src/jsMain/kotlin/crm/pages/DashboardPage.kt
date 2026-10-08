package crm.pages

import crm.Page
import crm.api.CrmRepository
import crm.api.MockCrmRepository
import crm.currentPage
import crm.currentUser
import crm.renderApp
import crm.utils.*
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import org.w3c.dom.Element

private val repository: CrmRepository = MockCrmRepository

fun renderDashboard(): Element = div("dashboard-page") {
    val overview = div("dashboard-content")
    appendChild(div("dashboard-hero") {
        appendChild(div("dashboard-intro") {
            appendChild(div("dashboard-eyebrow") { textContent = "ОБЗОР КОМАНДЫ" })
            val firstName = currentUser?.name?.trim()?.substringBefore(" ").orEmpty().ifBlank { "коллега" }
            appendChild(tag("h1") { textContent = "Рады видеть, $firstName" })
            appendChild(div("dashboard-subtitle") { textContent = "Состояние клиентов, сделок и задач в одном месте." })
        })
        appendChild(div("dashboard-date") {
            appendChild(div("dashboard-date-mark") { textContent = "СЕГОДНЯ" })
            appendChild(tag("strong") {
                textContent = js("new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })") as String
            })
        })
    })

    overview.textContent = "Загружаем обзор..."
    appendChild(overview)

    MainScope().launch {
        runCatching {
            val stats = repository.getDashboardStats()
            val tasks = repository.getTasks().sortedBy { it.deadline }
            val deals = repository.getDeals()
            val stages = repository.getFunnelStages()

            overview.innerHTML = ""
            overview.appendChild(div("dashboard-stats") {
                appendChild(stat("Клиентская база", stats.clientsCount.toString(), "контактов", "◉", "mint"))
                appendChild(stat("Все сделки", stats.dealsCount.toString(), "в воронке", "↗", "blue"))
                appendChild(stat("В работе", stats.activeDealsCount.toString(), "${stats.dealsCount - stats.activeDealsCount} закрыто", "◷", "amber"))
                appendChild(stat("Задачи", tasks.size.toString(), "назначено команде", "✓", "coral"))
            })

            overview.appendChild(div("dashboard-columns") {
                appendChild(div("dashboard-panel dashboard-tasks") {
                    appendChild(div("dashboard-panel-head") {
                        appendChild(div {
                            appendChild(tag("h2") { textContent = "Задачи команды" })
                            appendChild(div("muted") { textContent = "Ближайшие сроки и исполнители" })
                        })
                        appendChild(button("Все задачи →", "dashboard-link") {
                            currentPage = Page.TASKS
                            renderApp()
                        })
                    })

                    if (tasks.isEmpty()) {
                        appendChild(div("dashboard-empty") { textContent = "Пока нет задач. Можно создать первую." })
                    } else {
                        tasks.take(5).forEach { task ->
                            appendChild(div("dashboard-task-row") {
                                appendChild(div("dashboard-task-check") { textContent = "•" })
                                appendChild(div("dashboard-task-main") {
                                    appendChild(tag("strong") { textContent = task.title })
                                    appendChild(div("dashboard-task-meta") {
                                        appendChild(tag("span") { textContent = task.assignee })
                                        appendChild(tag("span") { textContent = task.deadline.replace("T", " ") })
                                    })
                                })
                                val priorityClass = when (task.priority) {
                                    "Высокий" -> "dashboard-priority high"
                                    "Средний" -> "dashboard-priority medium"
                                    else -> "dashboard-priority low"
                                }
                                appendChild(tag("span", priorityClass) { textContent = task.priority })
                            })
                        }
                    }
                })

                appendChild(div("dashboard-panel dashboard-pipeline") {
                    appendChild(div("dashboard-panel-head") {
                        appendChild(div {
                            appendChild(tag("h2") { textContent = "Воронка продаж" })
                            appendChild(div("muted") { textContent = "Распределение сделок по этапам" })
                        })
                        appendChild(button("К сделкам →", "dashboard-link") {
                            currentPage = Page.DEALS
                            renderApp()
                        })
                    })

                    val maxCount = (stages.maxOfOrNull { stage -> deals.count { it.stage == stage } } ?: 0).coerceAtLeast(1)
                    stages.forEachIndexed { index, stage ->
                        val stageDeals = deals.filter { it.stage == stage }
                        val percentage = (stageDeals.size * 100 / maxCount).coerceAtLeast(if (stageDeals.isEmpty()) 0 else 8)
                        appendChild(div("dashboard-stage") {
                            appendChild(div("dashboard-stage-label") {
                                appendChild(tag("span") { textContent = stage })
                                appendChild(tag("strong") { textContent = stageDeals.size.toString() })
                            })
                            appendChild(div("dashboard-stage-track stage-${index % 5}") {
                                appendChild(div("dashboard-stage-fill").apply {
                                    setAttribute("style", "width: ${percentage}%;")
                                })
                            })
                        })
                    }

                    val openAmount = deals.filter { it.stage != "Успех" }.sumOf { it.amount }
                    appendChild(div("dashboard-pipeline-total") {
                        appendChild(div("muted") { textContent = "Сумма активных сделок" })
                        appendChild(tag("strong") { textContent = money(openAmount) })
                    })
                })
            })
        }.onFailure { error ->
            overview.innerHTML = ""
            overview.appendChild(div("dashboard-load-error") {
                appendChild(tag("strong") { textContent = "Не удалось загрузить обзор" })
                appendChild(div("muted") { textContent = error.message ?: "Попробуйте обновить страницу" })
            })
        }
    }
}

private fun stat(label: String, value: String, note: String, icon: String, tone: String) = div("dashboard-stat $tone") {
    appendChild(div("dashboard-stat-top") {
        appendChild(div("dashboard-stat-icon") { textContent = icon })
        appendChild(div("dashboard-stat-note") { textContent = note })
    })
    appendChild(div("dashboard-stat-label") { textContent = label })
    appendChild(div("dashboard-stat-value") { textContent = value })
}
