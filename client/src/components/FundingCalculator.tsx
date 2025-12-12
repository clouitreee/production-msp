import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calculator, Euro, Info } from "lucide-react";
import ContactModal from "./ContactModal";

export default function FundingCalculator() {
  const [projectVolume, setProjectVolume] = useState(10000);
  const [companySize, setCompanySize] = useState("small");
  const [subsidy, setSubsidy] = useState(0);
  const [ownShare, setOwnShare] = useState(0);
  const [isEligible, setIsEligible] = useState(true);

  useEffect(() => {
    calculateFunding();
  }, [projectVolume, companySize]);

  const calculateFunding = () => {
    // Minimum project volume check
    if (projectVolume < 4000) {
      setIsEligible(false);
      setSubsidy(0);
      setOwnShare(projectVolume);
      return;
    }

    setIsEligible(true);

    // Simplified logic: 50% subsidy for all eligible sizes for now
    const subsidyRate = 0.5;
    const rawSubsidy = projectVolume * subsidyRate;

    // Cap at 15,000 EUR
    const cappedSubsidy = Math.min(rawSubsidy, 15000);

    setSubsidy(cappedSubsidy);
    setOwnShare(projectVolume - cappedSubsidy);
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="bg-card rounded-3xl border border-border/50 shadow-xl overflow-hidden">
      <div className="bg-primary/5 p-8 border-b border-primary/10">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
            <Calculator className="h-5 w-5" />
          </div>
          <h3 className="text-xl font-bold">
            Fördermittel-Check NRW: Wie viel Zuschuss ist für Sie drin?
          </h3>
        </div>
        <p className="text-sm text-muted-foreground ml-13">
          Berechnen Sie Ihren möglichen Zuschuss für IT-Sicherheitsprojekte
          (Schwerpunkt MID-Gutscheine).
        </p>
      </div>

      <div className="p-8 lg:p-10 grid lg:grid-cols-2 gap-12">
        {/* Inputs */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label htmlFor="volume" className="text-base font-medium">
                Projektvolumen (netto)
              </Label>
              <div className="relative w-32">
                <Input
                  id="volume"
                  type="number"
                  value={projectVolume}
                  onChange={e => setProjectVolume(Number(e.target.value))}
                  className="text-right pr-8 font-mono"
                  min={0}
                  max={40000}
                />
                <Euro className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
            </div>
            <Slider
              value={[projectVolume]}
              onValueChange={vals => setProjectVolume(vals[0])}
              max={40000}
              min={0}
              step={500}
              className="py-2"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>0 €</span>
              <span>40.000 €</span>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="size" className="text-base font-medium">
              Unternehmensgröße
            </Label>
            <Select value={companySize} onValueChange={setCompanySize}>
              <SelectTrigger id="size">
                <SelectValue placeholder="Bitte wählen" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="micro">
                  Kleinstunternehmen (bis 9 Mitarbeitende)
                </SelectItem>
                <SelectItem value="small">
                  Kleines Unternehmen (10–49 Mitarbeitende)
                </SelectItem>
                <SelectItem value="medium">
                  Mittleres Unternehmen (50–249 Mitarbeitende)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {!isEligible && (
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4 flex gap-3 items-start">
              <Info className="h-5 w-5 text-yellow-600 shrink-0 mt-0.5" />
              <p className="text-sm text-yellow-700 dark:text-yellow-400">
                Die förderfähigen Ausgaben müssen mindestens 4.000 € betragen,
                damit ein MID-Antrag möglich ist.
              </p>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="bg-muted/30 rounded-3xl p-8 flex flex-col justify-between border border-border/50">
          <div>
            <h4 className="text-lg font-bold mb-6 border-b pb-2">
              Ihr Ergebnis
            </h4>

            <div className="space-y-6">
              <div>
                <div className="text-sm text-muted-foreground mb-1">
                  Voraussichtliche Förderung
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-primary">
                  {formatCurrency(subsidy)}
                </div>
                {subsidy === 15000 && (
                  <span className="text-xs text-amber-600 font-medium bg-amber-50 px-2 py-0.5 rounded ml-1">
                    Maximalbetrag erreicht
                  </span>
                )}
              </div>

              <div>
                <div className="text-sm text-muted-foreground mb-1">
                  Ihr Eigenanteil
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-foreground">
                  {formatCurrency(ownShare)}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <p className="text-[10px] text-muted-foreground leading-tight">
              Hinweis: Dies ist eine vereinfachte Beispielrechnung auf Basis der
              aktuellen MID-Richtlinien in NRW. Die tatsächliche Förderhöhe
              hängt vom offiziellen Bewilligungsverfahren ab.
            </p>

            <div className="pt-4 border-t border-border/50">
              <p className="text-sm font-medium mb-3">
                Sie möchten prüfen, ob Ihr IT-Sicherheitsprojekt förderfähig
                ist?
              </p>
              <ContactModal defaultTopic="MID – Digitale Sicherheit / Förderanfrage">
                <Button className="w-full shadow-md">
                  Kostenlose Förderberatung anfragen
                </Button>
              </ContactModal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
