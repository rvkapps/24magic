import Image from "next/image";
import type React from "react";

const STATS = [
  { value: "85%", label: "Time Saved", icon: "schedule" },
  { value: "10×", label: "Scale Capacity", icon: "trending_up" },
  { value: "100%", label: "Tax-Ready Books", icon: "verified" },
];

const HIGHLIGHTS = [
  {
    icon: "speed",
    title: "85% Faster Reconciliation",
    desc: "Automated bank feeds and AI-powered categorization cut manual work from hours to minutes.",
  },
  {
    icon: "expand",
    title: "Scale Without Hiring",
    desc: "Go from 10 to 100+ client accounts without adding more support staff.",
  },
  {
    icon: "verified",
    title: "CPA-Quality, Always",
    desc: "Every reconciliation is reviewed by a Senior CPA — audit-ready, year-round.",
  },
];

export const SolutionsShowcase: React.FC = () => {
  return (
    <section className="py-14 md:py-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image + floating card */}
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-[#dfbfc3]/40 will-change-transform relative aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Team collaborating on business solutions"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
          {/* Floating stat card */}
          <div className="absolute -bottom-5 -right-3 sm:right-6 bg-white rounded-2xl shadow-2xl border border-[#dfbfc3]/40 p-4 max-w-[190px]">
            <p className="text-2xl font-extrabold text-[#830036]">5 min</p>
            <p className="text-[11px] text-[#584145] mt-1 leading-snug">
              Daily review time — down from hours of manual work.
            </p>
          </div>
          {/* Decorative accent */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#ffb55b]/20 rounded-full blur-2xl -z-10 pointer-events-none" />
        </div>

        {/* Badge + Heading + Highlights + Stats */}
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#a61d4c]/10 px-4 py-1.5 text-xs font-bold text-[#830036]">
              <span className="material-symbols-outlined text-sm">
                auto_awesome
              </span>
              <span>Why 24MAGIC</span>
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#1f1a1b] leading-tight">
              Solutions That Scale With You
            </h2>

            <p className="text-sm sm:text-base text-[#584145] leading-relaxed max-w-lg">
              From solo founders to multi-channel agencies, 24MAGIC replaces
              fragmented spreadsheets with one automated, CPA-reviewed
              bookkeeping engine.
            </p>
          </div>

          {/* Highlights list */}
          <div className="space-y-5">
            {HIGHLIGHTS.map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-[#a61d4c]/10 text-[#830036] flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">
                    {item.icon}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1f1a1b]">
                    {item.title}
                  </p>
                  <p className="text-xs text-[#584145] mt-0.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#fbf1f2] rounded-2xl p-4 text-center border border-[#dfbfc3]/40"
              >
                <div className="w-10 h-10 rounded-xl bg-[#a61d4c]/10 text-[#830036] flex items-center justify-center mx-auto mb-2">
                  <span className="material-symbols-outlined text-xl">
                    {stat.icon}
                  </span>
                </div>
                <p className="text-base font-extrabold text-[#830036]">
                  {stat.value}
                </p>
                <p className="text-[10px] text-[#584145]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
