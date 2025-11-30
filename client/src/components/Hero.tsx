import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import ContactModal from "./ContactModal";

const TYPEWRITER_PHRASES = [
  "Schnelle PC-Hilfe",
  "Unterstützung für Ihr Zuhause",
  "Sichere Fernwartung",
  "Smart Home Einrichtung",
  "WLAN Optimierung"
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const currentPhrase = TYPEWRITER_PHRASES[phraseIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    
    const timer = setTimeout(() => {
      if (!isDeleting && text === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      }
      
      if (isDeleting && text === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % TYPEWRITER_PHRASES.length);
        return;
      }
      
      setText(prev => isDeleting ? prev.slice(0, -1) : currentPhrase.slice(0, prev.length + 1));
    }, typeSpeed);
    
    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex]);

  return (
    <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32">
      {/* Background decorative blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-secondary/10 blur-[100px]" />
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Gateway Content */}
          <div className="col-span-full text-center space-y-12">
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                </span>
                Jetzt verfügbar in Köln & Neuss
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                Ihr IT-Partner für <br />
                <span className="text-primary">Zuhause & Unternehmen</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Tech Hilfe Pro ist Ihr zuverlässiger Ansprechpartner für alle Technikfragen. Ob schnelle PC-Hilfe für Privatkunden oder professionelle Managed Services für KMU – wir sind für Sie da.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* B2C Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all text-left">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <CheckCircle2 className="w-24 h-24 text-secondary" />
                </div>
                <div className="relative z-10 space-y-4">
                  <div className="h-12 w-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold">Für Privatkunden</h2>
                  <p className="text-muted-foreground">
                    Schnelle Hilfe bei PC-Problemen, WLAN, Smart Home und mehr. Fernwartung oder Vor-Ort-Service.
                  </p>
                  <Button className="w-full mt-4" asChild>
                    <a href="/privatkunden">
                      Zu den Privatkunden-Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* B2B Card */}
              <div className="group relative overflow-hidden rounded-2xl bg-slate-900 text-white p-8 shadow-lg hover:shadow-xl transition-all text-left">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <CheckCircle2 className="w-24 h-24 text-primary" />
                </div>
                <div className="relative z-10 space-y-4">
                  <div className="h-12 w-12 bg-white/10 rounded-xl flex items-center justify-center text-white">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <h2 className="text-2xl font-bold">Für Unternehmen</h2>
                  <p className="text-slate-300">
                    Managed IT, NIS2-Compliance, Backups und Sicherheit für KMU. Ihre externe IT-Abteilung.
                  </p>
                  <Button variant="secondary" className="w-full mt-4" asChild>
                    <a href="/unternehmen">
                      Zum Unternehmens-Bereich
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer animate-bounce duration-[2000ms]" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">Mehr entdecken</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center p-1">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
