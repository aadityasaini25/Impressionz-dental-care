'use client';

import React from 'react';

export default function BackgroundGraphics() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Dynamic Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#72b1b1] rounded-full blur-[80px] opacity-[0.08] animate-pulse" />
      <div className="absolute bottom-[-5%] right-[-5%] w-[400px] h-[400px] bg-[#485b51] rounded-full blur-[70px] opacity-[0.05] soft-float" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-pattern-dots opacity-[0.02]" />

      {/* Decorative SVG Icons - Floating */}
      <div className="absolute top-1/4 right-[10%] opacity-20 soft-float" style={{ animationDelay: '1s' }}>
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#72b1b1]">
          <path d="M7 12c0 3.866 3.134 7 7 7s7-3.134 7-7-3.134-7-7-7-7 3.134-7 7z" />
          <path d="M12 9l2 2-2 2" />
        </svg>
      </div>

      <div className="absolute bottom-1/3 left-[5%] opacity-15 soft-float" style={{ animationDelay: '3s' }}>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-[#485b51]">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
        </svg>
      </div>

      {/* Subtle Noise Texture */}
      <div className="absolute inset-0 opacity-[0.015] contrast-150 brightness-100 pointer-events-none" 
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} />
    </div>
  );
}
