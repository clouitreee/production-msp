export type QuestionId =
  | "employees"
  | "lostHours"
  | "incidents"
  | "backups"
  | "antivirus"
  | "updates"
  | "mfa"
  | "documentation"
  | "nis2"
  | "dsgvo";

export interface ItHealthInputs {
  // Step 1: Basics & Productivity
  employees: number;
  lostHoursPerEmployeePerWeek: number;
  incidentsPerYear: number;

  // Step 2: Security
  backupFrequency: "daily" | "weekly" | "monthly" | "none";
  backupTested: boolean;
  antivirusType: "managed" | "free" | "none";
  updatePolicy: "automated" | "manual" | "random";
  mfaUsage: "all" | "some" | "none";

  // Step 3: Compliance
  documentationStatus: "complete" | "partial" | "none";
  nis2Awareness: boolean;
  dsgvoAudited: boolean;
}

export interface ItHealthScores {
  global: number; // 0-100
  security: number; // 0-100
  productivity: number; // 0-100
  compliance: number; // 0-100
  level: 1 | 2 | 3 | 4 | 5;
  label: "Kritisch" | "Risiko" | "Okay" | "Gut" | "Exzellent";
}

export interface FinancialImpact {
  currentHiddenCosts: number; // Annual
  estimatedMspCost: number; // Annual
  potentialSavings: number; // Annual
  roiMultiplier: number; // e.g. 3.5x
}

export interface Recommendation {
  id: string;
  title: string;
  description: string;
  impact: "Hoch" | "Mittel" | "Niedrig";
  category: "security" | "productivity" | "compliance";
}

export interface ItHealthResult {
  scores: ItHealthScores;
  financial: FinancialImpact;
  recommendations: Recommendation[];
}
