// All page copy. Keys are the same in every language.
// Everything here describes the real app in ../../sub-tracker.

export const APP_NAME = 'Tally';
export const BRAND_SUFFIX = 'Subscription Monitor'; // landing brand: Tally Subscription Monitor
export const REPO_URL = 'https://github.com/ssaddist/tally';
export const DOWNLOAD_URL = `${REPO_URL}/releases`;

const en = {
  metaTitle: 'Tally Subscription Monitor — a subscription tracker that stays on your computer',
  metaDesc: 'A desktop app that lists every subscription you pay for and reminds you before each charge. No account, no server, no network requests.',
  skip: 'Skip to content',
  navLabel: 'Primary',
  navHow: 'How it works',
  navDownload: 'Download',
  langLabel: 'Language',

  heroTitle: ['Subscriptions renew quietly. Tally tells you ', 'before they do.', ''],
  heroLead: 'A desktop app for Mac, Windows and Linux that lists everything you pay for weekly, monthly or yearly, with the next charge date next to each one. For anyone who has found a €9.99 line on a bank statement and couldn’t remember signing up.',
  heroPrivacy: 'Tally keeps your list in a local database on your computer: there is no account, no server and no analytics, and the app makes no network requests at all — reminders are ordinary system notifications.',

  howTitle: 'How it works',
  steps: [
    ['Pick a service or type your own', 'Choose from about fifty popular services — Netflix, Spotify, ChatGPT, iCloud+ and others — and the name, category, typical price and cancel link are filled in. Or enter everything yourself.'],
    ['It keeps the dates and the totals', 'Weekly, monthly and yearly plans add up to one monthly and one yearly figure. Past dates move forward on their own, and a plan billed on the 31st comes back to the 31st after a short month.'],
    ['You get a notice before each charge', 'On the day of payment or up to seven days ahead, as you choose. Close the window and the app stays in the menu bar on a Mac or the system tray on Windows and Linux, so reminders keep coming.'],
  ],

  screensTitle: 'What it looks like',
  screensText: 'These are real screens from the app, filled with sample data. Click a screen to open it full size.',
  shots: {
    dashboard: {
      alt: 'Dashboard: €110.94 per month and €1,331.27 per year, one overdue manual renewal, one free trial ending, upcoming payments and spend by category.',
      caption: 'Dashboard. Monthly and yearly totals, plans you pay by hand that are overdue, trials about to end, and what each category costs.',
    },
    calendar: {
      alt: 'Calendar for November: seven payments on their days, €90.95 due this month.',
      caption: 'Calendar. Every payment of the month on its day, with the total due.',
    },
    catalog: {
      alt: 'Add subscription: a searchable catalog of popular services with typical prices, grouped by category.',
      caption: 'Adding a subscription. About fifty services with typical prices, or a custom entry.',
    },
  },

  getTitle: 'What you get',
  getText: 'Everything stays on your computer. The number of network requests the app makes:',
  getFigure: ['0', ''],
  getFigureAria: 'zero network requests',
  benefits: [
    ['A reminder before every charge', 'Native notifications, from the same day to seven days ahead. The menu bar or tray icon shows what is due next, and the app can open at login.'],
    ['Honest totals in your currency', 'Monthly and yearly totals in one base currency. You enter exchange rates yourself; a plan in a currency without a rate is flagged, not guessed.'],
    ['Trials that don’t slip through', 'Mark a free trial and you get a “cancel before…” reminder. When the trial ends, it becomes a regular subscription.'],
    ['Manual renewals and payment history', 'For services you pay by hand, an overdue date stays on the dashboard until you press Renew. Every payment is logged.'],
    ['Your data, in a file you own', 'Export everything to JSON and import it back. An import is checked in full before anything is replaced.'],
    ['Ukrainian, Russian or English; light or dark', 'Language and theme are switched in Settings. On first launch the app asks which language you want.'],
  ],

  ctaTitle: 'Write the list once. Stop being surprised.',
  ctaText: 'Tally is a desktop app for macOS, Windows and Linux, built with Tauri. It is free, and the source code is open.',
  dlFor: 'Download for {os}',
  dlAll: 'All downloads',
  dlVersion: 'version {v}',
  dlReleases: 'All versions and release notes',
  dlAlso: 'Also as',
  dlOther: 'Other systems:',
  dlChoose: 'Download for:',
  dlOtherLabel: 'Choose a system',
  dlPick: 'We couldn’t tell which system you use. Pick yours below.',
  dlMobile: 'Tally runs on computers. Open this page on your Mac or PC, or download a file for it below.',
  dlMeta: {
    mac: 'Universal app for Apple Silicon and Intel Macs',
    windows: 'Windows 10 and 11, 64-bit · installer',
    linux: '64-bit · AppImage runs on most distributions; .deb for Ubuntu and Debian, .rpm for Fedora',
  },
  osNames: { mac: 'macOS', windows: 'Windows', linux: 'Linux' },
  cookieLabel: 'Cookies',
  cookieText: 'This site can remember your system in a cookie, so the download button offers the right file next time. Nothing else is stored and nothing is tracked.',
  cookieAllow: 'Allow',
  cookieDecline: 'No thanks',
  ctaSource: 'Source on GitHub',
  ctaMeta: 'Ukrainian, Russian and English interface',

  footMade: 'Tally Subscription Monitor — local only, no telemetry.',
  footSource: 'Source code',
};

