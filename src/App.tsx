import { useState, useEffect, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WorkSection } from './components/WorkSection';
import { PhotographySection } from './components/PhotographySection';
import { TravelAtlas } from './components/TravelAtlas';
import { BeyondWorkSection } from './components/BeyondWorkSection';
import { ContactFooter } from './components/ContactFooter';

export function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const ambientIntervalRef = useRef<number | null>(null);

  // Active section intersection observer
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['work', 'photography', 'atlas', 'beyond', 'contact'];
      const scrollPos = window.scrollY + 250;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            return;
          }
        }
      }
      if (window.scrollY < 400) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ambient procedural piano chords generator for luxury experience
  const toggleAudio = () => {
    if (isAudioPlaying) {
      if (ambientIntervalRef.current) {
        window.clearInterval(ambientIntervalRef.current);
        ambientIntervalRef.current = null;
      }
      setIsAudioPlaying(false);
      return;
    }

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;

      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx();
      }

      if (audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }

      setIsAudioPlaying(true);

      const playChord = (chordNotes: number[]) => {
        if (!audioContextRef.current) return;
        const ctx = audioContextRef.current;
        const now = ctx.currentTime;

        chordNotes.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now + idx * 0.08);

          // Soft ambient piano envelope
          gain.gain.setValueAtTime(0.001, now + idx * 0.08);
          gain.gain.exponentialRampToValueAtTime(0.12, now + idx * 0.08 + 0.05);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.08 + 3.8);

          osc.connect(gain);
          gain.connect(ctx.destination);

          osc.start(now + idx * 0.08);
          osc.stop(now + idx * 0.08 + 4.0);
        });
      };

      // Gentle ambient chords: Eb Major9 -> Ab Major7 -> Cm7 -> Bb
      const chords = [
        [311.13, 392.00, 466.16, 587.33], // Eb9
        [207.65, 311.13, 415.30, 523.25], // AbM7
        [261.63, 311.13, 392.00, 466.16], // Cm7
        [233.08, 349.23, 466.16, 587.33], // Bb
      ];

      let chordIndex = 0;
      playChord(chords[chordIndex]);

      ambientIntervalRef.current = window.setInterval(() => {
        chordIndex = (chordIndex + 1) % chords.length;
        playChord(chords[chordIndex]);
      }, 4500);

    } catch (err) {
      console.warn('Web Audio Ambient error:', err);
      setIsAudioPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      if (ambientIntervalRef.current) {
        clearInterval(ambientIntervalRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0E0F12] text-[#F8F7F4] flex flex-col font-sans selection:bg-[#C5A880] selection:text-[#0E0F12]">
      {/* Top Navbar */}
      <Navbar
        activeSection={activeSection}
        isAudioPlaying={isAudioPlaying}
        toggleAudio={toggleAudio}
      />

      {/* Main Content */}
      <main className="flex-1">
        <Hero />
        <WorkSection />
        <PhotographySection />
        <TravelAtlas />
        <BeyondWorkSection />
      </main>

      {/* Footer */}
      <ContactFooter />
    </div>
  );
}

export default App;
