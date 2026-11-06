import React from 'react';

export function FineLocationPin({ className = "w-5 h-5", strokeWidth = 1.4 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 21.2C12 21.2 5.5 14.5 5.5 9.8A6.5 6.5 0 0 1 18.5 9.8C18.5 14.5 12 21.2 12 21.2Z" />
      <circle cx="12" cy="9.8" r="2.2" strokeWidth={strokeWidth} />
    </svg>
  );
}

export function FineArrow({ className = "w-5 h-5", strokeWidth = 1.4 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="4.5" y1="12" x2="19.5" y2="12" />
      <polyline points="13.5 6 19.5 12 13.5 18" />
    </svg>
  );
}

export function MohawkWaveInsignia({ className = "w-10 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 32" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4 24 L16 8 L24 20 L32 8 L44 24 L36 24 L28 12 L20 24 Z" />
      <path d="M22 24 L34 8 L42 20 L50 8 L62 24 L54 24 L46 12 L38 24 Z" />
    </svg>
  );
}
