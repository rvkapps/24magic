import type React from "react";

const STEPS = [
  {
    icon: "link",
    title: "Connect",
    text: "Share read-only access to your bank and QuickBooks Online. We never move your money.",
  },
  {
    icon: "fact_check",
    title: "We keep it precise",
    text: "Your dedicated specialist reconciles, categorises and files every record each month.",
  },
  {
    icon: "insights",
    title: "You get clarity",
    text: "Clean financial statements and a short review, ready for you and your accountant.",
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-12 md:py-24"
    >
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <span className="rounded-full bg-[#a61d4c]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#830036]">
          How it works
        </span>
        <h2
          id="how-it-works-heading"
          className="mt-4 text-3xl font-extrabold tracking-tight text-[#1f1a1b] sm:text-4xl"
        >
          Three steps to books you can trust
        </h2>
      </div>

      <ol className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {STEPS.map((step, i) => (
          <li
            key={step.title}
            className="relative rounded-3xl border border-[#e8dcdf] bg-white p-7 ambient-shadow"
          >
            <span className="absolute top-6 right-7 text-5xl font-extrabold text-[#fbf1f2]">
              {i + 1}
            </span>
            <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#830036] text-white">
              <span
                className="material-symbols-outlined text-2xl"
                aria-hidden="true"
              >
                {step.icon}
              </span>
            </span>
            <h3 className="relative mt-5 text-lg font-bold text-[#1f1a1b]">
              {step.title}
            </h3>
            <p className="relative mt-2 text-sm leading-relaxed text-[#584145]">
              {step.text}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
};
