import Image from "next/image";
import type React from "react";
import { useState } from "react";
import { ARTICLES_DATA } from "../data/mockData";
import type { ArticleItem } from "../types";
import { ConsultationCta } from "./ConsultationCta";

interface ResourcesViewProps {
  onSelectArticle: (article: ArticleItem) => void;
}

export const ResourcesView: React.FC<ResourcesViewProps> = ({
  onSelectArticle,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All",
    "Business Growth",
    "Technical Skills",
    "Tax Strategy",
    "Tools & Workflows",
  ];

  const filteredArticles = ARTICLES_DATA.filter((art) => {
    const matchesCategory =
      selectedCategory === "All" || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 md:py-16 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-12">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#830036] bg-[#a61d4c]/10 px-4 py-1.5 rounded-full">
          Masterclasses &amp; Guides
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1f1a1b] mt-3 mb-4">
          Bookkeeping Knowledge Base
        </h1>
        <p className="text-base sm:text-lg text-[#584145]">
          Step-by-step masterclasses, QuickBooks Online cleanup tutorials, and
          tax write-off playbooks written by senior bookkeeping specialists.
        </p>
      </div>

      {/* Search & Category Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-[#dfbfc3]/40 shadow-xs">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto py-1">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-semibold px-4 py-2 rounded-full cursor-pointer whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? "bg-[#830036] text-white shadow-xs"
                  : "bg-[#f5eced] text-[#584145] hover:bg-[#dfbfc3]/40"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search tutorials..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-[#dfbfc3] text-xs focus:outline-hidden focus:border-[#830036]"
          />
          <span className="material-symbols-outlined absolute left-2.5 top-2.5 text-sm text-[#584145]">
            search
          </span>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 border border-[#dfbfc3]/30 flex flex-col justify-between"
          >
            <div>
              <div className="h-56 w-full overflow-hidden relative">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-white/90 backdrop-blur-md text-[#830036] font-medium text-xs px-3 py-1 rounded-full shadow-xs">
                    {article.category}
                  </span>
                  <span className="bg-[#1f1a1b]/80 text-white font-medium text-xs px-3 py-1 rounded-full shadow-xs">
                    {article.readTime}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1f1a1b] mb-2 group-hover:text-[#830036] transition-colors">
                  {article.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#584145] leading-relaxed mb-4">
                  {article.description}
                </p>
                <p className="text-[11px] font-semibold text-[#875200]">
                  Author: {article.author}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6">
              <button
                type="button"
                onClick={() => onSelectArticle(article)}
                className="w-full btn-gradient text-white text-xs uppercase tracking-wider font-semibold py-3 rounded-full cursor-pointer"
              >
                Read Masterclass
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Book Free Consultation */}
      <ConsultationCta />
    </div>
  );
};
