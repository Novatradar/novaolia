import type { Metadata } from "next";
import { Syne } from "next/font/google";
import "./globals.css";
import TawkLayout from "./document";
import GoogleAnalytics from "./GoogleAnalytics";

export const metadata: Metadata = {
  title: "Novaolia Sunflower Oils | Premium Sunflower Oil from Ukraine",
  description:
    "Novaolia delivers premium sunflower oil and sunflower-based products from Ukraine—the global leader in sunflower production. Certified ISO 22000, HACCP, HALAL, and Organic, our oils meet the highest international standards.",
  keywords: [
    "Novaolia",
    "sunflower oil",
    "premium sunflower oil",
    "Ukrainian sunflower oil",
    "organic sunflower oil",
    "sunflower-based products",
    "ISO 22000 certified oil",
    "HACCP certified oil",
    "HALAL certified oil",
    "sustainable sunflower oil",
  ],
  openGraph: {
    title: "Novaolia Sunflower Oils | Premium Sunflower Oil from Ukraine",
    description:
      "Premium sunflower oil and sunflower-based products from Ukraine. ISO 22000, HACCP, HALAL, and Organic certified, delivering global quality and purity.",
    url: "https://www.novaolia.com",
    type: "website",
    images: [
      {
        url: "/main.png",
        width: 1200,
        height: 630,
        alt: "Novaolia Premium Sunflower Oil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Novaolia Sunflower Oils | Premium Sunflower Oil from Ukraine",
    description:
      "Premium sunflower oil and sunflower-based products from Ukraine. ISO 22000, HACCP, HALAL, and Organic certified.",
    images: ["/main.png"],
  },
  metadataBase: new URL("https://www.novaolia.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

const syneFont = Syne({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syneFont.variable}`}>
        <TawkLayout />
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
