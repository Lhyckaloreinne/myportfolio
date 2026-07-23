import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import Navbar from "@/components/layout/navbar";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lhycka Loreinne Sulit | Portfolio",
  description:
    "Personal portfolio showcasing UI/UX Design, Front-End Development, Data Analytics, Graphic Design, and Executive Support & Digital Operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${playfairDisplay.variable} min-h-screen flex flex-col bg-background font-sans text-foreground antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}