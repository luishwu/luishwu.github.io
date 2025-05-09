// src/components/icons/UkFlagIcon.tsx
import type React from 'react';

export function UkFlagIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 30" // Common 2:1 aspect ratio
      className={className}
      aria-label="Simplified Flag of the United Kingdom"
    >
      <defs>
        <clipPath id="uk-clip">
          <rect width="60" height="30" />
        </clipPath>
      </defs>
      <g clipPath="url(#uk-clip)">
        {/* Background Blue */}
        <rect width="60" height="30" fill="#012169" />
        {/* White Saltire (St. Andrew) */}
        <path d="M0,0 L60,30 M0,30 L60,0" stroke="#FFFFFF" strokeWidth="6" />
        {/* Red Saltire (St. Patrick) - slightly thinner and on top */}
        <path d="M0,0 L60,30 M0,30 L60,0" stroke="#C8102E" strokeWidth="3.6" />
        {/* White Border for St. George's Cross */}
        <path d="M30,0 V30 M0,15 H60" stroke="#FFFFFF" strokeWidth="10" />
        {/* Red St. George's Cross */}
        <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}
