export interface DeductionItem {
  id: string;
  label: string;
  note: string;
}

export interface IndustryOption {
  id: string;
  label: string;
}

export const INDUSTRIES: IndustryOption[] = [
  { id: "consulting", label: "Consulting & professional services" },
  { id: "creative", label: "Creative, design & media" },
  { id: "ecommerce", label: "Retail & e-commerce" },
  { id: "trades", label: "Construction & trades" },
  { id: "realestate", label: "Real estate" },
  { id: "food", label: "Food & beverage" },
  { id: "health", label: "Health & wellness" },
  { id: "transport", label: "Transportation & delivery" },
  { id: "tech", label: "Technology & software" },
  { id: "other", label: "Other" },
];

export const COMMON_DEDUCTIONS: DeductionItem[] = [
  {
    id: "home-office",
    label: "Home office",
    note: "If part of your home is used regularly and exclusively for business.",
  },
  {
    id: "vehicle",
    label: "Business vehicle use",
    note: "Mileage or actual costs for business driving. Commuting does not count.",
  },
  {
    id: "software",
    label: "Software & subscriptions",
    note: "Accounting, project, design and other business tools.",
  },
  {
    id: "phone-internet",
    label: "Phone & internet",
    note: "The business-use portion of your bills.",
  },
  {
    id: "professional-fees",
    label: "Professional fees",
    note: "Bookkeeping, accounting, legal and consulting fees.",
  },
  {
    id: "bank-fees",
    label: "Bank & payment processing fees",
    note: "Merchant fees, account fees and similar charges.",
  },
  {
    id: "marketing",
    label: "Marketing & advertising",
    note: "Ads, website, branding, business cards and promotions.",
  },
  {
    id: "insurance",
    label: "Business insurance",
    note: "Liability, property and other policies for the business.",
  },
  {
    id: "supplies",
    label: "Office supplies & equipment",
    note: "Items used in the business. Larger purchases may be depreciated.",
  },
  {
    id: "travel",
    label: "Business travel",
    note: "Transport and lodging for business trips.",
  },
  {
    id: "meals",
    label: "Business meals",
    note: "Generally only partly deductible. Keep a record of who and why.",
  },
  {
    id: "education",
    label: "Education & training",
    note: "Courses that maintain or improve skills in your current business.",
  },
  {
    id: "health-insurance",
    label: "Self-employed health insurance",
    note: "Premiums may be deductible, subject to eligibility rules.",
  },
  {
    id: "retirement",
    label: "Retirement contributions",
    note: "For example a SEP IRA or Solo 401(k), within annual limits.",
  },
  {
    id: "se-tax-half",
    label: "Half of self-employment tax",
    note: "Deductible when you calculate your income tax.",
  },
  {
    id: "qbi",
    label: "Qualified business income deduction",
    note: "May reduce taxable income for eligible pass-through businesses.",
  },
];

