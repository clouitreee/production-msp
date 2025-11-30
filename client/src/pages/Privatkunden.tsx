import B2CHero from "@/components/B2CHero";
import ServiceGrid from "@/components/ServiceGrid";
import PricingPlans from "@/components/PricingPlans";
import ComparisonSection from "@/components/ComparisonSection";
import Footer from "@/components/Footer";
import StickyHeader from "@/components/StickyHeader";

export default function Privatkunden() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <StickyHeader />
      <main className="flex-grow">
        <B2CHero />
        <ServiceGrid />
        <PricingPlans />
        <ComparisonSection />
      </main>
      <Footer />
    </div>
  );
}
