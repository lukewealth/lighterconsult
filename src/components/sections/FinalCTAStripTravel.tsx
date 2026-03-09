"use client";

import { Plane, GraduationCap, Home, Users } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

export const FinalCTAStripTravel = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-slate-50 text-center border-t border-slate-100">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <ScrollReveal>
          <span className="t-label text-blue-600 mb-6 block tracking-[4px]">APPLY VISA TODAY</span>
          <h2 className="t-display text-slate-900 mb-8 md:text-8xl uppercase tracking-tighter">
            TRAVEL IN <span className="text-blue-600">3–6 MONTHS</span>
          </h2>
          <p className="t-body-lg text-slate-500 max-w-[640px] mx-auto mb-16 font-medium">
            Start your journey to Canada or Australia. You can come with your family members. Professional, fast, and 100% legal relocation solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-12 mb-16">
            {[
              { icon: Plane, label: "Work" },
              { icon: GraduationCap, label: "Study" },
              { icon: Home, label: "Live" },
              { icon: Users, label: "Family" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-4 group cursor-default">
                <div className="w-16 h-16 rounded-3xl bg-white border border-slate-100 flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white group-hover:-translate-y-1 transition-all duration-500">
                  <item.icon size={28} />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-blue-600 transition-colors">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <Button href="/travel/book-now" size="xl" className="bg-blue-600 text-white shadow-xl shadow-blue-100 rounded-2xl px-20 font-black uppercase">
              BOOK NOW
            </Button>
            <Button variant="secondary" size="xl" className="rounded-2xl px-12 border-slate-200 text-slate-900 hover:bg-slate-100 font-black">
              Call +234 707 059 9190
            </Button>
          </div>

          <div className="mt-16 pt-12 border-t border-slate-200 flex flex-wrap justify-center gap-12 text-[11px] font-black uppercase tracking-[4px] text-slate-400">
            <div className="flex items-center gap-2">
               <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
               <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
               <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
               <span>No Upfront Fees</span>
            </div>
            <div className="flex items-center gap-2">
               <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
               <span>100% Legal Process</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
