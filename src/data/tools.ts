export type ToolCategoryId = "tax" | "profitability" | "marketplace";

export interface ToolCategory {
  id: ToolCategoryId;
  label: string;
  blurb: string;
  icon: string;
}

export interface ToolItem {
  slug: string;
  title: string;
  description: string;
  metaDescription: string;
  category: ToolCategoryId;
  icon: string;
  ctaTitle: string;
  ctaText: string;
}

export const TOOL_CATEGORIES: ToolCategory[] = [
  {
    id: "tax",
    label: "Tax",
    blurb: "Plan ahead for what you owe and what you can deduct.",
    icon: "receipt_long",
  },
  {
    id: "profitability",
    label: "Profitability & financial health",
    blurb: "Check your margins, costs and balance sheet strength.",
    icon: "monitoring",
  },
  {
    id: "marketplace",
    label: "Marketplace sellers",
    blurb: "See what you really keep after marketplace fees.",
    icon: "storefront",
  },
];

const CTA: Record<ToolCategoryId, { title: string; text: string }> = {
  tax: {
    title: "Make tax time simple",
    text: "Good estimates start with clean books. We keep your records reconciled and organised every month, so your tax professional has what they need.",
  },
  profitability: {
    title: "Get numbers you can trust",
    text: "A calculator is only as good as the figures behind it. We keep your books accurate and reconciled every month.",
  },
  marketplace: {
    title: "Know your real profit, every month",
    text: "Fees, shipping and costs add up quickly. We keep your books organised so your profit figures match your records.",
  },
};

const tool = (
  t: Omit<ToolItem, "ctaTitle" | "ctaText">,
): ToolItem => ({
  ...t,
  ctaTitle: CTA[t.category].title,
  ctaText: CTA[t.category].text,
});

export const TOOLS: ToolItem[] = [
  tool({
    slug: "quarterly-tax-calculator",
    title: "Estimated Quarterly Tax Calculator",
    description:
      "Estimate your federal quarterly tax payment from your expected profit.",
    metaDescription:
      "Free estimated quarterly tax calculator for self-employed US business owners. Estimate federal income tax and self-employment tax per quarter.",
    category: "tax",
    icon: "event_repeat",
  }),
  tool({
    slug: "self-employment-tax-calculator",
    title: "Self-Employment Tax Calculator",
    description:
      "Estimate your Social Security and Medicare tax on self-employment income.",
    metaDescription:
      "Free self-employment tax calculator. Estimate Social Security, Medicare and additional Medicare tax on your net self-employment income.",
    category: "tax",
    icon: "badge",
  }),
  tool({
    slug: "self-employed-tax-deductions",
    title: "Tax Deductions for the Self-Employed",
    description:
      "Get a checklist of common deductions for your type of business.",
    metaDescription:
      "Free checklist of common tax deductions for self-employed business owners, by industry. Build a list to review with your tax professional.",
    category: "tax",
    icon: "checklist",
  }),
  tool({
    slug: "profit-margin-calculator",
    title: "Profit Margin Calculator",
    description:
      "Work out your gross and net profit margins and your markup.",
    metaDescription:
      "Free profit margin calculator. Enter revenue, cost of goods sold and expenses to see gross margin, net margin and markup.",
    category: "profitability",
    icon: "percent",
  }),
  tool({
    slug: "cogs-calculator",
    title: "Cost of Goods Sold Calculator",
    description:
      "Calculate the direct cost of the products you sold in a period.",
    metaDescription:
      "Free cost of goods sold (COGS) calculator. Use beginning inventory, purchases and ending inventory to find COGS, turnover and gross margin.",
    category: "profitability",
    icon: "inventory_2",
  }),
  tool({
    slug: "debt-to-equity-calculator",
    title: "Debt to Equity Ratio Calculator",
    description: "Measure how much of your business is funded by debt.",
    metaDescription:
      "Free debt to equity ratio calculator. Enter total liabilities and shareholders' equity to measure financial leverage.",
    category: "profitability",
    icon: "balance",
  }),
  tool({
    slug: "ebay-profit-margin-calculator",
    title: "eBay Profit Margin Calculator",
    description: "See your profit and margin on an eBay sale after fees.",
    metaDescription:
      "Free eBay profit margin calculator. Enter price, costs and fees to see your profit, margin, ROI and break-even price.",
    category: "marketplace",
    icon: "shopping_bag",
  }),
  tool({
    slug: "ebitda-calculator",
    title: "EBITDA Calculator",
    description:
      "Measure operating profitability before interest, tax and depreciation.",
    metaDescription:
      "Free EBITDA calculator. Add back interest, taxes, depreciation and amortization to net income to find EBITDA and EBITDA margin.",
    category: "profitability",
    icon: "query_stats",
  }),
  tool({
    slug: "etsy-profit-margin-calculator",
    title: "Etsy Profit Margin Calculator",
    description: "See what you keep from an Etsy sale after fees.",
    metaDescription:
      "Free Etsy profit margin calculator. Include listing, transaction and payment processing fees to see profit, margin and break-even price.",
    category: "marketplace",
    icon: "palette",
  }),
];

export const getTool = (slug: string) => TOOLS.find((t) => t.slug === slug);
