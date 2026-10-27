import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Bookkeeping, document management and administrative support, handled end to end so your business runs smoothly.",
  openGraph: {
    title: "Services | 24MAGIC",
    description:
      "Bookkeeping, document management and administrative support, handled end to end so your business runs smoothly.",
    url: "https://24magic.in/services",
    siteName: "24MAGIC",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "24MAGIC — Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | 24MAGIC",
    description:
      "Bookkeeping, document management and administrative support, handled end to end so your business runs smoothly.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://24magic.in/services",
  },
};

export default function ServicesLayout({ children }: { children: ReactNode }) {
  return children;
}
