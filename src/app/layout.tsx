import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "LiGHTER DIGITAL | Africa's Boldest Digital Force & Immigration Experts",
    template: "%s | LiGHTER DIGITAL"
  },
  description: "LiGHTER DIGITAL powers brand growth and global mobility. Top-tier digital marketing agency and trusted immigration consultants in Lagos, Nigeria.",
  keywords: ["Digital Marketing Agency Lagos", "Immigration Consultant Nigeria", "Canada Express Entry", "Social Media Management Nigeria", "Business Relocation", "UK Study Visa"],
  openGraph: {
    title: "LiGHTER DIGITAL | Sparking Growth. Building Futures.",
    description: "The multi-vertical powerhouse for digital dominance and seamless international relocation.",
    url: "https://lighter.online",
    siteName: "LiGHTER DIGITAL",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LiGHTER DIGITAL",
    description: "Sparking Growth. Building Futures.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
