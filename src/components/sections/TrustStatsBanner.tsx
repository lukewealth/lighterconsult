"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const stats = [
  { target: 3, suffix: "–6 Months", label: "Average Processing" },
  { target: 500, suffix: "+", label: "Clients Relocated" },
  { target: 100, suffix: "% Legal", label: "Guaranteed Process" },
  { target: 2, suffix: " Countries", label: "Primary Specializations" },
];

export const TrustStatsBanner = () => {
  return (
    <section className="bg-teal/5 border-y border-teal/10 py-12 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
        {stats.map((stat, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <AnimatedCounter
              target={stat.target}
              suffix={stat.suffix}
              label={stat.label}
              className="text-teal"
            />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};
