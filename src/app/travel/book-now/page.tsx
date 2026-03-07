import { NavbarTravel } from "@/components/layout/NavbarTravel";
import { FooterTravel } from "@/components/layout/FooterTravel";
import { BookingForm } from "@/components/sections/BookingSection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function TravelBookPage() {
  return (
    <main className="min-h-screen bg-white">
      <NavbarTravel />
      
      <section className="pt-40 pb-24 px-6 bg-slate-50">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <span className="t-label text-blue-600 mb-6 block tracking-[4px]">START YOUR JOURNEY</span>
            <h1 className="t-display text-slate-900 mb-8 md:text-7xl uppercase">Relocate <span className="text-blue-600 italic font-serif">Legally & Safely</span></h1>
            <p className="t-body-lg text-slate-500 mb-12">
              Ready to move to Canada, Australia, or the UK? Fill out our assessment form and our immigration experts will contact you within 24 hours.
            </p>
            
            <div className="bg-white border border-slate-100 p-8 rounded-[32px] shadow-xl shadow-slate-200/50">
              <h3 className="text-slate-900 font-black mb-6 uppercase tracking-wider text-sm">Why LiGHTER TRAVEL?</h3>
              <ul className="space-y-4">
                {[
                  "100% Legal & Transparent Process",
                  "Expert Visa Document Review",
                  "Relocation & Arrival Support",
                  "Family Applications Welcome"
                ].map(item => (
                  <li key={item} className="flex items-center gap-4 text-slate-600">
                    <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <BookingForm type="travel" />
          </ScrollReveal>
        </div>
      </section>

      <FooterTravel />
    </main>
  );
}
