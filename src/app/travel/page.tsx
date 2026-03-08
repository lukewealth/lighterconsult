import { NavbarTravel } from "@/components/layout/NavbarTravel";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFAB } from "@/components/layout/WhatsAppFAB";
import { HeroTravel } from "@/components/sections/HeroTravel";
import { DestinationCards } from "@/components/sections/DestinationCards";
import { ServicesGridTravel } from "@/components/sections/ServicesGridTravel";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TrustStatsBanner } from "@/components/sections/TrustStatsBanner";
import { PromotionalFlyers } from "@/components/sections/PromotionalFlyers";
import { TestimonialsSectionTravel } from "@/components/sections/TestimonialsSectionTravel";
import { FinalCTAStripTravel } from "@/components/sections/FinalCTAStripTravel";
import { PricingSection } from "@/components/sections/PricingSection";

export default function TravelHomePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <NavbarTravel />
      <HeroTravel />
      <div className="bg-slate-50">
        <TrustStatsBanner />
      </div>
      <DestinationCards />
      <div className="bg-slate-50/50">
        <ServicesGridTravel />
      </div>
      <HowItWorks />
      <PricingSection />
      <PromotionalFlyers />
      <div className="bg-slate-50/50">
        <TestimonialsSectionTravel />
      </div>
      <FinalCTAStripTravel />
      <Footer />
      <WhatsAppFAB />
    </main>
  );
}
