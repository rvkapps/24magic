"use client";

import type React from "react";
import { useState } from "react";
import {
  COMMON_DEDUCTIONS,
  INDUSTRIES,
  INDUSTRY_DEDUCTIONS,
} from "@/data/deductions";
import {
  type FilingStatus,
  formatMoney,
  formatPercent,
  parseNumber,
  quarterlyEstimate,
  SS_WAGE_BASE,
  STANDARD_DEDUCTION,
  selfEmploymentTax,
  TAX_YEAR,
} from "@/lib/calculators";
import {
  CalcLayout,
  EmptyResults,
  FILING_OPTIONS,
  Headline,
  Note,
  NumberField,
  ResultRow,
  SelectField,
} from "./ToolFields";

export const QuarterlyTaxCalculator: React.FC = () => {
  const [status, setStatus] = useState<FilingStatus>("single");
  const [profit, setProfit] = useState("");
  const [otherIncome, setOtherIncome] = useState("");
  const [deductions, setDeductions] = useState("");

  const netProfit = parseNumber(profit);
  const result = quarterlyEstimate({
    netProfit,
    otherIncome: parseNumber(otherIncome),
    extraDeductions: parseNumber(deductions),
    status,
  });

  return (
    <CalcLayout
      inputs={
        <>
          <SelectField
            id="qt-status"
            label="Filing status"
            value={status}
            onChange={(v) => setStatus(v as FilingStatus)}
            options={FILING_OPTIONS}
          />
          <NumberField
            id="qt-profit"
            label="Expected net profit for the year"
            prefix="$"
            value={profit}
            onChange={setProfit}
            hint="Business income minus business expenses."
          />
          <NumberField
            id="qt-other"
            label="Other taxable income (optional)"
            prefix="$"
            value={otherIncome}
            onChange={setOtherIncome}
            hint="For example a spouse's wages or interest."
          />
          <NumberField
            id="qt-deductions"
            label="Extra deductions (optional)"
            prefix="$"
            value={deductions}
            onChange={setDeductions}
            hint={`The ${TAX_YEAR} standard deduction (${formatMoney(
              STANDARD_DEDUCTION[status],
              0,
            )}) is applied automatically.`}
          />
        </>
      }
      results={
        netProfit > 0 ? (
          <>
            <Headline
              label="Estimated payment each quarter"
              value={formatMoney(result.quarterly, 0)}
              note={`About ${formatMoney(result.total, 0)} for the year`}
            />
            <div>
              <ResultRow
                label="Self-employment tax"
                value={formatMoney(result.se.total, 0)}
              />
              <ResultRow
                label="Federal income tax"
                value={formatMoney(result.incomeTax, 0)}
              />
              <ResultRow
                label="Estimated taxable income"
                value={formatMoney(result.taxableIncome, 0)}
              />
              <ResultRow
                label="Total estimated tax"
                value={formatMoney(result.total, 0)}
                strong
              />
            </div>
            <Note>
              Estimated payments are generally due around April 15, June 15,
              September 15 and January 15 (of the following year). This is a
              simplified federal estimate using {TAX_YEAR} rates. It does not
              include state tax, credits, the qualified business income
              deduction or other adjustments.
            </Note>
          </>
        ) : (
          <EmptyResults />
        )
      }
    />
  );
};

