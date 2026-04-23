import { Suspense } from 'react';
import type { Metadata } from 'next';
import ThankYouPage from '@/components/ThankYouPage';

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Your appointment request has been received at Impressionz Dental Care. Our team will contact you shortly.',
  robots: { index: false, follow: false },
};

export default function ThankYouRoute() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50" />}>
      <ThankYouPage />
    </Suspense>
  );
}
