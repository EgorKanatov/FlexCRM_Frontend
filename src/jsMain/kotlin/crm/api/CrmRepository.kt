package crm.api

import kotlinx.coroutines.delay

interface CrmRepository {
    suspend fun getClients(): List<ClientDto>
    suspend fun addClient(client: ClientDto): ClientDto
    suspend fun getClientById(id: Long): ClientDto?
    suspend fun updateClient(client: ClientDto)
    suspend fun getDeals(): List<DealDto>
    suspend fun getDashboardStats(): DashboardStatsDto
    suspend fun addDeal(deal: DealDto): DealDto
    suspend fun getTasks(): List<TaskDto>
    suspend fun addTask(task: TaskDto): TaskDto
    suspend fun updateTask(task: TaskDto)
    suspend fun getFunnelStages(): List<String>
    suspend fun addFunnelStage(stage: String): String
    suspend fun deleteFunnelStage(stage: String)
    suspend fun updateDealStage(dealId: Long, newStage: String)
    suspend fun deleteDeal(dealId: Long)
    suspend fun getSettings(): SettingsDto
    suspend fun updateSettings(settings: SettingsDto): SettingsDto
    suspend fun getClientNotes(clientId: Long): List<NoteDto>
    suspend fun addNote(note: NoteDto): NoteDto
    suspend fun deleteNote(noteId: Long)
    suspend fun getClientComments(clientId: Long): List<CommentDto>
    suspend fun addComment(comment: CommentDto): CommentDto
    suspend fun deleteTask(taskId: Long)
    suspend fun getEmployees(): List<EmployeeDto>
    suspend fun getTaskAssignees(): List<EmployeeDto>
    suspend fun addEmployee(employee: EmployeeDto): EmployeeDto
    suspend fun deleteEmployee(employeeId: Long)
}

data class DashboardStatsDto(
    val clientsCount: Int,
    val dealsCount: Int,
    val activeDealsCount: Int,
    val tasksTodayCount: Int
)

object MockCrmRepository : CrmRepository {
    private val mockClients = mutableListOf(
        ClientDto(1, "Иван Петров", "ООО Альфа", "+7 912 345-67-89", "ivan@alfa.ru", "Активный", "Булат", "Генеральный директор", "Сайт", listOf("B2B", "CRM", "Приоритетный")),
        ClientDto(2, "Анна Смирнова", "ИП Смирнова", "+7 987 654-32-10", "anna@mail.ru", "Лид", "Егор", "ИП", "Рекомендация", listOf("VIP")),
        ClientDto(3, "Дмитрий Козлов", "TechSoft", "+7 900 111-22-33", "dk@techsoft.ru", "Активный", "Ярик", "CTO", "Выставка", listOf("Tech")),
        ClientDto(4, "Ольга Волкова", "ООО Бета", "+7 955 123-45-67", "olga@beta.ru", "Потенциальный", "Булат", "Директор по маркетингу", "Реклама", listOf("B2B")),
        ClientDto(5, "Мария Кузнецова", "ООО Гамма", "+7 903 333-44-55", "maria@gamma.ru", "Активный", "Ярик", "Менеджер", "Сайт", listOf("Логистика"))
    )

    private val mockDeals = mutableListOf(
        DealDto(1, "Разработка сайта", "ООО Ромашка", 120_000.0, "Иван Петров", "Новый лид", "12.09.2026"),
        DealDto(2, "Аудит", "ИП Сидоров", 80_000.0, "Алексей Сидоров", "Новый лид", "11.09.2026"),
        DealDto(3, "Поставка ПО", "ООО Техно", 220_000.0, "Дмитрий Козлов", "Новый лид", "10.09.2026"),
        DealDto(4, "Консультация", "ИП Петров", 150_000.0, "Петр Петров", "Контакт установлен", "10.09.2026"),
        DealDto(5, "Лицензии", "ООО Вектор", 130_000.0, "Анна Смирнова", "Контакт установлен", "09.09.2026"),
        DealDto(6, "Внедрение CRM", "TechSoft", 240_000.0, "Дмитрий Козлов", "Переговоры", "12.09.2026"),
        DealDto(7, "Серверы", "ООО Бета", 80_000.0, "Ольга Волкова", "Переговоры", "11.09.2026"),
        DealDto(8, "Поддержка", "ООО Альфа", 120_000.0, "Иван Петров", "Договор", "10.09.2026"),
        DealDto(9, "Доработка", "ООО Гамма", 240_000.0, "Мария Кузнецова", "Успех", "08.09.2026")
    )

