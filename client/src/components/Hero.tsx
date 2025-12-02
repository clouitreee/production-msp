import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, FileText, Monitor, ShieldCheck, Euro } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";
import ContactModal from "./ContactModal";



export default function Hero() {


  return (
    <section className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-32">
      {/* Background decorative elements - Simplified for professional look */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[120px]" />
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Gateway Content */}
          <div className="col-span-full text-center space-y-12">
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary-foreground text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                </span>
                Jetzt verfügbar in Köln & Neuss
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground leading-tight">
                Ihr IT-Partner für <br />
                <span className="text-primary">Zuhause & Unternehmen</span>
              </h1>
              
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3">
                <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-sm border border-border text-sm font-medium text-foreground">
                  <Monitor className="h-4 w-4 text-primary" />
                  <span>Schnelle PC-Hilfe & Remote-Support</span>
                </div>
                <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-sm border border-border text-sm font-medium text-foreground">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  <span>Managed IT & NIS2-Compliance für KMU</span>
                </div>
                <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-sm border border-border text-sm font-medium text-foreground">
                  <Euro className="h-4 w-4 text-emerald-600" />
                  <span>Transparente Preise ohne versteckte Kosten</span>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Tech Hilfe Pro ist Ihr zuverlässiger Ansprechpartner für alle Technikfragen. Ob schnelle PC-Hilfe für Privatkunden oder professionelle Managed Services für KMU – wir sind für Sie da.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* B2C Card */}
              <div className="msp-card p-8 text-left hover:bg-primary/5 transition-all duration-300 group relative overflow-hidden">
                <div className="space-y-6 relative z-10">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-foreground">Für Privatkunden</h2>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                      Schnelle Hilfe bei PC-Problemen, WLAN, Smart Home und mehr. Fernwartung oder Vor-Ort-Service.
                    </p>
                  </div>
                  <Button className="w-full btn-outline group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all" asChild>
                    <Link href="/privatkunden">
                      Zu den Privatkunden-Services
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* B2B Card */}
              <div className="msp-card p-8 text-left hover:bg-primary/5 transition-all duration-300 group relative overflow-hidden">
                <div className="space-y-6 relative z-10">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold text-foreground">Für Unternehmen</h2>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                      Managed IT, NIS2-Compliance, Backups und Sicherheit für KMU. Ihre externe IT-Abteilung.
                    </p>
                  </div>
                  <Button className="w-full btn-outline group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all" asChild>
                    <Link href="/unternehmen">
                      Zum Unternehmens-Bereich
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Intro Section */}
            <div className="max-w-4xl mx-auto text-left pt-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground">Was macht Tech Hilfe Pro anders?</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Wir kombinieren schnelle, verständliche PC-Hilfe für Zuhause mit professioneller, dokumentierter IT-Betreuung für kleine Unternehmen. Alles aus einer Hand, lokal in Köln & Neuss – mit Fokus auf Sicherheit, Transparenz und Fördermöglichkeiten.
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    "Klar definierte Leistungen statt Kleingedrucktem",
                    "Sichere Fernwartung mit RustDesk & MeshCentral",
                    "Unterstützung bei Förderung wie MID – Digitale Sicherheit"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border shadow-sm">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                      <span className="font-medium text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Checklist Teaser Section */}
            <div id="checklist-teaser" className="max-w-4xl mx-auto mt-16">
              <div className="msp-card p-8 bg-secondary/30 border-secondary/50">
                <div className="grid md:grid-cols-2 gap-8 items-center text-left">
                  <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                      <FileText className="h-3 w-3" />
                      Kostenloses Material
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-foreground">Kostenlose IT-Sicherheits-Checkliste</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Nicht sicher, wie gut Sie geschützt sind? Mit unserer IT-Sicherheits-Checkliste für Zuhause & KMU sehen Sie in wenigen Minuten, wo Sie stehen – ganz ohne Fachwissen.
                      </p>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Schneller Überblick über Ihre Risiken",
                        "Checkliste für Privat & Geschäft",
                        "Perfekte Grundlage für ein Beratungsgespräch"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-card rounded-xl p-6 border border-border shadow-sm text-center space-y-6">
                    <div className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-[10px] font-bold uppercase tracking-wider rounded-full">
                      Empfohlen
                    </div>
                    <h4 className="text-lg font-bold text-foreground">Checkliste jetzt kostenlos sichern</h4>
                    <Button className="w-full btn-primary" size="lg" asChild>
                      <Link href="/ressourcen">
                        Zur Checkliste
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <p className="text-xs text-muted-foreground">
                      Kein Newsletter-Zwang, nur die Checkliste.
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>


    </section>
  );
}
