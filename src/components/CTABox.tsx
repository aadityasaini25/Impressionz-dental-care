import { BranchConfig } from "@/config/branch-configs";

interface CTABoxProps {
  onBookAppointment: () => void;
  branch?: BranchConfig;
}

export default function CTABox({ onBookAppointment, branch }: CTABoxProps) {
  const primaryPhone = branch ? branch.contact.phones[0] : "";

  return (
    <section className="bg-[#485b51] py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
          Schedule Your Consultation at {branch?.name || "Impressionz"}
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
          Comprehensive evaluation and painless diagnostic scan included. We’re here to answer your questions and find a time that works for you.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onBookAppointment}
            className="w-full sm:w-auto bg-[#d4af37] text-gray-900 py-4 px-10 rounded-xl font-semibold hover:bg-[#c9a227] transition-colors shadow-lg"
          >
            Book Your Consultation
          </button>
          {primaryPhone && (
            <a 
              href={`tel:${primaryPhone.replace(/\s/g, '')}`}
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/30 py-4 px-10 rounded-xl font-semibold transition-colors"
            >
              Call {primaryPhone}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}