import { NavbarConsult } from "@/components/layout/NavbarConsult";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFAB } from "@/components/layout/WhatsAppFAB";
import { FinalCTAStripConsult } from "@/components/sections/FinalCTAStripConsult";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Heart, RefreshCw, BarChart, Smile, ShieldCheck, ArrowRight } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Customer Success Use Case",
  description: "Retention-focused engagement strategies to maximize lifetime value. Keeping your customers happy and loyal.",
};

export default function CustomerSuccessPage() {
  const stats = [
    { label: "RETENTION", value: "98%" },
    { label: "LIFETIME VALUE", value: "2.5x" },
    { label: "CHURN RATE", value: "< 2%" },
  ];

  const features = [
    {
      title: "Retention Strategies",
      desc: "Developing personalized engagement plans to keep your customers coming back.",
      icon: RefreshCw
    },
    {
      title: "Customer Insights",
      desc: "Using feedback and data to understand your customers' needs and pain points.",
      icon: BarChart
    },
    {
      title: "Loyalty Programs",
      desc: "Designing and implementing programs that reward and incentivize customer loyalty.",
      icon: Heart
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <NavbarConsult />
      
      {/* Use Case Hero */}
      <section className="pt-40 pb-24 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <span className="t-label text-blue-600 mb-6 block tracking-[4px]">USE CASE · CUSTOMER SUCCESS</span>
            <h1 className="t-display text-slate-900 mb-8 md:text-8xl">Customer<br/><span className="text-blue-600 italic font-serif">Success.</span></h1>
            <p className="t-body-lg text-slate-500 max-w-[540px]">
              Retention-focused engagement strategies to maximize lifetime value. Build a community of loyal advocates for your brand.
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
                   <Smile size={200} className="text-white/10" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center p-20">
                   <div className="w-full h-full bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 flex items-center justify-center">
                      <Heart size={80} className="text-white" />
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
              <ShieldCheck size={120} className="text-blue-600/5" />
           </div>
           
           <ScrollReveal>
              <h2 className="t-h1 text-slate-900 mb-8 leading-tight italic font-serif">Maximizing<br/>Lifetime Value.</h2>
              <div className="space-y-8">
                 <div className="flex gap-6">
                    <div className="text-blue-600 font-black text-4xl">01</div>
                    <div>
                       <h4 className="text-lg font-black text-slate-900 mb-2 uppercase">Journey Mapping</h4>
                       <p className="text-slate-500">Mapping the entire customer journey to identify key touchpoints for engagement and retention.</p>
                    </div>
                 </div>
                 <div className="flex gap-6">
                    <div className="text-blue-600 font-black text-4xl">02</div>
                    <div>
                       <h4 className="text-lg font-black text-slate-900 mb-2 uppercase">Engagement Loops</h4>
                       <p className="text-slate-500">Developing automated loops that keep your brand top-of-mind and encourage repeat purchases.</p>
                    </div>
                 </div>
                 <div className="flex gap-6">
                    <div className="text-blue-600 font-black text-4xl">03</div>
                    <div>
                       <h4 className="text-lg font-black text-slate-900 mb-2 uppercase">Success Measurement</h4>
                       <p className="text-slate-500">Tracking key metrics like NPS, churn, and LTV to ensure your success strategies are working.</p>
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
