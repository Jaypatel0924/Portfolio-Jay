

"use client";

import { cn } from "../../lib/utils";
import { Sparkles } from "lucide-react";

function DisplayCard({
  className,
  onClick, // Destructured here to enable click handling
  icon = <Sparkles className="size-4 text-blue-300" />,
  title = "Featured",
  description = "Discover amazing content",
  date = "Just now",
  iconClassName = "text-blue-500",
  titleClassName = "text-blue-500",
}) {
  return (
    <div
      onClick={onClick}
      className={cn(
        // LAYOUT & SIZE (Compact Mode)
        // Mobile: h-auto with min-h-[10rem] (Shorter). Desktop: min-h-[12rem].
        "relative flex h-auto min-h-[10rem] md:min-h-[12rem] w-[85vw] max-w-[20rem] md:max-w-none md:w-[36rem] flex-col justify-between",
        // GLASS STYLING
        "rounded-2xl md:rounded-3xl border-2 border-white/20 bg-zinc-900/40 backdrop-blur-xl",
        // SHADOWS
        "shadow-[0_0_40px_rgba(0,0,0,0.5)]",
        // INTERACTIVITY
        "transition-all duration-500 ease-out select-none hover:border-emerald-500/50 hover:bg-zinc-900/80",
        // PADDING (Tighter)
        "p-4 md:p-6",
        className
      )}
    >
      {/* Header: Icon + Date */}
      <div className="flex items-start justify-between w-full mb-3 md:mb-5">
        <div className="flex items-center gap-3">
          <span className="relative inline-flex items-center justify-center rounded-xl bg-emerald-500/10 p-2 ring-1 ring-inset ring-emerald-500/20">
            {icon}
          </span>
          <div className="flex flex-col">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-emerald-500/80">
              {date}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 md:gap-3">
        {/* Title */}
        <h3
          className={cn(
            "text-lg md:text-3xl font-bold leading-tight text-slate-100",
            titleClassName
          )}
        >
          {title}
        </h3>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-white/20 via-white/5 to-transparent my-0.5" />

        {/* Description */}
        <div className="text-xs md:text-base text-slate-300 leading-relaxed font-light">
          {description}
        </div>
      </div>
    </div>
  );
}

export default function DisplayCards({ cards }) {
  const displayCards = cards || [];

  return (
    <div className="grid [grid-template-areas:'stack'] place-items-center py-6 md:py-10 perspective-1000">
      {displayCards.map((cardProps, index) => (
        <DisplayCard key={index} {...cardProps} />
      ))}
    </div>
  );
}