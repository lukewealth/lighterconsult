"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Linkedin, Twitter, Mail } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    name: "Daniel",
    role: "Senior Strategist",
    image: "/assets/team/daniel.png",
    bio: "Driving growth through data-led marketing strategies.",
    span: "lg:col-span-4",
  },
  {
    name: "Sarah",
    role: "Creative Director",
    image: "/assets/hero/slide-1.png",
    bio: "Crafting visual narratives that connect brands with people.",
    span: "lg:col-span-4",
  },
  {
    name: "James",
    role: "Lead Developer",
    image: "/assets/hero/smm.png",
    bio: "Building high-performance digital experiences.",
    span: "lg:col-span-4",
  },
];

export const TeamSection = () => {
  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal className="mb-20">
          <div className="flex items-center gap-4 mb-6">
             <div className="h-[1px] w-12 bg-blue-600" />
             <span className="t-label text-blue-600 tracking-[4px]">OUR EXPERTS</span>
          </div>
          <h2 className="text-slate-900 font-display font-black text-5xl md:text-7xl leading-none tracking-tight">
            digital marketing <br/><span className="text-blue-600 italic font-serif">services.</span>
          </h2>
        </ScrollReveal>

        {/* Bento Grid Team Layout from ourteam page with content.jpg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Info Card */}
          <ScrollReveal direction="left" className="lg:col-span-4 h-full">
            <div className="bg-slate-900 rounded-[48px] p-12 h-full flex flex-col justify-between text-white relative overflow-hidden group">
              <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <h3 className="t-h2 text-white mb-6 leading-tight">Collaborate <br/>Together</h3>
                <p className="text-slate-400 t-body">
                  We believe in the power of collective expertise. Our team combines diverse backgrounds to solve complex brand challenges.
                </p>
              </div>
              <div className="relative z-10 pt-12">
                <Button variant="primary" className="rounded-full bg-white text-slate-900 px-8 py-4 font-black text-xs uppercase tracking-widest hover:bg-blue-50">
                  Join Our Team
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {/* Team Members Masonry */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group bg-slate-50 border border-slate-100 rounded-[48px] p-10 hover:bg-white hover:shadow-2xl hover:shadow-blue-100 transition-all duration-500 flex flex-col gap-8">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <Image src={member.image} alt={member.name} fill className="object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all" />
                  </div>
                  
                  <div>
                    <h4 className="text-slate-900 font-black text-2xl m-0 tracking-tight">{member.name}</h4>
                    <p className="t-label text-blue-600 text-[10px] mt-1 tracking-[2px]">{member.role}</p>
                  </div>

                  <p className="t-body text-slate-500 text-sm italic font-serif">
                    &ldquo;{member.bio}&rdquo;
                  </p>

                  <div className="flex gap-4 pt-4 border-t border-slate-100">
                    {[Linkedin, Twitter, Mail].map((Icon, idx) => (
                      <a key={idx} href="#" className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-all">
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Client Recognition Strip from Sample */}
        <div className="mt-32 pt-16 border-t border-slate-100 flex flex-wrap items-center justify-between gap-12">
           <div className="max-w-[400px]">
              <h3 className="text-slate-900 font-black text-2xl mb-4">Trusted Worldwide</h3>
              <p className="text-slate-500 text-sm">Recognized by industry leaders for excellence in digital transformation and immigration services.</p>
           </div>
           <div className="flex flex-wrap gap-12 grayscale opacity-30">
              <div className="font-black text-3xl tracking-tighter text-slate-900">Mital.</div>
              <div className="font-black text-3xl tracking-tighter text-slate-900">Analytics.</div>
              <div className="font-black text-3xl tracking-tighter text-slate-900">Emeo.</div>
              <div className="font-black text-3xl tracking-tighter text-slate-900">Campaigns.</div>
           </div>
        </div>
      </div>
    </section>
  );
};
