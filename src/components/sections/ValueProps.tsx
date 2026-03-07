"use client";

import { BrainCircuit, ShieldCheck, SearchCode, BarChartHorizontal } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const props = [
  {
    title: "AI-Augmented Strategy",
    description: "We use AI for 80% of tactical execution, allowing our strategists to focus 100% on your brand's unique market framing.",
    icon: BrainCircuit,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Verified Trust Ecosystem",
    description: "Transparent, legally-backed processes for relocation. We don't just process visas; we build credible relocation pathways.",
    icon: ShieldCheck,
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    title: "Answer-Engine Optimized",
    description: "We position your brand as the primary source for AI-overviews (Google Gemini, Perplexity), ensuring dominance in 2026 discovery.",
    icon: SearchCode,
    color: "text-sky-600",
    bg: "bg-sky-50",
  },
  {
    title: "Zero-Wait Experience",
    description: "Ultra-fast deployment and real-time ROI tracking. Every Naira of your ad spend is optimized for instant performance.",
    icon: BarChartHorizontal,
    color: "text-teal-600",
    bg: "bg-teal-50",
  }
];

export const ValueProps = () => {
  return (
    <section className="bg-slate-50 py-24 md:py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <span className="px-4 py-1 rounded-full bg-blue-100 text-blue-600 t-label text-[10px] tracking-[4px]">THE LiGHTER EDGE</span>
          </div>
          <h2 className="t-h1 text-slate-900 mb-6 font-black leading-tight tracking-tighter">Built for the <span className="text-blue-600 italic font-serif">Future of Growth.</span></h2>
          <p className="t-body-lg text-slate-500 max-w-[720px] mx-auto font-medium">
            In an era of AI saturation, human strategy is the differentiator. We combine proprietary data with world-class creativity to deliver cite-worthy authority.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {props.map((prop, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="flex flex-col items-center text-center group">
              <div className={`w-24 h-24 rounded-[40px] ${prop.bg} flex items-center justify-center mb-8 transition-all duration-700 group-hover:rounded-[20px] group-hover:rotate-6 shadow-sm border border-white/50 group-hover:shadow-2xl group-hover:shadow-blue-100`}>
                <prop.icon size={40} className={prop.color} />
              </div>
              <h3 className="t-h3 text-slate-900 mb-4 group-hover:text-blue-600 transition-colors font-black uppercase tracking-tight text-xl leading-tight">
                {prop.title}
              </h3>
              <p className="t-body text-slate-500 font-medium leading-relaxed">
                {prop.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
