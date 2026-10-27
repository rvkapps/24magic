"use client";

import Link from "next/link";
import { ConsultationCta } from "@/components/ConsultationCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TOOL_CATEGORIES, TOOLS } from "@/data/tools";

export function ToolsHubView() {
  return (
    <div className="min-h-screen bg-[#fff8f8] text-[#1f1a1b] font-['Plus_Jakarta_Sans',sans-serif] flex flex-col justify-between selection:bg-[#a61d4c] selection:text-white">
      <Header />

      <main className="flex-1">
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-12 md:py-16">
          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-[#a61d4c]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#830036]">
              Free Tools
            </span>
            <h1 className="mt-3 mb-4 text-3xl font-extrabold text-[#1f1a1b] sm:text-4xl md:text-5xl">
              Free Business Calculators
            </h1>
            <p className="text-base text-[#584145] sm:text-lg">
              Quick, simple calculators to help you plan your taxes, check your
              profit and understand your numbers. No sign-up needed.
            </p>
          </div>

          {/* Categories */}
          <div className="mt-14 space-y-14">
            {TOOL_CATEGORIES.map((category) => {
              const tools = TOOLS.filter((t) => t.category === category.id);
              return (
                <section
                  key={category.id}
                  aria-labelledby={`cat-${category.id}`}
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#a61d4c]/10 text-[#830036]"
                      aria-hidden="true"
                    >
                      <span className="material-symbols-outlined text-xl">
                        {category.icon}
                      </span>
                    </span>
                    <div>
                      <h2
                        id={`cat-${category.id}`}
                        className="text-xl font-extrabold text-[#1f1a1b]"
                      >
                        {category.label}
                      </h2>
                      <p className="text-sm text-[#584145]">{category.blurb}</p>
                    </div>
                  </div>

                  <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {tools.map((tool) => (
                      <li key={tool.slug}>
                        <Link
                          href={`/tools/${tool.slug}`}
                          className="group flex h-full flex-col rounded-3xl border border-[#dfbfc3]/40 bg-white p-6 shadow-xs motion-safe:transition-all motion-safe:duration-300 hover:border-[#830036] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#830036]"
                        >
                          <span
                            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fbf1f2] text-[#830036]"
                            aria-hidden="true"
                          >
                            <span className="material-symbols-outlined text-2xl">
                              {tool.icon}
                            </span>
                          </span>
                          <h3 className="mt-4 text-lg font-bold text-[#1f1a1b]">
                            {tool.title}
                          </h3>
                          <p className="mt-2 flex-1 text-sm leading-relaxed text-[#584145]">
                            {tool.description}
                          </p>
                          <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#830036]">
                            Calculate
                            <span
                              className="material-symbols-outlined text-lg motion-safe:transition-transform motion-safe:group-hover:translate-x-1"
                              aria-hidden="true"
                            >
                              arrow_forward
                            </span>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        </section>

        <ConsultationCta />
      </main>

      <Footer />
    </div>
  );
}
