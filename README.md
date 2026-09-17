# FlexCRM — Kotlin/JS demo

Минимальный frontend-прототип CRM на чистом Kotlin/JS без backend и без UI-фреймворков.

## Что внутри

- Dashboard
- Таблица клиентов
- Kanban по сделкам
- Карточка клиента
- Моковые данные прямо в `Main.kt`
- Навигация без роутера — просто переключение экранов

## Запуск

Нужны JDK и Gradle/Gradle Wrapper.

```bash
gradle jsBrowserDevelopmentRun
```

Если в проект добавлен Gradle Wrapper:

```bash
./gradlew jsBrowserDevelopmentRun
```

Dev-server откроет приложение в браузере.

## Куда подключать Go backend

Сейчас данные лежат в `clients` и `deals` в `Main.kt`.
Позже их можно заменить на HTTP-запросы к вашему API, например:

- `GET /api/clients`
- `GET /api/clients/{id}`
- `POST /api/clients`
- `GET /api/deals`
- `PATCH /api/deals/{id}/stage`

## Зачем такой вариант

Это именно учебный skeleton: минимум магии и библиотек. Когда Егор разберётся с Kotlin/JS и DOM, можно перейти на React wrappers, Kobweb/Kilua или Compose Multiplatform Web.
