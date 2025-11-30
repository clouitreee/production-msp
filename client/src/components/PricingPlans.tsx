import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Check, Download, ShieldCheck, Clock, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function PricingPlans() {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section className="py-24 relative overflow-hidden">
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
              Jährlich <span className="ml-1.5 inline-block px-2 py-0.5 rounded-full bg-green-100 text-green-700 text-xs font-bold">-17%</span>
            </span>
          </div>
          
          {isYearly && (
            <p className="text-sm text-green-600 font-medium animate-in fade-in slide-in-from-top-2">
              🎉 Sie sparen 2 Monate im Jahresabo!
            </p>
          )}
          
          <p className="text-xs text-muted-foreground mt-4">
            Hinweis: Aktuell berechnen wir keine Umsatzsteuer (Kleinunternehmerregelung).
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
          {/* Basis Plan */}
          <div className="neumorphic-card p-8 flex flex-col relative">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Zuhause Basis</h3>
              <p className="text-sm text-muted-foreground h-10">Ideal für gelegentliche IT-Fragen und kleinere Probleme im Jahr.</p>
            </div>
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">{isYearly ? "24,17 €" : "29 €"}</span>
                <span className="text-muted-foreground">/ Monat</span>
              </div>
              {isYearly && <p className="text-xs text-muted-foreground mt-1">290 € jährlich abgerechnet</p>}
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex gap-3 text-sm">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <span>30 Min. Support / Monat</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Check className="h-5 w-5 text-green-500 shrink-0" />
                <span>Reaktionszeit &lt; 24h (Mo-Fr)</span>
              </li>
              <li className="flex gap-3 text-sm">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>1 Vor-Ort-Termin / Jahr inkl.*</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Check className="h-5 w-5 text-green-500 shrink-0" />
                <span>5% Rabatt auf weitere Termine</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/5 hover:text-primary">
              Basis wählen
            </Button>
          </div>

          {/* Komfort Plan (Highlighted) */}
          <div className="neumorphic-card p-8 flex flex-col relative border-primary shadow-xl shadow-primary/10 scale-105 z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium shadow-lg">
              Beliebteste Wahl
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2 text-primary">Zuhause Komfort</h3>
              <p className="text-sm text-muted-foreground h-10">Für alle, die regelmäßig Unterstützung im Home-Office brauchen.</p>
            </div>
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold text-primary">{isYearly ? "40,83 €" : "49 €"}</span>
                <span className="text-muted-foreground">/ Monat</span>
              </div>
              {isYearly && <p className="text-xs text-muted-foreground mt-1">490 € jährlich abgerechnet</p>}
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex gap-3 text-sm font-medium">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <span>60 Min. Support / Monat</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Check className="h-5 w-5 text-green-500 shrink-0" />
                <span>Bevorzugte Rückmeldung (&lt; 1 Tag)</span>
              </li>
              <li className="flex gap-3 text-sm font-medium">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>1 Vor-Ort-Termin / Jahr inkl.*</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Check className="h-5 w-5 text-green-500 shrink-0" />
                <span>10% Rabatt auf weitere Termine</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Check className="h-5 w-5 text-green-500 shrink-0" />
                <span>Minuten übertragbar (1 Monat)</span>
              </li>
            </ul>
            <Button size="lg" className="w-full shadow-lg shadow-primary/20">
              Komfort wählen
            </Button>
          </div>

          {/* Premium Plan */}
          <div className="neumorphic-card p-8 flex flex-col relative">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Zuhause Premium</h3>
              <p className="text-sm text-muted-foreground h-10">Maximale Ruhe für Vielnutzer und technikintensive Haushalte.</p>
            </div>
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">{isYearly ? "65,83 €" : "79 €"}</span>
                <span className="text-muted-foreground">/ Monat</span>
              </div>
              {isYearly && <p className="text-xs text-muted-foreground mt-1">790 € jährlich abgerechnet</p>}
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              <li className="flex gap-3 text-sm">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <span>120 Min. Support / Monat</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Check className="h-5 w-5 text-green-500 shrink-0" />
                <span>Höchste Priorität (Same Day)</span>
              </li>
              <li className="flex gap-3 text-sm">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>1 Vor-Ort-Termin / Jahr inkl.*</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Check className="h-5 w-5 text-green-500 shrink-0" />
                <span>20% Rabatt auf weitere Termine</span>
              </li>
              <li className="flex gap-3 text-sm">
                <ShieldCheck className="h-5 w-5 text-primary shrink-0" />
                <span>Jährlicher Sicherheits-Check</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full border-primary/20 hover:bg-primary/5 hover:text-primary">
              Premium wählen
            </Button>
          </div>
        </div>
        
        <p className="text-center text-xs text-muted-foreground mb-20 max-w-2xl mx-auto">
          * Vor-Ort-Termin inklusive nach 90 Tagen Abo-Laufzeit. Abrechnung Remote-Support in 5-Minuten-Blöcken.
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
