import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  ShieldCheck,
  Server,
  Users,
  ArrowRight,
  FileText,
  Euro,
  MonitorCheck,
  Lock,
  LifeBuoy,
  Check,
  X,
  Clock,
  Phone,
} from "lucide-react";
import ContactModal from "@/components/ContactModal";
import FundingCalculator from "@/components/FundingCalculator";
import TypewriterText from "@/components/TypewriterText";
import KMUComplianceIllustration from "@/components/illustrations/KMUComplianceIllustration";
import NIS2DocumentsIllustration from "@/components/illustrations/NIS2DocumentsIllustration";
import ServiceGrid from "@/components/ServiceGrid";
import B2BServiceModels from "@/components/B2BServiceModels";

const B2B_SERVICES = [
  {
    icon: LifeBuoy,
    title: "Remote-Support & Helpdesk",
    description:
      "Schnelle Hilfe bei IT-Problemen per Fernwartung oder vor Ort.",
  },
  {
    icon: MonitorCheck,
    title: "Monitoring & Patch-Management",
    description: "Proaktive Überwachung und Updates für Ihre Systeme.",
  },
  {
    icon: Server,
    title: "Backup & Wiederherstellung",
    description: "Sichere Datensicherung und Notfallwiederherstellung.",
  },
  {
    icon: Users,
    title: "Benutzer- & Rechteverwaltung",
    description: "Verwaltung von Benutzerkonten und Zugriffsberechtigungen.",
  },
  {
    icon: Lock,
    title: "IT-Sicherheit & E-Mail-Schutz",
    description: "Schutz vor Viren, Phishing und Cyberangriffen.",
  },
  {
    icon: FileText,
    title: "Beratung & Planung",
    description:
      "Strategische IT-Beratung für Modernisierung, Home-Office und Cloud.",
  },
];

