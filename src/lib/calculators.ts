// Pure calculation helpers for the free tools. No React, no side effects.

export type FilingStatus = "single" | "married";

// 2026 US federal figures (IRS inflation adjustments for tax year 2026).
export const TAX_YEAR = 2026;
export const SS_WAGE_BASE = 184_500;
const SS_RATE = 0.124;
const MEDICARE_RATE = 0.029;
const ADDITIONAL_MEDICARE_RATE = 0.009;
const SE_FACTOR = 0.9235;

export const STANDARD_DEDUCTION: Record<FilingStatus, number> = {
  single: 16_100,
  married: 32_200,
};

const ADDITIONAL_MEDICARE_THRESHOLD: Record<FilingStatus, number> = {
  single: 200_000,
  married: 250_000,
};

// [upper limit of bracket, rate]
const BRACKETS: Record<FilingStatus, [number, number][]> = {
  single: [
    [12_400, 0.1],
    [50_400, 0.12],
    [105_700, 0.22],
    [201_775, 0.24],
    [256_225, 0.32],
    [640_600, 0.35],
    [Number.POSITIVE_INFINITY, 0.37],
  ],
  married: [
    [24_800, 0.1],
    [100_800, 0.12],
    [211_400, 0.22],
    [403_550, 0.24],
    [512_450, 0.32],
    [768_700, 0.35],
    [Number.POSITIVE_INFINITY, 0.37],
  ],
};

const positive = (n: number) => (Number.isFinite(n) && n > 0 ? n : 0);

export function incomeTax(taxableIncome: number, status: FilingStatus) {
  const income = positive(taxableIncome);
  let tax = 0;
  let lower = 0;
  for (const [upper, rate] of BRACKETS[status]) {
    if (income > lower) tax += (Math.min(income, upper) - lower) * rate;
    lower = upper;
  }
  return tax;
}

export interface SelfEmploymentTaxResult {
  seEarnings: number;
  socialSecurity: number;
  medicare: number;
  additionalMedicare: number;
  total: number;
  deductibleHalf: number;
}

export function selfEmploymentTax(
  netProfit: number,
  otherWages: number,
  status: FilingStatus,
): SelfEmploymentTaxResult {
  const seEarnings = positive(netProfit) * SE_FACTOR;
  if (seEarnings < 400) {
    return {
      seEarnings,
      socialSecurity: 0,
      medicare: 0,
      additionalMedicare: 0,
      total: 0,
      deductibleHalf: 0,
    };
  }
  const wages = positive(otherWages);
  const socialSecurityRoom = Math.max(0, SS_WAGE_BASE - wages);
  const socialSecurity = Math.min(seEarnings, socialSecurityRoom) * SS_RATE;
  const medicare = seEarnings * MEDICARE_RATE;
  const threshold = ADDITIONAL_MEDICARE_THRESHOLD[status];
  const additionalMedicare =
    (Math.max(0, wages + seEarnings - threshold) -
      Math.max(0, wages - threshold)) *
    ADDITIONAL_MEDICARE_RATE;
  return {
    seEarnings,
    socialSecurity,
    medicare,
    additionalMedicare,
    total: socialSecurity + medicare + additionalMedicare,
    deductibleHalf: (socialSecurity + medicare) / 2,
  };
}

export function quarterlyEstimate(input: {
  netProfit: number;
  otherIncome: number;
  extraDeductions: number;
  status: FilingStatus;
}) {
  const se = selfEmploymentTax(input.netProfit, 0, input.status);
  const agi =
    positive(input.netProfit) + positive(input.otherIncome) - se.deductibleHalf;
  const taxableIncome = Math.max(
    0,
    agi - STANDARD_DEDUCTION[input.status] - positive(input.extraDeductions),
  );
  const incomeTaxAmount = incomeTax(taxableIncome, input.status);
  const total = se.total + incomeTaxAmount;
  return {
    se,
    agi,
    taxableIncome,
    incomeTax: incomeTaxAmount,
    total,
    quarterly: total / 4,
  };
}

