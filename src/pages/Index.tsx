import React from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import DrivesSection from "@/components/sections/DrivesSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
        <DrivesSection />
        <ContactSection />
      </main>
      
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
