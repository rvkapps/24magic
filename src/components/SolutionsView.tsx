import { useRouter } from "next/navigation";
import type React from "react";
import { useState } from "react";
import { ConsultationCta } from "./ConsultationCta";
import { SolutionsShowcase } from "./SolutionsShowcase";

export const SolutionsView: React.FC = () => {
  const router = useRouter();
  // Time Savings & ROI Calculator state
  const [monthlyHoursSpent, setMonthlyHoursSpent] = useState(15);
  const [hourlyValue, setHourlyValue] = useState(85);

  const hoursSaved = Math.max(0, Math.round(monthlyHoursSpent * 0.85)); // 85% time savings
  const monthlyMoneySaved = hoursSaved * hourlyValue;
  const annualMoneySaved = monthlyMoneySaved * 12;

  const solutionsList = [
    {
      id: "small-business",
      title: "For Small Businesses & Solopreneurs",
      badge: "Effortless GAAP Books",
      desc: "Never spend weekends sorting through receipt shoe boxes again. We handle daily reconciliation so your financials are 100% tax-ready year-round.",
      points: [
        "Automated bank feed synchronization",
        "Clean month-end financial binder",
        "Quarterly estimated tax alerts",
        "Direct email/portal access to your account specialist",
      ],
      icon: "storefront",
    },
    {
      id: "agencies",
      title: "For Bookkeeping Agencies & Firms",
      badge: "White-Label Engine",
      desc: "Scale your client capacity from 10 to 100 accounts without hiring more staff. Leverage 24MAGIC as your business support and reconciliation partner.",
      points: [
        "White-labeled client portal & reports",
        "Standardized 5-minute review workflows",
        "Bulk transaction categorizations",
        "Quality assurance by senior bookkeeping specialists",
      ],
      icon: "domain",
    },
    {
      id: "ecommerce",
      title: "For E-Commerce & Multi-Channel Sales",
      badge: "Shopify / Amazon Sync",
      desc: "Accurately account for gross sales, merchant processor fees, refunds, and COGS across Shopify, Amazon, Stripe, and PayPal.",
      points: [
        "Gross revenue vs net payout reconciliation",
        "Inventory valuation & COGS tracking",
        "Multi-state sales tax liability reports",
        "Automated merchant fee accounting",
      ],
      icon: "shopping_cart",
    },
  ];

  return (
    <div className="py-12 md:py-16 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      {/* Page Title */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#830036] bg-[#a61d4c]/10 px-4 py-1.5 rounded-full">
          Tailored Solutions
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1f1a1b] mt-3 mb-4">
          Built for Your Business Model
        </h1>
        <p className="text-base sm:text-lg text-[#584145]">
          Whether you’re a solo founder or managing multi-channel e-commerce,
          24MAGIC tailors bookkeeping precision to your specific operational
          stack.
        </p>
      </div>

      {/* Solutions Showcase */}
      <SolutionsShowcase />

      {/* Solutions Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {solutionsList.map((sol) => (
          <div
            key={sol.id}
            className="bg-white p-8 rounded-3xl border border-[#dfbfc3]/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#a61d4c]/10 text-[#830036] flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-2xl">
                  {sol.icon}
                </span>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#875200] bg-[#ffb55b]/20 px-3 py-1 rounded-full">
                {sol.badge}
              </span>
              <h3 className="text-xl font-bold text-[#1f1a1b] mt-3 mb-3">
                {sol.title}
              </h3>
              <p className="text-sm text-[#584145] mb-6 leading-relaxed">
                {sol.desc}
              </p>

              <ul className="space-y-2.5 mb-8">
                {sol.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex items-start gap-2 text-xs text-[#1f1a1b]"
                  >
                    <span className="material-symbols-outlined text-sm text-[#830036] mt-0.5">
                      check_circle
                    </span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              onClick={() => router.push("/contact")}
              className="w-full text-xs font-semibold uppercase tracking-wider text-[#830036] border border-[#830036] py-3 rounded-full hover:bg-[#fbf1f2] transition-colors cursor-pointer"
            >
              Explore {sol.title.split(" ")[1]} Solution
            </button>
          </div>
        ))}
      </div>

      {/* Interactive 5-Minute Time Savings & ROI Calculator */}
      <div className="bg-gradient-to-br from-[#fff8f8] to-[#fbf1f2] p-8 sm:p-12 rounded-3xl border border-[#dfbfc3]/50 shadow-md">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#875200] bg-[#ffb55b]/30 px-4 py-1.5 rounded-full">
            Interactive Calculator
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1f1a1b] mt-3">
            Calculate Your 5-Minute Time &amp; Cost Savings
          </h2>
          <p className="text-xs sm:text-sm text-[#584145] mt-2">
            See how much founder time and capital you reclaim every month by
            switching to 24MAGIC automated bookkeeping.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
          {/* Sliders Input */}
          <div className="space-y-6 bg-white p-6 rounded-2xl border border-[#dfbfc3]/40">
            <div>
              <div className="flex justify-between text-xs font-bold text-[#1f1a1b] mb-2">
                <span>Monthly Hours Spent on Admin/Books:</span>
                <span className="text-[#830036]">
                  {monthlyHoursSpent} hrs/mo
                </span>
              </div>
              <input
                type="range"
                min="3"
                max="50"
                value={monthlyHoursSpent}
                onChange={(e) => setMonthlyHoursSpent(Number(e.target.value))}
                className="w-full accent-[#830036] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#584145] mt-1">
                <span>3 hrs</span>
                <span>25 hrs</span>
                <span>50 hrs</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-[#1f1a1b] mb-2">
                <span>Your Estimated Hourly Value ($):</span>
                <span className="text-[#875200]">${hourlyValue}/hr</span>
              </div>
              <input
                type="range"
                min="30"
                max="300"
                step="5"
                value={hourlyValue}
                onChange={(e) => setHourlyValue(Number(e.target.value))}
                className="w-full accent-[#875200] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#584145] mt-1">
                <span>$30/hr</span>
                <span>$150/hr</span>
                <span>$300/hr</span>
              </div>
            </div>
          </div>

          {/* Results Box */}
          <div className="bg-[#830036] text-white p-8 rounded-2xl shadow-xl space-y-6 text-center md:text-left">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-amber-200">
                Reclaimed Founder Time
              </p>
              <p className="text-4xl font-extrabold text-white mt-1">
                {hoursSaved} Hours / mo
              </p>
              <p className="text-xs text-white/80 mt-1">
                Reduced down to just 5 minutes a day.
              </p>
            </div>

            <div className="pt-4 border-t border-white/20">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-200">
                Annual Value Created
              </p>
              <p className="text-3xl font-extrabold text-amber-300 mt-1">
                ${annualMoneySaved.toLocaleString()} / year
              </p>
              <p className="text-xs text-white/80 mt-1">
                Based on ${monthlyMoneySaved.toLocaleString()}/mo in saved
                founder capacity.
              </p>
            </div>

            <button
              type="button"
              onClick={() => router.push("/contact")}
              className="w-full bg-white text-[#830036] font-bold text-xs uppercase tracking-wider py-3.5 rounded-full hover:bg-amber-50 cursor-pointer shadow-md"
            >
              Claim Your 5-Minute Savings
            </button>
          </div>
        </div>
      </div>

      {/* Book Free Consultation */}
      <ConsultationCta />
    </div>
  );
};
