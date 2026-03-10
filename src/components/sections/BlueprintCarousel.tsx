"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";
import Image from "next/image";

const slides = [
  { id: 1, title: "Market Analysis", description: "Deep dive into your industry landscape.", image: "/assets/blueprint/1.png" },
  { id: 2, title: "Brand Positioning", description: "Defining your unique value proposition.", image: "/assets/blueprint/2.png" },
  { id: 3, title: "Content Strategy", description: "Crafting narratives that resonate.", image: "/assets/blueprint/3.png" },
  { id: 4, title: "Omni-channel Presence", description: "Being where your customers are.", image: "/assets/blueprint/4.png" },
  { id: 5, title: "Funnel Optimization", description: "Converting attention into revenue.", image: "/assets/blueprint/5.png" },
  { id: 6, title: "Paid Acquisition", description: "Scaling with precision-targeted ads.", image: "/assets/blueprint/6.png" },
  { id: 7, title: "Community Building", description: "Fostering long-term brand loyalty.", image: "/assets/blueprint/7.png" },
  { id: 8, title: "Data Analytics", description: "Measuring what matters for growth.", image: "/assets/blueprint/8.png" },
  { id: 9, title: "Retention Systems", description: "Keeping your customers coming back.", image: "/assets/blueprint/9.png" },
  { id: 10, title: "Scaling Framework", description: "Sustainable growth for the long haul.", image: "/assets/blueprint/10.png" },
];

export const BlueprintCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <section className="bg-dark py-20 md:py-24 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <span className="t-label text-sky mb-4">OUR APPROACH</span>
          <h2 className="t-h2 text-white mb-6">The Strategic Growth Blueprint</h2>
          <p className="t-body text-gray-400 max-w-[600px] mx-auto">
            A proven 10-step framework for transforming brands into market leaders.
          </p>
        </ScrollReveal>

        <div className="relative aspect-[4/5] md:aspect-video w-full max-w-[1000px] mx-auto rounded-[32px] md:rounded-[40px] overflow-hidden bg-[#111] border border-white/5 group shadow-2xl">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute inset-0"
            >
              <Image 
                src={slides[current].image} 
                alt={slides[current].title} 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-8 md:p-12 text-center">
                <div className="absolute top-6 right-6 md:top-8 md:right-8 text-white/10 t-h1 text-6xl md:text-8xl font-black italic select-none">
                  {String(slides[current].id).padStart(2, '0')}
                </div>
                
                <span className="t-label text-sky mb-4 md:mb-6">STEP {slides[current].id}</span>
                <h3 className="t-h1 text-white mb-4 md:mb-6 md:text-6xl uppercase tracking-tighter">{slides[current].title}</h3>
                <p className="t-h3 text-gray-300 max-w-[500px] font-normal leading-relaxed">
                  {slides[current].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between z-20 pointer-events-none">
            <button
              onClick={prevSlide}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white pointer-events-auto hover:bg-sky/20 hover:border-sky/50 transition-all md:opacity-0 md:group-hover:opacity-100"
            >
              <ChevronLeft size={20} className="md:size-6" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 border border-white/10 flex items-center justify-center text-white pointer-events-auto hover:bg-sky/20 hover:border-sky/50 transition-all md:opacity-0 md:group-hover:opacity-100"
            >
              <ChevronRight size={20} className="md:size-6" />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2 z-20">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={cn(
                  "h-1.5 md:h-2 rounded-full transition-all duration-300",
                  i === current ? "w-6 md:w-8 bg-sky" : "w-1.5 md:w-2 bg-white/20 hover:bg-white/40"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
