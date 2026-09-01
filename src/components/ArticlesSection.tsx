import Image from "next/image";
import type React from "react";
import { ARTICLES_DATA } from "../data/mockData";
import type { ArticleItem } from "../types";

interface ArticlesSectionProps {
  onSelectArticle: (article: ArticleItem) => void;
  onViewAllResources: () => void;
}

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({
  onSelectArticle,
  onViewAllResources,
}) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-24">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#830036] mb-2">
            Articles & Masterclasses
          </h2>
          <p className="text-base md:text-lg text-[#584145]">
            Expert insights and step-by-step guides to help you master the art
            of modern bookkeeping.
          </p>
        </div>
        <button
          type="button"
          onClick={onViewAllResources}
          className="inline-flex items-center text-[#830036] font-semibold text-sm hover:underline group cursor-pointer w-fit"
        >
          View all resources
          <span className="material-symbols-outlined ml-1 group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {ARTICLES_DATA.slice(0, 2).map((article) => (
          <div
            key={article.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-500 border border-[#dfbfc3]/30 flex flex-col justify-between"
          >
            <div>
              <div className="h-64 w-full overflow-hidden relative">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-[#830036] font-medium text-xs px-3.5 py-1.5 rounded-full shadow-xs">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#1f1a1b] mb-3 group-hover:text-[#830036] transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm md:text-base text-[#584145] mb-6 leading-relaxed">
                  {article.description}
                </p>
              </div>
            </div>

            <div className="px-8 pb-8">
              <button
                type="button"
                onClick={() => onSelectArticle(article)}
                className="inline-flex items-center justify-center btn-gradient text-white px-6 py-3 rounded-full font-semibold text-xs uppercase tracking-wider transition-all duration-300 group cursor-pointer"
              >
                Learn More
                <span className="material-symbols-outlined ml-2 text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
