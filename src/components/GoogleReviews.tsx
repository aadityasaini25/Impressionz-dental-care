import Image from "next/image";

export default function GoogleReviews() {
  const reviews = [
    {
      name: "Nikunj Pujara",
      initials: "NP",
      date: "Recent",
      review: "Great experience at Tooth Story dental clinic. Dr. Nikunj and Dr. Shruti are extremely knowledgeable and skilled. The clinic is welcoming, and the treatment results were excellent. I recommend everyone to visit this place for any dental concerns."
    },
    {
      name: "Priyanka Shah",
      initials: "PS",
      date: "Recent",
      review: "Wonderful experience, the doctor there was so kind and gentle to me. Also he did my treatment without any type of pain, also the work he did was flawless. Best Environment and positive vibe in clinic and also both doctors are good."
    },
    {
      name: "Utsav",
      initials: "UT",
      date: "Recent",
      review: "Best dental clinic in Vastrapur area. Very happy with Dr Nikunj for my ongoing braces treatment. His expertise & personalized approach have made the experience comfortable and enjoyable. The entire team is friendly and professional."
    },
    {
      name: "Sangeeta Rai",
      initials: "SR",
      date: "Recent",
      review: "I visited Tooth Story a week ago & had an excellent experience. The treatment was smooth & completely painless, & my dental problems are fully resolved. Doctors are highly skilled & incredibly friendly, which made the whole process very comfortable."
    }
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 lg:px-12 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#485b51] font-semibold text-sm uppercase tracking-[0.2em] mb-2">Testimonials</p>
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <Image
            src="/images/google.png"
            alt="Google"
            width={112}
            height={38}
            className="object-contain opacity-90"
          />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">Patient Experiences</h2>
        </div>
        <div className="w-16 h-0.5 bg-[#d4af37] rounded-full mb-12" />

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col h-full">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 text-white rounded-full flex items-center justify-center font-bold text-lg bg-[#485b51]">
                  {review.initials}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900 leading-tight">{review.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{review.date}</p>
                </div>
              </div>
              <div className="flex text-[#d4af37] mb-4 text-sm">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed font-light flex-grow">{review.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}