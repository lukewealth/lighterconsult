import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFAB } from "@/components/layout/WhatsAppFAB";
import { HeroMain } from "@/components/sections/HeroMain";
import { StatsBar } from "@/components/sections/StatsBar";
import { ManifestoQuote } from "@/components/sections/ManifestoQuote";
import { SubBrandCards } from "@/components/sections/SubBrandCards";
import { ValueProps } from "@/components/sections/ValueProps";
import { PortfolioPreview } from "@/components/sections/PortfolioPreview";
import { BusinessProfile } from "@/components/sections/BusinessProfile";
import { ServicesGridConsult } from "@/components/sections/ServicesGridConsult";
import { PricingSection } from "@/components/sections/PricingSection";
import { FinalCTAStrip } from "@/components/sections/FinalCTAStrip";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroMain />
      <StatsBar />
      
      {/* Business Use Cases Section */}
      <ServicesGridConsult />
      
      <PortfolioPreview />
      <ValueProps />
      <SubBrandCards />
      <ManifestoQuote />
      
      {/* Pricing Section before the final branding block */}
      <PricingSection />
      
      {/* Business Profile (Brand Story & ignite growth branding) */}
      <BusinessProfile />
      
      <FinalCTAStrip />
      <Footer />
      <WhatsAppFAB />
    </main>
  );
}
