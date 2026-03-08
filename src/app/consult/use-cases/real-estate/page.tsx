import { NavbarConsult } from "@/components/layout/NavbarConsult";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFAB } from "@/components/layout/WhatsAppFAB";
import { FinalCTAStripConsult } from "@/components/sections/FinalCTAStripConsult";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Home, Users, Target, Layout, ShieldCheck, ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Real Estate Funnels Use Case",
  description: "High-intent lead generation systems for premium property developments. Connecting real estate developers with qualified buyers.",
};

export default function RealEstateFunnelsPage() {
  const stats = [
    { label: "LEAD QUALITY", value: "85%" },
    { label: "COST PER LEAD", value: "-30%" },
    { label: "SALES VELOCITY", value: "2x" },
  ];

  const features = [
    {
      title: "High-Intent Funnels",
      desc: "Custom-built landing pages designed specifically for luxury property conversions.",
      icon: Layout
    },
    {
      title: "Lead Qualification",
      desc: "Automated screening to ensure your sales team only talks to qualified buyers.",
      icon: Users
    },
    {
      title: "Geographic Targeting",
      desc: "Reach high-net-worth individuals in specific regions or the diaspora.",
      icon: Target
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <NavbarConsult />
      
      {/* Use Case Hero */}
      <section className="pt-40 pb-24 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <span className="t-label text-blue-600 mb-6 block tracking-[4px]">USE CASE · REAL ESTATE</span>
            <h1 className="t-display text-slate-900 mb-8 md:text-8xl">Property<br/><span className="text-blue-600 italic font-serif">Funnels.</span></h1>
            <p className="t-body-lg text-slate-500 max-w-[540px]">
              High-intent lead generation systems for premium property developments. Connecting Lagos developers with global investors.
            </p>
            
            <div className="flex gap-12 mt-12">
               {stats.map((stat, i) => (
                 <div key={i}>
                    <p className="text-3xl font-black text-slate-900 m-0">{stat.value}</p>
                    <p className="t-label text-slate-400 text-[9px] uppercase tracking-widest">{stat.label}</p>
                 </div>
               ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" className="relative">
             <div className="aspect-square rounded-[60px] bg-white overflow-hidden relative shadow-2xl border-[12px] border-white group">
                <Image 
                  src="/assets/portfolio/flyer-bky.png" 
                  alt="Real Estate Funnels" 
                  fill 
                  className="object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700" 
                />
             </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((feature, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mb-8">
                  <feature.icon size={28} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium">
                  {feature.desc}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-[900px] mx-auto bg-white p-12 md:p-20 rounded-[64px] shadow-2xl border border-slate-100 relative overflow-hidden">
           <div className="absolute top-0 right-0 p-12">
              <Home size={120} className="text-blue-600/5" />
           </div>
           
           <ScrollReveal>
              <h2 className="t-h1 text-slate-900 mb-8 leading-tight italic font-serif">The Conversion<br/>Engine.</h2>
              <div className="space-y-8">
                 <div className="flex gap-6">
                    <div className="text-blue-600 font-black text-4xl">01</div>
                    <div>
                       <h4 className="text-lg font-black text-slate-900 mb-2 uppercase">Persona Mapping</h4>
                       <p className="text-slate-500">We define the exact profile of your ideal buyer—from income brackets to investment interests.</p>
                    </div>
                 </div>
                 <div className="flex gap-6">
                    <div className="text-blue-600 font-black text-4xl">02</div>
                    <div>
                       <h4 className="text-lg font-black text-slate-900 mb-2 uppercase">Funnel Architecture</h4>
                       <p className="text-slate-500">Developing multi-step funnels that educate the buyer before they ever speak to a sales agent.</p>
                    </div>
                 </div>
                 <div className="flex gap-6">
                    <div className="text-blue-600 font-black text-4xl">03</div>
                    <div>
                       <h4 className="text-lg font-black text-slate-900 mb-2 uppercase">CRM Integration</h4>
                       <p className="text-slate-500">Directly syncing leads with your sales team for immediate follow-up when the intent is highest.</p>
                    </div>
                 </div>
              </div>

              <div className="mt-16 pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
                 <div className="flex flex-col gap-2">
                    <span className="text-slate-400 font-black text-[10px] uppercase tracking-widest">Next Step</span>
                    <p className="text-slate-900 font-black text-xl">Get Started with Your Case</p>
                 </div>
                 <Button href="/consult/book" className="bg-blue-600 text-white rounded-2xl px-12 font-black h-16 group">
                    <span className="flex items-center gap-2">
                       Start Free Strategy Call <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </span>
                 </Button>
              </div>
           </ScrollReveal>
        </div>
      </section>

      <FinalCTAStripConsult />
      <Footer />
      <WhatsAppFAB />
    </main>
  );
}
