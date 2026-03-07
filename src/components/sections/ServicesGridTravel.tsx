"use client";

import { Briefcase, Wrench, Plane, GraduationCap, Heart, Home } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/Card";

const services = [
  {
    title: "Business Visa Processing",
    description: "Professional documentation and fast processing for business travellers.",
    timeline: "2–4 weeks",
    icon: Briefcase,
    color: "text-teal",
  },
  {
    title: "Work Permits",
    description: "Canada and Australia employer-sponsored work permits. Bring your family.",
    timeline: "4–8 weeks",
    icon: Wrench,
    color: "text-amber",
    tag: "HIGH DEMAND",
  },
  {
    title: "Visit / Tourist Visa",
    description: "Holiday, family visits and exploratory trips. Fast tourist visa processing.",
    timeline: "1–3 weeks",
    icon: Plane,
    color: "text-sky",
  },
  {
    title: "Study Visa",
    description: "Study at world-class institutions in Canada and Australia with full student visa support.",
    timeline: "4–8 weeks",
    icon: GraduationCap,
    color: "text-gold",
  },
  {
    title: "Family Reunification",
    description: "Already abroad? Bring your family to join you legally through our family sponsorship service.",
    timeline: "6–12 weeks",
    icon: Heart,
    color: "text-teal",
  },
  {
    title: "Relocation Support",
    description: "Full relocation coordination — from documentation to arrival support in your new country.",
    timeline: "Ongoing",
    icon: Home,
    color: "text-amber",
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
              <Card className="h-full flex flex-col group p-8 bg-[#0A0A0A] border-white/5 hover:border-teal/30">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    <service.icon size={28} className={service.color} />
                  </div>
                  {service.tag && (
                    <span className="text-[9px] font-black bg-red-600/10 text-red-500 border border-red-600/20 px-2 py-0.5 rounded-full">
                      {service.tag}
                    </span>
                  )}
                </div>
                
                <h3 className="t-h3 text-white mb-4">{service.title}</h3>
                <p className="t-body text-gray-500 mb-8">
                  {service.description}
                </p>

                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="t-label text-gray-600">Timeline</span>
                  <span className="text-teal font-bold text-sm">{service.timeline}</span>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
