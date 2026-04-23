import Image from 'next/image';
import { BranchConfig } from "@/config/branch-configs";

interface ClinicPhotosProps {
  onBookAppointment: () => void;
  branch?: BranchConfig;
}

export default function ClinicPhotos({ onBookAppointment, branch }: ClinicPhotosProps) {
  const clinicImages = branch?.clinicImages || [];

  const address = branch ? branch.contact.address : "Mumbai";

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-lavender" id="gallery">
      <div className="max-w-[95%] 2xl:max-w-screen-2xl mx-auto w-full text-center md:text-left">
        <p className="text-[#485b51] font-semibold text-sm uppercase tracking-[0.2em] mb-2">Our Facility</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">Our Clinic {branch ? `- ${branch.name}` : ''}</h2>
        <div className="w-16 h-0.5 bg-[#72b1b1] rounded-full mb-4 mx-auto md:mx-0" />
        <a 
          href={branch?.contact.googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 max-w-2xl mb-12 mx-auto md:mx-0 space-y-1 block hover:text-[#72b1b1] group/gal transition-colors"
        >
          {address.split(" | ").map((line, idx) => (
            <p key={idx} className="flex items-center gap-2 justify-center md:justify-start">
              {line}
              {idx === 0 && <span className="text-[10px] opacity-0 group-hover/gal:opacity-100 transition-opacity font-bold uppercase tracking-widest bg-[#72b1b1] text-white px-2 py-0.5 rounded ml-2">Open in Maps ↗</span>}
            </p>
          ))}
        </a>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 text-left">
          {clinicImages.map((img, i) => (
            <div key={i} className="relative aspect-[4/3] rounded-[20px] overflow-hidden shadow-md group border-4 border-white">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onBookAppointment}
            className="bg-[#72b1b1] text-white px-10 py-4 rounded-xl font-semibold text-base hover:bg-[#5a8d8d] transition-colors shadow-lg hover:shadow-xl"
          >
            Visit Our {branch?.name || "Clinic"}
          </button>
        </div>
      </div>
    </section>
  );
}
