'use client';

import React from 'react';

/**
 * Layered decorative background with brand gradient mesh, floating blobs
 * in teal + pink (matching the Impressionz logo), soft noise, and a grid
 * pattern at very low opacity for depth.
 */
export default function BackgroundGraphics() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Large teal aurora – top left */}
      <div
        className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full blur-[110px] opacity-[0.22] animate-pulse"
        style={{ background: 'radial-gradient(circle, var(--brand-teal) 0%, transparent 70%)', animationDuration: '8s' }}
      />

      {/* Pink aurora – top right (logo accent) */}
      <div
        className="absolute -top-24 -right-24 w-[440px] h-[440px] rounded-full blur-[110px] opacity-[0.14] soft-float"
        style={{ background: 'radial-gradient(circle, var(--accent-pink) 0%, transparent 70%)', animationDelay: '1.5s' }}
      />

      {/* Deep teal – bottom right */}
      <div
        className="absolute -bottom-40 -right-16 w-[460px] h-[460px] rounded-full blur-[100px] opacity-[0.10] soft-float"
        style={{ background: 'radial-gradient(circle, var(--brand-teal-deep) 0%, transparent 70%)', animationDelay: '3s' }}
      />

      {/* Soft pink – bottom left (subtle) */}
      <div
        className="absolute -bottom-24 -left-16 w-[380px] h-[380px] rounded-full blur-[100px] opacity-[0.08] soft-float"
        style={{ background: 'radial-gradient(circle, var(--accent-pink) 0%, transparent 70%)', animationDelay: '4.5s' }}
      />

      {/* Mid-page teal glow for vertical continuity */}
      <div
        className="absolute top-1/2 left-1/3 w-[560px] h-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px] opacity-[0.06] soft-float"
        style={{ background: 'radial-gradient(circle, var(--brand-teal) 0%, transparent 70%)', animationDelay: '6s' }}
      />

      {/* Dot pattern (very subtle depth) */}
      <div className="absolute inset-0 bg-pattern-dots opacity-[0.03]" />

      {/* Floating 3D ornaments */}
      <div className="absolute top-[22%] right-[8%] opacity-25 float-3d" style={{ animationDelay: '0.5s' }}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-[var(--brand-teal)]" aria-hidden>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v10M7 12h10" strokeLinecap="round" />
        </svg>
      </div>

      <div className="absolute bottom-[28%] left-[6%] opacity-20 float-3d" style={{ animationDelay: '2.5s' }}>
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-[var(--accent-pink)]" aria-hidden>
          <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="absolute top-[55%] right-[14%] opacity-15 float-3d" style={{ animationDelay: '4s' }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-[var(--brand-teal-deep)]" aria-hidden>
          <circle cx="12" cy="12" r="9" />
        </svg>
      </div>

      {/* Subtle noise for film-grain depth */}
      <div
        className="absolute inset-0 opacity-[0.015] contrast-150 pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
      />
    </div>
  );
}
