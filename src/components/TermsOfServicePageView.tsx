"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const sections = [
  { id: "acceptance", label: "Acceptance of Terms", icon: "check_circle" },
  { id: "services", label: "Services Description", icon: "description" },
  { id: "eligibility", label: "Eligibility", icon: "how_to_reg" },
  {
    id: "client-responsibilities",
    label: "Client Responsibilities",
    icon: "task_alt",
  },
  { id: "fees-payment", label: "Fees & Payment", icon: "payments" },
  { id: "confidentiality", label: "Confidentiality", icon: "lock" },
  {
    id: "intellectual-property",
    label: "Intellectual Property",
    icon: "lightbulb",
  },
  {
    id: "limitation-liability",
    label: "Limitation of Liability",
    icon: "gavel",
  },
  { id: "indemnification", label: "Indemnification", icon: "verified_user" },
  { id: "termination", label: "Termination", icon: "cancel" },
  { id: "dispute-resolution", label: "Dispute Resolution", icon: "balance" },
  { id: "modifications", label: "Modifications", icon: "edit" },
  { id: "contact", label: "Contact Us", icon: "mail" },
];

export function TermsOfServicePageView() {
  const [activeId, setActiveId] = useState(sections[0].id);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-100px 0px -70% 0px", threshold: 0 },
    );

    for (const section of sections) {
      const el = document.getElementById(section.id);
      if (el) observerRef.current.observe(el);
    }

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#fff8f8] text-[#1f1a1b] font-['Plus_Jakarta_Sans',sans-serif] flex flex-col justify-between selection:bg-[#a61d4c] selection:text-white">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1f1a1b] via-[#3d2028] to-[#830036]" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-20 w-80 h-80 bg-[#ffb55b] rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-12 pt-28 sm:pt-32 pb-20 sm:pb-24">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-white border border-white/20 mb-6">
                <span className="material-symbols-outlined text-sm">gavel</span>
                Legal
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Service Terms
              </h1>
              <p className="mt-5 text-base sm:text-lg text-white/70 leading-relaxed max-w-xl">
                The ground rules for working with 24MAGIC. Please read these
                terms carefully before engaging our services.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm text-white/50">
                <span className="material-symbols-outlined text-base">
                  calendar_today
                </span>
                Last updated: August 2026
              </div>
            </div>
          </div>
        </section>

        {/* Table of Contents - Horizontal Scroll */}
        <section className="sticky top-16 z-30 bg-[#fff8f8]/90 backdrop-blur-md border-b border-[#dfbfc3]/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
            <div className="overflow-x-auto py-3 -mx-4 px-4">
              <div className="flex gap-2 min-w-max">
                {sections.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => scrollTo(s.id)}
                    className={`whitespace-nowrap text-xs px-3.5 py-2 rounded-full border transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeId === s.id
                        ? "bg-[#830036] text-white border-[#830036] shadow-md shadow-[#830036]/20"
                        : "text-[#584145] border-[#dfbfc3] hover:border-[#830036] hover:text-[#830036] bg-white"
                    }`}
                  >
                    <span className="material-symbols-outlined text-sm">
                      {s.icon}
                    </span>
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 md:px-12 space-y-12">
            <div id="acceptance" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#a61d4c]/10 text-[#830036] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">
                    check_circle
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[#1f1a1b]">
                  Acceptance of Terms
                </h2>
              </div>
              <div className="ml-[52px] text-sm leading-relaxed text-[#584145] space-y-3">
                <p>
                  By engaging 24MAGIC for bookkeeping, transaction
                  reconciliation, or business support services, you agree to be
                  bound by these Service Terms. If you do not agree with any
                  part of these terms, please do not use our services.
                </p>
                <p>
                  These terms constitute a legally binding agreement between you
                  (the "Client") and 24MAGIC Bookkeeping & Business Support
                  ("we," "us," or "our").
                </p>
              </div>
            </div>

            <div id="services" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#a61d4c]/10 text-[#830036] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">
                    description
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[#1f1a1b]">
                  Services Description
                </h2>
              </div>
              <div className="ml-[52px] text-sm leading-relaxed text-[#584145] space-y-3">
                <p>24MAGIC provides the following professional services:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-[#1f1a1b]">
                      Bookkeeping & Reconciliation:
                    </strong>{" "}
                    Transaction recording, bank and credit card reconciliation,
                    accounts payable/receivable management, and monthly
                    financial reporting.
                  </li>
                  <li>
                    <strong className="text-[#1f1a1b]">
                      Business Support Services:
                    </strong>{" "}
                    Receipt and invoice management, document organization, and
                    secure cloud-based record keeping.
                  </li>
                  {/* <li>
                    <strong className="text-[#1f1a1b]">
                      Tax-Ready Bookkeeping:
                    </strong>{" "}
                    Year-round financial organization designed to keep your
                    books audit-ready and compliant with GAAP standards.
                  </li> */}
                  <li>
                    <strong className="text-[#1f1a1b]">
                      E-Commerce & Multi-Channel Accounting:
                    </strong>{" "}
                    Shopify, Amazon, Stripe, and PayPal reconciliation, COGS
                    tracking, and multi-state sales tax liability reporting.
                  </li>
                </ul>
                <p>
                  24MAGIC is not a Certified Public Accounting (CPA) firm and
                  does not provide licensed public accounting services,
                  including audits, attestations, examinations, reviews, or
                  certifications requiring CPA licensure. All books are reviewed
                  by our senior bookkeeping specialists.
                </p>
              </div>
            </div>

            <div id="eligibility" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#a61d4c]/10 text-[#830036] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">
                    how_to_reg
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[#1f1a1b]">
                  Eligibility
                </h2>
              </div>
              <div className="ml-[52px] text-sm leading-relaxed text-[#584145] space-y-3">
                <p>
                  Our services are available to individuals, sole proprietors,
                  small businesses, and organizations operating within the
                  United States. By engaging our services, you confirm that you
                  have the legal authority to enter into this agreement on
                  behalf of yourself or your business.
                </p>
              </div>
            </div>

            <div id="client-responsibilities" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#a61d4c]/10 text-[#830036] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">
                    task_alt
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[#1f1a1b]">
                  Client Responsibilities
                </h2>
              </div>
              <div className="ml-[52px] text-sm leading-relaxed text-[#584145] space-y-3">
                <p>
                  To ensure effective service delivery, the Client agrees to:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Provide accurate, complete, and timely information,
                    documents, and records necessary for service delivery.
                  </li>
                  <li>
                    Respond to requests for clarification or additional
                    information within a reasonable timeframe.
                  </li>
                  <li>
                    Maintain copies of all original documents and financial
                    records.
                  </li>
                  <li>
                    Designate a primary point of contact for communication
                    regarding the engagement.
                  </li>
                  <li>
                    Review completed work and provide feedback within the
                    agreed-upon review period.
                  </li>
                </ul>
              </div>
            </div>

            {/* <div id="fees-payment" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#a61d4c]/10 text-[#830036] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">
                    payments
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[#1f1a1b]">
                  Fees & Payment
                </h2>
              </div>
              <div className="ml-[52px] text-sm leading-relaxed text-[#584145] space-y-3">
                <p>
                  Service fees are outlined in your individual service agreement
                  or proposal. Unless otherwise stated:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Invoices are issued monthly and are due within 15 days of
                    the invoice date.
                  </li>
                  <li>
                    Late payments may incur a fee of 1.5% per month on the
                    outstanding balance.
                  </li>
                  <li>
                    Services may be suspended for accounts more than 30 days
                    past due.
                  </li>
                  <li>
                    All fees are quoted in U.S. dollars (USD) and do not include
                    applicable taxes.
                  </li>
                </ul>
              </div>
            </div> */}
            <div id="fees-payment" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#a61d4c]/10 text-[#830036] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">
                    payments
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[#1f1a1b]">
                  Fees & Payment
                </h2>
              </div>

              <div className="ml-[52px] text-sm leading-relaxed text-[#584145] space-y-3">
                <p>
                  Service fees are outlined in your individual service agreement
                  or proposal. Unless otherwise stated:
                </p>

                <ul className="list-disc pl-5 space-y-2">
                  {/* <li>
                    A <strong>50% advance payment</strong> is required before
                    the commencement of services.
                  </li>

                  <li>
                    The remaining <strong>50% balance</strong> is due within 14
                    days following completion of the initial 50% of the agreed
                    scope of work.
                  </li> */}
                  <li>
                    A <strong>50% advance payment</strong> is required before
                    services commence.
                  </li>

                  <li>
                    The remaining{" "}
                    <strong>50% balance is due within 14 days</strong> of the
                    service commencement date.
                  </li>

                  <li>
                    Invoices and payment records may be managed through
                    <strong> QuickBooks</strong> or another designated
                    accounting platform.
                  </li>

                  <li>
                    Services may be suspended for accounts with overdue balances
                    until the outstanding amount is settled.
                  </li>

                  <li>
                    Any applicable late-payment fees will be specified in the
                    individual service agreement or proposal.
                  </li>

                  <li>
                    Fees are quoted in the currency specified in the service
                    agreement or proposal and do not include applicable taxes
                    unless otherwise stated.
                  </li>
                </ul>
              </div>
            </div>

            <div id="confidentiality" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#a61d4c]/10 text-[#830036] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">
                    lock
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[#1f1a1b]">
                  Confidentiality
                </h2>
              </div>
              <div className="ml-[52px] text-sm leading-relaxed text-[#584145] space-y-3">
                <p>
                  24MAGIC treats all client information, financial records, and
                  business data as strictly confidential. We will not disclose,
                  share, or use your information for any purpose other than
                  delivering the agreed-upon services.
                </p>
                <p>
                  This obligation survives the termination of our business
                  relationship. Upon request or termination, we will securely
                  delete or return all client documents and data within a
                  reasonable timeframe.
                </p>
              </div>
            </div>

            <div id="intellectual-property" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#a61d4c]/10 text-[#830036] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">
                    lightbulb
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[#1f1a1b]">
                  Intellectual Property
                </h2>
              </div>
              <div className="ml-[52px] text-sm leading-relaxed text-[#584145] space-y-3">
                <p>
                  All financial records, business documents, and data prepared
                  or organized during the course of our services remain the
                  exclusive property of the Client. 24MAGIC does not claim
                  ownership over any client materials.
                </p>
                <p>
                  24MAGIC retains ownership of its proprietary processes,
                  methodologies, templates, and tools used in service delivery.
                  These may not be reproduced or shared without prior written
                  consent.
                </p>
              </div>
            </div>

            <div id="limitation-liability" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#a61d4c]/10 text-[#830036] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">
                    gavel
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[#1f1a1b]">
                  Limitation of Liability
                </h2>
              </div>
              <div className="ml-[52px] text-sm leading-relaxed text-[#584145] space-y-3">
                <p>
                  To the maximum extent permitted by law, 24MAGIC shall not be
                  liable for any indirect, incidental, special, consequential,
                  or punitive damages arising out of or related to our services.
                </p>
                {/* <p>
                  Our total liability for any claim arising from our services
                  shall not exceed the total fees paid by the Client for the
                  specific service giving rise to the claim during the twelve
                  (12) months preceding the claim.
                </p> */}
                <p>
                  24MAGIC is not responsible for any financial decisions made
                  based on the reports, records, or information we provide. Our
                  services do not constitute financial, tax, or legal advice.
                </p>
              </div>
            </div>

            <div id="indemnification" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#a61d4c]/10 text-[#830036] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">
                    verified_user
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[#1f1a1b]">
                  Indemnification
                </h2>
              </div>
              <div className="ml-[52px] text-sm leading-relaxed text-[#584145] space-y-3">
                <p>
                  The Client agrees to indemnify and hold harmless 24MAGIC, its
                  team members, and affiliates from any claims, losses, damages,
                  or expenses (including reasonable attorney fees) arising from:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>The Client's breach of these Service Terms.</li>
                  <li>
                    Inaccurate or incomplete information provided by the Client.
                  </li>
                  <li>Any unauthorized use of our services by the Client.</li>
                </ul>
              </div>
            </div>

            <div id="termination" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#a61d4c]/10 text-[#830036] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">
                    cancel
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[#1f1a1b]">
                  Termination
                </h2>
              </div>
              <div className="ml-[52px] text-sm leading-relaxed text-[#584145] space-y-3">
                <p>
                  Either party may terminate the service engagement with written
                  notice of at least thirty (30) days. Upon termination:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    The Client will receive all completed work and outstanding
                    documents.
                  </li>
                  <li>All unpaid invoices become due immediately.</li>
                  <li>
                    Confidential information will be securely deleted or
                    returned as requested.
                  </li>
                </ul>
                <p>
                  24MAGIC reserves the right to terminate services immediately
                  if the Client breaches these terms, fails to make payments, or
                  engages in conduct that is harmful to 24MAGIC or its team.
                </p>
              </div>
            </div>

            <div id="dispute-resolution" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#a61d4c]/10 text-[#830036] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">
                    balance
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[#1f1a1b]">
                  Dispute Resolution
                </h2>
              </div>
              <div className="ml-[52px] text-sm leading-relaxed text-[#584145] space-y-3">
                <p>
                  Any disputes arising from these Service Terms or our services
                  will first be addressed through good-faith negotiation between
                  the parties. If a resolution cannot be reached within thirty
                  (30) days, either party may pursue resolution through binding
                  arbitration in Mumbai, India, in accordance with the rules of
                  the American Arbitration Association.
                </p>
                {/* <p>
                  These Service Terms are governed by the laws of the State of
                  Texas, without regard to its conflict of law principles.
                </p> */}
              </div>
            </div>

            <div id="modifications" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#a61d4c]/10 text-[#830036] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">
                    edit
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[#1f1a1b]">
                  Modifications
                </h2>
              </div>
              <div className="ml-[52px] text-sm leading-relaxed text-[#584145] space-y-3">
                <p>
                  24MAGIC reserves the right to modify these Service Terms at
                  any time. Changes will be posted on this page with an updated
                  "Last updated" date. Continued use of our services after
                  changes are posted constitutes acceptance of the revised
                  terms.
                </p>
              </div>
            </div>

            <div id="contact" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#a61d4c]/10 text-[#830036] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">
                    mail
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[#1f1a1b]">Contact Us</h2>
              </div>
              <div className="ml-[52px] text-sm leading-relaxed text-[#584145] space-y-3">
                <p>
                  If you have questions about these Service Terms, please
                  contact us:
                </p>
                <div className="bg-white rounded-2xl border border-[#dfbfc3]/40 p-6 shadow-xs">
                  <p className="text-[#1f1a1b] font-bold text-base mb-2">
                    24MAGIC Bookkeeping & Business Support
                  </p>
                  <div className="flex items-center gap-2 text-sm text-[#584145]">
                    <span className="material-symbols-outlined text-[#830036] text-base">
                      mail
                    </span>
                    <a
                      href="mailto:contact@24magic.in"
                      className="text-[#830036] font-semibold hover:underline"
                    >
                      contact@24magic.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
