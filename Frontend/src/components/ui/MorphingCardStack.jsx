
// "use client"

// import { useState } from "react"
// import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
// import { cn } from "../../lib/utils" 
// import { Grid3X3, Layers, LayoutList, Hand } from "lucide-react"

// const layoutIcons = {
//   stack: Layers,
//   grid: Grid3X3,
//   list: LayoutList,
// }

// const SWIPE_THRESHOLD = 50

// export function MorphingCardStack({
//   cards = [],
//   className,
//   defaultLayout = "stack",
//   onCardClick,
// }) {
//   const [layout, setLayout] = useState(defaultLayout)
//   const [expandedCard, setExpandedCard] = useState(null)
//   const [activeIndex, setActiveIndex] = useState(0)
//   const [isDragging, setIsDragging] = useState(false)

//   if (!cards || cards.length === 0) return null

//   const handleDragEnd = (event, info) => {
//     const { offset, velocity } = info
//     const swipe = Math.abs(offset.x) * velocity.x
//     if (offset.x < -SWIPE_THRESHOLD || swipe < -10000) {
//       setActiveIndex((prev) => (prev + 1) % cards.length)
//     } else if (offset.x > SWIPE_THRESHOLD || swipe > 1000) {
//       setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length)
//     }
//     setIsDragging(false)
//   }

//   const getStackOrder = () => {
//     const reordered = []
//     for (let i = 0; i < cards.length; i++) {
//       const index = (activeIndex + i) % cards.length
//       reordered.push({ ...cards[index], stackPosition: i })
//     }
//     return reordered.reverse()
//   }

//   const getLayoutStyles = (stackPosition) => {
//     if (layout === "stack") {
//       return {
//         left: stackPosition * 14,
//         scale: 1 - stackPosition * 0.05,
//         zIndex: cards.length - stackPosition,
//       }
//     }
//     return { top: 0, left: 0, zIndex: 1, scale: 1 }
//   }

//   const containerStyles = {
//     // FIX: Increased height significantly (340px -> 420px) to prevent overlap
//     stack: "relative h-[420px] w-[300px] md:h-[450px] md:w-[340px]", 
//     grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
//     list: "flex flex-col gap-3 max-w-3xl mx-auto",
//   }

//   const displayCards = layout === "stack" ? getStackOrder() : cards.map((c, i) => ({ ...c, stackPosition: i }))

//   return (
//     <div className={cn("space-y-8 p-4", className)}>
//       {/* Layout Toggle */}
//       <div className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-zinc-900/80 backdrop-blur-md p-1.5 w-fit mx-auto shadow-lg z-50 relative">
//         {Object.keys(layoutIcons).map((mode) => {
//           const Icon = layoutIcons[mode]
//           return (
//             <button
//               key={mode}
//               onClick={() => setLayout(mode)}
//               className={cn(
//                 "rounded-full p-2.5 transition-all duration-300",
//                 layout === mode ? "bg-emerald-500/20 text-emerald-400 shadow-inner" : "text-slate-400 hover:text-white hover:bg-white/5",
//               )}
//             >
//               <Icon className="h-4 w-4" />
//             </button>
//           )
//         })}
//       </div>

//       {/* Cards Container */}
//       <LayoutGroup>
//         <motion.div layout className={cn(containerStyles[layout], "mx-auto relative")}>
//           <AnimatePresence mode="popLayout">
//             {displayCards.map((card) => {
//               const styles = getLayoutStyles(card.stackPosition)
//               const isExpanded = expandedCard === card.id
//               const isTopCard = layout === "stack" && card.stackPosition === 0
              
//               const showTags = (layout === "stack" || layout === "grid") && card.tags;
//               const showText = layout === "list" || (!showTags && card.description);

//               return (
//                 <motion.div
//                   key={card.id}
//                   layoutId={card.id}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, x: 0, ...styles }}
//                   exit={{ opacity: 0, scale: 0.8 }}
//                   transition={{ type: "spring", stiffness: 260, damping: 20 }}
//                   drag={isTopCard ? "x" : false}
//                   dragConstraints={{ left: 0, right: 0 }}
//                   onDragStart={() => setIsDragging(true)}
//                   onDragEnd={handleDragEnd}
//                   onClick={() => {
//                     if (isDragging) return
//                     setExpandedCard(isExpanded ? null : card.id)
//                     onCardClick && onCardClick(card)
//                   }}
//                   className={cn(
//                     "group relative overflow-hidden bg-zinc-900 border border-white/5",
//                     (layout === "stack" || layout === "grid") && "rounded-3xl",
//                     layout === "stack" && "absolute w-full h-full shadow-2xl origin-bottom cursor-grab active:cursor-grabbing",
//                     layout === "grid" && "w-full min-h-[240px] cursor-pointer",
//                     layout === "list" && "rounded-xl w-full cursor-pointer min-h-[100px]" 
//                   )}
//                 >
//                   {/* Fluid Glow Animation */}
//                   <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
//                      <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,rgba(16,185,129,0.1)_25%,rgba(34,211,238,0.1)_50%,rgba(16,185,129,0.1)_75%,transparent_100%)] blur-2xl" />
//                   </div>

