"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const stats = [
  { target: 500, suffix: "+", label: "Clients Served" },
  { target: 50, suffix: "+", label: "Brands Built" },
  { target: 3, suffix: "–6mo", label: "Avg Visa Processing" },
  { target: 100, prefix: "₦", suffix: "M+", label: "Revenue Generated" },
];

export const StatsBar = () => {
  return (
    <section className="bg-white border-y border-slate-100 py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="flex items-center justify-center relative group">
              <AnimatedCounter
                target={stat.target}
                suffix={stat.suffix}
                prefix={stat.prefix}
                label={stat.label}
                className="text-slate-900 group-hover:text-blue-600 transition-colors duration-500"
              />
              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 w-[1px] h-16 bg-slate-100" />
              )}
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};
