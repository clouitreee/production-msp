import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Check,
  Download,
  ShieldCheck,
  Clock,
  MapPin,
  Phone,
  CreditCard,
  X,
} from "lucide-react";
import { useState } from "react";

export default function PricingPlans() {
  const [isYearly, setIsYearly] = useState(true);

  const handleSubscribe = (plan: string) => {
    // In a real implementation, this would redirect to Stripe Checkout
    // For now, we'll just log the intent or show a placeholder alert
    const interval = isYearly ? "yearly" : "monthly";
    const checkoutUrlKey = `STRIPE_CHECKOUT_URL_${plan.toUpperCase()}_${interval.toUpperCase()}`;

    // We can't access process.env directly in client-side code unless exposed via Vite
    // But for this phase, we'll simulate the redirection
    console.log(`Redirecting to Stripe for ${plan} (${interval})...`);
    alert(
      `Weiterleitung zu Stripe Checkout für ${plan} (${interval})...\n(Dies ist eine Demo-Funktion)`
    );
  };

  return (
    <section
      id="pricing"
      className="py-24 relative overflow-hidden bg-background"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/3 rounded-full blur-[120px] -z-10" />

      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-foreground">
            Transparente Preise für jeden Bedarf
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Mit einem Tech Hilfe Pro Abo sparen Sie nicht nur Geld – Sie haben
            auch immer einen Ansprechpartner, der Ihre IT kennt und sofort
            helfen kann.
          </p>

          <div className="flex items-center justify-center gap-4 mb-4">
            <span
              className={`text-sm font-medium ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}
            >
              Monatlich
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-primary"
            />
            <span
              className={`text-sm font-medium ${isYearly ? "text-foreground" : "text-muted-foreground"}`}
            >
              Jährlich – 2 Monate gratis
            </span>
          </div>

          <p className="text-sm text-muted-foreground mb-2">
            💡 Im Jahresabo zahlen Sie nur 10 Monate – und erhalten 12 Monate
            Service.
          </p>

          <p className="text-xs text-muted-foreground mt-4">
            Hinweis: Aktuell berechnen wir keine Umsatzsteuer
            (Kleinunternehmerregelung). In Zukunft verstehen sich alle Preise
            zzgl. gesetzlicher MwSt.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {/* Mini Plan (New) */}
          <div className="msp-card p-8 flex flex-col relative msp-card-hover">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-foreground">
                Zuhause Mini
              </h3>
              <p className="text-sm text-muted-foreground h-12">
                Für alle, die nur ab und zu eine Frage haben und einen
                verlässlichen Ansprechpartner am Telefon möchten.
              </p>
            </div>
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-foreground">
                  {isYearly ? "8,33 €" : "10,00 €"}
                </span>
                <span className="text-muted-foreground">/ Monat</span>
              </div>
              {isYearly && (
                <p className="text-xs text-muted-foreground mt-1">
                  100 € jährlich abgerechnet
                </p>
              )}
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex gap-3 text-sm text-foreground">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>15 Min. Telefon- oder Video-Beratung pro Monat</span>
              </li>
              <li className="flex gap-3 text-sm text-foreground">
                <Check className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>
                  Ideal für kurze Fragen, Betrugs-Checks und Kaufberatung
                </span>
              </li>
              <li className="flex gap-3 text-sm text-foreground">
                <Check className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>Reaktionszeit &lt; 24 h (Mo–Fr, 8–17 Uhr)</span>
              </li>
              <li className="flex gap-3 text-sm text-muted-foreground">
                <X className="h-5 w-5 text-muted-foreground shrink-0" />
                <span>
                  Keine geplanten Fernwartungs-Sitzungen, kein Vor-Ort-Termin
                </span>
              </li>
              <li className="flex gap-3 text-sm text-muted-foreground">
                <Clock className="h-5 w-5 text-muted-foreground shrink-0" />
                <span>Abrechnung in 5-Minuten-Blöcken</span>
              </li>
              <li className="flex gap-3 text-sm text-muted-foreground">
                <X className="h-5 w-5 text-muted-foreground shrink-0" />
                <span>Nicht genutzte Minuten verfallen am Monatsende</span>
              </li>
            </ul>
            <div className="mt-auto">
              <p className="text-[10px] text-muted-foreground mb-4 leading-tight">
                Für technische Eingriffe per Fernwartung oder Vor-Ort-Einsätze
                gelten die Standardpreise für Einzelkunden. Auf Wunsch ist
                jederzeit ein Upgrade auf Zuhause Basis oder Komfort möglich.
              </p>
              <Button
                className="w-full btn-outline"
                onClick={() => handleSubscribe("mini")}
              >
                Mini-Abo wählen
              </Button>
            </div>
          </div>

          {/* Basis Plan (Adjusted) */}
          <div className="msp-card p-8 flex flex-col relative msp-card-hover">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-foreground">
                Zuhause Basis
              </h3>
              <p className="text-sm text-muted-foreground h-12">
                Für gelegentliche IT-Probleme im Jahr – mit eingeplantem
                Remote-Support und einem Vor-Ort-Termin.
              </p>
            </div>
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-foreground">
                  {isYearly ? "15,83 €" : "19,00 €"}
                </span>
                <span className="text-muted-foreground">/ Monat</span>
              </div>
              {isYearly && (
                <p className="text-xs text-muted-foreground mt-1">
                  190 € jährlich abgerechnet
                </p>
              )}
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex gap-3 text-sm text-foreground">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <span>
                  30 Min. Remote-Support pro Monat (Telefon + Fernwartung)
                </span>
              </li>
              <li className="flex gap-3 text-sm text-foreground">
                <Check className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>Reaktionszeit &lt; 24 h (Mo–Fr, 8–17 Uhr)</span>
              </li>
              <li className="flex gap-3 text-sm text-foreground">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>1 Vor-Ort-Termin pro Jahr inklusive*</span>
              </li>
              <li className="flex gap-3 text-sm text-foreground">
                <Check className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>5 % Rabatt auf weitere Vor-Ort-Termine</span>
              </li>
              <li className="flex gap-3 text-sm text-muted-foreground">
                <Clock className="h-5 w-5 text-muted-foreground shrink-0" />
                <span>Abrechnung Remote-Support in 5-Minuten-Blöcken</span>
              </li>
              <li className="flex gap-3 text-sm text-muted-foreground">
                <X className="h-5 w-5 text-muted-foreground shrink-0" />
                <span>Minuten nicht übertragbar – Planung pro Monat</span>
              </li>
            </ul>
            <div className="mt-auto">
              <p className="text-[10px] text-muted-foreground mb-4 leading-tight">
                *Vor-Ort-Termin inklusive nach 90 Tagen Abo-Laufzeit. Weitere
                Vor-Ort-Einsätze werden nach Zeitaufwand abgerechnet – abzüglich
                des jeweiligen Rabatt-Satzes.
              </p>
              <Button
                className="w-full btn-outline"
                onClick={() => handleSubscribe("basis")}
              >
                Basis wählen
              </Button>
            </div>
          </div>

          {/* Komfort Plan (Adjusted & Highlighted) */}
          <div className="msp-card p-8 flex flex-col relative border-primary shadow-lg shadow-primary/10 scale-105 z-10 bg-card">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium shadow-md">
              Beliebteste Wahl
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-primary">
                Zuhause Komfort
              </h3>
              <p className="text-sm text-muted-foreground h-12">
                Für Haushalte, die regelmäßig Unterstützung im digitalen Alltag
                benötigen – mit mehr Zeit und besserer Priorität.
              </p>
            </div>
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold text-primary">
                  {isYearly ? "32,50 €" : "39,00 €"}
                </span>
                <span className="text-muted-foreground">/ Monat</span>
              </div>
              {isYearly && (
                <p className="text-xs text-muted-foreground mt-1">
                  390 € jährlich abgerechnet
                </p>
              )}
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex gap-3 text-sm font-medium text-foreground">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <span>
                  60 Min. Remote-Support pro Monat (Telefon + Fernwartung)
                </span>
              </li>
              <li className="flex gap-3 text-sm text-foreground">
                <Check className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>
                  Bevorzugte Rückmeldung – in der Regel am selben Werktag
                </span>
              </li>
              <li className="flex gap-3 text-sm font-medium text-foreground">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>1 Vor-Ort-Termin pro Jahr inklusive*</span>
              </li>
              <li className="flex gap-3 text-sm text-foreground">
                <Check className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>10 % Rabatt auf weitere Vor-Ort-Termine</span>
              </li>
              <li className="flex gap-3 text-sm text-foreground">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <span>Abrechnung Remote-Support in 5-Minuten-Blöcken</span>
              </li>
              <li className="flex gap-3 text-sm text-foreground">
                <Check className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>
                  Nicht genutzte Minuten einmalig in den Folgemonat übertragbar
                  (max. 60 Min zusätzlich)
                </span>
              </li>
            </ul>
            <div className="mt-auto">
              <p className="text-[10px] text-muted-foreground mb-4 leading-tight">
                *Vor-Ort-Termin inklusive nach 90 Tagen Abo-Laufzeit. Nicht
                genutzte Minuten können einmalig in den Folgemonat übernommen
                werden; ein dritter Monat kann nicht weiter aufbauen.
              </p>
              <Button
                size="lg"
                className="w-full btn-primary shadow-lg shadow-primary/20"
                onClick={() => handleSubscribe("komfort")}
              >
                Komfort wählen
              </Button>
            </div>
          </div>
        </div>

        {/* Shared Footnote */}
        <p className="text-center text-xs text-muted-foreground mb-20 max-w-4xl mx-auto leading-relaxed">
          Alle Preise sind Endpreise (gemäß Kleinunternehmerregelung keine
          MwSt-Ausweisung). Mindestvertragslaufzeit 12 Monate. Kündigungsfrist 1
          Monat zum Laufzeitende.
          <br />
          Nicht genutzte Inklusivleistungen (z. B. Vor-Ort-Termin) verfallen am
          Ende des Vertragsjahres und werden nicht ausgezahlt.
          <br />
          Vor-Ort-Termine gelten für den Raum Köln (linksrheinisch) und Neuss
          (bis 15 km ab Firmensitz). Darüber hinaus fallen Anfahrtskosten an.
        </p>
      </div>
    </section>
  );
}
