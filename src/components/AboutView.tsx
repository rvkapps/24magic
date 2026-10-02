import type React from "react";
import { ConsultationCta } from "./ConsultationCta";

export const AboutView: React.FC = () => {
  const values = [
    {
      title: "Obsessive Precision",
      desc: "Every single ledger entry is double-verified to ensure zero discrepancy down to the cent.",
      icon: "verified",
    },
    {
      title: "5-Minute Respect",
      desc: "Founders should build companies, not format spreadsheets. We respect your time above all.",
      icon: "schedule",
    },
    {
      title: "Professional Integrity",
      desc: "We merge cutting-edge AI automation with careful human expert review for maximum confidence.",
      icon: "shield",
    },
  ];

  return (
    <div className="py-12 md:py-16 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto space-y-16">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#830036] bg-[#a61d4c]/10 px-4 py-1.5 rounded-full">
          About 24MAGIC
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1f1a1b] mt-3 mb-4">
          Financial Precision Meets Modern Magic
        </h1>
        <p className="text-base sm:text-lg text-[#584145] leading-relaxed">
          We built 24MAGIC to solve a fundamental problem: small business owners
          were losing hundreds of hours every year fighting accounting software,
          or paying fortune fees for outdated accounting firms.
        </p>
      </div>

      {/* Values Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((v) => (
          <div
            key={v.title}
            className="bg-white p-8 rounded-3xl border border-[#dfbfc3]/40 shadow-xs text-center space-y-3"
          >
            <div className="w-12 h-12 bg-[#a61d4c]/10 text-[#830036] rounded-2xl flex items-center justify-center mx-auto">
              <span className="material-symbols-outlined text-2xl">
                {v.icon}
              </span>
            </div>
            <h3 className="text-xl font-bold text-[#1f1a1b]">{v.title}</h3>
            <p className="text-xs sm:text-sm text-[#584145] leading-relaxed">
              {v.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Book Free Consultation */}
      <ConsultationCta />
    </div>
  );
};
