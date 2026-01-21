import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);
  const [isDown, setIsDown] = useState(false);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setEnabled(false);
      return;
    }

    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    const handleDown = () => setIsDown(true);
    const handleUp = () => setIsDown(false);

    const handleOver = (e) => {
      const target = e.target;
      if (target.closest("[data-cursor='hover']")) {
        setIsHover(true);
      } else {
        setIsHover(false);
      }
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    document.body.addEventListener("mouseover", handleOver);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.body.removeEventListener("mouseover", handleOver);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
        animate={{
          x: pos.x,
          y: pos.y,
          scale: isHover ? 1.6 : isDown ? 0.9 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 18,
          mass: 0.4,
        }}
        style={{ translateX: "-50%", translateY: "-50%" }}
      >
        <div
          className={`h-10 w-10 rounded-full border border-white/40 bg-white/0 backdrop-blur-[2px] 
          transition-all duration-200 ${
            isHover
              ? "border-white/80 bg-white/10 shadow-[0_0_40px_rgba(255,255,255,0.3)]"
              : "shadow-[0_0_25px_rgba(0,0,0,0.7)]"
          } ${isDown ? "scale-90" : ""}`}
        />
      </motion.div>

      {/* Inner dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block"
        animate={{
          x: pos.x,
          y: pos.y,
          scale: isDown ? 0.6 : isHover ? 0.9 : 0.8,
        }}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 22,
          mass: 0.3,
        }}
        style={{ translateX: "-50%", translateY: "-50%" }}
      >
        <div
          className={`h-2.5 w-2.5 rounded-full bg-white ${
            isHover ? "opacity-100" : "opacity-70"
          }`}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
