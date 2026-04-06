import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// We'll use a standard system font stack instead of next/font to bypass environment installation issues
const fontVariable = "--font-inter";

export const metadata: Metadata = {
  title: "Abdallah Ahmed — Graphic Designer",
  description:
    "Portfolio of Abdallah Ahmed, a creative graphic designer specializing in branding, digital design, and visual storytelling.",
  keywords: ["graphic designer", "portfolio", "branding", "design", "Abdallah Ahmed"],
  openGraph: {
    title: "Abdallah Ahmed — Graphic Designer",
    description:
      "Portfolio of Abdallah Ahmed, a creative graphic designer specializing in branding, digital design, and visual storytelling.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontVariable} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
