import { BranchConfig } from "@/config/branch-configs";

interface WhyChooseUsProps {
  branch?: BranchConfig;
}

export default function WhyChooseUs({ branch }: WhyChooseUsProps) {
  const isAndheri = branch?.slug === 'andheri';
  
  const points = [
    {
      title: "Certified Specialist Dentist",
      desc: `Our clinic is led by ${branch?.doctor.name || "top-tier specialists"} who have extensive experience to ensure you receive the highest standard of dental care.`,
    },
    {
      title: "Patient First Approach",
      desc: "We prioritize your comfort and well-being, tailoring every treatment plan to meet your unique needs and ensure a stress-free, painless experience.",
    },
    {
      title: "Everything Under One Roof",
      desc: "From basic consultations to advanced implants and specialized orthodontics, we provide all treatments seamlessly under one roof.",
    },
    {
      title: "Advanced Technological Solutions",
      desc: isAndheri 
        ? "We utilize cutting-edge dental technology, including intraoral scanners, to provide precise, predictable, and fully painless care." 
        : "We use modern dental infrastructure and advanced techniques to guarantee highly affordable and completely painless care.",
    },
  ];

  return (
    <section className="py-20 md:py-28 px-4 md:px-8 bg-[#f1f7f7]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center md:text-left mb-12">
          <p className="text-[#72b1b1] font-semibold text-sm uppercase tracking-[0.2em] mb-2">Why Impressionz</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Why Choose Impressionz Dental Care
          </h2>
          <div className="w-16 h-0.5 bg-[#72b1b1] rounded-full mx-auto md:mx-0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {points.map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200/80 transition-all duration-300"
            >
              <h3 className="font-bold text-lg text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
