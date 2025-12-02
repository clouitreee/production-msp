import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";

interface ContactModalProps {
  children: React.ReactNode;
  defaultTopic?: string;
}

export default function ContactModal({
  children,
  defaultTopic,
}: ContactModalProps) {
  const [isOpen, setIsOpen] = useState(false);
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
      type: "b2c_contact",
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      is_business: false,
      meta: {
        customer_status: data.customer_status || "new",
        privacy_accepted: true,
        topic: data.topic,
      },
    };

    try {
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setIsSuccess(true);
    } catch (err) {
      console.error("Submission failed", err);
      setError(
        "Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsSuccess(false);
      setError(null);
    }, 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-10 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <DialogTitle className="text-2xl">Anfrage gesendet!</DialogTitle>
            <DialogDescription className="text-base max-w-xs mx-auto">
              Vielen Dank für Ihre Nachricht. Wir haben Ihre Anfrage erhalten
              und melden uns schnellstmöglich bei Ihnen.
            </DialogDescription>
            <Button onClick={resetForm} className="mt-4 min-w-[120px]">
              Schließen
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">
                Wie können wir helfen?
              </DialogTitle>
              <DialogDescription>
                Schildern Sie uns kurz Ihr Anliegen. Wir melden uns in der Regel
                innerhalb von 24 Stunden.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6 mt-2">
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="topic">Ich interessiere mich für:</Label>
                  <Select
                    name="topic"
                    defaultValue={
                      defaultTopic || "Unverbindliches Erstgespräch"
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Thema auswählen" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Unverbindliches Erstgespräch">
                        Unverbindliches Erstgespräch
                      </SelectItem>
                      <SelectItem value="KMU Essential">
                        KMU Essential
                      </SelectItem>
                      <SelectItem value="KMU Standard">KMU Standard</SelectItem>
                      <SelectItem value="KMU Premium">KMU Premium</SelectItem>
                      <SelectItem value="NIS2 / IT-Sicherheit">
                        NIS2 / IT-Sicherheit
                      </SelectItem>
                      <SelectItem value="Förderung in NRW">
                        Förderung in NRW
                      </SelectItem>
                      <SelectItem value="Sonstiges">Sonstiges</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Ihr Vor- und Nachname"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">E-Mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="ihre.email@beispiel.de"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="phone">Telefonnummer (optional)</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Für Rückrufe (optional)"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="message">
                    Kurzbeschreibung des Problems *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Worum geht es? (z.B. Drucker druckt nicht, WLAN langsam...)"
                    className="min-h-[100px]"
                  />
                </div>

                <div className="space-y-3 pt-2">
                  <Label>Sind Sie bereits Kunde?</Label>
                  <RadioGroup
                    defaultValue="new"
                    name="customer_status"
                    className="flex flex-col space-y-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="existing" id="existing" />
                      <Label
                        htmlFor="existing"
                        className="font-normal cursor-pointer"
                      >
                        Ich bin bereits Abo-Kunde
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="new" id="new" />
                      <Label
                        htmlFor="new"
                        className="font-normal cursor-pointer"
                      >
                        Ich habe noch kein Abo
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="flex items-start space-x-2 pt-2">
                  <Checkbox id="privacy" required className="mt-1" />
                  <Label
                    htmlFor="privacy"
                    className="text-xs text-muted-foreground font-normal leading-snug cursor-pointer"
                  >
                    Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und
                    Zuordnung für eventuelle Rückfragen dauerhaft gespeichert
                    werden. Hinweis: Diese Einwilligung können Sie jederzeit mit
                    Wirkung für die Zukunft widerrufen.
                  </Label>
                </div>
              </div>

              {error && (
                <div className="text-sm text-red-500 text-center bg-red-50 p-2 rounded">
                  {error}
                </div>
              )}

              <div className="flex flex-col gap-3 pt-2">
                <div className="text-xs text-center text-muted-foreground bg-muted/50 py-2 rounded-md">
                  Supportzeiten: Mo–Fr, 8:00–17:00 Uhr
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Wird gesendet...
                    </>
                  ) : (
                    "Anfrage absenden"
                  )}
                </Button>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
