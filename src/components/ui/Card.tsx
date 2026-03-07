"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export const Card = ({ children, className, hover = true, glow = false }: CardProps) => {
  return (
    <motion.div
      whileHover={hover ? { y: -6, borderColor: "rgba(0, 196, 196, 0.35)" } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "bg-card border border-border rounded-[14px] p-8 transition-colors duration-300",
        hover && "hover:shadow-[0_16px_48px_rgba(0,0,0,0.64)] hover:border-teal/35",
        glow && "shadow-teal",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
