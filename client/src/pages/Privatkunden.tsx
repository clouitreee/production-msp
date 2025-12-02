import B2CHero from "@/components/B2CHero";
import ServicesSection from "@/components/ServicesSection";
import PricingPlans from "@/components/PricingPlans";
import ComparisonSection from "@/components/ComparisonSection";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";

export default function Privatkunden() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <StickyHeader />
      <main className="flex-grow">
        <B2CHero />
        <ServicesSection />
        <PricingPlans />
        <ComparisonSection />
      </main>
      <Footer />
    </div>
  );
}
