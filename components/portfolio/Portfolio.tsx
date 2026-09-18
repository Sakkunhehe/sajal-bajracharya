"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import portrait from "@/assets/sajal-bajracharya.jpeg";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const EMAIL = "bajracharyasajal@gmail.com";
const EMAIL_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;
const LINKEDIN_URL = "https://www.linkedin.com/in/sajal-bajracharya-0099492b3/";

const projects = [
  {
    title: "Responsive web projects",
    copy: "Developed and deployed user-friendly websites during training, applying responsive layouts, UI/UX principles, optimization and cross-browser compatibility.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive design"],
  },
  {
    title: "Academic data analysis",
    copy: "Completed projects involving data cleaning, visualization, reporting and database management, applying BCA coursework to practical scenarios.",
    tags: ["SQL", "Excel", "Data cleaning", "Visualization"],
  },
  {
    title: "E-commerce creative design",
    copy: "Produced banners, promotional creatives, product-listing visuals and social media graphics while maintaining consistent branding across platforms.",
    tags: ["Photoshop", "Canva", "Brand consistency"],
  },
  {
    title: "SEO & content optimization",
    copy: "Applying keyword research, competitor analysis and on-page optimization to improve content relevance, clarity and discoverability.",
    tags: ["Keyword research", "Competitor analysis", "On-page SEO", "Content optimization"],
  },
];

const roles = [
  {
    period: "Mar 2026 — Present",
    location: "Kathmandu, Nepal",
    title: "Junior SEO Executive",
    company: "Arksh Group",
    points: [
      "Conduct keyword and competitor research to identify content opportunities.",
      "Support on-page SEO, content review and optimization across digital projects.",
      "Help translate research findings into clear, practical SEO priorities.",
    ],
  },
  {
    period: "18 Dec 2025 — 18 Mar 2026",
    location: "Kathmandu, Nepal",
    title: "SEO Intern",
    company: "Arksh Group",
    points: [
      "Assisted with keyword research, competitor analysis and content discovery.",
      "Learned practical on-page SEO and content-optimization workflows.",
      "Supported the team with research and day-to-day SEO tasks.",
    ],
  },
  {
    period: "Sep 2025 — Dec 2025",
    location: "Kathmandu, Nepal",
    title: "Graphic Designing Intern",
    company: "Hardware Pasal",
    points: [
      "Designed banners, promotional creatives and social media graphics for an e-commerce platform.",
      "Created visual content for product listings and marketing promotions using Canva and Adobe Photoshop.",
      "Helped maintain consistent visual branding across platforms and learned digital design workflows.",
    ],
  },
  {
    period: "Jan 2023 — Present",
    location: "Academic projects",
    title: "Junior Data Analyst",
    company: "BCA coursework",
    points: [
      "Use SQL and Excel for data analysis and reporting.",
      "Complete projects involving data cleaning, visualization and database management.",
      "Apply data-analysis skills from BCA coursework to practical scenarios.",
    ],
  },
  {
    period: "May 2019 — Sep 2019",
    location: "Training",
    title: "Web Design Course",
    company: "IT Training Nepal",
    points: [
      "Gained hands-on experience in HTML, CSS, JavaScript and responsive web design.",
      "Developed and deployed user-friendly websites as part of training projects.",
      "Learned UI/UX, website optimization and cross-browser compatibility principles.",
    ],
  },
];

const education = [
  {
    meta: "Jan 2022 — Present · Trinity International College",
    title: "Bachelor in Computer Application",
    copy: "Building practical knowledge across programming, web technologies, data analysis and database management through coursework and academic projects.",
    tags: ["Programming", "Web development", "SQL", "Data analysis", "Databases"],
  },
  {
    meta: "Oct 2019 — Feb 2021 · Trinity International College",
    title: "+2 Science",
    copy: "Completed higher-secondary science studies with a major in Computer Science.",
    tags: ["Computer Science", "Science"],
  },
];