const ru = {
  metaTitle: 'Tally Subscription Monitor — учёт подписок, который остаётся на вашем компьютере',
  metaDesc: 'Приложение для Mac, Windows и Linux, которое показывает все ваши подписки и напоминает о каждом списании заранее. Без аккаунта, без сервера, без сетевых запросов.',
  skip: 'Перейти к содержанию',
  navLabel: 'Основное меню',
  navHow: 'Как это работает',
  navDownload: 'Скачать',
  langLabel: 'Язык',

  heroTitle: ['Подписки продлеваются незаметно. Tally предупредит ', 'заранее.', ''],
  heroLead: 'Приложение для Mac, Windows и Linux: простой список всего, за что вы платите раз в неделю, месяц или год, с датой следующего списания у каждой строки. Для всех, кто хоть раз находил в выписке 9,99 € и не мог вспомнить, на что подписался.',
  heroPrivacy: 'Tally хранит список в локальной базе на вашем компьютере: нет аккаунта, нет сервера, нет аналитики, и приложение вообще не выходит в сеть — напоминания приходят обычными системными уведомлениями.',

  howTitle: 'Как это работает',
  steps: [
    ['Выберите сервис или введите свой', 'Около пятидесяти популярных сервисов — Netflix, Spotify, ChatGPT, iCloud+ и другие: название, категория, обычная цена и ссылка на отмену заполнятся сами. Или впишите всё вручную.'],
    ['Приложение следит за датами и суммами', 'Еженедельные, ежемесячные и годовые тарифы сводятся в одну сумму за месяц и за год. Прошедшие даты переносятся сами, а платёж 31-го числа после короткого месяца снова вернётся на 31-е.'],
    ['Уведомление перед каждым списанием', 'В день оплаты или за срок до семи дней — как настроите. Закройте окно, и приложение останется в строке меню на Mac или в системном трее на Windows и Linux, так что напоминания продолжат приходить.'],
  ],

  screensTitle: 'Как это выглядит',
  screensText: 'Это настоящие экраны приложения с тестовыми данными. Нажмите на экран, чтобы открыть его в полном размере.',
  shots: {
    dashboard: {
      alt: 'Обзор: 110,94 € в месяц и 1 331,27 € в год, одна просроченная ручная оплата, один заканчивающийся пробный период, ближайшие платежи и расходы по категориям.',
      caption: 'Обзор. Суммы за месяц и за год, просроченные подписки, которые вы оплачиваете вручную, заканчивающиеся пробные периоды и расходы по категориям.',
    },
    calendar: {
      alt: 'Календарь на ноябрь: семь платежей по дням, к оплате 90,95 €.',
      caption: 'Календарь. Все платежи месяца по дням и сумма к оплате.',
    },
    catalog: {
      alt: 'Добавление подписки: каталог популярных сервисов с поиском, обычными ценами и категориями.',
      caption: 'Добавление подписки. Около пятидесяти сервисов с обычными ценами или своя запись.',
    },
  },

  getTitle: 'Что вы получаете',
  getText: 'Всё остаётся на вашем компьютере. Сколько сетевых запросов делает приложение:',
  getFigure: ['0', ''],
  getFigureAria: 'ноль сетевых запросов',
  benefits: [
    ['Напоминание перед каждым списанием', 'Системные уведомления — в день оплаты или до семи дней заранее. Значок в строке меню или в трее показывает ближайшие платежи, а приложение может запускаться при входе.'],
    ['Честные итоги в вашей валюте', 'Суммы за месяц и за год в одной основной валюте. Курсы вы вводите сами; подписка в валюте без курса отмечается, а не считается наугад.'],
    ['Пробные периоды не проскочат', 'Отметьте пробный период, и придёт напоминание «отмените до…». Когда он закончится, подписка станет обычной.'],
    ['Ручные продления и история платежей', 'Если сервис оплачивается вручную, просроченная дата остаётся на обзоре, пока вы не нажмёте «Продлить». Каждый платёж записывается.'],
    ['Ваши данные — в вашем файле', 'Экспорт всего в JSON и импорт обратно. Перед заменой данных импорт полностью проверяется.'],
    ['Украинский, русский или английский; светлая или тёмная', 'Язык и тема переключаются в настройках. При первом запуске приложение спрашивает, какой язык вам удобен.'],
  ],

  ctaTitle: 'Запишите список один раз. И больше без сюрпризов.',
  ctaText: 'Tally — приложение для macOS, Windows и Linux на Tauri. Оно бесплатное, а исходный код открыт.',
  dlFor: 'Скачать для {os}',
  dlAll: 'Все загрузки',
  dlVersion: 'версия {v}',
  dlReleases: 'Все версии и список изменений',
  dlAlso: 'Также',
  dlOther: 'Другие системы:',
  dlChoose: 'Скачать для:',
  dlOtherLabel: 'Выбор системы',
  dlPick: 'Не получилось определить вашу систему. Выберите её ниже.',
  dlMobile: 'Tally работает на компьютерах. Откройте эту страницу на Mac или ПК — или скачайте файл для него ниже.',
  dlMeta: {
    mac: 'Универсальное приложение для Mac на Apple Silicon и Intel',
    windows: 'Windows 10 и 11, 64 бита · установщик',
    linux: '64 бита · AppImage работает в большинстве дистрибутивов; .deb для Ubuntu и Debian, .rpm для Fedora',
  },
  osNames: { mac: 'macOS', windows: 'Windows', linux: 'Linux' },
  cookieLabel: 'Файлы cookie',
  cookieText: 'Сайт может запомнить вашу систему в cookie, чтобы кнопка загрузки в следующий раз сразу предлагала нужный файл. Больше ничего не сохраняется и не отслеживается.',
  cookieAllow: 'Разрешить',
  cookieDecline: 'Не нужно',
  ctaSource: 'Исходный код на GitHub',
  ctaMeta: 'Интерфейс на украинском, русском и английском',

  footMade: 'Tally Subscription Monitor — только локально, без телеметрии.',
  footSource: 'Исходный код',
};

