import { FEATURED_SERVICES } from "@/data/servicesData";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ServicesBentoGrid() {
  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(`category-${categoryId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      // Optional: Add a highlight effect
      element.classList.add("ring-2", "ring-primary", "ring-offset-2");
      setTimeout(() => {
        element.classList.remove("ring-2", "ring-primary", "ring-offset-2");
      }, 2000);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
      {FEATURED_SERVICES.map(service => (
        <div
          key={service.id}
          onClick={() => scrollToCategory(service.categoryId)}
          className={cn(
            "group relative overflow-hidden rounded-3xl p-6 lg:p-8 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-border/50",
            service.size === "large"
              ? "md:col-span-2 lg:col-span-2 aspect-[2/1] md:aspect-auto"
              : "col-span-1 aspect-square md:aspect-[4/3]",
            "bg-gradient-to-br",
            service.colorClass.includes("from-")
              ? service.colorClass
              : "bg-card"
          )}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 rounded-full bg-white/20 blur-2xl transition-transform group-hover:scale-150" />

          <div className="relative h-full flex flex-col justify-between z-10">
            <div className="space-y-4">
              <div
                className={cn(
                  "inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/80 backdrop-blur-sm shadow-sm transition-transform group-hover:scale-110 group-hover:rotate-3",
                  service.colorClass.split(" ").pop() // Get the text color class for the icon
                )}
              >
                <service.icon className="w-6 h-6" />
              </div>

              <div>
                <h3
                  className={cn(
                    "font-bold tracking-tight",
                    service.size === "large"
                      ? "text-2xl lg:text-3xl"
                      : "text-xl"
                  )}
                >
                  {service.title}
                </h3>
                <p
                  className={cn(
                    "mt-2 text-muted-foreground/80 font-medium leading-relaxed",
                    service.size === "large" ? "text-lg max-w-md" : "text-sm"
                  )}
                >
                  {service.description}
                </p>
              </div>
            </div>

            <div className="flex items-center text-sm font-semibold mt-4 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              Mehr erfahren
              <ArrowRight className="ml-2 w-4 h-4" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
