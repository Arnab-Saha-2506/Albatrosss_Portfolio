import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import TerminalSection from "@/components/Terminal";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b1120] text-[#f8fafc] flex flex-col selection:bg-emerald-500/20 selection:text-emerald-400">
      {/* Sticky Command Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Engineering Metrics Section */}
        <Metrics />

        {/* 3. About Section: Behind the APIs (includes Arnab's portrait photo) */}
        <About />

        {/* 4. Experience Section: Accenture */}
        <Experience />

        {/* 5. Skills Section: Clean Technology Ecosystem */}
        <Skills />

        {/* 6. Java Terminal Section: Interactive Shell */}
        <TerminalSection />

        {/* 7. Featured Projects Section: PujaPath & Slotify (with Swagger links) */}
        <Projects />

        {/* 8. Contact Section: System Dispatch & Networks */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
