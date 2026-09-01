import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://24magic.in"),
  title: {
    default: "24MAGIC | Bookkeeping & Financial Precisions",
    template: "%s | 24MAGIC",
  },
  description:
    "Build the life and business of your dreams. We transform complex financial data into clear, actionable insights with minimal effort on your part.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "24MAGIC",
    title: "24MAGIC | Bookkeeping & Financial Precisions",
    description:
      "Build the life and business of your dreams. We transform complex financial data into clear, actionable insights with minimal effort on your part.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "24MAGIC — Bookkeeping & Business Support Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "24MAGIC | Bookkeeping & Financial Precisions",
    description:
      "Build the life and business of your dreams. We transform complex financial data into clear, actionable insights with minimal effort on your part.",
    images: ["/og-image.jpg"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "24MAGIC",
  url: "https://24magic.in",
  logo: "https://24magic.in/logo.png",
  description:
    "Build the life and business of your dreams. We transform complex financial data into clear, actionable insights with minimal effort on your part.",
  email: "contact@24magic.in",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <required to map the json>
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#fff8f8] text-[#1f1a1b] font-['Plus_Jakarta_Sans',sans-serif]">
        {children}
      </body>
    </html>
  );
}
