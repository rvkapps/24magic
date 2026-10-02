import type React from "react";

interface CapabilityPanel {
  title: string;
  text: string;
  icon: string;
}

interface Capability {
  id: string;
  number: string;
  icon: string;
  title: string;
  desc: string;
  features: string[];
  panelLabel: string;
  panels: CapabilityPanel[];
}

const CAPABILITIES: Capability[] = [
  {
    id: "bookkeeping",
    number: "01",
    icon: "layers",
    title: "Bookkeeping",
    desc: "Your financial records are managed with precision and care, ensuring every transaction is accurately reconciled and thoughtfully organized. With clean, reliable books maintained to professional standards, you'll always be prepared for a seamless collaboration with your tax preparer or accountant.",
    features: [
      "QuickBooks Online setup and optimization",
      "Monthly bookkeeping and account maintenance",
      "Accurate transaction categorization",
      "Bank and credit card reconciliations",
      "Monthly financial statements",
      "Month-end closing and review",
      // "Tax-ready financial records",
    ],
    panelLabel: "Every Month, You Receive",
    panels: [
      {
        title: "Accurate Account Reconciliation",
        text: "Every bank account, credit card, and financial transaction is carefully reconciled to ensure your records remain accurate and up to date.",
        icon: "fact_check",
      },
      {
        title: "Insightful Financial Reports",
        text: "Receive clear, easy-to-understand financial reports that provide visibility into your business performance and support confident decision-making.",
        icon: "query_stats",
      },
      // {
      //   title: "Tax-Ready Financial Records",
      //   text: "Your books are organized throughout the year, making tax season smoother and ensuring your accountant has everything needed for an efficient filing process.",
      //   icon: "request_quote",
      // },
      {
        title: "Reliable Financial Oversight",
        text: "We monitor your balances, review key accounts, and help ensure your financial records remain complete, consistent, and aligned with professional bookkeeping standards.",
        icon: "visibility",
      },
    ],
  },
  {
    id: "document-management",
    number: "02",
    icon: "description",
    title: "Document Management",
    desc: "Keep your business organized with a secure, streamlined document management system. We organize receipts, invoices, bills, and important business records into intuitive cloud-based folders, making it easy to locate the documents you need while reducing paper clutter and improving efficiency.",
    features: [
      "Custom digital filing systems",
      "Secure cloud document organization",
      "Paper-to-digital document conversion",
      "Organized file storage and management",
      "Quick document retrieval",
      "Business records organization",
    ],
    panelLabel: "Organized Digital Files",
    panels: [
      {
        title: "Receipt Organization",
        text: "Every receipt is carefully categorized, labeled, and organized to align with your financial records for accurate tracking and effortless retrieval.",
        icon: "receipt_long",
      },
      {
        title: "Secure Cloud Storage",
        text: "Your documents are stored in a secure, well-structured cloud filing system that's easy to access and designed to keep your business organized.",
        icon: "cloud_done",
      },
      {
        title: "Paperless Document Solutions",
        text: "We help streamline your records by converting paper receipts, invoices, and business documents into an efficient digital filing system.",
        icon: "print_disabled",
      },
      {
        title: "Transaction Documentation",
        text: "Invoices, receipts, and supporting documents are securely attached to their corresponding financial transactions, creating complete, organized records that are easy to reference whenever needed.",
        icon: "attach_money",
      },
    ],
  },
  {
    id: "admin-support",
    number: "03",
    icon: "groups",
    title: "Administrative Support",
    desc: "Free up valuable time by outsourcing the day-to-day administrative tasks that keep your business running. From managing paperwork and customer invoicing to organizing records and coordinating schedules, we provide reliable business support services tailored to your workflow.",
    features: [
      "Scheduling assistance & calendar management",
      "Timecard processing & expense submissions",
      "Business correspondence & administrative organization",
      "Data entry & digital records updates",
    ],
    panelLabel: "Business Support Services",
    panels: [
      {
        title: "Professional Invoicing",
        text: "We prepare accurate, professional customer invoices using the information you provide, helping you maintain a polished billing process and consistent cash flow.",
        icon: "receipt",
      },
      {
        title: "Bill Organization & Tracking",
        text: "Stay on top of vendor invoices with organized bill tracking that helps you manage due dates and maintain an efficient payment process.",
        icon: "account_balance_wallet",
      },
      {
        title: "Payment Follow-Ups",
        text: "We send courteous, professional payment reminders to encourage timely customer payments and support healthy accounts receivable.",
        icon: "payments",
      },
      {
        title: "Administrative Organization",
        text: "From client records and business files to routine office administration, we help keep your documents organized and your day-to-day operations running smoothly.",
        icon: "folder_shared",
      },
    ],
  },
];

export const ServicesCapabilities: React.FC = () => {
  return (
    <section
      id="services"
      className="py-16 md:py-24 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto scroll-mt-24"
    >
      {/* Section Header */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-wider text-[#830036] bg-[#a61d4c]/10 px-4 py-1.5 rounded-full">
          What We Offer
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-[#1f1a1b]">
          Simple Bookkeeping &amp; Administrative Solutions
        </h2>
        <p className="mt-3 text-base md:text-lg text-[#584145]">
          Three pillars of business support services, handled end-to-end so your
          business runs smoothly.
        </p>
      </div>

      <div className="space-y-8">
        {CAPABILITIES.map((cap) => (
          <article
            key={cap.id}
            className="bg-white rounded-3xl border border-[#dfbfc3]/40 shadow-xs hover:shadow-lg transition-shadow overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10">
              {/* Left: Intro */}
              <div className="lg:col-span-5 space-y-5">
                <div className="flex items-center gap-4">
                  <span className="gradient-text text-5xl font-extrabold leading-none">
                    {cap.number}
                  </span>
                  <div className="h-12 w-12 rounded-2xl bg-[#a61d4c]/10 text-[#830036] flex items-center justify-center">
                    <span className="material-symbols-outlined text-2xl">
                      {cap.icon}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-extrabold text-[#1f1a1b]">
                  {cap.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#584145]">
                  {cap.desc}
                </p>
              </div>

              {/* Right: Features + Deliverables */}
              <div className="lg:col-span-7 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {cap.features.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-start gap-2.5 text-sm text-[#1f1a1b] bg-[#fff8f8] rounded-xl px-3.5 py-2.5 border border-[#dfbfc3]/30"
                    >
                      <span className="material-symbols-outlined text-[#830036] text-base shrink-0">
                        check_circle
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-[#fbf1f2]/70 rounded-2xl border border-[#dfbfc3]/30 p-5 sm:p-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#830036] mb-4">
                    {cap.panelLabel}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {cap.panels.map((panel) => (
                      <div
                        key={panel.title}
                        className="bg-white rounded-xl border border-[#dfbfc3]/40 p-4"
                      >
                        <span className="material-symbols-outlined text-xl text-[#875200]">
                          {panel.icon}
                        </span>
                        <h5 className="font-bold text-[#1f1a1b] text-sm mt-2 mb-1">
                          {panel.title}
                        </h5>
                        <p className="text-xs text-[#584145] leading-relaxed">
                          {panel.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