const skills = [
  {
    label: "01 / Search",
    title: "SEO & content",
    items: ["Keyword research", "Competitor analysis", "On-page SEO", "Content optimization", "Search intent", "SEO research"],
  },
  {
    label: "02 / Visual",
    title: "Graphic design",
    items: ["Canva", "Adobe Photoshop", "Promotional creatives", "Product listing graphics", "Visual brand consistency"],
  },
  {
    label: "03 / Technical",
    title: "Web & data",
    items: ["HTML & CSS", "JavaScript basics", "Responsive web design", "SQL & Excel", "Data analysis", "Database management"],
  },
];

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.98h3.42v1.57h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.32 7.41a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.1 20.45H3.54V8.98H7.1v11.47Z" />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 16a3 3 0 0 0-2.39 1.2l-6.7-3.35a3.1 3.1 0 0 0 0-1.7l6.7-3.35A3 3 0 1 0 15 7c0 .29.04.57.12.84l-6.7 3.35a3 3 0 1 0 0 3.62l6.7 3.35A3 3 0 1 0 18 16Z" />
    </svg>
  );
}

function TickerGroup() {
  return (
    <div className="ticker-group">
      {Array.from({ length: 2 }, (_, cycle) => (
        <div className="ticker-cycle" key={cycle}>
          <span>SEO strategy</span><b>✦</b><span>Web design</span><b>✦</b><span>Data analysis</span><b>✦</b><span>Graphic design</span><b>✦</b>
        </div>
      ))}
    </div>
  );
}

