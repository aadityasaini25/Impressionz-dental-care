import Image from "next/image";

export default function ServiceHighlights() {
  const serviceData = [
    {
      title: "Invisalign & Clear Aligners",
      image: "/images/ortho/invisalign_3d.png",
      description:
        "The world's most advanced clear aligner system. Get a perfect smile without wires or brackets.",
      benefits: [
        "Virtually invisible treatment",
        "Removable & easy to clean",
        "iTero Digital Scanning",
        "Starting from ₹90,000",
      ],
    },
    {
      title: "Cosmetic Smile Redesign",
      image: "/images/Aesthetic.jpg.webp",
      description:
        "Transform your smile with our premium cosmetic solutions, including porcelain veneers, composite bonding, and professional whitening.",
      benefits: [
        "Digital Smile Design",
        "Stain-resistant veneers",
        "Correction of chips & gaps",
        "Natural, radiant results",
      ],
    },
    {
      title: "Full Mouth Rehabilitation",
      image: "/images/implant/all_in.png",
      description:
        "Comprehensive restoration for patients with multiple missing or worn teeth, combining implants, crowns, and bridges for total function.",
      benefits: [
        "Complete bite restoration",
        "Improved chewing function",
        "Youthful facial support",
        "Expert multidisciplinary care",
      ],
    },
    {
      title: "Adult Orthodontics",
      image: "/images/ortho/braces.png",
      description:
        "Customized orthodontic solutions for adults who want to enhance their smile and oral health.",
      benefits: [
        "Ceramic & Lingual braces",
        "Metal self-ligating braces",
        "Smile redesign & alignment",
        "Long-term stability planning",
      ],
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[var(--brand-dark)] via-[var(--brand-darker)] to-[var(--brand-dark)] text-white py-20 md:py-28 px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Decorative aura — pink + teal accents on dark */}
      <div aria-hidden className="pointer-events-none absolute -top-32 -left-20 w-[500px] h-[500px] rounded-full blur-[110px] opacity-25"
           style={{ background: 'radial-gradient(circle, var(--brand-teal) 0%, transparent 70%)' }} />
      <div aria-hidden className="pointer-events-none absolute -bottom-24 -right-20 w-[450px] h-[450px] rounded-full blur-[100px] opacity-20"
           style={{ background: 'radial-gradient(circle, var(--accent-pink) 0%, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto">
        <div className="fade-up">
          <span className="inline-flex items-center gap-2 badge-pink px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-white/90" />
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Advanced <span className="text-gradient-logo">Orthodontics</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[var(--accent-pink)] to-[var(--brand-teal)] rounded-full mb-4" />
          <p className="text-gray-300 max-w-2xl mb-14">
            From Invisalign and Junior Aligners to early jaw expansion — we specialize in creating beautiful smiles for all ages with a fully digital workflow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className={`relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-[28px] flex flex-col hover:border-[var(--brand-teal)]/50 hover:bg-white/10 transition-all duration-500 card-3d-tilt fade-up stagger-${index + 1} group overflow-hidden`}
            >
              {/* Pink/teal corner glow on hover */}
              <div aria-hidden className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"
                   style={{ background: index % 2 === 0 ? 'radial-gradient(circle, var(--brand-teal) 0%, transparent 70%)' : 'radial-gradient(circle, var(--accent-pink) 0%, transparent 70%)' }} />

              <div className="relative rounded-2xl mb-6 aspect-[4/3] flex items-center justify-center overflow-hidden bg-white/5 border border-slate-600/30 p-4 shadow-inner">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-110 p-4"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--brand-teal)]/10 via-transparent to-[var(--accent-pink)]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="relative font-bold mb-3 text-lg text-white group-hover:text-[var(--brand-teal)] transition-colors">{service.title}</h3>
              <p className="relative text-[14px] text-gray-400 leading-relaxed mb-6 flex-grow">{service.description}</p>
              <ul className="relative space-y-3 text-[12px] text-slate-300">
                {service.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 group/item">
                    <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-[var(--accent-pink)] to-[var(--brand-teal)] group-hover/item:scale-125 transition-transform" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
