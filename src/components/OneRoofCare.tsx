import Image from "next/image";

export default function OneRoofCare() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Decorative gradient mesh */}
      <div aria-hidden className="pointer-events-none absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
           style={{ background: 'radial-gradient(circle, var(--brand-teal) 0%, transparent 70%)' }} />
      <div aria-hidden className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-20"
           style={{ background: 'radial-gradient(circle, var(--accent-pink) 0%, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 relative fade-up">
            <div className="relative aspect-square max-w-lg mx-auto lg:mx-0">
              <div className="absolute inset-0 rounded-full scale-110 animate-pulse"
                   style={{ background: 'radial-gradient(circle, var(--brand-teal) 0%, transparent 65%)', opacity: 0.12 }} />
              <div aria-hidden className="absolute inset-0 rounded-full scale-[1.05] blur-2xl opacity-40"
                   style={{ background: 'linear-gradient(135deg, var(--accent-pink-soft) 0%, transparent 60%)' }} />

              <div className="relative z-10 w-full h-full rounded-[40px] overflow-hidden shadow-2xl border-8 border-white ring-1 ring-gray-100 card-3d-tilt">
                <Image
                  src="/images/one-roof.png"
                  alt="All Treatments Under One Roof"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />
              </div>

              {/* Floating badges — positioned inside edges on mobile so they don't clip */}
              <div className="absolute top-2 right-2 sm:-top-6 sm:-right-6 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl depth-stack z-20 float-3d hover:scale-110 transition-transform">
                <span className="text-xl sm:text-2xl">🏆</span>
                <p className="text-[9px] sm:text-[10px] uppercase tracking-wider font-bold text-gray-400 mt-0.5 sm:mt-1">Quality</p>
                <p className="text-[11px] sm:text-xs font-bold text-[var(--accent-pink)]">A+ Grade</p>
              </div>
              <div className="absolute bottom-2 left-2 sm:-bottom-6 sm:-left-6 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl depth-stack z-20 float-3d hover:scale-110 transition-transform" style={{ animationDelay: '2s' }}>
                <span className="text-xl sm:text-2xl">👨‍⚕️</span>
                <p className="text-[9px] sm:text-[10px] uppercase tracking-wider font-bold text-gray-400 mt-0.5 sm:mt-1">Experts</p>
                <p className="text-[11px] sm:text-xs font-bold text-[var(--brand-teal-deep)]">Specialist Led</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left fade-up stagger-2">
            <span className="inline-flex items-center gap-2 badge-pink px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-white/90" />
              Strong Positioning
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              All Treatments Under <span className="text-gradient-logo">One Roof</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              No more searching for different specialists across the city. From routine checkups to complex digital implants and specialized orthodontics, we provide comprehensive care managed entirely within our advanced facilities.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl depth-stack card-3d-tilt">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2 justify-center lg:justify-start">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-br from-[var(--accent-pink)] to-[var(--brand-teal)]" />
                  Specialist-Led Care
                </h3>
                <p className="text-sm text-gray-500">Every procedure is overseen or performed by a certified MDS specialist.</p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl depth-stack card-3d-tilt">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2 justify-center lg:justify-start">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-br from-[var(--accent-pink)] to-[var(--brand-teal)]" />
                  Digital Workflow
                </h3>
                <p className="text-sm text-gray-500">End-to-end digital diagnostic and treatment planning for precision.</p>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-[var(--brand-dark)] to-[var(--brand-darker)] p-6 rounded-[28px] text-white flex items-center justify-between gap-4 depth-stack overflow-hidden">
              <div aria-hidden className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-40"
                   style={{ background: 'radial-gradient(circle, var(--accent-pink) 0%, transparent 70%)' }} />
              <div className="relative flex -space-x-3">
                {[
                  "/images/doctor/sandeep singh.jpg",
                  "/images/doctor/dr-priya-singh.webp",
                  "/images/doctor/dr-akbar-ingaria.webp"
                ].map((img, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[var(--brand-dark)] bg-gray-200 overflow-hidden">
                    <Image src={img} alt="Expert" width={40} height={40} className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="relative flex-grow text-left ml-4">
                <p className="text-xs text-[var(--accent-pink-soft)] font-bold uppercase tracking-wider">Trusted by</p>
                <p className="text-sm font-medium">15,000+ Happy Patients</p>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div className="relative hidden sm:block text-right">
                <p className="text-xs text-[var(--accent-pink-soft)] font-bold uppercase tracking-wider">Founded</p>
                <p className="text-sm font-medium">14+ Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
