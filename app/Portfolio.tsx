"use client";

import { useEffect, useMemo, useState } from "react";
import { contactLinks, content, type Language } from "./content";

type Theme = "dark" | "light";

export default function Portfolio() {
  const [language, setLanguage] = useState<Language>("ru");
  const [theme, setTheme] = useState<Theme>("light");
  const [activeSection, setActiveSection] = useState("top");
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const copy = useMemo(() => content[language], [language]);

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem("language-v2") as Language | null;
    const storedTheme = window.localStorage.getItem("theme-v2") as Theme | null;
    setLanguage(storedLanguage === "en" ? "en" : "ru");
    setTheme(storedTheme === "light" || storedTheme === "dark" ? storedTheme : "light");
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme-v2", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("language-v2", language);
  }, [language]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-section]"));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-22% 0px -56%", threshold: [0.05, 0.25, 0.55] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [language]);

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
    document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
  }

  async function copyEmail() {
    let success = false;
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(contactLinks.email);
        success = true;
      }
    } catch {
      success = false;
    }

    if (!success) {
      const input = document.createElement("textarea");
      input.value = contactLinks.email;
      input.setAttribute("readonly", "");
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.select();
      success = document.execCommand("copy");
      input.remove();
    }

    if (success) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } else {
      window.location.href = `mailto:${contactLinks.email}`;
    }
  }

  return (
    <div className="site-shell" onPointerMove={handlePointerMove}>
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />
      <div className="cursor-light" aria-hidden="true" />

      <aside className={`sidebar glass-panel ${menuOpen ? "menu-open" : ""}`}>
        <div className="sidebar-head">
          <a className="brand" href="#top" aria-label="londxz — на главную" onClick={() => { setActiveSection("top"); setMenuOpen(false); }}>
            londxz
          </a>
          <button
            className="menu-toggle control-button"
            type="button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? (language === "ru" ? "Закрыть навигацию" : "Close navigation") : (language === "ru" ? "Открыть навигацию" : "Open navigation")}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? (language === "ru" ? "Закрыть" : "Close") : (language === "ru" ? "Меню" : "Menu")}
          </button>
        </div>

        <nav className="side-nav" aria-label={language === "ru" ? "Основная навигация" : "Primary navigation"}>
          {copy.nav.map((item) => (
            <a
              className={activeSection === item.id ? "active" : ""}
              href={`#${item.id}`}
              key={item.id}
              onClick={() => { setActiveSection(item.id); setMenuOpen(false); }}
            >
              <span>{item.label}</span>
              <span aria-hidden="true">↘</span>
            </a>
          ))}
        </nav>

        <div className="sidebar-controls">
          <button
            className="control-button"
            type="button"
            aria-label={language === "en" ? "Switch to Russian" : "Switch to English"}
            onClick={() => setLanguage((value) => (value === "en" ? "ru" : "en"))}
          >
            {language === "en" ? "RU" : "EN"}
          </button>
          <button
            className="control-button theme-button"
            type="button"
            aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
            onClick={() => setTheme((value) => (value === "dark" ? "light" : "dark"))}
          >
            <span aria-hidden="true">{theme === "dark" ? "○" : "●"}</span>
          </button>
        </div>

        <div className="sidebar-bottom">
          <span className="availability-dot" aria-hidden="true" />
          <span>{copy.availability}</span>
        </div>
      </aside>

      <main className="main-content">
        <section className="hero" id="top" data-section aria-labelledby="hero-title">
          <div className="hero-copy hero-enter">
            <p className="eyebrow">{copy.hero.eyebrow}</p>
            <h1 id="hero-title">
              {language === "en" ? "Rodion" : "Родион"}
              <span>{language === "en" ? "Kholodov" : "Холодов"}</span>
            </h1>
            <p className="hero-lead">{copy.hero.lead}</p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                {copy.hero.projects} <span aria-hidden="true">↘</span>
              </a>
              <a className="button button-glass" href="/Rodion-Kholodov-CV.pdf" target="_blank" rel="noreferrer">
                {copy.hero.cv} <span aria-hidden="true">↓</span>
              </a>
            </div>

            <div className="hero-facts">
              <div className="glass-chip">
                <span className="chip-label">{copy.hero.nowLabel}</span>
                <strong>{copy.hero.nowValue}</strong>
              </div>
              <div className="glass-chip">
                <span className="chip-label">{copy.hero.locationLabel}</span>
                <strong>{copy.hero.locationValue}</strong>
              </div>
            </div>
          </div>

          <div className="portrait-stage hero-enter hero-enter-late" aria-label={copy.hero.role}>
            <div className="portrait-glow" aria-hidden="true" />
            <div className="portrait-frame">
              <img
                src="/assets/rodion-kholodov-photoroom-retina.png"
                alt={language === "en" ? "Rodion Kholodov speaking at a technology event" : "Родион Холодов выступает на технологическом мероприятии"}
                width="2400"
                height="1974"
              />
            </div>
            <div className="floating-badge badge-top glass-panel">
              <span>{copy.hero.experienceLabel}</span>
              <strong>{copy.hero.experienceValue}</strong>
            </div>
            <div className="floating-badge badge-bottom glass-panel">
              <span>{copy.hero.focusLabel}</span>
              <strong>{copy.hero.focusValue}</strong>
            </div>
          </div>
        </section>

        <section className="section" id="about" data-section aria-labelledby="about-title">
          <div className="section-heading reveal">
            <p className="section-kicker">{copy.about.kicker}</p>
            <h2 id="about-title">{copy.about.title}</h2>
          </div>
          <div className="about-grid">
            <article className="glass-card story-card reveal">
              {copy.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </article>
            <div className="stat-grid reveal">
              {copy.about.cards.map((card) => (
                <div className="glass-card stat-card" key={card.label}>
                  <strong>{card.value}</strong>
                  <span>{card.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="experience" data-section aria-labelledby="experience-title">
          <div className="section-heading split-heading reveal">
            <div>
              <p className="section-kicker">{copy.experience.kicker}</p>
              <h2 id="experience-title">{copy.experience.title}</h2>
            </div>
            <p>{copy.experience.intro}</p>
          </div>
          <div className="timeline">
            {copy.experience.items.map((item, index) => (
              <article className="experience-card glass-card reveal" key={`${item.company}-${item.period}`}>
                <div className="timeline-index">0{index + 1}</div>
                <div className="experience-main">
                  <span className="experience-period">{item.period} · {item.location}</span>
                  <h3>{item.role}</h3>
                  <strong>{item.company}</strong>
                  <p>{item.description}</p>
                </div>
                <ul>
                  {item.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="skills" data-section aria-labelledby="skills-title">
          <div className="section-heading split-heading reveal">
            <div>
              <p className="section-kicker">{copy.skills.kicker}</p>
              <h2 id="skills-title">{copy.skills.title}</h2>
            </div>
            <p>{copy.skills.intro}</p>
          </div>
          <div className="skills-grid">
            {copy.skills.groups.map((group, index) => (
              <article className="skill-card glass-card reveal" key={group.title}>
                <span className="card-number">0{index + 1}</span>
                <h3>{group.title}</h3>
                <div className="tag-list">
                  {group.items.map((item) => <span className="tag" key={item}>{item}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects" data-section aria-labelledby="projects-title">
          <div className="section-heading split-heading reveal">
            <div>
              <p className="section-kicker">{copy.projects.kicker}</p>
              <h2 id="projects-title">{copy.projects.title}</h2>
            </div>
            <p>{copy.projects.intro}</p>
          </div>
          <div className="projects-grid">
            {copy.projects.items.map((project, index) => (
              <article className="project-card glass-card reveal" key={project.name}>
                <div className={`project-visual visual-${project.visual}`} aria-hidden="true">
                  <span className="project-orbit orbit-one" />
                  <span className="project-orbit orbit-two" />
                  <div className="mini-phone">
                    <span className="phone-island" />
                    <span className="phone-line line-short" />
                    <span className="phone-line" />
                    <span className="phone-card" />
                    <span className="phone-action" />
                  </div>
                  <span className="project-index">0{index + 1}</span>
                </div>
                <div className="project-copy">
                  <span className="project-kind">{project.kind}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list compact-tags">
                    {project.stack.map((item) => <span className="tag" key={item}>{item}</span>)}
                  </div>
                  <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
                    {copy.projects.source} <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact" data-section aria-labelledby="contact-title">
          <div className="contact-card glass-card reveal">
            <div>
              <p className="section-kicker">{copy.contact.kicker}</p>
              <h2 id="contact-title">{copy.contact.title}</h2>
              <p className="contact-body">{copy.contact.body}</p>
            </div>
            <div className="contact-actions">
              <a className="contact-email" href={`mailto:${contactLinks.email}`}>{contactLinks.email}</a>
              <button className="button button-primary" type="button" onClick={copyEmail}>
                {copied ? copy.contact.copied : copy.contact.copy}
              </button>
              <a className="button button-glass" href="/Rodion-Kholodov-CV.pdf" target="_blank" rel="noreferrer">
                {copy.contact.cv} <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="contact-links">
              <a href={contactLinks.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href={contactLinks.telegram} target="_blank" rel="noreferrer">Telegram ↗</a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <span>© {new Date().getFullYear()} Rodion Kholodov</span>
          <span>{copy.footer}</span>
          <a href="#top">{language === "ru" ? "Наверх" : "Back to top"} ↑</a>
        </footer>
      </main>
    </div>
  );
}
