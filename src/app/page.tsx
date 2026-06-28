"use client";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Experience from "@/components/experience/Experience";
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/heroSection/HeroSection";
import FeaturedProjects from "@/components/projects/Projects";
import TechStack from "@/components/techStack/TechStack";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        {/* ─── GLOBAL RADIAL BACKGROUND GLOWS ─── */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Top Right Amber/Emerald Premium Ambient Mix */}
          <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-zinc-500/5 rounded-full blur-[140px]" />
          <div className="absolute top-[-5%] right-[-5%] w-[400px] h-[400px] bg-amber-200/1 rounded-full blur-[120px]" />

          {/* Mid-Left Subtle Supporting Ambient Light */}
          <div className="absolute top-[45%] left-[-15%] w-[500px] h-[500px] bg-zinc-500/5 rounded-full blur-[130px]" />

          {/* Bottom Right Deep Base Ambient Light */}
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-amber-200/1 rounded-full blur-[150px]" />
        </div>

        <HeroSection />
        <Experience />
        <TechStack />
        <FeaturedProjects />
        <About />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
