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
    availability: "Responsibility. Results.",
    hero: {
      eyebrow: "iOS Developer · AI · Backend",
      role: "Rodion Kholodov",
      lead: "My core expertise is iOS development with Swift, UIKit and SwiftUI. I also explore AI and backend engineering with Go.",
      projects: "View projects",
      cv: "Download CV",
      nowLabel: "Now",
      nowValue: "Yandex · iOS",
      locationLabel: "Based in",
      locationValue: "Moscow, Russia",
      experienceLabel: "Experience",
      experienceValue: "iOS · AI · Go",
      focusLabel: "Priority",
      focusValue: "Results first",
    },
    about: {
      kicker: "About / 01",
      title: "Strong iOS. Responsible ownership.",
      paragraphs: [
        "I am an iOS developer with strong mobile expertise. I take responsibility for my work and see it through to a result — from an idea and architecture to a feature shipped in the product.",
        "Swift, UIKit and SwiftUI are my core stack. Alongside iOS, I explore AI and backend development with Go, expanding the range of problems I can solve.",
        "At Yandex, I work with the Maps SDK team on AI-assisted test debugging and integration coverage. Before that, I built educational and research products at HSE and Lobachevsky University.",
      ],
      cards: [
        { value: "iOS", label: "Core expertise" },
        { value: "Go", label: "Backend interest" },
        { value: "Result", label: "Main priority" },
      ],
    },
    experience: {
      kicker: "Experience / 02",
      title: "Real products, measurable improvements.",
      intro: "I take ownership of tasks and focus on outcomes that matter to users and the team.",
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
      title: "iOS at the core. AI and Go in progress.",
      intro: "A strong mobile stack plus the technologies I am actively exploring beyond it.",
      groups: [
        { title: "iOS", items: ["Swift", "UIKit", "SwiftUI", "Combine", "Core Data", "AVFoundation"] },
        { title: "Architecture", items: ["MVVM", "MVC", "MVP", "VIPER", "SOLID", "Coordinator", "DI"] },
        { title: "Quality", items: ["XCTest", "XCUITest", "Snapshot", "TDD", "Fastlane", "SwiftLint"] },
        { title: "Platform", items: ["Swift Concurrency", "GCD", "REST API", "Firebase", "Supabase", "Keychain"] },
        { title: "Backend & AI", items: ["Go", "Python", "AI agents", "MCP", "Codex", "REST API", "PostgreSQL"] },
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
      body: "I am open to strong teams and products where ownership, engineering quality and a real result matter.",
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
    availability: "Ответственность. Результат.",
    hero: {
      eyebrow: "iOS-разработчик · AI · Backend",
      role: "Родион Холодов",
      lead: "Моя основная экспертиза — iOS-разработка на Swift, UIKit и SwiftUI. Также увлекаюсь AI и backend-разработкой на Go.",
      projects: "Смотреть проекты",
      cv: "Скачать резюме",
      nowLabel: "Сейчас",
      nowValue: "Яндекс · iOS",
      locationLabel: "Город",
      locationValue: "Москва, Россия",
      experienceLabel: "Опыт",
      experienceValue: "iOS · AI · Go",
      focusLabel: "Приоритет",
      focusValue: "Результат",
    },
    about: {
      kicker: "Обо мне / 01",
      title: "Сильный iOS. Ответственный подход.",
      paragraphs: [
        "Я iOS-разработчик с сильной мобильной экспертизой. Беру ответственность за задачи и довожу их до результата — от идеи и архитектуры до готовой функции в продукте.",
        "Мой основной стек — Swift, UIKit и SwiftUI. Параллельно развиваюсь в AI и backend-разработке на Go, чтобы решать более широкий круг продуктовых задач.",
        "В Яндексе работаю с командой SDK Карт над AI-автоматизацией разбора тестов и интеграционным покрытием. Ранее создавал образовательные и исследовательские продукты в НИУ ВШЭ и ННГУ.",
      ],
      cards: [
        { value: "iOS", label: "Основная экспертиза" },
        { value: "Go", label: "Интерес к backend" },
        { value: "Результат", label: "Главный приоритет" },
      ],
    },
    experience: {
      kicker: "Опыт / 02",
      title: "Реальные продукты и измеримые улучшения.",
      intro: "Беру ответственность за задачи и фокусируюсь на результате, важном для пользователей и команды.",
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
      title: "iOS — основа. AI и Go — развитие.",
      intro: "Сильный мобильный стек и технологии, которые я активно осваиваю за его пределами.",
      groups: [
        { title: "iOS", items: ["Swift", "UIKit", "SwiftUI", "Combine", "Core Data", "AVFoundation"] },
        { title: "Архитектура", items: ["MVVM", "MVC", "MVP", "VIPER", "SOLID", "Coordinator", "DI"] },
        { title: "Качество", items: ["XCTest", "XCUITest", "Snapshot", "TDD", "Fastlane", "SwiftLint"] },
        { title: "Платформа", items: ["Swift Concurrency", "GCD", "REST API", "Firebase", "Supabase", "Keychain"] },
        { title: "Backend и AI", items: ["Go", "Python", "AI-агенты", "MCP", "Codex", "REST API", "PostgreSQL"] },
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
      body: "Открыт к сильным командам и продуктам, где ценятся ответственность, инженерное качество и реальный результат.",
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
