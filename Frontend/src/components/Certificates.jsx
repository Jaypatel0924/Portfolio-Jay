
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

// images - update paths if filenames are different
import forageGenAICert from "../assets/forage-genai.png";
import forageDeloitteCert from "../assets/forage-deloitte.png";
import hackerRankPythonCert from "../assets/hackerrank-python.png";
import infosysReactCert from "../assets/infosys-react.png";



const certificates = [
  {
    id: "C01",
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Forage",
    date: "Jul 1, 2025",
    image: forageGenAICert,
    verifyUrl: "https://www.theforage.com/verify",
  },

  {
    id: "C02",
    title: "Data Analytics Job Simulation",
    issuer: "Forage · Deloitte",
    date: "May 26, 2025",
    image: forageDeloitteCert,
    verifyUrl: "https://www.theforage.com/verify",
  },
  {
    id: "C03",
    title: "Python (Basic)",
    issuer: "HackerRank",
    date: "Jul 8, 2024",
    image: hackerRankPythonCert,
    verifyUrl: "https://www.hackerrank.com/certificates",
  },
  {
    id: "C04",
    title: "ReactJS",
    issuer: "Infosys Springboard",
    date: "Mar 13, 2025",
    image: infosysReactCert,
    verifyUrl: "https://verify.onwingspan.com",
  }

];

export default function Certificates() {
  const [open, setOpen] = useState(null); // index of open certificate or null

  // scroll indicator state
  const scrollRef = useRef(null);
  const [scrollPos, setScrollPos] = useState(0); // 0..1 progress

  // compute scroll progress when the container scrolls / on resize
  const updateScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    if (max <= 0) {
      setScrollPos(0);
      return;
    }
    const prog = Math.min(Math.max(el.scrollLeft / max, 0), 1);
    setScrollPos(prog);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // update on scroll
    el.addEventListener("scroll", updateScroll, { passive: true });

    // update on resize (recalculate widths)
    const ro = new ResizeObserver(() => updateScroll());
    ro.observe(el);

    // initial calc
    updateScroll();

    return () => {
      el.removeEventListener("scroll", updateScroll);
      ro.disconnect();
    };
  }, []);

  // indicator sizing
  const INDICATOR_WIDTH_PCT = 35; // percent width of the moving indicator

  // translateX percent for CSS transform: range [0, 100-INDICATOR_WIDTH_PCT]
  const translatePct = scrollPos * (100 - INDICATOR_WIDTH_PCT);

  return (
    <section id="certificates" className="relative py-20 px-6 md:px-10 lg:px-20">
      {/* small helper styles: hide native scrollbar in webkit and tweak indicator */}
      <style>{`
        /* hide scrollbar for the horizontal carousel in webkit */
        .cert-carousel::-webkit-scrollbar { display: none; }
        /* firefox */
        .cert-carousel { scrollbar-width: none; -ms-overflow-style: none; }
      `}</style>

      <div className="mx-auto max-w-4xl mb-10 text-center z-10">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300/80">
          06 · Certificates
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-50 sm:text-4xl">
          Selected certificates &amp; verifications
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-sm text-slate-300 sm:text-base">
          Verified course certificates, online micro-courses and upskilling
          that complement my practical work. Click a card to preview and verify.
        </p>
      </div>

      {/* ===== responsive row on mobile, grid on larger screens ===== */}
      <div
        ref={scrollRef}
        // mobile: horizontal scroll row; sm+: grid
        className={
          "cert-carousel mx-auto max-w-6xl z-10 " +
          "flex gap-4 overflow-x-auto px-3 py-2 " +
          "sm:grid sm:grid-cols-2 sm:gap-6 sm:px-0 sm:py-0 " +
          "lg:grid lg:grid-cols-4"
        }
      >
        {certificates.map((c, i) => (
          <motion.button
            key={c.id}
            onClick={() => setOpen(i)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.99 }}
            className={
              /* On mobile, ensure each card keeps a minimum width and doesn't shrink
                 On sm+ the grid will manage widths automatically */
              "group relative flex flex-col items-start gap-3 rounded-2xl border border-white/6 bg-black/60 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl text-left " +
              "min-w-[260px] flex-shrink-0 sm:min-w-0 sm:flex-shrink sm:w-auto"
            }
            aria-label={`Open ${c.title}`}
          >
            <div className="w-full flex items-center gap-3">
              <div className="flex h-16 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/8 bg-black/40">
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-full w-full object-contain p-1"
                  draggable={false}
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-50 ">
                      {c.title}
                    </h3>
                    <p className="mt-1 text-xs text-emerald-300">{c.issuer}</p>
                    <p className="mt-1 text-xs text-slate-400">{c.date}</p>
                  </div>

                  <div className="ml-2 flex flex-col items-end">
                    <div className="rounded-full border border-emerald-300/40 bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-emerald-200">
                      {c.id}
                    </div>

                    {c.verifyUrl && (
                      <div className="mt-2">
                        <span className="inline-flex items-center gap-1 rounded px-2 py-1 text-[11px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-200">
                          Verify
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-2 h-px w-full bg-white/3 group-hover:bg-white/6 transition-colors" />
            <p className="mt-2 text-xs text-slate-400">Click to preview certificate.</p>
          </motion.button>
        ))}
      </div>

      {/* Mobile-only animated scroll indicator */}
      <div className="sm:hidden mt-4 w-full flex justify-center z-10 pointer-events-none">
        <div className="relative w-40 h-1 bg-white/6 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full rounded-full shadow-[0_6px_20px_rgba(34,211,238,0.16)]"
            style={{
              width: `${INDICATOR_WIDTH_PCT}%`,
              transform: `translateX(${translatePct}%)`,
              background:
                "linear-gradient(90deg, rgba(74,222,128,1) 0%, rgba(34,211,238,1) 100%)",
              transition: "transform 120ms linear, width 240ms ease",
            }}
          />
        </div>
      </div>

      {/* Modal preview */}
      {open !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
        >
          {/* backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(null)}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="relative z-50 max-w-4xl w-full rounded-2xl border border-white/8 bg-black/80 p-6 shadow-[0_40px_120px_rgba(0,0,0,0.8)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-50">
                  {certificates[open].title}
                </h3>
                <p className="mt-1 text-xs text-emerald-300">
                  {certificates[open].issuer} · {certificates[open].date}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {certificates[open].verifyUrl ? (
                  <a
                    href={certificates[open].verifyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-emerald-400/60 bg-emerald-400/10 px-3 py-2 text-xs font-semibold text-emerald-100 hover:bg-emerald-400/20"
                  >
                    Verify credential
                  </a>
                ) : null}

                <button
                  onClick={() => setOpen(null)}
                  className="rounded-2xl border border-white/12 bg-black/60 px-3 py-2 text-xs font-semibold text-slate-200 hover:border-white/20"
                >
                  Close
                </button>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <img
                src={certificates[open].image}
                alt={certificates[open].title}
                className="max-h-[70vh] w-auto object-contain rounded-md border border-white/6"
                draggable={false}
              />
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
