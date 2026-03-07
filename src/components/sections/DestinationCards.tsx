"use client";

import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";

const destinations = [
  {
    id: "canada",
    title: "CANADA",
    tagline: "Work · Study · Live",
    flag: "🇨🇦",
    image: "/assets/travel/canada.png",
    description: "Canada needs you. Bring your family and build your future in one of the world's most welcoming countries.",
    tags: ["Work Permit", "Study Visa", "Express Entry", "Family"],
    cta: "Explore Canada →",
    color: "rgba(255,102,102,0.20)",
    bg: "linear-gradient(145deg, #0A1020, #001530)",
  },
  {
    id: "australia",
    title: "AUSTRALIA",
    tagline: "Aussie Travel. Time to Explore.",
    flag: "🇦🇺",
    image: "/assets/travel/australia.png",
    description: "Australia is calling. Skilled workers, students and families are building great lives Down Under.",
    tags: ["Student Visa", "Skilled Migrant", "Visitor Visa", "Relocation"],
    cta: "Explore Australia →",
    color: "rgba(1,133,215,0.20)",
    bg: "linear-gradient(145deg, #050A10, #001020)",
  },
  {
    id: "global",
    title: "GLOBAL SERVICES",
    tagline: "Go See The World",
    flag: "🌍",
    image: "/assets/travel/world.png",
    description: "Business visas, visit visas and relocation services for ambitious Nigerians ready to explore the world.",
    tags: ["Business Visa", "Visit Visa", "Relocation", "Consulting"],
    cta: "All Services →",
    color: "rgba(0,196,196,0.20)",
    bg: "linear-gradient(145deg, #080808, #001018)",
  },
];

export const DestinationCards = () => {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal className="text-center mb-16">
          <span className="t-label text-teal mb-4">DESTINATIONS</span>
          <h2 className="t-h2 text-white mb-6">Where Will You Go?</h2>
          <p className="t-body text-gray-400 max-w-[600px] mx-auto">
            We specialize in two of the world&apos;s most welcoming destinations for Nigerians.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((dest, i) => (
            <ScrollReveal key={dest.id} delay={i * 0.1}>
              <div
                className="group relative h-full rounded-[20px] overflow-hidden border border-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col"
                style={{ background: dest.bg, borderColor: dest.color }}
              >
                {/* Image */}
                <div className="h-64 relative overflow-hidden">
                  <Image 
                    src={dest.image} 
                    alt={dest.title} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 text-4xl drop-shadow-lg">{dest.flag}</div>
                </div>

                <div className="p-8 flex flex-col flex-grow relative z-10">
                  <h3 className="t-h2 text-white mb-2">{dest.title}</h3>
                  <span className="t-label text-teal mb-6">{dest.tagline}</span>
                  <p className="t-body text-gray-400 mb-8">{dest.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {dest.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-bold px-2.5 py-1 rounded bg-white/5 text-gray-400 border border-white/5 uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button variant="primary" className="w-full">
                    {dest.cta}
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
