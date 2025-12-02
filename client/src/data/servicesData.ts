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
  LucideIcon,
  ShieldCheck,
  Cloud,
} from "lucide-react";

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;      // Tailwind class for text/border (e.g., "text-teal-600")
  colorBg: string;    // Tailwind class for background (e.g., "bg-teal-50")
  colorBorder: string;// Tailwind class for border (e.g., "border-teal-200")
  services: ServiceItem[];
}

export interface FeaturedService {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  size: "large" | "medium" | "small";
  colorClass: string; // For gradient or background
  categoryId: string; // To link to accordion
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "computer",
    title: "Computer & Software",
    description: "Hilfe bei PC, Laptop, Mac und Software-Problemen.",
    icon: Monitor,
    color: "text-teal-600",
    colorBg: "bg-teal-50",
    colorBorder: "border-teal-200",
    services: [
      {
        id: "pc-laptop",
        title: "Computer (PC, Laptop, Desktop)",
        description: "Einrichtung, Beschleunigung, Fehlerdiagnose, Aufrüstung und Reparatur-Unterstützung.",
        icon: Monitor,
      },
      {
        id: "software",
        title: "Computer-Software",
        description: "Office, E-Mail, Browser, Virenscanner – Installation und Fehlerbehebung.",
        icon: AppWindow,
      },
      {
        id: "windows",
        title: "Windows 11 & macOS",
        description: "Neuinstallation, Upgrades, Treiber und Systempflege.",
        icon: LayoutGrid,
      },
      {
        id: "storage",
        title: "Festplatten & Backup",
        description: "Datensicherung, NAS-Einrichtung und Datenrettung.",
        icon: HardDrive,
      },
      {
        id: "printer",
        title: "Drucker & Scanner",
        description: "Einrichtung, Treiberprobleme und WLAN-Druck.",
        icon: Printer,
      },
    ],
  },
  {
    id: "network",
    title: "Internet & WLAN",
    description: "Stabiles Internet und sicheres Heimnetzwerk.",
    icon: Wifi,
    color: "text-sky-600",
    colorBg: "bg-sky-50",
    colorBorder: "border-sky-200",
    services: [
      {
        id: "wifi",
        title: "WLAN & Mesh",
        description: "Optimierung der Reichweite, Mesh-Systeme und Gastnetz.",
        icon: Wifi,
      },
      {
        id: "router",
        title: "Router-Konfiguration",
        description: "Fritz!Box und Co. sicher einrichten und updaten.",
        icon: ShieldCheck,
      },
      {
        id: "cloud",
        title: "Cloud & Speicher",
        description: "Einrichtung von Cloud-Diensten und Synchronisation.",
        icon: Cloud,
      },
    ],
  },
  {
    id: "mobile",
    title: "Smartphone & Tablet",
    description: "Einrichtung und Hilfe für Ihre mobilen Begleiter.",
    icon: Smartphone,
    color: "text-violet-600",
    colorBg: "bg-violet-50",
    colorBorder: "border-violet-200",
    services: [
      {
        id: "smartphone",
        title: "Smartphone (Android/iOS)",
        description: "Einrichtung, Datenumzug, Apps und Konten.",
        icon: Smartphone,
      },
      {
        id: "tablet",
        title: "Tablets & E-Reader",
        description: "iPad, Android-Tablets, Kindle und Tolino.",
        icon: Tablet,
      },
      {
        id: "wearables",
        title: "Smartwatch & Tracker",
        description: "Kopplung, Einrichtung und Gesundheitsdaten.",
        icon: Watch,
      },
    ],
  },
  {
    id: "smarthome",
    title: "Smart Home & IoT",
    description: "Das intelligente Zuhause einfach erklärt und eingerichtet.",
    icon: Home,
    color: "text-orange-600",
    colorBg: "bg-orange-50",
    colorBorder: "border-orange-200",
    services: [
      {
        id: "smarthome-general",
        title: "Smart Home Systeme",
        description: "Licht, Heizung, Kameras und Sprachassistenten.",
        icon: Home,
      },
      {
        id: "kitchen",
        title: "Smarte Küche & Haushalt",
        description: "Vernetzte Hausgeräte und App-Steuerung.",
        icon: ChefHat,
      },
    ],
  },
  {
    id: "entertainment",
    title: "TV & Entertainment",
    description: "Bestes Bild und bester Ton für Ihr Wohnzimmer.",
    icon: Tv,
    color: "text-rose-600",
    colorBg: "bg-rose-50",
    colorBorder: "border-rose-200",
    services: [
      {
        id: "tv-setup",
        title: "TV-Einrichtung",
        description: "Aufbau, Sendersuchlauf und Bildeinstellungen.",
        icon: Tv,
      },
      {
        id: "streaming",
        title: "Streaming & Mediatheken",
        description: "Netflix, Prime, YouTube und TV-Apps.",
        icon: Cast,
      },
      {
        id: "audio",
        title: "HiFi & Sound",
        description: "Soundbars, Sonos, Bluetooth und Multiroom.",
        icon: Speaker,
      },
      {
        id: "receiver",
        title: "Receiver & Satellit",
        description: "Sat-Anlagen, Kabel-TV und Aufnahmefunktionen.",
        icon: Satellite,
      },
      {
        id: "gaming",
        title: "Konsolen & Gaming",
        description: "PlayStation, Xbox, Switch und VR-Einrichtung.",
        icon: Gamepad2,
      },
    ],
  },
];

export const FEATURED_SERVICES: FeaturedService[] = [
  {
    id: "feat-computer",
    title: "Computer & Laptops",
    description: "Hilfe bei Windows, Mac, Updates und langsamen Geräten.",
    icon: Monitor,
    size: "large",
    colorClass: "from-teal-500/20 to-emerald-500/20 text-teal-700",
    categoryId: "computer",
  },
  {
    id: "feat-wifi",
    title: "WLAN & Netzwerk",
    description: "Endlich stabiles Internet in jedem Zimmer.",
    icon: Wifi,
    size: "large",
    colorClass: "from-sky-500/20 to-blue-500/20 text-sky-700",
    categoryId: "network",
  },
  {
    id: "feat-smarthome",
    title: "Smart Home",
    description: "Licht, Heizung & Kameras steuern.",
    icon: Home,
    size: "medium",
    colorClass: "from-orange-500/20 to-amber-500/20 text-orange-700",
    categoryId: "smarthome",
  },
  {
    id: "feat-tv",
    title: "TV & Streaming",
    description: "Einrichtung von Smart-TVs & Sound.",
    icon: Tv,
    size: "medium",
    colorClass: "from-rose-500/20 to-pink-500/20 text-rose-700",
    categoryId: "entertainment",
  },
  {
    id: "feat-mobile",
    title: "Smartphone & Tablet",
    description: "Einrichtung, Datenumzug & Hilfe.",
    icon: Smartphone,
    size: "medium",
    colorClass: "from-violet-500/20 to-purple-500/20 text-violet-700",
    categoryId: "mobile",
  },
  {
    id: "feat-printer",
    title: "Drucker & Scanner",
    description: "Verbindungsprobleme lösen.",
    icon: Printer,
    size: "small",
    colorClass: "from-slate-500/20 to-gray-500/20 text-slate-700",
    categoryId: "computer",
  },
];
