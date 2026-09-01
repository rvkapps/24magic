"use client";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Error | Something Went Wrong",
  description: "An unexpected error occurred. Please try again.",
  openGraph: {
    title: "Error | 24MAGIC",
    description: "An unexpected error occurred. Please try again.",
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
    title: "Error | 24MAGIC",
    description: "An unexpected error occurred. Please try again.",
    images: ["/og-image.jpg"],
  },
};

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#fff8f8] text-[#1f1a1b]">
      <div className="text-center max-w-lg">
        <h1 className="text-4xl font-extrabold text-[#830036] mb-4">Error</h1>
        <p className="text-base text-[#6b5c5d] mb-8">
          An unexpected error occurred.
        </p>
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#830036] text-white font-medium text-sm hover:bg-[#a61d4c] transition-colors shadow-md shadow-[#830036]/20"
          aria-label="Retry"
        >
          <span className="material-symbols-outlined">refresh</span>
          Retry
        </button>
      </div>
    </div>
  );
}
