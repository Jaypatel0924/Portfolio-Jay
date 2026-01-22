



import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Download } from "lucide-react";
import jay from "../assets/JP Image.png"; // Import your logo image
import cvFile from "../assets/Resume2.pdf"; // Import your CV file

const links = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certificates", href: "#certificates" },
  { label: "Achievements", href: "#achievements" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll state for shrinking / solid navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll-based shiny effect
  const { scrollY } = useScroll();
  const shineX = useTransform(scrollY, [0, 4000], ["-100%", "400%"]);
  // Keep opacity constant or subtle
  const shineOpacity = 1; 

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <>
      {/* Aura behind navbar */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed inset-x-0 top-0 z-30 h-24 bg-gradient-to-b from-black/90 via-black/80 to-transparent pointer-events-none"
      />

      <nav className="fixed inset-x-0 top-0 z-40">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ y: -20, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            // ADDED: overflow-hidden to clip the shimmer
            className={`group relative mt-4 flex items-center justify-between rounded-2xl border px-4 backdrop-blur-xl transition-all duration-300 overflow-hidden ${
              scrolled
                ? "border-emerald-500/20 bg-black/80 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
                : "border-white/10 bg-black/40 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
            }`}
          >
            {/* Scroll-driven GLASS shimmer effect */}
            {/* CHANGED: White tint (via-white/10), Skewed, Less Blur for 'Crisp' look */}
            <motion.div
              className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
              style={{
                x: shineX,
                opacity: shineOpacity,
              }}
            />

            {/* Left Side: Logo */}
            <div className="relative flex items-center gap-3">
              {/* <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-cyan-500 text-black font-bold text-sm shadow-[0_0_15px_rgba(52,211,153,0.4)]"
              >
                SD
              </motion.div> */}
              <motion.div
  whileHover={{ 
    scale: 1.1, 
    rotate: 10,
    filter: "brightness(1.1)" // Slight brightness boost on hover
  }}
  whileTap={{ scale: 0.9 }}
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="relative flex h-12 w-12 cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-emerald-400/20 to-cyan-500/20 shadow-[0_0_15px_rgba(52,211,153,0.3)] transition-shadow hover:shadow-[0_0_25px_rgba(52,211,153,0.6)]"
>
  <img 
    src={jay} 
    alt="Logo" 
    className="h-full w-full object-cover" 
  />
</motion.div>
              <div
                className="block leading-tight cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <p className="text-sm font-bold text-white tracking-wide">
                  Jay Patel
                </p>
                <p className="text-[10px] uppercase tracking-[0.15em] text-emerald-400/80 font-medium">
                  Full Stack Dev
                </p>
              </div>
            </div>

            {/* Center: Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {links.map((l, index) => (
                <button
                  key={l.label}
                  onClick={() => scrollTo(l.href)}
                  className="group relative text-xs font-medium uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
                >
                  {l.label}
                  {/* Underline Effect */}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-emerald-400 transition-all duration-300 group-hover:w-full" />
                  {/* Number Effect */}
                  <span className="absolute -top-3 -right-3 text-[9px] font-bold text-emerald-500/50 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-1">
                    0{index + 1}
                  </span>
                </button>
              ))}
            </div>

            {/* Right: Buttons + Mobile Toggle */}
            <div className="flex items-center gap-3">
              {/* Download CV Button (Desktop) */}
              <motion.a
                href={cvFile}
                download="Jay_Patel_CV"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200 transition-colors hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:text-emerald-400"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Resume</span>
              </motion.a>

              {/* Let's Talk CTA (Desktop) */}
              <motion.button
                whileHover={{ y: -1, scale: 1.02 }}
                whileTap={{ scale: 0.96, y: 0 }}
                onClick={() => scrollTo("#contact")}
                className="hidden md:inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-100 transition-colors hover:bg-white/10"
              >
                Let&apos;s Talk
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.9)]" />
              </motion.button>

              {/* Mobile Hamburger */}
              <button
                className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 lg:hidden text-slate-200"
                onClick={() => setOpen(!open)}
              >
                <div className="relative h-4 w-5">
                  <span
                    className={`absolute left-0 top-0 h-[2px] w-full rounded-full bg-current transition-all duration-300 ${
                      open ? "top-1.5 rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-1.5 h-[2px] w-full rounded-full bg-current transition-all duration-300 ${
                      open ? "opacity-0" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`absolute left-0 top-3 h-[2px] w-full rounded-full bg-current transition-all duration-300 ${
                      open ? "top-1.5 -rotate-45" : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 flex flex-col bg-black/95 backdrop-blur-xl lg:hidden pt-28 px-6 pb-10 overflow-y-auto"
          >
            <div className="flex flex-col gap-4">
              {links.map((l, index) => (
                <motion.button
                  key={l.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index }}
                  onClick={() => scrollTo(l.href)}
                  className="flex items-center justify-between text-lg font-medium text-slate-300 hover:text-emerald-400 border-b border-white/5 pb-3"
                >
                  <span className="font-bold tracking-wide">{l.label}</span>
                  <span className="text-[10px] uppercase tracking-widest text-slate-600">
                    0{index + 1}
                  </span>
                </motion.button>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="mt-8 flex flex-col gap-4">
              <a
                href={cvFile}
                download="Jay_Patel_CV"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-bold text-white hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              {/* <button
                onClick={() => scrollTo("#contact")}
                className="rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 py-3 text-sm font-bold uppercase tracking-widest text-black"
              >
                Let&apos;s Build Something
              </button> */}
              <motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.96 }}
  onClick={() => scrollTo("#contact")}  // <--- Removed setIsOpen(false)
  className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-neutral-100 transition-colors hover:bg-white/10"
>
  Let&apos;s Talk
  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(74,222,128,0.9)]" />
</motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;