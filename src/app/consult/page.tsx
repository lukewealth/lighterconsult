import { NavbarConsult } from "@/components/layout/NavbarConsult";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFAB } from "@/components/layout/WhatsAppFAB";
import { HeroConsult } from "@/components/sections/HeroConsult";
import { SocialProofMarquee } from "@/components/sections/SocialProofMarquee";
import { ServicesGridConsult } from "@/components/sections/ServicesGridConsult";
import { BlueprintCarousel } from "@/components/sections/BlueprintCarousel";
import { ResultsSection } from "@/components/sections/ResultsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FinalCTAStripConsult } from "@/components/sections/FinalCTAStripConsult";

export default function ConsultHomePage() {
  return (
    <main className="min-h-screen bg-white">
      <NavbarConsult />
      <HeroConsult />
      <div className="bg-slate-50 py-4">
        <SocialProofMarquee />
      </div>
      <ServicesGridConsult />
      <div className="bg-slate-50/50">
        <BlueprintCarousel />
      </div>
      <ResultsSection />
      <PricingSection />
      <div className="bg-slate-50/50">
        <TestimonialsSection />
      </div>
      <FinalCTAStripConsult />
      <Footer />
      <WhatsAppFAB />
    </main>
  );
}
