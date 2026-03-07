"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Phone } from "lucide-react";

export const PromotionalFlyers = () => {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="t-label text-blue-600 mb-4 tracking-[4px]">FEATURED CAMPAIGNS</span>
          <h2 className="t-h2 text-slate-900 mb-6">Travel in <span className="text-blue-600">3–6 Months</span></h2>
          <p className="t-body text-slate-500 max-w-[600px] mx-auto font-medium">
            Currently accepting applications for Canada and Australia. Start your professional relocation journey today.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Main Flyers - Light Modern Style */}
          <ScrollReveal direction="left">
            <div className="group relative aspect-[1/1.4] bg-slate-50 rounded-[40px] border border-slate-100 flex items-center justify-center overflow-hidden shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-500">
              <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 p-12 border-4 border-dashed border-slate-200 rounded-[30px] text-slate-300 text-2xl font-black uppercase tracking-[10px] text-center">
                CANADA STUDY<br/>OPPORTUNITY
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.2}>
            <div className="group relative aspect-[1/1.4] bg-slate-50 rounded-[40px] border border-slate-100 flex items-center justify-center overflow-hidden shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-500">
              <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 p-12 border-4 border-dashed border-slate-200 rounded-[30px] text-slate-300 text-2xl font-black uppercase tracking-[10px] text-center">
                AUSTRALIA WORK<br/>PERMIT
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <ScrollReveal key={i} delay={i * 0.1} direction="scale">
              <div className="group relative aspect-square bg-slate-50 rounded-[32px] border border-slate-100 flex items-center justify-center text-slate-200 font-black text-6xl shadow-sm hover:shadow-xl hover:shadow-blue-100 hover:bg-white transition-all duration-500">
                <div className="relative z-10">{i}</div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-24 text-center">
          <ScrollReveal>
            <h3 className="t-h3 text-slate-900 mb-10 uppercase tracking-[4px] font-black italic font-serif">Apply Visa Today — <span className="text-blue-600">TRAVEL IN 3/6 MONTHS</span></h3>
            <div className="flex flex-wrap justify-center gap-6">
              <Button variant="primary" size="lg" className="rounded-2xl px-12 bg-blue-600 text-white shadow-xl shadow-blue-100 font-black group">
                <span className="flex items-center gap-2">
                  Book Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
              <Button variant="secondary" size="lg" className="rounded-2xl px-12 border-slate-200 text-slate-900 hover:bg-slate-100 font-black group">
                <span className="flex items-center gap-2">
                  <Phone size={18} /> +234 707 059 9190
                </span>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
