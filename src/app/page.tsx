'use client';

import Link from "next/link";
import Image from "next/image";
import BackgroundGraphics from "@/components/BackgroundGraphics";
import { branches } from "@/config/branch-configs";

export default function Home() {
  return (
    <div className="bg-medical-light min-h-screen flex flex-col items-center justify-center p-4">
      <BackgroundGraphics />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="bg-white p-4 rounded-2xl shadow-xl inline-block mb-8 border border-gray-100">
           <Image
             src="/images/logo.webp"
             alt="Impressionz Dental Care"
             width={200}
             height={60}
             className="h-auto w-auto"
           />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          Welcome to <span className="text-teal">Impressionz</span>
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Choose your nearest branch for specialized, affordable, and painless dental care in Mumbai.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-2xl mx-auto">
          <Link 
            href="/borivali"
            className="group bg-white p-8 rounded-[32px] shadow-lg hover:shadow-2xl transition-all border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-[#72b1b1]/10 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-[#72b1b1] group-hover:text-white transition-colors">
              📍
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Borivali West</h2>
            <p className="text-gray-500 mb-6 italic">Led by Dr. Sandeep Singh</p>
            <span className="text-[#72b1b1] font-bold uppercase tracking-widest text-sm flex items-center gap-2">
              Visit Clinic <span className="group-hover:translate-x-2 transition-transform">→</span>
            </span>
          </Link>

          <Link 
            href="/andheri"
            className="group bg-white p-8 rounded-[32px] shadow-lg hover:shadow-2xl transition-all border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2"
          >
            <div className="w-16 h-16 bg-[#72b1b1]/10 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-[#72b1b1] group-hover:text-white transition-colors">
              📍
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Andheri West</h2>
            <p className="text-gray-500 mb-6 italic">Led by Dr. Priya Singh</p>
            <span className="text-[#72b1b1] font-bold uppercase tracking-widest text-sm flex items-center gap-2">
              Visit Clinic <span className="group-hover:translate-x-2 transition-transform">→</span>
            </span>
          </Link>
        </div>
        
        <div className="mt-16 text-gray-400 text-sm font-medium uppercase tracking-[0.2em]">
          Mumbai's Trusted Multi-Location Dental Provider
        </div>
      </div>
    </div>
  );
}
