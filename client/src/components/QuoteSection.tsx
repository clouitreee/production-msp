import { cn } from "@/lib/utils";

export default function QuoteSection() {
  return (
    <section className="py-20 bg-background flex justify-center">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="group relative p-8 md:p-12 rounded-3xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-all duration-500 hover:-translate-y-1 overflow-hidden">
            {/* Accent underline animation */}
            <div className="absolute bottom-0 left-0 h-1 bg-accent w-0 group-hover:w-full transition-all duration-700 ease-out" />
            
            {/* Left border accent */}
            <div className="absolute top-8 bottom-8 left-0 w-1 bg-accent/20 rounded-r-full" />

            <blockquote className="relative z-10">
              <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed italic">
                &ldquo;IT sollte sich anfühlen wie Strom: unsichtbar, zuverlässig und immer da, wenn man sie braucht.&rdquo;
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <div className="h-px w-8 bg-accent" />
                <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                  Tech Hilfe Pro
                </span>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
