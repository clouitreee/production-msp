import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import StickyHeader from "@/components/StickyHeader";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <StickyHeader />
      <main className="flex-grow">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
