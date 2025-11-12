export const metadata = {
  title: "Мастер-класс по N8N | ИИшенка Pro",
  description:
    "Полный курс по автоматизации с N8N: от базовых принципов до создания RAG-агента",
};

import PageIllustration from "@/components/page-illustration";
import Cta from "@/components/cta";
import Features from "@/components/features";

interface Module {
  number: number;
  title: string;
  description: string;
  topics: string[];
  timestamps?: { time: string; topic: string }[];
}

const modules: Module[] = [
  {
    number: 1,
    title: "Введение в N8N и основы платформы",
    description:
      "Добро пожаловать на мастер-класс по N8N! В этом уроке мы шаг за шагом погрузимся в платформу автоматизации: разберём базовые принципы, настроим первые интеграции и научимся выстраивать устойчивые сценарии. Мастер-класс создан для тех, кто хочет уверенно стартовать: от записи первого workflow до подключения нейросетей и построения собственного RAG-агента.",
    topics: [
      "Цель мастер-класса и кому он подойдёт",
      "N8N как конструктор из нод и принцип low-code",
      "Сравнение с Zapier/Make и ключевые преимущества",
      "Open-source и self-host подход",
      "Структура платформы и взаимодействие компонентов",
      "JSON как язык общения нод",
      "Регистрация пробного аккаунта и первый вход",
    ],
    timestamps: [
      { time: "00:00", topic: "Цель мастер-класса" },
      {
        time: "00:33",
        topic: "Кому подойдёт мастер-класс и как им пользоваться",
      },
      {
        time: "01:18",
        topic: "План: от базовых принципов до первого агента с RAG",
      },
      { time: "02:45", topic: "Почему важно понимать логику автоматизаций" },
      { time: "03:12", topic: "N8N как конструктор из нод и принцип low-code" },
      {
        time: "05:13",
        topic: "Сравнение с Zapier/Make и ключевые преимущества",
      },
      { time: "06:05", topic: "Open-source и self-host подход" },
      { time: "06:35", topic: "Гибкость и возможность писать код" },
      {
        time: "07:29",
        topic: "Структура платформы и взаимодействие компонентов",
      },
      { time: "08:39", topic: "JSON как язык общения нод" },
      { time: "09:41", topic: "Ознакомление с интерфейсом N8N" },
      { time: "10:12", topic: "Регистрация пробного аккаунта" },
      { time: "11:06", topic: "Первый вход и старт с нуля" },
    ],
  },
  {
    number: 2,
    title: "Поток данных и ключевые концепции",
    description:
      "В этом видео вы узнаете, как данные шаг за шагом проходят через ноды в N8N и почему важно понимать логику потока. Мы разберём, какие источники данных можно подключать, как просматривать JSON-структуру и как накапливать значения между шагами.",
    topics: [
      "Принцип перетекания данных между нодами",
      "Источники данных: ручной ввод и внешние сервисы",
      "Просмотр результата ноды и формат JSON",
      "Разбор ключ-значение в JSON-представлении",
      "Нода Set/Edit Fields и передача данных",
      "Формирование нового JSON и динамические значения",
      "Триггеры: ручные, расписание, внешние события",
      "Действия после триггера и завершение сценария",
    ],
    timestamps: [
      {
        time: "00:08",
        topic: "Напоминание о принципе перетекания данных между нодами",
      },
      { time: "00:28", topic: "Переход в workflow и добавление первой ноды" },
      {
        time: "00:52",
        topic: "Источники данных: ручной ввод и внешние сервисы",
      },
      { time: "01:39", topic: "Просмотр результата ноды и формат JSON" },
      { time: "02:16", topic: "Разбор ключ-значение в JSON-представлении" },
      { time: "02:37", topic: "Добавление ноды Set/Edit Fields" },
      {
        time: "03:24",
        topic: "Передача данных из предыдущей ноды и настройка полей",
      },
      {
        time: "04:02",
        topic: "Формирование нового JSON и динамические значения",
      },
      { time: "05:22", topic: "Что такое ручное выполнение workflow" },
      { time: "05:39", topic: "Триггеры: ручные, расписание, внешние события" },
      { time: "06:26", topic: "Действия после триггера и завершение сценария" },
    ],
  },
  {
    number: 3,
    title: "Что такое $json и Визуальная отладка (Искусство находить ошибки)",
    description:
      "В этом видео вы узнаете, как отлаживать сложные сценарии в N8N и быстро находить место, где теряются данные. Мы разберём копирование нод, работу с цепочками JSON и доступ к значениям не только из предыдущего шага, но и из ранних этапов.",
    topics: [
      "Дублирование нод и усложнение workflow",
      "Проверка прохождения данных через ноды",
      "Навигация между шагами в режиме просмотра",
      "Анализ доступных полей в JSON-формате",
      "Доступ к данным не из предыдущей ноды",
      "Использование списка ранних нод и перетаскивания данных",
      "Ручное построение выражений и обращение к нодам по имени",
      "Иерархия JSON и обращение к вложенным полям",
      "Синтаксис выражений с двойными фигурными скобками",
      "Раздел Executions и история запусков",
      "Просмотр входных и выходных данных каждой ноды",
    ],
    timestamps: [
      { time: "00:22", topic: "Дублирование нод и усложнение workflow" },
      { time: "00:43", topic: "Проверка прохождения данных через ноды" },
      { time: "01:01", topic: "Навигация между шагами в режиме просмотра" },
      {
        time: "01:26",
        topic: "Почему нода подсвечивается красным и что это значит",
      },
      { time: "01:59", topic: "Анализ доступных полей в JSON-формате" },
      { time: "02:44", topic: "Доступ к данным не из предыдущей ноды" },
      {
        time: "03:10",
        topic: "Использование списка ранних нод и перетаскивания данных",
      },
      {
        time: "03:41",
        topic: "Ручное построение выражений и обращение к нодам по имени",
      },
      { time: "04:20", topic: "Иерархия JSON и обращение к вложенным полям" },
      {
        time: "05:05",
        topic: "Синтаксис выражений с двойными фигурными скобками",
      },
      {
        time: "05:47",
        topic: "Доступ к chatInput, тексту и другим значениям через точки",
      },
      { time: "07:23", topic: "Как подходить к отладке больших workflow" },
      { time: "07:29", topic: "Раздел Executions и история запусков" },
      { time: "07:50", topic: "Отличие тестовых и боевых выполнений" },
      {
        time: "08:08",
        topic: "Просмотр входных и выходных данных каждой ноды",
      },
    ],
  },
  {
    number: 4,
    title: "Взаимодействие n8n с внешним миром (HTTP Request и Webhook)",
    description:
      "В этом видео вы узнаете, как N8N обменивается данными с внешними сервисами через HTTP-запросы и webhook-и. Мы разберём структуру запроса, поймём роль метода, URL, заголовков и тела, а также посмотрим на примеры живых интеграций.",
    topics: [
      "Зачем нужен обмен с внешним миром",
      "Понятие HTTP-запроса и связь с JSON-данными",
      "Разбор структуры curl-запроса и его элементов",
      "Метод, URL и заголовки в контексте письма",
      "Нода HTTP Request в N8N",
      "Пример запроса к публичному API",
      "Что такое webhook и чем он отличается от исходящего запроса",
      "Настройка ноды Webhook и получение уникального URL",
      "Telegram Trigger как популярный пример webhook-а",
      "Двусторонняя коммуникация с внешними сервисами",
    ],
    timestamps: [
      { time: "00:00", topic: "Зачем нужен обмен с внешним миром" },
      {
        time: "00:11",
        topic: "Пример задачи: автоматически получать курс валют",
      },
      { time: "00:25", topic: "Понятие HTTP-запроса и связь с JSON-данными" },
      {
        time: "00:51",
        topic: "Как JSON помогает переносить данные между системами",
      },
      { time: "01:20", topic: "Разбор структуры curl-запроса и его элементов" },
      { time: "02:17", topic: "Метод, URL и заголовки в контексте письма" },
      { time: "02:44", topic: "Аналогия с конвертом и содержимым письма" },
      { time: "03:42", topic: "Нода HTTP Request в N8N" },
      { time: "04:00", topic: "Обзор полей ноды: method, URL, headers, body" },
      {
        time: "04:51",
        topic: "Пример запроса к сервису определения пола по имени",
      },
      { time: "05:13", topic: "Выполнение запроса и анализ ответа" },
      {
        time: "05:42",
        topic: "Что такое webhook и чем он отличается от исходящего запроса",
      },
      {
        time: "06:03",
        topic: "Вебхук как дверной звонок, который ждёт событие",
      },
      {
        time: "06:21",
        topic: "Настройка ноды Webhook и получение уникального URL",
      },
      {
        time: "06:58",
        topic: "Telegram Trigger как популярный пример webhook-а",
      },
      { time: "07:45", topic: "Связка бота, credentials и приём сообщений" },
      {
        time: "08:25",
        topic: "Как сообщение проходит через сервер Telegram к N8N",
      },
      {
        time: "08:53",
        topic: "Ответ пользователю через send message и HTTP-ноды",
      },
      {
        time: "09:06",
        topic: "Итог: двусторонняя коммуникация с внешними сервисами",
      },
    ],
  },
  {
    number: 5,
    title: "Подключение Google Drive, Google Docs и Telegram к n8n",
    description:
      "В этом видео вы узнаете, как подключить Google Drive, Google Docs и Telegram к вашим сценариям в N8N, чтобы данные автоматически перетекали между сервисами. Мы обойдём требование банковской карты в Google Cloud, настроим OAuth-креды и создадим Telegram-бота.",
    topics: [
      "Обход требования банковской карты в Google Cloud Console",
      "Включение Google Drive API и Google Docs API",
      "Создание credentials и требования по client ID/secret",
      "Настройка OAuth consent screen",
      "Создание OAuth-клиента и redirect URI из N8N",
      "Авторизация через Sign in with Google",
      "Проверка доступных файлов Google Drive из N8N",
      "Создание Telegram-бота через BotFather",
      "Подключение токена в N8N и сохранение credentials",
      "Тестирование webhook: команды /start и сообщения",
      "Связка триггера с Google Doc и обновление документа",
    ],
    timestamps: [
      {
        time: "00:06",
        topic: "Почему подключаем Google и Telegram в первую очередь",
      },
      {
        time: "00:22",
        topic:
          "Обзор типового кейса: сообщения в Telegram и сохранение в Google Drive",
      },
      {
        time: "00:51",
        topic: "Старт работы в Google Cloud Console и обход запроса карты",
      },
      { time: "01:31", topic: "Выбор страны и согласие с условиями" },
      {
        time: "02:02",
        topic: "Как игнорировать предложение ввода карты и открыть проект",
      },
      { time: "03:03", topic: "Включение Google Drive API" },
      { time: "03:43", topic: "Активация Google Docs API и других сервисов" },
      { time: "04:47", topic: "Добавление ноды Google Drive в N8N" },
      {
        time: "05:05",
        topic: "Создание credentials и требования по client ID/secret",
      },
      { time: "05:28", topic: "Настройка OAuth consent screen" },
      { time: "05:57", topic: "Создание приложения и выбор типа External" },
      {
        time: "06:27",
        topic: "Добавление OAuth-клиента и redirect URI из N8N",
      },
      { time: "07:11", topic: "Получение client ID/secret и ввод в N8N" },
      {
        time: "07:47",
        topic: "Авторизация через Sign in with Google и публикация приложения",
      },
      {
        time: "08:28",
        topic: "Повторное подтверждение доступа и проверка статуса",
      },
      { time: "09:01", topic: "Проверка доступных файлов Google Drive из N8N" },
      {
        time: "09:38",
        topic: "Подключение Google Docs и использование тех же OAuth-данных",
      },
      { time: "10:42", topic: "Проверка доступа к структуре Google Docs" },
      { time: "11:07", topic: "Добавление Telegram Trigger и план сценария" },
      {
        time: "11:34",
        topic: "Создание Telegram-бота через BotFather и получение токена",
      },
      {
        time: "12:31",
        topic: "Подключение токена в N8N и сохранение credentials",
      },
      {
        time: "13:14",
        topic: "Тестирование webhook: команды /start и сообщения",
      },
      {
        time: "14:05",
        topic: "Связка триггера с Google Doc и подготовка документа",
      },
      { time: "14:57", topic: "Обновление документа текстом из Telegram" },
      {
        time: "15:53",
        topic: "Итоги: двусторонняя интеграция Google и Telegram в N8N",
      },
    ],
  },
  {
    number: 6,
    title: "Ветвления и циклы: If, Switch и Loop",
    description:
      "В этом видео вы узнаете, как строить ветвления и циклы в N8N, чтобы автоматизации правильно реагировали на разные типы входящих данных. Мы на практике разберём ноды If, Switch и Loop: проверим условия для текста, голоса и изображений из Telegram.",
    topics: [
      "Когда пригодятся ветвления и циклы",
      "Обзор нод If, Switch и Loop",
      "Как работает нода If: проверка условия да/нет",
      "Нода Switch для нескольких условий",
      "Сравнение структуры текстового и голосового сообщений",
      "Создание условия If по наличию voice.file_id",
      "Настройка Switch для фото, голоса и текста",
      "Введение в работу ноды Loop",
      "Пример: несколько файлов на Google Drive",
      "Связка с Telegram: отправляем имя каждого файла",
      "Когда использовать Loop, а когда можно обойтись без него",
    ],
    timestamps: [
      { time: "00:07", topic: "Когда пригодятся ветвления и циклы" },
      {
        time: "00:17",
        topic: "Пример с Telegram-ботом и разными типами сообщений",
      },
      { time: "00:49", topic: "Обзор нод If, Switch и Loop" },
      { time: "00:56", topic: "Как работает нода If: проверка условия да/нет" },
      { time: "01:12", topic: "Нода Switch для нескольких условий" },
      { time: "01:41", topic: "Нода Loop и когда она помогает" },
      { time: "02:28", topic: "Настройка Telegram-триггера и запуск отладки" },
      {
        time: "03:06",
        topic: "Сравнение структуры текстового и голосового сообщений",
      },
      { time: "03:23", topic: "Запись голосового сообщения и анализ JSON" },
      { time: "04:02", topic: "Создание условия If по наличию voice.file_id" },
      { time: "05:26", topic: "Проверка веток true/false и их выводов" },
      { time: "05:59", topic: "Тестирование условия без голосового сообщения" },
      { time: "06:33", topic: "Планирование обработчиков для каждой ветки" },
      {
        time: "06:38",
        topic: "Добавление ноды Switch для фото, голоса и текста",
      },
      { time: "07:18", topic: "Настройка правила для фото" },
      {
        time: "08:05",
        topic: "Добавление условий для voice и текстовых сообщений",
      },
      { time: "08:52", topic: "Конфигурация ветки voice" },
      { time: "09:11", topic: "Настройка ветки текст" },
      { time: "09:43", topic: "Проверка работы Switch с текстом" },
      { time: "09:56", topic: "Тест с фото и проверка ветки" },
      { time: "10:28", topic: "Введение в работу ноды Loop" },
      { time: "10:36", topic: "Пример: несколько файлов на Google Drive" },
      { time: "10:48", topic: "Добавление Loop и подготовка к итерациям" },
      {
        time: "11:01",
        topic: "Связка с Telegram: отправляем имя каждого файла",
      },
      {
        time: "11:29",
        topic: "Заполнение сообщения данными из текущей итерации",
      },
      { time: "11:45", topic: "Замыкание петли и запуск сценария" },
      {
        time: "12:34",
        topic: "Когда использовать Loop, а когда можно обойтись без него",
      },
      {
        time: "12:55",
        topic: "Чем отличается поэлементная обработка от пакетной",
      },
    ],
  },
  {
    number: 7,
    title: "Интеграция с нейросетями: OpenAI и AI-агенты",
    description:
      "В этом видео вы узнаете, как подружить N8N с нейросетями: распознавать голосовые сообщения, передавать текст в агента и отправлять ответ обратно в Telegram. Мы построим ветку для голосовых и текстовых сообщений, подключим OpenAI для транскрибации и создадим собственного AI-агента.",
    topics: [
      "Кейс: Telegram-бот с голосовыми и текстовыми сообщениями",
      "Общая цепочка: транскрибация и ответ агента",
      "Настройка ноды Switch для голосов и текста",
      "Добавление ноды Telegram Get File",
      "Получение аудиофайла из Telegram",
      "Подключение ноды OpenAI Transcribe",
      "Генерация API-ключа OpenAI",
      "Добавление ключа в N8N и сохранение credentials",
      "Добавление ноды AI Agent и её назначение",
      "Подключение чат-модели OpenAI (GPT-4o mini)",
      "Использование ноды Set для подготовки поля text",
      "Готовим отправку ответа обратно в Telegram",
    ],
    timestamps: [
      {
        time: "00:07",
        topic: "Кейс: Telegram-бот с голосовыми и текстовыми сообщениями",
      },
      { time: "00:23", topic: "Общая цепочка: транскрибация и ответ агента" },
      { time: "00:52", topic: "Что должен делать AI-агент в сценарии" },
      { time: "01:17", topic: "Повторение: зачем нужен Switch" },
      { time: "01:43", topic: "Настройка ноды Switch для голосов и текста" },
      { time: "02:05", topic: "Добавление ноды Telegram Get File" },
      { time: "02:30", topic: "Передача file_id и включение скачивания" },
      { time: "02:45", topic: "Получение аудиофайла из Telegram" },
      { time: "03:00", topic: "Подключение ноды OpenAI Transcribe" },
      { time: "03:36", topic: "Напоминание, что ноды — это обёртки над API" },
      { time: "03:59", topic: "Обзор платформы api.openai.com" },
      { time: "04:19", topic: "Вход в OpenAI и подготовка дашборда" },
      { time: "05:12", topic: "Генерация первого API-ключа" },
      {
        time: "05:35",
        topic: "Добавление ключа в N8N и сохранение credentials",
      },
      {
        time: "05:48",
        topic: "Как оплатить кредиты OpenAI и какие суммы нужны",
      },
      {
        time: "06:25",
        topic: "Новый тест: голосовое сообщение проходит по цепочке",
      },
      { time: "06:47", topic: "Транскрибатор возвращает текст" },
      { time: "07:18", topic: "Где хранится расшифрованный текст" },
      { time: "07:25", topic: "Добавление ноды AI Agent и её назначение" },
      {
        time: "07:59",
        topic: "Переопределение входных данных агента (define below)",
      },
      { time: "08:24", topic: "Проверка ветки с обычным текстом" },
      { time: "08:38", topic: "Подключение чат-модели OpenAI (GPT-4o mini)" },
      { time: "08:52", topic: "Повторный запуск ветки текст" },
      { time: "09:01", topic: "Switch направляет данные в ветку text" },
      {
        time: "09:18",
        topic: "Использование ноды Set для подготовки поля text",
      },
      {
        time: "10:02",
        topic: "Проверка результата и перенос текста в нужное поле",
      },
      { time: "10:54", topic: "Агент получает текст и формирует ответ" },
      { time: "11:20", topic: "Готовим отправку ответа обратно в Telegram" },
      { time: "11:41", topic: "Добавление ноды Send a Text Message" },
      { time: "12:03", topic: "Передача output и chat_id в сообщение" },
      { time: "12:40", topic: "Отключение атрибуции N8N" },
      {
        time: "12:51",
        topic: "Получение ответа в Telegram и завершение цикла",
      },
    ],
  },
  {
    number: 8,
    title: "RAG-пайплайн: векторизация и Pinecone",
    description:
      "В этом видео вы узнаете, как построить RAG-пайплайн в N8N: от пояснения теории векторизации до загрузки собственных данных в Pinecone. Мы разберём, зачем разбивать документы на чанки, как получить эмбеддинги через OpenAI и сохранить их в векторную базу.",
    topics: [
      "Что означает Retrieval Augmented Generation",
      "Матрицы и числовое представление текста",
      "Как векторизация помогает нейронкам понимать документы",
      "Проблема длинных текстов и ограничение контекста",
      "Концепция чанков и идея overlap",
      "Преобразование каждого чанка в вектор",
      "Что хранится в векторной базе: текст и метаданные",
      "Как вопрос пользователя превращается в вектор",
      "Поиск ближайших векторов и подбор контекста",
      "Подготовка тестового текста через ноду Set/Edit Fields",
      "Выбор Pinecone как быстрого бесплатного решения",
      "Регистрация в Pinecone и получение API-ключа",
      "Нода Pinecone Vector Store и режим Add Documents",
      "Создание первого индекса в Pinecone",
      "Выбор модели text-embedding-3-small",
      "Добавление Text Data Loader и настройка разбиения",
      "Кастомный splitter: длина чанка 100 символов без overlap",
      "Проверка Pinecone: поиск и просмотр записей",
    ],
    timestamps: [
      {
        time: "00:09",
        topic: "Почему RAG — самая продвинутая часть мастер-класса",
      },
      { time: "00:18", topic: "Что означает Retrieval Augmented Generation" },
      { time: "00:33", topic: "Матрицы и числовое представление текста" },
      {
        time: "00:48",
        topic: "Как векторизация помогает нейронкам понимать документы",
      },
      {
        time: "00:56",
        topic: "Проблема длинных текстов и ограничение контекста",
      },
      { time: "01:35", topic: "Концепция чанков и идея overlap" },
      { time: "02:07", topic: "Преобразование каждого чанка в вектор" },
      {
        time: "02:22",
        topic: "Что хранится в векторной базе: текст и метаданные",
      },
      { time: "02:49", topic: "Как вопрос пользователя превращается в вектор" },
      { time: "03:27", topic: "Поиск ближайших векторов и подбор контекста" },
      {
        time: "03:58",
        topic: "Возврат текста в контекст нейронки и генерация ответа",
      },
      { time: "04:20", topic: "Переход к практике в N8N" },
      {
        time: "04:34",
        topic: "Подготовка тестового текста через ноду Set/Edit Fields",
      },
      { time: "05:14", topic: "Почему кастомные данные полезны для теста" },
      {
        time: "05:26",
        topic: "Зачем нужна векторная база и какие бывают варианты",
      },
      {
        time: "05:50",
        topic: "Выбор Pinecone как быстрого бесплатного решения",
      },
      { time: "06:03", topic: "Регистрация в Pinecone и прохождение анкеты" },
      { time: "06:37", topic: "Получение API-ключа и добавление его в N8N" },
      {
        time: "06:50",
        topic: "Нода Pinecone Vector Store и режим Add Documents",
      },
      { time: "07:27", topic: "Создание первого индекса в Pinecone" },
      { time: "07:53", topic: "Выбор модели text-embedding-3-small" },
      { time: "08:28", topic: "Обновление списка индексов в N8N" },
      { time: "08:48", topic: "Указание модели эмбеддингов в настройках ноды" },
      { time: "09:12", topic: "Добавление Text Data Loader и зачем он нужен" },
      { time: "09:33", topic: "Просмотр исходного текста перед загрузкой" },
      { time: "09:44", topic: "Настройка Data Loader и выбор типа разбиения" },
      {
        time: "10:00",
        topic: "Кастомный splitter: длина чанка 100 символов без overlap",
      },
      {
        time: "10:49",
        topic: "Первый запуск и замечание про размерность вектора",
      },
      { time: "11:02", topic: "Создание нового индекса с размерностью 1536" },
      { time: "11:36", topic: "Переподключение ноды к новому индексу" },
      { time: "11:47", topic: "Повторный запуск всего workflow" },
      {
        time: "11:54",
        topic: "Результат Data Loader: список подготовленных чанков",
      },
      {
        time: "12:11",
        topic: "Результат модели эмбеддингов: массивы чисел-векторов",
      },
      { time: "12:19", topic: "Проверка Pinecone: поиск и просмотр записей" },
      {
        time: "12:45",
        topic: "Просмотр текста и соответствующих векторов в интерфейсе",
      },
      {
        time: "13:14",
        topic:
          "Что делать дальше: использовать поиск и отдавать контекст нейронке",
      },
    ],
  },
  {
    number: 9,
    title:
      "Создание ИИ Агента, который отвечает на основе векторизованных данных",
    description:
      "В этом видео вы узнаете, как собрать весь пройденный материал в один RAG-агент: забрать документы из Google Drive, завекторизовать их и отвечать в Telegram на основе собственных данных. Мы модернизируем пайплайн векторизации, подключим Pinecone как инструмент для агента и настроим system message.",
    topics: [
      "Краткий обзор того, что уже умеет автоматизация",
      "Идея объединить векторизацию и диалоговый бот в RAG-агента",
      "Замена источника текста на Google Drive",
      "Подготовка папки Testdocs с нужными файлами",
      "Нода Google Drive Search с фильтром по папке",
      "Нода Download для скачивания документа",
      "Настройка data loader на работу с бинарным файлом",
      "Изменение размера чанков до 200 символов",
      "Просмотр индекса Pinecone и проверка записей",
      "Что такое инструменты (tools) у агента",
      "Добавление Pinecone Vector Store как инструмента",
      "Выбор индекса и настройка поиска",
      "Ограничение на четыре релевантных чанка",
      "System message: сперва получи контекст через vector store",
      "Финальный тест: вопрос про акцию и ответ с датами",
      "Просмотр найденных чанков внутри ноды Pinecone",
      "Система теперь умеет полный цикл: векторизация + диалог",
    ],
    timestamps: [
      {
        time: "00:06",
        topic: "Краткий обзор того, что уже умеет автоматизация",
      },
      {
        time: "00:13",
        topic: "Как данные двигаются между нодами и внешними сервисами",
      },
      {
        time: "00:29",
        topic:
          "Подключённые интеграции: Telegram, Google Drive, векторное хранилище",
      },
      {
        time: "00:45",
        topic: "Две ключевые части: векторизация и диалоговый бот",
      },
      { time: "00:59", topic: "Как эти части работают отдельно" },
      { time: "01:13", topic: "Идея объединить их в раг-агента" },
      {
        time: "01:39",
        topic: "План: финализируем мастер-класс полноценным сценарием",
      },
      { time: "01:54", topic: "Замена источника текста на Google Drive" },
      { time: "02:01", topic: "Подготовка папки Testdocs с нужными файлами" },
      { time: "02:32", topic: "Нода Google Drive Search с фильтром по папке" },
      { time: "03:13", topic: "Выполнение поиска и получение file_id" },
      { time: "03:26", topic: "Нода Download для скачивания документа" },
      { time: "03:54", topic: "Проверка, что скачан нужный файл" },
      {
        time: "04:06",
        topic: "Настройка data loader на работу с бинарным файлом",
      },
      { time: "04:41", topic: "Изменение размера чанков до 200 символов" },
      { time: "04:51", topic: "Запуск векторизации и получение 17 элементов" },
      { time: "05:05", topic: "Просмотр индекса Pinecone и проверка записей" },
      {
        time: "05:14",
        topic: "Убедились, что текст из документа завекторизован",
      },
      { time: "05:28", topic: "Готовим данные для ответа агента" },
      { time: "05:41", topic: "Возвращаемся к Telegram-автоматизации" },
      { time: "05:48", topic: "Что такое инструменты (tools) у агента" },
      {
        time: "05:58",
        topic: "Добавление Pinecone Vector Store как инструмента",
      },
      { time: "06:37", topic: "Выбор индекса test2 и настройка поиска" },
      { time: "07:00", topic: "Ограничение на четыре релевантных чанка" },
      { time: "07:28", topic: "Добавление модели эмбеддингов для поиска" },
      {
        time: "07:40",
        topic: "System message: сперва получи контекст через vector store",
      },
      { time: "08:17", topic: "Придумываем вопрос про акцию «Цветы под ёлку»" },
      { time: "08:31", topic: "Отправляем запрос в Telegram-бота" },
      { time: "08:59", topic: "Запуск сценария: транскрибация, поиск, ответ" },
      {
        time: "09:05",
        topic: "Агент использует Vector Store и формирует сообщение",
      },
      { time: "09:12", topic: "Ответ с датами акции в Telegram" },
      {
        time: "09:27",
        topic: "Просмотр найденных чанков внутри ноды Pinecone",
      },
      {
        time: "09:48",
        topic: "Система теперь умеет полный цикл: векторизация + диалог",
      },
      { time: "09:57", topic: "Подведение итогов возможностей" },
      {
        time: "10:03",
        topic: "Финальное прощание и приглашение продолжить работу",
      },
    ],
  },
];

