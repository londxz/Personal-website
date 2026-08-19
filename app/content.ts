export type Language = "en" | "ru";

type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  points: string[];
};

type SkillGroup = {
  title: string;
  items: string[];
};

type Project = {
  name: string;
  kind: string;
  description: string;
  stack: string[];
  github: string;
  visual: "speech" | "messages" | "research" | "courier";
};

export type SiteContent = {
  nav: { id: string; label: string }[];
  availability: string;
  hero: {
    eyebrow: string;
    role: string;
    lead: string;
    projects: string;
    cv: string;
    nowLabel: string;
    nowValue: string;
    locationLabel: string;
    locationValue: string;
    experienceLabel: string;
    experienceValue: string;
    focusLabel: string;
    focusValue: string;
  };
  about: {
    kicker: string;
    title: string;
    paragraphs: string[];
    cards: { value: string; label: string }[];
  };
  experience: {
    kicker: string;
    title: string;
    intro: string;
    items: Experience[];
  };
  skills: {
    kicker: string;
    title: string;
    intro: string;
    groups: SkillGroup[];
  };
  projects: {
    kicker: string;
    title: string;
    intro: string;
    source: string;
    items: Project[];
  };
  contact: {
    kicker: string;
    title: string;
    body: string;
    copy: string;
    copied: string;
    cv: string;
  };
  footer: string;
};

