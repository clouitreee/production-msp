import { ItHealthInputs, ItHealthResult, Recommendation } from "@/types/it-health";

const HOURLY_RATE = 50; // Average internal cost per hour in EUR
const MSP_MONTHLY_RATE = 55; // Based on KMU Standard plan

export function calculateItHealth(inputs: ItHealthInputs): ItHealthResult {
  // 1. Calculate Subscores
  const securityScore = calculateSecurityScore(inputs);
  const productivityScore = calculateProductivityScore(inputs);
  const complianceScore = calculateComplianceScore(inputs);

  // 2. Calculate Global Score (Weighted Average)
  // Security 40%, Productivity 30%, Compliance 30%
  const globalScore = Math.round(
    securityScore * 0.4 + productivityScore * 0.3 + complianceScore * 0.3
  );

  // 3. Determine Level & Label
  let level: 1 | 2 | 3 | 4 | 5 = 1;
  let label: "Kritisch" | "Risiko" | "Okay" | "Gut" | "Exzellent" = "Kritisch";

  if (globalScore >= 90) { level = 5; label = "Exzellent"; }
  else if (globalScore >= 75) { level = 4; label = "Gut"; }
  else if (globalScore >= 60) { level = 3; label = "Okay"; }
  else if (globalScore >= 40) { level = 2; label = "Risiko"; }
  else { level = 1; label = "Kritisch"; }

  // 4. Financial Impact
  // Annual hidden costs due to lost productivity
  const annualLostHours = inputs.employees * inputs.lostHoursPerEmployeePerWeek * 52;
  const currentHiddenCosts = annualLostHours * HOURLY_RATE;
  
  // Annual MSP cost
  const estimatedMspCost = inputs.employees * MSP_MONTHLY_RATE * 12;

  // Potential savings: Assuming MSP reduces lost time by 80%
  const reducedHiddenCosts = currentHiddenCosts * 0.2;
  const totalCostWithMsp = estimatedMspCost + reducedHiddenCosts;
  const potentialSavings = currentHiddenCosts - totalCostWithMsp;
  
  const roiMultiplier = estimatedMspCost > 0 
    ? parseFloat(((currentHiddenCosts - reducedHiddenCosts) / estimatedMspCost).toFixed(1))
    : 0;

  // 5. Generate Recommendations
  const recommendations = generateRecommendations(inputs, securityScore, complianceScore);

  return {
    scores: {
      global: globalScore,
      security: securityScore,
      productivity: productivityScore,
      compliance: complianceScore,
      level,
      label,
    },
    financial: {
      currentHiddenCosts,
      estimatedMspCost,
      potentialSavings: Math.max(0, potentialSavings), // Don't show negative savings
      roiMultiplier,
    },
    recommendations,
  };
}

function calculateSecurityScore(inputs: ItHealthInputs): number {
  let score = 0;
  
  // Backups (30 pts)
  if (inputs.backupFrequency === "daily") score += 20;
  else if (inputs.backupFrequency === "weekly") score += 10;
  if (inputs.backupTested) score += 10;

  // Antivirus (25 pts)
  if (inputs.antivirusType === "managed") score += 25;
  else if (inputs.antivirusType === "free") score += 10;

  // Updates (25 pts)
  if (inputs.updatePolicy === "automated") score += 25;
  else if (inputs.updatePolicy === "manual") score += 10;

  // MFA (20 pts)
  if (inputs.mfaUsage === "all") score += 20;
  else if (inputs.mfaUsage === "some") score += 10;

  return score;
}

function calculateProductivityScore(inputs: ItHealthInputs): number {
  // Lost Hours (0-5 hours scale) -> 50 pts
  // 0h = 50pts, 5h = 0pts
  const lostHoursScore = Math.max(0, 50 - (inputs.lostHoursPerEmployeePerWeek * 10));

  // Incidents (0-10 incidents scale) -> 50 pts
  // 0 = 50pts, 10 = 0pts
  const incidentsScore = Math.max(0, 50 - (inputs.incidentsPerYear * 5));

  return Math.round(lostHoursScore + incidentsScore);
}

function calculateComplianceScore(inputs: ItHealthInputs): number {
  let score = 0;

  // Documentation (40 pts)
  if (inputs.documentationStatus === "complete") score += 40;
  else if (inputs.documentationStatus === "partial") score += 20;

  // NIS2 (30 pts)
  if (inputs.nis2Awareness) score += 30;

  // DSGVO (30 pts)
  if (inputs.dsgvoAudited) score += 30;

  return score;
}

function generateRecommendations(
  inputs: ItHealthInputs, 
  secScore: number, 
  compScore: number
): Recommendation[] {
  const recs: Recommendation[] = [];

  if (inputs.backupFrequency !== "daily" || !inputs.backupTested) {
    recs.push({
      id: "backup",
      title: "Backup-Strategie optimieren",
      description: "Tägliche, geprüfte Backups sind Ihre Lebensversicherung gegen Datenverlust und Ransomware.",
      impact: "Hoch",
      category: "security"
    });
  }

  if (inputs.mfaUsage !== "all") {
    recs.push({
      id: "mfa",
      title: "Multi-Faktor-Authentifizierung (MFA) aktivieren",
      description: "MFA verhindert 99% aller Account-Übernahmen. Aktivieren Sie es für alle Nutzer.",
      impact: "Hoch",
      category: "security"
    });
  }

  if (inputs.antivirusType !== "managed") {
    recs.push({
      id: "edr",
      title: "Auf Managed Antivirus / EDR umsteigen",
      description: "Kostenlose Virenscanner erkennen moderne Bedrohungen oft zu spät. EDR reagiert proaktiv.",
      impact: "Mittel",
      category: "security"
    });
  }

  if (inputs.documentationStatus !== "complete") {
    recs.push({
      id: "docu",
      title: "IT-Dokumentation vervollständigen",
      description: "Fehlende Dokumentation führt zu langen Ausfallzeiten im Notfall.",
      impact: "Mittel",
      category: "compliance"
    });
  }

  if (inputs.lostHoursPerEmployeePerWeek > 2) {
    recs.push({
      id: "productivity",
      title: "IT-Störungen reduzieren",
      description: `Ihre Mitarbeiter verlieren wertvolle Zeit. Ein Managed Service Provider kann diese Ausfälle minimieren.`,
      impact: "Hoch",
      category: "productivity"
    });
  }

  return recs.slice(0, 4); // Limit to top 4 recommendations
}
