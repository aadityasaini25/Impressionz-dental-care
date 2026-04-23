'use client';

import { MessageCircle } from 'lucide-react';
import { BranchConfig } from "@/config/branch-configs";

interface WhatsAppButtonProps {
  branch?: BranchConfig;
}

export default function WhatsAppButton({ branch }: WhatsAppButtonProps) {
  const primaryPhone = branch ? branch.contact.phones[0] : "+919821528338";
  const branchName = branch ? branch.name : "Impressionz Dental Care";
  
  const phoneNumber = primaryPhone.replace(/\+/g, '').replace(/\s/g, '').replace(/-/g, '');
  const message = `Hello! I would like to book an appointment at Impressionz Dental Care (${branchName}).`;

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </button>
  );
} 