export default function Unternehmen() {
  const handleContact = (plan: string) => {
    // This function is used by the buttons inside the cards
    // Since the buttons are wrapped in ContactModal in the original code,
    // we'll need to adjust the structure to match the new design while keeping functionality.
    // However, the ContactModal component expects children to be the trigger.
    // So we will wrap the buttons in ContactModal directly in the JSX.
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <StickyHeader />
      <main className="flex-grow">
        {/* B2B Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-32 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                  <ShieldCheck className="h-4 w-4" />
                  Managed IT-Services für KMU
                </div>

                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                  Für Unternehmen & KMU – <br />
                  <span className="text-primary block mt-2 h-24 sm:h-auto">
                    <TypewriterText
                      items={[
                        "Managed IT, die einfach funktioniert",
                        "NIS2-bereite IT für Ihr KMU",
                        "Digitale Vertrauensbasis statt Feuerlösch-IT",
                        "Souveräne Cloud aus Europa",
                        "Managed Security für den Mittelstand",
                      ]}
                      speed={50}
                      pause={2000}
                    />
                  </span>
                </h1>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Tech Hilfe Pro übernimmt für kleine und mittlere Unternehmen in
                  Köln, Neuss und ganz NRW die Rolle einer ausgelagerten
                  IT-Abteilung. Wir kümmern uns um Updates, Backups,
                  Zugriffsrechte und sichere Fernwartung – damit Sie sich auf Ihr
                  Kerngeschäft konzentrieren können.
                </p>

                <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span>Managed IT-Services für PCs, Laptops, Server & Netzwerk</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span>Sichere Fernwartung mit selbst gehosteten Tools</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span>Unterstützung bei NIS2-Grundlagen und Dokumentation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    <span>Bis zu 50 % Förderung in NRW möglich</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <ContactModal defaultTopic="Unverbindliches Erstgespräch">
                    <Button
                      size="lg"
                      className="text-base px-8 h-12 btn-primary shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
                    >
                      Jetzt Erstgespräch anfragen
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
                    Leistungen ansehen
                  </Button>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="relative w-full max-w-lg">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-full blur-3xl -z-10" />
                  <KMUComplianceIllustration className="w-full h-auto drop-shadow-xl" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* A) Unsere Leistungen */}
        <ServiceGrid
          title="Unsere Leistungen für Unternehmen"
          description="Wir unterstützen Sie dort, wo kleine und mittlere Unternehmen am meisten Zeit und Nerven verlieren – mit klaren, wiederholbaren Prozessen statt Ad-hoc-Feuerwehr. Unsere Managed Services sorgen dafür, dass Ihre IT stabil läuft, Sicherheitsgrundlagen erfüllt sind und Sie im Notfall einen Ansprechpartner haben, der Ihre Umgebung kennt."
          items={B2B_SERVICES}
          className="bg-background"
        />

        {/* Service Models */}
        <B2BServiceModels />

        {/* B) NIS2 & IT-Sicherheit */}
        <section className="py-24 bg-slate-50 dark:bg-slate-950">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">
                  <ShieldCheck className="h-3 w-3" />
                  NIS2 Compliance
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                  NIS2 & IT-Sicherheit – pragmatisch umgesetzt
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Mit NIS2 steigen die Anforderungen an Cybersecurity – auch für
                  viele mittelständische Betriebe und bestimmte Branchen. Wir
                  ersetzen keine Anwaltskanzlei und keine zertifizierte
                  Prüfstelle, aber wir helfen Ihnen, die technischen Grundlagen
                  zu schaffen: regelmäßige Updates, überprüfte Backups, klare
                  Zugriffsrechte und einfache Dokumentation. So senken Sie Ihr
                  Risiko und sind besser auf Prüfungen vorbereitet, ohne dass
                  der Büroalltag stillsteht.
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                  <p className="text-sm text-yellow-800 dark:text-yellow-200 font-medium">
                    Hinweis: Wir bieten keine Rechtsberatung und keine formelle
                    Zertifizierung an, sondern unterstützen Sie bei der
                    praktischen Umsetzung technischer Maßnahmen.
                  </p>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="relative w-full max-w-md">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-full blur-3xl -z-10" />
                  <NIS2DocumentsIllustration className="w-full h-auto drop-shadow-xl" />
                </div>
              </div>
            </div>

            {/* Funding Calculator */}
            <div className="max-w-5xl mx-auto">
              <FundingCalculator />
            </div>
          </div>
        </section>

        {/* C) Förderung NRW */}
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
                <Euro className="h-4 w-4" />
                MID – Digitale Sicherheit
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">
                Förderung in NRW – bis zu 50 % Zuschuss nutzen
              </h2>
              <p className="text-primary-foreground/90 text-lg leading-relaxed">
                Über Förderprogramme in NRW (z. B. im Bereich ‚Digitale
                Sicherheit‘) können kleine Unternehmen einen Zuschuss von bis zu
                50 % für IT-Sicherheitsprojekte erhalten – etwa für Beratung,
                die Implementierung von Backups, Sicherheitssoftware oder
                Schulungen. Wir unterstützen Sie bei der technischen Umsetzung
                und können gemeinsam prüfen, ob eine Förderung für Ihr Vorhaben
                infrage kommt.
              </p>
              <ContactModal defaultTopic="Förderung in NRW">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-primary font-bold shadow-lg hover:bg-white/90 transition-colors"
                >
                  Mehr zur Förderung erfahren
                </Button>
              </ContactModal>
            </div>
          </div>
        </section>

        {/* D) B2B Pricing */}
        <section id="pricing" className="py-24 bg-slate-50 dark:bg-slate-950">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Unsere KMU-Pakete
              </h2>
              <p className="text-muted-foreground text-lg">
                Transparente Preise pro Benutzer. Skalierbar und fair.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Essential */}
              <div className="msp-card p-8 flex flex-col relative msp-card-hover">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    KMU Essential
                  </h3>
                  <p className="text-muted-foreground text-sm h-12">
                    Der solide IT-Grundschutz für kleine Betriebe – Updates,
                    Monitoring und verlässlicher Ansprechpartner im Hintergrund.
                  </p>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-foreground">
                      35 €
                    </span>
                    <span className="text-muted-foreground">
                      / Nutzer / Monat
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    zzgl. MwSt.
                  </p>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Monitoring & Patch-Management (Windows/Mac)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Managed Antivirus / EDR-Basis</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Fernwartungs-Zugriff (bei Bedarf)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Reaktionszeit &lt; 8 Std. (Mo-Fr)</span>
                  </li>
                </ul>
                <ContactModal defaultTopic="Anfrage: KMU Essential">
                  <Button className="w-full btn-outline" variant="outline">
                    Jetzt anfragen
                  </Button>
                </ContactModal>
              </div>

              {/* Standard */}
              <div className="msp-card p-8 flex flex-col relative border-primary shadow-lg scale-105 z-10 msp-card-hover">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                  Beliebt
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    KMU Standard
                  </h3>
                  <p className="text-muted-foreground text-sm h-12">
                    Rundum-Sorglos für den Arbeitsplatz: Inklusive Microsoft 365
                    Support, Backup und schnellerer Hilfe.
                  </p>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-foreground">
                      55 €
                    </span>
                    <span className="text-muted-foreground">
                      / Nutzer / Monat
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    zzgl. MwSt.
                  </p>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-start gap-2 text-sm font-medium">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Alles aus Essential</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Managed Backup (Cloud, 1 TB/User)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Microsoft 365 Verwaltung & Support</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>E-Mail-Security (Spam/Phishing-Filter)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Reaktionszeit &lt; 4 Std. (Mo-Fr)</span>
                  </li>
                </ul>
                <ContactModal defaultTopic="Anfrage: KMU Standard">
                  <Button className="w-full btn-primary">Jetzt anfragen</Button>
                </ContactModal>
              </div>

              {/* Premium */}
              <div className="msp-card p-8 flex flex-col relative msp-card-hover">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    KMU Premium
                  </h3>
                  <p className="text-muted-foreground text-sm h-12">
                    Maximale Sicherheit und Compliance-Unterstützung für höhere
                    Ansprüche (z. B. NIS2-Vorbereitung).
                  </p>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-foreground">
                      79 €
                    </span>
                    <span className="text-muted-foreground">
                      / Nutzer / Monat
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    zzgl. MwSt.
                  </p>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-start gap-2 text-sm font-medium">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Alles aus Standard</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Erweiterte Security (EDR/XDR, 24/7 Monitoring)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Schwachstellen-Scan (monatlich)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Security Awareness Training für Mitarbeiter</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Priorisierter Support (Fast Lane)</span>
                  </li>
                </ul>
                <ContactModal defaultTopic="Anfrage: KMU Premium">
                  <Button className="w-full btn-outline" variant="outline">
                    Jetzt anfragen
                  </Button>
                </ContactModal>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-muted-foreground mb-6">
                Sie haben mehr als 20 Mitarbeiter oder spezielle Anforderungen?
              </p>
              <ContactModal defaultTopic="Individuelles Angebot">
                <Button variant="outline" className="gap-2 btn-outline">
                  <Phone className="h-4 w-4" />
                  Individuelles Angebot anfordern
                </Button>
              </ContactModal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
