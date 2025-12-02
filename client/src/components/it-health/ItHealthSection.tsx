import { useState, useMemo } from "react";
import { ItHealthInputs } from "@/types/it-health";
import { calculateItHealth } from "@/lib/it-health-calculator";
import ItHealthWizard from "./ItHealthWizard";
import ItHealthDashboard from "./ItHealthDashboard";
import { Activity } from "lucide-react";

const INITIAL_INPUTS: ItHealthInputs = {
  employees: 10,
  lostHoursPerEmployeePerWeek: 2,
  incidentsPerYear: 3,
  backupFrequency: "weekly",
  backupTested: false,
  antivirusType: "free",
  updatePolicy: "manual",
  mfaUsage: "some",
  documentationStatus: "partial",
  nis2Awareness: false,
  dsgvoAudited: false,
};

export default function ItHealthSection() {
  const [inputs, setInputs] = useState<ItHealthInputs>(INITIAL_INPUTS);

  const result = useMemo(() => calculateItHealth(inputs), [inputs]);

  return (
    <section id="it-health-score" className="py-24 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Activity className="w-4 h-4" />
            Interaktiver Check
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            Wie gesund ist Ihre IT wirklich?
          </h2>
          <p className="text-lg text-muted-foreground">
            Machen Sie den kostenlosen Selbsttest. Sehen Sie sofort, wo Risiken lauern und wie viel Geld Sie durch ineffiziente IT verlieren.
          </p>
        </div>

        <div className="grid xl:grid-cols-12 gap-8 items-start">
          {/* Left Column: Wizard (Input) */}
          <div className="xl:col-span-5 h-full">
            <ItHealthWizard inputs={inputs} setInputs={setInputs} />
          </div>

          {/* Right Column: Dashboard (Output) */}
          <div className="xl:col-span-7">
            <ItHealthDashboard result={result} />
          </div>
        </div>
      </div>
    </section>
  );
}
