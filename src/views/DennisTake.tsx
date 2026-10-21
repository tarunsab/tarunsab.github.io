import React from 'react';
import { Hero } from '../components/Hero';
import { HomeIntro } from '../components/HomeIntro';
import { WorkSection } from '../components/WorkSection';
import { PhotographySection } from '../components/PhotographySection';
import { TravelAtlas } from '../components/TravelAtlas';
import { AboutSection } from '../components/AboutSection';
import { ContactFooter } from '../components/ContactFooter';

export const DennisTake: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section with Dennis Wireframe Globe & Contained Name Marquee */}
      <Hero />

      {/* Editorial Home Intro Statement */}
      <HomeIntro />

      {/* Dennis Snellenberg Full-Width Work Rows with Mouse Follower */}
      <WorkSection />

      {/* Clean Editorial Photography Grid with Circular Hover View Badge */}
      <PhotographySection />

      {/* Travel Atlas (Defaults to 3D Celestial Globe) */}
      <TravelAtlas />

      {/* About & Craft */}
      <AboutSection />

      {/* Dennis Snellenberg Organic Curved Scoop Footer */}
      <ContactFooter />
    </div>
  );
};
