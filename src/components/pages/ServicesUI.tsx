"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { 
  Zap, 
  Globe, 
  BarChart3, 
  LineChart, 
  Target, 
  Smartphone
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const mainServices = [
  {
    id: "consult",
    title: "LiGHTER CONSULT",
    subtitle: "Digital Marketing & Strategy",
    description: "We help brands establish authority and scale through data-driven digital marketing. From social media management to complex ad campaigns.",
    icon: Zap,
    color: "text-blue-600",
    bg: "bg-blue-50",
    image: "/assets/hero/smm.png",
    href: "/consult",
    useCases: [
      "E-commerce scaling through Meta Ads",
      "B2B lead generation via LinkedIn",
      "Personal brand authority building",
      "ROI-focused content production"
    ]
  },
  {
    id: "travel",
    title: "LiGHTER TRAVEL",
    subtitle: "International Immigration",
    description: "Your professional partner for relocation to Canada, UK, and Australia. We handle the complexity of visa processing so you can focus on your future.",
    icon: Globe,
    color: "text-amber-600",
    bg: "bg-amber-50",
    image: "/assets/travel/hero-world.png",
    href: "/travel",
    useCases: [
      "Study permits for top universities",
      "Skilled worker relocation pathways",
      "Business and visit visa processing",
      "Family reunification assistance"
    ]
  }
];

const insights = [
  {
    title: "Audience Segmentation",
    desc: "Target the right users with surgical precision using advanced data layers.",
    icon: Target
  },
  {
    title: "Conversion Tracking",
    desc: "Know exactly where every Naira goes and what it brings back in revenue.",
    icon: LineChart
  },
  {
    title: "Platform Optimization",
    desc: "Tailored content for TikTok, Instagram, and LinkedIn algorithms.",
    icon: Smartphone
  }
];

export const ServicesUI = () => {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 bg-slate-50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/5 -skew-x-12 translate-x-20 hidden md:block" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <ScrollReveal>
            <span className="t-label text-blue-600 mb-6 block tracking-[4px]">OUR SOLUTIONS</span>
            <h1 className="t-display text-slate-900 mb-8 uppercase tracking-tighter">Full-Stack<br/><span className="text-blue-600 italic font-serif lowercase">Services.</span></h1>
            <p className="t-body-lg text-slate-500 max-w-[640px] font-medium leading-relaxed">
              LiGHTER provides integrated solutions across digital growth and global mobility. We combine strategy, technology, and legal expertise.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Service Pillars */}
      <section className="py-20 md:py-24 px-6">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-24 md:gap-32">
          {mainServices.map((service, i) => (
            <div key={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <ScrollReveal direction={i % 2 === 0 ? "left" : "right"} className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className={`w-16 h-16 md:w-20 md:h-20 rounded-[24px] md:rounded-[32px] ${service.bg} flex items-center justify-center mb-6 md:mb-8 shadow-sm`}>
                  <service.icon size={28} className={`${service.color} md:size-[36px]`} />
                </div>
                <h2 className="t-h1 text-slate-900 mb-4 uppercase tracking-tight">{service.title}</h2>
                <p className="t-h3 text-blue-600 mb-6 font-medium italic font-serif">{service.subtitle}</p>
                <p className="t-body-lg text-slate-500 mb-10 font-medium">
                  {service.description}
                </p>
                
                <div className="bg-slate-50 p-6 md:p-8 rounded-[32px] md:rounded-[40px] border border-slate-100 mb-10">
                  <h4 className="text-slate-900 font-black uppercase tracking-widest text-[10px] mb-6 flex items-center gap-2">
                    <BarChart3 size={14} className="text-blue-600" />
                    Business Use Cases
                  </h4>
                  <ul className="space-y-4">
                    {service.useCases.map((useCase, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-600 font-bold text-xs md:text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button href={service.href} variant="primary" size="lg" className="rounded-2xl px-10 md:px-12 text-white font-black border-none w-full sm:w-auto shadow-xl shadow-blue-100">
                  Learn More About {service.title.split(' ')[1]}
                </Button>
              </ScrollReveal>

              <ScrollReveal direction={i % 2 === 0 ? "right" : "left"} className={cn("relative", i % 2 === 1 ? "lg:order-1" : "")}>
                <div className="aspect-square bg-slate-100 rounded-[40px] md:rounded-[60px] overflow-hidden relative shadow-2xl shadow-blue-100 border-[8px] md:border-[12px] border-white group">
                   <Image 
                     src={service.image} 
                     alt={service.title} 
                     fill 
                     className="object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                {/* Floating Insight Card */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 bg-white p-6 md:p-8 rounded-[24px] md:rounded-[32px] shadow-2xl border border-slate-50 z-20 hidden sm:block"
                >
                  <p className="t-label text-blue-600 mb-2 text-[9px]">Insight</p>
                  <p className="text-slate-900 font-black text-lg md:text-xl leading-tight uppercase tracking-tight">Data-Driven<br/>Decisions</p>
                </motion.div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </section>

      {/* Social Media Insights Strip */}
      <section className="py-20 md:py-24 bg-slate-900 overflow-hidden relative px-6">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#3b82f6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <ScrollReveal className="text-center mb-12 md:mb-16">
            <span className="t-label text-blue-400 mb-4 block tracking-[4px]">SOCIAL MEDIA INSIGHTS</span>
            <h2 className="t-h2 text-white uppercase tracking-tight">Dominate the Digital Landscape</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {insights.map((insight, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="bg-white/5 border border-white/10 p-8 md:p-10 rounded-[32px] md:rounded-[40px] hover:bg-white/10 transition-all group">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-blue-600/20 flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform">
                  <insight.icon size={24} className="text-blue-400 md:size-[28px]" />
                </div>
                <h3 className="text-white font-black text-lg md:text-xl mb-4 uppercase tracking-tight">{insight.title}</h3>
                <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium">{insight.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 px-6 text-center">
        <ScrollReveal>
          <h2 className="t-h1 text-slate-900 mb-8 uppercase tracking-tighter">Ready to Start?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
            <Button href="/consult/book" variant="primary" size="xl" className="rounded-2xl px-12 md:px-16 text-white font-black border-none bg-amber shadow-xl shadow-amber-100 w-full sm:w-auto">Consult</Button>
            <Button href="/travel/book-now" variant="secondary" size="xl" className="rounded-2xl px-12 md:px-16 border-slate-200 text-slate-900 font-black w-full sm:w-auto">Travel</Button>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </>
  );
};