    private val mockTasks = mutableListOf(
        TaskDto(1, "Позвонить клиенту ООО Альфа", "2026-09-15T14:00", "Высокий", "Булат"),
        TaskDto(2, "Отправить договор ИП Сидоров", "2026-09-15T17:00", "Средний", "Булат"),
        TaskDto(3, "Подготовить презентацию для TechSoft", "2026-09-16T10:00", "Средний", "Ярик"),
        TaskDto(4, "Проверить документы", "2026-09-13T12:00", "Низкий", "Ярик")
    )

    private val mockEmployees = mutableListOf(
        EmployeeDto(1, "Егор Канатов", "admin@flexcrm.ru", "Владелец", "+7 900 111-22-33"),
        EmployeeDto(2, "Булат", "bulat@flexcrm.ru", "Менеджер", "+7 900 222-33-44"),
        EmployeeDto(3, "Ярик", "yarik@flexcrm.ru", "Менеджер", "+7 900 333-44-55")
    )

    private val mockFunnelStages = mutableListOf(
        "Новый лид", "Контакт установлен", "Переговоры", "Договор", "Успех"
    )

    private var mockSettings = SettingsDto(
        name = "Егор Канатов",
        email = "admin@flexcrm.ru"
    )

    private val mockNotes = mutableListOf(
        NoteDto(1, 1, "Потенциально крупный клиент. Интересуется внедрением CRM для отдела продаж.", "12.09.2026"),
        NoteDto(2, 1, "Просили выслать коммерческое предложение до пятницы.", "13.09.2026")
    )

    private val mockComments = mutableListOf(
        CommentDto(1, 1, "Егор", "Созвонились, ждём документы от клиента.", "14.09.2026")
    )

    override suspend fun getClients(): List<ClientDto> {
        delay(200)
        return mockClients.toList()
    }

    override suspend fun addClient(client: ClientDto): ClientDto {
        delay(300)
        val newClient = client.copy(id = (mockClients.size + 1).toLong())
        mockClients.add(0, newClient)
        return newClient
    }

    override suspend fun getClientById(id: Long): ClientDto? {
        delay(150)
        return mockClients.find { it.id == id }
    }

    override suspend fun updateClient(client: ClientDto) {
        delay(300)
        val index = mockClients.indexOfFirst { it.id == client.id }
        if (index != -1) {
            mockClients[index] = client
        }
    }

    override suspend fun getDeals(): List<DealDto> {
        delay(200)
        return mockDeals
    }

    override suspend fun getDashboardStats(): DashboardStatsDto {
        delay(150)

        val currentClientsCount = mockClients.size
        val currentDealsCount = mockDeals.size
        val currentActiveDeals = mockDeals.count { it.stage != "Успех" }
        val currentTasksToday = mockTasks.size

        return DashboardStatsDto(
            clientsCount = currentClientsCount,
            dealsCount = currentDealsCount,
            activeDealsCount = currentActiveDeals,
            tasksTodayCount = currentTasksToday
        )
    }

    override suspend fun addDeal(deal: DealDto): DealDto {
        delay(300)
        val newDeal = deal.copy(id = (mockDeals.size + 1).toLong())
        mockDeals.add(0, newDeal)
        return newDeal
    }

    override suspend fun getTasks(): List<TaskDto> {
        delay(200)
        return mockTasks.toList()
    }

