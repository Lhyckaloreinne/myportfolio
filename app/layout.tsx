import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
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
        className={`${inter.variable} ${cormorantGaramond.variable} min-h-screen flex flex-col bg-background font-sans text-foreground antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}