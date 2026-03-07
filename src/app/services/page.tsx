import { ServicesUI } from "@/components/pages/ServicesUI";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Full-Stack Solutions",
  description: "Explore LiGHTER's range of professional services, from AI-augmented digital marketing at CONSULT to expert global relocation at TRAVEL.",
};

export default function ServicesPage() {
  return <ServicesUI />;
}
