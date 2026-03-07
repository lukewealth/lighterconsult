"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const ManifestoQuote = () => {
  return (
    <section className="relative bg-white py-24 md:py-32 px-6 overflow-hidden">
      {/* Background Quote Mark - Light Style */}
      <span className="absolute top-[-40px] left-1/2 -translate-x-1/2 text-[200px] text-blue-600/5 font-serif pointer-events-none select-none">
        &ldquo;
      </span>

      <div className="max-w-[820px] mx-auto text-center relative z-10">
        <ScrollReveal>
          <blockquote className="t-h2 md:t-h1 text-slate-900 leading-tight italic font-serif">
            We don&apos;t just manage your digital presence — we spark <span className="text-blue-600">growth and sustainability.</span>
          </blockquote>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 160 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-[2px] bg-blue-600 mx-auto mt-8 rounded-full"
          />
          <cite className="block t-body-lg text-slate-400 mt-6 not-italic font-black uppercase tracking-widest text-sm">
            — LiGHTER DIGITAL, Lagos
          </cite>
        </ScrollReveal>
      </div>
    </section>
  );
};
