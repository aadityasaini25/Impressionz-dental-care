import Image from "next/image";
import { BranchConfig } from "@/config/branch-configs";

interface GoogleReviewsProps {
  branch?: BranchConfig;
}

export default function GoogleReviews({ branch }: GoogleReviewsProps) {
  const reviews = branch?.reviews || [];

  return (
    <section className="relative py-20 md:py-32 px-4 md:px-8 lg:px-12 overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -top-20 right-10 w-80 h-80 rounded-full blur-3xl opacity-20"
           style={{ background: 'radial-gradient(circle, var(--accent-pink) 0%, transparent 70%)' }} />
      <div aria-hidden className="pointer-events-none absolute -bottom-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-20"
           style={{ background: 'radial-gradient(circle, var(--brand-teal) 0%, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto">
        <span className="inline-flex items-center gap-2 badge-pink px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-white/90" />
          Testimonials
        </span>
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <Image
            src="/images/google.png"
            alt="Google"
            width={112}
            height={38}
            className="object-contain opacity-90"
          />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            Patient <span className="text-gradient-logo">Experiences</span>
          </h2>
        </div>
        <div className="w-16 h-0.5 bg-gradient-to-r from-[var(--accent-pink)] to-[var(--brand-teal)] rounded-full mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className={`relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl depth-stack card-3d-tilt border border-white/80 flex flex-col h-full overflow-hidden fade-up stagger-${(index % 4) + 1}`}>
              <div aria-hidden className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl opacity-30 pointer-events-none"
                   style={{ background: index % 2 === 0 ? 'radial-gradient(circle, var(--accent-pink) 0%, transparent 70%)' : 'radial-gradient(circle, var(--brand-teal) 0%, transparent 70%)' }} />

              <div className="relative flex items-start gap-4 mb-6">
                <div className={`w-12 h-12 text-white rounded-full flex items-center justify-center font-bold text-lg ${
                  index % 2 === 0
                    ? 'bg-gradient-to-br from-[var(--accent-pink)] to-[var(--accent-pink-dark)]'
                    : 'bg-gradient-to-br from-[var(--brand-teal)] to-[var(--brand-teal-deep)]'
                } shadow-md`}>
                  {review.initials}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 leading-tight">{review.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{review.date}</p>
                </div>
              </div>
              <div className="relative flex mb-4 text-sm" style={{ color: '#f5b400' }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="relative text-gray-600 leading-relaxed font-light flex-grow text-sm">&ldquo;{review.review}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