    override suspend fun addTask(task: TaskDto): TaskDto {
        delay(300)
        val newTask = task.copy(id = (mockTasks.size + 1).toLong())
        mockTasks.add(newTask)
        return newTask
    }

    override suspend fun updateTask(task: TaskDto) {
        delay(200)
        val index = mockTasks.indexOfFirst { it.id == task.id }
        if (index != -1) mockTasks[index] = task
    }

    override suspend fun deleteTask(taskId: Long) {
        delay(200)
        mockTasks.removeAll { it.id == taskId }
    }

    override suspend fun getEmployees(): List<EmployeeDto> {
        delay(200)
        return mockEmployees.toList()
    }

    override suspend fun getTaskAssignees(): List<EmployeeDto> {
        delay(150)
        return mockEmployees.filterNot { it.isAdministrator() }
    }

    override suspend fun addEmployee(employee: EmployeeDto): EmployeeDto {
        require(!employee.isAdministrator()) { "Нельзя создать дополнительную учётную запись администратора" }
        delay(300)
        val newEmp = employee.copy(id = (mockEmployees.size + 1).toLong())
        mockEmployees.add(newEmp)
        return newEmp
    }

    override suspend fun deleteEmployee(employeeId: Long) {
        delay(200)
        mockEmployees.removeAll { it.id == employeeId && !it.isAdministrator() }
    }

    override suspend fun getFunnelStages(): List<String> {
        delay(200)
        return mockFunnelStages.toList()
    }

    override suspend fun addFunnelStage(stage: String): String {
        delay(300)
        if (!mockFunnelStages.contains(stage)) {
            mockFunnelStages.add(stage)
        }
        return stage
    }

    override suspend fun deleteFunnelStage(stage: String) {
        delay(200)
        mockFunnelStages.remove(stage)
    }

    override suspend fun updateDealStage(dealId: Long, newStage: String) {
        delay(100)
        val index = mockDeals.indexOfFirst { it.id == dealId }
        if (index != -1) {
            mockDeals[index] = mockDeals[index].copy(stage = newStage)
        }
    }

    override suspend fun deleteDeal(dealId: Long) {
        delay(200)
        mockDeals.removeAll { it.id == dealId }
    }

    override suspend fun getSettings(): SettingsDto {
        delay(200)
        return mockSettings
    }

    override suspend fun updateSettings(settings: SettingsDto): SettingsDto {
        delay(300)
        mockSettings = settings
        return settings
    }

    override suspend fun getClientNotes(clientId: Long): List<NoteDto> {
        delay(150)
        return mockNotes.filter { it.clientId == clientId }
    }

    override suspend fun addNote(note: NoteDto): NoteDto {
        delay(200)
        val newNote = note.copy(id = (mockNotes.size + 1).toLong())
        mockNotes.add(newNote)
        return newNote
    }

    override suspend fun deleteNote(noteId: Long) {
        delay(200)
        mockNotes.removeAll { it.id == noteId }
    }

    override suspend fun getClientComments(clientId: Long): List<CommentDto> {
        delay(150)
        return mockComments.filter { it.clientId == clientId }
    }

    override suspend fun addComment(comment: CommentDto): CommentDto {
        delay(200)
        val newComment = comment.copy(id = (mockComments.size + 1).toLong())
        mockComments.add(newComment)
        return newComment
    }
}

private fun EmployeeDto.isAdministrator(): Boolean =
    role.contains("администратор", ignoreCase = true) || role.contains("владелец", ignoreCase = true)

object ApiCrmRepository : CrmRepository by MockCrmRepository {
    private val api: FlexCrmApi
        get() = FlexCrmApiProvider.client

    override suspend fun getClients(): List<ClientDto> = api.getClients().body.map { it.toClientDto() }

    override suspend fun getClientById(id: Long): ClientDto? {
        val client = api.getClients().body.firstOrNull { it.id.toLocalId() == id } ?: return null
        return api.getClientById(client.id).body.toClientDto()
    }

