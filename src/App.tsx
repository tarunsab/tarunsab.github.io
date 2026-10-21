import { ThemeProvider } from './context/ThemeContext';
import { TakeProvider, useTake } from './context/TakeContext';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { DennisTake } from './views/DennisTake';
import { LuxuryTake } from './views/LuxuryTake';
import { ExhibitionTake } from './views/ExhibitionTake';
import { TakeSwitcher } from './components/TakeSwitcher';

function AppContent() {
  const { take } = useTake();

  return (
    <div className="min-h-screen relative pb-16">
      {/* Multilingual Preloader with Hindi, Telugu, English, Gujarati */}
      <Preloader />

      {/* Take 1: Dennis Snellenberg Purity (Classic Dennis layout with Navbar) */}
      {take === 'dennis' && (
        <>
          <Navbar />
          <DennisTake />
        </>
      )}

      {/* Take 2: Oliur / Dark Luxury Bento (Executive Atelier) */}
      {take === 'editorial' && (
        <>
          <Navbar />
          <LuxuryTake />
        </>
      )}

      {/* Take 3: Aristide Benoist Exhibition (Full-Screen Chapter Storyboard) */}
      {take === 'explorer' && (
        <ExhibitionTake />
      )}

      {/* Floating 3 Distinct Takes Switcher */}
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
