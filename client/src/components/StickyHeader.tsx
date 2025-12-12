import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import ContactModal from "./ContactModal";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "wouter";

export default function StickyHeader() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="bg-background/60 backdrop-blur-md border-b border-border/40 supports-[backdrop-filter]:bg-background/60">
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-bold text-lg cursor-pointer flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm shadow-sm">
              TH
            </div>
            <span className="hidden sm:inline">Tech Hilfe Pro</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/privatkunden"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Privatkunden
            </Link>
            <Link
              href="/unternehmen"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Unternehmen
            </Link>
            <Link
              href="/ressourcen"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Ressourcen
            </Link>
            <Link
              href="/privatkunden#faq"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              FAQ
            </Link>
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
              <SheetContent
                side="top"
                className="w-full pt-16 bg-background/95 backdrop-blur-xl"
              >
                <div className="flex flex-col gap-6 items-center">
                  <Link
                    href="/privatkunden"
                    onClick={() => setIsMobileOpen(false)}
                    className="text-lg font-medium"
                  >
                    Privatkunden
                  </Link>
                  <Link
                    href="/unternehmen"
                    onClick={() => setIsMobileOpen(false)}
                    className="text-lg font-medium"
                  >
                    Unternehmen
                  </Link>
                  <Link
                    href="/ressourcen"
                    onClick={() => setIsMobileOpen(false)}
                    className="text-lg font-medium"
                  >
                    Ressourcen
                  </Link>
                  <Link
                    href="/privatkunden#faq"
                    onClick={() => setIsMobileOpen(false)}
                    className="text-lg font-medium"
                  >
                    FAQ
                  </Link>
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
