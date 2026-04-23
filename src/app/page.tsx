'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { branches } from "@/config/branch-configs";

type BranchStats = {
  slug: 'borivali' | 'andheri';
  stats: { value: string; label: string }[];
  specialties: string[];
  accentIcon: string;
};

const extra: Record<string, BranchStats> = {
  borivali: {
    slug: 'borivali',
    stats: [
      { value: '14+', label: 'Years' },
      { value: '15K+', label: 'Smiles' },
      { value: '4.9★', label: 'Rating' },
    ],
    specialties: ['Invisalign', 'Braces', 'Implants', 'Kids'],
    accentIcon: '🦷',
  },
  andheri: {
    slug: 'andheri',
    stats: [
      { value: '7 Days', label: 'Open' },
      { value: 'NYU', label: 'Certified' },
      { value: '4.9★', label: 'Rating' },
    ],
    specialties: ['Cosmetic', 'Full-mouth', 'Scanners', 'Implants'],
    accentIcon: '✨',
  },
};

export default function Home() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  // Mouse parallax — desktop only, rAF-throttled. Skipped on touch devices
  // and small viewports where it's invisible anyway and just wastes CPU.
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const isTouch =
      window.matchMedia('(hover: none), (pointer: coarse)').matches ||
      window.innerWidth < 1024;
    if (isTouch) return;

    let rafId = 0;
    let latestX = 0;
    let latestY = 0;

    const handler = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      latestX = (e.clientX / innerWidth - 0.5) * 2;
      latestY = (e.clientY / innerHeight - 0.5) * 2;
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = 0;
        setMouse({ x: latestX, y: latestY });
      });
    };

    window.addEventListener('mousemove', handler, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handler);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  // Reveal sections + .fade-up elements on mount (IntersectionObserver for staggered entry)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05 }
    );

    document.querySelectorAll('section, .fade-up').forEach((el) => observer.observe(el));

    // Safety fallback: ensure everything is visible after 400ms in case observer misses
    const timer = setTimeout(() => {
      document.querySelectorAll('section, .fade-up').forEach((el) => el.classList.add('visible'));
    }, 400);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const parallax = (mult: number) => ({
    transform: `translate3d(${mouse.x * mult}px, ${mouse.y * mult}px, 0)`,
  });

  const branchList = Object.values(branches);

  return (
    <div
      ref={heroRef}
      className="relative min-h-screen overflow-hidden"
      style={{
        background: 'radial-gradient(at 12% 8%, rgba(114, 177, 177, 0.22) 0px, transparent 55%), radial-gradient(at 88% 6%, rgba(236, 47, 138, 0.14) 0px, transparent 50%), radial-gradient(at 30% 95%, rgba(236, 47, 138, 0.10) 0px, transparent 55%), radial-gradient(at 85% 90%, rgba(114, 177, 177, 0.16) 0px, transparent 55%), #fafbfb',
      }}
    >
      {/* === Animated decorative blobs with parallax === */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Mobile-safe: smaller offsets, smaller sizes, so no horizontal bleed on small viewports */}
        <div
          className="absolute -top-20 -left-20 sm:-top-32 sm:-left-32 w-[320px] h-[320px] sm:w-[640px] sm:h-[640px] rounded-full blur-[80px] sm:blur-[120px] opacity-[0.28] animate-pulse"
          style={{ ...parallax(-20), background: 'radial-gradient(circle, var(--brand-teal) 0%, transparent 70%)', animationDuration: '10s', transition: 'transform 0.4s ease-out' }}
        />
        <div
          className="absolute -top-12 -right-20 sm:-top-20 sm:-right-32 w-[300px] h-[300px] sm:w-[560px] sm:h-[560px] rounded-full blur-[80px] sm:blur-[110px] opacity-[0.22]"
          style={{ ...parallax(18), background: 'radial-gradient(circle, var(--accent-pink) 0%, transparent 70%)', transition: 'transform 0.4s ease-out' }}
        />
        <div
          className="absolute -bottom-24 sm:-bottom-40 left-1/3 w-[360px] h-[360px] sm:w-[600px] sm:h-[600px] rounded-full blur-[90px] sm:blur-[130px] opacity-[0.18]"
          style={{ ...parallax(-10), background: 'radial-gradient(circle, var(--accent-pink) 0%, transparent 70%)', transition: 'transform 0.4s ease-out' }}
        />

        {/* Floating 3D ornaments — hidden on smallest screens to keep mobile clean */}
        <svg aria-hidden className="hidden sm:block absolute top-[14%] left-[8%] float-3d" style={{ ...parallax(22), width: 80, height: 80, transition: 'transform 0.3s ease-out' }} viewBox="0 0 80 80">
          <defs>
            <radialGradient id="orb-pink" cx="30%" cy="30%">
              <stop offset="0%" stopColor="#ffb3d1" />
              <stop offset="60%" stopColor="#ec2f8a" />
              <stop offset="100%" stopColor="#7a164a" />
            </radialGradient>
          </defs>
          <circle cx="40" cy="40" r="28" fill="url(#orb-pink)" opacity="0.85" />
          <circle cx="32" cy="30" r="6" fill="white" opacity="0.5" />
        </svg>

        <svg aria-hidden className="hidden sm:block absolute top-[20%] right-[12%] float-3d" style={{ ...parallax(-26), width: 96, height: 96, animationDelay: '1.5s', transition: 'transform 0.3s ease-out' }} viewBox="0 0 96 96">
          <defs>
            <radialGradient id="orb-teal" cx="30%" cy="30%">
              <stop offset="0%" stopColor="#b8e0e0" />
              <stop offset="60%" stopColor="#72b1b1" />
              <stop offset="100%" stopColor="#2d4f4f" />
            </radialGradient>
          </defs>
          <circle cx="48" cy="48" r="36" fill="url(#orb-teal)" opacity="0.82" />
          <circle cx="38" cy="36" r="8" fill="white" opacity="0.5" />
        </svg>

        {/* Keep two small sparkles visible on mobile for charm */}
        <svg aria-hidden className="absolute top-[12%] right-[6%] float-3d" style={{ ...parallax(30), width: 22, height: 22, animationDelay: '2s', transition: 'transform 0.3s ease-out' }} viewBox="0 0 40 40">
          <path d="M20 2 L23 17 L38 20 L23 23 L20 38 L17 23 L2 20 L17 17 Z" fill="var(--accent-pink)" opacity="0.7" />
        </svg>
        <svg aria-hidden className="hidden sm:block absolute top-[40%] left-[6%] float-3d" style={{ ...parallax(30), width: 36, height: 36, animationDelay: '2s', transition: 'transform 0.3s ease-out' }} viewBox="0 0 40 40">
          <path d="M20 2 L23 17 L38 20 L23 23 L20 38 L17 23 L2 20 L17 17 Z" fill="var(--accent-pink)" opacity="0.65" />
        </svg>
        <svg aria-hidden className="hidden sm:block absolute top-[62%] right-[7%] float-3d" style={{ ...parallax(-30), width: 28, height: 28, animationDelay: '3s', transition: 'transform 0.3s ease-out' }} viewBox="0 0 40 40">
          <path d="M20 2 L23 17 L38 20 L23 23 L20 38 L17 23 L2 20 L17 17 Z" fill="var(--brand-teal)" opacity="0.7" />
        </svg>
        <svg aria-hidden className="absolute bottom-[8%] left-[8%] float-3d" style={{ ...parallax(14), width: 26, height: 26, animationDelay: '0.8s', transition: 'transform 0.3s ease-out' }} viewBox="0 0 40 40">
          <path d="M20 2 L23 17 L38 20 L23 23 L20 38 L17 23 L2 20 L17 17 Z" fill="var(--accent-pink)" opacity="0.55" />
        </svg>

        {/* Plus marks — tablet+ only */}
        <svg aria-hidden className="hidden md:block absolute top-[8%] left-[46%]" style={{ ...parallax(12), width: 24, height: 24, transition: 'transform 0.3s ease-out' }} viewBox="0 0 24 24">
          <path d="M12 3v18M3 12h18" stroke="var(--brand-teal)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        </svg>
        <svg aria-hidden className="hidden md:block absolute bottom-[25%] right-[18%]" style={{ ...parallax(-16), width: 20, height: 20, transition: 'transform 0.3s ease-out' }} viewBox="0 0 24 24">
          <path d="M12 3v18M3 12h18" stroke="var(--accent-pink)" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
        </svg>

        {/* Big 3D tooth illustration — tablet+ only */}
        <svg aria-hidden className="hidden md:block absolute top-[5%] right-[28%] opacity-[0.10]" style={{ ...parallax(-8), width: 220, height: 220, transition: 'transform 0.4s ease-out' }} viewBox="0 0 200 200">
          <defs>
            <radialGradient id="tooth-grad" cx="40%" cy="30%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#e6f3f3" />
              <stop offset="100%" stopColor="#72b1b1" />
            </radialGradient>
          </defs>
          <path d="M100 25 C70 25 50 50 55 85 C58 110 65 135 72 160 C76 175 84 180 92 175 C96 172 98 165 99 155 C100 145 101 140 102 140 C103 140 104 145 105 155 C106 165 108 172 112 175 C120 180 128 175 132 160 C139 135 146 110 149 85 C154 50 134 25 104 25 Z" fill="url(#tooth-grad)" />
        </svg>
      </div>

      {/* === Top bar === */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-5 sm:pt-6 md:pt-10 flex items-center justify-between gap-3">
        <div className="bg-white px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl depth-stack inline-flex items-center gap-3 shrink-0">
          <Image
            src="/images/logo.webp"
            alt="Impressionz Dental Care"
            width={120}
            height={40}
            className="h-8 sm:h-9 md:h-10 w-auto"
            priority
          />
        </div>
        <span className="inline-flex items-center gap-1.5 badge-pink px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] shrink">
          <span className="w-1.5 h-1.5 rounded-full bg-white/90 animate-pulse shrink-0" />
          <span className="truncate">Mumbai · 2 branches</span>
        </span>
      </div>

      {/* === Hero headline === */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-8 sm:pt-10 md:pt-16 pb-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md border border-[var(--brand-teal)]/20 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold text-[var(--brand-teal-deep)] depth-stack mb-6 fade-up">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Painless · Premium · Personalized
        </div>

        <h1 className="text-[2.5rem] sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-gray-900 leading-[1.05] sm:leading-[0.95] mb-6 fade-up">
          Welcome to{' '}
          <span className="relative inline-block">
            <span className="text-gradient-logo">Impressionz</span>
            <svg aria-hidden viewBox="0 0 220 14" className="absolute -bottom-1 sm:-bottom-3 left-0 w-full" preserveAspectRatio="none">
              <path d="M2 10 Q60 2, 110 8 T 218 6" stroke="url(#under-grad)" strokeWidth="5" strokeLinecap="round" fill="none" />
              <defs>
                <linearGradient id="under-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ec2f8a" />
                  <stop offset="100%" stopColor="#72b1b1" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light mb-8 fade-up stagger-1">
          Specialist-led, affordable, and completely painless dental care in Mumbai.{' '}
          <span className="text-[var(--brand-teal-deep)] font-semibold">Choose your branch</span> — we&apos;ll take it from there.
        </p>

        {/* Stats strip — 2x2 grid on mobile, horizontal row on tablet+ */}
        <div className="inline-grid grid-cols-2 sm:inline-flex sm:flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-6 md:gap-10 bg-white/80 backdrop-blur-md px-5 sm:px-6 py-4 rounded-2xl depth-stack border border-white/60 fade-up stagger-2 w-full max-w-md sm:max-w-none sm:w-auto">
          {[
            { v: '2', l: 'Branches' },
            { v: '14+', l: 'Years' },
            { v: '15K+', l: 'Smiles' },
            { v: '4.9★', l: 'Rating' },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-6">
              <div className="text-center flex-1 sm:flex-initial">
                <p className="text-2xl md:text-3xl font-black text-gradient-logo leading-none">{s.v}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold mt-1">{s.l}</p>
              </div>
              {i < 3 && <span className="hidden sm:block w-px h-8 bg-gradient-to-b from-transparent via-gray-300 to-transparent" />}
            </div>
          ))}
        </div>
      </section>

      {/* === Branch Cards === */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pb-20 md:pb-28">
        <p className="text-center text-[10px] sm:text-xs uppercase tracking-[0.3em] text-gray-500 font-bold mb-8 sm:mb-10">
          <span className="inline-block w-6 sm:w-8 h-px bg-gradient-to-r from-transparent to-gray-300 align-middle mr-3" />
          Pick your branch
          <span className="inline-block w-6 sm:w-8 h-px bg-gradient-to-l from-transparent to-gray-300 align-middle ml-3" />
        </p>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {branchList.map((branch, idx) => {
            const meta = extra[branch.slug];
            const isAndheri = branch.slug === 'andheri';
            return (
              <Link
                key={branch.slug}
                href={`/${branch.slug}`}
                className="group relative block"
              >
                <div
                  className={`relative overflow-hidden rounded-[28px] sm:rounded-[36px] bg-white border border-white/80 depth-stack card-3d-tilt fade-up ${isAndheri ? 'stagger-2' : 'stagger-1'} min-h-[460px] sm:min-h-[520px] md:min-h-[560px]`}
                >
                  {/* Gradient overlay for text legibility */}
                  <div className="absolute inset-0 z-10"
                       style={{
                         background: 'linear-gradient(165deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.0) 30%, rgba(26,37,38,0.65) 60%, rgba(26,37,38,0.94) 100%)',
                       }} />

                  {/* Doctor photo background */}
                  <div className="absolute inset-0">
                    <Image
                      src={branch.doctor.image}
                      alt={branch.doctor.name}
                      fill
                      className="object-cover object-top transition-transform duration-[1.5s] group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={idx < 2}
                    />
                  </div>

                  {/* Corner glow – pink or teal depending on branch (sized smaller on mobile) */}
                  <div aria-hidden className="absolute -top-10 -right-10 sm:-top-20 sm:-right-20 w-40 h-40 sm:w-64 sm:h-64 rounded-full blur-2xl sm:blur-3xl opacity-60 z-10 pointer-events-none"
                       style={{ background: `radial-gradient(circle, ${isAndheri ? 'var(--accent-pink)' : 'var(--brand-teal)'} 0%, transparent 70%)` }} />
                  <div aria-hidden className="absolute -bottom-10 -left-10 sm:-bottom-20 sm:-left-20 w-44 h-44 sm:w-72 sm:h-72 rounded-full blur-2xl sm:blur-3xl opacity-50 z-10 pointer-events-none"
                       style={{ background: `radial-gradient(circle, ${isAndheri ? 'var(--brand-teal)' : 'var(--accent-pink)'} 0%, transparent 70%)` }} />

                  {/* Top badges */}
                  <div className="absolute top-3.5 sm:top-5 left-3.5 sm:left-5 right-3.5 sm:right-5 z-20 flex justify-between items-start gap-2">
                    <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-[0.15em] sm:tracking-[0.18em] text-[var(--brand-teal-deep)] shadow-lg">
                      <span>📍</span>
                      Branch {idx + 1}
                    </span>
                    <span className={`inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-[0.12em] sm:tracking-[0.18em] text-white shadow-lg ${
                      isAndheri
                        ? 'bg-gradient-to-r from-[var(--accent-pink)] to-[var(--accent-pink-dark)]'
                        : 'bg-gradient-to-r from-[var(--brand-teal-deep)] to-[var(--brand-teal)]'
                    }`}>
                      {meta.accentIcon} {isAndheri ? 'Cosmetic' : 'Ortho'} Lead
                    </span>
                  </div>

                  {/* Floating stat chips — horizontal strip on mobile, vertical stack on desktop */}
                  <div className="absolute top-16 sm:top-24 right-3 sm:right-5 left-3 sm:left-auto z-20 flex sm:flex-col gap-2 justify-end sm:items-end">
                    {meta.stats.map((s, i) => (
                      <div
                        key={i}
                        className="bg-white/95 backdrop-blur-md px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg sm:rounded-xl shadow-lg float-3d"
                        style={{ animationDelay: `${i * 0.4}s` }}
                      >
                        <p className="text-xs sm:text-sm font-black text-gray-900 leading-none">{s.value}</p>
                        <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.12em] sm:tracking-[0.15em] text-gray-500 font-bold mt-0.5">{s.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Bottom content */}
                  <div className="relative z-20 h-full flex flex-col justify-end p-5 sm:p-6 md:p-8 text-white min-h-[460px] sm:min-h-[520px] md:min-h-[560px]">
                    <div className="mb-4 sm:mb-5 flex flex-wrap gap-1.5 sm:gap-2">
                      {meta.specialties.map((sp) => (
                        <span
                          key={sp}
                          className="inline-flex items-center gap-1 bg-white/15 backdrop-blur-sm border border-white/25 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-semibold"
                        >
                          {sp}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-2 tracking-tight drop-shadow-lg leading-tight">
                      {branch.name}
                    </h2>
                    <p className="text-sm md:text-base text-white/85 mb-1">
                      Led by <span className="font-bold text-white">{branch.doctor.name}</span>
                    </p>
                    <p className="text-[11px] md:text-xs text-white/70 italic mb-5 sm:mb-6 max-w-md">
                      {branch.doctor.title}
                    </p>

                    <div className="flex items-center justify-between gap-3 sm:gap-4">
                      <div className="text-[10px] sm:text-[11px] text-white/70 uppercase tracking-widest font-bold max-w-[50%] sm:max-w-[55%] leading-tight">
                        {branch.contact.timings.split(',')[0]}
                        <span className="block text-white/50 normal-case tracking-normal mt-0.5 font-medium">
                          {branch.contact.timings.split(',')[1]}
                        </span>
                      </div>
                      <div
                        className={`inline-flex items-center gap-1.5 sm:gap-2 text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl sm:rounded-2xl font-black text-xs sm:text-sm uppercase tracking-wider shadow-xl btn-3d gradient-sheen transition-transform group-hover:scale-105 shrink-0 ${
                          isAndheri
                            ? 'bg-gradient-to-r from-[var(--accent-pink)] to-[var(--accent-pink-dark)]'
                            : 'bg-gradient-to-r from-[var(--brand-teal)] to-[var(--brand-teal-deep)]'
                        }`}
                      >
                        Visit Clinic
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover ring */}
                  <div aria-hidden className="absolute inset-0 rounded-[28px] sm:rounded-[36px] ring-2 ring-transparent group-hover:ring-[var(--accent-pink)]/60 transition-all z-30 pointer-events-none" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* === Bottom social proof === */}
      <section className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 md:px-10 pb-16 md:pb-24 text-center">
        <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 bg-white/80 backdrop-blur-md border border-white/60 px-4 sm:px-6 py-3 sm:py-4 rounded-2xl sm:rounded-full depth-stack fade-up stagger-3 max-w-full">
          <div className="flex -space-x-2 shrink-0">
            {[
              { bg: 'var(--accent-pink)' },
              { bg: 'var(--brand-teal)' },
              { bg: 'var(--accent-pink-dark)' },
              { bg: 'var(--brand-teal-deep)' },
            ].map((a, i) => (
              <div
                key={i}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-[10px] font-black"
                style={{ background: `linear-gradient(135deg, ${a.bg}, var(--brand-dark))` }}
              >
                {['S', 'P', 'A', 'R'][i]}
              </div>
            ))}
          </div>
          <div className="text-left">
            <p className="text-xs sm:text-sm font-bold text-gray-900">Join 15,000+ confident smiles</p>
            <p className="text-[11px] sm:text-xs text-gray-500 flex items-center gap-1 flex-wrap">
              <span style={{ color: '#f5b400' }}>★★★★★</span>
              <span>4.9 Google · 500+ reviews</span>
            </p>
          </div>
        </div>

        <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-gray-400 font-bold mt-8 sm:mt-10 px-2">
          Mumbai&apos;s Trusted Multi-Location Dental Provider
        </p>
      </section>
    </div>
  );
}
