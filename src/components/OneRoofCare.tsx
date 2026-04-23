import Image from "next/image";

export default function OneRoofCare() {
  return (
    <section className="py-20 md:py-32 bg-[#f8fafb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-square max-w-lg mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-[#72b1b1]/5 rounded-full scale-110 animate-pulse" />
              <div className="relative z-10 w-full h-full rounded-[40px] overflow-hidden shadow-2xl border-8 border-white ring-1 ring-gray-100">
                <Image
                  src="/images/one-roof.png"
                  alt="All Treatments Under One Roof"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* Floating badges */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-20 animate-bounce group hover:scale-110 transition-transform">
                <span className="text-2xl">🏆</span>
                <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400 mt-1">Quality</p>
                <p className="text-xs font-bold text-[#2d3e40]">A+ Grade</p>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-20 hover:scale-110 transition-transform">
                <span className="text-2xl">👨‍⚕️</span>
                <p className="text-[10px] uppercase tracking-wider font-bold text-gray-400 mt-1">Experts</p>
                <p className="text-xs font-bold text-[#2d3e40]">Specialist Led</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-[#72b1b1] font-semibold text-sm uppercase tracking-[0.2em] mb-4">Strong Positioning</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              All Treatments Under <span className="text-[#72b1b1]">One Roof</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              No more searching for different specialists across the city. From routine checkups to complex digital implants and specialized orthodontics, we provide comprehensive care managed entirely within our advanced facilities.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2 justify-center lg:justify-start">
                  <span className="w-2 h-2 rounded-full bg-[#72b1b1]" />
                  Specialist-Led Care
                </h3>
                <p className="text-sm text-gray-500">Every procedure is overseen or performed by a certified MDS specialist.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2 justify-center lg:justify-start">
                  <span className="w-2 h-2 rounded-full bg-[#72b1b1]" />
                  Digital Workflow
                </h3>
                <p className="text-sm text-gray-500">End-to-end digital diagnostic and treatment planning for precision.</p>
              </div>
            </div>

            <div className="bg-[#2d3e40] p-6 rounded-[28px] text-white flex items-center justify-between gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#2d3e40] bg-gray-200 overflow-hidden">
                    <Image src={`/images/doctor/${i === 1 ? 'sandeep singh.jpg' : 'dr-priya-singh.webp'}`} alt="Expert" width={40} height={40} className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex-grow text-left ml-4">
                <p className="text-xs text-teal-200 font-bold uppercase tracking-wider">Trusted by</p>
                <p className="text-sm font-medium">15,000+ Happy Patients</p>
              </div>
              <div className="w-px h-10 bg-white/10 hidden sm:block" />
              <div className="hidden sm:block text-right">
                <p className="text-xs text-teal-200 font-bold uppercase tracking-wider">Founded</p>
                <p className="text-sm font-medium">14+ Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
