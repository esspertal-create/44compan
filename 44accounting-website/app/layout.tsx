import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forty Four Accounting - Professional Accounting Services",
  description: "Professional accounting services for small and medium-sized enterprises, sole traders, and international companies in Croatia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
