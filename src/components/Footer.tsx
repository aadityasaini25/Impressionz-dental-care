import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#2d3e40] border-t border-white/5 pt-8 pb-4 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-8">
          <div className="bg-white p-2 rounded-xl inline-block mb-4 shadow-xl">
            <Image
              src="/images/logo.webp"
              alt="Tooth Story – Dental Clinic For All"
              width={100}
              height={25}
              className="h-auto opacity-100"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed text-xs md:text-sm">
            Tooth Story: Specialist Orthodontic & Pediatric Dental Care. Premium Invisalign provider and Kids dental specialists in Ahmedabad.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 text-center md:text-left mb-8">
          <div className="space-y-2">
            <h3 className="font-bold text-white text-base border-b border-gray-800 pb-1">Contact Us</h3>
            <div className="space-y-1 mt-2">
              <a href="tel:+919023523178" className="block text-[#72b1b1] font-bold text-lg hover:scale-105 transition-transform inline-block">+91 90235 23178</a>
              <p className="text-gray-300 font-medium text-xs">Tooth Story Dental Clinic</p>
              <a href="mailto:info@toothstory.co.in" className="text-xs hover:text-[#72b1b1] transition-colors block">info@toothstory.co.in</a>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-white text-base border-b border-gray-800 pb-1">Clinic Hours</h3>
            <div className="flex items-start justify-center md:justify-start gap-2 mt-2">
              <span className="text-[#72b1b1] text-lg">🕒</span>
              <div className="text-gray-300 space-y-0.5 text-xs">
                <p className="font-bold">Mon–Sat</p>
                <p>10:30 AM – 8:30 PM</p>
                <p className="font-bold mt-1">Sunday</p>
                <p>By Appointment Only</p>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-bold text-white text-base border-b border-gray-800 pb-1">Our Location</h3>
            <a
              href="https://maps.app.goo.gl/ZkrPk6MmNcuwAn6K9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-all group block text-xs mt-2"
            >
              <div className="flex items-start justify-center md:justify-start gap-2">
                <span className="text-xl">📍</span>
                <span className="text-gray-300 leading-relaxed group-hover:text-[#72b1b1] transition-colors">
                  House No. 8, 1st Floor, Sunrise Park,<br />
                  Next to Sales India Showroom,<br />
                  Drive-In Road, Gurukul, Ahmedabad
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Payment Methods and Maps Embed */}
        <div className="grid md:grid-cols-2 gap-4 items-start">
          <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-2 text-sm border-b border-gray-100 pb-1">Payment &amp; Billing</h3>
            <ul className="grid grid-cols-2 gap-2 mt-2">
              {[
                { name: "UPI / GPay", icon: "📱" },
                { name: "Cash", icon: "💵" },
                { name: "EMI for Invisalign", icon: "🏦" }
              ].map((method, idx) => (
                <li key={idx} className="flex items-center gap-1.5 text-gray-600 text-[11px] sm:text-xs">
                  <span>{method.icon}</span>
                  {method.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-100 rounded-xl overflow-hidden h-[160px] shadow-inner border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29371.245939171655!2d72.50004623631145!3d23.045581809035593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e854e927381b5%3A0xed786f789620a502!2sTooth%20Story%20-%20Dental%20Clinic%20For%20All%20%7C%20Braces%20%7C%20Invisalign%20%7C%20Aligners%20%7C%20Kids%20Dentist%20%7C%20Implants!5e0!3m2!1sen!2sin!4v1773687425279!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tooth Story - Ahmedabad"
              className="grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-500 text-[10px] sm:text-xs">
          <p>&copy; {new Date().getFullYear()} Tooth Story – Dental Clinic For All. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}