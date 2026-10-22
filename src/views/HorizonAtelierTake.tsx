import React from 'react';
import { Hero } from '../components/Hero';
import { HomeIntro } from '../components/HomeIntro';
import { InteractiveCV } from '../components/InteractiveCV';
import { WorkSection } from '../components/WorkSection';
import { PhotographySection } from '../components/PhotographySection';
import { TravelAtlas } from '../components/TravelAtlas';
import { AboutSection } from '../components/AboutSection';
import { ContactFooter } from '../components/ContactFooter';

export const HorizonAtelierTake: React.FC = () => {
  return (
    <div className="bg-[#FAF8F5] text-[#1C1B18] min-h-screen selection:bg-[#455CE9] selection:text-white animate-fadeIn font-sans">
      {/* Hero with Dual Discipline Switcher & Contained Name Marquee */}
      <Hero />

      {/* Editorial Home Intro Statement */}
      <HomeIntro />

      {/* Interactive CV & Career Record */}
      <InteractiveCV />

      {/* Work Section with the 4 Engineering Philosophy Pillars & GitHub Rows */}
      <WorkSection />

      {/* Selected Photography Grid with Lightbox */}
      <PhotographySection />

      {/* Travel Atlas (Panoramic Whole World + 3D Globe Multi-Mode) */}
      <TravelAtlas />

      {/* Personal Passions: Tennis, Keyboards, Coffee, Travel */}
      <AboutSection />

      {/* Dennis Snellenberg Organic Curved Scoop Footer */}
      <ContactFooter />
    </div>
  );
};