    override suspend fun getDeals(): List<DealDto> = api.getDealsBoard().body.pipelines.flatMap { pipeline ->
        pipeline.stages.flatMap { stage ->
            stage.deals.map { deal ->
                DealDto(
                    id = deal.id.toLocalId(),
                    title = deal.title,
                    company = deal.client.companyName ?: "${deal.client.firstName} ${deal.client.lastName}".trim(),
                    amount = deal.amount ?: 0.0,
                    responsibleUser = deal.responsibleUserName ?: "-",
                    stage = stage.name,
                    date = deal.expectedCloseAt?.substringBefore('T') ?: "-"
                )
            }
        }
    }

    override suspend fun getDashboardStats(): DashboardStatsDto {
        val overview = api.getGeneralInformation().body
        val deals = getDeals()
        return DashboardStatsDto(
            clientsCount = overview.countClients,
            dealsCount = overview.countOfAllDeals,
            activeDealsCount = deals.count { it.stage != "Успех" },
            tasksTodayCount = overview.countTasks
        )
    }

    override suspend fun getFunnelStages(): List<String> {
        val pipeline = api.getPipelines().body.firstOrNull() ?: return emptyList()
        return api.getPipelineStages(pipeline.id).body.sortedBy { it.position }.map { it.name }
    }

    override suspend fun getTaskAssignees(): List<EmployeeDto> = api.getUsers().body.map {
        EmployeeDto(it.id.toLocalId(), listOf(it.firstName, it.lastName).filter(String::isNotBlank).joinToString(" "), "-", "Сотрудник", "-")
    }

    override suspend fun addDeal(deal: DealDto): DealDto {
        val clients = api.getClients().body
        val client = clients.firstOrNull { it.companyName == deal.company }
            ?: clients.firstOrNull { "${it.firstName} ${it.lastName}".trim() == deal.company }
            ?: error("Выберите клиента из списка")
        val users = api.getUsers().body
        val owner = users.firstOrNull { "${it.firstName} ${it.lastName}".trim() == deal.responsibleUser }
            ?: users.firstOrNull { it.firstName == deal.responsibleUser }
            ?: error("Выберите ответственного сотрудника из списка")
        val pipeline = api.getPipelines().body.firstOrNull() ?: error("Нет доступных воронок")
        val stage = api.getPipelineStages(pipeline.id).body.firstOrNull { it.name == deal.stage }
            ?: error("Выберите стадию из списка")

        val created = api.createDeal(ApiCreateDealRequest(
            title = deal.title,
            clientId = client.id,
            responsibleUserId = owner.id,
            pipelineId = pipeline.id,
            stageId = stage.id,
            amount = deal.amount
        )).body
        return DealDto(
            id = created.id.toLocalId(),
            title = created.title,
            company = client.companyName ?: "${client.firstName} ${client.lastName}".trim(),
            amount = created.amount,
            responsibleUser = "${owner.firstName} ${owner.lastName}".trim(),
            stage = stage.name,
            date = created.createdAt.substringBefore('T')
        )
    }

    private fun ApiClientListItem.toClientDto() = ClientDto(
        id = id.toLocalId(),
        name = listOf(firstName, lastName).filter(String::isNotBlank).joinToString(" "),
        company = companyName ?: "Частное лицо",
        phone = phone ?: "-",
        email = email ?: "-",
        status = if (clientType == "COMPANY") "Компания" else "Физ. лицо",
        responsibleUser = responsibleUserName ?: "-"
    )

    private fun ApiClientDetail.toClientDto() = ApiClientListItem(
        id = id,
        clientType = clientType,
        firstName = firstName,
        lastName = lastName,
        companyName = companyName,
        email = email,
        phone = phone,
        responsibleUserName = responsibleUserName
    ).toClientDto().copy(
        position = description ?: "Менеджер",
        tags = tags
    )

    private fun String.toLocalId(): Long = substringAfterLast('-').toLongOrNull() ?: 0L
}
