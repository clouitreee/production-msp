import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-white border-t py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-bold text-xl mb-4">Tech Hilfe Pro</h3>
            <p className="text-muted-foreground max-w-xs">
              Ihre persönliche IT-Hilfe in Köln & Neuss. 
              Schnell, verständlich und fair.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Angebot</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privatkunden" className="hover:text-primary">Privatkunden</Link></li>
              <li><Link href="/unternehmen" className="hover:text-primary">Unternehmen</Link></li>
              <li><Link href="/ressourcen" className="hover:text-primary">Ressourcen & Downloads</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/impressum" className="hover:text-primary">Impressum</Link></li>
              <li><Link href="/datenschutz" className="hover:text-primary">Datenschutz</Link></li>
              <li><a href="#" className="hover:text-primary">AGB</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Mo-Fr, 8:00 - 17:00 Uhr</li>
              <li>Köln & Neuss</li>
              <li>support@tech-hilfe-pro.de</li>
            </ul>
          </div>
        </div>
        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Tech Hilfe Pro. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
}
