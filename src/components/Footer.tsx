import Image from "next/image";
import { BranchConfig } from "@/config/branch-configs";

interface FooterProps {
  branch?: BranchConfig;
}

export default function Footer({ branch }: FooterProps) {
  const primaryPhone = branch ? branch.contact.phones[0] : "";
  const address = branch ? branch.contact.address : "";
  const timings = branch ? branch.contact.timings : "";
  const email = branch ? branch.contact.email : "";
  const mapEmbed = branch ? branch.contact.googleMapEmbed : "";
  
  return (
    <footer className="bg-[#2d3e40] border-t border-white/5 pt-8 pb-4 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="bg-white p-3 rounded-2xl inline-block mb-4 shadow-2xl">
             <Image
               src="/images/logo.webp"
               alt="Impressionz Dental Care"
               width={180}
               height={55}
               className="h-auto w-auto opacity-100"
               style={{ width: 'auto', height: 'auto' }}
             />
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed text-xs md:text-sm">
            Impressionz Dental Care: Affordable, Tech-driven, and Painless Dentistry. Your trusted multi-location clinic for expert implants and orthodontic care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left mb-12 border-b border-white/5 pb-12">
          <div className="space-y-4">
            <h3 className="font-bold text-white text-base border-b border-white/5 pb-2 uppercase tracking-widest text-[11px]">Contact Us</h3>
            <div className="space-y-2 mt-4">
              <a href={`tel:${primaryPhone.replace(/\s/g, '')}`} className="block text-[#72b1b1] font-black text-xl hover:scale-105 transition-all inline-block tracking-tight">{primaryPhone}</a>
              <p className="text-gray-300 font-semibold text-xs">Impressionz Dental Care {branch ? `- ${branch.name}` : ''}</p>
              <a href={`mailto:${email}`} className="text-xs text-gray-400 hover:text-[#72b1b1] transition-colors block italic">{email}</a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-white text-base border-b border-white/5 pb-2 uppercase tracking-widest text-[11px]">Clinic Hours</h3>
            <div className="flex items-start justify-center md:justify-start gap-3 mt-4">
              <div className="bg-[#72b1b1]/10 p-2 rounded-lg">
                <span className="text-[#72b1b1] text-xl">🕒</span>
              </div>
              <div className="text-gray-300 space-y-1 text-xs">
                <p className="font-bold text-white">{timings}</p>
                <p className="text-gray-400">Sunday: Closed / By Appointment</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-white text-base border-b border-white/5 pb-2 uppercase tracking-widest text-[11px]">Our Location</h3>
            <a 
              href={branch?.contact.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-all group block text-xs mt-4"
            >
              <div className="flex items-start justify-center md:justify-start gap-3">
                <div className="bg-[#72b1b1]/10 p-2 rounded-lg group-hover:bg-[#72b1b1] transition-colors">
                  <span className="text-xl group-hover:filter group-hover:brightness-0 group-hover:invert transition-all">📍</span>
                </div>
                <span className="text-gray-300 leading-relaxed group-hover:text-[#72b1b1] transition-colors text-left">
                  {address.split(' | ').map((line, idx) => (
                    <span key={idx} className="block">{line}</span>
                  ))}
                  <span className="text-[10px] opacity-0 group-hover:opacity-100 transition-opacity ml-1 font-bold">VIEW ON MAPS ↗</span>
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Payment Methods and Maps Embed Row */}
        <div className="grid lg:grid-cols-2 gap-6 items-stretch mb-8">
          {/* Payment Section */}
          <div className="bg-white p-6 rounded-[28px] shadow-sm flex flex-col justify-center">
            <h3 className="font-bold text-gray-900 mb-6 text-sm flex items-center gap-2">
              <span className="w-1.5 h-6 bg-[#72b1b1] rounded-full" />
              Payment & Billing
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "UPI / GPay / Card", icon: "📱" },
                { name: "Cash / Net Banking", icon: "💵" },
                { name: "EMI Available", icon: "🏦" },
                { name: "No-Cost EMI", icon: "💳" }
              ].map((method, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100 hover:border-[#72b1b1]/30 transition-colors group">
                  <span className="group-hover:scale-110 transition-transform">{method.icon}</span>
                  <span className="text-gray-600 text-[11px] font-medium uppercase tracking-wider">{method.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Map Preview */}
          <div className="rounded-[28px] overflow-hidden h-[220px] shadow-xl border-4 border-white relative group">
            {/* Clickable Overlay */}
            <a 
              href={branch?.contact.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-20 cursor-pointer"
              title="Open in Google Maps"
            ></a>
            
            {mapEmbed ? (
              <iframe
                src={mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Impressionz - ${branch?.name}`}
                className="grayscale group-hover:grayscale-0 transition-all duration-1000 z-10"
              ></iframe>
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold uppercase tracking-widest text-xs">
                Map View Coming Soon
              </div>
            )}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-md text-[10px] font-black text-[#2d3e40] uppercase tracking-widest z-30 border border-white group-hover:bg-[#72b1b1] group-hover:text-white transition-colors">
              Maps View ↗
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-6 text-center text-gray-500 text-[10px] sm:text-xs">
          <p className="flex items-center justify-center gap-1">
            &copy; {new Date().getFullYear()} Impressionz Dental Care. Made with 🤍 for beautiful smiles.
          </p>
        </div>
      </div>
    </footer>
  );
}