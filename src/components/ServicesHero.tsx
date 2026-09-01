import { useRouter } from "next/navigation";
import type React from "react";

const HERO_STATS = [
  { value: "5–7 days", label: "to get fully set up" },
  { value: "100%", label: "read-only & secure" },
  { value: "1:1", label: "dedicated human support" },
  { value: "365 days", label: "organized filing" },
];

const BUNDLE_ITEMS = [
  "Bookkeeping",
  "Document Management",
  "Administrative Support",
];

export const ServicesHero: React.FC = () => {
  const router = useRouter();
  return (
    <section className="relative pt-16 md:pt-24 pb-8 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Decorative Gradient Circles */}
      <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-[#a61d4c]/10 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[420px] h-[420px] bg-[#ffb55b]/15 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Copy */}
        <div className="flex flex-col items-start gap-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs md:text-sm font-semibold uppercase tracking-wider text-[#830036] bg-[#a61d4c]/10 px-4 py-1.5 rounded-full shadow-xs">
              Our Services
            </span>
            <span className="text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-[#875200] bg-[#ffb55b]/20 px-4 py-1.5 rounded-full italic shadow-xs">
              Digital - Visible - Magical
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1f1a1b] tracking-tight leading-tight md:leading-none">
            Premium <span className="gradient-text">Bookkeeping</span> &amp;
            Business Support
          </h1>

          <p className="text-base sm:text-lg text-[#584145] max-w-xl font-normal leading-relaxed">
            Simplify your operations with professional bookkeeping and dedicated
            business support services tailored to your business. We keep your
            accounts accurate, your records organized, and your day-to-day
            administration running seamlessly.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => router.push("/contact")}
              className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white btn-gradient px-8 py-4 rounded-full w-full sm:w-auto text-center cursor-pointer shadow-md hover:shadow-xl"
            >
              Book a Consultation
            </button>
            <a
              href="#services"
              className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#830036] border border-[#830036] px-8 py-4 rounded-full hover:bg-[#fbf1f2] transition-all duration-300 w-full sm:w-auto text-center cursor-pointer"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Right: Visual Composition */}
        <div className="relative hidden lg:block">
          <div className="absolute -top-5 -right-3 bg-white rounded-2xl border border-[#dfbfc3]/40 shadow-lg px-5 py-3.5 rotate-2 z-20 flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#830036]">
              rocket_launch
            </span>
            <div>
              <p className="text-xs font-bold text-[#1f1a1b]">
                Set up in 5–7 days
              </p>
              <p className="text-[10px] text-[#584145]">QuickBooks ready</p>
            </div>
          </div>

          <div className="relative bg-white rounded-3xl border border-[#dfbfc3]/40 shadow-xl p-8 ambient-shadow z-10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#830036]">
                  24MAGIC Suite
                </p>
                <h3 className="text-lg font-extrabold text-[#1f1a1b]">
                  Your Service Bundle
                </h3>
              </div>
              <span className="btn-gradient text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                Active
              </span>
            </div>
            <div className="space-y-3">
              {BUNDLE_ITEMS.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-[#fff8f8] rounded-xl border border-[#dfbfc3]/30 px-4 py-3"
                >
                  <span className="h-8 w-8 rounded-lg bg-[#a61d4c]/10 text-[#830036] flex items-center justify-center">
                    <span className="material-symbols-outlined text-base">
                      check_circle
                    </span>
                  </span>
                  <span className="text-sm font-semibold text-[#1f1a1b]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-2.5 text-xs text-[#584145]">
              <span className="material-symbols-outlined text-[#875200]">
                verified
              </span>
              Every transaction checked by a real professional
            </div>
          </div>

          <div className="absolute -bottom-5 -left-4 bg-white rounded-2xl border border-[#dfbfc3]/40 shadow-lg px-5 py-3.5 -rotate-2 z-20 flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[#830036]">
              support_agent
            </span>
            <div>
              <p className="text-xs font-bold text-[#1f1a1b]">
                A real person by name
              </p>
              <p className="text-[10px] text-[#584145]">
                No automated ticketing
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 md:mt-20 py-8 border-t border-[#dfbfc3]/30">
        {HERO_STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1">
            <span className="gradient-text text-2xl sm:text-3xl font-extrabold">
              {stat.value}
            </span>
            <span className="text-xs text-[#584145] font-medium">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
