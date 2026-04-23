import Image from "next/image";

interface DoctorProfileProps {
  onBookAppointment: () => void;
}

const doctors = [
  {
    name: "Dr. Nikunj Maniyar",
    title: "BDS, MDS – Aligner Specialist",
    image: "/images/doctor/Dr. NIKUNJ.jpeg",
    description: "Dr. Nikunj Maniyar is a Gold Medalist Orthodontist and a certified Invisalign provider, specializing in both adult and pediatric orthodontics. With over 6 years of experience, he brings a unique combination of clinical excellence and a gentle, patient-focused approach.",
    highlights: [
      "Gold Medalist in-house Orthodontist",
      "Certified Invisalign & Junior Aligners Specialist",
      "Expertise in Kids Expanders & Early Orthodontics",
      "Recognized for Excellence with Multiple Awards"
    ],
    footer: "Having special interests in Kids Orthodontics, he ensures a calm and positive environment for children, making their dental journey comfortable and fear-free."
  },
  {
    name: "Dr. Shruti Thakkar",
    title: "MDS – Pediatric & Preventive Dentist",
    image: "/images/doctor/Dr. Shruti Thakkar.jpeg",
    description: "Dr. Shruti is a dedicated and highly motivated Pediatric and Preventive Dentist with a passion for enhancing children's oral health. She believes in providing an experience through customized educational programs for Small Wonders and Teens.",
    highlights: [
      "Academic Proficiency at Rajiv Gandhi University of Health Sciences (4th Rank)",
      "Certificate for Academic Proficiency at Bapuji Dental College (1st Rank)",
      "Multiple awards for paper presentations at national conferences",
      "MDS in Pediatric and Preventive Dentistry"
    ],
    footer: "Her exceptional expertise and state-of-the-art techniques ensure every child leaves our clinic excited for their next visit."
  },
  {
    name: "Dr. Priyanka Maniyar",
    title: "BDS – Root Canal & Smile Design Specialist",
    image: "/images/doctor/Dr. Priyanka Maniyar.jpeg",
    description: "Dr. Priyanka is a distinguished dentist, recognized for expertise in root canal therapy and the artistry of smile design. With an unwavering dedication to perfection and a flair for innovation, she integrates advanced dental techniques to achieve outstanding outcomes.",
    highlights: [
      "Expert in Root Canal Therapy",
      "Artistry of Smile Design Specialist",
      "Advanced Dental Techniques Integration",
      "Dedicated to personalized and world-class care"
    ],
    footer: "She ensures each patient receives world-class treatment through her meticulous attention to detail."
  }
];

export default function DoctorProfile({ onBookAppointment }: DoctorProfileProps) {
  return (
    <section className="relative bg-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <p className="text-[#72b1b1] font-semibold text-sm uppercase tracking-[0.2em] mb-2">Our Specialists</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">Our Specialized and Experienced Dentist</h2>
          <div className="w-16 h-0.5 bg-[#72b1b1] rounded-full mx-auto" />
          <p className="mt-4 text-gray-600 text-sm md:text-base">
            Our expert team is dedicated to providing premium dental care with a personalized approach.
          </p>
        </div>

        <div className="space-y-24">
          {doctors.map((doctor, index) => (
            <div key={index} className="max-w-6xl mx-auto hover-lift">
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 lg:gap-16 items-center md:items-start`}>
                <div className="w-full md:w-1/2 lg:w-2/5 flex justify-center">
                  <div className="relative w-full max-w-sm aspect-[4/5] rounded-[28px] overflow-hidden shadow-2xl border-8 border-white ring-1 ring-gray-100 shimmer-effect">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 lg:w-3/5 text-center md:text-left mt-4 md:mt-0">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 tracking-tight">
                    {doctor.name}
                  </h3>
                  <p className="text-[#72b1b1] font-semibold text-sm md:text-base uppercase tracking-[0.2em] mb-4">
                    {doctor.title}
                  </p>
                  <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-4">
                    <p>{doctor.description}</p>
                    <ul className="space-y-2">
                      {doctor.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-2 justify-center md:justify-start">
                          <span className="text-[#72b1b1] mt-1 shrink-0">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <p>{doctor.footer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <button
            onClick={onBookAppointment}
            className="bg-[#72b1b1] text-white px-10 py-4 rounded-xl font-semibold text-base hover:bg-[#5a8d8d] transition-colors shadow-lg hover:shadow-xl"
          >
            Book Your Free Smile Consultation
          </button>
        </div>
      </div>
    </section>
  );
}