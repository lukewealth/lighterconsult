import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Target, Globe, Lightbulb, Users, Shield, TrendingUp } from "lucide-react";
import Image from "next/image";

const values = [
  { title: "Innovation", description: "Bold, fresh ideas that challenge the status quo.", icon: Lightbulb },
  { title: "Integrity", description: "Honest, transparent, and legally-backed processes.", icon: Shield },
  { title: "Impact", description: "Driven by results that transform brands and lives.", icon: TrendingUp },
  { title: "Growth", description: "Continuous evolution for our clients and our team.", icon: Globe },
  { title: "Community", description: "Building a supportive ecosystem for success.", icon: Users },
  { title: "Excellence", description: "Uncompromising quality in every execution.", icon: Target },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Page Hero - Light Modern Style */}
      <section className="bg-slate-50 pt-40 pb-24 px-6 border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto text-center">
          <ScrollReveal>
            <div className="flex justify-center mb-6">
              <span className="px-4 py-1 rounded-full bg-blue-100 text-blue-600 t-label text-[10px] tracking-[4px]">ABOUT US</span>
            </div>
            <h1 className="t-display text-slate-900 mb-8">Built in Lagos.<br/><span className="text-blue-600 italic font-serif">Built for the World.</span></h1>
            <p className="t-body-lg text-slate-500 max-w-[720px] mx-auto">
              LiGHTER DIGITAL is the parent company behind Nigeria&apos;s most impactful digital marketing and immigration services. We bridge the gap between ambition and reality.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Origin Story */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <h2 className="t-h2 text-slate-900 mb-8">Our Journey</h2>
            <div className="space-y-6 text-slate-600 t-body">
              <p>
                Founded in Lagos, Nigeria, LiGHTER was born out of a vision to serve Africa&apos;s rapidly evolving digital economy. We started as a small team of creatives with a simple goal: to spark growth through innovation.
              </p>
              <p>
                Today, LiGHTER DIGITAL anchors two specialized subsidiaries — CONSULT and TRAVEL — providing a comprehensive suite of solutions for businesses and individuals aiming for global impact.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right" className="relative aspect-square lg:aspect-video bg-slate-50 rounded-[40px] overflow-hidden border border-slate-100 shadow-2xl">
            <Image 
              src="/assets/team/daniel.png" 
              alt="Daniel Anya - Founder" 
              fill 
              className="object-cover object-top"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* Founder Bio Section */}
      <section className="bg-slate-900 py-32 px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 -skew-x-12 translate-x-32" />
        <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <ScrollReveal direction="left">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-blue-600/20 rounded-[48px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative aspect-[4/5] rounded-[40px] overflow-hidden border-[12px] border-white/10 shadow-2xl">
                    <Image 
                      src="/assets/team/daniel.png" 
                      alt="Daniel Anya" 
                      fill 
                      className="object-cover object-top grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-8 rounded-3xl shadow-2xl hidden md:block">
                    <p className="text-3xl font-black m-0 tracking-tighter">Founder</p>
                    <p className="text-[10px] font-black uppercase tracking-[3px] opacity-70 mt-1">Lead Strategist</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-7">
              <ScrollReveal direction="right">
                <span className="t-label text-blue-400 mb-6 block tracking-[4px]">THE VISIONARY</span>
                <h2 className="t-display text-white text-5xl md:text-7xl mb-8">Daniel Anya</h2>
                <div className="space-y-6 text-slate-300 t-body-lg">
                  <p className="italic font-serif text-2xl text-blue-100">
                    &ldquo;Strategy is only as good as the growth it sparks.&rdquo;
                  </p>
                  <p>
                    As the Director and lead Social Media Marketer at LiGHTER, Daniel Anya has pioneered a results-first approach to digital growth in Nigeria. With deep expertise in performance marketing and brand engineering, he leads a team dedicated to moving the needle for ambitious brands.
                  </p>
                  <p>
                    His vision for LiGHTER DIGITAL extends beyond marketing — creating pathways for global mobility through LiGHTER TRAVEL, ensuring that talent and businesses from Africa can thrive on the global stage.
                  </p>
                </div>
                
                <div className="flex gap-12 mt-12 pt-12 border-t border-white/10">
                   <div>
                      <p className="text-3xl font-black text-white m-0">10+</p>
                      <p className="t-label text-slate-500 text-[9px] mt-1">Years Experience</p>
                   </div>
                   <div>
                      <p className="text-3xl font-black text-white m-0">500+</p>
                      <p className="t-label text-slate-500 text-[9px] mt-1">Clients Guided</p>
                   </div>
                   <div>
                      <p className="text-3xl font-black text-white m-0">98%</p>
                      <p className="t-label text-slate-500 text-[9px] mt-1">Success Rate</p>
                   </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - White Card Style */}
      <section className="bg-slate-50 py-24 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal direction="up" className="bg-white p-12 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/50">
            <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-8">
              <Target size={32} />
            </div>
            <h3 className="t-h2 text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 t-body-lg">
              To empower businesses and individuals with innovative digital marketing solutions that amplify visibility, engagement, and growth.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.2} className="bg-white p-12 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/50">
            <div className="w-16 h-16 rounded-2xl bg-amber-500 flex items-center justify-center text-white mb-8">
              <Globe size={32} />
            </div>
            <h3 className="t-h2 text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-600 t-body-lg">
              To become a trusted partner for businesses across Africa and beyond, transforming brands into market leaders in the evolving digital economy.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="t-h2 text-slate-900">Our Core Values</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((val, i) => (
              <ScrollReveal key={i} delay={i * 0.1} className="group p-10 rounded-[32px] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <val.icon size={24} />
                </div>
                <h4 className="text-slate-900 font-black t-h3 mb-3">{val.title}</h4>
                <p className="text-slate-500 t-body">{val.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
