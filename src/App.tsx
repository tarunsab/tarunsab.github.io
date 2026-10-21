import { ThemeProvider } from './context/ThemeContext';
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
    <ThemeProvider>
      <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#141517] text-[#1C1D20] dark:text-white selection:bg-[#455CE9] selection:text-white transition-colors">
        {/* Multilingual Preloader with Hindi, Telugu, English, Gujarati */}
        <Preloader />

        {/* Top Navbar with Light/Dark Theme Switcher */}
        <Navbar />

        <main>
          {/* Hero Section */}
          <Hero />

          {/* Home Intro */}
          <HomeIntro />

          {/* Recent Work with Mouse Follower */}
          <WorkSection />

          {/* Selected Photography */}
          <PhotographySection />

          {/* Interactive World Map & Passport Stamps */}
          <TravelAtlas />

          {/* About Section */}
          <AboutSection />
        </main>

        {/* Dennis Snellenberg Curved Footer */}
        <ContactFooter />
      </div>
    </ThemeProvider>
  );
}

export default App;
