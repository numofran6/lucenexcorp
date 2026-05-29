import type { Metadata } from "next";
import { Manrope, JetBrains_Mono, Poppins, Montserrat } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["300","400","500","600","700","800"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"], weight: ["400","500","600","700"] });
const poppins = Poppins({ variable: "--font-poppins", subsets: ["latin"], weight: ["400","500","600","700"] });
const montserrat = Montserrat({ variable: "--font-montserrat", subsets: ["latin"], weight: ["400","500","600","700"] });

export const metadata: Metadata = {
  title: "Lucenex Corp — Data, Analytics & AI",
  description: "Advanced Data Intelligence & AI Automation Solutions",
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
