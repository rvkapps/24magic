import type {
  ArticleItem,
  PlanItem,
  ServiceItem,
  TestimonialItem,
} from "../types";

export const LOGO_URL = "/24magic-logo.jpg";

export const FOOTER_LOGO_URL = "/24magic-logo.jpg";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "bookkeeping",
    title: "Bookkeeping",
    shortDesc:
      "Meticulous recording of daily financial transactions, ensuring every digit is accounted for with absolute precision. We maintain your ledgers so you can focus on scaling.",
    fullDesc:
      "Our Bookkeeping engine automates feed matching, auto-categorization, and receipt auditing. Your books are audited daily and closed before the 5th of every month.",
    imageUrl:
      "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80",
    alt: "Accounting documents and a calculator on a clean desk",
    features: [
      "Daily bank & credit card reconciliation",
      "Automated receipt & invoice matching",
      "Chart of Accounts customization",
      "Month-end closing binder & sign-off",
    ],
    pricingEstimate: "Starting at $299/mo",
  },
  {
    id: "financial-reporting",
    title: "Financial Reporting",
    shortDesc:
      "Transform raw data into strategic insights. Custom dashboards and comprehensive monthly reports that illuminate your business's true financial health.",
    fullDesc:
      "Executive-level P&L statements, Balance Sheets, Cash Flow breakdowns, and custom KPI tracking delivered straight to your portal with actionable video commentary.",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    alt: "Laptop displaying an analytics dashboard with revenue graphs",
    features: [
      "Interactive executive financial dashboard",
      "Real-time Cash Flow Forecasting (30-90 days)",
      "Custom unit economics & gross margin analysis",
      "Monthly video walk-through from dedicated bookkeeping specialist",
    ],
    pricingEstimate: "Included in Growth & Scale plans",
  },
  {
    id: "tax-preparation",
    title: "Tax Preparation",
    shortDesc:
      "Proactive tax strategy and flawless compliance. We navigate complex tax codes to optimize your liabilities and ensure impeccable filings year-round.",
    fullDesc:
      "Don’t wait until April. We integrate tax planning into monthly bookkeeping, identifying write-offs, R&D credits, and section 179 deductions in real-time.",
    imageUrl:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80",
    alt: "Tax forms and a calculator on a desk",
    features: [
      "Year-round tax deduction strategy",
      "State & Federal business tax filing (1120S, 1065, Schedule C)",
      "Quarterly estimated tax calculations",
      "Audit protection guarantee",
    ],
    pricingEstimate: "Add-on or standalone from $499",
  },
  {
    id: "payroll-management",
    title: "Payroll Management",
    shortDesc:
      "Seamless, accurate, and timely payroll processing. We handle the intricacies of payroll taxes, benefits deductions, and direct deposits seamlessly.",
    fullDesc:
      "Automated payroll for W-2 employees and 1099 contractors with Gusto/ADP/Rippling integration, multi-state filings, and automated tax withholding.",
    imageUrl:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80",
    alt: "Stack of dollar bills representing payroll",
    features: [
      "Full W-2 and 1099 payroll execution",
      "Automated payroll tax filings & W-2 issuance",
      "Direct sync with general ledger bookkeeping",
      "Benefits & workers comp allocation tracking",
    ],
    pricingEstimate: "Starting at $149/mo",
  },
];

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: "build-bookkeeping-business",
    title: "Build your bookkeeping business",
    category: "Business Growth",
    description:
      "Discover the proven strategies to scale your practice from a solo operation to a thriving agency with 24MAGIC workflows.",
    imageUrl:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    readTime: "8 min read",
    author: "24MAGIC Advisory Team",
  },
  {
    id: "qbo-cleanup-tutorials",
    title: "QuickBooks Online cleanup tutorials",
    category: "Technical Skills",
    description:
      "Master the art of the cleanup with our comprehensive guide to fixing common QBO errors, undeposited funds, and duplicate feeds.",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
    readTime: "12 min read",
    author: "Lead Bookkeeping Reviewer",
  },
  {
    id: "tax-saving-strategies-2026",
    title: "Top 10 Tax Write-offs for Remote & Hybrid Businesses",
    category: "Tax Strategy",
    description:
      "Maximize your net profits by leveraging legal tax deductions for home offices, software tools, client entertainments, and vehicle expenses.",
    imageUrl:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    readTime: "6 min read",
    author: "Senior Tax Counsel",
  },
  {
    id: "5-minute-daily-financial-habit",
    title: "The 5-Minute Daily Financial Routine for Founders",
    category: "Tools & Workflows",
    description:
      "How spending 300 seconds every morning checking key ledger indicators protects your runway and eliminates end-of-month panic.",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    readTime: "5 min read",
    author: "Founder & CEO",
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "1",
    quote:
      '"This platform completely changed how I manage my books. The tutorials and 5-minute workflows are a lifesaver!"',
    author: "Sarah J.",
    role: "Small Business Owner",
    initials: "SJ",
    rating: 5,
  },
  {
    id: "2",
    quote:
      '"Professional, clear, and incredibly efficient. Best investment for my bookkeeping firm and client reporting."',
    author: "Michael R.",
    role: "Senior Accountant",
    initials: "MR",
    rating: 5,
  },
  {
    id: "3",
    quote:
      '"The community support alone is worth it. I’ve never felt more confident in my business finances and tax filings."',
    author: "Elena G.",
    role: "Creative Entrepreneur",
    initials: "EG",
    rating: 5,
  },
  {
    id: "4",
    quote:
      '"24MAGIC helped us close our monthly books 10x faster. The visual reporting gives our board total clarity."',
    author: "David K.",
    role: "SaaS Founder",
    initials: "DK",
    rating: 5,
  },
  {
    id: "5",
    quote:
      '"Switching to 24MAGIC was the best business support decision we made. My Shopify reconciliations that used to take days now close every month in one sitting."',
    author: "Priya S.",
    role: "E-Commerce Owner",
    initials: "PS",
    rating: 5,
  },
  {
    id: "6",
    quote:
      '"I finally understand my numbers. Their dashboards turned a mountain of transactions into a story I can actually act on — and my CPA loves the clean books."',
    author: "James C.",
    role: "Marketing Agency Founder",
    initials: "JC",
    rating: 5,
  },
  {
    id: "7",
    quote:
      '"Daily reconciliation across our three locations used to be a nightmare. 24MAGIC handles it automatically, so my bank never surprises me at month-end."',
    author: "Aisha P.",
    role: "Restaurant Owner",
    initials: "AP",
    rating: 4,
  },
  {
    id: "8",
    quote:
      '"As a solo founder I dreaded tax season. 24MAGIC keeps everything tax-ready all year, so I actually look forward to my quarterly calls now."',
    author: "Tom B.",
    role: "Freelance Designer",
    initials: "TB",
    rating: 5,
  },
  {
    id: "9",
    quote:
      '"COGS, merchant fees, refunds — they track every channel cleanly. My gross-to-net reports are finally accurate and board-ready."',
    author: "Nina K.",
    role: "DTC Brand Founder",
    initials: "NK",
    rating: 5,
  },
  {
    id: "10",
    quote:
      '"Multi-entity books used to cost me a fortune. The team consolidated all our LLCs into one clear portfolio view for a fraction of the price."',
    author: "Rob T.",
    role: "Real Estate Investor",
    initials: "RT",
    rating: 5,
  },
];

