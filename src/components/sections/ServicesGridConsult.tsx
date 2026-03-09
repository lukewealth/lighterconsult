"use client";

import { motion } from "framer-motion";
import { 
  BarChart3, 
  Target, 
  Layout, 
  PenTool, 
  Search, 
  MessageSquare, 
  ArrowRight,
  ChevronRight
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

const industryCases = [
  {
    title: "E-commerce Scale",
    description: "Automated ROI tracking and audience segmentation for retail brands.",
    icon: Target,
    slug: "ecommerce-scale"
  },
  {
    title: "Real Estate Funnels",
    description: "High-intent lead generation systems for premium property developments.",
    icon: Layout,
    slug: "real-estate"
  },
  {
    title: "Tech & SaaS Growth",
    description: "Scaling user acquisition through data-led content and performance SEO.",
    icon: Search,
    slug: "tech-saas"
  },
  {
    title: "Personal Branding",
    description: "Authority building for creators and executives through strategic SMM.",
    icon: PenTool,
    slug: "personal-branding"
  },
  {
    title: "Business Systems",
    description: "Operationalizing marketing workflows for sustainable brand growth.",
    icon: BarChart3,
    slug: "business-systems"
  },
  {
    title: "Customer Success",
    description: "Retention-focused engagement strategies to maximize lifetime value.",
    icon: MessageSquare,
    slug: "customer-success"
  }
];

// Static heights for the graph to prevent hydration mismatch
const graphHeights = [
  "32%", "45%", "28%", "65%", "80%", "42%", "55%", "90%", "35%", "48%",
  "72%", "60%", "85%", "40%", "52%", "78%", "66%", "95%", "50%", "38%"
];

export const ServicesGridConsult = () => {
  return (
    <section className="bg-white py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header - From Our Services.jpg */}
        <ScrollReveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          <div className="lg:col-span-7">
            <h2 className="text-slate-900 font-display font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter m-0">
              Digital Marketing <br/><span className="text-blue-600">Services.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 pt-4">
            <p className="t-body-lg text-slate-500 max-w-[400px]">
              We provide integrated digital solutions that combine creative firepower with proprietary data analytics to ignite your brand.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Case Card - From Our Services.jpg */}
        <div className="relative mb-32">
          <ScrollReveal direction="up">
            <div className="relative w-full aspect-[21/9] min-h-[400px] rounded-[60px] overflow-hidden group">
              <Image 
                src="/assets/hero/smm.png" 
                alt="Digital Excellence" 
                fill 
                className="object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-600/10" />
              
              {/* The White Overlay Card from Sample */}
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <motion.div 
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  animate={{ 
                    y: [0, -15, 0],
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="bg-white p-8 md:p-12 rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.15)] max-w-[500px] w-full border border-slate-50"
                >
                  <div className="flex justify-between items-center mb-6">
                    <span className="t-label text-blue-600 tracking-[4px]">CLIENT CASE</span>
                    <ChevronRight size={20} className="text-slate-300" />
                  </div>
                  <h3 className="t-h2 text-slate-900 mb-4 font-black">Performance Marketing Strategy System</h3>
                  <p className="text-slate-500 text-sm mb-8 leading-relaxed">
                    Custom-built performance systems for African brands aiming for global scale. Optimized for high conversion and low acquisition costs.
                  </p>
                  
                  <div className="flex items-end justify-between pt-8 border-t border-slate-100">
                    <div>
                      <span className="text-4xl font-black text-slate-900">$63</span>
                      <span className="text-xs font-bold text-slate-400 ml-2">/Starting package</span>
                    </div>
                    <Button href="/consult/book" variant="primary" className="rounded-full bg-slate-900 text-white font-black px-10 py-6 text-xs uppercase tracking-widest hover:bg-blue-600 border-none transition-all">
                      Send Request
                    </Button>
                  </div>

                  {/* Graph Visual Mockup - Fixed with static heights */}
                  <div className="mt-8 h-12 w-full relative opacity-20">
                    <div className="absolute inset-0 flex items-end gap-1">
                      {graphHeights.map((height, i) => (
                        <div key={i} className="flex-1 bg-blue-600 rounded-t-sm" style={{ height }} />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Use Case Grid - From Our Services.jpg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {industryCases.map((useCase, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="group">
              <Link href={`/consult/use-cases/${useCase.slug}`} className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white transition-all duration-500 group-hover:bg-blue-600 group-hover:rotate-6 group-hover:scale-110 shadow-lg">
                    <useCase.icon size={24} />
                  </div>
                  <h4 className="text-xl font-black text-slate-900 uppercase tracking-tighter transition-colors group-hover:text-blue-600">
                    {useCase.title}
                  </h4>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[320px]">
                  {useCase.description}
                </p>
                <div className="flex items-center gap-2 text-blue-600 text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-10px] group-hover:translate-x-0">
                  Case Study <ArrowRight size={12} />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Final Action - From Sample */}
        <div className="mt-32 text-center">
          <ScrollReveal>
            <Button href="/consult/book" variant="primary" className="rounded-full bg-slate-900 text-white px-12 py-8 font-black uppercase tracking-[4px] hover:bg-blue-600 border-none shadow-2xl">
              Get Started with Your Case →
            </Button>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};