export const content: Record<Language, SiteContent> = {
  en: {
    nav: [
      { id: "top", label: "Home" },
      { id: "about", label: "About" },
      { id: "experience", label: "Experience" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "contact", label: "Contact" },
    ],
    availability: "Building thoughtful products",
    hero: {
      eyebrow: "iOS Developer · Product Engineer",
      role: "Rodion Kholodov",
      lead: "I build thoughtful iOS products with Swift, UIKit and SwiftUI - from polished interfaces to reliable CI, testing and product architecture.",
      projects: "View projects",
      cv: "Download CV",
      nowLabel: "Now",
      nowValue: "Yandex · iOS",
      locationLabel: "Based in",
      locationValue: "Moscow, Russia",
      experienceLabel: "Experience",
      experienceValue: "iOS · AI · CI",
      focusLabel: "Focus",
      focusValue: "Product quality",
    },
    about: {
      kicker: "About / 01",
      title: "Engineering interfaces that feel simple.",
      paragraphs: [
        "I am an iOS developer who enjoys shipping features and improving the systems behind them. My work spans product UI, app architecture, automated testing and CI reliability.",
        "At Yandex, I work with the Maps SDK team on AI-assisted CI debugging and integration coverage across iOS and Android. Before that, I built educational and research products at HSE and Lobachevsky University.",
        "I care about details users notice - and the engineering details they should never have to notice.",
      ],
      cards: [
        { value: "2026", label: "HSE graduate" },
        { value: "4", label: "Featured products" },
        { value: "Swift", label: "Core language" },
      ],
    },
    experience: {
      kicker: "Experience / 02",
      title: "Real products, measurable improvements.",
      intro: "From research platforms to developer infrastructure, I work where product quality and engineering discipline meet.",
      items: [
        {
          company: "Yandex · Maps SDK",
          role: "iOS Developer Intern",
          period: "May 2026 - Present",
          location: "Moscow",
          description: "Improving mobile SDK quality and the way teams investigate CI failures.",
          points: [
            "Designed AI-assisted test debugging for CI failures.",
            "Built a Python pipeline that collects errors, logs and run metadata.",
            "Expanded integration coverage across iOS and Android.",
          ],
        },
        {
          company: "HSE · APP X",
          role: "iOS Developer",
          period: "Apr 2026 - May 2026",
          location: "Moscow",
          description: "Worked across product delivery, backend communication and analytics.",
          points: [
            "Developed the Group Composition product flow from scratch.",
            "Fixed long-standing GitLab validation and platform-specific issues.",
          ],
        },
        {
          company: "Lobachevsky University · GTO-M",
          role: "Developer",
          period: "Oct 2024 - Oct 2025",
          location: "Nizhny Novgorod",
          description: "Built a multi-platform ecosystem for cognitive research.",
          points: [
            "Developed iOS, Android and web product surfaces.",
            "Coordinated four student developers and product delivery.",
            "Unified legacy apps into a Vue.js and Django platform with 72 tests.",
          ],
        },
      ],
    },
    skills: {
      kicker: "Skills / 03",
      title: "A focused mobile toolkit.",
      intro: "The technologies I use to move from an idea to a reliable product.",
      groups: [
        { title: "iOS", items: ["Swift", "UIKit", "SwiftUI", "Combine", "Core Data", "AVFoundation"] },
        { title: "Architecture", items: ["MVVM", "MVC", "MVP", "VIPER", "SOLID", "Coordinator", "DI"] },
        { title: "Quality", items: ["XCTest", "XCUITest", "Snapshot", "TDD", "Fastlane", "SwiftLint", "CI"] },
        { title: "Platform", items: ["Swift Concurrency", "GCD", "REST API", "Firebase", "Supabase", "Keychain"] },
        { title: "AI & Tools", items: ["Codex", "Claude", "AI agents", "MCP", "Git", "Figma", "Postman"] },
      ],
    },
    projects: {
      kicker: "Selected work / 04",
      title: "Products built to be used.",
      intro: "Selected public projects from speech technology, communication, research and logistics.",
      source: "View source",
      items: [
        {
          name: "Speechy",
          kind: "Offline speech translation",
          description: "An offline-first iOS app that recognizes speech, translates it and voices the result directly on device.",
          stack: ["SwiftUI", "WhisperKit", "Core ML", "AVFoundation"],
          github: "https://github.com/londxz/Speechy",
          visual: "speech",
        },
        {
          name: "Messenger",
          kind: "Accessible communication",
          description: "A messenger focused on accessibility, maintainable architecture and extensive automated quality checks.",
          stack: ["SwiftUI", "Firebase", "XCTest", "Fastlane"],
          github: "https://github.com/londxz/Messenger",
          visual: "messages",
        },
        {
          name: "GTO-M",
          kind: "Cognitive research ecosystem",
          description: "A mobile client for a cross-platform cognitive research system used to run and collect structured tests.",
          stack: ["Swift", "UIKit", "REST API", "Analytics"],
          github: "https://github.com/londxz/cognitive_ios",
          visual: "research",
        },
        {
          name: "CourierShift",
          kind: "Courier shift planning",
          description: "A from-scratch mobile flow for authentication, profile management and selecting courier work shifts.",
          stack: ["Swift", "JWT", "REST API", "Figma"],
          github: "https://github.com/londxz/courierShift",
          visual: "courier",
        },
      ],
    },
    contact: {
      kicker: "Contact / 05",
      title: "Have a product worth caring about?",
      body: "I am always glad to meet strong teams, discuss iOS engineering and exchange ideas about thoughtful product development.",
      copy: "Copy email",
      copied: "Copied!",
      cv: "Open CV",
    },
    footer: "Designed and built by Rodion Kholodov.",
  },
  ru: {
    nav: [
      { id: "top", label: "Главная" },
      { id: "about", label: "Обо мне" },
      { id: "experience", label: "Опыт" },
      { id: "skills", label: "Навыки" },
      { id: "projects", label: "Проекты" },
      { id: "contact", label: "Контакты" },
    ],
    availability: "Создаю продуманные продукты",
    hero: {
      eyebrow: "iOS-разработчик · Product Engineer",
      role: "Родион Холодов",
      lead: "Создаю продуманные iOS-продукты на Swift, UIKit и SwiftUI - от аккуратных интерфейсов до надёжных CI, тестов и архитектуры.",
      projects: "Смотреть проекты",
      cv: "Скачать резюме",
      nowLabel: "Сейчас",
      nowValue: "Яндекс · iOS",
      locationLabel: "Город",
      locationValue: "Москва, Россия",
      experienceLabel: "Опыт",
      experienceValue: "iOS · AI · CI",
      focusLabel: "Фокус",
      focusValue: "Качество продукта",
    },
    about: {
      kicker: "Обо мне / 01",
      title: "Сложная инженерия, простой интерфейс.",
      paragraphs: [
        "Я iOS-разработчик, которому нравится выпускать функции и улучшать системы вокруг них. Работаю с продуктовыми интерфейсами, архитектурой приложений, автоматическими тестами и надёжностью CI.",
        "В Яндексе занимаюсь AI-автоматизацией разбора падений CI и интеграционными тестами SDK Карт на iOS и Android. Ранее создавал образовательные и исследовательские продукты в НИУ ВШЭ и ННГУ.",
        "Мне важны детали, которые замечает пользователь, и инженерные детали, которые он замечать не должен.",
      ],
      cards: [
        { value: "2026", label: "Выпускник ВШЭ" },
        { value: "4", label: "Избранных проекта" },
        { value: "Swift", label: "Основной язык" },
      ],
    },
    experience: {
      kicker: "Опыт / 02",
      title: "Реальные продукты и измеримые улучшения.",
      intro: "От исследовательских платформ до инфраструктуры разработчиков - работаю на пересечении качества продукта и инженерной дисциплины.",
      items: [
        {
          company: "Яндекс · SDK Карт",
          role: "iOS-разработчик, стажёр",
          period: "Май 2026 - настоящее время",
          location: "Москва",
          description: "Улучшаю качество мобильного SDK и процесс расследования падений CI.",
          points: [
            "Разработал AI-автоматизацию дебага тестов при падениях CI.",
            "Создал Python-пайплайн сбора ошибок, логов и метаданных запусков.",
            "Расширил интеграционное покрытие iOS и Android.",
          ],
        },
        {
          company: "НИУ ВШЭ · APP X",
          role: "iOS-разработчик",
          period: "Апрель 2026 - Май 2026",
          location: "Москва",
          description: "Работал с продуктовой разработкой, backend-взаимодействием и аналитикой.",
          points: [
            "Создал фичу «Состав группы» с нуля.",
            "Исправил многолетнюю GitLab-проверку и платформенные ошибки.",
          ],
        },
        {
          company: "ННГУ · ГТО-М",
          role: "Разработчик",
          period: "Октябрь 2024 - Октябрь 2025",
          location: "Нижний Новгород",
          description: "Создавал мультиплатформенную экосистему для когнитивных исследований.",
          points: [
            "Разрабатывал iOS, Android и web-части продукта.",
            "Координировал четырёх студентов-разработчиков.",
            "Объединил legacy-приложения в платформу Vue.js + Django с 72 тестами.",
          ],
        },
      ],
    },
    skills: {
      kicker: "Навыки / 03",
      title: "Сфокусированный мобильный стек.",
      intro: "Технологии, с которыми я превращаю идею в надёжный продукт.",
      groups: [
        { title: "iOS", items: ["Swift", "UIKit", "SwiftUI", "Combine", "Core Data", "AVFoundation"] },
        { title: "Архитектура", items: ["MVVM", "MVC", "MVP", "VIPER", "SOLID", "Coordinator", "DI"] },
        { title: "Качество", items: ["XCTest", "XCUITest", "Snapshot", "TDD", "Fastlane", "SwiftLint", "CI"] },
        { title: "Платформа", items: ["Swift Concurrency", "GCD", "REST API", "Firebase", "Supabase", "Keychain"] },
        { title: "AI и инструменты", items: ["Codex", "Claude", "AI-агенты", "MCP", "Git", "Figma", "Postman"] },
      ],
    },
    projects: {
      kicker: "Избранные работы / 04",
      title: "Продукты, которыми можно пользоваться.",
      intro: "Публичные проекты на пересечении speech-технологий, коммуникаций, исследований и логистики.",
      source: "Открыть код",
      items: [
        {
          name: "Speechy",
          kind: "Офлайн-перевод речи",
          description: "Offline-first iOS-приложение, которое распознаёт речь, переводит и озвучивает результат прямо на устройстве.",
          stack: ["SwiftUI", "WhisperKit", "Core ML", "AVFoundation"],
          github: "https://github.com/londxz/Speechy",
          visual: "speech",
        },
        {
          name: "Messenger",
          kind: "Доступные коммуникации",
          description: "Мессенджер с фокусом на accessibility, поддерживаемую архитектуру и широкое автоматизированное тестирование.",
          stack: ["SwiftUI", "Firebase", "XCTest", "Fastlane"],
          github: "https://github.com/londxz/Messenger",
          visual: "messages",
        },
        {
          name: "ГТО-М",
          kind: "Экосистема когнитивных исследований",
          description: "Мобильный клиент кроссплатформенной системы для проведения и структурированного сбора когнитивных тестов.",
          stack: ["Swift", "UIKit", "REST API", "Analytics"],
          github: "https://github.com/londxz/cognitive_ios",
          visual: "research",
        },
        {
          name: "CourierShift",
          kind: "Планирование смен курьеров",
          description: "Созданный с нуля мобильный flow авторизации, профиля и выбора рабочих смен курьера.",
          stack: ["Swift", "JWT", "REST API", "Figma"],
          github: "https://github.com/londxz/courierShift",
          visual: "courier",
        },
      ],
    },
    contact: {
      kicker: "Контакты / 05",
      title: "Есть продукт, о котором хочется заботиться?",
      body: "Буду рад познакомиться с сильной командой, обсудить iOS-разработку или обменяться идеями о качественных цифровых продуктах.",
      copy: "Скопировать email",
      copied: "Скопировано!",
      cv: "Открыть резюме",
    },
    footer: "Дизайн и разработка - Родион Холодов.",
  },
};

export const contactLinks = {
  github: "https://github.com/londxz",
  telegram: "https://t.me/londxz",
  email: "londxz@yandex.ru",
};
