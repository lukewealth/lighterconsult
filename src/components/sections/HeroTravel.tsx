"use client";

import { motion } from "framer-motion";
import { Play, Calendar, Users, Globe, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";
import Link from "next/link";

export const HeroTravel = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white flex items-center pt-20">
      {/* Dynamic Background Shapes from Travels Page Sample */}
      <div className="absolute top-0 right-0 w-[60%] h-full bg-blue-50/50 rounded-l-[200px] -z-10 transform translate-x-20" />
      <div className="absolute top-20 left-20 w-32 h-32 border-4 border-blue-100 rounded-full -z-10 animate-pulse" />

      <div className="max-w-[1400px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side - Image with Circle Mask from Sample */}
        <ScrollReveal direction="left" className="relative">
          <div className="relative w-full aspect-square max-w-[600px] mx-auto">
            {/* The "Circle Path" effect from Travels page.jpg */}
            <div className="absolute inset-0 border-[20px] border-blue-600/10 rounded-full" />
            <div className="absolute inset-[40px] rounded-full overflow-hidden shadow-2xl bg-slate-100">
              <Image 
                src="/assets/travel/hero-world.png" 
                alt="World Travel" 
                fill 
                className="object-cover scale-110"
                priority
              />
            </div>
            
            {/* Floating Info Cards from Design Guide */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[15%] -right-10 bg-white p-6 rounded-3xl shadow-xl border border-slate-50 z-20 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white">
                <Globe size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Top Destination</p>
                <p className="text-lg font-black text-slate-900 leading-tight">Toronto, Canada</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[15%] -left-10 bg-white p-6 rounded-3xl shadow-xl border border-slate-50 z-20 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-500 flex items-center justify-center text-white">
                <Users size={24} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Happy Travelers</p>
                <p className="text-lg font-black text-slate-900 leading-tight">500+ Relocated</p>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Right Side - Content & Form Style from Travels page.jpg */}
        <ScrollReveal direction="right" className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <span className="px-4 py-1 rounded-full bg-blue-100 text-blue-600 t-label text-[10px]">Relocation Experts</span>
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-1 rounded-full bg-blue-600" />)}
            </div>
          </div>

          <h1 className="t-display text-slate-900 leading-[1.05] tracking-tight">
            Sight Seeing & <br/>
            <span className="text-blue-600">Travel Experience</span>
          </h1>

          <p className="t-body-lg text-slate-500 max-w-[500px]">
            We provide a structured roadmap for your international transition. Legally backed, family-focused, and results-driven.
          </p>

          {/* Quick Booking Interface from Sample */}
          <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-100 shadow-sm space-y-8 mt-4">
            <div className="grid grid-cols-2 gap-6">
              <Link href="/travel/book-now" className="group/item">
                <div className="space-y-3">
                  <p className="t-label text-[10px] text-slate-400 group-hover/item:text-blue-600 transition-colors uppercase font-bold tracking-widest">Destination</p>
                  <div className="flex items-center justify-between text-slate-900 font-bold border-b border-slate-200 pb-2 group-hover/item:border-blue-600 transition-all">
                    <div className="flex items-center gap-3">
                      <Globe size={18} className="text-blue-600" />
                      <span className="text-sm uppercase tracking-tight">Select Country</span>
                    </div>
                    <ChevronDown size={14} className="text-slate-300" />
                  </div>
                </div>
              </Link>
              <Link href="/travel/book-now" className="group/item">
                <div className="space-y-3">
                  <p className="t-label text-[10px] text-slate-400 group-hover/item:text-blue-600 transition-colors uppercase font-bold tracking-widest">Set Date</p>
                  <div className="flex items-center justify-between text-slate-900 font-bold border-b border-slate-200 pb-2 group-hover/item:border-blue-600 transition-all">
                    <div className="flex items-center gap-3">
                      <Calendar size={18} className="text-blue-600" />
                      <span className="text-sm uppercase tracking-tight">Choose Timeline</span>
                    </div>
                    <ChevronDown size={14} className="text-slate-300" />
                  </div>
                </div>
              </Link>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-100 font-black">1</div>
                <div>
                  <p className="text-sm font-black text-slate-900 uppercase">Passenger</p>
                  <p className="text-[9px] text-slate-400 uppercase tracking-widest font-black">Total family members</p>
                </div>
              </div>
              <Button href="/travel/book-now" size="lg" className="rounded-2xl px-10 bg-blue-600 text-white shadow-xl shadow-blue-100 group">
                <span className="flex items-center gap-2">
                  Continue <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-8 pt-4">
            <Link href="/travel/book-now" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:shadow-lg group-hover:shadow-blue-100 transition-all">
                <Play size={16} className="text-slate-900 group-hover:text-white fill-current translate-x-0.5" />
              </div>
              <span className="text-sm font-black text-slate-900 uppercase tracking-wider">Watch Intro</span>
            </Link>
            <div className="h-8 w-[1px] bg-slate-200" />
            <p className="text-[10px] text-slate-400 max-w-[200px] font-bold uppercase tracking-widest leading-relaxed">
              *Verified 100% legal immigration process for Canada & Australia.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
