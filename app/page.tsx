import HeroSection from "@/components/home/hero-section";
import AboutSection from "@/components/home/about-section";
import WhatIDoSection from "@/components/home/what-i-do-section";
import FeaturedWorkSection from "@/components/home/featured-work-section";
import SkillsSection from "@/components/home/skills-section";
import EducationSection from "@/components/home/education-section";
import CertificationsSection from "@/components/home/certifications-section";
import ContactSection from "@/components/home/contact-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <WhatIDoSection />
      <FeaturedWorkSection />
      <SkillsSection />
      <EducationSection />
      <CertificationsSection />
      <ContactSection />
    </main>
  );
}