export function profitMargin(input: {
  revenue: number;
  cogs: number;
  operatingExpenses: number;
}) {
  const grossProfit = input.revenue - input.cogs;
  const netProfit = grossProfit - input.operatingExpenses;
  const pct = (n: number) => (input.revenue > 0 ? (n / input.revenue) * 100 : 0);
  return {
    grossProfit,
    netProfit,
    grossMargin: pct(grossProfit),
    netMargin: pct(netProfit),
    markup: input.cogs > 0 ? (grossProfit / input.cogs) * 100 : null,
  };
}

export function costOfGoodsSold(input: {
  beginningInventory: number;
  purchases: number;
  otherDirectCosts: number;
  endingInventory: number;
  revenue: number;
}) {
  const cogs =
    input.beginningInventory +
    input.purchases +
    input.otherDirectCosts -
    input.endingInventory;
  const averageInventory =
    (input.beginningInventory + input.endingInventory) / 2;
  const turnover = averageInventory > 0 ? cogs / averageInventory : null;
  const grossProfit = input.revenue > 0 ? input.revenue - cogs : null;
  return {
    cogs,
    averageInventory,
    turnover,
    daysToSell: turnover && turnover > 0 ? 365 / turnover : null,
    grossProfit,
    grossMargin:
      grossProfit !== null && input.revenue > 0
        ? (grossProfit / input.revenue) * 100
        : null,
  };
}

export function debtToEquity(input: { liabilities: number; equity: number }) {
  const totalCapital = input.liabilities + input.equity;
  return {
    ratio: input.equity > 0 ? input.liabilities / input.equity : null,
    debtRatio:
      totalCapital > 0 && input.equity > 0
        ? input.liabilities / totalCapital
        : null,
  };
}

export function ebitda(input: {
  netIncome: number;
  interest: number;
  taxes: number;
  depreciation: number;
  amortization: number;
  revenue: number;
}) {
  const value =
    input.netIncome +
    input.interest +
    input.taxes +
    input.depreciation +
    input.amortization;
  return {
    value,
    margin: input.revenue > 0 ? (value / input.revenue) * 100 : null,
  };
}

// Generic one-order marketplace profit (eBay, Etsy).
export function marketplaceProfit(input: {
  price: number;
  shippingCharged: number;
  itemCost: number;
  shippingCost: number;
  percentFees: number[]; // % of (price + shipping charged)
  fixedFees: number[];
}) {
  const revenue = input.price + input.shippingCharged;
  const percentTotal = input.percentFees.reduce((a, b) => a + b, 0) / 100;
  const fixedTotal = input.fixedFees.reduce((a, b) => a + b, 0);
  const fees = revenue * percentTotal + fixedTotal;
  const costs = input.itemCost + input.shippingCost;
  const profit = revenue - fees - costs;
  const breakEvenRevenue =
    percentTotal < 1 ? (costs + fixedTotal) / (1 - percentTotal) : null;
  return {
    revenue,
    fees,
    costs,
    profit,
    margin: revenue > 0 ? (profit / revenue) * 100 : 0,
    roi: costs > 0 ? (profit / costs) * 100 : null,
    breakEvenPrice:
      breakEvenRevenue === null
        ? null
        : Math.max(0, breakEvenRevenue - input.shippingCharged),
  };
}

// ---- formatting -----------------------------------------------------------

export function parseNumber(value: string): number {
  const cleaned = value.replace(/[^0-9.\-]/g, "");
  const n = Number.parseFloat(cleaned);
  return Number.isFinite(n) ? n : 0;
}

export function formatMoney(n: number, decimals = 2) {
  const sign = n < 0 ? "-" : "";
  return `${sign}$${Math.abs(n).toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}`;
}

export function formatPercent(n: number, decimals = 1) {
  return `${n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}%`;
}
