import { ChannelPartnersSection } from "@/components/ChannelPartnersSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { ManufacturingSection } from "@/components/ManufacturingSection";
import { ProductsSection } from "@/components/ProductsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ProofSection } from "@/components/ProofSection";
import { SavingsCalculator } from "@/components/SavingsCalculator";
import { SiteHeader } from "@/components/SiteHeader";
import { StatsStrip } from "@/components/StatsStrip";
import { WhoWeServeSection } from "@/components/WhoWeServeSection";

export default function Home() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="overflow-hidden">
        <HeroSection />
        <StatsStrip />
        <WhoWeServeSection />
        <ProductsSection />
        <ManufacturingSection />
        <SavingsCalculator />
        <ProjectsSection />
        <ChannelPartnersSection />
        <ProofSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
