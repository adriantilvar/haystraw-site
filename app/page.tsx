import HeroSection from "@components/hero-section/hero-section.component.tsx";
import PricingSection from "@components/pricing-section/pricing-section.component.tsx";
import CallToActionSection from "@components/cta-section/cta-section.component.tsx";
import FeatureSection from "@components/feature-section/feature-section.component.tsx";
import ProductSection from "@components/product-section/product-section.component";
import Footer from "@components/footer/footer.component";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProductSection />
      <FeatureSection />
      <PricingSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
}
