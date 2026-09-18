package crm.pages

import crm.api.CrmRepository
import crm.api.MockCrmRepository
import crm.renderApp
import crm.utils.*
import kotlinx.browser.window
import kotlinx.coroutines.MainScope
import kotlinx.coroutines.launch
import org.w3c.dom.Element

private val repository: CrmRepository = MockCrmRepository

fun renderFunnels(): Element = div {
    val stagesContainer = div()

    appendChild(div("page-head") {
        appendChild(div {
            appendChild(tag("h1") { textContent = "Воронки продаж" })
            appendChild(div("muted") { textContent = "Настройка этапов сделок" })
        })
        appendChild(button("+ Новая стадия", "primary") {
            val newStage = window.prompt("Введите название новой стадии:")
            if (!newStage.isNullOrBlank()) {
                MainScope().launch {
                    repository.addFunnelStage(newStage)
                    renderApp()
                }
            }
        })
    })

    appendChild(stagesContainer)
    stagesContainer.textContent = "Загрузка стадий..."

    MainScope().launch {
        val stages = repository.getFunnelStages()
        stagesContainer.innerHTML = ""

        stagesContainer.appendChild(div("panel") {
            appendChild(tag("h3") { textContent = "Основная воронка (B2B)" })

            stages.forEachIndexed { index, stage ->
                appendChild(div("field") {
                    setAttribute("style", "padding: 12px; background: #f9f9f9; margin-bottom: 8px; border-radius: 4px; border-left: 4px solid #0052cc;")
                    appendChild(tag("strong") { textContent = "${index + 1}. $stage" })
                })
            }
        })
    }
}
