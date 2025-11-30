import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Check, Download, ShieldCheck, Clock, MapPin, Phone, CreditCard, X } from "lucide-react";
import { useState } from "react";

export default function PricingPlans() {
  const [isYearly, setIsYearly] = useState(true);

  const handleSubscribe = (plan: string) => {
    // In a real implementation, this would redirect to Stripe Checkout
    // For now, we'll just log the intent or show a placeholder alert
    const interval = isYearly ? 'yearly' : 'monthly';
    const checkoutUrlKey = `STRIPE_CHECKOUT_URL_${plan.toUpperCase()}_${interval.toUpperCase()}`;
    
    // We can't access process.env directly in client-side code unless exposed via Vite
    // But for this phase, we'll simulate the redirection
    console.log(`Redirecting to Stripe for ${plan} (${interval})...`);
    alert(`Weiterleitung zu Stripe Checkout für ${plan} (${interval})...\n(Dies ist eine Demo-Funktion)`);
  };

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/3 rounded-full blur-[120px] -z-10" />

      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Transparente Preise für jeden Bedarf</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Mit einem Tech Hilfe Pro Abo sparen Sie nicht nur Geld – Sie haben auch immer einen Ansprechpartner, der Ihre IT kennt und sofort helfen kann.
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className={`text-sm font-medium ${!isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>Monatlich</span>
            <Switch 
              checked={isYearly} 
              onCheckedChange={setIsYearly}
              className="data-[state=checked]:bg-primary"
            />
            <span className={`text-sm font-medium ${isYearly ? 'text-foreground' : 'text-muted-foreground'}`}>
              Jährlich – 2 Monate gratis
            </span>
          </div>
          
          <p className="text-sm text-muted-foreground mb-2">
            💡 Im Jahresabo zahlen Sie nur 10 Monate – und erhalten 12 Monate Service.
          </p>
          
          <p className="text-xs text-muted-foreground mt-4">
            Hinweis: Aktuell berechnen wir keine Umsatzsteuer (Kleinunternehmerregelung). In Zukunft verstehen sich alle Preise zzgl. gesetzlicher MwSt.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {/* Mini Plan (New) */}
          <div className="neumorphic-card p-8 flex flex-col relative">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Zuhause Mini</h3>
              <p className="text-sm text-muted-foreground h-12">Für alle, die nur ab und zu eine Frage haben und einen verlässlichen Ansprechpartner am Telefon möchten.</p>
            </div>
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">{isYearly ? "8,33 €" : "10,00 €"}</span>
                <span className="text-muted-foreground">/ Monat</span>
              </div>
              {isYearly && <p className="text-xs text-muted-foreground mt-1">100 € jährlich abgerechnet</p>}
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex gap-3 text-sm">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>15 Min. Telefon- oder Video-Beratung pro Monat</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Check className="h-5 w-5 text-green-500 shrink-0" />
                <span>Ideal für kurze Fragen, Betrugs-Checks und Kaufberatung</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Check className="h-5 w-5 text-green-500 shrink-0" />
                <span>Reaktionszeit &lt; 24 h (Mo–Fr, 8–17 Uhr)</span>
              </li>
              <li className="flex gap-3 text-sm text-muted-foreground">
                <X className="h-5 w-5 text-muted-foreground shrink-0" />
                <span>Keine geplanten Fernwartungs-Sitzungen, kein Vor-Ort-Termin</span>
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
                Für technische Eingriffe per Fernwartung oder Vor-Ort-Einsätze gelten die Standardpreise für Einzelkunden. Auf Wunsch ist jederzeit ein Upgrade auf Zuhause Basis oder Komfort möglich.
              </p>
              <Button 
                variant="outline" 
                className="w-full border-primary/20 hover:bg-primary/5 hover:text-primary"
                onClick={() => handleSubscribe('mini')}
              >
                Mini-Abo wählen
              </Button>
            </div>
          </div>

          {/* Basis Plan (Adjusted) */}
          <div className="neumorphic-card p-8 flex flex-col relative">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Zuhause Basis</h3>
              <p className="text-sm text-muted-foreground h-12">Für gelegentliche IT-Probleme im Jahr – mit eingeplantem Remote-Support und einem Vor-Ort-Termin.</p>
            </div>
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">{isYearly ? "15,83 €" : "19,00 €"}</span>
                <span className="text-muted-foreground">/ Monat</span>
              </div>
              {isYearly && <p className="text-xs text-muted-foreground mt-1">190 € jährlich abgerechnet</p>}
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex gap-3 text-sm">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <span>30 Min. Remote-Support pro Monat (Telefon + Fernwartung)</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Check className="h-5 w-5 text-green-500 shrink-0" />
                <span>Reaktionszeit &lt; 24 h (Mo–Fr, 8–17 Uhr)</span>
              </li>
              <li className="flex gap-3 text-sm">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>1 Vor-Ort-Termin pro Jahr inklusive*</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Check className="h-5 w-5 text-green-500 shrink-0" />
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
                *Vor-Ort-Termin inklusive nach 90 Tagen Abo-Laufzeit. Weitere Vor-Ort-Einsätze werden nach Zeitaufwand abgerechnet – abzüglich des jeweiligen Rabatt-Satzes.
              </p>
              <Button 
                variant="outline" 
                className="w-full border-primary/20 hover:bg-primary/5 hover:text-primary"
                onClick={() => handleSubscribe('basis')}
              >
                Basis wählen
              </Button>
            </div>
          </div>

          {/* Komfort Plan (Adjusted & Highlighted) */}
          <div className="neumorphic-card p-8 flex flex-col relative border-primary shadow-xl shadow-primary/10 scale-105 z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium shadow-lg">
              Beliebteste Wahl
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-primary">Zuhause Komfort</h3>
              <p className="text-sm text-muted-foreground h-12">Für Haushalte, die regelmäßig Unterstützung im digitalen Alltag benötigen – mit mehr Zeit und besserer Priorität.</p>
            </div>
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold text-primary">{isYearly ? "32,50 €" : "39,00 €"}</span>
                <span className="text-muted-foreground">/ Monat</span>
              </div>
              {isYearly && <p className="text-xs text-muted-foreground mt-1">390 € jährlich abgerechnet</p>}
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex gap-3 text-sm font-medium">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <span>60 Min. Remote-Support pro Monat (Telefon + Fernwartung)</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Check className="h-5 w-5 text-green-500 shrink-0" />
                <span>Bevorzugte Rückmeldung – in der Regel am selben Werktag</span>
              </li>
              <li className="flex gap-3 text-sm font-medium">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>1 Vor-Ort-Termin pro Jahr inklusive*</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Check className="h-5 w-5 text-green-500 shrink-0" />
                <span>10 % Rabatt auf weitere Vor-Ort-Termine</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <span>Abrechnung Remote-Support in 5-Minuten-Blöcken</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Check className="h-5 w-5 text-green-500 shrink-0" />
                <span>Nicht genutzte Minuten einmalig in den Folgemonat übertragbar (max. 60 Min zusätzlich)</span>
              </li>
            </ul>
            <div className="mt-auto">
              <p className="text-[10px] text-muted-foreground mb-4 leading-tight">
                *Vor-Ort-Termin inklusive nach 90 Tagen Abo-Laufzeit. Nicht genutzte Minuten können einmalig in den Folgemonat übernommen werden; ein dritter Monat kann nicht weiter aufbauen.
              </p>
              <Button 
                size="lg" 
                className="w-full shadow-lg shadow-primary/20"
                onClick={() => handleSubscribe('komfort')}
              >
                Komfort wählen
              </Button>
            </div>
          </div>
        </div>
        
        {/* Shared Footnote */}
        <p className="text-center text-xs text-muted-foreground mb-20 max-w-4xl mx-auto leading-relaxed">
          Abrechnung Remote-Support in 5-Minuten-Blöcken. Die im Abo enthaltenen Minuten sind für reguläre Support-Anfragen gedacht. Sehr umfangreiche Projekte (z. B. Neuaufbau von PCs, große Datenmigrationen, komplette Netzwerkinstallationen) werden nach individueller Vereinbarung separat angeboten. Die genauen Bedingungen finden Sie in unseren AGB.
        </p>

        {/* Ohne Abo Section */}
        <div className="max-w-4xl mx-auto mb-24">
          <div className="neumorphic-card p-8 md:p-10 bg-muted/30 border-dashed border-2 border-muted-foreground/20">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Kein Abo? Natürlich helfen wir auch einmalig.</h3>
                <p className="text-muted-foreground mb-6">
                  Sie möchten kein Abo abschließen? Kein Problem – Sie können unsere Leistungen auch als Einmalkunde buchen. Bitte beachten Sie, dass die Preise ohne Abo höher sind und keine Vor-Ort-Rabatte gelten.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex gap-2 text-sm">
                    <Phone className="h-4 w-4 text-primary mt-0.5" />
                    <span><strong>Remote-Support:</strong> 60 €/Stunde (Abrechnung je 30 Min.)</span>
                  </li>
                  <li className="flex gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-primary mt-0.5" />
                    <span><strong>Vor-Ort-Service:</strong> 80 €/Stunde (zzgl. Anfahrt)</span>
                  </li>
                </ul>
                <div className="bg-primary/5 p-4 rounded-lg text-sm text-primary/80 border border-primary/10">
                  <strong>Tipp:</strong> Mit einem Abo zahlen Sie für denselben Service deutlich weniger pro Einsatz, erhalten einen Vor-Ort-Termin pro Jahr inklusive und sparen zusätzlich 5–20 % auf weitere Besuche.
                </div>
              </div>
              <div className="md:w-64 shrink-0 flex flex-col gap-3">
                <Button variant="outline" className="w-full h-12 text-base">Einmal-Hilfe anfragen</Button>
              </div>
            </div>
          </div>
        </div>

        {/* RustDesk Section */}
        <div className="max-w-5xl mx-auto mt-24">
          <div className="neumorphic-card p-8 md:p-10 bg-muted/30 border-l-4 border-l-primary/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">Fernwartung mit RustDesk</h3>
            </div>

            <p className="text-muted-foreground mb-8 max-w-3xl">
              Für schnelle Remote-Hilfe verwenden wir <strong>RustDesk</strong> – eine sichere, Open-Source-Alternative zu TeamViewer.
            </p>

            <div className="grid md:grid-cols-2 gap-10 mb-8">
              {/* Left Column: How it works */}
              <div>
                <h4 className="font-bold mb-4 text-lg">So funktioniert’s:</h4>
                <ol className="space-y-3 list-decimal list-inside text-muted-foreground marker:text-primary marker:font-bold">
                  <li className="pl-2">Laden Sie RustDesk einmalig herunter (kostenlos)</li>
                  <li className="pl-2">Starten Sie die Software während unseres Support-Termins</li>
                  <li className="pl-2">Teilen Sie uns die angezeigte ID mit</li>
                  <li className="pl-2">Wir verbinden uns sicher mit Ihrem Gerät</li>
                </ol>
              </div>

              {/* Right Column: Security & Download */}
              <div>
                <h4 className="font-bold mb-4 text-lg">Ihre Sicherheit steht an erster Stelle:</h4>
                <ul className="space-y-2 mb-8">
                  {[
                    "Zugriff nur nach Ihrer aktiven Freigabe",
                    "Ende-zu-Ende-Verschlüsselung für die Verbindung",
                    "Open-Source-Software, geprüft von einer großen Community",
                    "Keine Registrierung oder Konto erforderlich",
                    "Sie behalten jederzeit die volle Kontrolle"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full sm:w-auto shadow-lg shadow-primary/20" size="lg" asChild>
                  <a href="https://rustdesk.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    RustDesk kostenlos herunterladen
                    <span className="sr-only">(öffnet in neuem Tab)</span>
                  </a>
                </Button>
              </div>
            </div>

            {/* Footer Note */}
            <div className="pt-6 border-t border-border/50 text-xs text-muted-foreground/80 italic">
              *RustDesk ist Open-Source-Software unter der AGPL-3.0-Lizenz und wird als Alternative zu TeamViewer und AnyDesk entwickelt. Wir verwenden RustDesk ausschließlich nach Ihrer ausdrücklichen Zustimmung während eines vereinbarten Support-Termins.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
