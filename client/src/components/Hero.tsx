import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

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
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              Jetzt verfügbar in Köln & Neuss
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                Für Privatkunden & Haushalte – <br />
                {/* 
                  Ghost element technique for stable height:
                  1. Render the longest phrase invisibly to reserve space
                  2. Position the typewriter text absolutely over it
                */}
                <span className="text-primary block relative">
                  <span className="invisible" aria-hidden="true">Unterstützung für Ihr Zuhause</span>
                  <span className="absolute top-0 left-0 w-full">
                    {text}<span className="animate-pulse">|</span>
                  </span>
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Ob Computer, Smartphone, Smart-TV oder Smart Home: Tech Hilfe Pro unterstützt Sie bei allen Technikfragen – telefonisch, per Fernwartung und bei Bedarf vor Ort.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base px-8 h-12 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
                Jetzt Hilfe anfragen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg" className="text-base h-12 bg-white/50 backdrop-blur-sm border-primary/20 hover:bg-white/80">
                Unsere Abos entdecken
              </Button>
            </div>
            
            <div className="pt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-secondary" />
                <span>Fernwartung</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-secondary" />
                <span>Vor-Ort-Service</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-secondary" />
                <span>Keine versteckten Kosten</span>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full rounded-2xl overflow-hidden shadow-2xl shadow-black/10 border-4 border-white">
              <img 
                src="/hero-b2c.png" 
                alt="Modernes Home Office" 
                className="w-full h-full object-cover"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50 max-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Status</p>
                    <p className="font-bold text-sm text-green-600">Online & Bereit</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">Unsere Experten sind nur einen Klick entfernt.</p>
              </div>
            </div>
            
            {/* Decorative elements behind image */}
            <div className="absolute -z-10 top-10 right-10 w-full h-full border-2 border-primary/10 rounded-2xl translate-x-4 translate-y-4" />
          </div>
        </div>
      </div>
    </section>
  );
}
