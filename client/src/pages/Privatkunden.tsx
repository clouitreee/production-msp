import B2CHero from "@/components/B2CHero";
import QuoteSection from "@/components/QuoteSection";
import ServicesSection from "@/components/ServicesSection";
import PricingPlans from "@/components/PricingPlans";
import TestimonialsSection from "@/components/TestimonialsSection";
import ComparisonSection from "@/components/ComparisonSection";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";

export default function Privatkunden() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <StickyHeader />
      <main className="flex-grow">
        <B2CHero />
        <QuoteSection />
        <ServicesSection />
        <PricingPlans />
        <TestimonialsSection />
        <ComparisonSection />
      </main>
      <Footer />
    </div>
  );
}
