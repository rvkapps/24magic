import { useRouter } from "next/navigation";
import type React from "react";

interface HeroSectionProps {
  onViewCaseStudies: () => void;
  onOpenEstimator: () => void;
  onExploreServices?: () => void;
}

const KPIS = [
  { label: "Revenue", value: "$48.5k", icon: "trending_up", delta: "+12%" },
  { label: "Expenses", value: "$21.2k", icon: "trending_down", delta: "-4%" },
  { label: "Net Profit", value: "$27.3k", icon: "savings", delta: "+18%" },
];

const BARS = [40, 55, 48, 62, 58, 70, 66, 78, 74, 85, 80, 96].map(
  (height, idx) => ({ id: `bar-${idx}`, height }),
);

const TRUST_ITEMS = [
  { icon: "verified_user", label: "Expert Bookkeeping Team" },
  { icon: "app_registration", label: "QuickBooks Ready" },
  { icon: "lock", label: "Read-Only Secure" },
  { icon: "support_agent", label: "Dedicated Human Support" },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onViewCaseStudies,
  onOpenEstimator,
  onExploreServices,
}) => {
  const router = useRouter();
  return (
    <section className="relative pt-12 md:pt-20 pb-10 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Decorative Gradient Circles */}
      <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-[#a61d4c]/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-[#ffb55b]/15 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Copy */}
        <div className="flex flex-col items-start gap-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[#830036] bg-[#a61d4c]/10 px-4 py-1.5 rounded-full shadow-xs">
              Financial Precision
            </span>
            <span className="text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-[#875200] bg-[#ffb55b]/20 px-4 py-1.5 rounded-full italic shadow-xs">
              Digital - Visible - Magical
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1f1a1b] tracking-tight leading-tight md:leading-none">
            Bookkeeping &amp;{" "}
            <span className="gradient-text">Financial Precision</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#584145] max-w-xl font-normal leading-relaxed">
            Build the life and business of your dreams. We transform complex
            financial data into clear, actionable insights with minimal effort
            on your part.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => router.push("/contact")}
              className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white btn-gradient px-8 py-4 rounded-full w-full sm:w-auto text-center cursor-pointer shadow-md hover:shadow-xl"
            >
              Book a Consultation
            </button>
            <button
              type="button"
              onClick={onViewCaseStudies}
              className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#830036] border border-[#830036] px-8 py-4 rounded-full hover:bg-[#fbf1f2] transition-all duration-300 w-full sm:w-auto text-center cursor-pointer"
            >
              View Case Studies
            </button>
          </div>

          {/* Interactive Estimator Feature Pill */}
          <button
            type="button"
            onClick={onOpenEstimator}
            className="mt-2 inline-flex items-center gap-3 bg-white/90 border border-[#dfbfc3]/60 px-5 py-2.5 rounded-full shadow-xs hover:border-[#830036] hover:shadow-md transition-all cursor-pointer group text-left"
          >
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#830036] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#830036]"></span>
            </span>
            <span className="text-xs font-semibold text-[#1f1a1b]">
              How much time can you save?{" "}
              <span className="text-[#830036] underline ml-1 group-hover:text-[#a61d4c]">
                Calculate 5-Min ROI
              </span>
            </span>
            <span className="material-symbols-outlined text-sm text-[#830036] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>

          {onExploreServices && (
            <a
              href="/services"
              className="mt-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#830036] hover:text-[#a61d4c] transition-colors cursor-pointer flex items-center gap-1.5"
            >
              Explore Our Services
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </a>
          )}
        </div>

        {/* Right: Animated Dashboard Mockup */}
        <div className="relative hidden lg:block">
          {/* <div className="absolute -top-6 -right-2 bg-white rounded-2xl border border-[#dfbfc3]/40 shadow-lg px-5 py-3.5 rotate-2 z-20 animate-float flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#830036]">
              auto_awesome
            </span>
            <div>
              <p className="text-xs font-bold text-[#1f1a1b]">
                Tax-Ready All Year
              </p>
              <p className="text-[10px] text-[#584145]">Filed in minutes</p>
            </div>
          </div> */}

          <div className="relative bg-white rounded-3xl border border-[#dfbfc3]/40 shadow-xl p-7 ambient-shadow z-10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#830036]">
                  24MAGIC Portal
                </p>
                <h3 className="text-lg font-extrabold text-[#1f1a1b]">
                  Monthly Overview
                </h3>
              </div>
              <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Live
              </span>
            </div>

            {/* KPI Tiles */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {KPIS.map((kpi) => (
                <div
                  key={kpi.label}
                  className="bg-[#fff8f8] rounded-2xl border border-[#dfbfc3]/30 p-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="material-symbols-outlined text-base text-[#830036]">
                      {kpi.icon}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-600">
                      {kpi.delta}
                    </span>
                  </div>
                  <p className="text-lg font-extrabold text-[#1f1a1b] mt-2">
                    {kpi.value}
                  </p>
                  <p className="text-[10px] text-[#584145] font-medium">
                    {kpi.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Revenue Bar Chart */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-[#1f1a1b]">
                  Revenue Trend
                </span>
                <span className="text-[10px] text-[#584145]">
                  Last 12 months
                </span>
              </div>
              <div className="flex items-end gap-1.5 h-24">
                {BARS.map((bar) => (
                  <div
                    key={bar.id}
                    className="flex-1 rounded-t-md btn-gradient opacity-80 hover:opacity-100 transition-opacity"
                    style={{ height: `${bar.height}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Reconciliation Progress */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-bold text-[#1f1a1b]">
                  Reconciled
                </span>
                <span className="text-xs font-bold text-[#830036]">96%</span>
              </div>
              <div className="h-2 rounded-full bg-[#fbf1f2] overflow-hidden">
                <div
                  className="h-full rounded-full btn-gradient"
                  style={{ width: "96%" }}
                />
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-3 bg-white rounded-2xl border border-[#dfbfc3]/40 shadow-lg px-5 py-3.5 -rotate-2 z-20 animate-float-delayed flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#830036]">
              verified_user
            </span>
            <div>
              <p className="text-xs font-bold text-[#1f1a1b]">
                Expert Reviewed Monthly
              </p>
              <p className="text-[10px] text-[#584145]">GAAP standards</p>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="mt-16 md:mt-20 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-[#dfbfc3]/30 pt-6">
        {TRUST_ITEMS.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 text-xs font-semibold text-[#584145]"
          >
            <span className="material-symbols-outlined text-base text-[#830036]">
              {item.icon}
            </span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
