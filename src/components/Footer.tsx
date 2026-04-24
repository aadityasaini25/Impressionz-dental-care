import Image from "next/image";
import { Instagram, Facebook, Globe } from "lucide-react";
import { BranchConfig } from "@/config/branch-configs";

interface FooterProps {
  branch?: BranchConfig;
}

export default function Footer({ branch }: FooterProps) {
  const primaryPhone = branch ? branch.contact.phones[0] : "";
  const address = branch ? branch.contact.address : "";
  const timings = branch ? branch.contact.timings : "";
  const email = branch ? branch.contact.email : "";
  const mapEmbed = branch ? branch.contact.googleMapEmbed : "";

  return (
    <footer className="relative border-t border-white/5 pt-8 pb-4 text-gray-300 overflow-hidden"
            style={{ background: 'linear-gradient(135deg, var(--brand-dark) 0%, var(--brand-darker) 60%, var(--brand-teal-ink) 100%)' }}>
      {/* Decorative glows */}
      <div aria-hidden className="pointer-events-none absolute -top-20 left-1/4 w-[420px] h-[420px] rounded-full blur-3xl opacity-25"
           style={{ background: 'radial-gradient(circle, var(--accent-pink) 0%, transparent 70%)' }} />
      <div aria-hidden className="pointer-events-none absolute -bottom-20 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-25"
           style={{ background: 'radial-gradient(circle, var(--brand-teal) 0%, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <Image
              src="/images/logo.png"
              alt="Impressionz Dental Care"
              width={240}
              height={75}
              className="h-auto w-auto opacity-100"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed text-xs md:text-sm">
            Impressionz Dental Care: Affordable, Tech-driven, and Painless Dentistry. Your trusted multi-location clinic for expert implants and orthodontic care.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center md:text-left mb-12 border-b border-white/5 pb-12">
          <div className="space-y-4">
            <h3 className="font-bold text-white text-base border-b border-white/5 pb-2 uppercase tracking-widest text-[11px]">
              <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-br from-[var(--accent-pink)] to-[var(--brand-teal)] mr-2 align-middle" />
              Contact Us
            </h3>
            <div className="space-y-2 mt-4">
              <a href={`tel:${primaryPhone.replace(/\s/g, '')}`} className="block text-[var(--brand-teal)] font-black text-xl hover:scale-105 transition-all inline-block tracking-tight">{primaryPhone}</a>
              <p className="text-gray-300 font-semibold text-xs">Impressionz Dental Care {branch ? `- ${branch.name}` : ''}</p>
              <a href={`mailto:${email}`} className="text-xs text-gray-400 hover:text-[var(--accent-pink)] transition-colors block italic">{email}</a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-white text-base border-b border-white/5 pb-2 uppercase tracking-widest text-[11px]">
              <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-br from-[var(--accent-pink)] to-[var(--brand-teal)] mr-2 align-middle" />
              Clinic Hours
            </h3>
            <div className="flex items-start justify-center md:justify-start gap-3 mt-4">
              <div className="bg-gradient-to-br from-[var(--accent-pink)]/20 to-[var(--brand-teal)]/20 p-2 rounded-lg">
                <span className="text-[var(--brand-teal)] text-xl">🕒</span>
              </div>
              <div className="text-gray-300 space-y-1 text-xs">
                <p className="font-bold text-white">{timings}</p>
                <p className="text-gray-400">
                  {branch?.slug === 'andheri' ? 'Open all 7 days' : 'Sunday: By Appointment'}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-white text-base border-b border-white/5 pb-2 uppercase tracking-widest text-[11px]">
              <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-br from-[var(--accent-pink)] to-[var(--brand-teal)] mr-2 align-middle" />
              Our Location
            </h3>
            <a
              href={branch?.contact.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-all group block text-xs mt-4"
            >
              <div className="flex items-start justify-center md:justify-start gap-3">
                <div className="bg-gradient-to-br from-[var(--accent-pink)]/20 to-[var(--brand-teal)]/20 p-2 rounded-lg group-hover:bg-[var(--brand-teal)] transition-colors">
                  <span className="text-xl group-hover:filter group-hover:brightness-0 group-hover:invert transition-all">📍</span>
                </div>
                <span className="text-gray-300 leading-relaxed group-hover:text-[var(--brand-teal)] transition-colors text-left">
                  {address.split(' | ').map((line, idx) => (
                    <span key={idx} className="block">{line}</span>
                  ))}
                  <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity ml-1 font-bold">VIEW ON MAPS ↗</span>
                </span>
              </div>
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-white text-base border-b border-white/5 pb-2 uppercase tracking-widest text-[11px]">
              <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-br from-[var(--accent-pink)] to-[var(--brand-teal)] mr-2 align-middle" />
              Follow Us
            </h3>
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <a 
                  href="https://www.instagram.com/impressionzdentalcare/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white/5 hover:bg-gradient-to-br from-pink-500 to-purple-600 p-2.5 rounded-xl transition-all text-white border border-white/10 hover:border-transparent group"
                  aria-label="Instagram"
                >
                  <Instagram size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a 
                  href="https://www.facebook.com/impdental/?ref=1" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white/5 hover:bg-[#1877F2] p-2.5 rounded-xl transition-all text-white border border-white/10 hover:border-transparent group"
                  aria-label="Facebook"
                >
                  <Facebook size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
              
              <div className="pt-2">
                <p className="text-[9px] uppercase tracking-[0.2em] font-bold text-gray-500 mb-2">Visit our main site</p>
                <a 
                  href="https://www.impressionzdentalcare.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest text-white hover:bg-[var(--brand-teal)] hover:border-[var(--brand-teal)] transition-all group"
                >
                  <Globe size={12} className="group-hover:rotate-12 transition-transform" />
                  Main Website
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods and Maps Embed Row */}
        <div className="grid lg:grid-cols-2 gap-6 items-stretch mb-8">
          {/* Book With Confidence Section */}
          <div className="relative bg-white/95 backdrop-blur-sm p-6 md:p-7 rounded-[28px] depth-stack flex flex-col justify-between overflow-hidden">
            {/* decorative corner glow */}
            <div aria-hidden className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full blur-3xl opacity-40"
                 style={{ background: 'radial-gradient(circle, var(--accent-pink) 0%, transparent 70%)' }} />
            <div aria-hidden className="pointer-events-none absolute -bottom-16 -left-16 w-48 h-48 rounded-full blur-3xl opacity-40"
                 style={{ background: 'radial-gradient(circle, var(--brand-teal) 0%, transparent 70%)' }} />

            <div className="relative">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-black text-gray-900 text-base flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-gradient-to-b from-[var(--accent-pink)] to-[var(--brand-teal)] rounded-full" />
                  Book with confidence
                </h3>
                <span className="hidden sm:inline-flex items-center gap-1 badge-pink px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-[0.15em]">
                  Hassle-free
                </span>
              </div>
              <p className="text-gray-500 text-xs leading-relaxed mb-5 ml-3.5">
                Transparent pricing, flexible payment, no surprises at the counter.
              </p>

              {/* Payment methods */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="flex items-center gap-3 p-3 bg-gradient-to-br from-[var(--accent-pink-soft)]/50 to-white rounded-xl border border-[var(--accent-pink)]/10 hover:border-[var(--accent-pink)]/30 transition-colors group">
                  <span className="w-8 h-8 flex items-center justify-center text-lg bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform">📱</span>
                  <div>
                    <p className="text-gray-900 text-[11px] font-black uppercase tracking-wider leading-tight">UPI / GPay</p>
                    <p className="text-gray-500 text-[10px] leading-tight">All cards welcome</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gradient-to-br from-[var(--brand-teal)]/10 to-white rounded-xl border border-[var(--brand-teal)]/15 hover:border-[var(--brand-teal)]/40 transition-colors group">
                  <span className="w-8 h-8 flex items-center justify-center text-lg bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform">💵</span>
                  <div>
                    <p className="text-gray-900 text-[11px] font-black uppercase tracking-wider leading-tight">Cash / Bank</p>
                    <p className="text-gray-500 text-[10px] leading-tight">Net banking OK</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="relative flex flex-wrap items-center gap-2 pt-4 border-t border-gray-100">
              {[
                { icon: "✓", label: "GST invoice" },
                { icon: "✓", label: "Free first consult" },
                { icon: "✓", label: "No hidden costs" },
              ].map((t, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[var(--accent-pink-soft)]/40 to-[var(--brand-teal)]/10 px-2.5 py-1 rounded-full text-[10px] font-semibold text-gray-700">
                  <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-br from-[var(--accent-pink)] to-[var(--brand-teal)] text-white flex items-center justify-center text-[8px] font-black">{t.icon}</span>
                  {t.label}
                </span>
              ))}
            </div>
          </div>

          {/* Map Preview */}
          <div className="rounded-[28px] overflow-hidden h-[220px] depth-stack border-4 border-white relative group card-3d-tilt">
            <a
              href={branch?.contact.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-20 cursor-pointer"
              title="Open in Google Maps"
            ></a>

            {mapEmbed ? (
              <iframe
                src={mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Impressionz - ${branch?.name}`}
                className="grayscale group-hover:grayscale-0 transition-all duration-1000 z-10"
              ></iframe>
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold uppercase tracking-widest text-xs">
                Map View Coming Soon
              </div>
            )}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-md text-[10px] font-black text-[var(--accent-pink)] uppercase tracking-widest z-30 border border-white group-hover:bg-[var(--accent-pink)] group-hover:text-white transition-colors">
              Maps View ↗
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-6 text-center text-gray-500 text-[10px] sm:text-xs">
          <p className="flex items-center justify-center gap-1">
            &copy; {new Date().getFullYear()} Impressionz Dental Care. Made with <span className="text-[var(--accent-pink)]">🤍</span> for beautiful smiles.
          </p>
        </div>
      </div>
    </footer>
  );
}
