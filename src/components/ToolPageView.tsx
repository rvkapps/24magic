"use client";

import Link from "next/link";
import type React from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import {
  CogsCalculator,
  DebtToEquityCalculator,
  EbitdaCalculator,
  ProfitMarginCalculator,
} from "@/components/tools/BusinessCalculators";
import {
  EbayCalculator,
  EtsyCalculator,
} from "@/components/tools/MarketplaceCalculators";
import {
  DeductionsChecklist,
  QuarterlyTaxCalculator,
  SelfEmploymentTaxCalculator,
} from "@/components/tools/TaxCalculators";
import { getTool, TOOLS } from "@/data/tools";

const CALCULATORS: Record<string, React.FC> = {
  "quarterly-tax-calculator": QuarterlyTaxCalculator,
  "self-employment-tax-calculator": SelfEmploymentTaxCalculator,
  "self-employed-tax-deductions": DeductionsChecklist,
  "profit-margin-calculator": ProfitMarginCalculator,
  "cogs-calculator": CogsCalculator,
  "debt-to-equity-calculator": DebtToEquityCalculator,
  "ebay-profit-margin-calculator": EbayCalculator,
  "ebitda-calculator": EbitdaCalculator,
  "etsy-profit-margin-calculator": EtsyCalculator,
};

export function ToolPageView({ slug }: { slug: string }) {
  const tool = getTool(slug);
  const Calculator = CALCULATORS[slug];
  if (!tool || !Calculator) return null;

  const related = TOOLS.filter((t) => t.slug !== slug)
    .sort(
      (a, b) =>
        Number(b.category === tool.category) -
        Number(a.category === tool.category),
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#fff8f8] text-[#1f1a1b] font-['Plus_Jakarta_Sans',sans-serif] flex flex-col justify-between selection:bg-[#a61d4c] selection:text-white">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-7xl space-y-12 px-4 py-10 sm:px-6 md:px-12 md:py-14">
          {/* Breadcrumb + heading */}
          <div className="space-y-4">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-xs font-semibold text-[#584145]">
                <li>
                  <Link
                    href="/tools"
                    className="inline-flex items-center gap-1 text-[#830036] hover:underline"
                  >
                    <span
                      className="material-symbols-outlined text-base"
                      aria-hidden="true"
                    >
                      arrow_back
                    </span>
                    All tools
                  </Link>
                </li>
              </ol>
            </nav>
            <h1 className="text-3xl font-extrabold tracking-tight text-[#1f1a1b] sm:text-4xl md:text-5xl">
              {tool.title}
            </h1>
            <p className="max-w-2xl text-base text-[#584145] sm:text-lg">
              {tool.description}
            </p>
          </div>

          {/* Calculator */}
          <Calculator />

          {/* Disclaimer */}
          <p className="text-xs leading-relaxed text-[#584145]">
            This tool gives estimates for general information only. It is not
            tax, legal or financial advice, and 24MAGIC is not a CPA firm.
            Please check your own situation with a qualified professional.
          </p>

          {/* CTA to contact form */}
          <section
            aria-labelledby="tool-cta"
            className="rounded-3xl border border-[#dfbfc3]/40 bg-white p-8 shadow-xs sm:p-10"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl space-y-2">
                <h2
                  id="tool-cta"
                  className="text-2xl font-extrabold tracking-tight text-[#1f1a1b] sm:text-3xl"
                >
                  {tool.ctaTitle}
                </h2>
                <p className="text-sm leading-relaxed text-[#584145] sm:text-base">
                  {tool.ctaText}
                </p>
              </div>
              <Link
                href={`/contact?from=${tool.slug}`}
                className="btn-gradient flex min-h-12 shrink-0 items-center justify-center rounded-full px-8 py-4 text-center text-xs font-semibold uppercase tracking-wider text-white shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#830036] sm:text-sm"
              >
                Book a Free Consultation
              </Link>
            </div>
          </section>

          {/* Related tools */}
          <section aria-labelledby="related-tools">
            <h2
              id="related-tools"
              className="mb-5 text-xl font-extrabold text-[#1f1a1b]"
            >
              More free tools
            </h2>
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {related.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/tools/${t.slug}`}
                    className="group flex h-full items-start gap-4 rounded-2xl border border-[#dfbfc3]/40 bg-white p-5 motion-safe:transition-all hover:border-[#830036] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#830036]"
                  >
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fbf1f2] text-[#830036]"
                      aria-hidden="true"
                    >
                      <span className="material-symbols-outlined text-xl">
                        {t.icon}
                      </span>
                    </span>
                    <span>
                      <span className="block text-sm font-bold text-[#1f1a1b]">
                        {t.title}
                      </span>
                      <span className="mt-1 block text-xs leading-relaxed text-[#584145]">
                        {t.description}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