export const PLANS_DATA: PlanItem[] = [
  {
    id: "starter",
    name: "Starter Precision",
    priceMonthly: 299,
    priceAnnual: 249,
    description:
      "Ideal for solopreneurs & early-stage businesses looking for clean, accurate books.",
    monthlyTxLimit: "Up to 75 monthly transactions",
    features: [
      "Monthly bank & card reconciliation",
      "Monthly P&L & Balance Sheet",
      "Year-end tax ready closing package",
      "Email & portal ticket support",
      "5-minute dashboard check-in",
    ],
  },
  {
    id: "growth",
    name: "Growth & Scale",
    priceMonthly: 599,
    priceAnnual: 499,
    description:
      "Designed for scaling businesses that need proactive insights and dedicated expert oversight.",
    monthlyTxLimit: "Up to 250 monthly transactions",
    features: [
      "Bi-weekly transaction reconciliation",
      "Interactive executive dashboard",
      "Cash flow forecasting (30 days)",
      "Dedicated bookkeeping specialist point of contact",
      "Receipt & invoice matching",
      "Quarterly tax review call",
    ],
    popular: true,
  },
  {
    id: "enterprise",
    name: "Custom Magic",
    priceMonthly: 1199,
    priceAnnual: 999,
    description:
      "Tailored for multi-entity businesses, e-commerce, or complex inventory operations.",
    monthlyTxLimit: "Unlimited transactions",
    features: [
      "Daily bank & merchant feeds",
      "Multi-currency & multi-entity support",
      "Custom ERP/QBO/NetSuite sync",
      "Full Payroll & Tax preparation included",
      "24/7 Priority advisory team access",
      "Dedicated CFO strategic partner",
    ],
  },
];
