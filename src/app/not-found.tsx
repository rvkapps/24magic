import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 | Page Not Found",
  description: "The page you are looking for does not exist.",
  openGraph: {
    title: "404 | Page Not Found | 24MAGIC",
    description: "The page you are looking for does not exist.",
    url: "https://24magic.in",
    siteName: "24MAGIC",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "24MAGIC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "404 | Page Not Found | 24MAGIC",
    description: "The page you are looking for does not exist.",
    images: ["/og-image.jpg"],
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff8f8] text-[#1f1a1b]">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-[#830036] mb-4">404</h1>
        <h2 className="text-2xl font-medium text-[#1f1a1b] mb-6">
          Page Not Found
        </h2>
        <p className="text-base text-[#6b5c5d] mb-8 max-w-lg mx-auto">
          The page you are looking for does not exist or has been removed.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#830036] text-white font-medium text-sm hover:bg-[#a61d4c] transition-colors"
            aria-label="Go to homepage"
          >
            <span className="material-symbols-outlined">home</span>
            Homepage
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#830036] text-[#830036] font-medium text-sm hover:bg-[#830036]/10 transition-colors"
            aria-label="Contact us"
          >
            <span className="material-symbols-outlined">contact_mail</span>
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
