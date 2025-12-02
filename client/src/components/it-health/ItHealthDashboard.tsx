import { ItHealthResult } from "@/types/it-health";
import { Shield, Zap, FileText, TrendingUp, AlertTriangle, CheckCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactModal from "@/components/ContactModal";

interface Props {
  result: ItHealthResult;
}

export default function ItHealthDashboard({ result }: Props) {
  const { scores, financial, recommendations } = result;

  // Gauge Color Logic
  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-500";
    if (score >= 75) return "text-emerald-500";
    if (score >= 60) return "text-yellow-500";
    if (score >= 40) return "text-orange-500";
    return "text-red-500";
  };

  const getScoreBg = (score: number) => {
    if (score >= 90) return "bg-green-500";
    if (score >= 75) return "bg-emerald-500";
    if (score >= 60) return "bg-yellow-500";
    if (score >= 40) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <div className="space-y-8">
      {/* Top Row: Gauge & Subscores */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Global Score Gauge */}
        <div className="lg:col-span-1 bg-card rounded-3xl border border-border/50 shadow-xl p-6 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 opacity-20" />
          
          <h3 className="text-lg font-medium text-muted-foreground mb-4">IT Health Score</h3>
          
          <div className="relative w-48 h-48 flex items-center justify-center">
            {/* SVG Gauge Background */}
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                className="text-muted/20"
              />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="8"
                strokeDasharray="283"
                strokeDashoffset={283 - (283 * scores.global) / 100}
                className={`${getScoreColor(scores.global)} transition-all duration-1000 ease-out`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className={`text-5xl font-bold ${getScoreColor(scores.global)}`}>
                {scores.global}
              </span>
              <span className="text-sm font-medium text-muted-foreground mt-1">
                / 100
              </span>
            </div>
          </div>

          <div className={`mt-4 px-4 py-1 rounded-full text-sm font-bold ${getScoreBg(scores.global)} bg-opacity-10 ${getScoreColor(scores.global)}`}>
            {scores.label} (Level {scores.level})
          </div>
        </div>

        {/* Subscores */}
        <div className="lg:col-span-2 bg-card rounded-3xl border border-border/50 shadow-xl p-6 flex flex-col justify-center space-y-6">
          <h3 className="text-lg font-medium text-muted-foreground">Detail-Analyse</h3>
          
          {/* Security */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="font-medium">Sicherheit</span>
              </div>
              <span className="font-bold">{scores.security}/100</span>
            </div>
            <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all duration-1000" 
                style={{ width: `${scores.security}%` }}
              />
            </div>
          </div>

          {/* Productivity */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" />
                <span className="font-medium">Produktivität</span>
              </div>
              <span className="font-bold">{scores.productivity}/100</span>
            </div>
            <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-accent transition-all duration-1000" 
                style={{ width: `${scores.productivity}%` }}
              />
            </div>
          </div>

          {/* Compliance */}
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-500" />
                <span className="font-medium">Compliance</span>
              </div>
              <span className="font-bold">{scores.compliance}/100</span>
            </div>
            <div className="h-3 w-full bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-blue-500 transition-all duration-1000" 
                style={{ width: `${scores.compliance}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Financial Impact */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-2 text-red-600 dark:text-red-400">
            <AlertTriangle className="w-5 h-5" />
            <span className="font-medium text-sm">Versteckte IT-Kosten (Jahr)</span>
          </div>
          <div className="text-2xl font-bold text-red-700 dark:text-red-300">
            {financial.currentHiddenCosts.toLocaleString("de-DE")} €
          </div>
          <p className="text-xs text-red-600/80 mt-1">Durch Ausfälle & Wartezeiten</p>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-2 text-blue-600 dark:text-blue-400">
            <Shield className="w-5 h-5" />
            <span className="font-medium text-sm">Investition Managed IT</span>
          </div>
          <div className="text-2xl font-bold text-blue-700 dark:text-blue-300">
            {financial.estimatedMspCost.toLocaleString("de-DE")} €
          </div>
          <p className="text-xs text-blue-600/80 mt-1">Kalkuliert mit KMU Standard</p>
        </div>

        <div className="bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30 rounded-2xl p-5 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 opacity-10">
            <TrendingUp className="w-16 h-16 text-green-600" />
          </div>
          <div className="flex items-center gap-2 mb-2 text-green-600 dark:text-green-400">
            <TrendingUp className="w-5 h-5" />
            <span className="font-medium text-sm">Mögliche Einsparung</span>
          </div>
          <div className="text-2xl font-bold text-green-700 dark:text-green-300">
            {financial.potentialSavings.toLocaleString("de-DE")} €
          </div>
          <p className="text-xs text-green-600/80 mt-1">
            ROI: {financial.roiMultiplier}x
          </p>
        </div>
      </div>

      {/* Recommendations */}
      <div className="bg-muted/30 rounded-3xl border border-border/50 p-6">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <Info className="w-5 h-5 text-primary" />
          Handlungsempfehlungen
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          {recommendations.map((rec) => (
            <div key={rec.id} className="bg-background p-4 rounded-xl border border-border shadow-sm flex gap-3">
              <div className={`mt-1 shrink-0 w-2 h-2 rounded-full ${
                rec.impact === "Hoch" ? "bg-red-500" : 
                rec.impact === "Mittel" ? "bg-yellow-500" : "bg-blue-500"
              }`} />
              <div>
                <h4 className="font-bold text-sm">{rec.title}</h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  {rec.description}
                </p>
                <div className="mt-2 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-muted text-muted-foreground uppercase tracking-wider">
                  Impact: {rec.impact}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <ContactModal defaultTopic="IT Health Check Besprechung">
            <Button size="lg" className="btn-primary shadow-lg">
              Ergebnisse mit Experte besprechen
            </Button>
          </ContactModal>
        </div>
      </div>
    </div>
  );
}
