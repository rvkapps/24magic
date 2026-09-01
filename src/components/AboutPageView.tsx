"use client";

import { AboutView } from "@/components/AboutView";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export function AboutPageView() {
  return (
    <div className="min-h-screen bg-[#fff8f8] text-[#1f1a1b] font-['Plus_Jakarta_Sans',sans-serif] flex flex-col justify-between selection:bg-[#a61d4c] selection:text-white">
      {/* Navigation Bar */}
      <Header />

      {/* Main View Content */}
      <main className="flex-1">
        <AboutView />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
