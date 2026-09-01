import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import KatanaStorySection from './components/KatanaStorySection';
import BambooSection from './components/BambooSection';
import PrinciplesSection from './components/PrinciplesSection';
import BentoGridSection from './components/BentoGridSection';
import Footer from './components/Footer';

export default function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Switches the sticky Navbar between dark and light themes as the user leaves the katana pinned scroll
      const threshold = window.innerHeight * 3.5;
      if (window.scrollY > threshold) {
        setIsLightMode(true);
      } else {
        setIsLightMode(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#09090B]">
      {/* Dynamic Adaptive Sticky Navigation */}
      <Navbar isLight={isLightMode} />

      <main>
        {/* 1. Hero Entry */}
        <HeroSection />

        {/* 2. Pinned Katana Multi-Stage Story */}
        <KatanaStorySection />

        {/* 3. Bamboo & Bonsai Discipline Section */}
        <BambooSection />

        {/* 4. Core Principles Grid */}
        <PrinciplesSection />

        {/* 5. Interactive Bento Matrix & Target Audience */}
        <BentoGridSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}