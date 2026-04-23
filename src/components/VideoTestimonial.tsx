import Image from "next/image";

export default function VideoTestimonial() {
  return (
    <section className="p-4 md:p-8 lg:p-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6 md:mb-10">
          <h2 className="text-xl md:text-3xl font-bold mb-4">Patient Stories</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Hear directly from our satisfied patients about their experience at Tooth Story – Dental Clinic For All.
          </p>
        </div>

        <div className="bg-white border rounded-lg p-0 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
            <div className="relative w-full aspect-square md:rounded-lg md:shadow-md overflow-hidden bg-gray-100">
              <Image
                src="/images/patent1.jpeg"
                alt="Patient Satisfaction Story 1"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative w-full aspect-square md:rounded-lg md:shadow-md overflow-hidden bg-gray-100">
              <Image
                src="/images/Patient photos 5.jpeg"
                alt="Patient Satisfaction Story 2"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative w-full aspect-square md:rounded-lg md:shadow-md overflow-hidden bg-gray-100">
              <Image
                src="/images/patent3.jpeg"
                alt="Patient Satisfaction Story 3"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative w-full aspect-square md:rounded-lg md:shadow-md overflow-hidden bg-gray-100">
              <Image
                src="/images/Patient photos 6.jpeg"
                alt="Patient Satisfaction Story 4"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
