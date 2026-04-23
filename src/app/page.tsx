'use client';

import { useEffect, useState } from "react";

import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import DoctorProfile from "@/components/DoctorProfile";
import ServiceHighlights from "@/components/ServiceHighlights";
import FAQSection from "@/components/FAQSection";
import RealTransformations from "@/components/RealTransformations";
import ClinicPhotos from "@/components/ClinicPhotos";
import GoogleReviews from "@/components/GoogleReviews";
import CTABox from "@/components/CTABox";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import PopupForm from "@/components/PopupForm";
import BackgroundGraphics from "@/components/BackgroundGraphics";

export default function Home() {
  const [showStickyCta, setShowStickyCta] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [remainingSeconds, setRemainingSeconds] = useState(19 * 60 + 49);

  const minutes = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingSeconds((prev) => {
        if (prev > 0) {
          return prev - 1;
        }
        return 19 * 60 + 49;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Scroll handler for sticky CTA
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCta(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show popup after a longer delay so it feels less intrusive
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 12000);
    return () => clearTimeout(timer);
  }, []);

  // Lock body scroll when popup is open
  useEffect(() => {
    if (!showPopup) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [showPopup]);
  // Section visibility observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.05,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('section, .fade-up').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="bg-medical-light min-h-screen">
      <BackgroundGraphics />

      {/* Main Content */}
      <div className="relative z-10">
        <Header onBookAppointment={openPopup} />
        <HeroSection onBookAppointment={openPopup} />
        <WhyChooseUs />
        <DoctorProfile onBookAppointment={openPopup} />
        <ServiceHighlights />
        <RealTransformations />
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent max-w-4xl mx-auto opacity-50" />
        <FAQSection />
        <ClinicPhotos onBookAppointment={openPopup} />
        <GoogleReviews />
        <CTABox onBookAppointment={openPopup} />
        <Footer />
      </div>

      {/* Interactive Components */}
      <StickyCTA isVisible={showStickyCta} onBookAppointment={openPopup} />
      <PopupForm
        isOpen={showPopup}
        onClose={closePopup}
        minutes={minutes}
        seconds={seconds}
      />
    </div>
  );
}
