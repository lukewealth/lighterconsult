"use client";

import { ExternalLink, ArrowRight, ShieldCheck, PlayCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

const projects = [
  {
    title: "Digital Agency Systems",
    category: "Performance Marketing",
    image: "/assets/portfolio/okwara-1.png",
    result: "+327% Engagement",
    span: "col-span-1",
    type: "verified"
  },
  {
    title: "Canada Relocation Success",
    category: "Global Mobility",
    image: "/assets/travel/canada.png",
    result: "150+ Visas Approved",
    span: "md:col-span-1 lg:row-span-2",
    type: "video"
  },
  {
    title: "Growth Blueprint v2.0",
    category: "Strategy & Branding",
    image: "/assets/portfolio/flyer-bky.png",
    result: "98% Success Rate",
    span: "col-span-1",
    type: "verified"
  },
];

export const PortfolioPreview = () => {
  return (
    <section className="bg-white py-24 md:py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-4">
               <div className="h-[1px] w-12 bg-blue-600" />
               <span className="t-label text-blue-600 tracking-[4px]">VERIFIED SUCCESS</span>
            </div>
            <h2 className="t-h1 text-slate-900 leading-tight">Cite-worthy <br/><span className="text-blue-600 italic font-serif text-6xl md:text-8xl">Authority.</span></h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Button variant="secondary" className="rounded-2xl border-slate-200 text-slate-900 hover:bg-slate-50 transition-all font-black group">
              <span className="flex items-center gap-2">
                All Case Studies <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ScrollReveal
              key={i}
              delay={i * 0.1}
              className={project.span}
            >
              <div className="group relative aspect-[4/5] rounded-[48px] overflow-hidden bg-slate-50 border border-slate-100 shadow-xl shadow-slate-200/50">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[0.2] group-hover:grayscale-0"
                />
                
                {/* Result Badge */}
                <div className="absolute top-8 left-8 z-20">
                   <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-lg flex items-center gap-2">
                      <ShieldCheck size={14} className="text-blue-600" />
                      <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{project.result}</span>
                   </div>
                </div>

                {/* Video Play Icon if type is video */}
                {project.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                     <div className="w-20 h-20 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500">
                        <PlayCircle size={40} strokeWidth={1.5} />
                     </div>
                  </div>
                )}
                
                {/* Overlay - Glassmorphism */}
                <div className="absolute inset-x-6 bottom-6 bg-white/90 backdrop-blur-md p-8 rounded-[32px] border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-10 shadow-2xl">
                  <span className="t-label text-blue-600 mb-2 block tracking-widest text-[9px] font-black">{project.category}</span>
                  <h4 className="t-h3 text-slate-900 mb-4 font-black">{project.title}</h4>
                  <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
                    <span>View Full Data</span>
                    <ExternalLink size={14} className="text-blue-600" />
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
