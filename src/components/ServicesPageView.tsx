"use client";

import { useEffect } from "react";
import { ConsultationCta } from "@/components/ConsultationCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ServicesCapabilities } from "@/components/ServicesCapabilities";
import { ServicesCoreBenefits } from "@/components/ServicesCoreBenefits";
import { ServicesFaq } from "@/components/ServicesFaq";
import { ServicesHero } from "@/components/ServicesHero";

export function ServicesPageView() {
  // Smoothly scroll to a section when arriving via a #hash link
  // (e.g. /services#admin-support from the homepage).
  useEffect(() => {
    const scrollToHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id) return;
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const timer = window.setTimeout(scrollToHash, 150);
    window.addEventListener("hashchange", scrollToHash);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#fff8f8] text-[#1f1a1b] font-['Plus_Jakarta_Sans',sans-serif] flex flex-col justify-between selection:bg-[#a61d4c] selection:text-white">
      {/* Navigation Bar */}
      <Header />

      {/* Main View Content */}
      <main className="flex-1">
        <ServicesHero />
        <ServicesCoreBenefits />
        <ServicesCapabilities />
        <ServicesFaq />
        <ConsultationCta />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
