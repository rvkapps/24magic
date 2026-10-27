import type { Metadata } from "next";
import { ToolsHubView } from "@/components/ToolsHubView";

export const metadata: Metadata = {
  title: "Free Business Tools",
  description:
    "Free calculators for US small businesses: quarterly tax, self-employment tax, profit margin, COGS, EBITDA, debt to equity, and eBay and Etsy profit.",
  openGraph: {
    title: "Free Business Tools | 24MAGIC",
    description:
      "Free calculators for US small businesses: quarterly tax, self-employment tax, profit margin, COGS, EBITDA, debt to equity, and eBay and Etsy profit.",
    url: "https://24magic.in/tools",
    siteName: "24MAGIC",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://24magic.in/tools",
  },
};

export default function ToolsPage() {
  return <ToolsHubView />;
}
