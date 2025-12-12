import { SERVICE_CATEGORIES } from "@/data/servicesData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import ContactModal from "./ContactModal";

export default function ServicesAccordion() {
  return (
    <Accordion type="single" collapsible className="space-y-4">
      {SERVICE_CATEGORIES.map(category => (
        <AccordionItem
          key={category.id}
          value={category.id}
          id={`category-${category.id}`}
          className="border-none"
        >
          <AccordionTrigger
            className={cn(
              "group rounded-3xl px-6 py-5 hover:no-underline transition-all duration-300",
              "bg-card border border-border hover:border-primary/50 hover:shadow-md",
              "data-[state=open]:bg-secondary/10 data-[state=open]:border-primary data-[state=open]:rounded-b-none"
            )}
          >
            <div className="flex items-center gap-4 text-left w-full pr-4">
              <div
                className={cn(
                  "flex items-center justify-center w-12 h-12 rounded-xl shrink-0 transition-colors",
                  category.colorBg,
                  category.color
                )}
              >
                <category.icon className="w-6 h-6" />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-xl font-bold text-foreground">
                    {category.title}
                  </h3>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                    {category.services.length} Services
                  </span>
                </div>
                <p className="text-muted-foreground mt-1 text-sm md:text-base">
                  {category.description}
                </p>
              </div>
            </div>
          </AccordionTrigger>

          <AccordionContent
            className={cn(
              "rounded-b-3xl border-x border-b border-border bg-card/50 px-6 pb-6 pt-2",
              "data-[state=open]:border-primary"
            )}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {category.services.map(service => (
                <div
                  key={service.id}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-secondary/20 transition-colors group/service"
                >
                  <div className="mt-1 shrink-0">
                    <CheckCircle2 className={cn("w-4 h-4", category.color)} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground group-hover/service:text-primary transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1 leading-snug">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <ContactModal defaultTopic={category.title}>
                <Button
                  className={cn(
                    "btn-primary",
                    category.colorBg
                      .replace("bg-", "hover:bg-")
                      .replace("50", "100")
                  )}
                >
                  Alle {category.title}-Services anfragen
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </ContactModal>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
