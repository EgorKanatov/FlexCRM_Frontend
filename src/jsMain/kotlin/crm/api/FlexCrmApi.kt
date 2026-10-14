package crm.api

/**
 * Контракт, который использует UI.  Этот файл был потерян из рабочей копии,
 * из-за чего проект не мог даже скомпилироваться. Пока внешний API недоступен,
 * реализация ниже даёт приложению полностью рабочий локальный набор данных.
 */
data class ApiResponse<T>(val body: T)

data class ApiLoginRequest(val email: String, val password: String)
data class ApiRegisterRequest(
    val companyName: String,
    val email: String,
    val password: String,
    val firstName: String,
    val lastName: String
)

data class ApiUser(val id: String, val firstName: String, val lastName: String, val email: String, val role: String)
data class ApiAuthResult(val user: ApiUser)

data class ApiClientListItem(
    val id: String,
    val clientType: String,
    val firstName: String = "",
    val lastName: String = "",
    val companyName: String? = null,
    val email: String? = null,
    val phone: String? = null,
    val responsibleUserName: String? = null
)

data class ApiClientDetail(
    val id: String,
    val clientType: String,
    val firstName: String = "",
    val lastName: String = "",
    val companyName: String? = null,
    val email: String? = null,
    val phone: String? = null,
    val responsibleUserName: String? = null,
    val description: String? = null,
    val tags: List<String> = emptyList()
)

data class ApiPipeline(val id: String, val name: String)
data class ApiPipelineStage(val id: String, val name: String, val position: Int)
data class ApiDealClient(val companyName: String? = null, val firstName: String? = null, val lastName: String? = null)
data class ApiDeal(
    val id: String,
    val title: String,
    val client: ApiDealClient,
    val amount: Double = 0.0,
    val responsibleUserName: String? = null,
    val expectedCloseAt: String? = null,
    val createdAt: String = "2026-10-14T00:00:00Z"
)
data class ApiDealsStage(val name: String, val deals: List<ApiDeal>)
data class ApiDealsPipeline(val stages: List<ApiDealsStage>)
data class ApiDealsBoard(val pipelines: List<ApiDealsPipeline>)
data class ApiCreateDealRequest(
    val title: String,
    val clientId: String,
    val responsibleUserId: String,
    val pipelineId: String,
    val stageId: String,
    val amount: Double,
    val description: String? = null,
    val expectedCloseAt: String? = null
)

data class ApiGeneralTask(val title: String, val dueAt: String? = null)
data class ApiGeneralActivity(val action: String, val actorName: String, val createdAt: String)
data class ApiGeneralInformation(
    val countClients: Int,
    val countOfAllDeals: Int,
    val countTasks: Int,
    val tasks: List<ApiGeneralTask>,
    val activities: List<ApiGeneralActivity>
)

interface FlexCrmApi {
    suspend fun login(request: ApiLoginRequest): ApiResponse<ApiAuthResult>
    suspend fun register(request: ApiRegisterRequest): ApiResponse<ApiAuthResult>
    suspend fun logout()
    suspend fun getClients(): ApiResponse<List<ApiClientListItem>>
    suspend fun getClientById(id: String): ApiResponse<ApiClientDetail>
    suspend fun getUsers(): ApiResponse<List<ApiUser>>
    suspend fun getPipelines(): ApiResponse<List<ApiPipeline>>
    suspend fun getPipelineStages(pipelineId: String): ApiResponse<List<ApiPipelineStage>>
    suspend fun getDealsBoard(): ApiResponse<ApiDealsBoard>
    suspend fun createDeal(request: ApiCreateDealRequest): ApiResponse<ApiDeal>
    suspend fun getGeneralInformation(limit: Int = 10): ApiResponse<ApiGeneralInformation>
}

object FlexCrmApiProvider {
    val client: FlexCrmApi = LocalFlexCrmApi
}

private object LocalFlexCrmApi : FlexCrmApi {
    private const val pipelineId = "pipeline-1"
    private val stages = listOf("Новый лид", "Контакт установлен", "Переговоры", "Договор", "Успех")
    private var user = ApiUser("user-1", "Администратор", "FlexCRM", "admin@flexcrm.ru", "ADMIN")

