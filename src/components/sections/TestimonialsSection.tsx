"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const testimonials = [
  {
    name: "Okwara Ultimate",
    role: "CEO",
    company: "Okwara Ultimate",
    content: "LiGHTER transformed our digital presence. Engagement increased by 300% within the first three months of our campaign.",
    stars: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechPulse",
    content: "The Strategic Growth Blueprint is a game changer. Clear, actionable steps that delivered tangible results for our brand.",
    stars: 5,
  },
  {
    name: "David Adeleke",
    role: "Founder",
    company: "VibeMedia",
    content: "Professional, creative, and data-driven. The team at LiGHTER CONSULT really knows how to scale a business online.",
    stars: 5,
  },
];

export const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-gradient-to-b from-black to-[#060606] py-24 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="t-label text-sky mb-4">TESTIMONIALS</span>
          <h2 className="t-h2 text-white">What Our Clients Say</h2>
        </ScrollReveal>

        <div className="relative max-w-[800px] mx-auto px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="bg-card border border-white/5 p-12 rounded-[20px] text-center"
            >
              <div className="flex justify-center gap-1 mb-8">
                {[...Array(testimonials[current].stars)].map((_, i) => (
                  <Star key={i} size={16} fill="#E0C000" className="text-gold" />
                ))}
              </div>

              <blockquote className="t-h3 text-white/90 font-medium italic mb-10 leading-relaxed">
                &ldquo;{testimonials[current].content}&rdquo;
              </blockquote>

              <div>
                <h4 className="text-white font-bold t-body">{testimonials[current].name}</h4>
                <p className="text-gray-500 text-sm mt-1">
                  {testimonials[current].role}, {testimonials[current].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-600 hover:text-sky transition-colors"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-600 hover:text-sky transition-colors"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};