export const INDUSTRY_DEDUCTIONS: Record<string, DeductionItem[]> = {
  consulting: [
    {
      id: "licences",
      label: "Professional licences & certifications",
      note: "Renewals, exam fees and memberships.",
    },
    {
      id: "client-travel",
      label: "Client travel",
      note: "Travel to client sites, including transport and lodging.",
    },
    {
      id: "coworking",
      label: "Coworking or office rent",
      note: "Space used for business.",
    },
    {
      id: "contractors",
      label: "Contract labour",
      note: "Subcontractors and freelancers you pay.",
    },
  ],
  creative: [
    {
      id: "creative-equipment",
      label: "Equipment",
      note: "Cameras, computers, audio and editing gear.",
    },
    {
      id: "stock-assets",
      label: "Stock assets & licences",
      note: "Images, fonts, music and templates.",
    },
    {
      id: "studio",
      label: "Studio or workspace rent",
      note: "Space used for your work.",
    },
    {
      id: "props",
      label: "Props & materials",
      note: "Items bought for client projects.",
    },
  ],
  ecommerce: [
    {
      id: "inventory",
      label: "Inventory (cost of goods sold)",
      note: "The cost of products you sold.",
    },
    {
      id: "shipping-packaging",
      label: "Shipping & packaging",
      note: "Postage, boxes and labels.",
    },
    {
      id: "platform-fees",
      label: "Marketplace & platform fees",
      note: "Listing, selling and subscription fees.",
    },
    {
      id: "storage",
      label: "Storage & warehousing",
      note: "Space used to hold inventory.",
    },
    {
      id: "refunds",
      label: "Refunds & returns",
      note: "Reduce your sales for returned orders.",
    },
  ],
  trades: [
    {
      id: "tools",
      label: "Tools & equipment",
      note: "Hand tools, machinery and repairs.",
    },
    {
      id: "safety-gear",
      label: "Safety gear & work clothing",
      note: "Protective equipment and required uniforms.",
    },
    {
      id: "materials",
      label: "Materials",
      note: "Supplies used on jobs.",
    },
    {
      id: "subcontractors",
      label: "Subcontractors",
      note: "Labour you hire for projects.",
    },
    {
      id: "permits",
      label: "Permits & licences",
      note: "Local and trade licences.",
    },
  ],
  realestate: [
    {
      id: "licence-dues",
      label: "Licence & association dues",
      note: "State licence, MLS and association fees.",
    },
    {
      id: "staging-photos",
      label: "Staging & photography",
      note: "Listing presentation costs.",
    },
    {
      id: "signage",
      label: "Signage & marketing",
      note: "Signs, flyers and online ads.",
    },
    {
      id: "lead-fees",
      label: "Lead-generation fees",
      note: "Paid lead sources and referral costs.",
    },
  ],
  food: [
    {
      id: "ingredients",
      label: "Ingredients & supplies",
      note: "Food and drink cost of goods sold.",
    },
    {
      id: "kitchen-equipment",
      label: "Kitchen equipment",
      note: "Appliances, tools and repairs.",
    },
    {
      id: "food-permits",
      label: "Permits & health licences",
      note: "Food handling and operating licences.",
    },
    {
      id: "food-packaging",
      label: "Packaging",
      note: "Containers, bags and labels.",
    },
    {
      id: "delivery-commissions",
      label: "Delivery platform commissions",
      note: "Fees charged by delivery apps.",
    },
  ],
  health: [
    {
      id: "continuing-ed",
      label: "Continuing education",
      note: "Courses required to keep your licence.",
    },
    {
      id: "liability-insurance",
      label: "Professional liability insurance",
      note: "Malpractice or professional cover.",
    },
    {
      id: "health-supplies",
      label: "Equipment & supplies",
      note: "Items used with clients or patients.",
    },
    {
      id: "licence-renewals",
      label: "Licence renewals",
      note: "State and professional licences.",
    },
    {
      id: "room-rent",
      label: "Treatment room rent",
      note: "Space rented for sessions.",
    },
  ],
  transport: [
    {
      id: "fuel",
      label: "Fuel & vehicle costs",
      note: "Fuel, repairs and maintenance for business use.",
    },
    {
      id: "tolls-parking",
      label: "Tolls & parking",
      note: "Incurred while working.",
    },
    {
      id: "phone-gear",
      label: "Phone mounts & dash cams",
      note: "Accessories used for the work.",
    },
    {
      id: "driver-platform-fees",
      label: "Platform fees",
      note: "Service fees charged by apps you work through.",
    },
  ],
  tech: [
    {
      id: "cloud-hosting",
      label: "Cloud & hosting",
      note: "Servers, storage and infrastructure.",
    },
    {
      id: "dev-tools",
      label: "Software tools",
      note: "Development, testing and design tools.",
    },
    {
      id: "hardware",
      label: "Hardware",
      note: "Computers, monitors and devices.",
    },
    {
      id: "domains",
      label: "Domains & SSL",
      note: "Website and email infrastructure.",
    },
    {
      id: "tech-contractors",
      label: "Contractor payments",
      note: "Freelancers and developers you pay.",
    },
  ],
  other: [],
};
