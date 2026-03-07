"use client";

import { Phone, FileText, CheckCircle } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";

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
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal className="text-center mb-20">
          <span className="t-label text-teal mb-4">THE PROCESS</span>
          <h2 className="t-h2 text-white mb-6">Travel in 3 Simple Steps</h2>
          <p className="t-body text-gray-400 max-w-[600px] mx-auto">
            From your first call to your flight — we handle every detail.
          </p>
        </ScrollReveal>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-32 left-0 w-full h-[1px] bg-teal/20 z-0" />

          {steps.map((step, i) => (
            <ScrollReveal key={step.id} delay={i * 0.2} className="relative z-10 flex flex-col items-center text-center">
              <div className="relative mb-8">
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-7xl font-black text-teal/5 select-none font-display">
                  {step.id}
                </span>
                <div className="w-20 h-20 rounded-full bg-[#141414] border-2 border-teal shadow-glow-teal flex items-center justify-center text-teal">
                  <step.icon size={32} />
                </div>
              </div>
              
              <h3 className="t-h3 text-white mb-4">{step.title}</h3>
              <p className="t-body text-gray-500 max-w-[300px]">
                {step.description}
              </p>
              
              {i === 2 && (
                <div className="mt-8">
                  <Button variant="primary" size="sm">Book Now →</Button>
                </div>
              )}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
