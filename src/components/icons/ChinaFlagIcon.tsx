// src/components/icons/ChinaFlagIcon.tsx
import type React from 'react';

export function ChinaFlagIcon({ className }: { className?: string }) {
  const star = (cx: string, cy: string, r: string, rotate?: string) => (
    <polygon
      // Standard 5-point star shape
      points="0,-10 2.9389,-3.0902 9.5106,-3.0902 4.7553,1.1803 6.1803,8.0902 0,5 -6.1803,8.0902 -4.7553,1.1803 -9.5106,-3.0902 -2.9389,-3.0902"
      fill="#FFDE00" // Yellow
      transform={`translate(${cx}, ${cy}) scale(${r}) ${rotate ? `rotate(${rotate})` : ''}`}
    />
  );
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 200" // Aspect ratio 3:2
      className={className}
      aria-label="Flag of China"
    >
      <rect width="300" height="200" fill="#EE1C25" /> {/* Red background */}
      {/* Large star: position (50,50), scale factor 3 (radius 30) */}
      {star("50", "50", "3")}
      {/* Small stars: positions and rotations relative to the large star, scale factor 1 (radius 10) */}
      {star("100", "20", "1", "325")} 
      {star("120", "40", "1", "350")}
      {star("120", "70", "1", "15")}
      {star("100", "90", "1", "40")}
    </svg>
  );
}
