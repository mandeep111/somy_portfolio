"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  ["Profile", "#profile"],
  ["Education", "#education"],
  ["Experience", "#experience"],
  ["Services", "#services"],
  ["Awards", "#awards"],
  ["Publications", "#publications"],
  ["Field Research", "#field-research"],
  ["Contact", "#contact"]
];

const education = [
  {
    year: "2024",
    title: "Master's in Environmental Science",
    text: "Tribhuvan University"
  },
  {
    year: "2020",
    title: "Bachelor of Science",
    text: "Mechi Multiple Campus"
  },
  {
    year: "Thesis & Case Studies",
    title: "Hydrochemistry, aquaculture, and air quality",
    text: "Hydrochemistry of water in the Tamor River Basin, cage fish farming in Kulekhani, air quality in Birgunj, and indoor air quality and health in Jhapa."
  }
];

const experience = [
  {
    label: "Research Assistant",
    title: "Climate Risk & Resilience Lab",
    text: "Supporting environmental research, risk communication, and resilience-focused work."
  },
  {
    label: "Field Research Assistant",
    title: "Tribhuvan University",
    text: "Contributing to river and environmental field research through sampling, observation, and coordination."
  },
  {
    label: "Freelance Projects",
    title: "Research and environmental support",
    text: "Research assistance, writing, field support, technical documentation, and applied environmental work."
  }
];

const services = [
  ["Research Design", "Practical research workflows, case studies, and field plans."],
  ["Field Research", "Sampling, documentation, coordination, and field logistics."],
  ["Scientific Writing", "Reports, articles, summaries, and technical documentation."],
  ["Data & Geospatial Work", "Environmental data, maps, visualization, and interpretation."]
];

const awards = [
  ["2024", "Grantee", "Ministry of Forest, Environment & Soil Conservation"],
  ["2022", "Citizen Science of the Year", "S4W Nepal"]
];

const skills = [
  "Scientific Writing",
  "Research Design and Methodology",
  "Geospatial Analysis",
  "Data Analysis and Visualization",
  "Statistical Analysis",
  "Technical Writing",
  "Critical Thinking and Problem Solving",
  "Presentation and Communication"
];

const publications = [
  [
    "2026",
    "Chemical Characterization and Spatial Distribution of Microplastics in the Surface Water",
    ""
  ],
  ["2025", "How Sand Mining is Shaping the Trishuli River", "Earth Systems & Environment"],
  [
    "2024",
    "Hydro-chemical characteristics of Biring & Tangting Rivers",
    "Environmental Research"
  ],
  ["2024", "Loss and Damage in the Everest Region", "Digo Bikas Institute"],
  ["2024", "Virtual Reality Classroom", "UNDRR"]
];

const reflections = [
  {
    label: "River Field Research",
    title: "Wai Wai, sand dust, and water samples.",
    wide: true,
    paragraphs: [
      "During my Master's thesis in 2024, my friends and I walked long stretches along the Arun and Tamor rivers with sample bottles, heavy instruments, and empty stomachs. The work was physically demanding, but it taught me the realities of field research.",
      "Hot riverbanks, risky gravel roads, monsoon travel, limited lab supplies, and long data-analysis sessions turned the project into a full test of patience, teamwork, and problem-solving. Somehow, all of it led to my first Bhattarai et al."
    ]
  },
  {
    label: "Fear & Future",
    title: "Finding my voice.",
    paragraphs: [
      "I do not usually raise my hand first, but that does not mean I do not try. I enjoy sharing ideas, advocating for meaningful work, listening to communities, and slowly building the knowledge and experience to speak with purpose."
    ]
  },
  {
    label: "The Trek That Felt Impossible",
    title: "Every step is progress.",
    paragraphs: [
      "In 2025, my team trekked to Kori and Kapuche at around 3800 meters. By the second day, every step felt heavy. With my team's support, I kept moving and made it. That trek still reminds me that slow progress is still progress."
    ]
  }
];

function useLoopingTypewriter(text, options = {}) {
  const [typedText, setTypedText] = useState("");
  const {
    deleteSpeed = 28,
    pause = 1300,
    startDelay = 0,
    typeSpeed = 55
  } = options;

  useEffect(() => {
    let index = 0;
    let deleting = false;
    let timer;

    function tick() {
      setTypedText(text.slice(0, index));

      if (!deleting && index === text.length) {
        deleting = true;
        timer = window.setTimeout(tick, pause);
        return;
      }

      if (deleting && index === 0) {
        deleting = false;
        timer = window.setTimeout(tick, startDelay || 520);
        return;
      }

      index += deleting ? -1 : 1;
      timer = window.setTimeout(tick, deleting ? deleteSpeed : typeSpeed);
    }

    timer = window.setTimeout(tick, startDelay);
    return () => window.clearTimeout(timer);
  }, [deleteSpeed, pause, startDelay, text, typeSpeed]);

  return typedText;
}

