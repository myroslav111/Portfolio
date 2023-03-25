import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      name: 'Kozar Myroslav',
      specialization: 'Front-End js developer / Back-End node.js developer',
      about: 'About Me',
      sites: 'My Sites',
      en: 'EN',
      ua: 'UA',
      hello: 'Hello',
      i: 'I am',
      i_can: 'I create Landing and multi-page sites.',
      education: 'Education',
      development: 'development',
      skills: 'Skills',
      i_can_work_with: 'I can work with',
      i_have_the_skills: 'I have the skills to work with',
      i_have_knowledge: 'I have knowledge of',
      i_can_use: 'I can use',
      'pre-processor': 'pre-processor',
      and: 'and',
      methodology: 'methodology',
      graphics_and_create_animations: 'graphics and create animations',
      i_know: 'I know',
      i_use_frameworks: 'I use frameworks',
      task_manager: 'taskmanager',
      principles: 'principles',
      group_work: 'I have experience of group work',
      remote_server: 'Studied the features of working with a remote server',
      languages: 'Languages',
      ukrainian: 'Ukrainian',
      english: 'English',
      de: 'Deutsch',
      ru: 'Russian',
      hronometr: 'App for count how many time takes reading text',
      icecream:
        'Landing page of ice cream company (Responsive website)Stack: -HTML; -SCSS;-pure;-js; -parcel;Has: -slider -animation',
      site_kinogo:
        'Project about searching for movies, and adding favorite movies to a client s library. Using pure JS, npm packages, themoviedb API.Stack HTML, SCSS, handlebars-templates, iframe-you-tobe, mockAPI(as back-end), animation css, infinity scroll for mobile ',
      internet_phonebook:
        'App Phone Book with authorization.Stack React, react-router-dom, react-redux toolkit, ts, axios, react-transition, i18next',
      site_webstudio:
        'Basic visit website. Layout example (Service Advertising).Stack HTML, SCSS, js',
      gallery:
        'Simple gallery (search by name on Pixabay API).Stack React, axios, react-transition-group, animation-css',
      galleryJs:
        'Simple gallery (search by name on Pixabay API).Stack js, axios, lazysizes, notiflix, handlebars, animation-css',
      site_rick:
        ' You can sort, filter, delete, and search by name characters from cartoon',
      next: 'Project on Next.js',

      site_lang_school:
        'Add words for learning (here are can use two languages for learning). When you finished delete them. App with google authorization. There is a translator. App in progress',
      converter: 'Converter currenct. Used navigator.geolocation',
      pets: 'The application solves the problem of finding or selling animals. Full stack aplication Front-End (react) Back-End (node.js, mongodb)',
      shop: 'eComerce. In the process of development, but many things are already working. Next.js/ts stack on node.js backend, mongo db database, photo on cloudinary. The front is placed on vercel, the back is on render',
    },
  },
  ua: {
    translation: {
      name: 'Козар Мирослав',
      specialization: 'Фронт-Енд розробник js / Бек-Енд розробник node.js',
      about: 'Про мене',
      sites: 'Мої проекти',
      en: 'Ан',
      ua: 'Укр',
      hello: 'Привіт',
      i: 'Я',
      i_can: 'Створюю Лендінг та багатосторінкові сайти.',
      education: 'Освіта',
      development: 'розробка',
      skills: 'Навички',
      i_can_work_with: 'Вмію працювати з',
      i_have_the_skills: 'Маю навички роботи з',
      i_have_knowledge: 'Маю знання з',
      i_can_use: 'Вмію використовувати',
      'pre-processor': 'препроцесор',
      and: 'та',
      methodology: 'методологію',
      graphics_and_create_animations: 'графікою та створювати анімації',
      i_know: 'Знаю',
      i_use_frameworks: 'Використовую фреймворки',
      task_manager: 'таск-менеджер',
      principles: 'принципи',
      group_work: 'Маю досвід групової роботи',
      remote_server: 'Вивчала особливості роботи з віддаленим сервером',
      languages: 'Мови',
      ukrainian: 'Українська',
      english: 'Англійська',
      de: 'Німецька',
      ru: 'Російска',
      hronometr: 'Додаток для підрахунку часу на читання тексту',
      icecream:
        'Лендінг (адаптивний). Stack: -HTML; -SCSS;-pure;-js; -parcel;Has: -slider -animation',
      site_kinogo:
        'Проект щодо пошуку фільмів і додавання улюблених фільмів до бібліотеки клієнта. Використання чистого JS, пакетів npm, API themoviedb.Стек HTML, SCSS, шаблони керма, iframe-you-tobe, mockAPI (як бек-енд), css анімації, нескінченна прокрутка для мобільних пристроїв',
      internet_phonebook:
        'Телефонна книга програми з авторизацією. Stack React, react-router-dom, react-redux toolkit, ts, axios, react-transition, i18next',
      site_webstudio:
        'Простий веб-сайт приклад верстки (реклама послуг). Стек HTML, SCSS, js',
      gallery:
        'Проста галерея (пошук за назвою в Pixabay API).Стек React, axios, react-transition-group, animation-css',
      galleryJs:
        'Проста галерея (пошук за назвою в Pixabay API).Стек js, axios, lazysizes, notiflix, handlebars, animation-css',
      site_rick:
        'Ви можете сортувати, фільтрувати, видаляти, шукати за іменами героїв мультфільму',
      site_lang_school:
        'Додайте слова для вивчення (тут можна використовувати дві мови для вивчення). Коли ви закінчите, видаліть їх. Програма з авторизацією Google. Є перекладач. Програма в розробці',
      converter: 'Конвертер валют. Використаний navigator.geolocation',
      next: 'Проект на Next.js ',
      pets: 'Додаток вирішує завдання пошуку тварин. Додаток із повним стеком  Front-End (react) Back-End (node.js, mongodb)',
      shop: 'eComerce. В процессі розробки але багато чого вже працює. Стек next.js/ts на бекенді node.js база данних mongo db фото на cloudinary. Фронт розміщений на vercel, бек на render',
    },
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // backend: {
    //   loadPath: '/assets/locales/{{lng}}/translation.json',
    // },
    resources,
    supportedLngs: ['en', 'ua'],

    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'cookie', 'htmlTag'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage', 'cookie'],
    },
    debug: true,

    interpolation: {
      escapeValue: false,
    },

    react: {
      wait: true,
    },
  });

export default i18n;