export default function N8NMasterclassPage() {
  return (
    <>
      {/* Hero Section */}

      <section className="relative">
        <PageIllustration />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Hero content */}
          <div className="pb-12 pt-32 md:pb-20 md:pt-40">
            {/* Section header */}
            <div className="pb-12 text-center md:pb-16">
              <div
                className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]"
                data-aos="zoom-y-out"
              >
                <div className="-mx-0.5 flex justify-center -space-x-3">
                  <p
                    className="text-blue-500 text-xs font-semibold"
                    data-aos="zoom-y-out"
                    data-aos-delay={300}
                  >
                    Мастер-класс по N8N от ИИшенка Pro
                  </p>
                </div>
              </div>
              <h1
                className=" mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
                data-aos="zoom-y-out"
                data-aos-delay={150}
              >
                <span className="text-blue-400">N8N</span> Мастер-класс
              </h1>
              <div className="mx-auto max-w-3xl">
                <p
                  className="mb-8 text-lg text-gray-700"
                  data-aos="zoom-y-out"
                  data-aos-delay={300}
                >
                  Подготовьтесь к практикам — вас ждут понятные объяснения,
                  наглядные примеры и готовые связки, которые вы сможете сразу
                  адаптировать под свои задачи.
                </p>
                <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                  <div
                    className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                    data-aos="zoom-y-out"
                    data-aos-delay={450}
                  >
                    <a
                      className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                      href="#pricing"
                    >
                      <span className="relative inline-flex items-center">
                        Вступить в сообщество{" "}
                        <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                          -&gt;
                        </span>
                      </span>
                    </a>
                    {/* <a
                    className="btn w-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    Learn More
                  </a> */}
                  </div>
                </div>
              </div>
            </div>
            {/* Hero tabs */}
            <div className="-mx-0.5 flex justify-center items-center">
              <div className="mt-8 w-full flex justify-center items-center">
                <div
                  className="relative rounded-2xl px-5 py-3 shadow-xl max-w-5xl w-full before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,--theme(--color-slate-300/.8),transparent)1]"
                  data-aos="zoom-y-out"
                  data-aos-delay={100}
                >
                  <video
                    className="box-content rounded-2xl border-2 border-gray-50 max-w-full w-full h-auto"
                    src="https://sb.sendforsign.com/storage/v1/object/public/prod//n8n-mc.mp4"
                    loop
                    controls
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="relative bg-white py-12 md:py-20 border-t border-slate-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center mb-10">
            <h2
              className="text-3xl font-bold mb-6 border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              Темы мастер-класса
            </h2>
            <p
              className="mb-8 text-lg text-gray-700"
              data-aos="zoom-y-out"
              data-aos-delay={300}
            >
              Мастер-класс состоит из 9 тем, которые последовательно проведут
              вас от основ N8N до создания полноценного RAG-агента с интеграцией
              нейросетей.
            </p>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="relative bg-white py-12 border-slate-100">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="space-y-12">
            {modules.map((module, index) => (
              <div
                key={module.number}
                className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center font-bold text-lg">
                    {module.number}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {module.title}
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {module.description}
                    </p>
                  </div>
                </div>

                {/* Key Topics */}
                <div className="mb-10">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Ключевые темы:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li
                        key={topicIndex}
                        className="flex items-start gap-2 text-gray-600"
                      >
                        <span className="text-blue-500 flex-shrink-0 mt-2">
                          •
                        </span>
                        <span className="flex-1 mt-2">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timestamps */}
                {module.timestamps && module.timestamps.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Тайм-коды видео:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 overflow-y-auto pr-2">
                      {module.timestamps.map((ts, tsIndex) => (
                        <div
                          key={tsIndex}
                          className="flex items-start gap-2 text-sm text-gray-600 bg-gray-50 p-2 rounded"
                        >
                          <span className="font-mono font-semibold text-blue-600 flex-shrink-0">
                            {ts.time}
                          </span>
                          <span className="text-gray-700">{ts.topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Features />

      {/* CTA Section */}
      <Cta />
    </>
  );
}
