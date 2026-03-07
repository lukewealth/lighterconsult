import { BlogUI } from "@/components/pages/BlogUI";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & News | Digital Growth & Global Mobility",
  description: "Expert perspectives on scaling e-commerce brands, navigating immigration rules, and mastering social media strategy in 2026.",
};

export default function BlogPage() {
  return <BlogUI />;
}
