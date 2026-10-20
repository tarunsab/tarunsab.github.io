import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HomeIntro } from './components/HomeIntro';
import { WorkSection } from './components/WorkSection';
import { PhotographySection } from './components/PhotographySection';
import { TravelAtlas } from './components/TravelAtlas';
import { AboutSection } from './components/AboutSection';
import { ContactFooter } from './components/ContactFooter';

export function App() {
  return (
    <div className="min-h-screen bg-white text-[#1C1D20] selection:bg-[#455CE9] selection:text-white">
      {/* Dennis Snellenberg Exact Signature Preloader */}
      <Preloader />

      {/* Top Navbar & Floating Magnetic Menu */}
      <Navbar />

      <main>
        {/* Dennis Snellenberg Dark Hero */}
        <Hero />

        {/* Dennis Snellenberg White Home Intro */}
        <HomeIntro />

        {/* Dennis Snellenberg Recent Work with Floating Mouse Follower */}
        <WorkSection />

        {/* Selected Photography */}
        <PhotographySection />

        {/* Fun & Interactive 3D Canvas Travel Atlas */}
        <TravelAtlas />

        {/* Authentic About & Interests */}
        <AboutSection />
      </main>

      {/* Dennis Snellenberg Curved Footer */}
      <ContactFooter />
    </div>
  );
}

export default App;
