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
import { CheckCircle2, Loader2 } from "lucide-react";
import { useState } from "react";
import { submitForm } from "@/lib/mockSubmit";

interface ContactModalProps {
  children: React.ReactNode;
}

export default function ContactModal({ children }: ContactModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const result = await submitForm(data, "contact");
      if (result.success) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsOpen(false);
    setTimeout(() => {
      setIsSuccess(false);
    }, 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-10 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
            <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <DialogTitle className="text-2xl">Anfrage gesendet!</DialogTitle>
            <DialogDescription className="text-base max-w-xs mx-auto">
              Vielen Dank für Ihre Nachricht. Wir haben Ihre Anfrage erhalten und melden uns schnellstmöglich bei Ihnen.
            </DialogDescription>
            <Button onClick={resetForm} className="mt-4 min-w-[120px]">
              Schließen
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Wie können wir helfen?</DialogTitle>
              <DialogDescription>
                Schildern Sie uns kurz Ihr Anliegen. Wir melden uns in der Regel innerhalb von 24 Stunden.
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-6 mt-2">
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" required placeholder="Ihr Vor- und Nachname" />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="email">E-Mail *</Label>
                  <Input id="email" type="email" required placeholder="ihre.email@beispiel.de" />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="phone">Telefonnummer (optional)</Label>
                  <Input id="phone" type="tel" placeholder="Für Rückrufe (optional)" />
                </div>
                
                <div className="grid gap-2">
                  <Label htmlFor="message">Kurzbeschreibung des Problems *</Label>
                  <Textarea 
                    id="message" 
                    required 
                    placeholder="Worum geht es? (z.B. Drucker druckt nicht, WLAN langsam...)" 
                    className="min-h-[100px]"
                  />
                </div>

                <div className="space-y-3 pt-2">
                  <Label>Sind Sie bereits Kunde?</Label>
                  <RadioGroup defaultValue="new" className="flex flex-col space-y-1">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="existing" id="existing" />
                      <Label htmlFor="existing" className="font-normal cursor-pointer">Ich bin bereits Abo-Kunde</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="new" id="new" />
                      <Label htmlFor="new" className="font-normal cursor-pointer">Ich habe noch kein Abo</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="flex items-start space-x-2 pt-2">
                  <Checkbox id="privacy" required className="mt-1" />
                  <Label htmlFor="privacy" className="text-xs text-muted-foreground font-normal leading-snug cursor-pointer">
                    Ich stimme zu, dass meine Angaben zur Kontaktaufnahme und Zuordnung für eventuelle Rückfragen dauerhaft gespeichert werden. 
                    Hinweis: Diese Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.
                  </Label>
                </div>
              </div>

              <div className="flex flex-col gap-3 pt-2">
                <div className="text-xs text-center text-muted-foreground bg-muted/50 py-2 rounded-md">
                  Supportzeiten: Mo–Fr, 8:00–17:00 Uhr
                </div>
                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
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
