import { useState } from "react";
import { ItHealthInputs } from "@/types/it-health";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

interface Props {
  inputs: ItHealthInputs;
  setInputs: (inputs: ItHealthInputs) => void;
}

export default function ItHealthWizard({ inputs, setInputs }: Props) {
  const [step, setStep] = useState(1);

  const update = (key: keyof ItHealthInputs, value: any) => {
    setInputs({ ...inputs, [key]: value });
  };

  return (
    <div className="bg-card rounded-3xl border border-border/50 shadow-xl p-6 lg:p-8 h-full flex flex-col">
      {/* Progress Indicator */}
      <div className="flex items-center gap-2 mb-8">
        {[1, 2, 3].map((s) => (
          <div
            key={s}
            className={`h-2 flex-1 rounded-full transition-all duration-500 ${
              s <= step ? "bg-primary" : "bg-muted"
            }`}
          />
        ))}
      </div>

      <div className="flex-grow space-y-6">
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Basisdaten & Produktivität</h3>
              <p className="text-sm text-muted-foreground">
                Wie sieht Ihr aktueller IT-Alltag aus?
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Anzahl PC-Arbeitsplätze</Label>
                <Input
                  type="number"
                  min={1}
                  value={inputs.employees}
                  onChange={(e) => update("employees", parseInt(e.target.value) || 0)}
                />
              </div>

              <div className="space-y-2">
                <Label>Verlorene Stunden pro Woche (pro MA)</Label>
                <p className="text-xs text-muted-foreground">Durch langsame PCs, Abstürze oder Warten auf Support.</p>
                <div className="flex items-center gap-4">
                  <Input
                    type="range"
                    min={0}
                    max={10}
                    step={0.5}
                    value={inputs.lostHoursPerEmployeePerWeek}
                    onChange={(e) => update("lostHoursPerEmployeePerWeek", parseFloat(e.target.value))}
                    className="flex-1"
                  />
                  <span className="font-mono font-bold w-12 text-right">{inputs.lostHoursPerEmployeePerWeek} h</span>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Kritische IT-Ausfälle pro Jahr</Label>
                <p className="text-xs text-muted-foreground">Server down, Internet weg, E-Mail Störung...</p>
                <div className="flex items-center gap-4">
                  <Input
                    type="range"
                    min={0}
                    max={20}
                    step={1}
                    value={inputs.incidentsPerYear}
                    onChange={(e) => update("incidentsPerYear", parseInt(e.target.value))}
                    className="flex-1"
                  />
                  <span className="font-mono font-bold w-12 text-right">{inputs.incidentsPerYear}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">IT-Sicherheit</h3>
              <p className="text-sm text-muted-foreground">
                Wie schützen Sie Ihre Daten aktuell?
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Backup-Strategie</Label>
                <Select 
                  value={inputs.backupFrequency} 
                  onValueChange={(v: any) => update("backupFrequency", v)}
                >
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Täglich automatisiert</SelectItem>
                    <SelectItem value="weekly">Wöchentlich</SelectItem>
                    <SelectItem value="monthly">Monatlich / Sporadisch</SelectItem>
                    <SelectItem value="none">Kein regelmäßiges Backup</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2 border p-3 rounded-lg">
                <input
                  type="checkbox"
                  id="backupTested"
                  checked={inputs.backupTested}
                  onChange={(e) => update("backupTested", e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <Label htmlFor="backupTested" className="cursor-pointer">
                  Wir testen die Wiederherstellung regelmäßig
                </Label>
              </div>

              <div className="space-y-2">
                <Label>Virenschutz / Antivirus</Label>
                <RadioGroup 
                  value={inputs.antivirusType} 
                  onValueChange={(v: any) => update("antivirusType", v)}
                  className="flex flex-col space-y-1"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="managed" id="av-managed" />
                    <Label htmlFor="av-managed">Managed (Zentral überwacht)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="free" id="av-free" />
                    <Label htmlFor="av-free">Kostenlos / Standard (Windows Defender)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="none" id="av-none" />
                    <Label htmlFor="av-none">Kein Schutz / Unbekannt</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="space-y-2">
                <Label>Multi-Faktor-Authentifizierung (MFA)</Label>
                <Select 
                  value={inputs.mfaUsage} 
                  onValueChange={(v: any) => update("mfaUsage", v)}
                >
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Für alle Accounts aktiviert</SelectItem>
                    <SelectItem value="some">Teilweise (z.B. nur M365)</SelectItem>
                    <SelectItem value="none">Nicht genutzt</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Compliance & Recht</h3>
              <p className="text-sm text-muted-foreground">
                Sind Sie rechtlich auf der sicheren Seite?
              </p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label>IT-Dokumentation</Label>
                <Select 
                  value={inputs.documentationStatus} 
                  onValueChange={(v: any) => update("documentationStatus", v)}
                >
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="complete">Vollständig & Aktuell</SelectItem>
                    <SelectItem value="partial">Teilweise vorhanden</SelectItem>
                    <SelectItem value="none">Nicht vorhanden</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3 border p-3 rounded-lg">
                  <input
                    type="checkbox"
                    id="nis2"
                    checked={inputs.nis2Awareness}
                    onChange={(e) => update("nis2Awareness", e.target.checked)}
                    className="h-4 w-4 mt-1 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <div className="space-y-1">
                    <Label htmlFor="nis2" className="cursor-pointer font-medium">
                      NIS2-Betroffenheit geprüft
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Wir wissen, ob wir unter die neue EU-Richtlinie fallen.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 border p-3 rounded-lg">
                  <input
                    type="checkbox"
                    id="dsgvo"
                    checked={inputs.dsgvoAudited}
                    onChange={(e) => update("dsgvoAudited", e.target.checked)}
                    className="h-4 w-4 mt-1 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <div className="space-y-1">
                    <Label htmlFor="dsgvo" className="cursor-pointer font-medium">
                      DSGVO / AV-Verträge aktuell
                    </Label>
                    <p className="text-xs text-muted-foreground">
                      Verarbeitungsverzeichnisse und Verträge sind gepflegt.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8 pt-6 border-t border-border/50">
        <Button
          variant="ghost"
          onClick={() => setStep(Math.max(1, step - 1))}
          disabled={step === 1}
          className="text-muted-foreground"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Zurück
        </Button>

        {step < 3 ? (
          <Button onClick={() => setStep(step + 1)} className="btn-primary">
            Weiter <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        ) : (
          <div className="flex items-center gap-2 text-primary font-medium animate-pulse">
            <CheckCircle2 className="h-5 w-5" />
            Analyse fertig
          </div>
        )}
      </div>
    </div>
  );
}
