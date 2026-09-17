package crm.models

data class Client(
    val id: Int,
    val name: String,
    val company: String,
    val phone: String,
    val email: String,
    val status: String,
    val owner: String
)

data class Deal(
    val id: Int,
    val company: String,
    val amount: Int,
    val owner: String,
    val stage: String,
    val date: String
)
