import { LucideIcon } from "lucide-react";

interface ServiceItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServiceGridProps {
  title: string;
  description: string;
  items: ServiceItem[];
  id?: string;
  className?: string;
}

export default function ServiceGrid({
  title,
  description,
  items,
  id,
  className,
}: ServiceGridProps) {
  return (
    <section id={id} className={`py-20 bg-muted/30 ${className || ""}`}>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground text-lg">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {items.map((service, index) => (
            <div
              key={index}
              className="msp-card msp-card-hover p-6 flex flex-col h-full group"
            >
              <div className="mb-4 p-3 rounded-xl bg-primary/10 w-fit text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
