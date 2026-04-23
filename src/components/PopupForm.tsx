'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { BranchConfig } from "@/config/branch-configs";

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
  branch?: BranchConfig;
}

// Set your Google Apps Script web app URL here to receive submissions (or use env NEXT_PUBLIC_BOOKING_SCRIPT_URL)
const BOOKING_SCRIPT_URL = process.env.NEXT_PUBLIC_BOOKING_SCRIPT_URL || '';

export default function PopupForm({ isOpen, onClose, branch }: PopupFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const primaryPhone = branch ? branch.contact.phones[0] : "";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get('fullName') as string,
      phone: formData.get('phoneNumber') as string,
      email: formData.get('email') as string,
      concern: formData.get('dentalConcern') as string,
      branch: branch?.slug || '',
      branchName: branch?.name || '',
    };

    setIsSubmitting(true);
    try {
      if (BOOKING_SCRIPT_URL.trim()) {
        await fetch(BOOKING_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
      }
      onClose();
      // Pass branch context to thank-you page so it can personalize
      const qs = branch ? `?branch=${branch.slug}` : '';
      router.push(`/thank-you${qs}`);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(`Something went wrong. Please call us at ${primaryPhone || '+91 98215 28338'} to book.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[60] p-4 animate-in fade-in duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-title"
    >
      <div
        className="relative bg-white rounded-2xl shadow-2xl p-6 w-full max-w-xl max-h-[92vh] overflow-y-auto animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prominent close button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close"
          className="absolute top-3 right-3 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 flex items-center justify-center text-xl font-bold transition-colors z-10"
        >
          ×
        </button>

        {/* Header */}
        <div className="mb-4 pr-10">
          <h2 id="popup-title" className="text-xl md:text-2xl font-bold text-[var(--brand-teal-deep)]">
            Book Your Appointment
          </h2>
          {branch && (
            <p className="text-sm text-gray-500 mt-1">
              at Impressionz Dental Care, <span className="font-semibold text-[var(--brand-teal)]">{branch.name}</span>
            </p>
          )}
        </div>

        {/* Offer info */}
        <div className="bg-emerald-50 p-3 md:p-4 rounded-lg mb-4 border-l-4 border-[var(--brand-teal-deep)]">
          <p className="text-sm md:text-base text-gray-700 text-center">
            <strong>Includes:</strong> Professional Consultation & Digital Scan
            <span className="text-[var(--brand-teal-deep)] font-bold"> with our specialist dentist</span>
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium mb-1">Full Name</label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              required
              autoComplete="name"
              className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-teal)]/40 focus:border-[var(--brand-teal)]"
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              id="phoneNumber"
              type="tel"
              name="phoneNumber"
              required
              autoComplete="tel"
              className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-teal)]/40 focus:border-[var(--brand-teal)]"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              autoComplete="email"
              className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-teal)]/40 focus:border-[var(--brand-teal)]"
            />
          </div>

          <div>
            <label htmlFor="dentalConcern" className="block text-sm font-medium mb-1">Describe Your Dental Concern</label>
            <textarea
              id="dentalConcern"
              name="dentalConcern"
              required
              rows={2}
              placeholder="Briefly describe your dental issue"
              className="w-full p-2 md:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--brand-teal)]/40 focus:border-[var(--brand-teal)]"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[var(--brand-teal-deep)] text-white py-3 md:py-4 rounded-lg font-bold text-lg hover:bg-[var(--brand-dark)] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Booking…' : 'Book Appointment'}
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full text-sm text-gray-500 hover:text-gray-700 transition-colors py-2"
          >
            Maybe later — let me browse first
          </button>
        </form>

      </div>
    </div>
  );
}
