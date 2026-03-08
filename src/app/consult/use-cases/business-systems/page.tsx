import { NavbarConsult } from "@/components/layout/NavbarConsult";
import { FooterConsult } from "@/components/layout/FooterConsult";
import { WhatsAppFAB } from "@/components/layout/WhatsAppFAB";
import { FinalCTAStripConsult } from "@/components/sections/FinalCTAStripConsult";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Settings, Workflow, Layers, Zap, ShieldCheck, ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Business Systems Use Case",
  description: "Operationalizing marketing workflows for sustainable brand growth. Turn your marketing into a well-oiled machine.",
};

export default function BusinessSystemsPage() {
  const stats = [
    { label: "EFFICIENCY", value: "+60%" },
    { label: "AD SPEND WASTE", value: "-25%" },
    { label: "TEAM UPTIME", value: "99%" },
  ];

  const features = [
    {
      title: "Workflow Automation",
      desc: "Replacing manual tasks with automated triggers to speed up your marketing execution.",
      icon: Workflow
    },
    {
      title: "Marketing Stack",
      desc: "Selecting and integrating the right tools to create a seamless marketing infrastructure.",
      icon: Layers
    },
    {
      title: "Performance Dashboards",
      desc: "Customized reporting that gives you a bird's-eye view of your entire operation.",
      icon: Zap
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <NavbarConsult />
      
      {/* Use Case Hero */}
      <section className="pt-40 pb-24 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <span className="t-label text-blue-600 mb-6 block tracking-[4px]">USE CASE · OPERATIONS</span>
            <h1 className="t-display text-slate-900 mb-8 md:text-8xl">Business<br/><span className="text-blue-600 italic font-serif">Systems.</span></h1>
            <p className="t-body-lg text-slate-500 max-w-[540px]">
              Operationalizing marketing workflows for sustainable brand growth. Turn your marketing efforts into a predictable growth engine.
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
                <div className="absolute inset-0 bg-blue-600 flex items-center justify-center">
                   <Settings size={200} className="text-white/10 animate-spin-slow" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center p-20">
                   <div className="w-full h-full bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 flex items-center justify-center">
                      <Workflow size={80} className="text-white" />
                   </div>
                </div>
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
              <Zap size={120} className="text-blue-600/5" />
           </div>
           
           <ScrollReveal>
              <h2 className="t-h1 text-slate-900 mb-8 leading-tight italic font-serif">Engineering<br/>Sustainable Growth.</h2>
              <div className="space-y-8">
                 <div className="flex gap-6">
                    <div className="text-blue-600 font-black text-4xl">01</div>
                    <div>
                       <h4 className="text-lg font-black text-slate-900 mb-2 uppercase">Audit & Map</h4>
                       <p className="text-slate-500">Documenting your current marketing processes to identify bottlenecks and inefficiencies.</p>
                    </div>
                 </div>
                 <div className="flex gap-6">
                    <div className="text-blue-600 font-black text-4xl">02</div>
                    <div>
                       <h4 className="text-lg font-black text-slate-900 mb-2 uppercase">Stack Optimization</h4>
                       <p className="text-slate-500">Cleaning up your tech stack to ensure every tool is earning its keep and properly integrated.</p>
                    </div>
                 </div>
                 <div className="flex gap-6">
                    <div className="text-blue-600 font-black text-4xl">03</div>
                    <div>
                       <h4 className="text-lg font-black text-slate-900 mb-2 uppercase">Automation Deployment</h4>
                       <p className="text-slate-500">Building the actual workflows that will handle repetitive tasks and ensure consistent execution.</p>
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
      <FooterConsult />
      <WhatsAppFAB />
    </main>
  );
}