const uk = {
  metaTitle: 'Tally Subscription Monitor — облік підписок, що залишається на вашому комп’ютері',
  metaDesc: 'Застосунок для Mac, Windows і Linux, який показує всі ваші підписки й заздалегідь нагадує про кожне списання. Без акаунта, без сервера, без мережевих запитів.',
  skip: 'Перейти до змісту',
  navLabel: 'Основне меню',
  navHow: 'Як це працює',
  navDownload: 'Завантажити',
  langLabel: 'Мова',

  heroTitle: ['Підписки поновлюються непомітно. Tally попередить ', 'заздалегідь.', ''],
  heroLead: 'Застосунок для Mac, Windows і Linux: простий список усього, за що ви платите щотижня, щомісяця чи щороку, з датою наступного списання біля кожного рядка. Для всіх, хто хоч раз знаходив у виписці 9,99 € і не міг згадати, на що підписався.',
  heroPrivacy: 'Tally зберігає список у локальній базі на вашому комп’ютері: немає акаунта, немає сервера, немає аналітики, і застосунок узагалі не виходить у мережу — нагадування надходять звичайними системними сповіщеннями.',

  howTitle: 'Як це працює',
  steps: [
    ['Оберіть сервіс або введіть свій', 'Близько п’ятдесяти популярних сервісів — Netflix, Spotify, ChatGPT, iCloud+ та інші: назва, категорія, звичайна ціна й посилання на скасування заповняться самі. Або впишіть усе вручну.'],
    ['Застосунок стежить за датами й сумами', 'Щотижневі, щомісячні й річні тарифи зводяться в одну суму за місяць і за рік. Минулі дати переносяться самі, а платіж 31-го числа після короткого місяця знову повернеться на 31-ше.'],
    ['Сповіщення перед кожним списанням', 'У день оплати або до семи днів заздалегідь — як налаштуєте. Закрийте вікно, і застосунок залишиться в рядку меню на Mac або в системному треї на Windows і Linux, тож нагадування надходитимуть далі.'],
  ],

  screensTitle: 'Як це виглядає',
  screensText: 'Це справжні екрани застосунку з тестовими даними. Натисніть на екран, щоб відкрити його в повному розмірі.',
  shots: {
    dashboard: {
      alt: 'Огляд: 110,94 EUR на місяць і 1 331,27 EUR на рік, одна прострочена ручна оплата, один пробний період, що закінчується, найближчі платежі й витрати за категоріями.',
      caption: 'Огляд. Суми за місяць і за рік, прострочені підписки, які ви оплачуєте вручну, пробні періоди, що закінчуються, і витрати за категоріями.',
    },
    calendar: {
      alt: 'Календар на листопад: сім платежів за днями, до сплати 90,95 EUR.',
      caption: 'Календар. Усі платежі місяця за днями й сума до сплати.',
    },
    catalog: {
      alt: 'Додавання підписки: каталог популярних сервісів із пошуком, звичайними цінами й категоріями.',
      caption: 'Додавання підписки. Близько п’ятдесяти сервісів зі звичайними цінами або власний запис.',
    },
  },

  getTitle: 'Що ви отримуєте',
  getText: 'Усе залишається на вашому комп’ютері. Скільки мережевих запитів робить застосунок:',
  getFigure: ['0', ''],
  getFigureAria: 'нуль мережевих запитів',
  benefits: [
    ['Нагадування перед кожним списанням', 'Системні сповіщення — у день оплати або до семи днів заздалегідь. Значок у рядку меню або в треї показує найближчі платежі, а застосунок може запускатися під час входу.'],
    ['Чесні підсумки у вашій валюті', 'Суми за місяць і за рік в одній основній валюті. Курси ви вводите самі; підписку у валюті без курсу позначено, а не пораховано навмання.'],
    ['Пробні періоди не проскочать', 'Позначте пробний період, і надійде нагадування «скасуйте до…». Коли він закінчиться, підписка стане звичайною.'],
    ['Ручні поновлення та історія платежів', 'Якщо сервіс оплачується вручну, прострочена дата залишається на огляді, доки ви не натиснете «Поновити». Кожен платіж записується.'],
    ['Ваші дані — у вашому файлі', 'Експорт усього в JSON та імпорт назад. Перед заміною даних імпорт повністю перевіряється.'],
    ['Українська, російська чи англійська; світла чи темна', 'Мову й тему перемикають у налаштуваннях. Під час першого запуску застосунок питає, якою мовою вам зручніше.'],
  ],

  ctaTitle: 'Запишіть список один раз. І більше без сюрпризів.',
  ctaText: 'Tally — застосунок для macOS, Windows і Linux на Tauri. Він безкоштовний, а вихідний код відкритий.',
  dlFor: 'Завантажити для {os}',
  dlAll: 'Усі завантаження',
  dlVersion: 'версія {v}',
  dlReleases: 'Усі версії та список змін',
  dlAlso: 'Також',
  dlOther: 'Інші системи:',
  dlChoose: 'Завантажити для:',
  dlOtherLabel: 'Вибір системи',
  dlPick: 'Не вдалося визначити вашу систему. Оберіть її нижче.',
  dlMobile: 'Tally працює на комп’ютерах. Відкрийте цю сторінку на Mac чи ПК — або завантажте файл для нього нижче.',
  dlMeta: {
    mac: 'Універсальний застосунок для Mac на Apple Silicon та Intel',
    windows: 'Windows 10 і 11, 64 біти · інсталятор',
    linux: '64 біти · AppImage працює в більшості дистрибутивів; .deb для Ubuntu і Debian, .rpm для Fedora',
  },
  osNames: { mac: 'macOS', windows: 'Windows', linux: 'Linux' },
  cookieLabel: 'Файли cookie',
  cookieText: 'Сайт може запам’ятати вашу систему в cookie, щоб кнопка завантаження наступного разу одразу пропонувала потрібний файл. Більше нічого не зберігається й не відстежується.',
  cookieAllow: 'Дозволити',
  cookieDecline: 'Не треба',
  ctaSource: 'Вихідний код на GitHub',
  ctaMeta: 'Інтерфейс українською, російською та англійською',

  footMade: 'Tally Subscription Monitor — лише локально, без телеметрії.',
  footSource: 'Вихідний код',
};

export const STRINGS = { en, uk, ru };

// Screenshots exist for every landing language (the app has Ukrainian, Russian and English).
export const LANGUAGES = [
  { code: 'en', short: 'EN', name: 'English', locale: 'en-GB', shots: 'en' },
  { code: 'uk', short: 'UA', name: 'Українська', locale: 'uk-UA', shots: 'uk' },
  { code: 'ru', short: 'RU', name: 'Русский', locale: 'ru-RU', shots: 'ru' },
];
