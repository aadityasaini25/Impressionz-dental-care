import Image from "next/image";

export default function ServiceHighlights() {
  const serviceData = [
    {
      title: "Invisalign & Clear Aligners",
      image: "/images/ortho/invisalign.png",
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
      title: "Junior Aligners for Kids",
      image: "/images/ortho/junior.png",
      description:
        "Specialized clear aligner treatment designed specifically for the unique needs of growing children.",
      benefits: [
        "Designed for kids & teens",
        "Comfortable & wire-free",
        "Corrects overcrowding & gaps",
        "Gentle on young teeth",
      ],
    },
    {
      title: "Kids Jaw Expanders",
      image: "/images/FAQimage.png",
      description:
        "Early intervention to create space and guide jaw growth for a healthier, straighter smile.",
      benefits: [
        "Prevent future extractions",
        "Improve speech and breathing",
        "Correct crossbites early",
        "Painless orthopedic growth",
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
    <section className="relative bg-[#2d3e40] text-white py-20 md:py-28 px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#72b1b1] font-semibold text-sm uppercase tracking-[0.2em] mb-2">Our Services</p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
          Advanced Orthodontics
        </h2>
        <div className="w-16 h-0.5 bg-[#72b1b1] rounded-full mb-4" />
        <p className="text-gray-300 max-w-2xl mb-14">
          From Invisalign and Junior Aligners to early jaw expansion — we specialize in creating beautiful smiles for all ages with a fully digital workflow.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className={`bg-white/5 border border-white/10 p-6 rounded-[28px] flex flex-col hover:border-[#72b1b1]/50 hover:bg-white/10 transition-all duration-500 hover-lift fade-up stagger-${index + 1} group border-beam`}
            >
              <div className="relative rounded-2xl mb-6 aspect-[4/3] flex items-center justify-center overflow-hidden bg-white/5 border border-slate-600/30 p-4 shadow-inner">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-110 p-4"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#72b1b1]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="font-bold mb-3 text-lg text-white group-hover:text-[#72b1b1] transition-colors">{service.title}</h3>
              <p className="text-[14px] text-gray-400 leading-relaxed mb-6 flex-grow">{service.description}</p>
              <ul className="space-y-3 text-[12px] text-slate-300">
                {service.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 group/item">
                    <span className="text-[#72b1b1] mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-[#72b1b1] group-hover/item:scale-125 transition-transform" />
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