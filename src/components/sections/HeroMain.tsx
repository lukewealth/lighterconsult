"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, ShieldCheck, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const serviceTags = ["AI-Augmented Strategy", "ROI Optimization", "Express Entry", "Visa Compliance", "Content Engineering", "Market Dominance"];

const slides = [
  {
    id: 1,
    eyebrow: "AFRICA'S BOLDEST DIGITAL FORCE",
    title: "Igniting Growth. Building Futures.",
    subtitle: "Strategy is growth made tangible.",
    description: "Nigeria's multi-vertical powerhouse, driving market dominance for brands and speed for global relocation.",
    image: "/assets/hero/slide-1.png",
    cta1: "Our Solutions",
    href1: "/services",
    cta2: "View Results",
    href2: "/portfolio",
    theme: "teal",
  },
  {
    id: 2,
    eyebrow: "DIGITAL MARKETING & ADS",
    title: "4.5x Average ROI for Clients",
    subtitle: "AI-Augmented Marketing Strategy",
    description: "We don't just manage presence; we engineer performance. Scale your e-commerce or B2B brand with precision data.",
    image: "/assets/hero/smm.png",
    cta1: "Calculate My ROI",
    href1: "/consult/book",
    cta2: "See Case Studies",
    href2: "/portfolio",
    theme: "sky",
    badge: { icon: BarChart3, text: "+327% Avg. Engagement" }
  },
  {
    id: 3,
    eyebrow: "GLOBAL MOBILITY & VISAS",
    title: "Relocate in 3–6 Months",
    subtitle: "100% Legal & Transparent Process",
    description: "Your Canadian or Australian dream starts with an honest assessment. We handle the complexity, you plan your future.",
    image: "/assets/hero/canada.png",
    cta1: "Check My Eligibility",
    href1: "/travel/book-now",
    cta2: "Relocation Guide",
    href2: "/travel",
    theme: "amber",
    badge: { icon: ShieldCheck, text: "Verified Legal Pathway" }
  },
];

export const HeroMain = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white flex flex-col">
      <div className="flex-grow flex items-center relative">
        {/* Background Image Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <div className="absolute inset-0 bg-white/70 backdrop-blur-[1px] z-10" />
            <Image
              src={slides[current].image}
              alt={slides[current].title}
              fill
              className="object-cover object-center grayscale-[0.3] opacity-25"
              priority
            />
          </motion.div>
        </AnimatePresence>

        <div className="max-w-[1400px] mx-auto px-6 w-full z-20 relative pt-24 pb-8 md:pt-32 md:pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${current}`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.6, ease: "circOut" }}
                  className="flex flex-col gap-6 md:gap-8"
                >
                  <div className="flex items-center gap-4">
                    <motion.span 
                      initial={{ width: 0 }}
                      animate={{ width: 48 }}
                      className="h-[2px] bg-blue-600" 
                    />
                    <span className={cn(
                      "t-label tracking-[2px] md:tracking-[4px] font-black",
                      slides[current].theme === 'amber' ? 'text-amber' : 'text-blue-600'
                    )}>
                      {slides[current].eyebrow}
                    </span>
                  </div>

                  <h1 className="t-display m-0">
                    {slides[current].title}
                  </h1>

                  <p className="t-h3 text-slate-700 font-bold italic font-serif">
                    &ldquo;{slides[current].subtitle}&rdquo;
                  </p>

                  <p className="t-body-lg text-slate-500 max-w-[580px] font-medium leading-relaxed">
                    {slides[current].description}
                  </p>

                  <div className="flex flex-wrap gap-4 md:gap-6 mt-4">
                    <Button 
                      variant="primary" 
                      size="xl" 
                      href={slides[current].href1} 
                      className={cn(
                        "rounded-2xl px-8 md:px-12 text-white font-black shadow-2xl transition-transform hover:scale-105",
                        slides[current].theme === 'amber' ? 'bg-amber shadow-amber-100' : 'bg-blue-600 shadow-blue-100'
                      )}
                    >
                      {slides[current].cta1}
                    </Button>
                    <button className="flex items-center gap-4 group cursor-pointer">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:border-slate-900 transition-all duration-500 shadow-sm">
                        <Play size={16} className="text-slate-900 group-hover:text-white fill-current md:size-[18px]" />
                      </div>
                      <span className="t-label text-slate-900 font-black group-hover:text-blue-600 transition-colors">WATCH INTRO</span>
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="hidden lg:col-span-5 lg:flex justify-end relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`image-${current}`}
                  initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 1.1, rotate: -2 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="relative w-full max-w-[480px] aspect-[4/5] rounded-[60px] overflow-hidden border-[16px] border-white shadow-[0_40px_100px_rgba(0,0,0,0.1)]"
                >
                  <Image src={slides[current].image} alt={slides[current].title} fill className="object-cover grayscale-[0.2]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  
                  {/* Floating Content Badge */}
                  {slides[current].badge && (
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-white/20 shadow-2xl flex items-center gap-4"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg">
                        {(() => {
                          const Icon = slides[current].badge!.icon;
                          return <Icon size={24} />;
                        })()}
                      </div>
                      <p className="text-sm font-black text-slate-900 uppercase tracking-tight">{slides[current].badge!.text}</p>
                    </motion.div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Branded Capabilities Bar */}
      <div className="bg-white border-t border-slate-100 py-12 relative z-30">
        <div className="max-w-[1400px] mx-auto px-6 overflow-hidden">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-16 whitespace-nowrap"
          >
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-16">
                {serviceTags.map((tag) => (
                  <div key={tag} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber" />
                    <span className="text-[11px] font-black text-slate-400 uppercase tracking-[4px] hover:text-blue-600 transition-colors cursor-default">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* slider Nav */}
      <div className="absolute bottom-32 left-6 right-6 max-w-[1400px] mx-auto flex items-center justify-between z-30">
        <div className="flex gap-4">
          <button onClick={prev} className="w-14 h-14 rounded-2xl border border-slate-100 flex items-center justify-center text-slate-900 hover:bg-blue-600 hover:text-white transition-all shadow-sm bg-white group">
            <ChevronLeft size={24} className="group-hover:scale-110" />
          </button>
          <button onClick={next} className="w-14 h-14 rounded-2xl border border-slate-100 flex items-center justify-center text-slate-900 hover:bg-blue-600 hover:text-white transition-all shadow-sm bg-white group">
            <ChevronRight size={24} className="group-hover:scale-110" />
          </button>
        </div>
      </div>
    </section>
  );
};
