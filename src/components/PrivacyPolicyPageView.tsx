"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const sections = [
  {
    id: "information-we-collect",
    label: "Information We Collect",
    icon: "database",
  },
  {
    id: "how-we-use-information",
    label: "How We Use Your Information",
    icon: "settings",
  },
  { id: "information-sharing", label: "Information Sharing", icon: "share" },
  { id: "data-security", label: "Data Security", icon: "shield" },
  { id: "data-retention", label: "Data Retention", icon: "schedule" },
  { id: "your-rights", label: "Your Rights", icon: "person" },
  { id: "cookies", label: "Cookies & Tracking", icon: "cookie" },
  { id: "third-party-links", label: "Third-Party Links", icon: "link" },
  { id: "changes-to-policy", label: "Changes to This Policy", icon: "update" },
  { id: "contact-us", label: "Contact Us", icon: "mail" },
];

export function PrivacyPolicyPageView() {
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
          <div className="absolute inset-0 bg-gradient-to-br from-[#830036] via-[#a61d4c] to-[#1f1a1b]" />
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-20 w-96 h-96 bg-[#ffb55b] rounded-full blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-12 pt-28 sm:pt-32 pb-20 sm:pb-24">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-white border border-white/20 mb-6">
                <span className="material-symbols-outlined text-sm">
                  policy
                </span>
                Legal
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Privacy Policy
              </h1>
              <p className="mt-5 text-base sm:text-lg text-white/70 leading-relaxed max-w-xl">
                Your data matters to us. This policy explains how 24MAGIC
                collects, uses, and protects your information.
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
            <div id="information-we-collect" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#a61d4c]/10 text-[#830036] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">
                    database
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[#1f1a1b]">
                  Information We Collect
                </h2>
              </div>
              <div className="ml-[52px] text-sm leading-relaxed text-[#584145] space-y-3">
                <p>
                  When you visit our website, submit a consultation request, or
                  engage our bookkeeping services, we may collect the following
                  categories of information:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong className="text-[#1f1a1b]">
                      Personal Information:
                    </strong>{" "}
                    Name, email address, phone number, business name, and any
                    additional details you provide through our contact or
                    consultation forms.
                  </li>
                  <li>
                    <strong className="text-[#1f1a1b]">
                      Financial & Business Information:
                    </strong>{" "}
                    Bookkeeping records, bank transaction data, financial
                    documents, receipts, and related files shared with us for
                    service delivery.
                  </li>
                  <li>
                    <strong className="text-[#1f1a1b]">
                      Technical Information:
                    </strong>{" "}
                    Browser type, IP address, device identifiers, and pages
                    visited on our website, collected automatically through
                    standard web server logs and analytics tools.
                  </li>
                </ul>
              </div>
            </div>

            <div id="how-we-use-information" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#a61d4c]/10 text-[#830036] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">
                    settings
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[#1f1a1b]">
                  How We Use Your Information
                </h2>
              </div>
              <div className="ml-[52px] text-sm leading-relaxed text-[#584145] space-y-3">
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Respond to your inquiries and schedule consultation calls.
                  </li>
                  <li>
                    Deliver bookkeeping, transaction reconciliation, and
                    business support services.
                  </li>
                  <li>
                    Communicate with you regarding your account, service
                    updates, or important notices.
                  </li>
                  <li>
                    Improve our website performance, service quality, and
                    overall user experience.
                  </li>
                  <li>
                    Comply with applicable legal obligations and protect our
                    legitimate business interests.
                  </li>
                </ul>
              </div>
            </div>

            <div id="information-sharing" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#a61d4c]/10 text-[#830036] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">
                    share
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[#1f1a1b]">
                  Information Sharing
                </h2>
              </div>
              <div className="ml-[52px] text-sm leading-relaxed text-[#584145] space-y-3">
                <p>
                  We do not sell, trade, or rent your personal or financial
                  information to third parties. We may share your information
                  only under the following circumstances:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    With your explicit consent for a specific service or
                    request.
                  </li>
                  <li>
                    With trusted service providers who assist in our operations,
                    bound by strict confidentiality agreements.
                  </li>
                  <li>
                    When required by law, regulation, subpoena, or legal
                    process.
                  </li>
                  <li>
                    To protect the rights, property, or safety of 24MAGIC, our
                    clients, or the public.
                  </li>
                </ul>
              </div>
            </div>

            <div id="data-security" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#a61d4c]/10 text-[#830036] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">
                    shield
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[#1f1a1b]">
                  Data Security
                </h2>
              </div>
              {/* <div className="ml-[52px] text-sm leading-relaxed text-[#584145] space-y-3">
                <p>
                  We implement industry-standard security measures to safeguard
                  your personal and financial information:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    AES-256 encryption and TLS 1.3 for all data transmissions.
                  </li>
                  <li>
                    SOC 2 Type II compliant cloud infrastructure with role-based
                    access controls.
                  </li>
                  <li>
                    Read-only bank connections — we can never move or access
                    your funds.
                  </li>
                  <li>
                    Regular security audits, penetration testing, and access
                    reviews.
                  </li>
                  <li>
                    Confidentiality agreements for all team members with access
                    to client data.
                  </li>
                </ul>
                <p>
                  While we strive to protect your information, no method of
                  electronic transmission or storage is 100% secure. We
                  encourage you to reach out if you have concerns about data
                  security.
                </p>
              </div> */}
              <div className="ml-[52px] text-sm leading-relaxed text-[#584145] space-y-3">
                <p>
                  We take reasonable measures to safeguard your personal and
                  financial information:
                </p>

                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Access to client information is limited to authorized team
                    members.
                  </li>
                  <li>
                    Client information is handled confidentially and used only
                    for providing our services.
                  </li>
                  <li>
                    Confidentiality agreements are maintained for team members
                    who have access to client information.
                  </li>
                  <li>
                    Access to client information is reviewed and managed as
                    needed.
                  </li>
                </ul>

                <p>
                  While we take reasonable steps to protect your information, no
                  method of electronic transmission or storage is completely
                  secure. We encourage you to reach out if you have any concerns
                  about data security.
                </p>
              </div>
            </div>

            <div id="data-retention" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#a61d4c]/10 text-[#830036] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">
                    schedule
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[#1f1a1b]">
                  Data Retention
                </h2>
              </div>
              <div className="ml-[52px] text-sm leading-relaxed text-[#584145] space-y-3">
                <p>
                  We retain your personal and business information only for as
                  long as necessary to fulfill the purposes for which it was
                  collected, including to satisfy legal, accounting, or
                  regulatory reporting requirements.
                </p>
                <p>
                  When your engagement with 24MAGIC ends, we will securely
                  delete or return your documents and data within a reasonable
                  timeframe, unless a longer retention period is required or
                  permitted by law.
                </p>
              </div>
            </div>

            <div id="your-rights" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#a61d4c]/10 text-[#830036] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">
                    person
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[#1f1a1b]">
                  Your Rights
                </h2>
              </div>
              <div className="ml-[52px] text-sm leading-relaxed text-[#584145] space-y-3">
                <p>
                  You have the right to access, correct, or delete your personal
                  information at any time. To exercise these rights, please
                  contact us at{" "}
                  <a
                    href="mailto:contact@24magic.in"
                    className="text-[#830036] font-semibold hover:underline"
                  >
                    contact@24magic.in
                  </a>
                  .
                </p>
                <p>
                  We will respond to your request within a reasonable timeframe
                  and in accordance with applicable data protection laws.
                </p>
              </div>
            </div>

            <div id="cookies" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#a61d4c]/10 text-[#830036] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">
                    cookie
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[#1f1a1b]">
                  Cookies & Tracking
                </h2>
              </div>
              <div className="ml-[52px] text-sm leading-relaxed text-[#584145] space-y-3">
                <p>
                  Our website uses essential cookies to ensure core
                  functionality and improve your browsing experience. We do not
                  use third-party advertising cookies or cross-site tracking
                  pixels.
                </p>
                <p>
                  You can manage cookie preferences through your browser
                  settings. Disabling cookies may affect certain website
                  features.
                </p>
              </div>
            </div>

            {/* <div id="third-party-links" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#a61d4c]/10 text-[#830036] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">
                    link
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[#1f1a1b]">
                  Third-Party Links
                </h2>
              </div>
              <div className="ml-[52px] text-sm leading-relaxed text-[#584145] space-y-3">
                <p>
                  Our website may contain links to third-party websites or
                  services. We are not responsible for the privacy practices or
                  content of those external sites. We encourage you to review
                  the privacy policy of any third-party site you visit.
                </p>
              </div>
            </div> */}

            <div id="changes-to-policy" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#a61d4c]/10 text-[#830036] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">
                    update
                  </span>
                </div>
                <h2 className="text-xl font-bold text-[#1f1a1b]">
                  Changes to This Policy
                </h2>
              </div>
              <div className="ml-[52px] text-sm leading-relaxed text-[#584145] space-y-3">
                <p>
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices, technology, or legal requirements.
                  Any updates will be posted on this page with a revised "Last
                  updated" date. We encourage you to review this policy
                  periodically.
                </p>
              </div>
            </div>

            <div id="contact-us" className="scroll-mt-32">
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
                  If you have any questions or concerns about this Privacy
                  Policy, please contact us:
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
