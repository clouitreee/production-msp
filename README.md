# Tech Hilfe Pro - Managed Service Provider (MSP) Website

Tech Hilfe Pro is a modern MSP website targeting both B2C (private households) and B2B (small/medium businesses) in NRW, Germany.

## Visual Design & Brand Style

The project follows a strict **"Neumorphic Clean Tech"** design aesthetic with a consolidated 3-color palette.

### Color Palette
*   **Accent Orange**: `#FB923C` (Tailwind: `text-[#FB923C]`, `bg-[#FB923C]`)
    *   Used for: Primary CTAs, success states (checkmarks), emphasis, and key visual elements.
*   **Deep Black**: `#0B0B0F` (Tailwind: `text-[#0B0B0F]`, `bg-[#0B0B0F]`)
    *   Used for: Primary headings, main text, and high-contrast elements.
*   **Metallic Gray**: `#4B5563` (Tailwind: `text-[#4B5563]`, `bg-[#4B5563]`)
    *   Used for: Secondary text, borders, neutral icons, and supporting elements.

**Rule**: No other colors (Green, Teal, Blue, etc.) are allowed. All success states must use Orange.

### Typography
*   **Font Family**: Inter (via Google Fonts)
*   **Headings**: Bold, clear hierarchy.
*   **Body**: Clean, readable, with generous line height.

## Key Components

*   **B2CHero**: Hero section for private customers with orange typewriter effect.
*   **ServiceGrid**: Reusable grid for displaying service offerings.
*   **ItHealthDashboard**: Interactive tool for calculating IT health scores.
*   **FundingCalculator**: Tool for estimating government funding eligibility.
*   **ContactModal**: Global contact form with topic selection.

## Development

### Tech Stack
*   React 19
*   TypeScript
*   Tailwind CSS 4
*   Vite

### Commands
*   `npm run dev`: Start development server.
*   `npm run build`: Build for production.
*   `npm run preview`: Preview production build.

## License

Private.
