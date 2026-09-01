import Image from "next/image";
import type React from "react";

const HIGHLIGHTS = [
  "95% automated transaction matching",
  "5-minute daily review dashboard",
  // "Tax-ready books year-round",
  "Dedicated CPA for every account",
];

export const BookkeepingShowcase: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text */}
        <div className="space-y-6 order-2 lg:order-1">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#a61d4c]/10 px-4 py-1.5 text-xs font-bold text-[#830036]">
            <span className="material-symbols-outlined text-sm">
              auto_awesome
            </span>
            <span>24MAGIC in Action</span>
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1f1a1b] leading-tight">
            Your Books, In Expert Hands
          </h2>

          <p className="text-base text-[#584145] leading-relaxed">
            We take the hassle out of bookkeeping. Our expert CPAs handle every
            transaction so you can focus on growing your business — no
            spreadsheets, no guesswork, no month-end panic.
          </p>

          <ul className="space-y-3">
            {HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm text-[#1f1a1b]"
              >
                <span className="material-symbols-outlined text-[#830036] text-base">
                  check_circle
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image */}
        <div className="order-1 lg:order-2 relative">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-[#dfbfc3]/40 will-change-transform relative aspect-[4/3]">
            <Image
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"
              alt="Professional bookkeeper working on financial records"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
          {/* Decorative accent */}
          <div className="absolute -bottom-5 -left-5 w-32 h-32 bg-[#ffb55b]/20 rounded-full blur-2xl -z-10 pointer-events-none" />
          <div className="absolute -top-5 -right-5 w-24 h-24 bg-[#a61d4c]/10 rounded-full blur-2xl -z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
