'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-md text-gray-600 hover:text-blue-600"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
          <nav className="px-4 py-2 space-y-2">
            <a
              href="#about"
              className="block py-2 text-gray-600 hover:text-blue-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="block py-2 text-gray-600 hover:text-blue-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#testimonials"
              className="block py-2 text-gray-600 hover:text-blue-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="block py-2 text-gray-600 hover:text-blue-600 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <a
              href="tel:+919023523178"
              className="block bg-[#485b51] text-white px-4 py-2 rounded-lg hover:opacity-90 transition text-center mt-4"
              onClick={() => setIsOpen(false)}
            >
              Book Appointment
            </a>
          </nav>
        </div>
      )}
    </div>
  );
} 