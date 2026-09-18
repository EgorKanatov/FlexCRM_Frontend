package crm.pages

import crm.Page
import crm.api.*
import crm.currentPage
import crm.renderApp
import crm.selectedClientId
import crm.utils.*
import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import org.w3c.dom.Element
import org.w3c.dom.HTMLInputElement
import org.w3c.dom.HTMLTextAreaElement

private val repository: CrmRepository = MockCrmRepository

fun renderProfile(): Element = div {
    val container = div()

    appendChild(div("page-head") {
        appendChild(button("← Клиенты", "secondary") {
            currentPage = Page.CLIENTS
            renderApp()
        })
        appendChild(button("+ Создать сделку", "primary") {
            // Можно оставить или вызвать добавление
        })
    })

    appendChild(container)
    container.textContent = "Загрузка профиля..."

    val clientId = selectedClientId
    if (clientId == null) {
        container.innerHTML = ""
        container.appendChild(div("panel") {
            appendChild(tag("h3") { textContent = "Клиент не выбран" })
            appendChild(button("Вернуться к списку", "primary") {
                currentPage = Page.CLIENTS
                renderApp()
            })
        })
        return@div
    }

    MainScope().launch {
        val client = repository.getClientById(clientId)
        container.innerHTML = ""

        if (client == null) {
            container.appendChild(div("panel") {
                appendChild(tag("h3") { textContent = "Клиент не найден" })
                appendChild(button("Вернуться к списку", "primary") {
                    currentPage = Page.CLIENTS
                    renderApp()
                })
            })
            return@launch
        }

        val notes = repository.getClientNotes(clientId)
        val comments = repository.getClientComments(clientId)

        container.appendChild(div("profile-head") {
            val initials = client.name.split(" ").let { parts ->
                if (parts.size >= 2) "${parts[0].take(1)}${parts[1].take(1)}" else client.name.take(2)
            }.uppercase()

            appendChild(div("avatar") { textContent = initials })
            appendChild(div {
                appendChild(tag("h1") { textContent = client.name })
                appendChild(div("muted") {
                    textContent = "${client.company} · "
                    val badgeClass = when (client.status) {
                        "Лид" -> "badge blue"
                        "Потенциальный" -> "badge orange"
                        else -> "badge"
                    }
                    appendChild(tag("span", badgeClass) { textContent = client.status })
                })
            })
            appendChild(button("Редактировать", "secondary") {
                showEditClientModal(client) {
                    renderApp()
                }
            }.apply {
                setAttribute("style", "margin-left: auto;")
            })
        })

        container.appendChild(div("profile-grid") {
            // Левая колонка: Контактная информация
            appendChild(div("profile-card") {
                appendChild(tag("h3") { textContent = "Контактная информация" })
                appendChild(field("Имя", client.name))
                appendChild(field("Компания", client.company))
                appendChild(field("Телефон", client.phone))
                appendChild(field("Email", client.email))
                appendChild(field("Должность", client.position))
                appendChild(field("Ответственный", client.responsibleUser))
                appendChild(field("Источник", client.source))
            })

            // Правая колонка: Заметки, теги и комментарии
            appendChild(div {
                // Заметки и теги
                appendChild(div("profile-card") {
                    setAttribute("style", "margin-bottom: 24px;")
                    appendChild(div {
                        setAttribute("style", "display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;")
                        appendChild(tag("h3") { textContent = "Заметки и теги" })
                        appendChild(button("+ Тег", "secondary") {
                            val newTag = window.prompt("Введите название тега:")
                            if (!newTag.isNullOrBlank() && !client.tags.contains(newTag)) {
                                MainScope().launch {
                                    val updated = client.copy(tags = client.tags + newTag)
                                    repository.updateClient(updated)
                                    renderApp()
                                }
                            }
                        })
                    })

                    appendChild(div("tags") {
                        if (client.tags.isEmpty()) {
                            appendChild(tag("span", "muted") { textContent = "Нет тегов" })
                        } else {
                            client.tags.forEach { tagText ->
                                appendChild(tag("span", "tag blue") {
                                    textContent = tagText
                                    setAttribute("style", "cursor: pointer; margin-right: 6px;")
                                    addEventListener("click", {
                                        if (window.confirm("Удалить тег \"$tagText\"?")) {
                                            MainScope().launch {
                                                val updated = client.copy(tags = client.tags.filter { it != tagText })
                                                repository.updateClient(updated)
                                                renderApp()
                                            }
                                        }
                                    })
                                })
                            }
                        }
                    })

                    appendChild(tag("hr").apply { setAttribute("style", "margin: 16px 0; border: none; border-top: 1px solid #eee;") })

                    val notesListDiv = div()
                    notesListDiv.innerHTML = ""
                    if (notes.isEmpty()) {
                        notesListDiv.appendChild(div("muted") { textContent = "Нет заметок" })
                    } else {
                        notes.forEach { note ->
                            notesListDiv.appendChild(div("field") {
                                setAttribute("style", "display: flex; justify-content: space-between; align-items: flex-start; padding: 8px 0; border-bottom: 1px solid #f0f0f0;")
                                appendChild(div {
                                    appendChild(tag("p") { textContent = note.text; setAttribute("style", "margin: 0 0 4px 0;") })
                                    appendChild(tag("span", "muted") { textContent = note.date; setAttribute("style", "font-size: 11px;") })
                                })
                                appendChild(button("✕", "link-btn") {
                                    MainScope().launch {
                                        repository.deleteNote(note.id)
                                        renderApp()
                                    }
                                }.apply { setAttribute("style", "color: #ff4d4f; padding: 0 4px;") })
                            })
                        }
                    }
                    appendChild(notesListDiv)

                    // Форма добавления заметки
                    val noteTextArea = (document.createElement("textarea") as HTMLTextAreaElement).apply {
                        className = "form-control"
                        placeholder = "Введите текст заметки..."
                        setAttribute("style", "margin-top: 12px; height: 60px; resize: vertical;")
                    }
                    appendChild(noteTextArea)
                    appendChild(button("Добавить заметку", "secondary") {
                        val text = noteTextArea.value.trim()
                        if (text.isNotBlank()) {
                            MainScope().launch {
                                repository.addNote(NoteDto(id = 0, clientId = client.id, text = text, date = "16.09.2026"))
                                renderApp()
                            }
                        }
                    }.apply { setAttribute("style", "margin-top: 8px;") })
                })

                // Комментарии
                appendChild(div("profile-card") {
                    appendChild(tag("h3") { textContent = "Комментарии" })

                    val commentsListDiv = div()
                    if (comments.isEmpty()) {
                        commentsListDiv.appendChild(div("muted") { textContent = "Пока нет комментариев" })
                    } else {
                        comments.forEach { comment ->
                            commentsListDiv.appendChild(div {
                                setAttribute("style", "padding: 8px 0; border-bottom: 1px solid #f0f0f0;")
                                appendChild(tag("p") {
                                    setAttribute("style", "margin: 0 0 4px 0;")
                                    appendChild(tag("strong") { textContent = "${comment.author}: " })
                                    appendChild(tag("span") { textContent = comment.text })
                                })
                                appendChild(tag("span", "muted") { textContent = comment.date; setAttribute("style", "font-size: 11px;") })
                            })
                        }
                    }
                    appendChild(commentsListDiv)

                    // Форма добавления комментария
                    val commentInput = (document.createElement("input") as HTMLInputElement).apply {
                        className = "form-control"
                        placeholder = "Написать комментарий..."
                        setAttribute("style", "margin-top: 12px;")
                    }
                    appendChild(commentInput)
                    appendChild(button("Отправить", "primary") {
                        val text = commentInput.value.trim()
                        if (text.isNotBlank()) {
                            MainScope().launch {
                                repository.addComment(CommentDto(id = 0, clientId = client.id, author = "Егор Канатов", text = text, date = "16.09.2026"))
                                renderApp()
                            }
                        }
                    }.apply { setAttribute("style", "margin-top: 8px;") })
                })
            })
        })
    }
}

