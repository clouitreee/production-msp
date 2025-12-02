import { Button } from "@/components/ui/button";
import { Check, ShieldCheck, Clock, Zap, Briefcase, Server } from "lucide-react";
import ContactModal from "./ContactModal";

export default function B2BServiceModels() {
  return (
    <section id="b2b-pricing" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            Service-Modelle für Unternehmen
          </h2>
          <p className="text-lg text-muted-foreground">
            Skalierbare IT-Betreuung für Selbstständige und KMU. 
            Von der punktuellen Hilfe bis zur vollständigen Managed IT.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* IT-Start */}
          <div className="msp-card p-8 flex flex-col relative msp-card-hover">
            <div className="mb-6">
              <div className="w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center mb-4 text-primary">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">
                IT-Start
              </h3>
              <p className="text-sm text-muted-foreground h-12">
                Flexibel und ohne Bindung. Ideal für kleine Projekte oder akute Notfälle.
              </p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex gap-3 text-sm text-foreground">
                <Check className="h-5 w-5 text-primary shrink-0" />
                <span>Keine monatliche Grundgebühr</span>
              </li>
              <li className="flex gap-3 text-sm text-foreground">
                <Check className="h-5 w-5 text-primary shrink-0" />
                <span>Abrechnung nach Aufwand (Stundenbasis)</span>
              </li>
              <li className="flex gap-3 text-sm text-foreground">
                <Check className="h-5 w-5 text-primary shrink-0" />
                <span>Schnelle Hilfe bei Ausfällen</span>
              </li>
              <li className="flex gap-3 text-sm text-foreground">
                <Check className="h-5 w-5 text-primary shrink-0" />
                <span>Auch als Stundenpaket buchbar (rabattiert)</span>
              </li>
            </ul>

            <div className="mt-auto">
              <ContactModal defaultTopic="Unverbindliches Erstgespräch">
                <Button className="w-full btn-outline">
                  Gespräch vereinbaren
                </Button>
              </ContactModal>
            </div>
          </div>

          {/* Managed IT Basis */}
          <div className="msp-card p-8 flex flex-col relative msp-card-hover border-primary/20">
            <div className="mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">
                Managed IT Basis
              </h3>
              <p className="text-sm text-muted-foreground h-12">
                Die solide Grundlage für Ihren Betrieb. Wir kümmern uns um Updates und Sicherheit.
              </p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex gap-3 text-sm text-foreground">
                <Zap className="h-5 w-5 text-primary shrink-0" />
                <span>Proaktives Monitoring Ihrer Systeme</span>
              </li>
              <li className="flex gap-3 text-sm text-foreground">
                <Check className="h-5 w-5 text-primary shrink-0" />
                <span>Automatisiertes Patch-Management</span>
              </li>
              <li className="flex gap-3 text-sm text-foreground">
                <Check className="h-5 w-5 text-primary shrink-0" />
                <span>Managed Antivirus & Firewall</span>
              </li>
              <li className="flex gap-3 text-sm text-foreground">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <span>Garantierte Reaktionszeiten (SLA)</span>
              </li>
              <li className="flex gap-3 text-sm text-foreground">
                <Check className="h-5 w-5 text-primary shrink-0" />
                <span>Fernwartung inklusive (Fair Use)</span>
              </li>
            </ul>

            <div className="mt-auto">
              <ContactModal defaultTopic="KMU Standard">
                <Button className="w-full btn-primary">
                  Angebot anfordern
                </Button>
              </ContactModal>
            </div>
          </div>

          {/* Managed IT Plus / NIS2 */}
          <div className="msp-card p-8 flex flex-col relative msp-card-hover border-accent shadow-lg shadow-accent/5">
            <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-3 py-1 rounded-bl-xl rounded-tr-3xl text-xs font-bold">
              NIS2 Ready
            </div>
            <div className="mb-6">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 text-accent">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-accent">
                Managed IT Plus
              </h3>
              <p className="text-sm text-muted-foreground h-12">
                Rundum-Sorglos-Schutz mit Fokus auf Compliance und maximale Sicherheit.
              </p>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex gap-3 text-sm font-medium text-foreground">
                <Check className="h-5 w-5 text-accent shrink-0" />
                <span>Alles aus Managed IT Basis</span>
              </li>
              <li className="flex gap-3 text-sm text-foreground">
                <ShieldCheck className="h-5 w-5 text-accent shrink-0" />
                <span>Erweiterter Security-Stack (EDR/XDR)</span>
              </li>
              <li className="flex gap-3 text-sm text-foreground">
                <Check className="h-5 w-5 text-accent shrink-0" />
                <span>NIS2-Compliance Unterstützung</span>
              </li>
              <li className="flex gap-3 text-sm text-foreground">
                <Check className="h-5 w-5 text-accent shrink-0" />
                <span>Backup-Management & Disaster Recovery</span>
              </li>
              <li className="flex gap-3 text-sm text-foreground">
                <Check className="h-5 w-5 text-accent shrink-0" />
                <span>Regelmäßige Strategie-Gespräche (vCIO)</span>
              </li>
            </ul>

            <div className="mt-auto">
              <ContactModal defaultTopic="NIS2 / IT-Sicherheit">
                <Button className="w-full btn-outline border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                  Beratungstermin buchen
                </Button>
              </ContactModal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
