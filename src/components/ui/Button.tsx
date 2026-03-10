"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "ghost" | "teal" | "danger";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, children, ...props }, ref) => {
    const variants = {
      primary: "bg-cta-gradient text-black shadow-[0_4px_20px_rgba(224,128,32,0.35)] hover:shadow-[0_10px_40px_rgba(224,128,32,0.45)]",
      secondary: "bg-transparent border-[1.5px] border-teal text-teal hover:bg-teal/10 hover:shadow-[0_0_24px_rgba(0,196,196,0.25)]",
      ghost: "bg-transparent border-[1.5px] border-white/35 text-white hover:bg-white/10 hover:border-white/70",
      teal: "bg-teal text-black hover:bg-[#00DADA] shadow-glow-teal",
      danger: "bg-red-600 text-white hover:bg-red-700",
    };

    const sizes = {
      sm: "px-5 py-2 md:px-7 md:py-2.5 text-[12px] md:text-[13px]",
      md: "px-7 py-3 md:px-9 md:py-3.5 text-[13px] md:text-[14px]",
      lg: "px-8 py-3.5 md:px-11 md:py-4 text-[13px] md:text-[14px]",
      xl: "px-10 py-4 md:px-16 md:py-5 text-[14px] md:text-[15px]",
    };

    const classes = cn(
      "t-btn inline-flex items-center justify-center rounded-[4px] transition-all duration-300",
      variants[variant as keyof typeof variants],
      sizes[size as keyof typeof sizes],
      className
    );

    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <motion.button
        ref={ref}
        whileHover={{ y: -2, scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className={classes}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };
