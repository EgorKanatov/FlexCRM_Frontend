package crm.pages

import crm.api.CrmRepository
import crm.api.MockCrmRepository
import crm.api.SettingsDto
import crm.utils.*
import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import org.w3c.dom.Element
import org.w3c.dom.HTMLInputElement

private val repository: CrmRepository = MockCrmRepository

fun renderSettings(): Element = div {
    val nameInput = (document.createElement("input") as HTMLInputElement).apply { className = "form-control" }
    val emailInput = (document.createElement("input") as HTMLInputElement).apply { className = "form-control" }
    val notifyEmailInput = (document.createElement("input") as HTMLInputElement).apply { type = "checkbox" }
    val notifyTelegramInput = (document.createElement("input") as HTMLInputElement).apply { type = "checkbox" }

    appendChild(div("page-head") {
        appendChild(div {
            appendChild(tag("h1") { textContent = "Настройки" })
            appendChild(div("muted") { textContent = "Конфигурация системы и профиль" })
        })
        appendChild(button("Сохранить", "primary") {
            val updated = SettingsDto(
                name = nameInput.value,
                email = emailInput.value,
                notifyEmail = notifyEmailInput.checked,
                notifyTelegram = notifyTelegramInput.checked
            )
            MainScope().launch {
                repository.updateSettings(updated)
                window.alert("Сохранено!")
            }
        })
    })

    appendChild(div {
        setAttribute("style", "display: flex; gap: 24px;")

        appendChild(div("panel") {
            setAttribute("style", "flex: 1;")
            appendChild(tag("h3") { textContent = "Личные данные" })

            appendChild(div("form-group") {
                appendChild(tag("label") { textContent = "Имя" })
                appendChild(nameInput)
            })
            appendChild(div("form-group") {
                appendChild(tag("label") { textContent = "Email" })
                appendChild(emailInput)
            })
        })

        appendChild(div("panel") {
            setAttribute("style", "flex: 1;")
            appendChild(tag("h3") { textContent = "Уведомления" })

            appendChild(div("form-group") {
                appendChild(tag("label") {
                    appendChild(notifyEmailInput)
                    appendChild(tag("span") { textContent = " Email о новых задачах" })
                })
            })
            appendChild(div("form-group") {
                appendChild(tag("label") {
                    appendChild(notifyTelegramInput)
                    appendChild(tag("span") { textContent = " Уведомления в Telegram" })
                })
            })
        })
    })

    MainScope().launch {
        val settings = repository.getSettings()
        nameInput.value = settings.name
        emailInput.value = settings.email
        notifyEmailInput.checked = settings.notifyEmail
        notifyTelegramInput.checked = settings.notifyTelegram
    }
}
