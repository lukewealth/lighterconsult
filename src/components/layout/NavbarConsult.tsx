"use client";

import { useState, useEffect } from "react";
import { Logo } from "@/components/brand/Logo";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { 
    name: "Services", 
    href: "/services", 
    dropdown: [
      { name: "LiGHTER CONSULT", href: "/consult", desc: "Digital Marketing & Ads" },
      { name: "LiGHTER TRAVEL", href: "/travel", desc: "Global Mobility & Visas" },
      { name: "Full-Stack Solutions", href: "/services", desc: "Strategic Business Growth" }
    ] 
  },
  { 
    name: "Results", 
    href: "/portfolio", 
    dropdown: [
      { name: "Case Studies", href: "/portfolio", desc: "Proven ROI & Growth" },
      { name: "Business Use Cases", href: "/services", desc: "Industry Applications" }
    ] 
  },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export const NavbarConsult = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-[1000] transition-all duration-500",
        isScrolled
          ? "bg-white/95 backdrop-blur-[20px] border-b border-slate-100 py-3.5 shadow-sm"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        <Logo className="scale-110" />

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group py-2">
              <Link
                href={link.href}
                className={cn(
                  "flex items-center gap-1.5 text-[13px] font-black uppercase tracking-[2px] transition-all duration-300",
                  isScrolled ? "text-slate-600 hover:text-blue-600" : "text-slate-900 hover:text-blue-600"
                )}
              >
                {link.name}
                {link.dropdown && (
                  <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300 text-blue-600" />
                )}
              </Link>

              {link.dropdown && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="bg-white border border-slate-100 rounded-[24px] p-3 w-72 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-5 py-4 rounded-xl hover:bg-slate-50 transition-colors group/item"
                      >
                        <p className="text-[11px] font-black uppercase tracking-widest text-slate-900 group-hover/item:text-blue-600 transition-colors">
                          {item.name}
                        </p>
                        <p className="text-[10px] text-slate-400 mt-1 font-medium italic">
                          {item.desc}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Button size="sm" href="/consult/book" className="ml-4 bg-amber text-white rounded-xl shadow-xl shadow-amber-100 font-black px-8 border-none">
            GET STARTED
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-slate-900 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 35 }}
            className="fixed inset-0 bg-white z-[999] lg:hidden flex flex-col p-10"
          >
            <div className="flex justify-between items-center mb-16">
              <Logo />
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-slate-900">
                <X size={32} />
              </button>
            </div>
            
            <div className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: 40, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-slate-900 text-4xl font-black uppercase tracking-tighter hover:text-blue-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto">
              <Button size="xl" href="/consult/book" className="w-full bg-amber text-white rounded-2xl py-8 text-lg font-black" onClick={() => setIsMobileMenuOpen(false)}>
                GET STARTED NOW
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
