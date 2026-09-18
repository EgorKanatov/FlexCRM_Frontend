package crm.pages

import crm.api.CrmRepository
import crm.api.MockCrmRepository
import crm.api.TaskDto
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

fun renderTasks(): Element = div {
    val listContainer = div()

    appendChild(div("page-head") {
        appendChild(div {
            appendChild(tag("h1") { textContent = "Задачи" })
            appendChild(div("muted") { textContent = "Список дел и поручений" })
        })
        appendChild(button("+ Добавить задачу", "primary") {
            showAddTaskModal {
                renderApp()
            }
        })
    })

    appendChild(listContainer)
    listContainer.textContent = "Загрузка задач..."

    MainScope().launch {
        val tasks = repository.getTasks()
        listContainer.innerHTML = ""

        listContainer.appendChild(div("panel") {
            if (tasks.isEmpty()) {
                appendChild(div {
                    setAttribute("style", "padding: 16px; text-align: center; color: #888;")
                    textContent = "Нет активных задач"
                })
            } else {
                tasks.forEach { task ->
                    appendChild(taskItem(task.title, task.deadline, task.priority))
                }
            }
        })
    }
}

private fun taskItem(title: String, deadline: String, priority: String) = div("task-row") {
    setAttribute("style", "display: flex; justify-content: space-between; align-items: center; padding: 12px; border-bottom: 1px solid #eee;")

    appendChild(div {
        appendChild(tag("strong") { textContent = title })
        appendChild(tag("br"))
        appendChild(tag("span", "muted") { textContent = deadline })
    })

    val badgeClass = when (priority) {
        "Высокий" -> "badge orange"
        "Средний" -> "badge blue"
        else -> "badge"
    }
    appendChild(tag("span", badgeClass) { textContent = priority })
}

private fun showAddTaskModal(onSuccess: () -> Unit) {
    val root = document.getElementById("root") ?: return

    val titleInput = (document.createElement("input") as HTMLInputElement).apply { className = "form-control"; placeholder = "Название задачи" }
    val deadlineInput = (document.createElement("input") as HTMLInputElement).apply { className = "form-control"; placeholder = "Сегодня, 18:00" }

    val prioritySelect = (document.createElement("select") as HTMLSelectElement).apply {
        className = "form-control"
        innerHTML = """
            <option value="Высокий">Высокий</option>
            <option value="Средний">Средний</option>
            <option value="Низкий">Низкий</option>
        """.trimIndent()
    }

    lateinit var modalBackdrop: Element

    val modal = div("modal-backdrop") {
        modalBackdrop = this
        appendChild(div("modal") {
            appendChild(tag("h2") { textContent = "Новая задача" })

            appendChild(div("form-group") { appendChild(tag("label") { textContent = "Название *" }); appendChild(titleInput) })
            appendChild(div("form-group") { appendChild(tag("label") { textContent = "Срок *" }); appendChild(deadlineInput) })
            appendChild(div("form-group") { appendChild(tag("label") { textContent = "Приоритет" }); appendChild(prioritySelect) })

            appendChild(div("modal-actions") {
                appendChild(button("Отмена", "secondary") {
                    root.removeChild(modalBackdrop)
                })
                appendChild(button("Сохранить", "primary") {
                    if (titleInput.value.isBlank() || deadlineInput.value.isBlank()) {
                        window.alert("Заполните название и срок!")
                        return@button
                    }

                    val newTask = TaskDto(
                        id = 0,
                        title = titleInput.value,
                        deadline = deadlineInput.value,
                        priority = prioritySelect.value
                    )

                    MainScope().launch {
                        repository.addTask(newTask)
                        root.removeChild(modalBackdrop)
                        onSuccess()
                    }
                })
            })
        })
    }

    root.appendChild(modal)
}
