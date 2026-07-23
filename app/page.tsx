import HeroSection from "@/components/home/hero-section";
import WhatIDoSection from "@/components/home/what-i-do-section";
import FeaturedWorkSection from "@/components/home/featured-work-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhatIDoSection />
      <FeaturedWorkSection />
    </main>
  );
}



