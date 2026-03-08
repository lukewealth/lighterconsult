"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { ExternalLink, TrendingUp, Users, Target, BarChart2, Globe } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Digital Agency Systems",
    category: "Performance Marketing",
    stats: { engagement: "+327%", reach: "1.2M+", roi: "4.5x" },
    image: "/assets/portfolio/okwara-1.png",
    description: "A comprehensive digital transformation focusing on brand authority, automated systems, and high-performance lead generation."
  },
  {
    title: "Canada Relocation Success",
    category: "Global Mobility",
    stats: { success: "100%", cases: "150+", time: "5 Months" },
    image: "/assets/travel/canada.png",
    description: "Guidance and processing for a cohort of 150+ professionals successfully relocating to Ontario, Canada."
  },
  {
    title: "Digital Growth Blueprint",
    category: "Branding & Strategy",
    stats: { conversion: "+45%", growth: "3x", retention: "98%" },
    image: "/assets/portfolio/flyer-bky.png",
    description: "Development of the Strategic Growth Blueprint now used by 50+ startups across Nigeria."
  }
];

export const PortfolioUI = () => {
  return (
    <>
      <Navbar />
      
      {/* Profile Header */}
      <section className="pt-40 pb-24 px-6 border-b border-slate-100 bg-slate-50 relative">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <span className="t-label text-blue-600 mb-6 block tracking-[4px]">BUSINESS PROFILE</span>
            <h1 className="t-display text-slate-900 mb-8 md:text-8xl">Proven<br/><span className="text-blue-600 italic font-serif">Results.</span></h1>
            <p className="t-body-lg text-slate-500 max-w-[540px]">
              Our profile is built on tangible outcomes. We don&apos;t just promise growth; we engineer it through strategy and data.
            </p>
            
            <div className="flex gap-12 mt-12">
               <div>
                  <p className="text-3xl font-black text-slate-900 m-0">500+</p>
                  <p className="t-label text-slate-400 text-[9px]">Clients</p>
               </div>
               <div className="h-12 w-[1px] bg-slate-200" />
               <div>
                  <p className="text-3xl font-black text-slate-900 m-0">98%</p>
                  <p className="t-label text-slate-400 text-[9px]">Retention</p>
               </div>
               <div className="h-12 w-[1px] bg-slate-200" />
               <div>
                  <p className="text-3xl font-black text-slate-900 m-0">150+</p>
                  <p className="t-label text-slate-400 text-[9px]">Relocations</p>
               </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="relative flex justify-center">
             <div className="w-[400px] aspect-square rounded-[60px] bg-blue-600 overflow-hidden relative shadow-2xl animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-800" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <BarChart2 size={120} className="text-white/20" />
                </div>
             </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto space-y-24">
          {projects.map((project, i) => (
            <ScrollReveal key={i} direction={i % 2 === 0 ? "up" : "up"} delay={i * 0.1}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center group">
                <div className={`lg:col-span-7 relative ${i % 2 === 1 ? 'lg:order-last' : ''}`}>
                  <div className="aspect-video bg-slate-100 rounded-[48px] overflow-hidden border-[12px] border-white shadow-2xl relative">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-105" 
                    />
                  </div>
                </div>
                
                <div className="lg:col-span-5 flex flex-col gap-6">
                  <span className="t-label text-blue-600 text-[10px] tracking-[3px]">{project.category}</span>
                  <h3 className="t-h1 text-slate-900 leading-tight">{project.title}</h3>
                  <p className="t-body-lg text-slate-500">
                    {project.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 pt-4">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                        <p className="text-blue-600 font-black text-xl m-0 tracking-tight">{value}</p>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">{key.replace('_', ' ')}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6">
                    <Button variant="secondary" className="rounded-2xl border-slate-200 text-slate-900 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all font-black">
                      <span className="flex items-center gap-2">
                        View Details <ExternalLink size={16} />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Results Strip */}
      <section className="py-24 px-6 bg-slate-900 text-center">
        <ScrollReveal>
          <h2 className="t-h2 text-white mb-12 uppercase tracking-widest">Business Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-[1200px] mx-auto">
             <div className="flex flex-col items-center gap-4">
                <Users size={32} className="text-blue-400" />
                <p className="text-white font-black text-lg">10k+ Reach</p>
             </div>
             <div className="flex flex-col items-center gap-4">
                <TrendingUp size={32} className="text-blue-400" />
                <p className="text-white font-black text-lg">3x Growth</p>
             </div>
             <div className="flex flex-col items-center gap-4">
                <Target size={32} className="text-blue-400" />
                <p className="text-white font-black text-lg">98% Success</p>
             </div>
             <div className="flex flex-col items-center gap-4">
                <Globe size={32} className="text-blue-400" />
                <p className="text-white font-black text-lg">Global Impact</p>
             </div>
          </div>
        </ScrollReveal>
      </section>

      <Footer />
    </>
  );
};
