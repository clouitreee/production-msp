import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  CheckCircle2,
  Download,
  FileText,
  Loader2,
  ShieldCheck,
} from "lucide-react";
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
      type: "checklist_download",
      name: data.name,
      email: data.email,
      is_business: data.type === "business",
      message: data.concern,
      meta: {
        privacy_accepted: true,
        checklist_version: "2025_v1",
      },
    };

    try {
      // Simulate API call (or use real one if available)
      // For this specific task, we want to simulate the download flow
      console.log("Submitting payload:", payload);

      // Simulate network latency
      await new Promise(resolve => setTimeout(resolve, 1500));

      // If backend is ready, we would use this:
      /*
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error('Submission failed');
      */

      setIsSuccess(true);

      // Trigger download
      const link = document.createElement("a");
      link.href = "/downloads/it-sicherheits-checkliste-2025.pdf";
      link.download = "it-sicherheits-checkliste-2025.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Submission failed", err);
      setError(
        "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <StickyHeader />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-24 bg-slate-50 dark:bg-slate-950">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <FileText className="h-4 w-4" />
                Kostenloses Material
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                Sicherheits-Checkliste & Ressourcen
              </h1>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Praktische Hilfen, mit denen Sie selbst prüfen können, wie
                sicher Ihre IT wirklich ist – für Zuhause und für kleine
                Unternehmen.
              </p>
            </div>
          </div>
        </section>

        {/* Checklist Section */}
        <section className="py-16 lg:py-24 bg-white dark:bg-background">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Column: Description */}
                <div className="space-y-8">
                  <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
                    <div className="h-14 w-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                      <ShieldCheck className="h-8 w-8" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">
                      IT-Sicherheits-Checkliste 2025 – kostenlos
                    </h2>
                    <p className="text-muted-foreground text-lg mb-6">
                      In 15–20 Minuten sehen Sie, wo Sie bei Themen wie Updates,
                      Backups, WLAN und Betrugsschutz stehen – und welche Punkte
                      Sie als Nächstes angehen sollten.
                    </p>
                    <ul className="space-y-4">
                      {[
                        "Für Privathaushalte & kleine Unternehmen",
                        "Verständliche Fragen statt Fachchinesisch",
                        "Ideal als Vorbereitung für ein Gespräch mit Tech Hilfe Pro",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-[#FB923C] shrink-0 mt-0.5" />
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                    <h3 className="font-bold mb-2 flex items-center gap-2">
                      <Download className="h-5 w-5 text-primary" />
                      Warum herunterladen?
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Viele IT-Probleme lassen sich vermeiden, wenn man die
                      Grundlagen kennt. Diese Checkliste ist Ihr erster Schritt
                      zu mehr digitaler Sicherheit – ohne Kosten und ohne
                      Verpflichtung.
                    </p>
                  </div>
                </div>

                {/* Right Column: Form */}
                <div className="msp-card p-8 lg:p-10 relative overflow-hidden">
                  {isSuccess ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm z-10 p-8 text-center animate-in fade-in duration-500">
                      <div className="h-20 w-20 bg-[#F3F4F6] rounded-full flex items-center justify-center text-[#FB923C] mb-6 shadow-lg">
                        <CheckCircle2 className="h-10 w-10" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Vielen Dank!</h3>
                      <p className="text-muted-foreground mb-6">
                        Ihre Checkliste wird jetzt heruntergeladen. Sollte der
                        Download nicht automatisch starten, klicken Sie bitte{" "}
                        <a
                          href="/downloads/it-sicherheits-checkliste-2025.pdf"
                          download
                          className="text-primary underline hover:text-primary/80"
                        >
                          hier
                        </a>
                        .
                      </p>
                      <Button
                        variant="outline"
                        onClick={() => setIsSuccess(false)}
                      >
                        Zurück zum Formular
                      </Button>
                    </div>
                  ) : null}

                  <div className="mb-6">
                    <h3 className="text-xl font-bold">Jetzt herunterladen</h3>
                    <p className="text-sm text-muted-foreground">
                      Bitte füllen Sie das Formular aus, um den Download zu
                      starten.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <div className="grid gap-2">
                        <Label htmlFor="name">Vorname *</Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          placeholder="Max"
                        />
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="email">E-Mail-Adresse *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="max.mustermann@beispiel.de"
                        />
                      </div>

                      <div className="space-y-3 pt-2">
                        <Label>Ich bin *</Label>
                        <RadioGroup
                          defaultValue="private"
                          name="type"
                          required
                          className="flex flex-col space-y-1"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="private" id="private" />
                            <Label
                              htmlFor="private"
                              className="font-normal cursor-pointer"
                            >
                              Privatkunde / Haushalt
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="business" id="business" />
                            <Label
                              htmlFor="business"
                              className="font-normal cursor-pointer"
                            >
                              Unternehmen / Selbstständig
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="grid gap-2">
                        <Label htmlFor="concern">
                          Was ist aktuell Ihre größte IT-Sorge? (optional)
                        </Label>
                        <Textarea
                          id="concern"
                          name="concern"
                          placeholder="z.B. Angst vor Datenverlust, unsicheres WLAN..."
                          className="min-h-[80px]"
                        />
                      </div>

                      <div className="flex items-start space-x-2 pt-2">
                        <Checkbox id="privacy" required className="mt-1" />
                        <Label
                          htmlFor="privacy"
                          className="text-xs text-muted-foreground font-normal leading-snug cursor-pointer"
                        >
                          Ich bin damit einverstanden, dass Tech Hilfe Pro meine
                          Daten speichert, um mir die Checkliste zuzusenden und
                          mich bei Rückfragen zu kontaktieren. Es erfolgt kein
                          Newsletter-Spam.
                        </Label>
                      </div>
                    </div>

                    {error && (
                      <div className="text-sm text-red-500 text-center bg-red-50 p-2 rounded">
                        {error}
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="w-full shadow-lg shadow-primary/20"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Wird verarbeitet...
                        </>
                      ) : (
                        <>
                          <Download className="mr-2 h-4 w-4" />
                          Checkliste herunterladen
                        </>
                      )}
                    </Button>

                    <p className="text-[10px] text-center text-muted-foreground">
                      Ihre Daten werden ausschließlich zur Bereitstellung der
                      Checkliste und einer möglichen Kontaktaufnahme durch Tech
                      Hilfe Pro verwendet. Keine Weitergabe an Dritte.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
