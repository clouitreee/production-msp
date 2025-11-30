import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import ContactModal from "./ContactModal";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function StickyHeader() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling 500px (approx hero height)
      const show = window.scrollY > 500;
      if (show !== isVisible) {
        setIsVisible(show);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="bg-white/80 backdrop-blur-md border-b shadow-sm">
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="font-bold text-lg cursor-pointer flex items-center gap-2"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-sm">
              TH
            </div>
            <span className="hidden sm:inline">Tech Hilfe Pro</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/privatkunden" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Privatkunden
            </a>
            <a href="/unternehmen" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Unternehmen
            </a>
            <a href="/privatkunden#faq" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              FAQ
            </a>
            <ContactModal>
              <button className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Kontakt
              </button>
            </ContactModal>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <ContactModal>
              <Button size="sm" className="shadow-md shadow-primary/20">
                Jetzt Hilfe anfragen
              </Button>
            </ContactModal>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="top" className="w-full">
                <div className="flex flex-col gap-6 pt-10 pb-6 items-center">
                  <a href="/privatkunden" onClick={() => setIsMobileOpen(false)} className="text-lg font-medium">
                    Privatkunden
                  </a>
                  <a href="/unternehmen" onClick={() => setIsMobileOpen(false)} className="text-lg font-medium">
                    Unternehmen
                  </a>
                  <a href="/privatkunden#faq" onClick={() => setIsMobileOpen(false)} className="text-lg font-medium">
                    FAQ
                  </a>
                  <ContactModal>
                    <Button className="w-full max-w-xs mt-4 shadow-lg shadow-primary/20">
                      Jetzt Hilfe anfragen
                    </Button>
                  </ContactModal>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
