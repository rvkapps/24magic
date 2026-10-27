import Link from "next/link";
import type React from "react";

const PILLARS: {
  icon: string;
  title: string;
  text: string;
  href?: string;
}[] = [
  {
    icon: "layers",
    title: "Bookkeeping",
    text: "Monthly reconciliations and financial statements, ready for your accountant.",
    href: "/services#bookkeeping",
  },
  {
    icon: "description",
    title: "Document Management",
    text: "Receipts, invoices and records filed in a clean cloud system.",
    href: "/services#document-management",
  },
  {
    icon: "groups",
    title: "Administrative Support",
    text: "Invoicing, bill tracking and payment follow-ups, handled.",
    href: "/services#admin-support",
  },
];

const TRUST_ITEMS = [
  { icon: "verified_user", label: "Expert Bookkeeping Team" },
  { icon: "app_registration", label: "QuickBooks Ready" },
  { icon: "lock", label: "Read-Only Secure" },
  { icon: "support_agent", label: "Dedicated Human Support" },
];

export const HeroSection: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden text-[#1f1a1b]">
      {/* Atmosphere: brand-colour glows only */}
      <div className="pointer-events-none absolute -top-40 -right-32 -z-10 h-[560px] w-[560px] rounded-full bg-[#a61d4c]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 -left-32 -z-10 h-[460px] w-[460px] rounded-full bg-[#ffb55b]/15 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 pt-14 pb-10 sm:px-6 md:px-12 md:pt-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left: Copy */}
          <div className="flex flex-col items-start gap-6 lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-[#a61d4c]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#830036]">
                Financial Precision
              </span>
              <span className="rounded-full bg-[#ffb55b]/20 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#875200] italic">
                Digital · Visible · Magical
              </span>
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Bookkeeping &amp;{" "}
              <span className="gradient-text">Financial Precision</span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-[#584145] sm:text-lg md:text-xl">
              Build the life and business of your dreams. We transform complex
              financial data into clear, actionable insights with minimal effort
              on your part.
            </p>

            <div className="mt-2 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="flex min-h-12 cursor-pointer items-center justify-center rounded-full btn-gradient px-8 py-4 text-center text-xs font-semibold uppercase tracking-wider text-white shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#830036] sm:text-sm"
              >
                Book a Consultation
              </Link>
              <Link
                href="/resources"
                className="flex min-h-12 cursor-pointer items-center justify-center rounded-full border border-[#830036] px-8 py-4 text-center text-xs font-semibold uppercase tracking-wider text-[#830036] motion-safe:transition-all motion-safe:duration-300 hover:bg-[#fbf1f2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#830036] sm:text-sm"
              >
                View Case Studies
              </Link>
            </div>

            <Link
              href="/solutions"
              className="group mt-2 inline-flex min-h-12 cursor-pointer items-center gap-3 rounded-full border border-[#dfbfc3]/60 bg-white/90 px-5 py-2.5 text-left shadow-xs motion-safe:transition-all hover:border-[#830036] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#830036]"
            >
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#830036] opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-[#830036]" />
              </span>
              <span className="text-xs font-semibold text-[#1f1a1b]">
                How much time can you save?{" "}
                <span className="ml-1 text-[#830036] underline">
                  Calculate 5-Min ROI
                </span>
              </span>
              <span
                className="material-symbols-outlined text-sm text-[#830036] motion-safe:transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                arrow_forward
              </span>
            </Link>

            <Link
              href="/services"
              className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#830036] hover:text-[#a61d4c] motion-safe:transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#830036] sm:text-sm"
            >
              Explore Our Services
              <span
                className="material-symbols-outlined text-sm"
                aria-hidden="true"
              >
                arrow_forward
              </span>
            </Link>
          </div>

          {/* Right: What we handle */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-[#dfbfc3]/40 bg-white p-6 shadow-xl ambient-shadow sm:p-7">
              <p className="text-xs font-bold uppercase tracking-wider text-[#830036]">
                What we handle
              </p>
              <h2 className="mt-1 mb-5 text-xl font-extrabold">
                The work behind the work
              </h2>

              <ul className="space-y-3" aria-label="Services we handle">
                {PILLARS.map((pillar) => (
                  <li key={pillar.title}>
                    <Link
                      href={pillar.href ?? "/services"}
                      className="group flex min-h-14 items-center gap-4 rounded-2xl border border-[#e8dcdf] bg-[#fff8f8] p-4 motion-safe:transition-all motion-safe:duration-300 hover:border-[#830036] hover:bg-[#fbf1f2] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#830036]"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#830036] shadow-xs">
                        <span
                          className="material-symbols-outlined text-2xl"
                          aria-hidden="true"
                        >
                          {pillar.icon}
                        </span>
                      </span>
                      <span className="flex-1">
                        <span className="block text-base font-bold">
                          {pillar.title}
                        </span>
                        <span className="block text-sm leading-relaxed text-[#584145]">
                          {pillar.text}
                        </span>
                      </span>
                      <span
                        className="material-symbols-outlined text-lg text-[#830036] motion-safe:transition-transform motion-safe:group-hover:translate-x-1"
                        aria-hidden="true"
                      >
                        arrow_forward
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex items-center gap-3 rounded-2xl bg-[#fbf1f2] px-4 py-3">
                <span
                  className="material-symbols-outlined text-xl text-[#830036]"
                  aria-hidden="true"
                >
                  app_registration
                </span>
                <p className="text-sm font-semibold text-[#3d2028]">
                  Works with QuickBooks Online
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <ul className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-[#dfbfc3]/30 pt-6 md:mt-20">
          {TRUST_ITEMS.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-2 text-xs font-semibold text-[#584145]"
            >
              <span
                className="material-symbols-outlined text-base text-[#830036]"
                aria-hidden="true"
              >
                {item.icon}
              </span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
