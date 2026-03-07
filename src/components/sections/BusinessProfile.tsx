"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BarChart3, ShieldCheck, Globe } from "lucide-react";
import Image from "next/image";

export const BusinessProfile = () => {
  return (
    <section className="bg-white py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side - High-Impact Typography & Brand Story */}
          <div className="lg:col-span-6 flex flex-col gap-12">
            <ScrollReveal direction="left">
              <div className="relative inline-block">
                <motion.h2 
                  whileHover={{ scale: 1.05 }}
                  className="t-display text-slate-900 leading-[0.85] tracking-[-5px] m-0 cursor-default"
                >
                  500<span className="text-blue-600 italic font-serif">+</span>
                </motion.h2>
                <div className="absolute top-0 -right-24 h-full flex items-center">
                   <div className="h-[1px] w-20 bg-blue-600" />
                   <p className="t-label text-blue-600 ml-4 leading-tight">Successful <br/>Relocations</p>
                </div>
              </div>
              <h3 className="t-h1 text-blue-600 mt-4 leading-none uppercase tracking-tighter">Success Stories</h3>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
               <div className="flex items-start gap-8 group">
                  <motion.div 
                    initial={{ height: 0 }}
                    whileInView={{ height: 80 }}
                    className="w-[2px] bg-blue-600 mt-2" 
                  />
                  <h4 className="t-h2 text-slate-900 leading-tight italic font-serif max-w-[450px] group-hover:text-blue-600 transition-colors duration-500">
                    &ldquo;Strategy is growth made tangible.&rdquo;
                  </h4>
               </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="space-y-8">
               <div className="relative">
                 <h2 className="t-display text-slate-900 text-8xl md:text-9xl leading-none tracking-[-8px] opacity-5 uppercase select-none absolute -top-12 left-0">
                   IGNITE
                 </h2>
                 <div className="flex flex-col gap-6 max-w-[540px] relative z-10">
                    <p className="t-body-lg text-slate-600 font-medium">
                      LiGHTER DIGITAL is Nigeria&apos;s multi-vertical powerhouse, driving dominance in digital marketing and speed in international relocation.
                    </p>
                    <p className="t-body text-slate-500">
                      We bridge the gap between Africa and the global economy. Whether you are scaling a brand to millions or moving your family to Canada, we provide the legal expertise and creative firepower to make it happen.
                    </p>
                 </div>
               </div>

               {/* Use Case Mini Content */}
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <BarChart3 size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-black text-slate-900 uppercase">Business Growth</p>
                      <p className="text-xs text-slate-500 mt-1 italic">4.5x Average ROI for E-commerce clients.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                      <Globe size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-black text-slate-900 uppercase">Global Mobility</p>
                      <p className="text-xs text-slate-500 mt-1 italic">3–6 Months processing for Express Entry.</p>
                    </div>
                  </div>
               </div>
            </ScrollReveal>
          </div>

          {/* Right Side - Dynamic Brand Graphics */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <ScrollReveal direction="right" className="relative w-full max-w-[540px]">
               {/* 3D Visual Motif */}
               <div className="relative aspect-square w-full bg-slate-900 rounded-[60px] overflow-hidden shadow-2xl flex items-center justify-center p-12 group transition-all duration-700 hover:rounded-[100px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-black" />
                  
                  {/* Rotating Inner Frame */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="relative w-full h-full rounded-full border-[15px] border-blue-600/20 border-dashed flex items-center justify-center"
                  >
                    <div className="w-4/5 h-4/5 rounded-full bg-blue-600/5 backdrop-blur-md border border-white/10" />
                  </motion.div>

                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-20">
                     <Image 
                       src="/assets/logos/lighter-main.png" 
                       alt="LiGHTER Logo" 
                       width={200} 
                       height={60} 
                       className="object-contain brightness-0 invert opacity-40 group-hover:opacity-100 transition-opacity duration-500"
                     />
                  </div>

                  {/* Overlay Interaction Info */}
                  <div className="absolute bottom-12 left-12 right-12 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <p className="text-white font-black uppercase tracking-[4px] text-xs mb-2 text-center">Platform Treasury</p>
                    <p className="text-blue-400 text-[10px] font-medium leading-relaxed text-center">Igniting sustainable growth for African brands since 2026.</p>
                  </div>
               </div>

               {/* Success Indicator - Floating Badge */}
               <motion.div 
                 animate={{ y: [0, -20, 0] }}
                 transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -bottom-16 -left-16 w-64 h-64 bg-white border border-slate-100 rounded-full shadow-[0_40px_100px_rgba(0,0,0,0.1)] z-20 flex flex-col items-center justify-center p-8 text-center"
               >
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                    ))}
                  </div>
                  <p className="t-label text-slate-400 text-[9px] font-black uppercase tracking-widest mb-1">Guaranteed Service</p>
                  <p className="text-slate-900 font-black text-2xl m-0 tracking-tighter italic">100% Legal</p>
                  <div className="mt-4 flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full">
                    <ShieldCheck size={12} className="text-blue-600" />
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Verified</span>
                  </div>
               </motion.div>

               {/* Sidebar Signature */}
               <div className="absolute top-12 -right-12 transform rotate-90 origin-right">
                  <p className="t-label text-blue-600 tracking-[10px] whitespace-nowrap opacity-30 font-black">INNOVATION · RESULTS · INTEGRITY</p>
               </div>
            </ScrollReveal>
          </div>

        </div>

        {/* Closing Recognition Footer */}
        <div className="mt-32 pt-16 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 items-end gap-12">
           <ScrollReveal direction="up" className="flex flex-col gap-4">
              <h2 className="t-display text-6xl md:text-8xl text-slate-900 tracking-[-4px] leading-tight m-0">
                ignite<br/><span className="text-blue-600">growth.</span>
              </h2>
              <p className="t-label text-slate-400 mt-4 font-black tracking-[4px]">Building Futures Together</p>
           </ScrollReveal>
           
           <ScrollReveal direction="up" delay={0.2} className="flex flex-col items-end gap-8">
              <div className="text-right">
                 <p className="text-[10px] font-black text-blue-600 mb-2 uppercase tracking-[4px]">Platform HQ</p>
                 <p className="t-body text-slate-600 max-w-[320px] font-bold">
                   KM 34, Lekki-Epe Expressway, <br/>Lekki, Lagos, Nigeria
                 </p>
              </div>
              <div className="flex items-center gap-6 grayscale opacity-20 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <Image 
                  src="/assets/logos/lighter-main.png" 
                  alt="LiGHTER" 
                  width={140} 
                  height={45} 
                  className="object-contain"
                />
              </div>
           </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
