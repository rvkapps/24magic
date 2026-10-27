import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ToolPageView } from "@/components/ToolPageView";
import { getTool, TOOLS } from "@/data/tools";

interface ToolPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return TOOLS.map((tool) => ({ slug: tool.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return {};
  return {
    title: tool.title,
    description: tool.metaDescription,
    openGraph: {
      title: `${tool.title} | 24MAGIC`,
      description: tool.metaDescription,
      url: `https://24magic.in/tools/${tool.slug}`,
      siteName: "24MAGIC",
      images: ["/og-image.jpg"],
    },
    alternates: {
      canonical: `https://24magic.in/tools/${tool.slug}`,
    },
  };
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  if (!getTool(slug)) notFound();
  return <ToolPageView slug={slug} />;
}
