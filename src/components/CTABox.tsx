interface CTABoxProps {
  onBookAppointment: () => void;
}

export default function CTABox({ onBookAppointment }: CTABoxProps) {
  return (
    <section className="bg-[#485b51] py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
          Schedule Your Consultation
        </h2>
        <p className="text-white/90 text-lg mb-8 max-w-xl mx-auto">
          Comprehensive evaluation and digital diagnostic scan included. We’re here to answer your questions and find a time that works for you.
        </p>
        <button
          onClick={onBookAppointment}
          className="bg-[#d4af37] text-gray-900 py-4 px-10 rounded-xl font-semibold hover:bg-[#c9a227] transition-colors shadow-lg"
        >
          Book Your Consultation
        </button>
      </div>
    </section>
  );
}