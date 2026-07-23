import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}