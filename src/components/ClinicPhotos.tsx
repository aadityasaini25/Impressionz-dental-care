'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { BranchConfig } from "@/config/branch-configs";

interface ClinicPhotosProps {
  onBookAppointment: () => void;
  branch?: BranchConfig;
}

export default function ClinicPhotos({ onBookAppointment, branch }: ClinicPhotosProps) {
  const clinicImages = branch?.clinicImages || [];
  const address = branch ? branch.contact.address : "Mumbai";

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const isOpen = lightboxIndex !== null;

  const close = useCallback(() => setLightboxIndex(null), []);

  const next = useCallback(() => {
    setLightboxIndex((idx) => {
      if (idx === null) return null;
      return (idx + 1) % clinicImages.length;
    });
  }, [clinicImages.length]);

  const prev = useCallback(() => {
    setLightboxIndex((idx) => {
      if (idx === null) return null;
      return (idx - 1 + clinicImages.length) % clinicImages.length;
    });
  }, [clinicImages.length]);

  // Keyboard handlers for lightbox
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);

    // Lock scroll while open
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
    };
  }, [isOpen, close, next, prev]);

  // Touch swipe on mobile
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => setTouchStartX(e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(diff) > 50) {
      if (diff < 0) next();
      else prev();
    }
    setTouchStartX(null);
  };

  const active = lightboxIndex !== null ? clinicImages[lightboxIndex] : null;

  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8 overflow-hidden" id="gallery">
      <div aria-hidden className="pointer-events-none absolute top-1/3 -right-20 w-80 h-80 rounded-full blur-3xl opacity-20"
           style={{ background: 'radial-gradient(circle, var(--accent-pink) 0%, transparent 70%)' }} />
      <div aria-hidden className="pointer-events-none absolute -top-10 -left-10 w-80 h-80 rounded-full blur-3xl opacity-20"
           style={{ background: 'radial-gradient(circle, var(--brand-teal) 0%, transparent 70%)' }} />
      <div className="relative max-w-[95%] 2xl:max-w-screen-2xl mx-auto w-full text-center md:text-left">
        <span className="inline-flex items-center gap-2 badge-pink px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-white/90" />
          Our Facility
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
          Our <span className="text-gradient-logo">Clinic</span> {branch ? `- ${branch.name}` : ''}
        </h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-[var(--accent-pink)] to-[var(--brand-teal)] rounded-full mb-4 mx-auto md:mx-0" />
        {/* Address card — mobile-first. Clear hierarchy across the three
            segments (building, landmark, area+pincode) and an always-visible
            "Open in Maps" action (hover-only was invisible on phones). */}
        {(() => {
          const lines = address.split(" | ");
          const [building, landmark, area] = [lines[0], lines[1], lines[2]];
          return (
            <a
              href={branch?.contact.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group block mb-12 mx-auto md:mx-0 w-full max-w-xl text-left rounded-2xl bg-white/70 border border-[var(--brand-teal)]/15 p-4 sm:p-5 md:p-6 hover:border-[var(--brand-teal)]/40 hover:bg-white transition-colors"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                {/* Pin badge */}
                <div
                  aria-hidden
                  className="shrink-0 mt-0.5 w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(236,47,138,0.12) 0%, rgba(114,177,177,0.14) 100%)',
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[var(--brand-teal-deep)]"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>

                {/* Address lines */}
                <div className="flex-1 min-w-0">
                  {building && (
                    <p className="font-semibold text-gray-900 text-[15px] sm:text-base leading-snug break-words">
                      {building}
                    </p>
                  )}
                  {landmark && (
                    <p className="text-gray-500 text-[13px] sm:text-sm mt-1 leading-snug break-words">
                      {landmark}
                    </p>
                  )}
                  {area && (
                    <p className="text-gray-800 text-[13.5px] sm:text-sm mt-1.5 leading-snug font-medium break-words">
                      {area}
                    </p>
                  )}
                </div>
              </div>

              {/* Action row — always visible on mobile */}
              <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.15em] text-[var(--brand-teal-deep)]">
                  Open in Google Maps
                </span>
                <span
                  aria-hidden
                  className="inline-flex items-center gap-1 text-[var(--brand-teal-deep)] text-sm transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
            </a>
          );
        })()}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 text-left">
          {clinicImages.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setLightboxIndex(i)}
              className="relative aspect-[4/3] rounded-[20px] overflow-hidden shadow-md group border-4 border-white card-3d-tilt focus:outline-none focus:ring-2 focus:ring-[var(--brand-teal)]/60 focus:ring-offset-2"
              aria-label={`View larger image: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-[10px] font-bold text-[var(--brand-teal-deep)] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                🔍 Expand
              </div>
            </button>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onBookAppointment}
            className="bg-[var(--brand-teal)] text-white px-10 py-4 rounded-xl font-semibold text-base hover:bg-[var(--brand-teal-dark)] transition-all btn-3d gradient-sheen"
          >
            Visit Our {branch?.name || "Clinic"}
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && active && (
        <div
          className="fixed inset-0 z-[70] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label="Clinic photo viewer"
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); close(); }}
            aria-label="Close"
            className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl font-light flex items-center justify-center transition-colors z-10"
          >
            ×
          </button>

          {clinicImages.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); prev(); }}
                aria-label="Previous image"
                className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl items-center justify-center transition-colors"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); next(); }}
                aria-label="Next image"
                className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl items-center justify-center transition-colors"
              >
                ›
              </button>
            </>
          )}

          <div
            className="relative w-full max-w-5xl aspect-[4/3] animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={active.src}
              alt={active.alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {clinicImages.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {clinicImages.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === lightboxIndex ? "bg-white w-6" : "bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
