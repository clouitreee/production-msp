import ServicesBentoGrid from "./ServicesBentoGrid";
import ServicesAccordion from "./ServicesAccordion";
import { SERVICE_CATEGORIES } from "@/data/servicesData";
import { Layers, Monitor, Zap } from "lucide-react";

export default function ServicesSection() {
  const totalServices = SERVICE_CATEGORIES.reduce(
    (acc, cat) => acc + cat.services.length,
    0
  );

  return (
    <section
      id="services"
      className="py-20 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium">
            <Zap className="w-4 h-4" />
            Unsere Expertise
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-foreground">
            Von A wie Apple bis Z wie Zoom
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Wir helfen bei fast allem, was einen Stecker oder Akku hat. Egal ob
            Einrichtung, Reparatur oder einfach nur eine Frage.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-sm text-sm font-medium text-muted-foreground">
              <Layers className="w-4 h-4 text-primary" />
              {totalServices}+ Services
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-sm text-sm font-medium text-muted-foreground">
              <Monitor className="w-4 h-4 text-primary" />
              {SERVICE_CATEGORIES.length} Kategorien
            </div>
          </div>
        </div>

        {/* Bento Grid (Featured) */}
        <ServicesBentoGrid />

        {/* Divider */}
        <div className="relative py-8">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-background px-4 text-sm font-medium text-muted-foreground uppercase tracking-widest">
              Alle Services im Überblick
            </span>
          </div>
        </div>

        {/* Accordion (All Services) */}
        <div className="max-w-4xl mx-auto">
          <ServicesAccordion />
        </div>
      </div>
    </section>
  );
}
