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

  const team = [
    {
      name: "Elena Rostova",
      role: "Co-Founder & Head of Client Accounts",
      bio: "14+ years of experience advising scaling SaaS and e-commerce brands on financial organization and reporting.",
    },
    {
      name: "Marcus Vance",
      role: "Head of Client Reconciliation",
      bio: "Specializes in bookkeeping cleanup, reconciliation accuracy, and internal control frameworks.",
    },
    {
      name: "David Chen",
      role: "VP of Financial Automation",
      bio: "Ex-Fintech Lead Engineer dedicated to building seamless read-only bank feeds and real-time ledger matching.",
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

      {/* Team */}
      <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#dfbfc3]/40 shadow-xs">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1f1a1b] text-center mb-8">
          Meet Our Leadership Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((m) => (
            <div
              key={m.name}
              className="p-6 rounded-2xl bg-[#fff8f8] border border-[#dfbfc3]/30"
            >
              <div className="w-12 h-12 rounded-full btn-gradient flex items-center justify-center text-white font-bold mb-4">
                {m.name.split(" ")[0][0]}
                {m.name.split(" ")[1][0]}
              </div>
              <h4 className="text-base font-bold text-[#1f1a1b]">{m.name}</h4>
              <p className="text-xs font-semibold text-[#830036] mb-3">
                {m.role}
              </p>
              <p className="text-xs text-[#584145] leading-relaxed">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Book Free Consultation */}
      <ConsultationCta />
    </div>
  );
};
