import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import ContactModal from "./ContactModal";
import TypewriterText from "./TypewriterText";
import HomeSupportIllustration from "./illustrations/HomeSupportIllustration";

const TYPEWRITER_PHRASES = [
  "Schnelle PC-Hilfe",
  "Unterstützung für Ihr Zuhause",
  "Sichere Fernwartung",
  "Smart Home Einrichtung",
  "WLAN Optimierung",
];

export default function B2CHero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32">
      {/* Background decorative blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#FB923C]/5 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-secondary/10 blur-[100px]" />
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3F4F6] text-[#FB923C] text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FB923C] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FB923C]"></span>
              </span>
              Jetzt verfügbar in Köln & Neuss
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                Für Privatkunden & Haushalte – <br />
                <span className="text-[#FB923C] block mt-2 h-16 sm:h-auto">
                  <TypewriterText
                    items={TYPEWRITER_PHRASES}
                    speed={50}
                    pause={2000}
                    loop={true}
                  />
                </span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Ob Computer, Smartphone, Smart-TV oder Smart Home: Tech Hilfe
                Pro unterstützt Sie bei allen Technikfragen – telefonisch, per
                Fernwartung und bei Bedarf vor Ort.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <ContactModal>
                <Button
                  size="lg"
                  className="text-base px-8 h-12 btn-primary shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
                >
                  Jetzt Hilfe anfragen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </ContactModal>
              <Button
                variant="outline"
                size="lg"
                className="text-base h-12 btn-outline"
                onClick={() =>
                  document
                    .getElementById("pricing")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Unsere Abos entdecken
              </Button>
            </div>

            <div className="pt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#FB923C]" />
                <span>Fernwartung</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#FB923C]" />
                <span>Vor-Ort-Service</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#FB923C]" />
                <span>Keine versteckten Kosten</span>
              </div>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-lg rounded-3xl bg-white shadow-2xl border border-secondary/50 p-2 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)]">
              <HomeSupportIllustration className="w-full h-auto rounded-2xl overflow-hidden" />
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
