"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArticleDetailModal } from "@/components/ArticleDetailModal";
import { ArticlesSection } from "@/components/ArticlesSection";
import { BookkeepingShowcase } from "@/components/BookkeepingShowcase";
import { ConsultationCta } from "@/components/ConsultationCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServiceDetailModal } from "@/components/ServiceDetailModal";
import { ServicesFaq } from "@/components/ServicesFaq";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import type { ArticleItem, ServiceItem } from "@/types";

export function HomeView() {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(
    null,
  );
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(
    null,
  );

  const handleOpenEstimator = () => {
    router.push("/solutions");
  };

  const handleViewCaseStudies = () => {
    router.push("/resources");
  };

  return (
    <div className="min-h-screen bg-[#fff8f8] text-[#1f1a1b] font-['Plus_Jakarta_Sans',sans-serif] flex flex-col justify-between selection:bg-[#a61d4c] selection:text-white">
      {/* Navigation Bar */}
      <Header />

      {/* Main Dynamic View Content */}
      <main className="flex-1">
        <HeroSection
          onViewCaseStudies={handleViewCaseStudies}
          onOpenEstimator={handleOpenEstimator}
          onExploreServices={() => router.push("/services")}
        />
        <BookkeepingShowcase />
        <ArticlesSection
          onSelectArticle={(art) => setSelectedArticle(art)}
          onViewAllResources={() => router.push("/resources")}
        />
        <TestimonialsSection />
        <ServicesFaq />
        <ConsultationCta />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Popups */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />

      <ArticleDetailModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </div>
  );
}
