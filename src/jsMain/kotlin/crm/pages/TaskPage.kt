package crm.pages

import crm.api.CrmRepository
import crm.api.EmployeeDto
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
            MainScope().launch {
                val assignees = repository.getTaskAssignees()
                if (assignees.isEmpty()) {
                    window.alert("Нет сотрудников, которым можно назначить задачу")
                } else {
                    showAddTaskModal(assignees) {
                        renderApp()
                    }
                }
            }
        })
    })

    appendChild(listContainer)
    listContainer.textContent = "Загрузка задач..."

    MainScope().launch {
        val tasks = repository.getTasks()
        val assignees = repository.getTaskAssignees()
        listContainer.innerHTML = ""

        listContainer.appendChild(div("panel") {
            if (tasks.isEmpty()) {
                appendChild(div {
                    setAttribute("style", "padding: 16px; text-align: center; color: #888;")
                    textContent = "Нет активных задач"
                })
            } else {
                tasks.forEach { task ->
                    appendChild(taskItem(task, assignees) {
                        renderApp()
                    })
                }
            }
        })
    }
}

private fun taskItem(task: TaskDto, assignees: List<EmployeeDto>, onDelete: () -> Unit) = div("task-row") {
    setAttribute("style", "display: flex; justify-content: space-between; align-items: center; padding: 12px; border-bottom: 1px solid #eee;")

    appendChild(div {
        appendChild(tag("strong") { textContent = task.title })
        appendChild(tag("br"))
        appendChild(tag("span", "muted") { textContent = "Срок: ${task.deadline.replace("T", " ")}" })
        val assigneeSelect = (document.createElement("select") as HTMLSelectElement).apply {
            className = "form-control task-assignee"
            title = "Переназначить ответственного"
            assignees.forEach { employee ->
                val option = document.createElement("option")
                option.textContent = employee.name
                option.setAttribute("value", employee.name)
                appendChild(option)
            }
            value = task.assignee
            addEventListener("change", {
                MainScope().launch {
                    repository.updateTask(task.copy(assignee = value))
                    onDelete()
                }
            })
        }
        appendChild(div("task-assignee-control") {
            appendChild(tag("span", "muted") { textContent = "Ответственный" })
            appendChild(assigneeSelect)
        })
    })

    appendChild(div {
        setAttribute("style", "display: flex; align-items: center; gap: 12px;")
        val badgeClass = when (task.priority) {
            "Высокий" -> "badge orange"
            "Средний" -> "badge blue"
            else -> "badge"
        }
        appendChild(tag("span", badgeClass) { textContent = task.priority })

        appendChild(button("Удалить", "secondary") {
            if (window.confirm("Удалить задачу \"${task.title}\"?")) {
                MainScope().launch {
                    repository.deleteTask(task.id)
                    onDelete()
                }
            }
        }.apply {
            setAttribute("style", "font-size: 11px; padding: 4px 8px; color: #e53e3e; border-color: #fed7d7;")
        })
    })
}

private fun showAddTaskModal(assignees: List<EmployeeDto>, onSuccess: () -> Unit) {
    val root = document.getElementById("root") ?: return

    val titleInput = (document.createElement("input") as HTMLInputElement).apply {
        className = "form-control"
        placeholder = "Название задачи"
    }

    // Date & Time picker
    val deadlineInput = (document.createElement("input") as HTMLInputElement).apply {
        className = "form-control"
        type = "datetime-local"
    }

    val assigneeSelect = (document.createElement("select") as HTMLSelectElement).apply {
        className = "form-control"
        assignees.forEach { employee ->
            val option = document.createElement("option")
            option.textContent = employee.name
            option.setAttribute("value", employee.name)
            appendChild(option)
        }
    }

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
            appendChild(div("form-group") { appendChild(tag("label") { textContent = "Дата и время выполнения *" }); appendChild(deadlineInput) })
            appendChild(div("form-group") { appendChild(tag("label") { textContent = "Исполнитель *" }); appendChild(assigneeSelect) })
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
                        priority = prioritySelect.value,
                        assignee = assigneeSelect.value
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
