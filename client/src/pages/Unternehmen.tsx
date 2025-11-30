import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ShieldCheck, Server, Users, ArrowRight, FileText, Euro, MonitorCheck, Lock, LifeBuoy } from "lucide-react";
import ContactModal from "@/components/ContactModal";

export default function Unternehmen() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <StickyHeader />
      <main className="flex-grow">
        {/* B2B Hero Section */}
        <section className="relative overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-32 bg-slate-50 dark:bg-slate-950">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <ShieldCheck className="h-4 w-4" />
                Managed IT-Services für KMU
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
                Für Unternehmen & KMU – <br />
                <span className="text-primary">Managed IT, die einfach funktioniert</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Tech Hilfe Pro übernimmt für kleine und mittlere Unternehmen in Köln, Neuss und ganz NRW die Rolle einer ausgelagerten IT-Abteilung. Wir kümmern uns um Updates, Backups, Zugriffsrechte und sichere Fernwartung – damit Sie sich auf Ihr Kerngeschäft konzentrieren können.
              </p>

              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2 bg-white dark:bg-slate-900 px-4 py-2 rounded-full shadow-sm border">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>Managed IT-Services für PCs, Laptops, Server & Netzwerk</span>
                </div>
                <div className="flex items-center gap-2 bg-white dark:bg-slate-900 px-4 py-2 rounded-full shadow-sm border">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>Sichere Fernwartung mit selbst gehosteten Tools (z. B. MeshCentral)</span>
                </div>
                <div className="flex items-center gap-2 bg-white dark:bg-slate-900 px-4 py-2 rounded-full shadow-sm border">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>Unterstützung bei NIS2-Grundlagen und Dokumentation</span>
                </div>
                <div className="flex items-center gap-2 bg-white dark:bg-slate-900 px-4 py-2 rounded-full shadow-sm border">
                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                  <span>Bis zu 50 % Förderung in NRW für IT-Sicherheitsmaßnahmen möglich</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                <ContactModal defaultTopic="Unverbindliches Erstgespräch">
                  <Button size="lg" className="text-base px-8 h-12 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
                    Jetzt unverbindliches Erstgespräch anfragen
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </ContactModal>
                <Button variant="outline" size="lg" className="text-base h-12" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                  Leistungen & Pakete ansehen
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* A) Unsere Leistungen */}
        <section className="py-24 bg-white dark:bg-background">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Unsere Leistungen für Unternehmen</h2>
              <p className="text-muted-foreground text-lg">
                Wir unterstützen Sie dort, wo kleine und mittlere Unternehmen am meisten Zeit und Nerven verlieren – mit klaren, wiederholbaren Prozessen statt Ad-hoc-Feuerwehr. Unsere Managed Services sorgen dafür, dass Ihre IT stabil läuft, Sicherheitsgrundlagen erfüllt sind und Sie im Notfall einen Ansprechpartner haben, der Ihre Umgebung kennt.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: LifeBuoy, title: "Remote-Support & Helpdesk", desc: "Schnelle Hilfe bei IT-Problemen per Fernwartung oder vor Ort." },
                { icon: MonitorCheck, title: "Monitoring & Patch-Management", desc: "Proaktive Überwachung und Updates für Ihre Systeme." },
                { icon: Server, title: "Backup & Wiederherstellung", desc: "Sichere Datensicherung und Notfallwiederherstellung." },
                { icon: Users, title: "Benutzer- & Rechteverwaltung", desc: "Verwaltung von Benutzerkonten und Zugriffsberechtigungen." },
                { icon: Lock, title: "IT-Sicherheit & E-Mail-Schutz", desc: "Schutz vor Viren, Phishing und Cyberangriffen." },
                { icon: FileText, title: "Beratung & Planung", desc: "Strategische IT-Beratung für Modernisierung, Home-Office und Cloud." }
              ].map((item, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all">
                  <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* B) NIS2 & IT-Sicherheit */}
        <section className="py-24 bg-slate-50 dark:bg-slate-950">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="flex-1 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-xs font-bold">
                  <ShieldCheck className="h-3 w-3" />
                  NIS2 Compliance
                </div>
                <h2 className="text-3xl font-bold">NIS2 & IT-Sicherheit – pragmatisch umgesetzt</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Mit NIS2 steigen die Anforderungen an Cybersecurity – auch für viele mittelständische Betriebe und bestimmte Branchen. Wir ersetzen keine Anwaltskanzlei und keine zertifizierte Prüfstelle, aber wir helfen Ihnen, die technischen Grundlagen zu schaffen: regelmäßige Updates, überprüfte Backups, klare Zugriffsrechte und einfache Dokumentation. So senken Sie Ihr Risiko und sind besser auf Prüfungen vorbereitet, ohne dass der Büroalltag stillsteht.
                </p>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-r-lg">
                  <p className="text-sm text-yellow-800 dark:text-yellow-200 font-medium">
                    Hinweis: Wir bieten keine Rechtsberatung und keine formelle Zertifizierung an, sondern unterstützen Sie bei der praktischen Umsetzung technischer Maßnahmen.
                  </p>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="relative w-full max-w-md aspect-square bg-white dark:bg-slate-900 rounded-2xl shadow-xl border p-8 flex items-center justify-center">
                  <ShieldCheck className="w-32 h-32 text-primary/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="text-4xl font-bold text-primary">NIS2</div>
                      <div className="text-sm font-medium text-muted-foreground">Ready</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* C) Förderung NRW */}
        <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm">
                <Euro className="h-4 w-4" />
                MID – Digitale Sicherheit
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold">Förderung in NRW – bis zu 50 % Zuschuss nutzen</h2>
              <p className="text-primary-foreground/90 text-lg leading-relaxed">
                Über Förderprogramme in NRW (z. B. im Bereich ‚Digitale Sicherheit‘) können kleine Unternehmen einen Zuschuss von bis zu 50 % für IT-Sicherheitsprojekte erhalten – etwa für Beratung, die Implementierung von Backups, Sicherheitssoftware oder Schulungen. Wir unterstützen Sie bei der technischen Umsetzung und können gemeinsam prüfen, ob eine Förderung für Ihr Vorhaben infrage kommt.
              </p>
              <ContactModal defaultTopic="Förderung in NRW">
                <Button size="lg" variant="secondary" className="text-primary font-bold shadow-lg">
                  Mehr zur Förderung erfahren
                </Button>
              </ContactModal>
            </div>
          </div>
        </section>

        {/* D) B2B Pricing */}
        <section id="pricing" className="py-24 bg-slate-50 dark:bg-slate-950">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Unsere KMU-Pakete</h2>
              <p className="text-muted-foreground text-lg">
                Transparente Preise pro Benutzer. Skalierbar und fair.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Essential */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border shadow-sm hover:shadow-md transition-all flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">KMU Essential</h3>
                  <p className="text-muted-foreground text-sm h-12">Der solide IT-Grundschutz für kleine Betriebe – Updates, Monitoring und verlässlicher Ansprechpartner im Hintergrund.</p>
                </div>
                <div className="mb-8">
                  <div className="text-3xl font-bold mb-1">ab 35 €</div>
                  <div className="text-sm text-muted-foreground">pro Benutzer / Monat (netto)</div>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    "Proaktives Monitoring von PCs und ggf. Servern (Verfügbarkeit, Basis-Checks)",
                    "Regelmäßiges Patch-Management für Windows und wichtige Standardsoftware",
                    "Überwachung von Backup-Jobs (Fehlermeldungen werden geprüft)",
                    "Remote-Support nach Aufwand, mit kleinem monatlichem Kontingent",
                    "Ticket-System & E-Mail-Support (Mo–Fr, 8–17 Uhr)",
                    "Einfache Bestandsdokumentation (Geräte, Benutzer, Lizenzen)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <p className="text-[10px] text-muted-foreground mb-4 leading-tight">
                    Kein Vor-Ort-Termin inklusive. Größere Projekte (z. B. Neuaufbau von Servern, große Migrationen) werden separat geplant und angeboten.
                  </p>
                  <ContactModal defaultTopic="KMU Essential">
                    <Button className="w-full" variant="outline">Essential anfragen</Button>
                  </ContactModal>
                </div>
              </div>

              {/* Standard */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border-2 border-primary shadow-lg relative transform lg:-translate-y-4 flex flex-col">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                  Empfohlen
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">KMU Standard</h3>
                  <p className="text-muted-foreground text-sm h-12">Für Unternehmen, die regelmäßig Unterstützung im Alltag benötigen – mit inklusivem Remote-Support und jährlichem Vor-Ort-Check.</p>
                </div>
                <div className="mb-8">
                  <div className="text-3xl font-bold mb-1">ab 55 €</div>
                  <div className="text-sm text-muted-foreground">pro Benutzer / Monat (netto)</div>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    "Alle Leistungen aus KMU Essential",
                    "Regelmäßiger Remote-Support inklusive (für typische Alltagsprobleme)",
                    "Klare Reaktionszeiten – in der Regel Antwort innerhalb von 8 Geschäfts­stunden",
                    "1 Vor-Ort-Termin pro Jahr inklusive* (z. B. IT-Check, Netzwerk-Review, Schulung)",
                    "Basis-Empfehlungen zu IT-Sicherheit (Passwort-Policy, MFA, E-Mail-Schutz)",
                    "Jährlicher Kurzbericht zum Zustand der IT (Updates, Backups, Risiken)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <p className="text-[10px] text-muted-foreground mb-4 leading-tight">
                    *Vor-Ort-Termin inklusive nach 3 Monaten Vertragslaufzeit. Weitere Vor-Ort-Einsätze werden nach Stundensatz und ggf. Anfahrt abgerechnet.
                  </p>
                  <ContactModal defaultTopic="KMU Standard">
                    <Button className="w-full" size="lg">Standard anfragen</Button>
                  </ContactModal>
                </div>
              </div>

              {/* Premium */}
              <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border shadow-sm hover:shadow-md transition-all flex flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">KMU Premium</h3>
                  <p className="text-muted-foreground text-sm h-12">Für Unternehmen, bei denen IT wirklich geschäftskritisch ist – mit mehr Supportzeit, Sicherheitsfokus und regelmäßigen Reviews.</p>
                </div>
                <div className="mb-8">
                  <div className="text-3xl font-bold mb-1">ab 79 €</div>
                  <div className="text-sm text-muted-foreground">pro Benutzer / Monat (netto)</div>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    "Alle Leistungen aus KMU Standard",
                    "Erweitertes Remote-Support-Kontingent pro Benutzer",
                    "Bevorzugte Behandlung im Ticket-System (höhere Priorität)",
                    "2 Vor-Ort-Termine pro Jahr inklusive* (z. B. Sicherheits-Review + Netzwerk-Optimierung)",
                    "Regelmäßige Sicherheits-Checks (Updates, Antivirus/EDR-Status, Backup-Testwiederherstellungen)",
                    "Einfache NIS2-Dokumentation der technischen Maßnahmen"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <p className="text-[10px] text-muted-foreground mb-4 leading-tight">
                    *Vor-Ort-Termine inklusive nach 3 Monaten Vertragslaufzeit. Projekte außerhalb des Pakets (z. B. neue Standorte, größere Cloud-Migrationen) werden individuell geplant und separat angeboten.
                  </p>
                  <ContactModal defaultTopic="KMU Premium">
                    <Button className="w-full" variant="outline">Premium anfragen</Button>
                  </ContactModal>
                </div>
              </div>
            </div>

            {/* Shared Footnote */}
            <p className="text-center text-xs text-muted-foreground mt-12 max-w-4xl mx-auto leading-relaxed">
              Alle Preise verstehen sich als Richtwerte „ab“-Preise pro Benutzer und Monat (netto). Der genaue Betrag hängt von Anzahl der Arbeitsplätze, Standorten und gewünschten Leistungen ab. Der Support erfolgt regulär während unserer Geschäftszeiten (Mo–Fr, 8–17 Uhr). Größere Projekte, einmalige Migrationsarbeiten und Speziallösungen werden separat kalkuliert. Wir bieten keine Rechtsberatung und keine formale NIS2-Zertifizierung an, sondern unterstützen Sie bei der praktischen Umsetzung technischer Maßnahmen.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
