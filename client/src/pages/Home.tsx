import Hero from "@/components/Hero";
import ServiceGrid from "@/components/ServiceGrid";
import PricingPlans from "@/components/PricingPlans";
import ComparisonSection from "@/components/ComparisonSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <main className="flex-grow">
        <Hero />
        <ServiceGrid />
        <PricingPlans />
        <ComparisonSection />
      </main>
      <Footer />
    </div>
  );
}
