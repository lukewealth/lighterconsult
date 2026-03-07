"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

export const FinalCTAStripConsult = () => {
  return (
    <section className="relative bg-slate-50 py-24 md:py-32 px-6 overflow-hidden border-t border-slate-100">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto text-center relative z-10">
        <ScrollReveal>
          <span className="t-label text-blue-600 mb-6 block tracking-[4px]">READY TO GROW?</span>
          <h2 className="t-display text-slate-900 mb-8 md:text-7xl">
            Ready to Spark Your <span className="text-blue-600 italic font-serif">Growth?</span>
          </h2>
          <p className="t-body-lg text-slate-500 max-w-[640px] mx-auto mb-12">
            Join 500+ Nigerian businesses and international brands who chose LiGHTER CONSULT to amplify their digital presence with professional marketing solutions.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6">
            <Button size="xl" className="bg-blue-600 text-white shadow-xl shadow-blue-100 rounded-2xl px-12 font-black">
              Book Free Strategy Call
            </Button>
            <Button variant="secondary" size="xl" className="rounded-2xl px-12 border-slate-200 text-slate-900 hover:bg-slate-100">
              View Our Services →
            </Button>
          </div>

          <p className="text-slate-400 text-[12px] mt-8 font-bold uppercase tracking-widest">
            No contracts · No hidden fees · Cancel anytime
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};
