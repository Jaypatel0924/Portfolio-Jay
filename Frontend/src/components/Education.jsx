
import React, { useState } from "react";
import DisplayCards from "./ui/display-cards";
import { GraduationCap, School, BookOpen } from "lucide-react";

const educationItems = [
  {
    id: "01",
    period: "2022 — 2025",
    level: "Graduation",
    degree: "Bsc.IT",
    fullDegree: "Bachelor of Science in Information Technology (Bsc.IT)",
    institution: "Gujarat University",
    stream: "Computer Applications",
    cgpa: "8.2 CGPA",
    status: "Completed",
    highlight:
      "Advanced CS concepts, software architecture & scalable web apps.",
  },
  {
    id: "02",
    period: "Sr. Secondary",
    level: "Schooling",
    degree: "12th · Commerce",
    fullDegree: "12th · Commerce",
    institution: "Uma Vidhyalaya",
    stream: "Commerce",
    cgpa: "91.71 %",
    status: "Completed",
    highlight:
      "Analytical subjects, business fundamentals & CS basics.",
  },
  {
    id: "03",
    period: "Secondary",
    level: "Schooling",
    degree: "10th",
    fullDegree: "10th Standard",
    institution: "Chanakya Vidhyasankul",
    stream: "General",
    cgpa: "78 %",
    status: "Completed",
    highlight: "Analytical subjects, business fundamentals & CS basics.",
  },
];

/* --------------------  DOT → DASH INDICATORS  -------------------- */

