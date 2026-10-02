import Link from "next/link";
import type React from "react";
import { useState } from "react";
import { PLANS_DATA } from "../data/mockData";
import { ConsultationCta } from "./ConsultationCta";

export const PricingView: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [estimatedTxs, setEstimatedTxs] = useState(120);

  // Highlighting matching plan based on transaction volume slider
  const getRecommendedPlanId = (txs: number) => {
    if (txs <= 75) return "starter";
    if (txs <= 250) return "growth";
    return "enterprise";
  };

  const recommendedId = getRecommendedPlanId(estimatedTxs);

  return (
    <div className="py-12 md:py-16 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#830036] bg-[#a61d4c]/10 px-4 py-1.5 rounded-full">
          Transparent Pricing
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1f1a1b] mt-3 mb-4">
          Simple, Predictable Financial Plans
        </h1>
        <p className="text-base sm:text-lg text-[#584145]">
          No hidden hourly fees. Just clean books, dedicated expert oversight,
          and complete financial peace of mind.
        </p>

        {/* Toggle Billing Period */}
        <div className="mt-8 inline-flex items-center gap-3 bg-white p-1.5 rounded-full border border-[#dfbfc3]/50 shadow-xs">
          <button
            type="button"
            onClick={() => setIsAnnual(false)}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              !isAnnual
                ? "bg-[#830036] text-white shadow-xs"
                : "text-[#584145] hover:text-[#830036]"
            }`}
          >
            Monthly Billing
          </button>
          <button
            type="button"
            onClick={() => setIsAnnual(true)}
            className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5 ${
              isAnnual
                ? "bg-[#830036] text-white shadow-xs"
                : "text-[#584145] hover:text-[#830036]"
            }`}
          >
            Annual Billing
            <span className="bg-[#ffb55b] text-[#1f1a1b] text-[10px] font-extrabold px-2 py-0.5 rounded-full">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* Transaction Estimator Slider */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#dfbfc3]/40 shadow-xs max-w-2xl mx-auto text-center space-y-3">
        <label
          htmlFor="tx-estimator"
          className="block text-xs font-bold text-[#1f1a1b] uppercase tracking-wider"
        >
          Estimate Your Monthly Transactions:{" "}
          <span className="text-[#830036] font-extrabold text-sm">
            {estimatedTxs} transactions/mo
          </span>
        </label>
        <input
          id="tx-estimator"
          type="range"
          min="20"
          max="500"
          step="10"
          value={estimatedTxs}
          onChange={(e) => setEstimatedTxs(Number(e.target.value))}
          className="w-full accent-[#830036] cursor-pointer"
        />
        <p className="text-xs text-[#584145]">
          Recommended match:{" "}
          <strong className="text-[#830036]">
            {PLANS_DATA.find((p) => p.id === recommendedId)?.name}
          </strong>
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {PLANS_DATA.map((plan) => {
          const price = isAnnual ? plan.priceAnnual : plan.priceMonthly;
          const isRecommended = plan.id === recommendedId;

          return (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 flex flex-col text-center transition-all duration-300 bg-white ${
                isRecommended
                  ? "order-first md:order-none border-2 border-[#830036] shadow-xl md:-translate-y-2"
                  : "border border-[#dfbfc3]/40 shadow-xs hover:shadow-md"
              }`}
            >
              {isRecommended && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 btn-gradient text-white text-[10px] font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-xs whitespace-nowrap">
                  Recommended Match
                </span>
              )}

              <h3 className="text-xl font-bold text-[#1f1a1b]">{plan.name}</h3>
              <p className="text-xs text-[#584145] mt-2 min-h-10">
                {plan.description}
              </p>

              <div className="my-6">
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-extrabold text-[#1f1a1b]">
                    ${price}
                  </span>
                  <span className="text-xs font-semibold text-[#584145]">
                    / month
                  </span>
                </div>
                <p className="text-[11px] text-emerald-700 font-semibold mt-1 min-h-4">
                  {isAnnual ? `Billed annually ($${price * 12}/yr)` : ""}
                </p>
                <p className="text-xs text-[#875200] font-semibold mt-3 bg-[#ffb55b]/15 px-3 py-1 rounded-lg inline-block">
                  {plan.monthlyTxLimit}
                </p>
              </div>

              <Link
                href="/contact"
                className={`mt-auto w-full py-3.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  isRecommended
                    ? "btn-gradient text-white shadow-md hover:shadow-xl"
                    : "border border-[#830036] text-[#830036] hover:bg-[#fbf1f2]"
                }`}
              >
                Contact Us
              </Link>
            </div>
          );
        })}
      </div>

      {/* Book Free Consultation */}
      <ConsultationCta />
    </div>
  );
};
