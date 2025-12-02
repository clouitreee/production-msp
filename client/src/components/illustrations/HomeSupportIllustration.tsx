export default function HomeSupportIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background Elements */}
      <circle cx="200" cy="150" r="120" className="fill-secondary/30" />
      <circle cx="50" cy="50" r="20" className="fill-primary/5" />
      <circle cx="350" cy="250" r="30" className="fill-accent/5" />

      {/* Floor/Desk Area */}
      <path
        d="M50 220 H350"
        stroke="currentColor"
        strokeWidth="2"
        className="text-border"
      />

      {/* Person at Laptop */}
      <g transform="translate(120, 100)">
        {/* Body */}
        <path
          d="M40 120 C40 120 30 80 80 80 C130 80 120 120 120 120"
          className="fill-primary"
        />
        {/* Head */}
        <circle cx="80" cy="60" r="25" className="fill-primary-foreground text-primary" stroke="currentColor" strokeWidth="2" />
        
        {/* Laptop */}
        <path
          d="M50 120 L110 120 L120 130 H40 L50 120Z"
          className="fill-muted-foreground"
        />
        <rect x="55" y="85" width="50" height="35" rx="2" className="fill-slate-800" />
        <path d="M75 95 L85 95" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* Remote Support Window (Floating) */}
      <g className="animate-bounce" style={{ animationDuration: "3s" }}>
        <rect
          x="240"
          y="60"
          width="80"
          height="60"
          rx="4"
          className="fill-white drop-shadow-lg text-border"
          stroke="currentColor"
          strokeWidth="1"
        />
        {/* Header */}
        <rect x="240" y="60" width="80" height="15" rx="4" className="fill-primary/20" />
        {/* Avatar */}
        <circle cx="280" cy="95" r="10" className="fill-primary" />
        {/* Chat lines */}
        <rect x="255" y="110" width="50" height="4" rx="2" className="fill-muted" />
      </g>

      {/* Router / Fritz!Box */}
      <g transform="translate(60, 190)">
        <rect x="0" y="0" width="40" height="30" rx="4" className="fill-white text-primary" stroke="currentColor" strokeWidth="2" />
        <circle cx="10" cy="10" r="2" className="fill-green-500" />
        <circle cx="20" cy="10" r="2" className="fill-green-500" />
        <path d="M10 -10 Q20 -20 30 -10" stroke="currentColor" strokeWidth="2" className="text-accent opacity-50 animate-pulse" />
        <path d="M5 -15 Q20 -30 35 -15" stroke="currentColor" strokeWidth="2" className="text-accent opacity-30 animate-pulse" style={{ animationDelay: "0.5s" }} />
      </g>

      {/* Shield/Check */}
      <g transform="translate(300, 180)">
        <path
          d="M15 0 L30 10 V20 C30 30 15 40 15 40 C15 40 0 30 0 20 V10 L15 0Z"
          className="fill-white text-primary"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M10 20 L13 23 L20 16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        />
      </g>
    </svg>
  );
}