    override suspend fun login(request: ApiLoginRequest) = ApiResponse(ApiAuthResult(user.copy(email = request.email)))

    override suspend fun register(request: ApiRegisterRequest): ApiResponse<ApiAuthResult> {
        user = ApiUser("user-1", request.firstName, request.lastName, request.email, "ADMIN")
        return ApiResponse(ApiAuthResult(user))
    }

    override suspend fun logout() = Unit

    override suspend fun getClients(): ApiResponse<List<ApiClientListItem>> = ApiResponse(
        MockCrmRepository.getClients().map { client ->
            ApiClientListItem(
                id = "client-${client.id}", clientType = "COMPANY", companyName = client.company,
                firstName = client.name.substringBefore(' '), lastName = client.name.substringAfter(' ', ""),
                email = client.email, phone = client.phone, responsibleUserName = client.responsibleUser
            )
        }
    )

    override suspend fun getClientById(id: String): ApiResponse<ApiClientDetail> {
        val client = MockCrmRepository.getClientById(id.substringAfterLast('-').toLongOrNull() ?: -1)
            ?: error("Клиент не найден")
        return ApiResponse(ApiClientDetail(
            id = id, clientType = "COMPANY", firstName = client.name.substringBefore(' '),
            lastName = client.name.substringAfter(' ', ""), companyName = client.company,
            email = client.email, phone = client.phone, responsibleUserName = client.responsibleUser,
            description = client.position, tags = client.tags
        ))
    }

    override suspend fun getUsers() = ApiResponse(listOf(
        user,
        ApiUser("user-2", "Булат", "", "bulat@flexcrm.ru", "MANAGER"),
        ApiUser("user-3", "Ярик", "", "yarik@flexcrm.ru", "MANAGER")
    ))

    override suspend fun getPipelines() = ApiResponse(listOf(ApiPipeline(pipelineId, "Основная воронка")))

    override suspend fun getPipelineStages(pipelineId: String) = ApiResponse(
        stages.mapIndexed { index, name -> ApiPipelineStage("stage-${index + 1}", name, index) }
    )

    override suspend fun getDealsBoard(): ApiResponse<ApiDealsBoard> {
        val deals = MockCrmRepository.getDeals()
        return ApiResponse(ApiDealsBoard(listOf(ApiDealsPipeline(stages.map { stage ->
            ApiDealsStage(stage, deals.filter { it.stage == stage }.map { deal ->
                ApiDeal("deal-${deal.id}", deal.title, ApiDealClient(companyName = deal.company), deal.amount, deal.responsibleUser, deal.date)
            })
        }))))
    }

    override suspend fun createDeal(request: ApiCreateDealRequest): ApiResponse<ApiDeal> {
        val client = getClientById(request.clientId).body
        val owner = getUsers().body.firstOrNull { it.id == request.responsibleUserId } ?: user
        val stage = getPipelineStages(request.pipelineId).body.firstOrNull { it.id == request.stageId }?.name ?: stages.first()
        val deal = MockCrmRepository.addDeal(DealDto(0, request.title, client.companyName ?: "Частное лицо", request.amount, "${owner.firstName} ${owner.lastName}".trim(), stage, request.expectedCloseAt ?: "2026-10-14"))
        return ApiResponse(ApiDeal("deal-${deal.id}", deal.title, ApiDealClient(companyName = deal.company), deal.amount, deal.responsibleUser, deal.date))
    }

    override suspend fun getGeneralInformation(limit: Int): ApiResponse<ApiGeneralInformation> {
        val clients = MockCrmRepository.getClients()
        val deals = MockCrmRepository.getDeals()
        val tasks = MockCrmRepository.getTasks()
        return ApiResponse(ApiGeneralInformation(
            countClients = clients.size, countOfAllDeals = deals.size, countTasks = tasks.size,
            tasks = tasks.take(limit).map { ApiGeneralTask(it.title, it.deadline) },
            activities = listOf(
                ApiGeneralActivity("DEAL_CREATED", user.firstName, "2026-10-14T09:00:00Z"),
                ApiGeneralActivity("TASK_CREATED", "Булат", "2026-10-14T08:30:00Z")
            )
        ))
    }
}
