import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LiGHTER TRAVEL | Canada, Australia & UK Immigration Consultants Nigeria",
  description: "Relocate legally and safely. Trusted immigration experts for Canada Express Entry, Australia Skilled Visas, and UK Study Permits. 100% legal process.",
  keywords: ["Canada Immigration Nigeria", "Relocate to Australia", "UK Study Visa Lagos", "Visa Consultant Lekki", "International Relocation Experts"],
  openGraph: {
    title: "LiGHTER TRAVEL | Your Journey To The World Starts Here.",
    description: "Personalized immigration and relocation solutions for ambitious Nigerians.",
    type: "website",
  }
};

export default function TravelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
