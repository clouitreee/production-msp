import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, CheckCircle2, Loader2, Download } from "lucide-react";
import { useState } from "react";

export default function Ressourcen() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Map form data to API schema
    const payload = {
      type: 'checklist_download',
      name: `${data.firstName} ${data.lastName || ''}`.trim(),
      email: data.email,
      is_business: data.type === 'business',
      meta: {
        source: data.source,
        privacy_accepted: true,
        checklist_version: '2025_v1'
      }
    };

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setIsSuccess(true);
    } catch (err) {
      console.error("Submission failed", err);
      setError("Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <StickyHeader />
      <main className="flex-grow pt-24 pb-20">
        <div className="container max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <FileText className="h-4 w-4" />
              Downloads & Hilfen
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">Ressourcen & Downloads</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              In unserem Ressourcenbereich finden Sie praktische Hilfen rund um IT-Sicherheit und digitalen Alltag – speziell für Privathaushalte und kleine Unternehmen in NRW.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Den Anfang macht unsere IT-Sicherheits-Checkliste 2025. In 15–20 Minuten sehen Sie, wie gut Sie in den Bereichen Updates, Backups, WLAN und Betrugsschutz aufgestellt sind – und wo es noch Lücken gibt.
            </p>
          </div>

          {/* Checklist Section */}
          <div className="neumorphic-card p-8 md:p-12 bg-white dark:bg-slate-900 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="grid lg:grid-cols-2 gap-12 items-start relative z-10">
              {/* Left: Description */}
              <div className="space-y-6">
                <div className="h-16 w-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-4">
                  <FileText className="h-8 w-8" />
                </div>
                <h2 className="text-2xl font-bold">IT-Sicherheits-Checkliste – kostenlos als PDF</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Laden Sie unsere Checkliste kostenlos herunter, drucken Sie sie aus oder füllen Sie sie digital aus. Sie hilft Ihnen, Schritt für Schritt zu prüfen, ob Ihre Geräte, Ihr Netzwerk und Ihre Daten ausreichend geschützt sind.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Im Gegenzug bitten wir Sie nur um Ihre E-Mail-Adresse – damit wir Ihnen die Checkliste zusenden und Sie bei Bedarf später über passende IT-Tipps oder Fördermöglichkeiten in NRW informieren können.
                </p>
                
                <div className="bg-muted/50 p-4 rounded-lg border border-border/50">
                  <h3 className="font-medium mb-2 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                    Das ist drin:
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Checkliste für PC, Laptop & Smartphone</li>
                    <li>• WLAN & Netzwerk-Sicherheit</li>
                    <li>• Backup-Strategien für Zuhause & Büro</li>
                    <li>• Schutz vor Phishing & Betrug</li>
                  </ul>
                </div>
              </div>

              {/* Right: Form */}
              <div className="bg-slate-50 dark:bg-slate-950/50 p-6 rounded-xl border border-border/50">
                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center space-y-6 animate-in fade-in zoom-in-95 duration-500">
                    <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 shadow-sm">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">Vielen Dank!</h3>
                      <p className="text-muted-foreground max-w-xs mx-auto">
                        Wir haben Ihre Anfrage erhalten. Die Checkliste wird Ihnen in Kürze per E-Mail zugesendet.
                      </p>
                    </div>
                    <Button variant="outline" onClick={() => setIsSuccess(false)}>
                      Zurück zum Formular
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="firstName">Vorname *</Label>
                        <Input id="firstName" name="firstName" required placeholder="Max" />
                      </div>
                      
                      <div className="grid gap-2">
                        <Label htmlFor="lastName">Nachname</Label>
                        <Input id="lastName" name="lastName" placeholder="Mustermann" />
                      </div>
                      
                      <div className="grid gap-2">
                        <Label htmlFor="email">E-Mail-Adresse *</Label>
                        <Input id="email" name="email" type="email" required placeholder="max.mustermann@beispiel.de" />
                      </div>

                      <div className="space-y-3 pt-2">
                        <Label>Ich bin...</Label>
                        <RadioGroup defaultValue="private" name="type" className="flex flex-col space-y-1">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="private" id="private" />
                            <Label htmlFor="private" className="font-normal cursor-pointer">Privatkunde</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="business" id="business" />
                            <Label htmlFor="business" className="font-normal cursor-pointer">Unternehmen / Organisation</Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="source">Wie sind Sie auf uns aufmerksam geworden?</Label>
                        <Select name="source">
                          <SelectTrigger>
                            <SelectValue placeholder="Bitte wählen..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="search">Suchmaschine (Google etc.)</SelectItem>
                            <SelectItem value="social">Social Media</SelectItem>
                            <SelectItem value="recommendation">Empfehlung</SelectItem>
                            <SelectItem value="flyer">Flyer / Werbung</SelectItem>
                            <SelectItem value="other">Sonstiges</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex items-start space-x-2 pt-2">
                        <Checkbox id="privacy" name="privacy" required className="mt-1" />
                        <Label htmlFor="privacy" className="text-xs text-muted-foreground font-normal leading-snug cursor-pointer">
                          Ich bin damit einverstanden, dass Tech Hilfe Pro meine Angaben speichert, um mir die IT-Sicherheits-Checkliste per E-Mail zuzusenden und mich bei Rückfragen zu kontaktieren. Weitere Informationen finden Sie in unserer Datenschutzerklärung.
                        </Label>
                      </div>
                    </div>

                    {error && (
                      <div className="text-sm text-red-500 text-center bg-red-50 p-2 rounded">
                        {error}
                      </div>
                    )}

                    <Button type="submit" className="w-full shadow-lg shadow-primary/20" size="lg" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Wird gesendet...
                        </>
                      ) : (
                        <>
                          <Download className="mr-2 h-4 w-4" />
                          Checkliste als PDF erhalten
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
