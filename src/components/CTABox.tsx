import { BranchConfig } from "@/config/branch-configs";

interface CTABoxProps {
  onBookAppointment: () => void;
  branch?: BranchConfig;
}

export default function CTABox({ onBookAppointment, branch }: CTABoxProps) {
  const primaryPhone = branch ? branch.contact.phones[0] : "";

  return (
    <section className="relative py-16 md:py-20 px-4 md:px-8">
      <div className="relative max-w-5xl mx-auto overflow-hidden rounded-[32px] px-6 py-14 md:px-12 md:py-16 depth-stack"
           style={{ background: 'linear-gradient(135deg, var(--brand-dark) 0%, var(--brand-darker) 60%, var(--brand-teal-ink) 100%)' }}>
        {/* Pink glow top-right */}
        <div aria-hidden className="pointer-events-none absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl opacity-40"
             style={{ background: 'radial-gradient(circle, var(--accent-pink) 0%, transparent 70%)' }} />
        {/* Teal glow bottom-left */}
        <div aria-hidden className="pointer-events-none absolute -bottom-24 -left-20 w-80 h-80 rounded-full blur-3xl opacity-40"
             style={{ background: 'radial-gradient(circle, var(--brand-teal) 0%, transparent 70%)' }} />

        <div className="relative text-center">
          <span className="inline-flex items-center gap-2 badge-pink px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-white/90" />
            Book Today
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Schedule Your Consultation at{" "}
            <span className="text-gradient-logo">{branch?.name || "Impressionz"}</span>
          </h2>
          <p className="text-white/80 text-base md:text-lg mb-8 max-w-xl mx-auto">
            Comprehensive evaluation and painless diagnostic scan included. We&apos;re here to answer your questions and find a time that works for you.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onBookAppointment}
              className="w-full sm:w-auto bg-gradient-to-r from-[var(--accent-pink)] to-[var(--accent-pink-dark)] text-white py-4 px-10 rounded-xl font-bold btn-3d btn-3d-pink gradient-sheen"
            >
              Book Your Consultation
            </button>
            {primaryPhone && (
              <a
                href={`tel:${primaryPhone.replace(/\s/g, '')}`}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/30 py-4 px-10 rounded-xl font-semibold transition-colors backdrop-blur-sm"
              >
                📞 Call {primaryPhone}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
