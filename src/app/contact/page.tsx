import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { Phone, Mail, MapPin } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get In Touch | Speak with our Strategists & Experts",
  description: "Ready to scale your business or start your journey abroad? Contact LiGHTER DIGITAL today for professional marketing and immigration solutions.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Page Hero - Modern Light Style */}
      <section className="bg-slate-50 pt-40 pb-24 px-6 border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto text-center">
          <ScrollReveal>
            <div className="flex justify-center mb-6">
              <span className="px-4 py-1 rounded-full bg-blue-100 text-blue-600 t-label text-[10px] tracking-[4px]">GET IN TOUCH</span>
            </div>
            <h1 className="t-display text-slate-900 mb-8">Let&apos;s Spark <span className="text-blue-600 italic font-serif">Something Great.</span></h1>
            <p className="t-body-lg text-slate-500 max-w-[720px] mx-auto">
              Ready to grow your business or start your journey abroad? Our team is here to guide you every step of the way with professional solutions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white py-24 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form - White Modern Card */}
          <ScrollReveal direction="left">
            <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-2xl shadow-slate-200/50">
              <h2 className="t-h2 text-slate-900 mb-8">Send us a message</h2>
              <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="t-label text-slate-400 text-[10px]">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-blue-600 focus:bg-white transition-all shadow-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="t-label text-slate-400 text-[10px]">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-blue-600 focus:bg-white transition-all shadow-sm"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="t-label text-slate-400 text-[10px]">Service of Interest</label>
                  <div className="relative">
                    <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 focus:outline-none focus:border-blue-600 focus:bg-white transition-all shadow-sm appearance-none cursor-pointer">
                      <option>Digital Marketing</option>
                      <option>Immigration & Travel</option>
                      <option>Brand Building</option>
                      <option>Other</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      ↓
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="t-label text-slate-400 text-[10px]">Your Message</label>
                  <textarea 
                    rows={5}
                    placeholder="Tell us about your goals..."
                    className="bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-blue-600 focus:bg-white transition-all shadow-sm resize-none"
                  />
                </div>
                <Button variant="primary" size="lg" className="w-full mt-4 rounded-2xl py-6 bg-blue-600 shadow-xl shadow-blue-100 text-white font-black border-none">
                  Send Message →
                </Button>
              </form>
            </div>
          </ScrollReveal>

          {/* Contact Info & Map */}
          <ScrollReveal direction="right" className="flex flex-col gap-12">
            <div className="flex flex-col gap-8">
              <h2 className="t-h2 text-slate-900">Contact Information</h2>
              <ul className="flex flex-col gap-8">
                {[
                  { icon: MapPin, title: "Our Location", text: "KM 34, Lekki-Epe Expressway, Lekki, Lagos, Nigeria" },
                  { icon: Phone, title: "Call Us", text: "+234 707 059 9190 / +234 816 511 9380" },
                  { icon: Mail, title: "Email Us", text: "lighterconsult@gmail.com" }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                      <item.icon size={24} />
                    </div>
                    <div>
                      <span className="text-slate-900 font-black text-sm uppercase tracking-wider block mb-1">{item.title}</span>
                      <span className="text-slate-500 t-body">{item.text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Map Placeholder - Modern Style */}
            <div className="w-full h-[320px] bg-slate-50 rounded-[40px] border border-slate-100 flex items-center justify-center text-slate-200 text-2xl font-bold uppercase tracking-widest text-center shadow-inner relative overflow-hidden">
               <div className="absolute inset-0 bg-blue-600/5" />
               <div className="relative z-10 p-12 border-2 border-dashed border-slate-200 rounded-[30px]">
                  GOOGLE MAPS EMBED
               </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