export const SelfEmploymentTaxCalculator: React.FC = () => {
  const [status, setStatus] = useState<FilingStatus>("single");
  const [profit, setProfit] = useState("");
  const [wages, setWages] = useState("");

  const netProfit = parseNumber(profit);
  const result = selfEmploymentTax(netProfit, parseNumber(wages), status);

  return (
    <CalcLayout
      inputs={
        <>
          <SelectField
            id="se-status"
            label="Filing status"
            value={status}
            onChange={(v) => setStatus(v as FilingStatus)}
            options={FILING_OPTIONS}
          />
          <NumberField
            id="se-profit"
            label="Net self-employment income for the year"
            prefix="$"
            value={profit}
            onChange={setProfit}
            hint="Business income minus business expenses."
          />
          <NumberField
            id="se-wages"
            label="W-2 wages (optional)"
            prefix="$"
            value={wages}
            onChange={setWages}
            hint="Wages from a job also count toward the Social Security limit."
          />
        </>
      }
      results={
        netProfit > 0 ? (
          <>
            <Headline
              label="Estimated self-employment tax"
              value={formatMoney(result.total, 0)}
              note={
                netProfit > 0 && result.total > 0
                  ? `${formatPercent((result.total / netProfit) * 100)} of your net income`
                  : "Net earnings under $400 are not subject to this tax."
              }
            />
            <div>
              <ResultRow
                label="Taxable self-employment earnings (92.35%)"
                value={formatMoney(result.seEarnings, 0)}
              />
              <ResultRow
                label="Social Security (12.4%)"
                value={formatMoney(result.socialSecurity, 0)}
              />
              <ResultRow
                label="Medicare (2.9%)"
                value={formatMoney(result.medicare, 0)}
              />
              <ResultRow
                label="Additional Medicare (0.9%)"
                value={formatMoney(result.additionalMedicare, 0)}
              />
              <ResultRow
                label="Deductible half of SE tax"
                value={formatMoney(result.deductibleHalf, 0)}
                strong
              />
            </div>
            <Note>
              Based on {TAX_YEAR} rules, with Social Security tax applying up to{" "}
              {formatMoney(SS_WAGE_BASE, 0)} of combined earnings. This is an
              estimate only and does not replace advice from a tax professional.
            </Note>
          </>
        ) : (
          <EmptyResults />
        )
      }
    />
  );
};

export const DeductionsChecklist: React.FC = () => {
  const [industry, setIndustry] = useState("consulting");
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [copied, setCopied] = useState(false);

  const industryItems = INDUSTRY_DEDUCTIONS[industry] ?? [];
  const all = [...industryItems, ...COMMON_DEDUCTIONS];
  const selected = all.filter((d) => checked[d.id]);

  const toggle = (id: string) =>
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));

  const copyList = async () => {
    const list = (selected.length > 0 ? selected : all)
      .map((d) => `- ${d.label}`)
      .join("\n");
    try {
      await navigator.clipboard.writeText(list);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const renderItem = (d: { id: string; label: string; note: string }) => (
    <li key={d.id}>
      <label
        htmlFor={`ded-${d.id}`}
        className="flex min-h-12 cursor-pointer items-start gap-3 rounded-xl border border-[#dfbfc3]/40 bg-[#fff8f8] px-4 py-3 hover:border-[#830036]"
      >
        <input
          id={`ded-${d.id}`}
          type="checkbox"
          checked={Boolean(checked[d.id])}
          onChange={() => toggle(d.id)}
          className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-[#830036]"
        />
        <span>
          <span className="block text-sm font-semibold text-[#1f1a1b]">
            {d.label}
          </span>
          <span className="block text-xs leading-relaxed text-[#584145]">
            {d.note}
          </span>
        </span>
      </label>
    </li>
  );

  return (
    <div className="space-y-6">
      <div className="max-w-md rounded-3xl border border-[#dfbfc3]/40 bg-white p-6 shadow-xs">
        <SelectField
          id="ded-industry"
          label="Your type of business"
          value={industry}
          onChange={setIndustry}
          options={INDUSTRIES.map((i) => ({ value: i.id, label: i.label }))}
        />
      </div>

      {industryItems.length > 0 && (
        <section aria-labelledby="ded-industry-heading">
          <h2
            id="ded-industry-heading"
            className="mb-3 text-lg font-extrabold text-[#1f1a1b]"
          >
            Common for your business
          </h2>
          <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {industryItems.map(renderItem)}
          </ul>
        </section>
      )}

      <section aria-labelledby="ded-common-heading">
        <h2
          id="ded-common-heading"
          className="mb-3 text-lg font-extrabold text-[#1f1a1b]"
        >
          Common for most self-employed businesses
        </h2>
        <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {COMMON_DEDUCTIONS.map(renderItem)}
        </ul>
      </section>

      <div className="flex flex-col items-start gap-3 rounded-3xl bg-[#fbf1f2]/60 p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-[#584145]" aria-live="polite">
          <strong className="text-[#1f1a1b]">{selected.length}</strong> of{" "}
          {all.length} ticked. Tick the ones you use, then copy the list to
          review with your tax professional.
        </p>
        <button
          type="button"
          onClick={copyList}
          className="min-h-12 shrink-0 cursor-pointer rounded-full border border-[#830036] px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#830036] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#830036]"
        >
          {copied ? "Copied" : "Copy my list"}
        </button>
      </div>
    </div>
  );
};
