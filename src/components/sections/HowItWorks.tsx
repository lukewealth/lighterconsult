"use client";

import { Phone, FileText, CheckCircle, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Book a Consultation",
    description: "Call +234 707 059 9190 or fill our online form. We'll assess your profile and recommend the best pathway.",
    icon: Phone,
  },
  {
    id: "02",
    title: "Submit Your Documents",
    description: "Our team provides a detailed checklist and guides you through every required document. We review everything before submission.",
    icon: FileText,
  },
  {
    id: "03",
    title: "Get Approved & Travel",
    description: "We handle all processing. Once approved, we support your final travel preparation. You go. You succeed.",
    icon: CheckCircle,
  },
];

export const HowItWorks = () => {
  return (
    <section className="bg-[#050505] py-24 px-6 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal className="text-center mb-24">
          <span className="t-label text-teal mb-4 tracking-[4px]">THE PROCESS</span>
          <h2 className="t-h2 text-white mb-6 uppercase tracking-tight">Travel in <span className="text-teal italic font-serif lowercase">3 simple steps</span></h2>
          <p className="t-body text-gray-400 max-w-[600px] mx-auto font-medium">
            From your first call to your flight — we handle every professional detail with precision.
          </p>
        </ScrollReveal>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-teal/20 to-transparent z-0" />

          {steps.map((step, i) => (
            <ScrollReveal key={step.id} delay={i * 0.2} className="relative z-10 flex flex-col items-center text-center group">
              <div className="relative mb-10">
                <span className="absolute -top-14 left-1/2 -translate-x-1/2 text-8xl font-black text-white/[0.03] select-none font-display transition-colors group-hover:text-teal/10">
                  {step.id}
                </span>
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 rounded-[24px] bg-[#0A0A0A] border-2 border-white/5 shadow-2xl flex items-center justify-center text-gray-400 group-hover:text-teal group-hover:border-teal transition-all duration-500 relative z-10"
                >
                  <step.icon size={32} />
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-teal/0 group-hover:border-teal/50 rounded-tr-lg transition-all" />
                </motion.div>
              </div>
              
              <h3 className="text-xl font-black text-white mb-4 uppercase tracking-tight group-hover:text-teal transition-colors">{step.title}</h3>
              <p className="text-sm text-gray-500 max-w-[280px] leading-relaxed font-medium">
                {step.description}
              </p>
              
              {i === 2 && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="mt-10"
                >
                  <Button href="/travel/book-now" variant="primary" size="sm" className="rounded-xl px-8 py-5 bg-teal text-black shadow-glow-teal font-black group/btn">
                    <span className="flex items-center gap-2">
                      Start Process <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </motion.div>
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
