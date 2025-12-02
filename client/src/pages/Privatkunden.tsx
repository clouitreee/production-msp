import B2CHero from "@/components/B2CHero";
import ServiceGrid from "@/components/ServiceGrid";
import PricingPlans from "@/components/PricingPlans";
import ComparisonSection from "@/components/ComparisonSection";
import StickyHeader from "@/components/StickyHeader";
import Footer from "@/components/Footer";
import {
  Monitor,
  AppWindow,
  Printer,
  Tablet,
  HardDrive,
  Wifi,
  Gamepad2,
  ChefHat,
  Home,
  Watch,
  Smartphone,
  Speaker,
  Tv,
  Cast,
  Satellite,
  Wrench,
  LayoutGrid,
} from "lucide-react";

const B2C_SERVICES = [
  {
    icon: Monitor,
    title: "Computer (PC, Laptop, Desktop)",
    description:
      "Einrichtung, Beschleunigung, Fehlerdiagnose, Aufrüstung und Reparatur-Unterstützung für Windows- und macOS-Geräte.",
  },
  {
    icon: AppWindow,
    title: "Computer-Software",
    description:
      "Office, E-Mail-Programme, Browser, Sicherheitssoftware, Druckersoftware – wir installieren, konfigurieren und beheben Fehler.",
  },
  {
    icon: Printer,
    title: "Drucker, Kopierer, Scanner",
    description:
      "Einrichtung im Heimnetz, Treiberprobleme, WLAN-Druck, Scan-to-PDF, Multifunktionsgeräte.",
  },
  {
    icon: Tablet,
    title: "E-Book-Reader und Tablets",
    description:
      "Kindle, Tolino, iPad, Android-Tablets – Einrichtung, Konten, Synchronisation, E-Books und Apps.",
  },
  {
    icon: HardDrive,
    title: "Festplatten und Datensicherung",
    description:
      "Backup-Konzepte für Zuhause, externe Festplatten, NAS, Cloud-Speicher, erste Hilfe bei Datenverlust (so weit möglich).",
  },
  {
    icon: Wifi,
    title: "Heimnetzwerk und WLAN",
    description:
      "Router-Installation, WLAN-Optimierung, Mesh-Systeme, Gastnetz, Kindersicherung.",
  },
  {
    icon: Gamepad2,
    title: "Konsolen und VR",
    description:
      "Ersteinrichtung, Online-Dienste, Netzwerkanbindung, Bild- und Soundprobleme, VR-Headsets.",
  },
  {
    icon: ChefHat,
    title: "Küche und Haushalt",
    description:
      "Vernetzte Küchengeräte, smarte Waschmaschinen/Trockner, App-Steuerung und WLAN-Einbindung.",
  },
  {
    icon: Home,
    title: "SmartHome & Assistenten",
    description:
      "Licht, Heizung, Steckdosen, Kameras, Türsprechanlagen – zentrale Steuerung, Szenen, Automatisierungen.",
  },
  {
    icon: Watch,
    title: "Smartwatch und Fitnesstracker",
    description:
      "Kopplung mit Smartphone, Synchronisation, App-Einrichtung, Auswertung von Gesundheitsdaten (ohne medizinische Beratung).",
  },
  {
    icon: Smartphone,
    title: "Telefon, Handy, Fax",
    description:
      "Android, iPhone, klassische Handys, Kontakte-Umzug, E-Mail, Messenger, SIM/Vertrag und Grundkonfiguration.",
  },
  {
    icon: Speaker,
    title: "Ton, HiFi, Lautsprecher",
    description:
      "Soundbars, Bluetooth-Lautsprecher, AV-Receiver, Multiroom-Lösungen, Verbindung mit TV oder Smartphone.",
  },
  {
    icon: Tv,
    title: "TV – DVD, BluRay, Video",
    description:
      "Fernseher, BluRay/DVD-Player, Set-Top-Boxen – Anschluss, Bild- und Tonprobleme, Grundeinstellungen.",
  },
  {
    icon: Cast,
    title: "TV über Internet & Streaming",
    description:
      "Streaming-Sticks, Smart-TV-Apps, Mediatheken, Streaming-Abos und Netzwerkanbindung.",
  },
  {
    icon: Satellite,
    title: "TV-Receiver (Satellit, Kabel)",
    description:
      "Installation, Sendersuchlauf, Sortierung, Aufnahmefunktionen, Verknüpfung mit TV und Netzwerk.",
  },
  {
    icon: Wrench,
    title: "TV-Einrichtung",
    description:
      "Aufstellen, Wandmontage (ohne baurechtliche Sonderarbeiten), Erstkonfiguration, Einbindung ins Heimnetz.",
  },
  {
    icon: LayoutGrid,
    title: "Windows 11",
    description:
      "Neuinstallation, Upgrade von Windows 10, Treiber, Benutzerkonten, Datenübernahme und Basissicherheit.",
  },
];

export default function Privatkunden() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      <StickyHeader />
      <main className="flex-grow">
        <B2CHero />
        <ServiceGrid
          id="services"
          title="Unsere Services im Überblick"
          description="Von A wie Apple bis Z wie Zoom – wir helfen bei fast allem, was einen Stecker oder Akku hat."
          items={B2C_SERVICES}
        />
        <PricingPlans />
        <ComparisonSection />
      </main>
      <Footer />
    </div>
  );
}
