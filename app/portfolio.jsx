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
    text: "Supporting innovative risk communication, and resilience-focused work."
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
  "Presentation and Communication Skills"
];

const publications = [
  [
    "2026",
    "Chemical Characterization and Spatial Distribution of Microplastics in the Surface Water",
    "Water Air and Soil Pollution",
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
      { rootMargin: "0px 0px 12% 0px", threshold: 0.01 }
    );

    document.querySelectorAll("[data-reveal]").forEach((item, index) => {
      item.style.setProperty("--delay", `${Math.min(index * 32, 220)}ms`);
      const rect = item.getBoundingClientRect();

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        item.classList.add("is-visible");
        return;
      }

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
            <h1 id="hero-title">Somy Bhattarai</h1>
            {/* <p className="hero-kicker">
              In a slightly chaotic journey to earn that "Dr." before my name.
            </p> */}
            <Typewriter />
            <p className="hero-lede">
              Environmental Science graduate blending lab, laptop, and local actions to grow expertise in water,
              climate, and disaster resilience.
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
            Curious, motivated, proactive, organized, and always eager to learn.
          </p>
          <a href="#publications">View publications</a>
        </section>

        <section className="section profile-section" id="profile" aria-labelledby="profile-title">
          <div className="profile-heading-row">
            <div className="section-heading reveal" data-effect="slide-left" data-reveal>
              <p className="eyebrow">Profile</p>
              <h2 id="profile-title">Purposeful research, practical output.</h2>
            </div>
            <aside className="quote-card profile-quote reveal" data-effect="tilt-in" data-reveal>
              <h3>Favorite Quote</h3>
              <QuoteTypewriter />
            </aside>
          </div>

          <div className="profile-grid">
            <article className="profile-card large reveal" data-effect="fade-up" data-reveal>
              <p>
                I am an Environmental Science graduate with a strong interest
                in water, climate, and disaster management, driven to contribute to a more
                sustainable and resilient future. My focus lies in work that creates tangible impact,
                where ideas move beyond theory and translate into meaningful change.
              </p>
              <p>
                I am particularly drawn to solution-oriented approaches.
                While understanding problems is essential, the real value of research lies
                in developing practical, actionable strategies that improve lives and
                support long-term sustainability.
              </p>
              <p>
                Curiosity plays a big role in how I approach both learning and work. I enjoy
                exploring new ideas, building knowledge across different areas, and continuously growing
                through experience. I also value being organized and proactive, approaching tasks with
                honesty, clarity, structure, and purpose.
              </p>
              <p>
                As a person, I would describe myself as motivated, adaptable, and
                easygoing. I aim to maintain a healthy balance between “work”,
                “responsibilities,” and “enjoying” the process along the way,
                even as I continue to figure that out.
              </p>
              <p>
                I see myself as someone with a wide range of interests and
                capabilities, steadily refining them over time. A “jack of many
                things” for now, but intentionally working toward mastering a
                few areas that truly matter.
              </p>
              <p>
                Outside of work, you’ll likely find me on platforms like LinkedIn, Instagram, or Facebook.
                At the core, my goal is simple: to keep learning, keep evolving, and leave things a little better than I found them.
              </p>
            </article>
          </div>
        </section>

        <section className="section split education-section" id="education" aria-labelledby="education-title">
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
            <p>
              My experience working in the water sector, especially with rivers,
              has been both challenging and deeply rewarding. During my Master's
              thesis in 2024, my friends and I had to travel long distances,
              walking up and down along the Arun and Tamor River with bottles
              of water samples and empty stomachs. The river water could not
              help us, but it taught us the realities of field research.
            </p>
            <p>
              Collecting samples was physically demanding. We carried heavy
              instruments, stayed on hot riverbanks with Wai Wai and sand dust,
              waded into the water to gather samples, and walked off-road
              through risky gravel roads that were even worse during monsoon.
              Every step required careful planning and teamwork, and despite the
              fatigue, the hands-on experience taught me lessons no classroom
              ever could. Who knew fieldwork could feel like an extreme sport?
            </p>
            <p>
              Back at the lab, the challenges continued. We spent hours managing
              limited chemicals and equipment, sometimes fighting with
              colleagues, and carefully analyzing our samples, which honestly I
              did not enjoy much. Then came data analysis, another mental
              marathon, but it gave meaning to all the effort we had put into
              the field.
            </p>
            <p>
              Hence, working in the water sector is not easy. It tests
              patience, endurance, and problem-solving skills. The combination
              of fieldwork, lab experiments, and data analysis gave me a deep
              appreciation for research, teamwork, and the real-world impact
              careful water management can have on communities and ecosystems.
              All of this helped me meet my first Bhattarai et al.
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

        <section className="trek-section reveal" data-effect="fade-up" data-reveal aria-labelledby="trek-title">
          <div className="trek-left">
            <div className="trek-intro">
              <p className="eyebrow">Trek Reflection</p>
              <h2 id="trek-title">The Trek That Felt Impossible</h2>
            </div>
            <div className="trek-image">
              <Image
                src="/trek.webp"
                alt="Somy Bhattarai outdoors during a challenging journey"
                fill
                sizes="(max-width: 640px) 100vw, 42vw"
              />
            </div>
          </div>
          <div className="trek-content">
            <p>
              In 2025, my team planned a trek to Kori and Kapuche, reaching
              elevations of around 3800 meters. It was not considered a
              particularly difficult trek, and I was confident I could complete
              it without much trouble.
            </p>
            <p>But the mountain had other plans.</p>
            <p>
              By the second day, everything changed. Walking became difficult,
              every step felt heavy, and I seriously thought about turning back.
              But there was no easy way down, only the path ahead. For the first
              time in my life, I saw such massive snow. The place was beautiful,
              quiet, and powerful, but I could barely focus on it because moving
              forward felt like a challenge in itself.
            </p>
            <p>
              There were moments when I felt completely stuck, physically and
              mentally. But my team kept encouraging me, step by step. With
              their support, I kept going, even when it felt impossible. And
              somehow, I made it.
            </p>
            <p>
              It was not the longest or toughest journey in the world, but for
              me, it meant something deeper. It taught me that even when things
              feel overwhelming, continuing forward, no matter how slowly, still
              leads you somewhere.
            </p>
            <p>
              That trek stays with me as a reminder: if I could push through
              that, I can push through many other things too. Every setback has
              shaped me, every step is progress, and I am not done yet.
            </p>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
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
              className="button secondary linkedin-button"
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
        <p>&copy; {new Date().getFullYear()} Somy Bhattarai. All rights reserved.</p>
        <a href="#home">Back to top</a>
      </footer>
    </>
  );
}