//                   {/* Card Content */}
//                   <div className={cn(
//                     "relative z-10 flex h-full",
//                     layout === "list" ? "flex-row items-center p-4 gap-5" : "flex-col p-6"
//                   )}>
                    
//                     {/* Header */}
//                     <div className={cn(
//                       "flex shrink-0", 
//                       layout === "list" ? "items-center gap-5 w-1/3 min-w-[200px]" : "items-center gap-4 mb-5"
//                     )}>
//                       {card.icon && (
//                         <div className={cn(
//                           "flex items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/10 shadow-inner",
//                           layout === "list" ? "h-10 w-10 rounded-lg" : "h-12 w-12"
//                         )}>
//                           {card.icon}
//                         </div>
//                       )}
//                       <div>
//                         <h3 className={cn("font-bold text-slate-100 tracking-tight", layout === "list" ? "text-base" : "text-xl")}>
//                           {card.title}
//                         </h3>
//                         <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest font-mono mt-0.5">
//                           {card.badge}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Body */}
//                     <div className="flex-1 min-w-0">
//                       {showTags && (
//                          <div className="flex flex-wrap gap-2 content-start">
//                            {card.tags.map((tag) => (
//                              <span key={tag} className="inline-flex items-center rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-400 transition-colors cursor-default">
//                                {tag}
//                              </span>
//                            ))}
//                          </div>
//                       )}
//                       {showText && (
//                         <div className="text-sm text-slate-400 leading-relaxed line-clamp-2">
//                            {card.description}
//                         </div>
//                       )}
//                     </div>

//                     {/* Footer Section */}
//                     {layout !== "list" && (
//                         // Used flex-col here to ensure distinct vertical stacking
//                         <div className="mt-auto pt-4 w-full flex flex-col gap-4">
//                            <div className="border-t border-white/5 pt-4">
//                                <p className="text-xs font-mono font-medium text-emerald-400 truncate">
//                                  › {card.footer}
//                                </p>
//                            </div>
                           
//                            {/* Swipe Hint - Rendered as a Block element below footer text */}
//                            {isTopCard && layout === "stack" && (
//                               <div className="flex justify-center opacity-60 pb-2">
//                                  <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500 animate-pulse">
//                                     <Hand className="w-3.5 h-3.5 rotate-12" />
//                                     <span>Swipe to navigate</span>
//                                  </div>
//                               </div>
//                            )}
//                         </div>
//                     )}
//                   </div>
//                 </motion.div>
//               )
//             })}
//           </AnimatePresence>
//         </motion.div>
//       </LayoutGroup>

//       {/* Pagination Dots */}
//       {layout === "stack" && cards.length > 1 && (
//         <div className="flex justify-center gap-2 mt-4">
//           {cards.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveIndex(index)}
//               className={cn(
//                 "h-1.5 rounded-full transition-all duration-300",
//                 index === activeIndex ? "w-6 bg-emerald-500" : "w-1.5 bg-zinc-800 hover:bg-zinc-700",
//               )}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }

// "use client"

// import { useState } from "react"
// import { motion, AnimatePresence, LayoutGroup } from "framer-motion"
// import { cn } from "../../lib/utils"
// import { Grid3X3, Layers, LayoutList, Hand } from "lucide-react"

// /* ---------------- TAG ICON MAP ---------------- */
// const TAG_ICONS = {
//   React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
//   "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
//   Express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
//   MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
//   Mongoose: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",

//   "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
//   Bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
//   Figma: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
//   Canva: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",

//   Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
//   Vercel: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
//   Render: "https://avatars.githubusercontent.com/u/36424661?s=200&v=4",
//   Cloudinary: "https://res.cloudinary.com/cloudinary-marketing/image/upload/v1649720751/brand/Cloudinary_Logo.svg",

//   "REST APIs": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
//   JWT: "https://jwt.io/img/pic_logo.svg",

//   "Three.js": "https://threejs.org/files/favicon.ico",
//   "3D Web": "https://cdn-icons-png.flaticon.com/512/906/906334.png",
//   "Interactive UI": "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",

