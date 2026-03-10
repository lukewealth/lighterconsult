"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";

export const HeroConsult = () => {
  return (
    <section className="relative min-h-svh w-full overflow-hidden flex items-center bg-consult-gradient py-20">
      {/* Animated Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(32,160,224,1) 1px, transparent 1px), linear-gradient(90deg, rgba(32,160,224,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10">
        <div className="flex flex-col gap-6 pt-12 md:pt-0">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="t-label text-sky tracking-[2px] md:tracking-[4px]"
          >
            DIGITAL MARKETING AGENCY · LAGOS NIGERIA
          </motion.span>

          <h1 className="t-display text-white m-0">
            <motion.span
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="block"
            >
              Amplify.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="block text-teal"
            >
              Engage.
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="block text-amber"
            >
              Grow.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="t-body-lg text-white/65 max-w-[580px]"
          >
            LiGHTER CONSULT is a subsidiary of LiGHTER DIGITAL — Nigeria&apos;s boldest digital marketing and media agency.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="flex flex-wrap gap-4 mt-4"
          >
            <Button size="xl" className="bg-sky hover:bg-sky/80 text-white shadow-none w-full sm:w-auto">
              Free Strategy Call
            </Button>
            <Button variant="ghost" size="xl" className="w-full sm:w-auto">
              See Our Work
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="text-gray-500 text-[13px] mt-4 font-bold"
          >
            Trusted by 500+ brands across Nigeria and Africa
          </motion.p>
        </div>

        {/* Right visual area with floating elements */}
        <div className="hidden lg:flex justify-end relative">
          <ScrollReveal direction="scale" className="relative">
            <div className="w-[440px] aspect-[4/5] rounded-2xl border border-white/5 shadow-2xl rotate-[-3deg] overflow-hidden relative bg-dark">
               <Image 
                 src="/assets/portfolio/smm-showcase.png" 
                 alt="SMM Showcase" 
                 fill 
                 className="object-cover"
               />
            </div>
            
            {/* Floating Metric Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-20 -left-12 bg-card border border-teal/20 p-6 rounded-xl shadow-glow-teal z-20"
            >
              <span className="text-teal font-black text-3xl block">+327%</span>
              <span className="t-label text-gray-400">Engagement</span>
            </motion.div>

            {/* Second Floating Card */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: -2 }}
              className="absolute bottom-20 -right-8 bg-card border border-sky/20 p-6 rounded-xl shadow-2xl z-20"
            >
              <span className="text-white font-bold block mb-2 font-display uppercase tracking-widest text-xs">Omni-channel</span>
              <div className="flex gap-3 text-sky/60">
                <span className="text-[10px] font-bold uppercase tracking-wider">Meta</span>
                <span className="text-[10px] font-bold uppercase tracking-wider">Google</span>
                <span className="text-[10px] font-bold uppercase tracking-wider">TikTok</span>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
