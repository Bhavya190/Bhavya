"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState, useMemo } from "react";

export default function BackgroundEffect() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Generate stars only once on mount
  const stars = useMemo(() => {
    return Array.from({ length: 150 }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      duration: Math.random() * 5 + 5,
      delay: Math.random() * 5,
    }));
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden bg-[#050505]">
      {/* Moving Stars (Galaxy Effect) */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            initial={{ opacity: 0.2 }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: star.size,
              height: star.size,
              backgroundColor: "white",
              borderRadius: "50%",
              boxShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
            }}
          />
        ))}
      </div>

      {/* Moving Vertical Line */}
      <motion.div
        style={{ scaleY }}
        className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-orange-primary/40 to-transparent origin-top -translate-x-1/2 z-10"
      />

      {/* Interactive Mouse Glow */}
      <div className="absolute inset-0">
         <motion.div 
            animate={{
              x: mousePosition.x - 250,
              y: mousePosition.y - 250,
            }}
            transition={{ type: "spring", damping: 40, stiffness: 60 }}
            className="w-[500px] h-[500px] rounded-full bg-orange-primary/10 blur-[120px] absolute z-20"
         />
      </div>

      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none z-30 bg-noise" />
    </div>
  );
}

