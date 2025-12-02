import { Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const TEAM_MEMBERS = [
  {
    name: "Thomas Müller",
    role: "Senior IT-Consultant",
    image: "/images/team-1.jpg",
    bio: "Spezialist für digitale Transformation und Cloud-Strategien. Begleitet KMU seit über 10 Jahren auf dem Weg in die moderne IT.",
    linkedin: "#",
    email: "thomas.mueller@tech-hilfe-pro.de",
  },
  {
    name: "Sarah Weber",
    role: "Head of Support",
    image: "/images/team-2.jpg",
    bio: "Die Stimme am Telefon, die Ruhe bewahrt. Expertin für schnelle Problemlösung und exzellenten Kundenservice.",
    linkedin: "#",
    email: "sarah.weber@tech-hilfe-pro.de",
  },
  {
    name: "Michael Klein",
    role: "IT-Security Specialist",
    image: "/images/team-3.jpg",
    bio: "Zertifizierter Sicherheitsexperte. Sorgt dafür, dass Ihre Daten sicher sind und Ihre Systeme NIS2-konform laufen.",
    linkedin: "#",
    email: "michael.klein@tech-hilfe-pro.de",
  },
];

export default function TeamSection() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Unser Experten-Team für Ihren Erfolg
          </h2>
          <p className="text-lg text-muted-foreground">
            Hinter Tech Hilfe Pro stehen echte Menschen mit Leidenschaft für Technik.
            Wir sind Ihr persönlicher Ansprechpartner – kein anonymes Callcenter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={index}
              className="group bg-card rounded-3xl overflow-hidden border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                  <div className="flex gap-2">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full h-10 w-10 bg-white/20 hover:bg-white/40 text-white border-none backdrop-blur-sm"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="rounded-full h-10 w-10 bg-white/20 hover:bg-white/40 text-white border-none backdrop-blur-sm"
                    >
                      <Mail className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
