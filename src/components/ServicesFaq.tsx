"use client";

import Link from "next/link";
import type React from "react";
import { useState } from "react";

const FAQS = [
  {
    id: "faq-1",
    question: "How do you keep my business information secure?",
    answer:
      "We take security seriously. All connections to your bank statements are read-only, meaning we can never move or access your funds. We store your digital documents in secure, password-protected cloud folders, and we never sell or share your business data.",
  },
  {
    id: "faq-2",
    question: "How long does it take to get started?",
    answer:
      "For standard ongoing bookkeeping, we can have you set up and running in 5 to 7 business days. If your books are behind by months or years, our cleanup team will jump in to organize and catch up your records, which typically takes 2 to 4 weeks depending on the backlog size.",
  },
  {
    id: "faq-3",
    question: "Do you work with QuickBooks?",
    answer:
      "Yes! We work natively with QuickBooks Online and other standard small business tools. We do not replace your accounts—we just keep them clean, categorized, and up-to-date.",
  },
  {
    id: "faq-4",
    question: "Will I have a real person to talk to?",
    answer:
      "Absolutely. You will be paired with a dedicated bookkeeping and admin helper who knows your business by name. No automated ticketing systems or robotic support—just real, helpful people.",
  },
];

export const ServicesFaq: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left: Heading + Support Card */}
        <div className="lg:col-span-5 space-y-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#a61d4c]/10 px-4 py-1.5 text-xs font-bold text-[#830036]">
            <span className="material-symbols-outlined text-sm">help</span>
            <span>Find Answers</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1f1a1b]">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#584145] leading-relaxed">
            Everything you need to know about working with us before you get
            started.
          </p>

          <div className="bg-white rounded-3xl border border-[#dfbfc3]/40 p-6 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 shrink-0 rounded-full btn-gradient text-white flex items-center justify-center">
                <span className="material-symbols-outlined">support_agent</span>
              </div>
              <div>
                <p className="text-sm font-bold text-[#1f1a1b]">
                  Still have questions?
                </p>
                <p className="text-xs text-[#584145]">
                  Talk to a real person who knows your business.
                </p>
              </div>
            </div>
            <Link
              href="/contact"
              className="mt-5 block w-full text-center btn-gradient text-white text-xs font-semibold uppercase tracking-wider py-3.5 rounded-full shadow-md hover:shadow-xl cursor-pointer"
            >
              Book a Free Consultation
            </Link>
          </div>
        </div>

        {/* Right: Accordion */}
        <div className="lg:col-span-7 space-y-4">
          {FAQS.map((faq) => {
            const isOpen = activeFaq === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-[#830036]/30 bg-white shadow-sm"
                    : "border-[#dfbfc3]/40 bg-white hover:border-[#830036]/30"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between gap-4 p-6 text-left font-bold text-[#1f1a1b] cursor-pointer"
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <span
                    className={`material-symbols-outlined text-xl shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[#830036]" : "text-[#584145]"
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 text-sm leading-relaxed text-[#584145] border-t border-[#dfbfc3]/40 pt-4">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
