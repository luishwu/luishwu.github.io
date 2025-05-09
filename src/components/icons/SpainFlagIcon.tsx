// src/components/icons/SpainFlagIcon.tsx
import type React from 'react';

export function SpainFlagIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 20" // Aspect ratio 3:2
      className={className}
      aria-label="Flag of Spain"
    >
      <rect width="30" height="5" fill="#C60B1E" /> {/* Top Red */}
      <rect y="5" width="30" height="10" fill="#FFC400" /> {/* Middle Yellow */}
      <rect y="15" width="30" height="5" fill="#C60B1E" /> {/* Bottom Red */}
    </svg>
  );
}
