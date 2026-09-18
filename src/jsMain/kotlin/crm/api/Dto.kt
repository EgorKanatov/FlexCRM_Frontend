package crm.api

import kotlinx.serialization.Serializable

@Serializable
data class ClientDto(
    val id: Long,
    val name: String,
    val company: String,
    val phone: String,
    val email: String,
    val status: String,
    val responsibleUser: String,
    val position: String = "Менеджер",
    val source: String = "Сайт",
    val tags: List<String> = listOf("B2B", "CRM")
)

@Serializable
data class NoteDto(
    val id: Long,
    val clientId: Long,
    val text: String,
    val date: String
)

@Serializable
data class CommentDto(
    val id: Long,
    val clientId: Long,
    val author: String,
    val text: String,
    val date: String
)

@Serializable
data class DealDto(
    val id: Long,
    val title: String,
    val company: String,
    val amount: Int,
    val responsibleUser: String,
    val stage: String,
    val date: String
)

@Serializable
data class TaskDto(
    val id: Long,
    val title: String,
    val deadline: String,
    val priority: String
)

@Serializable
data class SettingsDto(
    val name: String,
    val email: String,
    val notifyEmail: Boolean,
    val notifyTelegram: Boolean
)
