

import { motion, useMotionValue, useTransform } from "framer-motion";
import { DotScreenShader } from "./ui/DotShaderBackground";


const experiences = [
  {
    id: "01",
    logo: "SMS",
    period: "2024 — Present",
    role: "Full Stack Developer",
    company: "Panchjanya Shikshan Sankul",
    location: "Ahmedabad · India",
    summary:
      "Designing and building a full-scale School Management System used to automate academic and administrative workflows.",
    highlights: [
      "Architected and developed a scalable School Management System (SMS) handling students, teachers, attendance, grades, and reports.",
      "Built a modular, component-driven frontend using React, React Router, and Tailwind CSS for a clean and responsive UI.",
      "Implemented secure REST APIs with Node.js and Express for authentication, role-based access, and CRUD operations.",
      "Designed and optimized MongoDB schemas using Mongoose, indexing, and relational references for performance and scalability.",
      "Developed an admin dashboard with real-time insights into student performance, attendance, and progress tracking.",
    ],
  },

  {
    id: "02",
    logo: "NW",
    period: "2024",
    role: "Frontend Developer",
    company: "News Web Application",
    location: "Remote",
    summary:
      "Built a modern, responsive news platform delivering real-time content across multiple categories.",
    highlights: [
      "Developed a fully responsive news website using React, Tailwind CSS, and modern JavaScript (ES6+).",
      "Integrated third-party News APIs to fetch and display real-time articles dynamically.",
      "Implemented category-based routing and filtering using React Router for seamless navigation.",
      "Optimized performance using lazy loading and efficient state handling for better user experience.",
      "Focused on clean typography, readability, and intuitive UI for long-form content consumption.",
    ],
  },

  {
    id: "03",
    logo: "FS",
    period: "2024 — 2025",
    role: "Freelance Web Developer",
    company: "Independent Projects",
    location: "Remote",
    summary:
      "Delivered custom websites and full-stack applications for small businesses and personal brands.",
    highlights: [
      "Designed and developed responsive websites and dashboards using React, HTML, CSS, and JavaScript.",
      "Built backend services with Node.js and Express, integrating databases and RESTful APIs.",
      "Translated client requirements into functional UI/UX designs with attention to performance and clarity.",
      "Handled complete project lifecycle — planning, development, testing, deployment, and maintenance.",
    ],
  },

];




// helper to compute staggered delays
const getCardDelay = (index) => 0.1 + index * 0.9;
const getSegmentDelay = (index) => 0.5 + index * 0.9;

function ExperienceCard({ item, align = "left", index = 0 }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [8, -8]);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const posX = e.clientX - (rect.left + rect.width / 2);
    const posY = e.clientY - (rect.top + rect.height / 2);
    x.set(posX / 10);
    y.set(posY / 10);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      className={`relative flex ${
        align === "left"
          ? "justify-start md:pr-10"
          : "justify-end md:pl-10 md:flex-row-reverse"
      }`}
    >
      <motion.div
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{
          x,
          y,
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          transformPerspective: 900,
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: getCardDelay(index),
        }}
        className="group relative z-20 w-full max-w-xl rounded-3xl border border-emerald-400/25 bg-black/70 px-5 py-5 shadow-[0_28px_80px_rgba(0,0,0,0.9)] backdrop-blur-xl"
      >
        {/* glow border */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_0%_0%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(34,211,238,0.18),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="relative flex items-start justify-between gap-4">
          {/* left text */}
          <div>
            <div className="mb-1 flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-emerald-300">
              <span className="rounded-full border border-emerald-300/40 bg-emerald-400/10 px-2 py-0.5">
                {item.period}
              </span>
            </div>
            <h3 className="text-base font-semibold text-slate-50">
              {item.role}
            </h3>
            <p className="text-sm text-emerald-300">
              {item.company} ·{" "}
              <span className="text-slate-400">{item.location}</span>
            </p>
          </div>

          {/* right chip + id */}
          <div className="flex flex-col items-end gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-300/50 bg-[radial-gradient(circle_at_0%_0%,rgba(16,185,129,0.35),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(34,211,238,0.3),transparent_55%)] shadow-[0_0_22px_rgba(16,185,129,0.7)] overflow-hidden">
              {item.logoImg ? (
                <img
                  src={item.logoImg}
                  alt={`${item.company} Logo - Jay Patel Portfolio`}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-[11px] font-semibold text-emerald-50">
                  {item.logo}
                </span>
              )}
            </div>
            <span className="mt-1 rounded-full border border-emerald-400/40 bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-emerald-200">
              {item.id}
            </span>
          </div>
        </div>

        <p className="relative mt-3 text-sm text-slate-300">
          {item.summary}
        </p>

        <ul className="relative mt-3 space-y-1.5 text-xs text-slate-300">
          {item.highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <span className="mt-[7px] h-[5px] w-[5px] rounded-full bg-gradient-to-r from-emerald-300 to-cyan-300" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative min-h-screen overflow-hidden px-6 py-24 md:px-10 lg:px-20"
    >
      {/* --------------------------------------------------
        HIDDEN SEO CONTENT 
        This is visible to Bots/Crawlers but hidden from UI
        using the "Screen Reader Only" industry standard.
        --------------------------------------------------
      */}
      <div
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: 0,
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          border: 0,
        }}
      >
        <h2>Work Experience of Jay Patel (SD) - Best MERN Developer India</h2>
        <p>
          Jay Patel (SD) is a top-rated Full Stack Developer and Team Lead based
          in Rohtak and Gurugram, Haryana. Known for building the Best 3D
          Portfolio websites using Three.js and React.
        </p>
        <p>
          <strong>Keywords:</strong> Jay Patel Portfolio, Best Web Developer
          India, MERN Stack Developer, React Developer, Node Developer, MongoDB
          Developer, UI/UX Developer, Premium Portfolio Developer, Animated
          Developer Portfolio.
        </p>
        <p>
          Connect via Soham LinkedIn, Soham GitHub, and Soham Instagram to hire
          the Best Developer Portfolio 2025 creator.
        </p>
      </div>

      {/* dotted shader background */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <DotScreenShader />
       
      </div>

      {/* header */}
      <div className="pointer-events-none relative z-10 mx-auto mb-14 max-w-4xl text-center md:text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300/80">
          03 · Experience
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-50 sm:text-4xl">
          Experience that{" "}
          <span className="bg-gradient-to-r from-emerald-300 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
            actually ships things to prod.
          </span>
        </h2>
        <p className="mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
          From internships to leading a team – I&apos;ve been close to the code,
          the users, and the business metrics. Here&apos;s the path so far.
        </p>
      </div>

      {/* timeline */}
      <div className="relative z-10 mx-auto max-w-5xl pointer-events-auto">
        <div className="space-y-10 md:space-y-16">
          {experiences.map((exp, idx) => (
            <div key={exp.id} className="relative">
              {/* card */}
              <ExperienceCard
                item={exp}
                align={idx % 2 === 0 ? "left" : "right"}
                index={idx}
              />

              {/* vertical segment from this card to the next one */}

              {idx < experiences.length - 1 && (
                <motion.div
                  className="timeline-segment absolute left-1/2 top-full -translate-x-1/2"
                  initial={{ scaleY: 0, opacity: 0 }}
                  whileInView={{ scaleY: 1, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  style={{ transformOrigin: "top" }}
                  transition={{
                    duration: 0.8,
                    ease: "easeInOut",
                    delay: getSegmentDelay(idx),
                  }}
                >
                  {/* line height – smaller on mobile */}
                  <div className="h-10 w-[3px] md:h-16 lg:h-24" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;