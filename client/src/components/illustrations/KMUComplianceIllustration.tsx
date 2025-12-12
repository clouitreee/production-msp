import { cn } from "@/lib/utils";

export default function KMUComplianceIllustration({
  className,
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-full h-auto", className)}
    >
      <defs>
        <linearGradient id="bg-grad-b2b" x1="0" y1="0" x2="0" y2="600">
          <stop offset="0%" stopColor="#F8FAFC" />
          <stop offset="100%" stopColor="#E2E8F0" />
        </linearGradient>
        <linearGradient id="screen-grad-b2b" x1="0" y1="0" x2="0" y2="100">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0F172A" />
        </linearGradient>
        <filter
          id="soft-shadow-b2b"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          <feGaussianBlur in="SourceAlpha" stdDeviation="8" />
          <feOffset dx="0" dy="8" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.2" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background Scene */}
      <rect width="800" height="600" fill="url(#bg-grad-b2b)" />

      {/* Floor Surface */}
      <path
        d="M50 500 L750 500 L800 600 L0 600 Z"
        fill="#CBD5E1"
        opacity="0.3"
      />

      {/* Desk */}
      <g filter="url(#soft-shadow-b2b)">
        <path d="M150 450 L650 450 L680 480 L120 480 Z" fill="#E2E8F0" />
        <path d="M120 480 L680 480 L680 500 L120 500 Z" fill="#94A3B8" />
        {/* Legs */}
        <rect x="140" y="500" width="20" height="80" fill="#64748B" />
        <rect x="640" y="500" width="20" height="80" fill="#64748B" />
      </g>

      {/* Monitor / Dashboard */}
      <g transform="translate(250, 250)" filter="url(#soft-shadow-b2b)">
        {/* Stand */}
        <rect x="130" y="150" width="40" height="50" fill="#475569" />
        <path d="M100 200 L200 200 L210 210 L90 210 Z" fill="#334155" />
        {/* Screen */}
        <rect x="0" y="0" width="300" height="180" rx="8" fill="#0F172A" />
        <rect
          x="10"
          y="10"
          width="280"
          height="160"
          rx="4"
          fill="url(#screen-grad-b2b)"
        />

        {/* Dashboard Content */}
        {/* Header */}
        <rect x="20" y="20" width="260" height="20" rx="2" fill="#334155" />
        {/* Charts */}
        <rect x="20" y="50" width="120" height="60" rx="2" fill="#1E293B" />
        <path
          d="M30 100 L50 80 L70 90 L100 60"
          stroke="#10B981"
          strokeWidth="2"
        />

        <rect x="160" y="50" width="120" height="60" rx="2" fill="#1E293B" />
        <circle
          cx="220"
          cy="80"
          r="20"
          stroke="#3B82F6"
          strokeWidth="4"
          strokeDasharray="30 100"
        />

        {/* Status Bar */}
        <rect x="20" y="120" width="260" height="40" rx="2" fill="#1E293B" />
        <circle cx="40" cy="140" r="6" fill="#10B981" />
        <rect x="60" y="135" width="100" height="10" rx="2" fill="#334155" />
      </g>

      {/* NIS2 Document */}
      <g
        transform="translate(550, 300) rotate(10)"
        filter="url(#soft-shadow-b2b)"
        className="animate-[float_8s_ease-in-out_infinite]"
      >
        <rect x="0" y="0" width="100" height="140" rx="4" fill="white" />
        <rect x="10" y="10" width="80" height="10" rx="2" fill="#E2E8F0" />
        <rect x="10" y="30" width="80" height="4" rx="2" fill="#F1F5F9" />
        <rect x="10" y="40" width="60" height="4" rx="2" fill="#F1F5F9" />

        {/* EU Stars Circle */}
        <circle
          cx="50"
          cy="80"
          r="20"
          stroke="#2563EB"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        <path
          d="M45 80 L50 85 L60 75"
          stroke="#10B981"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Padlock */}
      <g
        transform="translate(150, 350) rotate(-5)"
        filter="url(#soft-shadow-b2b)"
        className="animate-[float_6s_ease-in-out_infinite_reverse]"
      >
        <rect x="0" y="20" width="60" height="50" rx="4" fill="#F59E0B" />
        <path
          d="M10 20 V10 C10 -10 50 -10 50 10 V20"
          stroke="#94A3B8"
          strokeWidth="6"
          fill="none"
        />
        <circle cx="30" cy="45" r="6" fill="white" opacity="0.5" />
      </g>

      {/* Cloud Backup */}
      <g
        transform="translate(650, 150)"
        className="animate-[float_10s_ease-in-out_infinite]"
      >
        <path
          d="M20 40 C10 40 0 30 0 20 C0 10 10 0 20 0 C25 0 30 5 35 10 C40 5 50 5 55 10 C65 5 75 15 75 25 C75 35 65 45 55 45 H20"
          fill="white"
          filter="url(#soft-shadow-b2b)"
        />
        <path
          d="M37 25 V15 M37 15 L32 20 M37 15 L42 20"
          stroke="#3B82F6"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
