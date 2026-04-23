'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { BranchConfig } from "@/config/branch-configs";

interface HeaderProps {
  onBookAppointment: () => void;
  branch?: BranchConfig;
}

export default function Header({ onBookAppointment, branch }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    let lastScrolled = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const next = window.scrollY > 20;
        if (next !== lastScrolled) {
          lastScrolled = next;
          setIsScrolled(next);
        }
        ticking = false;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const locationName = branch ? branch.name : "Mumbai";
  const primaryPhone = branch ? branch.contact.phones[0] : "";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'glass-header scrolled py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-8">
          <div className="bg-white p-1 rounded-xl shadow-sm border border-gray-100">
            <Image
              src="/images/logo.webp"
              alt="Impressionz Dental Care"
              width={160}
              height={50}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </div>
          <a 
            href={branch?.contact.googleMapsLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden lg:block group/loc hover:opacity-80 transition-opacity"
          >
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-0.5 group-hover/loc:text-[#72b1b1] transition-colors">Location</p>
            <p className="text-xs font-semibold text-gray-700 flex items-center gap-1">
              {locationName}
              <span className="text-[10px] opacity-0 group-hover/loc:opacity-100 transition-opacity">↗</span>
            </p>
          </a>
        </div>

        <div className="flex items-center gap-4 md:gap-8">
          <div className="hidden sm:block text-right">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-0.5">Call Specialist</p>
            <a href={`tel:${primaryPhone.replace(/\s/g, '')}`} className="text-sm font-bold text-[#485b51] hover:text-[#72b1b1] transition-colors">
              {primaryPhone}
            </a>
          </div>
          <button
            onClick={onBookAppointment}
            className="bg-[var(--brand-teal)] text-white px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider hover:bg-[var(--brand-teal-dark)] hover:-translate-y-0.5 transition-all btn-3d gradient-sheen"
          >
            Book Appointment
          </button>
        </div>
      </div>
    </header>
  );
}