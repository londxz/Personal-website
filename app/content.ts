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
    experienceCta: string;
    cv: string;
    nowLabel: string;
    nowValue: string;
    ownProjectsLabel: string;
    ownProjectsValue: string;
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
      { id: "experience", label: "Work experience" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Own projects" },
      { id: "contact", label: "Contact" },
    ],
    availability: "Responsibility. Results.",
    hero: {
      eyebrow: "iOS Developer · AI-powered mobile products",
      role: "Rodion Kholodov",
      lead: "My focus is iOS: Swift, UIKit and SwiftUI. I use AI in mobile development and grow at the intersection of iOS and AI; in my free time, I build backend projects with Go.",
      experienceCta: "View work experience",
      cv: "Download CV",
      nowLabel: "Now",
      nowValue: "Yandex · iOS",
      ownProjectsLabel: "Own projects",
      ownProjectsValue: "4 public products",
      experienceLabel: "Experience",
      experienceValue: "iOS · AI",
      focusLabel: "Priority",
      focusValue: "Results first",
    },
    about: {
      kicker: "About / 01",
      title: "iOS first. AI where it adds value.",
      paragraphs: [
        "I am an iOS developer with strong mobile expertise. I take responsibility for my work and see it through to a result — from an idea and architecture to a feature shipped in the product.",
        "iOS is my professional focus. I use AI to improve mobile products and engineering workflows, and I keep developing this expertise. Go backend is a personal direction I explore through side projects in my free time.",
        "At Yandex, I work with the Maps SDK team on AI-assisted test debugging and integration coverage. Before that, I built educational and research products at HSE and Lobachevsky University.",
      ],
      cards: [
        { value: "iOS", label: "Core expertise" },
        { value: "AI", label: "For mobile products" },
        { value: "Result", label: "Main priority" },
      ],
    },
    experience: {
      kicker: "Commercial experience / 02",
      title: "Real products, measurable improvements.",
      intro: "Commercial experience in product and research teams. I take ownership of tasks and focus on outcomes that matter to users and the team.",
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
      title: "iOS at the core. AI for mobile. Go on the side.",
      intro: "Swift, UIKit and SwiftUI form my professional foundation. I apply AI to mobile tasks and explore Go through personal backend projects.",
      groups: [
        { title: "iOS", items: ["Swift", "UIKit", "SwiftUI", "Combine", "Core Data", "AVFoundation"] },
        { title: "Architecture", items: ["MVVM", "MVC", "MVP", "VIPER", "SOLID", "Coordinator", "DI"] },
        { title: "Quality", items: ["XCTest", "XCUITest", "Snapshot", "TDD", "Fastlane", "SwiftLint"] },
        { title: "Platform", items: ["Swift Concurrency", "GCD", "REST API", "Firebase", "Supabase", "Keychain"] },
        { title: "AI for iOS · Go side projects", items: ["AI agents", "Core ML", "Python", "MCP", "Go", "PostgreSQL"] },
      ],
    },
    projects: {
      kicker: "Own projects / 04",
      title: "Products built to be used.",
      intro: "Four public products where I turn a problem into a working solution — from product thinking and architecture to implementation and source code.",
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
      body: "I am open to strong iOS teams and mobile products where AI can create real value — and where ownership, engineering quality and outcomes matter.",
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
      { id: "experience", label: "Опыт работы" },
      { id: "skills", label: "Навыки" },
      { id: "projects", label: "Свои проекты" },
      { id: "contact", label: "Контакты" },
    ],
    availability: "Ответственность. Результат.",
    hero: {
      eyebrow: "iOS-разработчик · AI в мобильных продуктах",
      role: "Родион Холодов",
      lead: "Мой главный фокус — iOS: Swift, UIKit и SwiftUI. Использую AI в мобильной разработке и развиваюсь на стыке iOS и AI; в свободное время пишу backend на Go.",
      experienceCta: "Смотреть опыт работы",
      cv: "Скачать резюме",
      nowLabel: "Сейчас",
      nowValue: "Яндекс · iOS",
      ownProjectsLabel: "Собственные проекты",
      ownProjectsValue: "4 публичных продукта",
      experienceLabel: "Опыт",
      experienceValue: "iOS · AI",
      focusLabel: "Приоритет",
      focusValue: "Результат",
    },
    about: {
      kicker: "Обо мне / 01",
      title: "iOS — основной фокус. AI — усиление продукта.",
      paragraphs: [
        "Я iOS-разработчик с сильной мобильной экспертизой. Беру ответственность за задачи и довожу их до результата — от идеи и архитектуры до готовой функции в продукте.",
        "iOS — мой профессиональный фокус. Применяю AI в мобильных продуктах и инженерных процессах и продолжаю развивать эту экспертизу. Backend на Go — отдельное направление для собственных проектов в свободное время.",
        "В Яндексе работаю с командой SDK Карт над AI-автоматизацией разбора тестов и интеграционным покрытием. Ранее создавал образовательные и исследовательские продукты в НИУ ВШЭ и ННГУ.",
      ],
      cards: [
        { value: "iOS", label: "Основная экспертиза" },
        { value: "AI", label: "Для мобильных продуктов" },
        { value: "Результат", label: "Главный приоритет" },
      ],
    },
    experience: {
      kicker: "Коммерческий опыт / 02",
      title: "Реальные продукты и измеримые улучшения.",
      intro: "Коммерческий опыт в продуктовых и исследовательских командах. Беру ответственность за задачи и фокусируюсь на результате, важном для пользователей и команды.",
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
      title: "iOS — основа. AI — для мобильных продуктов. Go — для своих проектов.",
      intro: "Swift, UIKit и SwiftUI — моя профессиональная база. AI применяю в мобильных задачах, а Go изучаю через собственные backend-проекты.",
      groups: [
        { title: "iOS", items: ["Swift", "UIKit", "SwiftUI", "Combine", "Core Data", "AVFoundation"] },
        { title: "Архитектура", items: ["MVVM", "MVC", "MVP", "VIPER", "SOLID", "Coordinator", "DI"] },
        { title: "Качество", items: ["XCTest", "XCUITest", "Snapshot", "TDD", "Fastlane", "SwiftLint"] },
        { title: "Платформа", items: ["Swift Concurrency", "GCD", "REST API", "Firebase", "Supabase", "Keychain"] },
        { title: "AI для iOS · Go pet-проекты", items: ["AI-агенты", "Core ML", "Python", "MCP", "Go", "PostgreSQL"] },
      ],
    },
    projects: {
      kicker: "Собственные проекты / 04",
      title: "Продукты, которыми можно пользоваться.",
      intro: "Четыре публичных продукта, в которых я сам превращаю проблему в работающее решение — от продуктовой идеи и архитектуры до реализации и открытого кода.",
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
      body: "Открыт к сильным iOS-командам и мобильным продуктам, где AI приносит реальную пользу, а ответственность, инженерное качество и результат действительно важны.",
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
