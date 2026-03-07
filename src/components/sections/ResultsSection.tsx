"use client";

import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { PortfolioPreview } from "./PortfolioPreview";

const metrics = [
  { target: 500, suffix: "+", label: "Active Clients" },
  { target: 98, suffix: "%", label: "Retention Rate" },
  { target: 3, suffix: "x", label: "Avg Engagement" },
  { target: 50, prefix: "₦", suffix: "M+", label: "Ad Spend Managed" },
];

export const ResultsSection = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="t-label text-blue-600 mb-4 tracking-[4px]">RESULTS THAT MATTER</span>
          <h2 className="t-h2 text-slate-900 mb-6">Real Data. <span className="text-blue-600 italic font-serif">Real Growth.</span></h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {metrics.map((metric, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <AnimatedCounter
                target={metric.target}
                suffix={metric.suffix}
                prefix={metric.prefix}
                label={metric.label}
                className="text-blue-600"
              />
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-12">
          <PortfolioPreview />
        </div>
      </div>
    </section>
  );
};
