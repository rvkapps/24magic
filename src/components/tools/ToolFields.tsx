"use client";

import type React from "react";

const labelClass =
  "mb-1.5 block text-[11px] font-bold uppercase tracking-wider text-[#1f1a1b]";
const controlClass =
  "min-h-12 w-full rounded-xl border border-[#dfbfc3]/60 bg-[#fff8f8] px-4 py-2.5 text-base text-[#1f1a1b] placeholder:text-[#584145]/40 focus:border-[#830036] focus:outline-none focus:ring-2 focus:ring-[#830036]/10";

interface NumberFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  prefix?: string;
  suffix?: string;
  hint?: string;
  placeholder?: string;
}

export const NumberField: React.FC<NumberFieldProps> = ({
  id,
  label,
  value,
  onChange,
  prefix,
  suffix,
  hint,
  placeholder = "0",
}) => (
  <div>
    <label htmlFor={id} className={labelClass}>
      {label}
    </label>
    <div className="relative">
      {prefix && (
        <span
          className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-sm font-semibold text-[#584145]"
          aria-hidden="true"
        >
          {prefix}
        </span>
      )}
      <input
        id={id}
        type="text"
        inputMode="decimal"
        autoComplete="off"
        value={value}
        placeholder={placeholder}
        aria-describedby={hint ? `${id}-hint` : undefined}
        onChange={(e) => onChange(e.target.value.replace(/[^0-9.,-]/g, ""))}
        className={`${controlClass} ${prefix ? "pl-9" : ""} ${suffix ? "pr-10" : ""}`}
      />
      {suffix && (
        <span
          className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-sm font-semibold text-[#584145]"
          aria-hidden="true"
        >
          {suffix}
        </span>
      )}
    </div>
    {hint && (
      <p id={`${id}-hint`} className="mt-1.5 text-xs text-[#584145]">
        {hint}
      </p>
    )}
  </div>
);

interface SelectFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
}

export const SelectField: React.FC<SelectFieldProps> = ({
  id,
  label,
  value,
  onChange,
  options,
}) => (
  <div>
    <label htmlFor={id} className={labelClass}>
      {label}
    </label>
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={controlClass}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  </div>
);

export const CalcLayout: React.FC<{
  inputs: React.ReactNode;
  results: React.ReactNode;
}> = ({ inputs, results }) => (
  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
    <div className="space-y-5 rounded-3xl border border-[#dfbfc3]/40 bg-white p-6 shadow-xs sm:p-8">
      {inputs}
    </div>
    <div
      className="space-y-4 rounded-3xl border border-[#dfbfc3]/40 bg-[#fbf1f2]/60 p-6 sm:p-8 lg:self-start"
      aria-live="polite"
    >
      {results}
    </div>
  </div>
);

export const Headline: React.FC<{
  label: string;
  value: string;
  note?: string;
}> = ({ label, value, note }) => (
  <div className="rounded-2xl bg-white p-5 text-center shadow-xs">
    <p className="text-[11px] font-bold uppercase tracking-wider text-[#830036]">
      {label}
    </p>
    <p className="gradient-text mt-1 text-4xl font-extrabold tracking-tight sm:text-5xl">
      {value}
    </p>
    {note && <p className="mt-2 text-xs text-[#584145]">{note}</p>}
  </div>
);

export const ResultRow: React.FC<{
  label: string;
  value: string;
  strong?: boolean;
}> = ({ label, value, strong }) => (
  <div
    className={`flex items-baseline justify-between gap-4 border-b border-[#dfbfc3]/40 py-2.5 text-sm last:border-b-0 ${
      strong ? "font-extrabold text-[#1f1a1b]" : "text-[#584145]"
    }`}
  >
    <span>{label}</span>
    <span className={strong ? "" : "font-semibold text-[#1f1a1b]"}>
      {value}
    </span>
  </div>
);

export const EmptyResults: React.FC<{ text?: string }> = ({
  text = "Enter your numbers to see your results here.",
}) => (
  <div className="flex min-h-40 flex-col items-center justify-center gap-2 text-center text-sm text-[#584145]">
    <span
      className="material-symbols-outlined text-3xl text-[#c9a8ac]"
      aria-hidden="true"
    >
      calculate
    </span>
    <p>{text}</p>
  </div>
);

export const Note: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <p className="text-xs leading-relaxed text-[#584145]">{children}</p>
);

export const FILING_OPTIONS = [
  { value: "single", label: "Single" },
  { value: "married", label: "Married filing jointly" },
];
