import type { Metadata } from "next";
import { Manrope, JetBrains_Mono, Poppins, Montserrat } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["300","400","500","600","700","800"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"], weight: ["400","500","600","700"] });
const poppins = Poppins({ variable: "--font-poppins", subsets: ["latin"], weight: ["400","500","600","700"] });
const montserrat = Montserrat({ variable: "--font-montserrat", subsets: ["latin"], weight: ["400","500","600","700"] });

const SITE_URL = "https://lucenexcorp.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Lucenex Corp — Data Engineering, Analytics & AI",
    template: "%s | Lucenex Corp",
  },
  description:
    "Lucenex Corp delivers data engineering, analytics, AI automation, and cloud architecture solutions that help businesses move faster and build with confidence.",
  keywords: [
    "data engineering",
    "AI automation",
    "cloud architecture",
    "analytics",
    "business intelligence",
    "data strategy",
    "machine learning",
    "data consulting",
    "ETL pipelines",
    "cloud engineering",
  ],
  authors: [{ name: "Lucenex Corp", url: SITE_URL }],
  creator: "Lucenex Corp",
  publisher: "Lucenex Corp",
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Lucenex Corp",
    title: "Lucenex Corp — Data Engineering, Analytics & AI",
    description:
      "Data engineering, analytics, AI automation, and cloud architecture solutions that help businesses move faster and build with confidence.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Lucenex Corp — Data Engineering, Analytics & AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucenex Corp — Data Engineering, Analytics & AI",
    description:
      "Data engineering, analytics, AI automation, and cloud architecture solutions.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${jetbrains.variable} ${poppins.variable} ${montserrat.variable}`}>
      <body style={{ fontFamily: "var(--font-manrope), 'Manrope', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
