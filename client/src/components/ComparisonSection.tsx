import { Check, X, Info } from "lucide-react";

export default function ComparisonSection() {
  return (
    <section id="faq" className="py-24 bg-muted/30">
      <div className="container">
        {/* 1. Monthly vs Yearly Table */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Monatsabo vs. Jahresabo</h2>
            <p className="text-muted-foreground">
              Sehen Sie auf einen Blick, wie viel Sie mit der jährlichen
              Zahlweise sparen.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
            <table className="w-full text-sm text-left">
              <thead className="bg-muted/50 text-muted-foreground font-medium">
                <tr>
                  <th className="p-4 min-w-[150px]">Plan</th>
                  <th className="p-4">Minuten/Monat</th>
                  <th className="p-4">Monatlich</th>
                  <th className="p-4">Jahresabo</th>
                  <th className="p-4">Effektiver Preis</th>
                  <th className="p-4 text-accent">Ersparnis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-bold text-foreground">
                    Zuhause Mini
                  </td>
                  <td className="p-4 text-muted-foreground">15 Min</td>
                  <td className="p-4 text-muted-foreground">10,00 €</td>
                  <td className="p-4 text-muted-foreground">100 €</td>
                  <td className="p-4 text-muted-foreground">≈ 8,33 €</td>
                  <td className="p-4 font-bold text-accent">20 €</td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors">
                  <td className="p-4 font-bold text-foreground">
                    Zuhause Basis
                  </td>
                  <td className="p-4 text-muted-foreground">30 Min</td>
                  <td className="p-4 text-muted-foreground">19,00 €</td>
                  <td className="p-4 text-muted-foreground">190 €</td>
                  <td className="p-4 text-muted-foreground">≈ 15,83 €</td>
                  <td className="p-4 font-bold text-accent">38 €</td>
                </tr>
                <tr className="hover:bg-muted/20 transition-colors bg-primary/5">
                  <td className="p-4 font-bold text-primary">
                    Zuhause Komfort
                  </td>
                  <td className="p-4 text-muted-foreground">60 Min</td>
                  <td className="p-4 text-muted-foreground">39,00 €</td>
                  <td className="p-4 text-muted-foreground">390 €</td>
                  <td className="p-4 text-muted-foreground">≈ 32,50 €</td>
                  <td className="p-4 font-bold text-accent">78 €</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 2. With vs Without Subscription */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Lohnt sich ein Abo?</h2>
            <p className="text-muted-foreground">
              Der direkte Vergleich: Einmal-Service vs. unsere Abo-Modelle.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {/* Header Column (Hidden on mobile, shown as labels in cards) */}
            <div className="hidden md:flex flex-col gap-4 pt-14">
              <div className="h-12 flex items-center font-medium text-muted-foreground">
                Remote-Support
              </div>
              <div className="h-12 flex items-center font-medium text-muted-foreground">
                Telefon-Support
              </div>
              <div className="h-12 flex items-center font-medium text-muted-foreground">
                1 Vor-Ort-Termin
              </div>
              <div className="h-12 flex items-center font-medium text-muted-foreground">
                Rabatt Vor-Ort
              </div>
              <div className="h-12 flex items-center font-medium text-muted-foreground">
                Jahresabo-Vorteil
              </div>
            </div>

            {/* Ohne Abo Column */}
            <div className="msp-card p-6 flex flex-col gap-4 border-dashed border-muted-foreground/30 bg-transparent shadow-none">
              <div className="h-14 flex items-center justify-center font-bold text-lg border-b border-dashed border-muted-foreground/30 text-muted-foreground">
                Ohne Abo
              </div>
              <div className="h-12 flex items-center justify-center md:justify-start text-muted-foreground">
                <span className="md:hidden font-medium mr-2">Remote:</span> 60 €
                / Std.
              </div>
              <div className="h-12 flex items-center justify-center md:justify-start text-muted-foreground">
                <span className="md:hidden font-medium mr-2">Telefon:</span> 60
                € / Std.
              </div>
              <div className="h-12 flex items-center justify-center md:justify-start text-muted-foreground">
                <X className="h-5 w-5" />
              </div>
              <div className="h-12 flex items-center justify-center md:justify-start text-muted-foreground">
                <X className="h-5 w-5" />
              </div>
              <div className="h-12 flex items-center justify-center md:justify-start text-muted-foreground">
                <X className="h-5 w-5" />
              </div>
            </div>

            {/* Mini Column */}
            <div className="msp-card p-6 flex flex-col gap-4">
              <div className="h-14 flex items-center justify-center font-bold text-lg border-b border-border text-foreground">
                Mini
              </div>
              <div className="h-12 flex items-center justify-center md:justify-start font-medium text-muted-foreground">
                <span className="md:hidden font-medium mr-2">Remote:</span>{" "}
                <X className="h-4 w-4" />
              </div>
              <div className="h-12 flex items-center justify-center md:justify-start font-medium text-primary">
                <span className="md:hidden font-medium mr-2">Telefon:</span> 15
                Min inkl.
              </div>
              <div className="h-12 flex items-center justify-center md:justify-start text-muted-foreground">
                <X className="h-5 w-5" />
              </div>
              <div className="h-12 flex items-center justify-center md:justify-start text-muted-foreground">
                <X className="h-5 w-5" />
              </div>
              <div className="h-12 flex items-center justify-center md:justify-start text-sm text-muted-foreground">
                2 Monate gratis
              </div>
            </div>

            {/* Basis Column */}
            <div className="msp-card p-6 flex flex-col gap-4">
              <div className="h-14 flex items-center justify-center font-bold text-lg border-b border-border text-foreground">
                Basis
              </div>
              <div className="h-12 flex items-center justify-center md:justify-start font-medium text-primary">
                <span className="md:hidden font-medium mr-2">Remote:</span> 30
                Min inkl.
              </div>
              <div className="h-12 flex items-center justify-center md:justify-start">
                <Check className="h-5 w-5 text-emerald-600" />
              </div>
              <div className="h-12 flex items-center justify-center md:justify-start">
                <Check className="h-5 w-5 text-emerald-600" />
              </div>
              <div className="h-12 flex items-center justify-center md:justify-start font-bold text-accent">
                5 %
              </div>
              <div className="h-12 flex items-center justify-center md:justify-start text-sm text-muted-foreground">
                2 Monate gratis
              </div>
            </div>

            {/* Komfort Column */}
            <div className="msp-card p-6 flex flex-col gap-4 border-primary bg-primary/5">
              <div className="h-14 flex items-center justify-center font-bold text-lg border-b border-primary/20 text-primary">
                Komfort
              </div>
              <div className="h-12 flex items-center justify-center md:justify-start font-medium text-primary">
                <span className="md:hidden font-medium mr-2">Remote:</span> 60
                Min inkl.
              </div>
              <div className="h-12 flex items-center justify-center md:justify-start">
                <Check className="h-5 w-5 text-emerald-600" />
              </div>
              <div className="h-12 flex items-center justify-center md:justify-start">
                <Check className="h-5 w-5 text-emerald-600" />
              </div>
              <div className="h-12 flex items-center justify-center md:justify-start font-bold text-accent">
                10 %
              </div>
              <div className="h-12 flex items-center justify-center md:justify-start text-sm font-medium text-foreground">
                2 Monate gratis
              </div>
            </div>
          </div>
        </div>

        {/* 3. Persuasive Block */}
        <div className="max-w-4xl mx-auto">
          <div className="msp-card p-8 md:p-12 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>

            <div className="flex gap-6 items-start relative z-10">
              <div className="hidden md:flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
                <Info className="h-6 w-6" />
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  Warum sich das Jahresabo lohnt
                </h3>
                <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    Wenn Sie nur einmal im Jahr Hilfe brauchen, reicht oft eine
                    einzelne Fernwartung. Sobald Sie jedoch regelmäßig Fragen zu
                    PC, WLAN, Streaming oder Smart Home haben, lohnt sich ein
                    Jahresabo sehr schnell:
                  </p>
                  <p>
                    Sie erhalten nicht nur jeden Monat ein festes
                    Minutenkontingent, sondern auch einen Vor-Ort-Termin pro
                    Jahr inklusive und je nach Paket bis zu 10 % Rabatt auf
                    weitere Besuche. Durch die zwei kostenlosen Monate im
                    Jahresabo sinkt Ihr effektiver Monatspreis spürbar – bei
                    gleichbleibendem Service.
                  </p>
                  <p className="font-medium text-foreground pt-2">
                    Kurz gesagt: Wer seine Technik ernst nimmt und mindestens
                    ein bis zwei Mal im Quartal Unterstützung braucht, fährt mit
                    dem Jahresabo in der Regel deutlich günstiger als mit
                    Einzelleistungen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
