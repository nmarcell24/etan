import type { Metadata } from "next";
import { Fugaz_One, Work_Sans } from "next/font/google";
import "./globals.css";

// Vercel analytics
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";


const workSans = Work_Sans({
  subsets: ["latin"],
  weight: "400",
});

const fugazOne = Fugaz_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-fugaz-one",
});

export const metadata: Metadata = {
  title: "E-tan",
  description: "E-tan - Fenntartható energiaforrások és környezetvédelem",
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
    <html lang="hu">
      <body
        className={`${workSans.className} ${fugazOne.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
