import React from 'react';
import { Hero } from '../components/Hero';
import { HomeIntro } from '../components/HomeIntro';
import { InteractiveCV } from '../components/InteractiveCV';
import { WorkSection } from '../components/WorkSection';
import { PhotographySection } from '../components/PhotographySection';
import { TravelAtlas } from '../components/TravelAtlas';
import { AboutSection } from '../components/AboutSection';
import { ContactFooter } from '../components/ContactFooter';

export const SepiaDennisTake: React.FC = () => {
  return (
    <div className="bg-[#F7F5F0] text-[#1C1B18] min-h-screen selection:bg-[#1C1B18] selection:text-[#F7F5F0] animate-fadeIn">
      {/* Exact Dennis Snellenberg Hero with Wireframe Globe & Contained Name Marquee */}
      <Hero />

      {/* Editorial Home Intro Statement */}
      <HomeIntro />

      {/* Interactive CV & Career Scrubber (Vanguard, JPMorgan, Imperial) */}
      <InteractiveCV />

      {/* Dennis Snellenberg Full-Width Work Rows with Mouse Follower */}
      <WorkSection />

      {/* Clean Editorial Photography Grid with Circular Hover View Badge */}
      <PhotographySection />

      {/* Travel Atlas (Defaults to 3D Celestial Dot-Matrix Globe) */}
      <TravelAtlas />

      {/* About & Craft */}
      <AboutSection />

      {/* Dennis Snellenberg Organic Curved Scoop Footer */}
      <ContactFooter />
    </div>
  );
};
