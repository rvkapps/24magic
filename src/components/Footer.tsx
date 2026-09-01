// import type React from "react";
// import { FOOTER_LOGO_URL } from "../data/mockData";

// const socialLinks = [
//   {
//     label: "LinkedIn",
//     href: "https://linkedin.com/company/24magic",
//     icon: (
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="20"
//         height="20"
//         viewBox="0 0 24 24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         role="img"
//         aria-label="LinkedIn"
//       >
//         <title>LinkedIn</title>
//         <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
//         <rect width="4" height="12" x="2" y="9" />
//         <circle cx="4" cy="4" r="2" />
//       </svg>
//     ),
//   },
// ];

// export const Footer: React.FC = () => {
//   return (
//     <footer className="bg-white w-full rounded-t-2xl border-t border-[#dfbfc3]/30 mt-20">
//       <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 px-4 sm:px-6 md:px-12 py-12 w-full max-w-7xl mx-auto">
//         {/* Brand */}
//         <div className="flex flex-col items-start">
//           {/* biome-ignore lint/performance/noImgElement: Remote CDN logo kept as plain img to match source design */}
//           <img
//             src={FOOTER_LOGO_URL}
//             alt="24MAGIC Logo"
//             className="h-10 w-auto object-contain mb-3 block"
//           />
//           <p className="text-sm text-[#584145] leading-relaxed">
//             Precision in every digit. Magic in every insight.
//           </p>
//         </div>

//         {/* Social Icons */}
//         <div className="flex items-center gap-3">
//           {socialLinks.map((link) => (
//             <a
//               key={link.label}
//               href={link.href}
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label={link.label}
//               className="flex items-center justify-center w-10 h-10 rounded-full border border-[#dfbfc3]/60 text-[#584145] hover:text-[#830036] hover:border-[#830036]/40 hover:bg-[#a61d4c]/5 transition-all duration-200"
//             >
//               {link.icon}
//             </a>
//           ))}
//         </div>
//       </div>

//       {/* Legal Disclaimer */}
//       <div className="px-4 sm:px-6 md:px-12 pb-8 w-full max-w-7xl mx-auto">
//         <div className="p-5 bg-[#fff8f8] rounded-2xl border border-[#dfbfc3]/40 text-xs text-[#584145] space-y-2 leading-relaxed">
//           <p className="font-bold text-[#1f1a1b] uppercase tracking-wider text-[11px]">
//             Legal Disclaimer
//           </p>
//           <p>
//             {/* 24MAGIC provides bookkeeping, transaction reconciliation, and
//             business support services for businesses utilizing
//             U.S.-based financial institutions and U.S. dollar (USD) accounts.
//             24MAGIC is not a Certified Public Accounting (CPA) firm and does not
//             provide licensed public accounting services, including audits,
//             attestations, examinations, reviews, certifications, or any other
//             services requiring CPA licensure. */}
//             24MAGIC provides bookkeeping, transaction reconciliation, and
//             business support services to businesses of all sizes,
//             from emerging ventures and small businesses to established and
//             growing organizations. We work across industries and business
//             models, supporting entrepreneurs, professionals, service providers,
//             travelers, and organizations with accurate financial records,
//             organized bookkeeping processes, and reliable day-to-day financial
//             operations. Our services are designed to adapt to the unique needs
//             of each business, without limiting our support to a specific
//             industry, business size, or category. 24MAGIC is not a Certified
//             Public Accounting (CPA) firm and does not provide licensed public
//             accounting services, including audits, attestations, examinations,
//             reviews, certifications, or any other services requiring CPA
//             licensure.
//           </p>
//           <p>
//             Our services are designed to support your everyday bookkeeping and
//             financial operations and are not a replacement for professional
//             accounting, tax, financial, or legal advice. 24MAGIC is not
//             affiliated with or governed by the American Institute of Certified
//             Public Accountants (AICPA).
//           </p>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="px-4 sm:px-6 md:px-12 py-6 border-t border-[#dfbfc3]/30 w-full max-w-7xl mx-auto text-center">
//         <p className="text-xs text-[#584145]/80">
//           &copy; 2026 24MAGIC Bookkeeping & Business Support. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// };
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { FOOTER_LOGO_URL } from "../data/mockData";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white w-full rounded-t-2xl border-t border-[#dfbfc3]/30 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 sm:px-6 md:px-12 py-16 w-full max-w-7xl mx-auto">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1 flex flex-col items-start">
          <Image
            src={FOOTER_LOGO_URL}
            alt="24MAGIC Logo"
            width={819}
            height={335}
            className="h-10 w-auto object-contain mb-4 block"
          />
          <p className="text-sm text-[#584145] leading-relaxed">
            Precision in every digit. Magic in every insight.
          </p>
        </div>

        {/* Links Column */}
        <div className="col-span-1 md:col-span-3 flex flex-wrap justify-start md:justify-end gap-x-8 gap-y-4 items-center">
          <Link
            href="/services"
            className="text-sm text-[#584145] hover:text-[#830036] underline-offset-4 hover:underline transition-all cursor-pointer"
          >
            Services
          </Link>
          <Link
            href="/solutions"
            className="text-sm text-[#584145] hover:text-[#830036] underline-offset-4 hover:underline transition-all cursor-pointer"
          >
            Solutions
          </Link>
          <Link
            href="/pricing"
            className="text-sm text-[#584145] hover:text-[#830036] underline-offset-4 hover:underline transition-all cursor-pointer"
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className="text-sm text-[#584145] hover:text-[#830036] underline-offset-4 hover:underline transition-all cursor-pointer"
          >
            Contact Support
          </Link>
          <Link
            href="/privacy-policy"
            className="text-sm text-[#584145] hover:text-[#830036] underline-offset-4 hover:underline transition-all cursor-pointer"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-service"
            className="text-sm text-[#584145] hover:text-[#830036] underline-offset-4 hover:underline transition-all cursor-pointer"
          >
            Terms of Service
          </Link>
          <Link
            href="/privacy-policy#data-security"
            className="text-sm text-[#584145] hover:text-[#830036] underline-offset-4 hover:underline transition-all cursor-pointer"
          >
            Security
          </Link>
        </div>

        {/* Legal Disclaimer */}
        <div className="col-span-1 md:col-span-4 mt-4 p-5 bg-[#fff8f8] rounded-2xl border border-[#dfbfc3]/40 text-xs text-[#584145] space-y-2 leading-relaxed">
          <p className="font-bold text-[#1f1a1b] uppercase tracking-wider text-[11px]">
            Legal Disclaimer
          </p>
          <p>
            24MAGIC provides bookkeeping, transaction reconciliation, and
            financial back-office support services for businesses. 24MAGIC is
            not a Certified Public Accounting (CPA) firm and does not provide
            licensed public accounting services, including audits, attestations,
            examinations, reviews, certifications, or any other services
            requiring CPA licensure.
          </p>
          <p>
            Our services are designed to support your everyday bookkeeping and
            financial operations and are not a replacement for professional
            accounting, tax, financial, or legal advice. 24MAGIC is not
            affiliated with or governed by the American Institute of Certified
            Public Accountants (AICPA).
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="col-span-1 md:col-span-4 mt-8 pt-8 border-t border-[#dfbfc3]/30 text-center">
          <p className="text-xs text-[#584145]/80">
            © 2026 24MAGIC Bookkeeping & Back-Office Support. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
