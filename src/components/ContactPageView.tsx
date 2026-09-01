"use client";

import type React from "react";
import { useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const faqs = [
  {
    id: "c-faq-1",
    question: "What happens after I submit the form?",
    answer:
      "A member of our team will reach out within one business day to schedule a quick, no-pressure call. We'll learn about your business and walk you through how 24MAGIC works.",
  },
  {
    id: "c-faq-2",
    question: "Is the consultation really free?",
    answer:
      "Yes. The discovery call, bookkeeping review, and pricing estimate are all free — zero obligation.",
  },
  {
    id: "c-faq-3",
    question: "Is my financial data safe?",
    answer:
      "Absolutely. We use read-only bank connections, AES-256 encryption, and SOC 2 compliant infrastructure. Your data is never shared or sold.",
  },
];

export function ContactPageView() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "bookkeeping",
    monthlyTx: "under-75",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [activeFaq, setActiveFaq] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.fullName || !formData.email) {
      setErrorMessage(
        "Please fill out your name and email so we can reach you.",
      );
      return;
    }
    setErrorMessage("");
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Something went wrong.");
      }
      setIsSubmitted(true);
    } catch (err) {
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#fff8f8] text-[#1f1a1b] font-['Plus_Jakarta_Sans',sans-serif] flex flex-col justify-between selection:bg-[#a61d4c] selection:text-white">
      <Header />

      <main className="flex-1 flex flex-col items-center">
        {/* Heading */}
        <section className="pt-16 sm:pt-20 md:pt-24 pb-8 md:pb-10 px-4 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#a61d4c]/10 px-4 py-1.5 text-xs font-bold text-[#830036] mb-4">
            <span className="material-symbols-outlined text-sm">
              support_agent
            </span>
            Contact Us
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#1f1a1b] leading-tight">
            Ready to Get Your Books{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#830036] to-[#a61d4c]">
              in Order?
            </span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-[#584145] max-w-md mx-auto">
            Tell us about your business. We'll get back to you within 24–48
            business hours.
          </p>
        </section>

        {/* Form */}
        <section className="w-full max-w-xl px-4 pb-12">
          <div
            id="contact-form"
            className="bg-white rounded-2xl border border-[#dfbfc3]/40 p-6 sm:p-8 shadow-xs scroll-mt-24"
          >
            {!isSubmitted ? (
              <>
                {errorMessage && (
                  <div className="mb-5 p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs font-medium">
                    {errorMessage}
                  </div>
                )}

                <div className="space-y-4">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-[11px] font-bold text-[#1f1a1b] uppercase tracking-wider mb-1.5"
                      >
                        Full Name <span className="text-[#830036]">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Jane Smith"
                        className="w-full rounded-xl border border-[#dfbfc3]/60 bg-[#fff8f8] px-4 py-2.5 text-sm text-[#1f1a1b] placeholder:text-[#584145]/40 focus:border-[#830036] focus:ring-2 focus:ring-[#830036]/10 focus:outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[11px] font-bold text-[#1f1a1b] uppercase tracking-wider mb-1.5"
                      >
                        Email <span className="text-[#830036]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="jane@company.com"
                        className="w-full rounded-xl border border-[#dfbfc3]/60 bg-[#fff8f8] px-4 py-2.5 text-sm text-[#1f1a1b] placeholder:text-[#584145]/40 focus:border-[#830036] focus:ring-2 focus:ring-[#830036]/10 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone + Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-[11px] font-bold text-[#1f1a1b] uppercase tracking-wider mb-1.5"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border border-[#dfbfc3]/60 bg-[#fff8f8] px-4 py-2.5 text-sm text-[#1f1a1b] placeholder:text-[#584145]/40 focus:border-[#830036] focus:ring-2 focus:ring-[#830036]/10 focus:outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-[11px] font-bold text-[#1f1a1b] uppercase tracking-wider mb-1.5"
                      >
                        Business Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Acme Inc."
                        className="w-full rounded-xl border border-[#dfbfc3]/60 bg-[#fff8f8] px-4 py-2.5 text-sm text-[#1f1a1b] placeholder:text-[#584145]/40 focus:border-[#830036] focus:ring-2 focus:ring-[#830036]/10 focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Service + Volume */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="service"
                        className="block text-[11px] font-bold text-[#1f1a1b] uppercase tracking-wider mb-1.5"
                      >
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-[#dfbfc3]/60 bg-[#fff8f8] px-4 py-2.5 text-sm text-[#1f1a1b] focus:border-[#830036] focus:ring-2 focus:ring-[#830036]/10 focus:outline-none transition-all"
                      >
                        <option value="bookkeeping">
                          Bookkeeping &amp; Reconciliation
                        </option>
                        <option value="ecommerce">E-Commerce Accounting</option>
                        <option value="cleanup">
                          Books Cleanup &amp; Catch-Up
                        </option>
                        <option value="agency">Agency White-Label</option>
                        <option value="other">Not Sure Yet</option>
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="monthlyTx"
                        className="block text-[11px] font-bold text-[#1f1a1b] uppercase tracking-wider mb-1.5"
                      >
                        Monthly Transactions
                      </label>
                      <select
                        id="monthlyTx"
                        name="monthlyTx"
                        value={formData.monthlyTx}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-[#dfbfc3]/60 bg-[#fff8f8] px-4 py-2.5 text-sm text-[#1f1a1b] focus:border-[#830036] focus:ring-2 focus:ring-[#830036]/10 focus:outline-none transition-all"
                      >
                        <option value="under-75">Under 75</option>
                        <option value="75-250">75 – 250</option>
                        <option value="250-500">250 – 500</option>
                        <option value="500+">500+</option>
                      </select>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label
                      htmlFor="description"
                      className="block text-[11px] font-bold text-[#1f1a1b] uppercase tracking-wider mb-1.5"
                    >
                      Tell Us More
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      rows={3}
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="How many months behind? What software are you using?"
                      className="w-full rounded-xl border border-[#dfbfc3]/60 bg-[#fff8f8] px-4 py-2.5 text-sm text-[#1f1a1b] placeholder:text-[#584145]/40 focus:border-[#830036] focus:ring-2 focus:ring-[#830036]/10 focus:outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="btn-gradient w-full flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="material-symbols-outlined text-base animate-spin">
                          progress_activity
                        </span>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <span>Get My Free Quote</span>
                    )}
                  </button>

                  <p className="text-[10px] text-[#584145]/50 text-center">
                    We respond within 1 business day. No spam, ever.
                  </p>
                </div>
              </>
            ) : (
              <div className="py-12 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-5">
                  <span className="material-symbols-outlined text-3xl">
                    check_circle
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-[#1f1a1b]">
                  You're All Set!
                </h3>
                <p className="mt-2 text-sm text-[#584145] max-w-xs mx-auto">
                  Thanks,{" "}
                  <span className="font-semibold text-[#1f1a1b]">
                    {formData.fullName}
                  </span>
                  . We'll reach out to{" "}
                  <span className="font-semibold text-[#1f1a1b]">
                    {formData.email}
                  </span>{" "}
                  within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormData({
                      fullName: "",
                      email: "",
                      phone: "",
                      company: "",
                      service: "bookkeeping",
                      monthlyTx: "under-75",
                      description: "",
                    });
                    setIsSubmitted(false);
                  }}
                  className="mt-6 text-xs font-bold text-[#584145] hover:text-[#830036] underline underline-offset-4 cursor-pointer"
                >
                  Submit another request
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Contact info row */}
        <section className="w-full max-w-xl px-4 pb-12">
          <div className="flex items-center justify-center gap-6 text-xs text-[#584145]">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-[#830036]">
                mail
              </span>
              <a
                href="mailto:contact@24magic.in"
                className="font-medium hover:text-[#830036] transition-colors"
              >
                contact@24magic.in
              </a>
            </div>
            <span className="text-[#dfbfc3]">|</span>
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-[#830036]">
                schedule
              </span>
              <span className="font-medium">10 AM – 7 PM IST</span>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="w-full max-w-xl px-4 pb-16 md:pb-24">
          <h2 className="text-lg font-bold text-[#1f1a1b] text-center mb-5">
            Frequently Asked Questions
          </h2>
          <div className="space-y-2">
            {faqs.map((faq) => {
              const isOpen = activeFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-xl border overflow-hidden transition-all duration-200 ${
                    isOpen
                      ? "border-[#830036]/20 bg-white"
                      : "border-[#dfbfc3]/40 bg-white"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : faq.id)}
                    className="w-full flex items-center justify-between gap-3 p-4 text-left text-sm font-semibold text-[#1f1a1b] cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`material-symbols-outlined text-lg shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#830036]" : "text-[#584145]"
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-200 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-4 pb-4 text-sm leading-relaxed text-[#584145] border-t border-[#dfbfc3]/30 pt-3">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
