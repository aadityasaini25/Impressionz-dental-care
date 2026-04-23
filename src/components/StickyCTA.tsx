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
        className="fixed bottom-24 left-6 z-50 bg-[#485b51] text-white p-4 rounded-full shadow-2xl hover:scale-105 transition-all flex items-center gap-2 animate-in fade-in slide-in-from-bottom-5"
        aria-label="Expand Book Appointment"
      >
        <span>📅</span>
        <span className="hidden sm:inline font-bold text-sm tracking-widest uppercase">Quick Actions</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-4xl glass-premium shadow-2xl rounded-[32px] p-6 z-50 animate-in fade-in slide-in-from-bottom-5 duration-700 border border-white/50 backdrop-blur-2xl">
      <button
        onClick={() => setIsMinimized(true)}
        className="absolute -top-3 -right-3 bg-white text-gray-500 hover:text-gray-900 rounded-full w-8 h-8 shadow-md flex items-center justify-center border border-gray-100 transition-colors z-10"
        aria-label="Minimize"
      >
        ✕
      </button>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-bold text-xl text-gray-900 mb-1">Affordable Implants in {branch?.name || "Mumbai"}</h3>
          <p className="text-[#72b1b1] font-bold">₹27,000* - Special Offer</p>
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <button
            onClick={onBookAppointment}
            className="flex-1 md:flex-none bg-[#72b1b1] text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-[#5a8d8d] hover:-translate-y-1 transition-all"
          >
            Claim Offer
          </button>
          {primaryPhone && (
            <a
              href={`tel:${primaryPhone.replace(/\s/g, '')}`}
              className="flex items-center justify-center bg-white text-[#485b51] border-2 border-[#72b1b1]/20 px-6 py-3.5 rounded-full font-bold text-sm hover:bg-[#72b1b1]/5 transition-colors"
            >
              📞 Call Now
            </a>
          )}
        </div>
      </div>
    </div>
  );
} 