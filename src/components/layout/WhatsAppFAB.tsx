"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const WhatsAppFAB = () => {
  return (
    <motion.a
      href="https://wa.me/2347070599190?text=Hello%20LiGHTER%2C%20I%20need%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-[999] w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_4_24px_rgba(37,211,102,0.40)] transition-all duration-300"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
      <motion.span
        animate={{ scale: [1, 1.2, 1], opacity: [0, 0.5, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute inset-0 rounded-full bg-[#25D366]"
      />
    </motion.a>
  );
};