function Typewriter() {
  const typedText = useLoopingTypewriter('I am Somy (like "so + me").');

  return (
    <p className="type-line" aria-label={`Hi, ${typedText}`}>
      <span className="type-static">Hi, </span>
      <span>{typedText}</span>
      <span className="cursor" aria-hidden="true" />
    </p>
  );
}

function QuoteTypewriter() {
  const typedText = useLoopingTypewriter("Everything happens for our own good.", {
    pause: 1700,
    startDelay: 260,
    typeSpeed: 62
  });

  return (
    <blockquote aria-label={`Quote: ${typedText}`}>
      <span aria-hidden="true">"</span>
      <span>{typedText}</span>
      <span className="cursor quote-cursor" aria-hidden="true" />
      <span aria-hidden="true">"</span>
    </blockquote>
  );
}

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("drawer-open", drawerOpen);

    function handleKeyDown(event) {
      if (event.key === "Escape") setDrawerOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.classList.remove("drawer-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [drawerOpen]);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Somy Bhattarai home">
        <span className="brand-mark">SB</span>
        <span>Somy Bhattarai</span>
      </a>

      <nav className="site-nav" aria-label="Primary navigation">
        {navItems.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>

      <button
        className="drawer-toggle"
        type="button"
        aria-controls="mobile-navigation"
        aria-expanded={drawerOpen}
        aria-label={drawerOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setDrawerOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>

      <div
        className="drawer-backdrop"
        hidden={!drawerOpen}
        onClick={() => setDrawerOpen(false)}
      />

      <nav
        className="drawer-nav"
        id="mobile-navigation"
        aria-label="Mobile navigation"
        data-open={drawerOpen}
      >
        <div className="drawer-head">
          <span>Navigation</span>
          <button type="button" onClick={() => setDrawerOpen(false)}>
            Close
          </button>
        </div>
        {navItems.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setDrawerOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default function Portfolio() {
  useEffect(() => {
    document.body.classList.add("loaded");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    document.querySelectorAll("[data-reveal]").forEach((item, index) => {
      item.style.setProperty("--delay", `${Math.min(index * 32, 220)}ms`);
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />

      <main id="home">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy reveal" data-effect="slide-right" data-reveal>
            <p className="eyebrow">Water, Climate & Disaster Resilience</p>
            <h1 id="hero-title">Somy Bhattarai</h1>
            <p className="hero-kicker">
              In a slightly chaotic journey to earn that "Dr." before my name.
            </p>
            <Typewriter />
            <p className="hero-lede">
              Environmental Science graduate focused on research that moves
              beyond identifying problems and toward actionable solutions.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button primary" href="#profile">
                Meet Somy
              </a>
              <a className="button secondary" href="#contact">
                Contact
              </a>
            </div>
          </div>

          <div className="hero-media reveal" data-effect="scale-in" data-reveal>
            <div className="hero-portrait">
              <Image
                src="/profile.webp"
                alt="Somy Bhattarai standing near a bridge at sunset"
                fill
                priority
                sizes="(max-width: 900px) 88vw, 560px"
              />
            </div>
            <div className="hero-badge">
              <span>Aspiring Researcher</span>
              <strong>Research should inform, inspire, and improve lives.</strong>
            </div>
          </div>
        </section>

        <section
          className="intro-strip reveal"
          data-effect="fade-up"
          data-reveal
          aria-label="Personal summary"
        >
          <p>
            Curious, motivated, easygoing, organized, and always learning one
            step at a time.
          </p>
          <a href="#publications">View publications</a>
        </section>

        <section className="section profile-section" id="profile" aria-labelledby="profile-title">
          <div className="profile-heading-row">
            <div className="section-heading reveal" data-effect="slide-left" data-reveal>
              <p className="eyebrow">Profile</p>
              <h2 id="profile-title">Purposeful research, practical change.</h2>
            </div>
            <aside className="quote-card profile-quote reveal" data-effect="tilt-in" data-reveal>
              <h3>Quote</h3>
              <QuoteTypewriter />
            </aside>
          </div>

          <div className="profile-grid">
            <article className="profile-card large reveal" data-effect="fade-up" data-reveal>
              <p>
                I am particularly drawn to work that develops actionable
                solutions. I believe research should not only inform, but also
                inspire change and improve lives.
              </p>
              <p>
                I enjoy exploring ideas, learning through experience, staying
                proactive, and approaching work with purpose. In short, I want
                to learn, grow, create, and leave things a little better than I
                found them.
              </p>
            </article>
            <article className="profile-card reveal" data-effect="tilt-in" data-reveal>
              <h3>How I Work</h3>
              <p>
                I like balance, though I am still figuring that out. I can do
                many things and I am working on becoming a master of a few.
              </p>
            </article>
          </div>
        </section>

        <section className="section split" id="education" aria-labelledby="education-title">
          <div className="section-heading sticky-heading reveal" data-effect="slide-right" data-reveal>
            <p className="eyebrow">Education</p>
            <h2 id="education-title">Environmental science foundations.</h2>
          </div>

          <div className="timeline">
            {education.map((item) => (
              <article className="timeline-item reveal" data-effect="fade-up" data-reveal key={item.title}>
                <span>{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="feature-band reveal" data-effect="wipe" data-reveal aria-label="Fieldwork visual">
          <div className="feature-image">
            <Image
              src="/field1.webp"
              alt="Somy Bhattarai collecting river samples during field research"
              fill
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          </div>
          <div className="feature-content">
            <p className="eyebrow">Water Sector</p>
            <h2>Fieldwork taught me what no classroom could.</h2>
            <p>
              Long walks along rivers, water sample bottles, limited lab
              supplies, and data-analysis marathons made the research real.
            </p>
          </div>
        </section>

        <section className="section" id="experience" aria-labelledby="experience-title">
          <div className="section-heading reveal" data-effect="slide-left" data-reveal>
            <p className="eyebrow">Experience</p>
            <h2 id="experience-title">Research roles and practical projects.</h2>
          </div>

          <div className="experience-grid">
            {experience.map((item) => (
              <article className="experience-card reveal" data-effect="fade-up" data-reveal key={item.title}>
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section services-section" id="services" aria-labelledby="services-title">
          <div className="section-heading reveal" data-effect="slide-right" data-reveal>
            <p className="eyebrow">Services</p>
            <h2 id="services-title">Research support I can offer.</h2>
          </div>

          <div className="services-grid">
            {services.map(([title, text], index) => (
              <article className="service-card reveal" data-effect="tilt-in" data-reveal key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section skills-awards" id="awards" aria-labelledby="awards-title">
          <div className="awards-panel reveal" data-effect="fade-up" data-reveal>
            <p className="eyebrow">Awards</p>
            <h2 id="awards-title">Recognition</h2>
            <div className="award-list">
              {awards.map(([year, title, text]) => (
                <article key={title}>
                  <span>{year}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="skills-panel reveal" data-effect="scale-in" data-reveal>
            <p className="eyebrow">Skills</p>
            <h2>Tools I am building.</h2>
            <ul className="skill-tags">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section publications-section" id="publications" aria-labelledby="publications-title">
          <div className="section-heading reveal" data-effect="slide-left" data-reveal>
            <p className="eyebrow">Publications</p>
            <h2 id="publications-title">Selected research and writing.</h2>
          </div>

          <div className="publication-list">
            {publications.map(([year, title, outlet]) => (
              <article className="publication-item reveal" data-effect="fade-up" data-reveal key={title}>
                <span>{year}</span>
                <div>
                  <h3>{title}</h3>
                  {outlet ? <p>{outlet}</p> : null}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="presentation-section reveal" data-effect="wipe" data-reveal aria-labelledby="presentation-title">
          <div>
            <p className="eyebrow">Presentation</p>
            <h2 id="presentation-title">Learning to speak with purpose.</h2>
            <p>
              Public speaking still feels scary, but I enjoy sharing ideas,
              advocating for meaningful work, and connecting with communities.
            </p>
          </div>
          <div className="presentation-image">
            <Image
              src="/field2.webp"
              alt="Somy Bhattarai presenting environmental research"
              fill
              sizes="(max-width: 900px) 100vw, 52vw"
            />
          </div>
        </section>

        <section className="section reflections-section" id="field-research" aria-labelledby="field-title">
          <div className="section-heading reveal" data-effect="slide-right" data-reveal>
            <p className="eyebrow">Field Research</p>
            <h2 id="field-title">Reflections from the field and beyond.</h2>
          </div>

          <div className="reflection-list">
            {reflections.map((item) => (
              <article
                className={`reflection-card reveal${item.wide ? " wide" : ""}`}
                data-effect={item.wide ? "fade-up" : "tilt-in"}
                data-reveal
                key={item.title}
              >
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                {item.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            ))}
          </div>
        </section>

        <section className="contact reveal" id="contact" data-effect="scale-in" data-reveal aria-labelledby="contact-title">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 id="contact-title">Let us talk water, climate, and resilience.</h2>
            <p>
              Open to thoughtful conversations, research support, and
              collaboration around environmental work that can create impact.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button primary" href="mailto:somybhattarai650@gmail.com">
              Email Somy
            </a>
            <a
              className="button secondary"
              href="https://www.linkedin.com/in/somy-bhattarai-6313b01ab/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>&copy; 2026 Somy Bhattarai. All rights reserved.</p>
        <a href="#home">Back to top</a>
      </footer>
    </>
  );
}
