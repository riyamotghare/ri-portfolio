import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const siteUrl = "https://riyamotghare.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Riya Motghare — Data Science & Machine Learning",
  description:
    "Portfolio of Riya Motghare, a Data Science student Portfolio of Riya Motghare, a Data Science student exploring Machine Learning, Data Analytics, and Business Analytics — turning data into insights, intelligent solutions, and data-driven decisions.",
  keywords: [
    "Riya Motghare",
    "Data Science Portfolio",
    "Data Analytics",
    "Business Analyst",
    "Machine Learning Engineer",
    "Computer Vision",
    "ML Projects",
    "Deep Learning",
  ],
  authors: [{ name: "Riya Motghare" }],
  openGraph: {
    title: "Riya Motghare — Data Science & Machine Learning",
    description:
      "Portfolio of Riya Motghare, a Data Science studentturning data into meaningful insights and smarter decisions.",
    url: siteUrl,
    siteName: "Riya Motghare",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Riya Motghare — Data Science & Machine Learning",
    description:
      "Portfolio of Riya Motghare, a Data Science student building end-to-end ML systems.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}>
      <body className="bg-background text-foreground antialiased">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
