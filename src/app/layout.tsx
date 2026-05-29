import type { Metadata } from "next";
import { Manrope, Poppins } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lucenex Corp — Data, Analytics & AI",
  description: "Advanced Data Intelligence & AI Automation Solutions. We build data platforms, analytics dashboards, and AI-powered software.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${poppins.variable}`}>
      <body className="min-h-screen antialiased" style={{ fontFamily: "var(--font-manrope), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
