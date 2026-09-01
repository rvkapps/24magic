"use client";

import { useState } from "react";
import { ArticleDetailModal } from "@/components/ArticleDetailModal";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ResourcesView } from "@/components/ResourcesView";
import type { ArticleItem } from "@/types";

export function ResourcesPageView() {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(
    null,
  );

  return (
    <div className="min-h-screen bg-[#fff8f8] text-[#1f1a1b] font-['Plus_Jakarta_Sans',sans-serif] flex flex-col justify-between selection:bg-[#a61d4c] selection:text-white">
      {/* Navigation Bar */}
      <Header />

      {/* Main View Content */}
      <main className="flex-1">
        <ResourcesView onSelectArticle={(art) => setSelectedArticle(art)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Popups */}
      <ArticleDetailModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />
    </div>
  );
}
