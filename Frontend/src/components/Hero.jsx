
import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import trophy from "../assets/trophy.png";

// Wrapper component - using CSS gradient instead of 3D Canvas to avoid shader issues
function ShaderBackground() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(135deg, #022c22 0%, #020617 40%, #0a0e27 70%, #020617 100%)",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at 80% 70%, rgba(34, 211, 238, 0.1) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

const Hero = () => {
  // 3D tilt motion for the right card
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-40, 40], [10, -10]);
  const rotateY = useTransform(x, [-40, 40], [-10, 10]);

  const handleTilt = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const posX = e.clientX - (rect.left + rect.width / 2);
    const posY = e.clientY - (rect.top + rect.height / 2);
    x.set(posX / 6);
    y.set(posY / 6);
  };

  const resetTilt = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="about"
      /* SEO: Schema.org Microdata for Person Profile */
      itemScope
      itemType="https://schema.org/Person"
      className="relative flex min-h-screen items-center justify-center px-6 pt-28 pb-16 overflow-hidden"
    >
      {/* SEO: Identity Linking (Knowledge Graph Signal) 
         This connects your website 'Person' to your external high-authority profiles.
      */}
      <link itemProp="sameAs" href="https://www.linkedin.com/in/soham-dang-9ba897215/" />
      <link itemProp="sameAs" href="https://github.com/Soham3131" />
      <link itemProp="sameAs" href="https://www.instagram.com/soham_.31/" />
      <meta itemProp="gender" content="Male" />
      <meta itemProp="nationality" content="Indian" />

      {/* SEO: Visually hidden Heading for Ranking */}
      <h2 style={{
        position: 'absolute', width: '1px', height: '1px', padding: 0, margin: '-1px',
        overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0
      }}>
        Jay Patel (SD) - Best 3D Portfolio & Full Stack MERN Developer
      </h2>

      {/* Background Layer - CSS Gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <ShaderBackground />
      </div>

      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_0%_0%,rgba(16,185,129,0.16),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(34,211,238,0.16),transparent_55%),linear-gradient(to_bottom,rgba(0,0,0,0.65),rgba(0,0,0,0.9))]" />

      {/* Main Content Layer */}
      <div className="relative z-20 mx-auto flex w-full max-w-6xl flex-col items-center gap-12 md:flex-row md:items-start">
        {/* LEFT: Intro / text */}
        <div className="flex-1 space-y-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-black/60 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-neutral-200 backdrop-blur-xl"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(74,222,128,0.9)]" />
            <span itemProp="jobTitle">Full Stack Team Lead</span> · MERN · 3D · AI
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.45 }}
            className="text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl md:text-6xl"
          >
            I build{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-emerald-200 to-cyan-400 bg-clip-text text-transparent">
              premium, scalable
            </span>{" "}
            web experiences for modern brands.
          </motion.h1>

          {/* Sub text - Enriched with Keywords */}
          <motion.p
            itemProp="description"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base"
          >
            I&apos;m <span itemProp="name" className="font-medium text-slate-50">Jay Patel</span>,
            Full Stack Developer & Team Lead at{" "}
            <span itemProp="worksFor" itemScope itemType="https://schema.org/Organization" className="font-medium text-slate-50">
              <span itemProp="name">Avani Enterprises</span>
            </span>.
            I design, architect and ship MERN applications, <strong className="font-normal text-slate-200">interactive 3D portfolios</strong> and
            AI-powered workflows that improve performance, reduce manual work,
            and actually move business metrics.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.4 }}
            className="flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() =>
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              data-cursor="hover"
              aria-label="View Projects"
              className="group relative overflow-hidden rounded-2xl border border-emerald-400/60 bg-gradient-to-r from-emerald-500/20 via-emerald-400/10 to-cyan-400/20 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-50 backdrop-blur-xl"
            >
              <span className="relative z-10">View Selected Projects</span>
              <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_0,rgba(255,255,255,0.25),transparent_55%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </button>

            <button
              onClick={() =>
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              data-cursor="hover"
              aria-label="Contact Jay Patel"
              className="rounded-2xl border border-white/15 bg-black/60 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-300 hover:border-emerald-400/60 hover:text-slate-50 backdrop-blur-xl"
            >
              Let&apos;s Talk
            </button>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mt-4 grid grid-cols-2 gap-4 text-xs text-slate-300 sm:text-sm md:max-w-md"
          >
            <div className="space-y-1">
              <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                Core Stack
              </p>
              <p className="text-slate-100">
                <span className="bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent">
                  React · Node.js · Express · MongoDB
                </span>{" "}
                · Tailwind · REST APIs
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                What I love doing
              </p>
              <p className="text-slate-100">
                Client-facing problem solving,{" "}
                <span className="bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent">
                  3D & motion
                </span>
                , agentic AI flows.
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT: 3D floating stats card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
          className="relative mt-4 flex w-full flex-1 justify-center md:mt-0"
          onMouseMove={handleTilt}
          onMouseLeave={resetTilt}
        >
          {/* Gradient ring behind card */}
          <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center overflow-hidden">
            <div className="h-56 w-56 rounded-full bg-[radial-gradient(circle_at_0%_0%,rgba(16,185,129,0.4),transparent_60%),radial-gradient(circle_at_100%_100%,rgba(34,211,238,0.45),transparent_55%)] blur-3xl opacity-80" />
          </div>

          <motion.div
            style={{
              x,
              y,
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              transformPerspective: 900,
            }}
            className="relative w-full max-w-sm rounded-3xl bg-gradient-to-br from-emerald-400/40 via-black/90 to-cyan-500/40 p-[1px] shadow-[0_25px_80px_rgba(0,0,0,0.9)] backdrop-blur-xl"
          >
            {/* Inner card */}
            <div className="rounded-[1.4rem] border border-white/15 bg-black/85 p-5">
              {/* Top row: role + logo */}
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-slate-500">
                    Currently
                  </p>
                  <p className="text-sm text-slate-50">
                    Full Stack Team Lead · Panchjanya Shikshan Sankul
                  </p>
                  <p className="mt-1 text-[11px] text-slate-300">
                    Leading a dev team, owning client calls & delivery.
                  </p>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-black/80 border border-emerald-400/40 overflow-hidden">
                  <img
                    src={trophy}
                    /* SEO: Enhanced Alt Text */
                    alt="Panchjanya Shikshan Sankul Logo - Jay Patel Full Stack Team Lead"
                    className="h-8 w-8 object-contain opacity-90"
                  />
                </div>
              </div>

              {/* Metrics */}
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-center justify-between rounded-2xl bg-white/5 px-3 py-2">
                  <span>Products & platforms shipped</span>
                  <span className="font-semibold bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent">
                    4+
                  </span>
                </div>
             
                <div className="flex items-center justify-between rounded-2xl px-3 py-2">
                  <span>Performance & efficiency wins</span>
                  <span className="text-[11px] text-right bg-gradient-to-r from-emerald-300 to-cyan-400 bg-clip-text text-transparent">
                    up to 40% faster · 15+ hrs/week saved
                  </span>
                </div>
              </div>

              {/* Footer row */}
              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[11px] text-slate-400">
                <span>Scroll to see experience & projects</span>
                <a
                  href="#projects"
                  className="inline-block cursor-pointer transition-transform hover:scale-105"
                  aria-label="Go to Projects"
                >
                  <span className="rounded-full border border-emerald-400/50 px-2 py-0.5 text-[10px] uppercase tracking-[0.22em] bg-black/60 text-emerald-300">
                    Portfolio · SD
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;