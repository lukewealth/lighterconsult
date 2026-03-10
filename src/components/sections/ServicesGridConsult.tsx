"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  BarChart3, 
  Target, 
  Layout, 
  PenTool, 
  Search, 
  MessageSquare, 
  ArrowRight
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

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

const clientCases = [
  {
    tag: "PERFORMANCE",
    title: "Performance Marketing Strategy System",
    description: "Custom-built performance systems for African brands aiming for global scale. Optimized for high conversion and low acquisition costs.",
    price: "$63",
    label: "Starting package"
  },
  {
    tag: "TRAVEL",
    title: "Global Mobility & Travel Guide",
    description: "Strategic relocation frameworks for professionals. 150+ successful cases processed with high-precision documentation systems.",
    price: "$120",
    label: "Consultation fee"
  },
  {
    tag: "MEDIA",
    title: "Premium Media Coverage & PR",
    description: "Authority building through tier-1 media placements. Positioning brands as industry leaders across digital and print publications.",
    price: "$450",
    label: "Placement base"
  }
];

// Static heights for the graph to prevent hydration mismatch
const graphHeights = [
  "32%", "45%", "28%", "65%", "80%", "42%", "55%", "90%", "35%", "48%",
  "72%", "60%", "85%", "40%", "52%", "78%", "66%", "95%", "50%", "38%"
];

export const ServicesGridConsult = () => {
  const [currentCase, setCurrentCase] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCase((prev) => (prev + 1) % clientCases.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-20 md:py-32 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header - From Our Services.jpg */}
        <ScrollReveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16 md:mb-20">
          <div className="lg:col-span-7">
            <h2 className="t-display m-0">
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
        <div className="relative mb-24 md:mb-32">
          <ScrollReveal direction="up">
            <div className="relative w-full aspect-[4/5] sm:aspect-video lg:aspect-[21/9] min-h-[500px] sm:min-h-[450px] rounded-[40px] md:rounded-[60px] overflow-hidden group">
              <Image 
                src="/assets/hero/smm.png" 
                alt="Digital Excellence" 
                fill 
                className="object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-blue-600/10" />
              
              {/* Animated Carousel Card */}
              <div className="absolute inset-0 flex items-center justify-center p-4 md:p-6 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={currentCase}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 100,
                      damping: 30,
                      opacity: { duration: 0.4 }
                    }}
                    className="bg-white p-6 md:p-12 rounded-[32px] md:rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.15)] max-w-[500px] w-full border border-slate-50"
                  >
                    <div className="flex justify-between items-center mb-4 md:mb-6">
                      <span className="t-label text-blue-600 tracking-[2px] md:tracking-[4px] text-[9px] md:text-[11px]">CLIENT CASE · {clientCases[currentCase].tag}</span>
                      <div className="flex gap-1">
                        {clientCases.map((_, i) => (
                          <div key={i} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === currentCase ? 'bg-blue-600' : 'bg-slate-200'}`} />
                        ))}
                      </div>
                    </div>
                    <h3 className="t-h2 text-slate-900 mb-2 md:mb-4 font-black uppercase tracking-tighter">{clientCases[currentCase].title}</h3>
                    <p className="text-slate-500 text-xs md:text-sm mb-6 md:mb-8 leading-relaxed font-medium">
                      {clientCases[currentCase].description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-6 md:pt-8 border-t border-slate-100">
                      <div>
                        <span className="text-3xl md:text-4xl font-black text-slate-900">{clientCases[currentCase].price}</span>
                        <span className="text-[10px] md:text-xs font-bold text-slate-400 ml-2">/{clientCases[currentCase].label}</span>
                      </div>
                      <Button href="/consult/book" variant="primary" className="rounded-full bg-slate-900 text-white font-black px-8 md:px-10 py-4 md:py-6 text-[10px] md:text-xs uppercase tracking-widest hover:bg-blue-600 border-none transition-all w-full sm:w-auto">
                        Send Request
                      </Button>
                    </div>

                    {/* Graph Visual Mockup */}
                    <div className="hidden sm:flex mt-8 h-12 w-full relative opacity-20">
                      <div className="absolute inset-0 flex items-end gap-1">
                        {graphHeights.map((height, i) => (
                          <div key={i} className="flex-1 bg-blue-600 rounded-t-sm" style={{ height }} />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Use Case Grid - From Our Services.jpg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-x-12 md:gap-y-20">
          {industryCases.map((useCase, i) => (
            <ScrollReveal key={i} delay={i * 0.1} className="group">
              <Link href={`/consult/use-cases/${useCase.slug}`} className="flex flex-col gap-4 md:gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-slate-900 flex items-center justify-center text-white transition-all duration-500 group-hover:bg-blue-600 group-hover:rotate-6 group-hover:scale-110 shadow-lg">
                    <useCase.icon size={20} className="md:size-6" />
                  </div>
                  <h4 className="text-lg md:text-xl font-black text-slate-900 uppercase tracking-tighter transition-colors group-hover:text-blue-600">
                    {useCase.title}
                  </h4>
                </div>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed max-w-[320px] font-medium">
                  {useCase.description}
                </p>
                <div className="flex items-center gap-2 text-blue-600 text-[9px] md:text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-10px] group-hover:translate-x-0">
                  Case Study <ArrowRight size={12} />
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Final Action - From Sample */}
        <div className="mt-20 md:mt-32 text-center">
          <ScrollReveal>
            <Button href="/consult/book" variant="primary" className="rounded-full bg-slate-900 text-white px-8 md:px-12 py-6 md:py-8 font-black uppercase tracking-[2px] md:tracking-[4px] hover:bg-blue-600 border-none shadow-2xl w-full sm:w-auto">
              Get Started with Your Case →
            </Button>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
};
