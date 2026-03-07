"use client";

import { Zap, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { cn } from "@/lib/utils";
import Image from "next/image";

const brands = [
  {
    id: "consult",
    eyebrow: "DIGITAL MARKETING & CONSULTING",
    title: "Grow Your Brand Online",
    description: "Social media, content creation, paid advertising and digital strategy — crafted for businesses that demand real results.",
    tags: ["Social Media", "Content", "Ads", "Strategy"],
    cta: "Explore Consult",
    href: "/consult",
    icon: Zap,
    bg: "bg-white",
    border: "border-slate-100",
    hoverBorder: "hover:border-blue-200",
    accentColor: "text-blue-600",
    tagBg: "bg-blue-50",
    tagText: "text-blue-600",
    image: "/assets/portfolio/smm-showcase.png",
  },
  {
    id: "travel",
    eyebrow: "INTERNATIONAL TRAVEL & IMMIGRATION",
    title: "Move Abroad. Take Your Family.",
    description: "Work, study and live in Canada or Australia. Personalized visa processing and relocation support — legally, in 3–6 months.",
    tags: ["Canada", "Australia", "Work Permit", "Study Visa"],
    cta: "Start Your Journey",
    href: "/travel",
    icon: Globe,
    bg: "bg-white",
    border: "border-slate-100",
    hoverBorder: "hover:border-amber-200",
    accentColor: "text-amber-600",
    tagBg: "bg-amber-50",
    tagText: "text-amber-600",
    image: "/assets/travel/hero-world.png",
  },
];

export const SubBrandCards = () => {
  return (
    <section className="bg-slate-50 py-24 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {brands.map((brand, i) => (
          <ScrollReveal key={brand.id} delay={i * 0.2} direction={i === 0 ? "left" : "right"}>
            <div
              className={cn(
                "group relative h-full rounded-[40px] p-12 overflow-hidden border transition-all duration-500",
                brand.bg,
                brand.border,
                brand.hoverBorder,
                "hover:-translate-y-2 hover:shadow-2xl shadow-slate-200/50"
              )}
            >
              {/* Background Image Watermark - Modern Style */}
              <div className="absolute top-0 right-0 w-1/2 h-full z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                <Image 
                  src={brand.image} 
                  alt="" 
                  fill 
                  className="object-cover object-center grayscale transform translate-x-10 scale-110"
                />
              </div>

              <div className="relative z-20 flex flex-col h-full">
                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-8 bg-slate-50 shadow-inner group-hover:scale-110 transition-transform duration-500", brand.accentColor)}>
                  <brand.icon size={28} />
                </div>

                <span className={cn("t-label mb-4 text-[10px] tracking-[3px]", brand.accentColor)}>{brand.eyebrow}</span>
                <h3 className="t-h2 text-slate-900 mb-6 leading-tight font-black">{brand.title}</h3>
                <p className="t-body text-slate-500 mb-8 max-w-[400px]">
                  {brand.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {brand.tags.map((tag) => (
                    <span
                      key={tag}
                      className={cn(
                        "text-[10px] font-black px-4 py-1.5 rounded-xl uppercase tracking-wider",
                        brand.tagBg,
                        brand.tagText
                      )}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <Button 
                    variant="primary"
                    href={brand.href}
                    className={cn(
                      "w-full sm:w-auto rounded-2xl px-10 py-6 font-black group/btn",
                      brand.id === "consult" ? "bg-blue-600 shadow-blue-100" : "bg-amber-500 shadow-amber-100"
                    )}
                  >
                    <span className="flex items-center gap-2 text-white">
                      {brand.cta} <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};
