import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Building2,
  Laptop,
} from "lucide-react";
import { Link } from "wouter";
import TypewriterText from "./TypewriterText";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-secondary/30 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Text & Audience Cards */}
          <div className="flex flex-col gap-8 text-left">
            {/* Badge */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Jetzt verfügbar in Köln & Neuss
              </div>
            </div>

            {/* Headings */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground leading-tight">
                Ihr IT-Partner für <br />
                <span className="text-primary">Zuhause & Unternehmen</span>
              </h1>

              <div className="text-xl lg:text-2xl text-muted-foreground h-16 sm:h-auto">
                <TypewriterText
                  items={[
                    "Langsame PCs? Wir kümmern uns.",
                    "NIS2-bereite IT für Ihr KMU.",
                    "Sichere Backups für Ihre Familienfotos.",
                    "Monitoring statt Feuerwehr-IT.",
                  ]}
                  speed={50}
                  pause={2000}
                  loop={true}
                />
              </div>
            </div>

            {/* Bullet List */}
            <ul className="space-y-3">
              {[
                "Schnelle PC-Hilfe & Remote-Support",
                "Managed IT & NIS2-Compliance für KMU",
                "Transparente Preise ohne versteckte Kosten",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-foreground/80"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Audience Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              {/* B2C Card */}
              <div className="msp-card p-6 flex flex-col h-full hover:-translate-y-0.5 hover:bg-secondary/30 hover:border-primary transition-all duration-300 group">
                <div className="mb-4">
                  <div className="h-10 w-10 rounded-2xl bg-secondary text-primary flex items-center justify-center mb-4">
                    <Laptop className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Für Privatkunden</h3>
                  <div className="h-px w-12 bg-primary/20 mb-3" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Schnelle Hilfe bei PC-Problemen, WLAN, Smart Home und mehr.
                  </p>
                </div>
                <div className="mt-auto pt-4">
                  <Button
                    className="w-full btn-outline group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all"
                    asChild
                  >
                    <Link href="/privatkunden">
                      Zu den Services <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* B2B Card */}
              <div className="msp-card p-6 flex flex-col h-full hover:-translate-y-0.5 hover:bg-secondary/30 hover:border-primary transition-all duration-300 group">
                <div className="mb-4">
                  <div className="h-10 w-10 rounded-2xl bg-secondary text-primary flex items-center justify-center mb-4">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Für Unternehmen</h3>
                  <div className="h-px w-12 bg-primary/20 mb-3" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Managed IT, NIS2-Compliance und Sicherheit für KMU.
                  </p>
                </div>
                <div className="mt-auto pt-4">
                  <Button
                    className="w-full btn-outline group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all"
                    asChild
                  >
                    <Link href="/unternehmen">
                      Zum KMU-Bereich <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Image */}
          <div className="flex items-center justify-center relative mt-12 lg:mt-0">
            <div className="relative w-full max-w-lg rounded-3xl bg-white shadow-2xl border border-secondary/50 p-2 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)]">
              <img
                src="/images/main-hero-3d.png"
                alt="IT Partner for Home and Business"
                className="w-full h-auto rounded-2xl overflow-hidden object-cover"
              />
            </div>
          </div>
        </div>

        {/* Checklist Teaser (kept from previous) */}
        <div id="checklist-teaser" className="max-w-4xl mx-auto mt-24">
          <div className="msp-card p-8 bg-secondary/30 border-secondary">
            <div className="grid md:grid-cols-2 gap-8 items-center text-left">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-bold uppercase tracking-wider">
                  <FileText className="h-3 w-3" />
                  Kostenloses Material
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">
                    Kostenlose IT-Sicherheits-Checkliste
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Nicht sicher, wie gut Sie geschützt sind? Mit unserer
                    IT-Sicherheits-Checkliste für Zuhause & KMU sehen Sie in
                    wenigen Minuten, wo Sie stehen.
                  </p>
                </div>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border shadow-sm text-center space-y-6">
                <div className="inline-block px-3 py-1 bg-accent/20 text-orange-700 text-[10px] font-bold uppercase tracking-wider rounded-full">
                  Empfohlen
                </div>
                <h4 className="text-lg font-bold text-foreground">
                  Checkliste jetzt kostenlos sichern
                </h4>
                <Button className="w-full btn-primary" size="lg" asChild>
                  <Link href="/ressourcen">
                    Zur Checkliste
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
