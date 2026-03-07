"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "fade";
  distance?: number;
  duration?: number;
}

export const ScrollReveal = ({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 40,
  duration = 0.6,
}: ScrollRevealProps) => {
  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    scale: { scale: 0.92, opacity: 0 },
    fade: { opacity: 0 },
  };

  const initial = direction === "scale" || direction === "fade" 
    ? directions[direction] 
    : { ...directions[direction], opacity: 0 };

  const animate = direction === "scale" || direction === "fade"
    ? { scale: 1, opacity: 1 }
    : { x: 0, y: 0, opacity: 1 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{
        delay,
        duration,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};
