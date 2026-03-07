"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const testimonials = [
  {
    name: "Chidinma A.",
    location: "Lagos → Toronto",
    content: "LiGHTER made our Canada dream a reality. The process was smooth and in just 5 months we were in Toronto with our kids.",
    destination: "🇨🇦 Canada",
  },
  {
    name: "Tunde O.",
    location: "Lekki → Melbourne",
    content: "I was sceptical at first but LiGHTER was transparent every step of the way. Now I'm studying in Melbourne!",
    destination: "🇦🇺 Australia",
  },
  {
    name: "Mrs. Afolabi",
    location: "Abuja → Vancouver",
    content: "Family reunification was complicated until LiGHTER handled our case. Professional and caring team.",
    destination: "🇨🇦 Canada",
  },
];

export const TestimonialsSectionTravel = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-[#050505] py-24 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="t-label text-teal mb-4">TESTIMONIALS</span>
          <h2 className="t-h2 text-white">Success Stories</h2>
        </ScrollReveal>

        <div className="relative max-w-[800px] mx-auto px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-[#0A0A0A] border border-white/5 p-12 rounded-[24px] text-center shadow-2xl"
            >
              <div className="flex justify-center items-center gap-3 mb-8">
                <span className="text-3xl">{testimonials[current].destination}</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#00C4C4" className="text-teal" />
                  ))}
                </div>
              </div>

              <blockquote className="t-h3 text-white/90 font-medium italic mb-10 leading-relaxed">
                &ldquo;{testimonials[current].content}&rdquo;
              </blockquote>

              <div>
                <h4 className="text-white font-bold t-body">{testimonials[current].name}</h4>
                <p className="text-teal font-semibold text-[12px] uppercase tracking-wider mt-1">
                  {testimonials[current].location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-700 hover:text-teal transition-colors"
          >
            <ChevronLeft size={40} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-700 hover:text-teal transition-colors"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      </div>
    </section>
  );
};