private fun field(label: String, value: String) = div("field") {
    appendChild(tag("span", "muted") { textContent = label })
    appendChild(tag("strong") { textContent = value })
}

private fun showEditClientModal(client: ClientDto, onSuccess: () -> Unit) {
    val root = document.getElementById("root") ?: return

    val nameInput = (document.createElement("input") as HTMLInputElement).apply { className = "form-control"; value = client.name }
    val companyInput = (document.createElement("input") as HTMLInputElement).apply { className = "form-control"; value = client.company }
    val phoneInput = (document.createElement("input") as HTMLInputElement).apply { className = "form-control"; value = client.phone }
    val emailInput = (document.createElement("input") as HTMLInputElement).apply { className = "form-control"; value = client.email }
    val positionInput = (document.createElement("input") as HTMLInputElement).apply { className = "form-control"; value = client.position }
    val sourceInput = (document.createElement("input") as HTMLInputElement).apply { className = "form-control"; value = client.source }

    lateinit var modalBackdrop: Element

    val modal = div("modal-backdrop") {
        modalBackdrop = this
        appendChild(div("modal") {
            appendChild(tag("h2") { textContent = "Редактировать клиента" })

            appendChild(div("form-group") { appendChild(tag("label") { textContent = "Имя *" }); appendChild(nameInput) })
            appendChild(div("form-group") { appendChild(tag("label") { textContent = "Компания" }); appendChild(companyInput) })
            appendChild(div("form-group") { appendChild(tag("label") { textContent = "Телефон" }); appendChild(phoneInput) })
            appendChild(div("form-group") { appendChild(tag("label") { textContent = "Email" }); appendChild(emailInput) })
            appendChild(div("form-group") { appendChild(tag("label") { textContent = "Должность" }); appendChild(positionInput) })
            appendChild(div("form-group") { appendChild(tag("label") { textContent = "Источник" }); appendChild(sourceInput) })

            appendChild(div("modal-actions") {
                appendChild(button("Отмена", "secondary") {
                    root.removeChild(modalBackdrop)
                })
                appendChild(button("Сохранить", "primary") {
                    if (nameInput.value.isBlank()) {
                        window.alert("Имя не может быть пустым!")
                        return@button
                    }

                    val updatedClient = client.copy(
                        name = nameInput.value,
                        company = companyInput.value,
                        phone = phoneInput.value,
                        email = emailInput.value,
                        position = positionInput.value,
                        source = sourceInput.value
                    )

                    MainScope().launch {
                        repository.updateClient(updatedClient)
                        root.removeChild(modalBackdrop)
                        onSuccess()
                    }
                })
            })
        })
    }

    root.appendChild(modal)
}
