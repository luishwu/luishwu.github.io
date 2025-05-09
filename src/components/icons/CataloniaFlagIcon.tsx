// src/components/icons/CataloniaFlagIcon.tsx
import type React from 'react';

export function CataloniaFlagIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 27 18" // Aspect ratio 3:2 (standard for Senyera is 2:3, but this is easier for 9 stripes)
      className={className}
      aria-label="Flag of Catalonia"
    >
      <rect width="27" height="18" fill="#FFDC00" /> {/* Yellow background */}
      <rect y="2" width="27" height="2" fill="#DA121A" /> {/* Red stripe 1 */}
      <rect y="6" width="27" height="2" fill="#DA121A" /> {/* Red stripe 2 */}
      <rect y="10" width="27" height="2" fill="#DA121A" /> {/* Red stripe 3 */}
      <rect y="14" width="27" height="2" fill="#DA121A" /> {/* Red stripe 4 */}
    </svg>
  );
}
