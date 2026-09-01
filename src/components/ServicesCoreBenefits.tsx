import Image from "next/image";
import type React from "react";

const CORE_BENEFITS = [
  {
    id: "accuracy",
    icon: "verified_user",
    title: "Real Accuracy",
    text: "Every single transaction is checked and categorized by a real professional.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80",
    alt: "Accountant reviewing financial accuracy",
  },
  {
    id: "security",
    icon: "shield",
    title: "Secure Practices",
    text: "Read-only bank connections and secure cloud storage keep your details safe.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
    alt: "Cybersecurity and data protection",
  },
  {
    id: "reconciling",
    icon: "sync",
    title: "Consistent Reconciling",
    text: "Regular updates keep your books up to date so you are never surprised at tax time.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    alt: "Financial data syncing on screen",
  },
];

export const ServicesCoreBenefits: React.FC = () => {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CORE_BENEFITS.map((benefit, idx) => (
          <div
            key={benefit.id}
            className="relative bg-white rounded-3xl border border-[#dfbfc3]/40 overflow-hidden shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src={benefit.image}
                alt={benefit.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <span className="absolute top-4 right-4 text-4xl font-extrabold text-white/30 select-none">
                {String(idx + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Content */}
            <div className="p-7">
              <div className="w-11 h-11 rounded-2xl btn-gradient text-white flex items-center justify-center mb-4 shadow-md -mt-10 relative z-10">
                <span className="material-symbols-outlined text-xl">
                  {benefit.icon}
                </span>
              </div>
              <h4 className="text-lg font-bold text-[#1f1a1b]">
                {benefit.title}
              </h4>
              <p className="mt-2 text-sm text-[#584145] leading-relaxed">
                {benefit.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
