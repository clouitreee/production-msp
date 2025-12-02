export default function KMUComplianceIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background Elements */}
      <rect x="50" y="50" width="300" height="200" rx="8" className="fill-secondary/10" />
      <circle cx="350" cy="50" r="40" className="fill-primary/5" />

      {/* Server Rack */}
      <g transform="translate(80, 100)">
        <rect x="0" y="0" width="60" height="120" rx="2" className="fill-slate-800" />
        {/* Lights */}
        <circle cx="10" cy="20" r="2" className="fill-green-500 animate-pulse" />
        <circle cx="10" cy="30" r="2" className="fill-green-500 animate-pulse" style={{ animationDelay: "0.3s" }} />
        <circle cx="10" cy="40" r="2" className="fill-green-500 animate-pulse" style={{ animationDelay: "0.7s" }} />
        {/* Lines */}
        <rect x="20" y="20" width="30" height="2" className="fill-slate-600" />
        <rect x="20" y="30" width="30" height="2" className="fill-slate-600" />
        <rect x="20" y="40" width="30" height="2" className="fill-slate-600" />
      </g>

      {/* Desk */}
      <path d="M160 220 L360 220 L340 180 L180 180 Z" className="fill-white text-border" stroke="currentColor" strokeWidth="1" />
      <rect x="160" y="220" width="10" height="40" className="fill-muted" />
      <rect x="350" y="220" width="10" height="40" className="fill-muted" />

      {/* Simplified Figures */}
      <g transform="translate(200, 140)">
        {/* Person 1 */}
        <circle cx="20" cy="20" r="15" className="fill-primary" />
        <path d="M5 50 Q20 35 35 50" stroke="currentColor" strokeWidth="20" className="text-primary" strokeLinecap="round" />
      </g>
      <g transform="translate(280, 150)">
        {/* Person 2 */}
        <circle cx="20" cy="20" r="15" className="fill-accent" />
        <path d="M5 50 Q20 35 35 50" stroke="currentColor" strokeWidth="20" className="text-accent" strokeLinecap="round" />
      </g>

      {/* NIS2 Document (Floating) */}
      <g className="animate-bounce" style={{ animationDuration: "4s" }} transform="translate(240, 80)">
        <rect x="0" y="0" width="50" height="70" rx="2" className="fill-white drop-shadow-md text-border" stroke="currentColor" strokeWidth="1" />
        <rect x="10" y="10" width="30" height="4" rx="1" className="fill-muted" />
        <rect x="10" y="20" width="30" height="4" rx="1" className="fill-muted" />
        <rect x="10" y="30" width="20" height="4" rx="1" className="fill-muted" />
        
        {/* EU Stars Circle */}
        <circle cx="35" cy="55" r="10" className="fill-blue-100" />
        <path d="M35 50 L36 52 H38 L36 54 L37 56 L35 55 L33 56 L34 54 L32 52 H34 Z" className="fill-blue-600" />
      </g>

      {/* Cloud Symbol */}
      <g transform="translate(320, 80)">
        <path d="M10 20 Q5 20 5 15 Q5 10 10 10 Q10 5 15 5 Q20 5 20 10 Q25 10 25 15 Q25 20 20 20 Z" className="fill-white text-primary" stroke="currentColor" strokeWidth="1.5" />
      </g>
    </svg>
  );
}
