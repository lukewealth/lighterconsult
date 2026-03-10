"use client";

import { Briefcase, Wrench, Plane, GraduationCap, Heart, Home } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";
import Image from "next/image";

const services = [
  {
    title: "Business Visa Processing",
    description: "Professional documentation and fast processing for business travellers.",
    timeline: "2–4 weeks",
    icon: Briefcase,
    color: "text-teal",
    image: "/assets/blueprint/1.png"
  },
  {
    title: "Work Permits",
    description: "Canada and Australia employer-sponsored work permits. Bring your family.",
    timeline: "4–8 weeks",
    icon: Wrench,
    color: "text-amber",
    tag: "HIGH DEMAND",
    image: "/assets/blueprint/2.png"
  },
  {
    title: "Visit / Tourist Visa",
    description: "Holiday, family visits and exploratory trips. Fast tourist visa processing.",
    timeline: "1–3 weeks",
    icon: Plane,
    color: "text-sky",
    image: "/assets/blueprint/3.png"
  },
  {
    title: "Study Visa",
    description: "Study at world-class institutions in Canada and Australia with full student visa support.",
    timeline: "4–8 weeks",
    icon: GraduationCap,
    color: "text-gold",
    image: "/assets/blueprint/4.png"
  },
  {
    title: "Family Reunification",
    description: "Already abroad? Bring your family to join you legally through our family sponsorship service.",
    timeline: "6–12 weeks",
    icon: Heart,
    color: "text-teal",
    image: "/assets/blueprint/5.png"
  },
  {
    title: "Relocation Support",
    description: "Full relocation coordination — from documentation to arrival support in your new country.",
    timeline: "Ongoing",
    icon: Home,
    color: "text-amber",
    image: "/assets/blueprint/6.png"
  },
];

export const ServicesGridTravel = () => {
  return (
    <section className="bg-gradient-to-b from-black to-[#050A08] py-20 md:py-32 px-6" id="services">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal className="text-center mb-12 md:mb-20">
          <span className="t-label text-teal mb-4 tracking-[4px]">OUR IMMIGRATION SERVICES</span>
          <h2 className="t-h2 text-white mb-6 uppercase tracking-tight">Everything You Need to <span className="text-teal italic font-serif">Move Abroad</span></h2>
          <p className="t-body text-gray-400 max-w-[600px] mx-auto font-medium">
            Fast and secure process. Travel in 3–6 months with professional legal backing.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <Card className="h-full flex flex-col group p-0 bg-[#0A0A0A] border-white/5 hover:border-teal/30 overflow-hidden rounded-[32px] md:rounded-[40px] transition-all duration-500">
                <div className="h-40 md:h-48 relative overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110 opacity-30 group-hover:opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
                  <div className="absolute top-6 left-6 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-white/5 backdrop-blur-md flex items-center justify-center transition-transform duration-500 group-hover:scale-110 z-10">
                    <service.icon size={24} className={`${service.color} md:size-7`} />
                  </div>
                  {service.tag && (
                    <span className="absolute top-6 right-6 z-10 text-[8px] md:text-[9px] font-black bg-red-600/20 text-red-500 border border-red-600/20 px-2.5 py-1 rounded-full uppercase tracking-widest">
                      {service.tag}
                    </span>
                  )}
                </div>
                
                <div className="p-6 md:p-8 pt-2 md:pt-4 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-black text-white mb-4 uppercase tracking-tight">{service.title}</h3>
                  <p className="text-sm md:text-base text-gray-500 mb-8 leading-relaxed font-medium">
                    {service.description}
                  </p>

                  <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-[2px] text-gray-600">Timeline</span>
                    <span className="text-teal font-black text-xs md:text-sm tracking-widest uppercase">{service.timeline}</span>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
