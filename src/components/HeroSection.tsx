import { BranchConfig } from "@/config/branch-configs";

interface HeroSectionProps {
  onBookAppointment: () => void;
  branch?: BranchConfig;
}

export default function HeroSection({ onBookAppointment, branch }: HeroSectionProps) {
  const heroTitle = branch ? branch.heroTitle : "Affordable Painless Dentistry";
  const titleParts = heroTitle.split(' ');
  const firstPart = titleParts.slice(0, 2).join(' ');
  const secondPart = titleParts.slice(2).join(' ');

  const implantPrice = branch ? branch.pricing.implant : "₹27,000 onwards*";
  const primaryPhone = branch ? branch.contact.phones[0] : "";
  const timings = branch ? branch.contact.timings : "";
  const mapsLink = branch ? branch.contact.googleMapsLink : "";

  return (
    <section className="relative pt-20 sm:pt-24 pb-16 sm:pb-20 md:pt-32 md:pb-36 px-4 sm:px-6 md:px-12 lg:px-16 max-w-7xl mx-auto overflow-hidden">
      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
        <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Scroll</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-[var(--brand-teal)] to-transparent rounded-full" />
      </div>

      {/* Decorative floating ornaments */}
      <span
        aria-hidden
        className="hidden md:block absolute top-20 left-8 w-16 h-16 rounded-full opacity-30 float-3d"
        style={{ background: 'radial-gradient(circle, var(--accent-pink) 0%, transparent 70%)', filter: 'blur(18px)', animationDelay: '0s' }}
      />
      <span
        aria-hidden
        className="hidden md:block absolute top-40 right-12 w-20 h-20 rounded-full opacity-40 float-3d"
        style={{ background: 'radial-gradient(circle, var(--brand-teal) 0%, transparent 70%)', filter: 'blur(22px)', animationDelay: '2s' }}
      />

      <div className="text-center mb-10 md:mb-12 fade-up">
        {/* Location pill with pink accent */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full badge-pink text-[10px] md:text-xs font-black uppercase tracking-[0.2em] mb-5">
          <span className="w-1.5 h-1.5 rounded-full bg-white/90" />
          Impressionz Dental Care · {branch?.name || "Mumbai"}
        </div>

        {/* Hours + Directions info strip */}
        {branch && (
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-6 fade-up" style={{ animationDelay: '100ms' }}>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-[var(--brand-teal)]/20 px-4 py-2 rounded-full text-xs md:text-sm font-semibold text-[var(--brand-teal-deep)] shadow-sm depth-stack">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{timings}</span>
            </div>
            {mapsLink && (
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-md border border-[var(--brand-teal)]/20 px-4 py-2 rounded-full text-xs md:text-sm font-semibold text-[var(--brand-teal-deep)] shadow-sm depth-stack hover:bg-[var(--brand-teal)] hover:text-white hover:border-[var(--brand-teal)] transition-colors"
              >
                <span>📍</span>
                <span>Get Directions</span>
                <span className="text-[10px]">↗</span>
              </a>
            )}
          </div>
        )}

        {/* Implant offer chip – uses logo gradient ring for signature look */}
        <div className="inline-block mb-8 sm:mb-10 fade-up w-full sm:w-auto px-2 sm:px-0" style={{ animationDelay: '200ms' }}>
          <div className="relative bg-white/85 backdrop-blur-md px-5 sm:px-8 py-3.5 sm:py-4 rounded-[24px] sm:rounded-[28px] depth-stack flex items-center gap-3 sm:gap-5 hover:scale-105 transition-all duration-500 group card-3d-tilt ring-gradient-logo">
            <div className="bg-gradient-to-br from-[var(--accent-pink-soft)] to-[var(--brand-teal)]/10 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl group-hover:scale-110 transition-transform shrink-0">
              <span className="text-xl sm:text-2xl">🦷</span>
            </div>
            <div className="text-left">
              <p className="text-[9px] sm:text-[10px] text-[var(--accent-pink)] font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-0.5">High Quality Dental Implants</p>
              <h3 className="text-gray-900 font-black text-base sm:text-lg md:text-2xl leading-none">
                Affordable & <span className="text-gradient-logo">Painless</span>
              </h3>
              <p className="text-gray-500 font-medium text-[10px] sm:text-[11px] md:text-sm mt-1">
                From <span className="text-gray-900 font-bold">{implantPrice}</span>
              </p>
            </div>
          </div>
        </div>

        <h1 className="text-[2.25rem] sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-5 sm:mb-6 leading-[1.1] sm:leading-tight">
          {firstPart}<br className="hidden md:block" />
          <span className="text-gradient-teal">{secondPart}</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
          Where we combine cutting-edge technology with compassionate care to craft perfect smiles with precision and comfort. Everything under one roof.
        </p>
      </div>

      <div className="md:flex md:items-center md:justify-center md:gap-16 md:mb-12 max-w-5xl mx-auto fade-up stagger-1">
        {/* Hero video with 3D tilt + gradient ring */}
        <div className="relative rounded-3xl aspect-[9/16] md:aspect-auto md:h-[500px] md:w-[300px] mx-auto md:mx-0 mb-8 md:mb-0 md:flex-initial overflow-hidden shadow-2xl ring-4 ring-white ring-offset-2 ring-offset-teal-50/50 card-3d-tilt">
          <div className="bg-black w-full h-full flex items-center justify-center shimmer-effect">
            <video
              className="w-full h-full object-cover scale-105"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={branch?.doctors[0].image || "/images/hero.png"}
              key={branch?.heroVideo}
            >
              <source src={branch?.heroVideo || "/videos/herovedio.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          {/* Corner glow accent */}
          <div aria-hidden className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl opacity-50 pointer-events-none"
               style={{ background: 'radial-gradient(circle, var(--accent-pink) 0%, transparent 70%)' }} />
        </div>

        {/* Specializations card with layered depth */}
        <div className="relative md:w-[450px] fade-up stagger-2">
          <div className="glass-premium p-8 md:p-12 rounded-[32px] border border-white/60 relative overflow-hidden card-3d-tilt depth-stack">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--brand-teal)] opacity-10 blur-3xl -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-28 h-28 bg-[var(--accent-pink)] opacity-[0.08] blur-3xl -ml-14 -mb-14" />
            <h2 className="text-lg font-bold text-[var(--brand-teal-deep)] uppercase tracking-[0.2em] mb-8 border-b border-[var(--brand-teal)]/20 pb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-gradient-to-r from-[var(--accent-pink)] to-[var(--brand-teal)]" />
              Our Specializations
            </h2>
            <ul className="space-y-6 mb-12 text-[15px] text-gray-700 font-medium">
              {(branch?.usps.slice(0, 3) || [
                "Expert Dental Care",
                "Advanced Painless Technology",
                "All Treatments Under One Roof"
              ]).map((item, i) => (
                <li key={i} className="flex items-center gap-4 group">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-br from-[var(--accent-pink)] to-[var(--brand-teal)] group-hover:scale-150 transition-transform duration-300" />
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={onBookAppointment}
              className="w-full bg-[var(--brand-dark)] text-white px-6 py-5 rounded-2xl text-base font-bold hover:bg-[var(--brand-darker)] transition-all hover:-translate-y-1 active:scale-95 btn-3d gradient-sheen"
            >
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Primary CTA pair — teal (book) + pink (secondary highlight option) */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-2xl mx-auto mt-10 sm:mt-12 md:mt-20 fade-up stagger-3 px-2 sm:px-0">
        <button
          onClick={onBookAppointment}
          className="bg-[var(--brand-teal)] text-white py-4 px-8 sm:px-12 rounded-2xl font-bold text-base sm:text-lg hover:bg-[var(--brand-teal-dark)] transition-all hover:scale-105 active:scale-95 md:min-w-[240px] btn-3d gradient-sheen min-h-[52px]"
        >
          Book Appointment
        </button>
        <a
          href={`tel:${primaryPhone.replace(/\s/g, '')}`}
          className="bg-white text-[var(--brand-teal-deep)] border-2 border-[var(--brand-teal)]/30 py-4 px-6 sm:px-12 rounded-2xl font-bold text-base sm:text-lg text-center hover:bg-teal-50 transition-all hover:scale-105 active:scale-95 md:min-w-[240px] depth-stack min-h-[52px] flex items-center justify-center"
        >
          📞 Call {primaryPhone}
        </a>
      </div>
    </section>
  );
}
