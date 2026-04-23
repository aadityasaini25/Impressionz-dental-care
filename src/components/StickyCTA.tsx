"use client";

import { useState } from "react";
import { BranchConfig } from "@/config/branch-configs";

interface StickyCtaProps {
  isVisible: boolean;
  onBookAppointment: () => void;
  branch?: BranchConfig;
}

export default function StickyCTA({ isVisible, onBookAppointment, branch }: StickyCtaProps) {
  const [isMinimized, setIsMinimized] = useState(false);

  if (!isVisible) return null;

  const primaryPhone = branch ? branch.contact.phones[0] : "";

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-6 left-4 md:bottom-24 md:left-6 z-40 bg-[var(--brand-teal-deep)] text-white py-3 px-4 rounded-full shadow-2xl hover:scale-105 transition-all flex items-center gap-2 animate-in fade-in slide-in-from-bottom-5"
        aria-label="Expand Book Appointment"
      >
        <span>📅</span>
        <span className="hidden sm:inline font-bold text-sm tracking-widest uppercase">Quick Actions</span>
      </button>
    );
  }

  return (
    <div
      className={[
        // Mobile: sit above WhatsApp (which is bottom-6 right-6) and leave right gutter so it doesn't overlap.
        "fixed bottom-24 z-40 glass-premium shadow-2xl rounded-[28px] p-4 md:p-6",
        // Mobile width: full minus right gutter for WhatsApp. Desktop: centered max width.
        "left-4 right-20 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-[calc(100%-2rem)] md:max-w-4xl",
        "animate-in fade-in slide-in-from-bottom-5 duration-700 border border-white/50 backdrop-blur-2xl",
      ].join(" ")}
    >
      <button
        onClick={() => setIsMinimized(true)}
        className="absolute -top-3 -right-3 bg-white text-gray-500 hover:text-gray-900 rounded-full w-8 h-8 shadow-md flex items-center justify-center border border-gray-100 transition-colors z-10"
        aria-label="Minimize"
      >
        ✕
      </button>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-bold text-base md:text-xl text-gray-900 mb-0.5 md:mb-1 leading-tight">
            Affordable Implants{branch ? ` in ${branch.name}` : ""}
          </h3>
          <p className="text-[var(--brand-teal)] font-bold text-xs md:text-base">{branch?.pricing.implant || "₹27,000 onwards*"}</p>
        </div>
        <div className="flex gap-2 md:gap-4 w-full md:w-auto">
          <button
            onClick={onBookAppointment}
            className="flex-1 md:flex-none bg-[var(--brand-teal)] text-white px-4 md:px-8 py-3 md:py-3.5 rounded-full font-bold text-xs md:text-sm tracking-widest uppercase hover:bg-[var(--brand-teal-dark)] hover:-translate-y-1 transition-all"
          >
            Book Now
          </button>
          {primaryPhone && (
            <a
              href={`tel:${primaryPhone.replace(/\s/g, '')}`}
              className="flex items-center justify-center bg-white text-[var(--brand-teal-deep)] border-2 border-[var(--brand-teal)]/20 px-4 md:px-6 py-3 md:py-3.5 rounded-full font-bold text-xs md:text-sm hover:bg-[var(--brand-teal)]/5 transition-colors"
              aria-label="Call now"
            >
              📞 <span className="hidden sm:inline ml-1">Call</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
