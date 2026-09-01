import type { Metadata } from "next";
import { HomeView } from "@/components/HomeView";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://24magic.in/",
  },
};

export default function Home() {
  return <HomeView />;
}