//   "Agentic AI": "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
//   "Payment Integration": "https://cdn-icons-png.flaticon.com/512/196/196578.png",
//   "API Integration": "https://cdn-icons-png.flaticon.com/512/4233/4233830.png",
// }

// /* ------------------------------------------------ */

// const layoutIcons = {
//   stack: Layers,
//   grid: Grid3X3,
//   list: LayoutList,
// }

// const SWIPE_THRESHOLD = 50
// const MAX_TAGS = 4

// export function MorphingCardStack({
//   cards = [],
//   className,
//   defaultLayout = "stack",
//   onCardClick,
// }) {
//   const [layout, setLayout] = useState(defaultLayout)
//   const [activeIndex, setActiveIndex] = useState(0)
//   const [isDragging, setIsDragging] = useState(false)

//   if (!cards.length) return null

//   const handleDragEnd = (_, info) => {
//     const swipe = Math.abs(info.offset.x) * info.velocity.x
//     if (info.offset.x < -SWIPE_THRESHOLD || swipe < -10000) {
//       setActiveIndex((p) => (p + 1) % cards.length)
//     } else if (info.offset.x > SWIPE_THRESHOLD || swipe > 1000) {
//       setActiveIndex((p) => (p - 1 + cards.length) % cards.length)
//     }
//     setIsDragging(false)
//   }

//   const getStackOrder = () =>
//     [...cards]
//       .map((c, i) => ({ ...c, stackPosition: (activeIndex + i) % cards.length }))
//       .reverse()

//   const getLayoutStyles = (i) =>
//     layout === "stack"
//       ? { left: i * 14, scale: 1 - i * 0.05, zIndex: cards.length - i }
//       : { scale: 1 }

//   const containerStyles = {
//     stack: "relative h-[420px] w-[300px] md:h-[450px] md:w-[340px]",
//     grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
//     list: "flex flex-col gap-3 max-w-3xl mx-auto",
//   }

//   const displayCards =
//     layout === "stack" ? getStackOrder() : cards.map((c, i) => ({ ...c, stackPosition: i }))

//   return (
//     <div className={cn("space-y-8 p-4", className)}>
//       {/* Layout Toggle */}
//       <div className="flex justify-center gap-2 rounded-full border border-white/10 bg-zinc-900/80 p-1.5 mx-auto w-fit">
//         {Object.keys(layoutIcons).map((mode) => {
//           const Icon = layoutIcons[mode]
//           return (
//             <button
//               key={mode}
//               onClick={() => setLayout(mode)}
//               className={cn(
//                 "p-2.5 rounded-full transition",
//                 layout === mode
//                   ? "bg-emerald-500/20 text-emerald-400"
//                   : "text-slate-400 hover:bg-white/5"
//               )}
//             >
//               <Icon className="h-4 w-4" />
//             </button>
//           )
//         })}
//       </div>

//       {/* Cards */}
//       <LayoutGroup>
//         <motion.div layout className={cn(containerStyles[layout], "mx-auto relative")}>
//           <AnimatePresence>
//             {displayCards.map((card) => {
//               const isTop = layout === "stack" && card.stackPosition === 0

//               return (
//                 <motion.div
//                   key={card.id}
//                   layoutId={card.id}
//                   drag={isTop ? "x" : false}
//                   dragConstraints={{ left: 0, right: 0 }}
//                   onDragStart={() => setIsDragging(true)}
//                   onDragEnd={handleDragEnd}
//                   animate={getLayoutStyles(card.stackPosition)}
//                   onClick={() => !isDragging && onCardClick?.(card)}
//                   className={cn(
//                     "group absolute w-full h-full bg-zinc-900 border border-white/5 rounded-3xl p-6 cursor-pointer overflow-hidden"
//                   )}
//                 >
//                   {/* Header */}
//                   <div className="flex items-center gap-4 mb-5">
//                     <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
//                       {card.icon}
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold text-white">{card.title}</h3>
//                       <p className="text-[10px] uppercase tracking-widest text-emerald-400 font-mono">
//                         {card.badge}
//                       </p>
//                     </div>
//                   </div>

//                   {/* TAGS WITH ICONS */}
//                   <div className="flex flex-wrap gap-2">
//                     {card.tags.slice(0, MAX_TAGS).map((tag) => (
//                       <span
//                         key={tag}
//                         className="flex items-center gap-2 px-3 py-1.5 text-xs rounded-lg bg-white/5 border border-white/5 text-slate-300"
//                       >
//                         {TAG_ICONS[tag] && (
//                           <img src={TAG_ICONS[tag]} alt={tag} className="h-4 w-4" />
//                         )}
//                         {tag}
//                       </span>
//                     ))}

