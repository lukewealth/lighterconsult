"use client";

import { motion } from "framer-motion";

const items = [
  "META ADS", "GOOGLE ADS", "TIKTOK", "INSTAGRAM", "LINKEDIN", 
  "FACEBOOK PAGE", "BRAND STRATEGY", "CONTENT CREATION", 
  "SHORT-FORM VIDEO", "INFLUENCER CAMPAIGNS"
];

export const SocialProofMarquee = () => {
  return (
    <section className="bg-white py-8 border-y border-slate-100 overflow-hidden whitespace-nowrap flex">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex gap-16 items-center"
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-16 items-center">
            {items.map((item, j) => (
              <div key={j} className="flex gap-16 items-center">
                <span className="text-[11px] font-black text-slate-400 uppercase tracking-[4px] font-display hover:text-blue-600 transition-colors cursor-default">
                  {item}
                </span>
                <span className="text-blue-600 font-black text-xl opacity-20">/</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </section>
  );
};
