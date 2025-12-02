export default function NIS2DocumentsIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background Circle */}
      <circle cx="150" cy="150" r="120" className="fill-secondary/20" />
      
      {/* Stack of Documents */}
      <g transform="translate(75, 75)">
        {/* Doc 1 (Back) */}
        <rect x="20" y="0" width="110" height="150" rx="4" className="fill-white text-border" stroke="currentColor" strokeWidth="1" transform="rotate(5 75 75)" />
        
        {/* Doc 2 (Middle) */}
        <rect x="10" y="10" width="110" height="150" rx="4" className="fill-white text-border" stroke="currentColor" strokeWidth="1" transform="rotate(-2 65 85)" />
        
        {/* Doc 3 (Front) */}
        <rect x="0" y="20" width="110" height="150" rx="4" className="fill-white drop-shadow-lg text-border" stroke="currentColor" strokeWidth="1" />
        
        {/* Content Lines */}
        <rect x="20" y="40" width="70" height="6" rx="3" className="fill-muted" />
        <rect x="20" y="60" width="70" height="6" rx="3" className="fill-muted" />
        <rect x="20" y="80" width="50" height="6" rx="3" className="fill-muted" />
        
        {/* EU Outline / Stars Hint */}
        <circle cx="90" cy="140" r="15" className="fill-blue-50" />
        <circle cx="90" cy="140" r="10" className="fill-transparent text-blue-500" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
      </g>

      {/* Big Checkmark */}
      <g transform="translate(180, 180)" className="animate-bounce" style={{ animationDuration: "3s" }}>
        <circle cx="30" cy="30" r="30" className="fill-primary text-primary" />
        <path
          d="M18 30 L26 38 L42 22"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
