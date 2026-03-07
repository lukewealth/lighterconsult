import { NavbarConsult } from "@/components/layout/NavbarConsult";
import { FooterConsult } from "@/components/layout/FooterConsult";
import { BookingForm } from "@/components/sections/BookingSection";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function ConsultBookPage() {
  return (
    <main className="min-h-screen bg-white">
      <NavbarConsult />
      
      <section className="pt-40 pb-24 px-6 bg-slate-50">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left">
            <span className="t-label text-blue-600 mb-6 block tracking-[4px]">READY TO GROW?</span>
            <h1 className="t-display text-slate-900 mb-8 md:text-7xl">Book Your <span className="text-blue-600 italic font-serif">Strategy Call</span></h1>
            <p className="t-body-lg text-slate-500 mb-12">
              Speak directly with our digital strategists. We&apos;ll audit your current presence and show you exactly how to scale your brand with professional marketing solutions.
            </p>
            
            <ul className="space-y-6">
              {[
                "Custom growth roadmap",
                "Competitor analysis insights",
                "Platform recommendation",
                "ROI-focused strategy"
              ].map(item => (
                <li key={item} className="flex items-center gap-4 text-slate-600 font-medium">
                  <div className="w-8 h-8 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0 shadow-sm">
                    ✓
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <BookingForm type="consult" />
          </ScrollReveal>
        </div>
      </section>

      <FooterConsult />
    </main>
  );
}
