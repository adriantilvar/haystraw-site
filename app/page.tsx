import HeroSection from "@/components/hero-section/hero-section.component";
import PricingSection from "@/components/pricing-section/pricing-section.component";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="h-screen">
        <HeroSection />
        <div className="border-2 border-slate-900">Some benefits page?</div>
        <PricingSection />
      </div>
    </div>
  );
}
