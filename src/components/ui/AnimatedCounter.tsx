"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  label?: string;
  className?: string;
  labelClassName?: string;
}

export const AnimatedCounter = ({
  target,
  suffix = "",
  prefix = "",
  label,
  className,
  labelClassName,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: 3000,
    damping: 30,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(target);
    }
  }, [isInView, motionValue, target]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = prefix + Intl.NumberFormat("en-US").format(Math.round(latest)) + suffix;
      }
    });
  }, [springValue, prefix, suffix]);

  return (
    <div className="flex flex-col items-center justify-center">
      <span
        ref={ref}
        className={cn("t-h1 text-white block", className)}
      >
        {prefix}0{suffix}
      </span>
      {label && (
        <span className={cn("t-label text-gray-600 mt-2 text-center", labelClassName)}>
          {label}
        </span>
      )}
    </div>
  );
};
