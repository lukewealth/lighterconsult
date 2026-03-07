import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LiGHTER CONSULT | Social Media Management & Performance Marketing Nigeria",
  description: "Nigeria's boldest digital marketing agency. We engineer ROI through AI-augmented social media management, content creation, and high-conversion ad campaigns.",
  keywords: ["Social Media Management Nigeria", "Digital Marketing Agency Lagos", "Content Creation Agency", "Paid Ads ROI", "Brand Strategy Africa"],
  openGraph: {
    title: "LiGHTER CONSULT | Amplify. Engage. Grow.",
    description: "Engineering digital dominance for African brands and creators.",
    type: "website",
  }
};

export default function ConsultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
