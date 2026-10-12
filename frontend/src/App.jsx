import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import CurrentlyLearning from './components/CurrentlyLearning';
import Projects from './components/Projects';
import Experience from './components/Experience';
import CreativeWork from './components/CreativeWork';
import EventsAndAchievements from './components/EventsAndAchievements';
import DeveloperSection from './components/DeveloperSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  useScrollReveal();

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-[#f5f6f8] selection:bg-[#4fd1ff]/20 selection:text-[#4fd1ff]">
      {/* Framer-inspired ambient atmospheric glow layers */}
      <div className="ambient-glow" />
      <div className="viewport-vignette" />

      {/* Main navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main content body */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Education />
        <Skills />
        <CurrentlyLearning />
        <Projects />
        <Experience />
        <CreativeWork />
        <EventsAndAchievements />
        <DeveloperSection />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Resume View/Download Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
}
