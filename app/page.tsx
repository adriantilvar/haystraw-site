import HeroSection from "@components/hero-section/hero-section.component.tsx";
import PricingSection from "@components/pricing-section/pricing-section.component.tsx";
import CallToActionSection from "@components/cta-section/cta-section.component.tsx";
import Footer from "@components/footer/footer.component.tsx";
import FeatureSection from "@components/feature-section/feature-section.component.tsx";

export default function Home() {
  return (
    <div>
      <div className="h-screen">
        <HeroSection />
        <FeatureSection />
        <PricingSection />
        <CallToActionSection />
        <Footer />
      </div>
    </div>
  );
}
