import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";

export default function Datenschutz() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <StickyHeader />
      <main className="flex-grow pt-24 pb-20">
        <div className="container max-w-3xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-bold mb-8">Datenschutzerklärung</h1>
          
          <div className="space-y-8 text-muted-foreground">
            <p>
              Wir freuen uns über Ihr Interesse an unserer Website. Der Schutz Ihrer Privatsphäre ist für uns sehr wichtig. Nachstehend informieren wir Sie ausführlich über den Umgang mit Ihren Daten.
            </p>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">1. Verantwortlicher</h2>
              <p>
                Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:<br />
                Tech Hilfe Pro<br />
                [Vorname Nachname]<br />
                [Straße, Hausnummer]<br />
                [PLZ Ort]<br />
                E-Mail: support@tech-hilfe-pro.de
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">2. Arten der verarbeiteten Daten</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Bestandsdaten (z.B. Namen, Adressen)</li>
                <li>Kontaktdaten (z.B. E-Mail, Telefonnummern)</li>
                <li>Inhaltsdaten (z.B. Texteingaben, Fotografien, Videos)</li>
                <li>Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten)</li>
                <li>Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">3. Zwecke der Verarbeitung</h2>
              <p>
                Wir verarbeiten Ihre Daten, um unsere Online-Angebote zur Verfügung zu stellen, auf Kontaktanfragen zu antworten und unsere Services zu verbessern.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">4. Rechtsgrundlagen</h2>
              <p>
                Die Verarbeitung Ihrer Daten erfolgt auf Basis der gesetzlichen Bestimmungen, insbesondere der DSGVO (Art. 6 Abs. 1 lit. a, b, f).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">5. Hosting & Logfiles</h2>
              <p>
                Unsere Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">6. Kontaktformulare & Checklisten-Download</h2>
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen oder unsere Checkliste anfordern, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">7. Cookies und ähnliche Technologien</h2>
              <p>
                Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">8. Empfänger von Daten / Auftragsverarbeiter</h2>
              <p>
                Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn dies im Rahmen der Vertragsabwicklung notwendig ist, wir gesetzlich dazu verpflichtet sind oder Sie eingewilligt haben.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">9. Speicherdauer</h2>
              <p>
                Wir speichern Ihre personenbezogenen Daten nur so lange, wie es für die Erfüllung der Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">10. Rechte der betroffenen Personen</h2>
              <p>
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch. Bitte kontaktieren Sie uns dazu unter den oben genannten Kontaktdaten.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">11. Änderungen dieser Datenschutzerklärung</h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
