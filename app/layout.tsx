import type { Metadata } from "next";
import { Inter, Cormorant_Garamond, Italiana } from "next/font/google";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/theme/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const italiana = Italiana({
  variable: "--font-italiana",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Lhycka Loreinne Sulit | Luxury Portfolio & Digital Operations",
  description:
    "Vogue-inspired personal portfolio showcasing UI/UX Design, Front-End Engineering, Data Analytics, Graphic Design, and Digital Operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    if (stored === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
  } catch (e) {}
})();
`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${cormorantGaramond.variable} ${italiana.variable} min-h-screen flex flex-col bg-background font-sans text-foreground antialiased selection:bg-gold/20 selection:text-foreground`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}