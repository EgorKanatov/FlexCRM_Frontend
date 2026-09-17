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
    val responsibleUser: String
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
