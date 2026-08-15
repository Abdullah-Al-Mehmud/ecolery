import type { Metadata } from "next";
import { Fraunces, Manrope, Sora } from "next/font/google";
import { Navbar } from "@/components/shared/Navbar";
import { SiteFooter } from "@/components/sections/SiteFooter";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Ecolery · Compostable tableware",
  description:
    "Ecolery makes cork-pressed, fully compostable cups and cutlery that return to the earth after use.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${manrope.variable} ${fraunces.variable}`}>
      <body className="font-body antialiased">
        <Navbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
