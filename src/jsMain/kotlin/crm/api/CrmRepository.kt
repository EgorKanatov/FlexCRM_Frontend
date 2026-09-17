package crm.api

import kotlinx.coroutines.delay

interface CrmRepository {
    suspend fun getClients(): List<ClientDto>
    suspend fun addClient(client: ClientDto): ClientDto
    suspend fun getDeals(): List<DealDto>
    suspend fun getDashboardStats(): DashboardStatsDto
    suspend fun addDeal(deal: DealDto): DealDto
}

data class DashboardStatsDto(
    val clientsCount: Int,
    val dealsCount: Int,
    val activeDealsCount: Int,
    val tasksTodayCount: Int
)

object MockCrmRepository : CrmRepository {
    private val mockClients = mutableListOf(
        ClientDto(1, "Иван Петров", "ООО Альфа", "+7 912 345-67-89", "ivan@alfa.ru", "Активный", "Булат"),
        ClientDto(2, "Анна Смирнова", "ИП Смирнова", "+7 987 654-32-10", "anna@mail.ru", "Лид", "Егор"),
        ClientDto(3, "Дмитрий Козлов", "TechSoft", "+7 900 111-22-33", "dk@techsoft.ru", "Активный", "Ярик"),
        ClientDto(4, "Ольга Волкова", "ООО Бета", "+7 955 123-45-67", "olga@beta.ru", "Потенциальный", "Булат"),
        ClientDto(5, "Мария Кузнецова", "ООО Гамма", "+7 903 333-44-55", "maria@gamma.ru", "Активный", "Ярик")
    )

    private val mockDeals = mutableListOf(
        DealDto(1, "Разработка сайта", "ООО Ромашка", 120_000, "Иван Петров", "Новый лид", "12.09.2026"),
        DealDto(2, "Аудит", "ИП Сидоров", 80_000, "Алексей Сидоров", "Новый лид", "11.09.2026"),
        DealDto(3, "Поставка ПО", "ООО Техно", 220_000, "Дмитрий Козлов", "Новый лид", "10.09.2026"),
        DealDto(4, "Консультация", "ИП Петров", 150_000, "Петр Петров", "Контакт установлен", "10.09.2026"),
        DealDto(5, "Лицензии", "ООО Вектор", 130_000, "Анна Смирнова", "Контакт установлен", "09.09.2026"),
        DealDto(6, "Внедрение CRM", "TechSoft", 240_000, "Дмитрий Козлов", "Переговоры", "12.09.2026"),
        DealDto(7, "Серверы", "ООО Бета", 80_000, "Ольга Волкова", "Переговоры", "11.09.2026"),
        DealDto(8, "Поддержка", "ООО Альфа", 120_000, "Иван Петров", "Договор", "10.09.2026"),
        DealDto(9, "Доработка", "ООО Гамма", 240_000, "Мария Кузнецова", "Успех", "08.09.2026")
    )

    override suspend fun getClients(): List<ClientDto> {
        delay(200)
        return mockClients.toList()
    }

    // Имитация POST /api/v1/clients
    override suspend fun addClient(client: ClientDto): ClientDto {
        delay(300)
        val newClient = client.copy(id = (mockClients.size + 1).toLong())
        mockClients.add(0, newClient) // Добавляем в начало таблицы
        return newClient
    }

    override suspend fun getDeals(): List<DealDto> {
        delay(200)
        return mockDeals
    }

    override suspend fun getDashboardStats(): DashboardStatsDto {
        delay(150) // Имитация задержки БД/Сети

        val currentClientsCount = mockClients.size
        val currentDealsCount = mockDeals.size

        // Активные сделки — это те, которые ещё не завершены (исключаем "Успех")
        val currentActiveDeals = mockDeals.count { it.stage != "Успех" }

        // Задач у нас пока в моках нет (нет списка mockTasks),
        // поэтому тут временно оставляем заглушку.
        // Позже сделаешь mockTasks.count { it.date == today }
        val currentTasksToday = 6

        return DashboardStatsDto(
            clientsCount = currentClientsCount,
            dealsCount = currentDealsCount,
            activeDealsCount = currentActiveDeals,
            tasksTodayCount = currentTasksToday
        )
    }
    // Имитация POST /api/v1/deals
    override suspend fun addDeal(deal: DealDto): DealDto {
        delay(300)
        val newDeal = deal.copy(id = (mockDeals.size + 1).toLong())
        mockDeals.add(0, newDeal)
        return newDeal
    }

}
