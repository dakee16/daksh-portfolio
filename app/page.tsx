"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Phone, Download, ExternalLink } from "lucide-react";

const nav = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const projects = [
  {
    title: "Course Scheduler",
    date: "May–Dec 2024",
    stack: ["Java", "SQL", "JDBC", "Apache NetBeans"],
    summary: "Scheduling system to add students/classes across semesters and generate schedules; used by my high school to monitor classes.",
    bullets: [
      "Implemented CRUD flows and schedule generation over JDBC.",
      "Modeled semesters, sections, seats and descriptions in SQL.",
      "Built clean UI to search/filter schedules for a student or class.",
    ],
    links: { demo: "", repo: "" },
  },
  {
    title: "Matrix & Determinant Simulator",
    date: "Nov 2024",
    stack: ["Python", "OOP", "VS Code"],
    summary: "Interactive matrix tool to add, subtract, multiply, compute determinant and inverse.",
    bullets: [
      "Optimized determinant and inverse routines with clear OOP design.",
      "Robust input validation and helpful error messages.",
      "Modular structure for future linear algebra features.",
    ],
    links: { demo: "", repo: "" },
  },
  {
    title: "Cache Simulation System",
    date: "May 2024",
    stack: ["Python", "OOP"],
    summary: "Multi-level cache simulator (L1–L3) with MRU/LRU policies, hash-based indexing and separate chaining.",
    bullets: [
      "Designed classes for ContentItem, CacheList and Cache.",
      "Realistic hit/miss behavior with pluggable policies.",
      "Clear CLI output for analysis and debugging.",
    ],
    links: { demo: "", repo: "" },
  },
];

const experiences = [
  {
    role: "Web Developer Intern",
    org: "Accenture",
    location: "(Remote/India)",
    dates: "Jun 1 – Jul 31, 2024",
    bullets: [
      "Learned and applied MERN stack fundamentals on a team project.",
      "Helped build a Microsoft Teams–style app replica: channels, chat threads, and basic video-call UI.",
      "Contributed responsive React components and API integration patterns.",
    ],
  },
  {
    role: "Student Worker",
    org: "Penn State University",
    location: "State College, PA, USA",
    dates: "Sep 2024 – May 2025",
    bullets: [
      "Front-desk support, special projects coordination, and cross-team communication.",
      "Collaborated with staff to complete time-bound tasks reliably.",
    ],
  },
  {
    role: "Intern",
    org: "Tilesbay",
    location: "Atlanta, GA, USA",
    dates: "Jul 2024 – Aug 2024",
    bullets: [
      "Maintained productive relationships and supported the website management team.",
      "Ran system testing and documented issues/inefficiencies with clear repro steps.",
    ],
  },
];

const education = [
  {
    school: "Penn State University",
    detail: "B.S. in Computer Science (GPA 3.6/4.0)",
    dates: "Aug 2023 – May 2027",
    bullets: [
      "Dean’s List: Spring ’24, Fall ’24, Spring ’25.",
      "IEEE, HackPSU, campus dining contributor, math proctor.",
      "Building software that solves real problems (web + backend).",
    ],
  },
  {
    school: "Georgia Tech",
    detail: "Engineering and Leadership (Summer Program)",
    dates: "Jun 2024 – Jun 2024",
    bullets: [
      "Built line-following robot and motorboat; teamwork on structural challenges.",
      "Sharpened leadership, collaboration and project planning skills.",
    ],
  },
  {
    school: "GD Goenka",
    detail: "High School Diploma",
    dates: "Apr 2023 – Apr 2023",
    bullets: [
      "Head Boy and Coding Club lead; represented school in coding competitions.",
      "Soccer and golf team member; MUN, debates; strong teamwork values.",
    ],
  },
];

const skills = [
  "Java", "Python", "HTML", "SQL", "Verilog", "MERN (learning)",
  "Object-Oriented Programming", "Algorithms", "Debugging",
  "Git/GitHub", "VS Code", "Jupyter", "NetBeans",
];

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-2xl sm:text-3xl font-bold tracking-tight mb-8 text-neutral-900"
      >
        {title}
      </motion.h2>
      {children}
    </section>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
    >
      {children}
    </motion.div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return <span className="inline-block rounded-full border border-neutral-300 px-3 py-1 text-xs text-neutral-700">{children}</span>;
}

