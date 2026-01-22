

import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Medal, Crown, Star } from "lucide-react";
import { cn } from "../lib/utils"; // Adjust path if needed
import trophy from "../assets/trophy.png"; // Importing the trophy image

const achievements = [
  {
    id: 1,
    title: "2x Project Completion ",
    subtitle: "Leadership & Performance",
    description:
      "Awarded twice for exceptional team leadership and outstanding project delivery under tight deadlines.",
    icon: <Trophy className="h-6 w-6 text-yellow-400" />,
    gradient: "from-yellow-500/20 via-yellow-500/5 to-transparent",
    border: "group-hover:border-yellow-500/50",
    // Tall Left Card (Spans 3 rows)
    size: "md:col-span-1 md:row-span-3",
    image: trophy,
  },
  {
    id: 2,
    title: "Problem Solving Excellence",
    subtitle: "Competitive Programming",
    description:
      "Demonstrated strong analytical and logical skills through participation in coding competitions, Olympiads, and algorithmic challenges.",
    icon: <Award className="h-5 w-5 text-emerald-400" />, // Slightly smaller icon visual
    gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent",
    border: "group-hover:border-emerald-500/50",
    // Standard single cell
    size: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    title: "Technical Excellence Recognition",
    subtitle: "Full-Stack Development",
    description:
      "Recognized for building end-to-end web applications using modern technologies including React, Node.js, Express, and databases.",
    icon: <Medal className="h-5 w-5 text-orange-400" />,
    gradient: "from-orange-500/20 via-orange-500/5 to-transparent",
    border: "group-hover:border-orange-500/50",
    // Standard single cell
    size: "md:col-span-1 md:row-span-1",
  },
  {
    id: 4,
    title: "College Topper (Bsc,IT)",
    subtitle: "Consistent Second Rank",
    description:
      "Maintained the #2 rank in college throughout every single semester of the Bachelors program.",
    icon: <Crown className="h-5 w-5 text-cyan-400" />,
    gradient: "from-cyan-500/20 via-cyan-500/5 to-transparent",
    border: "group-hover:border-cyan-500/50",
    // Standard single cell
    size: "md:col-span-1 md:row-span-1",
  },
];

const AchievementCard = ({ item, index }) => {
  // Check if this is the large main card to apply different styling
  const isLarge = item.size.includes("row-span-3");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/40 backdrop-blur-md transition-all duration-500 hover:bg-zinc-900/60 flex flex-col justify-between",
        // Less padding for small cards to prevent cutting
        isLarge ? "p-6 md:p-8" : "p-5 md:p-5",
        item.size
      )}
    >
      {/* Dynamic Background Gradient */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          item.gradient
        )}
      />

      {/* Decorative Image for Main Card */}
      {item.image && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 opacity-40 grayscale transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 group-hover:grayscale-0 pointer-events-none">
          <img
            src={item.image}
            /* SEO: Optimized Alt Tag for Image Search */
            alt={`Jay Patel - ${item.title} - Best 3D Portfolio Developer Award`}
            className="h-full w-full object-contain drop-shadow-[0_0_40px_rgba(234,179,8,0.4)]"
          />
        </div>
      )}

      {/* Header */}
      <div className="relative z-10 flex items-start justify-between">
        <div
          className={cn(
            // Increased padding (p-3.5) for more icon space
            "rounded-xl bg-white/5 p-3.5 ring-1 ring-white/10 backdrop-blur-sm transition-all duration-300 group-hover:scale-110",
            item.border.replace("group-hover:border", "ring")
          )}
        >
          {item.icon}
        </div>
        <span className="flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-slate-400 ring-1 ring-white/10 backdrop-blur-md">
          <Star className="h-3 w-3" />
          Honor
        </span>
      </div>

      {/* Text Content */}
      <div className={cn("relative z-10", item.image ? "mt-auto" : "")}>
        <h3
          className={cn(
            "mb-1 font-bold text-slate-100 drop-shadow-lg",
            // Smaller title for small cards
            isLarge ? "text-xl md:text-2xl mb-2" : "text-lg md:text-lg"
          )}
        >
          {item.title}
        </h3>
        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
          {item.subtitle}
        </p>
        <p
          className={cn(
            "font-medium leading-relaxed text-slate-400/90",
            // Smaller text description for small cards to prevent cutting
            isLarge ? "text-sm md:text-base" : "text-xs md:text-xs"
          )}
        >
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="relative min-h-screen py-16 px-6 overflow-hidden flex flex-col justify-center"
    >
      {/* --------------------------------------------------
          HIDDEN SEO CONTEXT LAYER
          Visible to Google Bots, Hidden from Users
          -------------------------------------------------- */}
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
        <h3>Awards & Recognition - Jay Patel (SD)</h3>
        <p>
          Jay Patel is an award-winning Full Stack Developer and Team Lead at
          Avani Enterprises.
        </p>
        <ul>
          <li>
            Rated <strong>Best MERN Developer</strong> for consistent performance.
          </li>
          <li>
            Creator of the <strong>Best 3D Portfolio</strong> website 2025.
          </li>
          <li>Top Rank holder at Ahmedabad and CS.</li>
          <li>
            Recognized as a top talent in Gurugram and Ahmedabad, Gujarat for React
            and Node.js development.
          </li>
        </ul>
      </div>

      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-emerald-500/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)]" />
      </div>

      <div className="mx-auto max-w-6xl w-full h-full flex flex-col justify-center">
        {/* Section Header */}
        <div className="mb-8 md:mb-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-emerald-400"
          >
            07 · Recognition
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold text-white md:text-5xl"
          >
            Moments of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              Triumph
            </span>
          </motion.h2>
        </div>

        {/* Bento Grid Layout - Optimized for Single Screen View */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 md:grid-rows-3 md:h-[550px] lg:h-[600px]">
          {achievements.map((item, index) => (
            <AchievementCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;