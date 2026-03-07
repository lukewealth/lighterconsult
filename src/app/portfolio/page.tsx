import { PortfolioUI } from "@/components/pages/PortfolioUI";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proven Results & Business Profile",
  description: "View LiGHTER's successful case studies, from multi-million reach marketing campaigns to 100% success rate visa processing.",
};

export default function PortfolioPage() {
  return <PortfolioUI />;
}
