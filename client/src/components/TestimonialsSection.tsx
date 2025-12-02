import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Sabine K.",
    location: "aus Köln",
    image: "/images/avatar-1.jpg",
    text: "Endlich läuft mein Laptop wieder schnell! Der Service war super freundlich und geduldig. Ich habe mich sehr gut aufgehoben gefühlt.",
    rating: 5,
  },
  {
    name: "Hans-Jürgen M.",
    location: "aus Neuss",
    image: "/images/avatar-2.jpg",
    text: "Die Einrichtung meines neuen Smart-TVs und des WLANs hat perfekt geklappt. Pünktlich, kompetent und sehr hilfsbereit. Gerne wieder!",
    rating: 5,
  },
  {
    name: "Dennis R.",
    location: "aus Düsseldorf",
    image: "/images/avatar-3.jpg",
    text: "Schnelle Hilfe bei einem Virus-Problem am Wochenende. Tech Hilfe Pro hat meine Daten gerettet. Absolut empfehlenswert!",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-x-1/2" />
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Was unsere Kunden sagen
          </h2>
          <p className="text-lg text-muted-foreground">
            Zufriedene Kunden sind unser größter Erfolg. Lesen Sie hier, wie wir anderen bereits helfen konnten.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-3xl p-8 shadow-sm border border-border/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="mb-6 text-primary">
                <Quote className="w-8 h-8 opacity-20" />
              </div>
              
              <div className="flex-1 mb-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
