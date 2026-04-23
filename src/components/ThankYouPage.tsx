'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { branches } from '@/config/branch-configs';

export default function ThankYouPage() {
  const params = useSearchParams();
  const slug = params.get('branch') || '';
  const branch = branches[slug];

  const doctor = branch?.doctor;
  const primaryPhone = branch?.contact.phones[0] || '+91 98215 28338';
  const phoneTel = primaryPhone.replace(/\s/g, '');
  const branchName = branch?.name || 'Impressionz Dental Care';

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-[var(--brand-teal)] p-6 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Thank You for Choosing Us!
          </h1>
          <p className="text-white text-lg">
            Your appointment request {branch ? `at ${branchName}` : ''} has been received
          </p>
        </div>

        <div className="p-6 md:p-8">
          {doctor && (
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-gray-200 flex-shrink-0">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 192px, 192px"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                  {doctor.name}
                </h2>
                <p className="text-[var(--brand-teal)] font-medium mb-4">
                  {doctor.title}
                </p>
                <p className="text-gray-600 max-w-lg">
                  Our team at <strong>{branchName}</strong> will review your request and call you on the number you provided to confirm the details. Meanwhile, feel free to explore more about our services.
                </p>
              </div>
            </div>
          )}

          {!doctor && (
            <div className="text-center mb-8">
              <p className="text-gray-600 max-w-lg mx-auto">
                Our team will review your appointment request and contact you shortly to confirm the details.
              </p>
            </div>
          )}

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
              What happens next?
            </h3>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-[var(--brand-teal)] text-xl font-bold mb-2">1</div>
                <p className="text-sm text-gray-600">
                  We&apos;ll review your appointment request within 2 hours
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-[var(--brand-teal)] text-xl font-bold mb-2">2</div>
                <p className="text-sm text-gray-600">
                  Our team will call you to confirm the appointment
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg text-center">
                <div className="text-[var(--brand-teal)] text-xl font-bold mb-2">3</div>
                <p className="text-sm text-gray-600">
                  You&apos;ll receive an email with appointment details
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${phoneTel}`}
              className="inline-flex justify-center items-center px-6 py-3 bg-[var(--brand-teal)] text-white font-medium rounded-lg hover:bg-[var(--brand-teal-dark)] transition-colors gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
              Call Now: {primaryPhone}
            </a>
            {branch && (
              <Link
                href={`/${branch.slug}`}
                className="inline-flex justify-center items-center px-6 py-3 bg-white text-[var(--brand-teal-deep)] border-2 border-[var(--brand-teal)]/30 font-medium rounded-lg hover:bg-[var(--brand-teal)]/5 transition-colors gap-2"
              >
                Back to {branchName}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