const StackIndicators = ({ activeIndex, onChange }) => {
  return (
    <div className="mt-6 flex justify-center gap-3 md:mt-8 lg:justify-end lg:mr-20">
      {educationItems.map((_, idx) => {
        const isActive = idx === activeIndex;

        return (
          <button
            key={idx}
            type="button"
            onClick={() => onChange(idx)}
            className="group relative flex items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70"
          >
            {/* Glow circle under the dash */}
            <span
              className={`absolute h-4 w-4 rounded-full bg-emerald-400/40 blur-md transition-opacity duration-500 ${
                isActive ? "opacity-70" : "opacity-0 group-hover:opacity-40"
              }`}
            />

            {/* Actual bar morphing from dot → dash */}
            <span
              className={`relative h-1.5 rounded-full bg-gradient-to-r from-emerald-400 via-cyan-300 to-emerald-400 transition-all duration-400 ease-out ${
                isActive
                  ? "w-10 shadow-[0_0_18px_rgba(16,185,129,0.9)] animate-[pulse_1.8s_ease-out_infinite]"
                  : "w-2 bg-emerald-400/60 shadow-[0_0_10px_rgba(16,185,129,0.4)] group-hover:w-6"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
};

/* --------------------  MAIN COMPONENT  -------------------- */

const Education = () => {
  // 0 = MCA front, 1 = BCA, 2 = 12th
  const [activeIndex, setActiveIndex] = useState(0);
  const total = educationItems.length;

  const baseCardClasses =
    "relative overflow-hidden rounded-3xl bg-[radial-gradient(circle_at_0%_0%,rgba(16,185,129,0.16),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(34,211,238,0.16),transparent_55%),linear-gradient(to_bottom,#020617,#020617)] backdrop-blur-xl border border-white/7 shadow-[0_22px_60px_rgba(0,0,0,0.85)] transition-all duration-700 ease-in-out";

  const getStackClass = (offset) => {
    // offset 0 = front (Active), 1 = middle (Behind), 2 = back (Furthest)
    switch (offset) {
      case 0: // Front Card
        return (
          baseCardClasses +
          " [grid-area:stack] z-30 scale-100 translate-x-0 translate-y-0 opacity-100 ring-1 ring-emerald-400/60 shadow-[0_28px_90px_rgba(6,95,70,0.9)]"
        );
      case 1: // Middle Card (Shows behind and slightly up/right)
        return (
          baseCardClasses +
          " [grid-area:stack] z-20 scale-95 translate-x-8 -translate-y-6 md:translate-x-12 md:-translate-y-8 opacity-60 hover:opacity-90 hover:scale-100 hover:z-40"
        );
      case 2: // Back Card (Shows furthest behind and more up/right)
        return (
          baseCardClasses +
          " [grid-area:stack] z-10 scale-90 translate-x-16 -translate-y-12 md:translate-x-24 md:-translate-y-16 opacity-30 hover:opacity-90 hover:scale-100 hover:z-30"
        );
      default:
        return baseCardClasses;
    }
  };

  const educationForStack = educationItems.map((item, index) => {
    // Logic to determine stack order
    const offset = (index - activeIndex + total) % total;

    let IconComponent = GraduationCap;
    if (item.level === "Schooling") IconComponent = School;
    if (item.level === "Graduation") IconComponent = BookOpen;

    return {
      icon: (
        <IconComponent className="size-4 md:size-6 text-emerald-300 drop-shadow-[0_0_10px_rgba(16,185,129,0.7)]" />
      ),
      title: item.fullDegree,
      date: `${item.period} · ${item.status}`,
      description: (
        <div className="space-y-1 md:space-y-3">
          <p className="text-xs font-medium tracking-wide text-emerald-400 md:text-sm">
            {item.institution}
            <span className="mx-1 text-slate-500">|</span>
            {item.cgpa || item.stream}
          </p>
          <p className="text-xs leading-relaxed text-slate-300 md:text-sm md:line-clamp-none line-clamp-2">
            {item.highlight}
          </p>
        </div>
      ),
      titleClassName:
        "text-emerald-50 text-lg md:text-xl font-semibold drop-shadow-[0_0_20px_rgba(15,118,110,0.35)]",
      className: getStackClass(offset),
      onClick: () => setActiveIndex(index),
    };
  });

  return (
    <section
      id="education"
      className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 py-20"
    >
      {/* --------------------------------------------------
          HIDDEN SEO EDUCATION BLOCK
          -------------------------------------------------- */}
      <div style={{
          position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px',
          overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0
      }}>
        <h3>Jay Patel - Educational Qualifications</h3>
        <p>Jay Patel is a Computer Science post-graduate from <strong> (Gujarat University)</strong>.</p>
        <ul>
           
            <li><strong>BCA (Bachelor of Computer Applications):</strong> Gujarat University (2022-2025). Graduated with 8.53 CGPA.</li>
            <li><strong>High School:</strong> Uma Vidhyalaya Commerce with Computer Science (8.74 CGPA).</li>
        </ul>
      </div>

      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-16 h-72 w-72 rounded-full bg-emerald-500/12 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-cyan-500/12 blur-[120px]" />
      </div>

      <div className="grid w-full max-w-7xl grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
        {/* LEFT: heading */}
        <div className="z-40 order-1 space-y-6 text-center md:space-y-8 lg:order-1 lg:text-left">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400 md:text-xs">
              05 · Education
            </p>
            <h2 className="text-3xl font-bold leading-tight text-white md:text-5xl">
              The{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                Academic Base
              </span>{" "}
              <br />
              Behind the Engineering.
            </h2>
          </div>

          <p className="mx-auto max-w-lg border-l-2 border-emerald-500/20 pl-6 text-sm leading-relaxed text-slate-400 md:text-lg lg:mx-0">
            A progressive journey from{" "}
            <span className="font-medium text-slate-200">
              Business Fundamentals
            </span>{" "}
            to{" "}
            <span className="font-medium text-slate-200">
              Software Architecture
            </span>
            . Currently specialising in scalable systems via my BSC.IT.
          </p>
        </div>

        {/* RIGHT: stacked cards + indicators */}
        <div className="order-2 relative flex flex-col items-center lg:order-2 lg:items-end">
          {/* Cards stack */}
          {/* Increased height to accommodate the vertical stack */}
          <div className="relative flex h-[350px] items-center justify-center md:h-[500px] lg:justify-end">
            <div className="md:mr-10 lg:mr-24 w-full"> 
              <DisplayCards cards={educationForStack} />
            </div>
          </div>

          {/* Dot→dash indicators */}
          <div className="relative -mt-4 md:-mt-10 md:mr-32">
            <StackIndicators
              activeIndex={activeIndex}
              onChange={setActiveIndex}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;