export default function Page() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8 h-14">
          <a href="#home" className="font-bold tracking-tight">DM</a>
          <nav className="hidden sm:flex gap-6 text-sm">
            {nav.map((n) => (<a key={n.id} href={`#${n.id}`} className="hover:opacity-70 transition">{n.label}</a>))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="https://github.com/dakee16" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-lg border border-neutral-200 hover:bg-neutral-100">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/daksh-mainee/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg border border-neutral-200 hover:bg-neutral-100">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Daksh Mainee</h1>
            <p className="text-lg text-neutral-700 max-w-2xl">
              CS undergrad building clean, practical software — Java, Python & MERN. Built a Teams‑style clone at Accenture; shipping fast, clean code.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-xl border border-neutral-900 px-4 py-2 text-sm font-medium hover:bg-neutral-900 hover:text-white transition">
              See projects <ArrowRight size={16} />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-100 transition">
              Contact me <Mail size={16} />
            </a>
            <a href="/Daksh_Mainee_Resume.pdf" className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-100 transition">
              Download résumé <Download size={16} />
            </a>
          </div>
          <div className="flex gap-4 text-sm text-neutral-600">
            <div className="inline-flex items-center gap-2"><Mail size={16}/> dmainee@gmail.com</div>
            <div className="inline-flex items-center gap-2"><Phone size={16}/> +91 9810082899</div>
          </div>
        </motion.div>
      </section>

      {/* Projects */}
      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <Card key={p.title}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="text-sm text-neutral-600">{p.date}</p>
                </div>
                <div className="flex gap-2">
                  {p.links.repo && (<a className="p-2 rounded-lg border border-neutral-200 hover:bg-neutral-100" href={p.links.repo} target="_blank" rel="noreferrer" aria-label="Repo"><Github size={16}/></a>)}
                  {p.links.demo && (<a className="p-2 rounded-lg border border-neutral-200 hover:bg-neutral-100" href={p.links.demo} target="_blank" rel="noreferrer" aria-label="Demo"><ExternalLink size={16}/></a>)}
                </div>
              </div>
              <p className="mt-3 text-neutral-700">{p.summary}</p>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-neutral-700">
                {p.bullets.map((b, i) => (<li key={i}>{b}</li>))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (<Pill key={s}>{s}</Pill>))}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section id="experience" title="Experience">
        <div className="space-y-6">
          {experiences.map((e) => (
            <Card key={e.role + e.org}>
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-lg font-semibold">{e.role} · {e.org}</h3>
                <p className="text-sm text-neutral-600">{e.location} · {e.dates}</p>
              </div>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-neutral-700">
                {e.bullets.map((b, i) => (<li key={i}>{b}</li>))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section id="education" title="Education">
        <div className="space-y-6">
          {education.map((ed) => (
            <Card key={ed.school}>
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-lg font-semibold">{ed.school}</h3>
                <p className="text-sm text-neutral-600">{ed.dates}</p>
              </div>
              <p className="mt-1 text-neutral-700">{ed.detail}</p>
              <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-neutral-700">
                {ed.bullets.map((b, i) => (<li key={i}>{b}</li>))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title="Skills">
        <Card>
          <div className="flex flex-wrap gap-2">
            {skills.map((s) => (<Pill key={s}>{s}</Pill>))}
          </div>
        </Card>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact">
        <Card>
          <form className="grid gap-4" action={`mailto:dmainee@gmail.com`} method="post" encType="text/plain">
            <div>
              <label className="text-sm">Your name</label>
              <input required className="mt-1 w-full rounded-xl border border-neutral-300 p-3 outline-none focus:ring-2 focus:ring-neutral-900" name="name" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="text-sm">Email</label>
              <input required type="email" className="mt-1 w-full rounded-xl border border-neutral-300 p-3 outline-none focus:ring-2 focus:ring-neutral-900" name="email" placeholder="you@example.com" />
            </div>
            <div>
              <label className="text-sm">Message</label>
              <textarea required rows={5} className="mt-1 w-full rounded-xl border border-neutral-300 p-3 outline-none focus:ring-2 focus:ring-neutral-900" name="message" placeholder="Tell me about your project…" />
            </div>
            <button type="submit" className="inline-flex items-center justify-center rounded-xl border border-neutral-900 px-4 py-2 text-sm font-medium hover:bg-neutral-900 hover:text-white transition">Send</button>
            <p className="text-xs text-neutral-500">Submissions open your mail client and send to dmainee@gmail.com. We can switch to a form backend on deploy.</p>
          </form>
        </Card>
      </Section>

      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a href="https://github.com/dakee16" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2"><Github size={16}/> github.com/dakee16</a>
            <span className="opacity-50">·</span>
            <a href="https://www.linkedin.com/in/daksh-mainee/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2"><Linkedin size={16}/> LinkedIn</a>
          </div>
          <div className="text-neutral-600">© 2025 Daksh Mainee</div>
        </div>
      </footer>
    </div>
  );
}
