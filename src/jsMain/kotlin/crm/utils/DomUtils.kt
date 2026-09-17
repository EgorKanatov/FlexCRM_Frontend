package crm.utils

import kotlinx.browser.document
import org.w3c.dom.Element
import org.w3c.dom.HTMLButtonElement

fun div(cssClass: String = "", block: Element.() -> Unit = {}): Element = tag("div", cssClass, block)

fun tag(name: String, cssClass: String = "", block: Element.() -> Unit = {}): Element =
    document.createElement(name).apply {
        if (cssClass.isNotEmpty()) className = cssClass
        block()
    }

fun button(text: String, cssClass: String = "", onClick: () -> Unit): HTMLButtonElement =
    (document.createElement("button") as HTMLButtonElement).apply {
        if (cssClass.isNotEmpty()) className = cssClass
        textContent = text
        onclick = { onClick() }
    }

fun money(value: Int): String = value.toString().reversed().chunked(3).joinToString(" ").reversed() + " ₽"
