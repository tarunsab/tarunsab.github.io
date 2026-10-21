import { ThemeProvider } from './context/ThemeContext';
import { TakeProvider, useTake } from './context/TakeContext';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { SepiaDennisTake } from './views/SepiaDennisTake';
import { MonocleTake } from './views/MonocleTake';
import { DarkroomTake } from './views/DarkroomTake';
import { HorizonAtelierTake } from './views/HorizonAtelierTake';
import { TakeSwitcher } from './components/TakeSwitcher';

function AppContent() {
  const { take } = useTake();

  return (
    <div className="min-h-screen relative pb-16">
      {/* Multilingual Preloader with Hindi, Telugu, English, Gujarati */}
      <Preloader />

      {/* Top Navbar with Light/Dark Switcher */}
      <Navbar />

      {/* Option 1: Sepia Dennis (Pure Dennis Motion in Warm Sepia) */}
      {take === 'sepia-dennis' && <SepiaDennisTake />}

      {/* Option 2: Editorial Monocle (Broadsheet Plates) */}
      {take === 'monocle' && <MonocleTake />}

      {/* Option 3: Kinetic Darkroom (Warm Amber Sepia Safelight) */}
      {take === 'darkroom' && <DarkroomTake />}

      {/* Option 4: Horizon Atelier (Full Spectrum Synthesis) */}
      {take === 'horizon' && <HorizonAtelierTake />}

      {/* Floating 4 Takes Switcher */}
      <TakeSwitcher />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <TakeProvider>
        <AppContent />
      </TakeProvider>
    </ThemeProvider>
  );
}

export default App;