//                     {card.tags.length > MAX_TAGS && (
//                       <span className="px-3 py-1.5 text-xs rounded-lg bg-white/5 text-slate-400">
//                         +{card.tags.length - MAX_TAGS}
//                       </span>
//                     )}
//                   </div>

//                   {/* Footer */}
//                   <div className="absolute bottom-6 left-6 right-6 text-xs text-emerald-400 font-mono border-t border-white/5 pt-3">
//                     › {card.footer}
//                   </div>

//                   {isTop && (
//                     <div className="absolute bottom-2 inset-x-0 flex justify-center text-[10px] text-slate-500 animate-pulse">
//                       <Hand className="h-3 w-3 mr-1" /> Swipe
//                     </div>
//                   )}
//                 </motion.div>
//               )
//             })}
//           </AnimatePresence>
//         </motion.div>
//       </LayoutGroup>
//     </div>
//   )
// }


"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Grid3X3, Layers, LayoutList, Hand } from "lucide-react"
import { cn } from "../../lib/utils"

/* ---------- TAG ICON MAP ---------- */
const TAG_ICONS = {
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  Express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  Mongoose: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",

  "Three.js": "https://threejs.org/files/favicon.ico",
  "3D Web": "https://cdn-icons-png.flaticon.com/512/906/906334.png",
  "Interactive UI": "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",

  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  Vercel: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
  Render: "https://avatars.githubusercontent.com/u/36424661?s=200&v=4",
  Cloudinary: "https://res.cloudinary.com/cloudinary-marketing/image/upload/v1649720751/brand/Cloudinary_Logo.svg",
}

const MAX_TAGS = 4
const SWIPE_THRESHOLD = 100

export function MorphingCardStack({ cards = [], defaultLayout = "stack" }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  if (!cards.length) return null

  const card = cards[activeIndex]

  const paginate = (dir) => {
    setDirection(dir)
    setActiveIndex((prev) =>
      dir === 1
        ? (prev + 1) % cards.length
        : (prev - 1 + cards.length) % cards.length
    )
  }

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -SWIPE_THRESHOLD) paginate(1)
    else if (info.offset.x > SWIPE_THRESHOLD) paginate(-1)
  }

  return (
    <div className="relative w-full flex justify-center">
      <div className="relative h-[460px] w-[320px] md:w-[360px]">

        <AnimatePresence mode="wait">
          <motion.div
            key={card.id}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            initial={{ opacity: 0, x: direction > 0 ? 120 : -120, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: direction > 0 ? -120 : 120, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="group absolute inset-0 bg-zinc-900 border border-white/5 rounded-3xl p-6 overflow-hidden cursor-grab active:cursor-grabbing"
          >
            {/* Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
              <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,rgba(16,185,129,0.1)_25%,rgba(34,211,238,0.1)_50%,rgba(16,185,129,0.1)_75%,transparent_100%)] blur-2xl" />
            </div>

            {/* Header */}
            <div className="flex items-center gap-4 mb-4 relative z-10">
              <div className="h-12 w-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                {card.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{card.title}</h3>
                <p className="text-[10px] uppercase tracking-widest text-emerald-400 font-mono">
                  {card.badge}
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4 relative z-10">
              {card.tags.slice(0, MAX_TAGS).map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-2 px-3 py-1.5 text-xs rounded-lg bg-white/5 border border-white/5 text-slate-300"
                >
                  {TAG_ICONS[tag] && (
                    <img src={TAG_ICONS[tag]} alt={tag} className="h-4 w-4" />
                  )}
                  {tag}
                </span>
              ))}
              {card.tags.length > MAX_TAGS && (
                <span className="px-3 py-1.5 text-xs rounded-lg bg-white/5 text-slate-400">
                  +{card.tags.length - MAX_TAGS}
                </span>
              )}
            </div>

            {/* CENTER IMAGE */}
            {card.image && (
              <div className="flex-1 flex items-center justify-center relative z-10">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-28 w-28 md:h-32 md:w-32 object-contain opacity-90 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_35px_rgba(16,185,129,0.35)]"
                />
                <div className="absolute h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl -z-10" />
              </div>
            )}

            {/* Footer */}
            <div className="pt-4 border-t border-white/5 text-xs text-emerald-400 font-mono relative z-10">
              › {card.footer}
            </div>

            {/* Swipe Hint */}
            <div className="absolute bottom-2 inset-x-0 flex justify-center text-[10px] text-slate-500 animate-pulse">
              <Hand className="h-3 w-3 mr-1" />
              Swipe
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

