import Image from "next/image";
import { useRouter } from "next/navigation";
import type React from "react";
import type { ArticleItem } from "../types";

interface ArticleDetailModalProps {
  article: ArticleItem | null;
  onClose: () => void;
}

export const ArticleDetailModal: React.FC<ArticleDetailModalProps> = ({
  article,
  onClose,
}) => {
  const router = useRouter();
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl border border-[#dfbfc3]/40 relative max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-5">
          <span className="text-sm font-bold text-[#830036]">
            {article.category}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="text-[#1f1a1b] bg-white hover:bg-[#830036] hover:text-white w-9 h-9 flex items-center justify-center rounded-full shadow-lg border border-[#dfbfc3]/60 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        <div className="space-y-6 text-left">
          <div className="h-56 w-full rounded-2xl overflow-hidden relative">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-cover"
            />
          </div>

          <div>
            <div className="flex items-center gap-3 text-xs text-[#584145] mb-2">
              <span>{article.readTime}</span>
              <span>•</span>
              <span>By {article.author}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1f1a1b] mb-4">
              {article.title}
            </h2>
            <p className="text-base text-[#584145] leading-relaxed font-medium mb-6">
              {article.description}
            </p>

            <div className="space-y-4 text-xs sm:text-sm text-[#1f1a1b] leading-relaxed border-t border-[#dfbfc3]/30 pt-6">
              <h3 className="text-base font-bold text-[#830036]">
                Executive Summary
              </h3>
              <p>
                In this masterclass, our senior CPA advisory team breaks down
                the exact 5-minute daily checklist required to eliminate
                month-end closing chaos.
              </p>

              <h4 className="text-sm font-bold text-[#1f1a1b] pt-2">
                1. Establish Read-Only Financial API Feeds
              </h4>
              <p>
                Connecting read-only banking feeds allows automated transaction
                matching without exposing account write permissions. This cuts
                manual entry time by 80%.
              </p>

              <h4 className="text-sm font-bold text-[#1f1a1b] pt-2">
                2. Standardize Your Chart of Accounts
              </h4>
              <p>
                Keep main categories under 15 primary headers. Over-segmenting
                categories creates classification paralysis and misallocated tax
                deductions.
              </p>

              <h4 className="text-sm font-bold text-[#1f1a1b] pt-2">
                3. Perform 300-Second Daily Audits
              </h4>
              <p>
                Spend 5 minutes every morning checking uncategorized feed items.
                Solving 2 items a day prevents a 60-item mountain at the end of
                the month.
              </p>
            </div>
          </div>

          <div className="bg-[#fbf1f2] p-6 rounded-2xl border border-[#dfbfc3]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-[#1f1a1b]">
                Need help implementing this in QBO or Xero?
              </h4>
              <p className="text-xs text-[#584145]">
                Our CPAs can set up your bookkeeping engine for you.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                onClose();
                router.push("/contact");
              }}
              className="btn-gradient text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full whitespace-nowrap cursor-pointer"
            >
              Get CPA Setup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
