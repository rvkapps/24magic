import Link from "next/link";
import type React from "react";

export const ConsultationCta: React.FC = () => {
  return (
    <section className="py-16 md:py-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto my-4 md:my-8">
      <div className="btn-gradient relative overflow-hidden rounded-[2rem] shadow-xl">
        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-28 -right-24 w-80 h-80 bg-[#ffb55b]/25 rounded-full blur-2xl"></div>
          <div className="absolute top-8 right-10 opacity-20">
            <span className="material-symbols-outlined text-7xl">
              auto_awesome
            </span>
          </div>
          <div className="absolute bottom-6 left-1/3 opacity-15">
            <span className="material-symbols-outlined text-5xl">bolt</span>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 lg:p-16">
          {/* Copy */}
          <div className="lg:col-span-7 space-y-4">
            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-[#ffb55b] bg-white/10 border border-white/20 rounded-full px-4 py-1.5 w-fit">
              Free consultation · No pressure
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Let's Make Bookkeeping Simple Again
            </h2>
            <p className="text-sm sm:text-base text-white/85 leading-relaxed max-w-xl">
              Get in touch for a friendly, pressure-free chat. We will look at
              your current paperwork setups and customize a simple bookkeeping
              flow that fits your business perfectly.
            </p>
          </div>

          {/* Action */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-4">
            <Link
              href="/contact"
              className="bg-white hover:bg-[#fbf1f2] text-[#830036] font-bold text-xs sm:text-sm uppercase tracking-wider px-8 py-4 rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-base">
                calendar_month
              </span>
              Book Your Free Consultation
            </Link>
            <div className="flex items-center gap-2 text-xs text-white/75">
              <span className="material-symbols-outlined text-sm">
                verified_user
              </span>
              Read-only, secure connections
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