export function Portfolio() {
  const rootRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);

  useEffect(() => {
    const closeOverlays = (event: MouseEvent | KeyboardEvent) => {
      if (event instanceof KeyboardEvent && event.key !== "Escape") return;
      if (event instanceof MouseEvent && socialRef.current?.contains(event.target as Node)) return;
      setSocialOpen(false);
      if (event instanceof KeyboardEvent) setMenuOpen(false);
    };
    document.addEventListener("click", closeOverlays);
    document.addEventListener("keydown", closeOverlays);
    return () => {
      document.removeEventListener("click", closeOverlays);
      document.removeEventListener("keydown", closeOverlays);
    };
  }, []);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const loader = root.querySelector<HTMLElement>(".site-loader");
      const loaderMark = root.querySelector<HTMLElement>(".loader-mark");
      const brandMark = root.querySelector<HTMLElement>(".brand-mark");
      const header = root.querySelector<HTMLElement>(".site-header");

      gsap.set(".progress", { scaleX: 0, transformOrigin: "left center" });
      gsap.to(".progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { start: 0, end: "max", scrub: 0.15 },
      });

      if (reducedMotion) {
        gsap.set(loader, { display: "none" });
        document.body.classList.remove("is-loading");
      } else if (loader && loaderMark && brandMark && header) {
        document.body.classList.add("is-loading");
        gsap.set(header, { autoAlpha: 0, yPercent: -100 });
        gsap.set(brandMark, { autoAlpha: 0 });
        const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
        intro
          .fromTo(loaderMark, { clipPath: "inset(100% 0 0)", rotate: -12, scale: 0.82 }, { clipPath: "inset(0% 0 0)", rotate: -5, scale: 1, duration: 0.7 })
          .from(".loader-name", { autoAlpha: 0, y: 12, duration: 0.45 }, 0.35)
          .fromTo(".loader-line-fill", { scaleX: 0 }, { scaleX: 1, transformOrigin: "left", duration: 0.85, ease: "power2.inOut" }, 0.45)
          .to(header, { autoAlpha: 1, yPercent: 0, duration: 0.55 }, 1.1)
          .add(() => {
            const source = loaderMark.getBoundingClientRect();
            const target = brandMark.getBoundingClientRect();
            gsap.to(loader, { backgroundColor: "rgba(16,16,16,0)", duration: 0.55 });
            gsap.to(loaderMark, {
              x: target.left - source.left,
              y: target.top - source.top,
              scale: target.width / source.width,
              duration: 0.85,
              ease: "power4.inOut",
              onComplete: () => {
                gsap.set(brandMark, { autoAlpha: 1 });
                gsap.set(loader, { display: "none" });
                document.body.classList.remove("is-loading");
              },
            });
          }, 1.15)
          .from(".hero-copy > *", { autoAlpha: 0, y: 28, stagger: 0.09, duration: 0.7 }, 1.35)
          .from(".portrait-frame", { autoAlpha: 0, y: 36, rotate: 2, scale: 0.96, duration: 0.9 }, 1.45)
          .from(".portrait-label", { autoAlpha: 0, y: 18, rotate: -7, duration: 0.55 }, 1.85)
          .from(".portrait-ring", { autoAlpha: 0, rotate: -25, scale: 0.65, duration: 0.8 }, 1.65);
      }

      const tickerAnimation = reducedMotion
        ? null
        : gsap.to(".ticker-track", { xPercent: -50, duration: 28, ease: "none", repeat: -1 });

      if (!reducedMotion) {
        gsap.to(".portrait-ring", { x: -6, y: 6, rotate: 6, duration: 4, yoyo: true, repeat: -1, ease: "sine.inOut" });

        gsap.utils.toArray<HTMLElement>(".motion-section").forEach((section) => {
          const sweep = section.querySelector<HTMLElement>(".section-sweep");
          if (sweep) {
            gsap.fromTo(sweep, { xPercent: -115, autoAlpha: 0 }, {
              xPercent: 115,
              autoAlpha: 0.75,
              duration: 1.15,
              ease: "power4.out",
              scrollTrigger: { trigger: section, start: "top 84%", once: true },
            });
          }
        });

        gsap.from("#about .about-aside", { x: -64, autoAlpha: 0, rotate: -2, filter: "blur(12px)", duration: 0.95, ease: "power4.out", scrollTrigger: { trigger: "#about", start: "top 76%", once: true } });
        gsap.from("#about .about-copy", { x: 64, y: 28, autoAlpha: 0, rotate: 1.5, filter: "blur(10px)", duration: 1, ease: "power4.out", scrollTrigger: { trigger: "#about", start: "top 76%", once: true } });
        gsap.from("#about .principle", { y: 38, autoAlpha: 0, rotate: 3, scale: 0.9, stagger: 0.12, duration: 0.65, ease: "back.out(1.8)", scrollTrigger: { trigger: "#about .principles", start: "top 86%", once: true } });

        gsap.utils.toArray<HTMLElement>("#work .project").forEach((project, index) => {
          gsap.from(project, { x: index % 2 ? 110 : -110, y: 24, autoAlpha: 0, rotate: index % 2 ? 2.5 : -2.5, filter: "blur(8px)", duration: 0.85, ease: "power4.out", scrollTrigger: { trigger: project, start: "top 88%", once: true } });
          gsap.from(project.querySelectorAll(".tag"), { y: 12, autoAlpha: 0, scale: 0.75, stagger: 0.07, duration: 0.4, ease: "back.out(1.8)", scrollTrigger: { trigger: project, start: "top 84%", once: true } });
        });

        gsap.utils.toArray<HTMLElement>("#experience .role").forEach((role, index) => {
          gsap.from(role, { x: index % 2 ? 80 : -80, y: 22, autoAlpha: 0, skewX: index % 2 ? 3 : -3, filter: "blur(8px)", duration: 0.8, ease: "power4.out", scrollTrigger: { trigger: role, start: "top 88%", once: true } });
          gsap.from(role.querySelectorAll("li"), { y: 14, autoAlpha: 0, stagger: 0.08, duration: 0.45, scrollTrigger: { trigger: role, start: "top 84%", once: true } });
        });

        gsap.from("#education .education-intro", { x: -64, y: 28, autoAlpha: 0, rotate: -2, filter: "blur(10px)", duration: 0.9, ease: "power4.out", scrollTrigger: { trigger: "#education", start: "top 78%", once: true } });
        gsap.utils.toArray<HTMLElement>("#education .education-card").forEach((card, index) => {
          gsap.from(card, { x: 64, y: 45, autoAlpha: 0, rotateY: -18, rotateZ: index % 2 ? -4 : 5, scale: 0.92, transformPerspective: 1100, duration: 0.95, ease: "power4.out", scrollTrigger: { trigger: card, start: "top 88%", once: true } });
        });

        gsap.from("#skills .skills-grid", { clipPath: "inset(0 100% 0 0)", duration: 0.85, ease: "power3.inOut", scrollTrigger: { trigger: "#skills .skills-grid", start: "top 88%", once: true } });
        gsap.from("#skills .skill-card", { y: 64, autoAlpha: 0, rotateX: -24, scale: 0.9, transformPerspective: 1000, stagger: 0.14, duration: 0.8, ease: "power4.out", scrollTrigger: { trigger: "#skills .skills-grid", start: "top 86%", once: true } });

        gsap.from("#contact .contact-grid", { autoAlpha: 0, scale: 0.86, rotate: -2, filter: "blur(14px)", duration: 0.95, ease: "power4.out", scrollTrigger: { trigger: "#contact", start: "top 78%", once: true } });
        gsap.from("#contact .button", { y: 20, autoAlpha: 0, scale: 0.75, rotate: -5, stagger: 0.12, duration: 0.6, ease: "back.out(1.8)", scrollTrigger: { trigger: "#contact .contact-actions", start: "top 92%", once: true } });
      }

      ScrollTrigger.refresh();
      return () => {
        tickerAnimation?.kill();
        document.body.classList.remove("is-loading");
      };
    },
    { scope: rootRef },
  );

  const closeMenu = () => setMenuOpen(false);

  return (
    <div ref={rootRef}>
      <div className="site-loader" role="status" aria-label="Loading Sajal Bajracharya's portfolio">
        <div className="loader-stage">
          <div className="loader-mark" aria-hidden="true">SB</div>
          <p className="loader-name">Sajal Bajracharya</p>
          <div className="loader-line" aria-hidden="true"><span className="loader-line-fill" /></div>
        </div>
      </div>

      <div className="progress" aria-hidden="true" />

      <header className="site-header">
        <div className="shell nav">
          <a className="brand" href="#top" aria-label="Sajal Bajracharya, back to top" onClick={closeMenu}>
            <span className="brand-mark">SB</span><span>Sajal Bajracharya</span>
          </a>
          <button className="nav-toggle" type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-controls="nav-links" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            <span /><span /><span />
          </button>
          <nav className={`nav-links ${menuOpen ? "open" : ""}`} id="nav-links" aria-label="Main navigation">
            <a href="#work" onClick={closeMenu}>Work</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#education" onClick={closeMenu}>Education</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Let&apos;s talk ↗</a>
          </nav>
        </div>
      </header>

      <main id="top" className="min-w-0 overflow-x-clip">
        <section className="hero" aria-labelledby="hero-title">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <div className="availability">Kathmandu, Nepal · Open to opportunities</div>
              <h1 id="hero-title">Sajal <span>Bajracharya</span></h1>
              <p className="hero-lead">I&apos;m a <strong>Junior SEO Executive</strong> and BCA student combining search, web, data and design to create useful digital experiences and meaningful results.</p>
              <div className="hero-actions">
                <a className="button button--light" href="#experience">View experience ↓</a>
                <a className="button" href={EMAIL_URL} target="_blank" rel="noreferrer">Email me ↗</a>
              </div>
              <div className="hero-note" aria-label="Primary disciplines"><span>01 / SEO</span><span>02 / Design</span><span>03 / Data</span></div>
            </div>
            <div className="portrait-wrap" aria-label="Portrait of Sajal Bajracharya">
              <span className="portrait-ring" aria-hidden="true" />
              <div className="portrait-frame">
                <Image src={portrait} alt="Sajal Bajracharya seated beside a window" fill priority sizes="(max-width: 1072px) min(100vw, 30rem), min(42vw, 32rem)" />
              </div>
              <span className="portrait-label">SEO × Data × Design</span>
            </div>
          </div>
        </section>

        <div className="ticker" aria-hidden="true"><div className="ticker-track"><TickerGroup /><TickerGroup /></div></div>

        <section className="motion-section section-pad" id="about" aria-labelledby="about-title">
          <span className="section-sweep" aria-hidden="true" />
          <div className="shell about-grid">
            <div className="about-aside"><p className="eyebrow">Profile</p><h2 className="section-title" id="about-title">Technology<br />meets creativity.</h2><p>I bring together technical problem-solving, visual communication and a growing foundation in data and digital work.</p></div>
            <div className="about-copy">
              <p className="manifesto">Motivated to turn ideas into work that improves engagement, communicates clearly and delivers <em>meaningful results.</em></p>
              <div className="principles">
                <div className="principle"><b>Problem solving</b><span>Approach technical and creative challenges with practical thinking.</span></div>
                <div className="principle"><b>Collaboration</b><span>Contribute to shared projects through communication and teamwork.</span></div>
                <div className="principle"><b>Continuous growth</b><span>Learn, adapt and improve in dynamic professional environments.</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="motion-section work-section section-pad" id="work" aria-labelledby="work-title">
          <span className="section-sweep" aria-hidden="true" />
          <div className="shell">
            <div className="section-head"><div><p className="eyebrow">Selected work</p><h2 className="section-title" id="work-title">Skills<br />in practice.</h2></div><p className="section-intro">Practical work across websites, academic data projects and e-commerce graphics, supported by a growing knowledge of SEO.</p></div>
            <div className="projects">
              {projects.map((project, index) => (
                <article className="project" key={project.title}>
                  <span className="project-no">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{project.title}</h3>
                  <div className="project-copy"><p>{project.copy}</p><div className="tags">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="motion-section resume-section section-pad" id="experience" aria-labelledby="experience-title">
          <span className="section-sweep" aria-hidden="true" />
          <div className="shell">
            <div className="section-head"><div><p className="eyebrow">Experience</p><h2 className="section-title" id="experience-title">Learning<br />by doing.</h2></div><p className="section-intro">A progression from web design and academic data work to graphic design, an SEO internship and my current Junior SEO Executive role.</p></div>
            <div className="timeline">
              {roles.map((role) => (
                <article className="role" key={`${role.period}-${role.title}`}>
                  <div className="role-meta">{role.period}<br />{role.location}</div>
                  <div className="role-main"><h3>{role.title}<span>{role.company}</span></h3><ul>{role.points.map((point) => <li key={point}>{point}</li>)}</ul></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="motion-section section-pad" id="education" aria-labelledby="education-title">
          <span className="section-sweep" aria-hidden="true" />
          <div className="shell education-grid">
            <div className="education-intro"><p className="eyebrow">Education</p><h2 className="section-title" id="education-title">Technical<br />foundation.</h2><p className="education-copy">My studies in computer science and computer applications support my work across web development, data and visual communication.</p></div>
            <div className="education-list">
              {education.map((item) => (
                <article className="education-card" key={item.title}><small>{item.meta}</small><h3>{item.title}</h3><p>{item.copy}</p><div className="coursework">{item.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></article>
              ))}
            </div>
          </div>
        </section>

        <section className="motion-section skills-section section-pad" id="skills" aria-labelledby="skills-title">
          <span className="section-sweep" aria-hidden="true" />
          <div className="shell">
            <div className="section-head"><div><p className="eyebrow">Skills</p><h2 className="section-title" id="skills-title">A connected<br />toolkit.</h2></div><p className="section-intro">Technical and creative tools supported by communication, teamwork, attention to detail and a willingness to keep learning.</p></div>
            <div className="skills-grid">
              {skills.map((skill) => <article className="skill-card" key={skill.title}><small>{skill.label}</small><h3>{skill.title}</h3><ul>{skill.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}
            </div>
          </div>
        </section>

        <section className="motion-section contact-section section-pad" id="contact" aria-labelledby="contact-title">
          <span className="section-sweep" aria-hidden="true" />
          <div className="shell contact-grid">
            <div><p className="eyebrow">Contact</p><h2 id="contact-title">Let&apos;s build something <span>useful.</span></h2></div>
            <div><p className="contact-copy">I&apos;m open to opportunities where I can contribute across web, data and design while continuing to learn and grow.</p><div className="contact-actions"><a className="button button--light" href={EMAIL_URL} target="_blank" rel="noreferrer">Email me ↗</a><a className="button" href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn ↗</a></div><div className="contact-details"><a href={EMAIL_URL} target="_blank" rel="noreferrer">{EMAIL}</a><span>Kathmandu, Nepal</span></div></div>
          </div>
        </section>
      </main>

      <footer><div className="shell footer-inner"><span>© 2026 Sajal Bajracharya</span><span>SEO × Data × Design</span><a href="#top">Back to top ↑</a></div></footer>

      <aside className={`social-dock ${socialOpen ? "open" : ""}`} aria-label="Social links" ref={socialRef}>
        <div className="social-links" id="social-links">
          <a className="social-link" href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="Open Sajal's LinkedIn profile"><span>LinkedIn</span><LinkedInIcon /></a>
          <a className="social-link" href={EMAIL_URL} target="_blank" rel="noreferrer" aria-label="Compose an email to Sajal Bajracharya in Gmail"><span>Email</span><MailIcon /></a>
        </div>
        <button className="social-toggle" type="button" aria-label={socialOpen ? "Hide social links" : "Show social links"} aria-controls="social-links" aria-expanded={socialOpen} onClick={() => setSocialOpen((open) => !open)}><ShareIcon /></button>
      </aside>
    </div>
  );
}
