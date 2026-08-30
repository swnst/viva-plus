import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProductSection } from "@/components/sections/ProductSection";
import { PrebioticSection } from "@/components/sections/PrebioticSection";
import { KarandaSection } from "@/components/sections/KarandaSection";
import { DistributionSection } from "@/components/sections/DistributionSection";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF8F9] selection:bg-rose-200 selection:text-rose-900">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ProductSection />
        <PrebioticSection />
        <KarandaSection />
        <DistributionSection />
      </main>
      <Footer />
    </div>
  );
}
