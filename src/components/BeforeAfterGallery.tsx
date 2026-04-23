'use client';

interface BeforeAfterGalleryProps {
  onBookAppointment: () => void;
}

export default function BeforeAfterGallery({ onBookAppointment }: BeforeAfterGalleryProps) {
  const localVideos = [
    {
      src: "/videos/'I was here for my gaps... and  now it's all resolved!' 🥳There is no better feeling than the da.mp4#t=0.1",
      poster: "/images/patent1.jpeg",
      title: "Smile Transformation - Gap Closure"
    },
    {
      src: "/videos/A positive patient experience defines quality dental care. Patient satisfaction is at the heart .mp4#t=0.1",
      poster: "/images/patent3.jpeg",
      title: "Patient Experience & Quality Care"
    }
  ];

  return (
    <section className="p-4 md:p-8 lg:p-12 bg-[#f1f7f7]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <div className="text-[#72b1b1] text-sm md:text-base font-medium mb-2">
            Tooth Story – Dental Clinic For All
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Patient Success Stories
          </h2>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 w-full mb-12">
          {localVideos.map((video, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black aspect-[9/16] md:aspect-video group flex items-center justify-center">
                <video
                  className="w-full h-full object-contain"
                  src={video.src}
                  poster={video.poster}
                  controls
                  playsInline
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
                <div className="absolute top-4 left-4 bg-[#72b1b1] text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm opacity-90 font-bold z-10">
                  Patient Story {index + 1}
                </div>
              </div>
              <p className="mt-4 text-center text-gray-700 font-medium italic">&quot;{video.title}&quot;</p>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="text-center bg-white p-6 md:p-8 rounded-xl shadow-lg mt-8 border border-[#72b1b1]/10">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Ready for Your <span className="text-[#72b1b1]">Smile Transformation?</span>
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied patients who have transformed their smiles with Dr. Nikunj Maniyar&apos;s expertise. Book your consultation today and take the first step towards your dream smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onBookAppointment}
              className="bg-[#72b1b1] text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#5a8d8d] transition-colors"
            >
              Book Consultation
            </button>
            <a
              href="tel:+919023523178"
              className="bg-[#2d3e40] text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#1a2526] transition-colors text-center"
            >
              Call Now: +91 90235 23178
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Professional consultation includes digital scan
          </p>
        </div>
      </div>
    </section>
  );
}
