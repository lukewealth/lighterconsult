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
    <section className="bg-gradient-to-b from-black to-[#050A08] py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="t-label text-teal mb-4">OUR IMMIGRATION SERVICES</span>
          <h2 className="t-h2 text-white mb-6">Everything You Need to Move Abroad</h2>
          <p className="t-body text-gray-400 max-w-[600px] mx-auto">
            Fast and secure process. Travel in 3–6 months.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <Card className="h-full flex flex-col group p-0 bg-[#0A0A0A] border-white/5 hover:border-teal/30 overflow-hidden">
                <div className="h-48 relative overflow-hidden">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110 opacity-30 group-hover:opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
                  <div className="absolute top-6 left-6 w-12 h-12 rounded-lg bg-white/5 backdrop-blur-md flex items-center justify-center transition-transform duration-500 group-hover:scale-110 z-10">
                    <service.icon size={28} className={service.color} />
                  </div>
                  {service.tag && (
                    <span className="absolute top-6 right-6 z-10 text-[9px] font-black bg-red-600/20 text-red-500 border border-red-600/20 px-2 py-0.5 rounded-full">
                      {service.tag}
                    </span>
                  )}
                </div>
                
                <div className="p-8 pt-4 flex flex-col flex-grow">
                  <h3 className="t-h3 text-white mb-4">{service.title}</h3>
                  <p className="t-body text-gray-500 mb-8">
                    {service.description}
                  </p>

                  <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="t-label text-gray-600">Timeline</span>
                    <span className="text-teal font-bold text-sm">{service.timeline}</span>
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
