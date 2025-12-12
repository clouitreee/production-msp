import { cn } from "@/lib/utils";

export default function HomeSupportIllustration({
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
        <linearGradient id="bg-grad" x1="0" y1="0" x2="0" y2="600">
          <stop offset="0%" stopColor="#F4F6F8" />
          <stop offset="100%" stopColor="#E0F2F1" />
        </linearGradient>
        <linearGradient id="laptop-grad" x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" stopColor="#94A3B8" />
          <stop offset="100%" stopColor="#64748B" />
        </linearGradient>
        <linearGradient id="screen-grad" x1="0" y1="0" x2="0" y2="100">
          <stop offset="0%" stopColor="#0F766E" />
          <stop offset="100%" stopColor="#115E59" />
        </linearGradient>
        <filter id="soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="10" />
          <feOffset dx="0" dy="10" result="offsetblur" />
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
      <rect width="800" height="600" fill="url(#bg-grad)" />

      {/* Floor/Desk Surface */}
      <path
        d="M100 450 L700 450 L750 550 L50 550 Z"
        fill="#E2E8F0"
        opacity="0.5"
      />

      {/* Laptop Base */}
      <g filter="url(#soft-shadow)">
        <path d="M250 400 L550 400 L580 420 L220 420 Z" fill="#CBD5E1" />
        <path d="M220 420 L580 420 L580 430 L220 430 Z" fill="#94A3B8" />
      </g>

      {/* Laptop Screen */}
      <g transform="translate(0, -10)">
        <path d="M250 400 L550 400 L550 200 L250 200 Z" fill="#1E293B" />
        <rect
          x="260"
          y="210"
          width="280"
          height="180"
          fill="url(#screen-grad)"
        />

        {/* Screen Content */}
        <circle cx="400" cy="300" r="40" fill="white" opacity="0.1" />
        <path
          d="M380 300 L400 320 L420 280"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* Router */}
      <g transform="translate(600, 380)" filter="url(#soft-shadow)">
        <rect x="0" y="0" width="80" height="40" rx="4" fill="white" />
        <circle
          cx="20"
          cy="20"
          r="4"
          fill="#10B981"
          className="animate-pulse"
        />
        <circle
          cx="40"
          cy="20"
          r="4"
          fill="#10B981"
          className="animate-pulse delay-75"
        />
        <circle
          cx="60"
          cy="20"
          r="4"
          fill="#10B981"
          className="animate-pulse delay-150"
        />
        <path
          d="M10 -20 L10 0"
          stroke="#CBD5E1"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="M70 -20 L70 0"
          stroke="#CBD5E1"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>

      {/* Floating Remote Help Bubble */}
      <g
        className="animate-[float_6s_ease-in-out_infinite]"
        transform="translate(150, 250)"
      >
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="white"
          filter="url(#soft-shadow)"
        />
        <circle cx="50" cy="50" r="36" fill="#FB923C" opacity="0.1" />
        {/* Avatar Head */}
        <circle cx="50" cy="40" r="12" fill="#FB923C" />
        {/* Avatar Body */}
        <path d="M30 70 Q50 80 70 70 V70 H30 V70 Z" fill="#FB923C" />
        {/* Chat Dots */}
        <circle cx="80" cy="20" r="10" fill="#0F766E" />
        <circle cx="80" cy="20" r="3" fill="white" />
      </g>

      {/* Shield Icon */}
      <g
        transform="translate(450, 150)"
        className="animate-[float_8s_ease-in-out_infinite_reverse]"
      >
        <path
          d="M25 0 L50 10 V25 C50 40 25 50 25 50 C25 50 0 40 0 25 V10 L25 0 Z"
          fill="#10B981"
          filter="url(#soft-shadow)"
        />
        <path
          d="M15 25 L22 32 L35 18"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
