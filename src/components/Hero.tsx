import React, { useState, useEffect } from 'react';
import { Camera, Terminal, Sparkles, ArrowDownRight, Compass, Aperture } from 'lucide-react';
import { useTake } from '../context/TakeContext';

type DisciplineMode = 'all' | 'engineering' | 'photography';

export const Hero: React.FC = () => {
  const { take } = useTake();
  const [mode, setMode] = useState<DisciplineMode>('all');
  const [apertureStop, setApertureStop] = useState<number>(1);
  const fStops = ['f/1.4', 'f/2.8', 'f/4.0', 'f/8.0', 'f/16'];

  const [localTime, setLocalTime] = useState('');
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLocalTime(
        new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Europe/London',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        }).format(now)
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleNextAperture = () => {
    setApertureStop((prev) => (prev + 1) % fStops.length);
  };

  return (
    <header className="relative min-h-[96vh] bg-[#F4F4F6] dark:bg-[#141517] text-[#1C1D20] dark:text-white flex flex-col justify-between pt-28 sm:pt-32 pb-0 overflow-hidden border-b border-[#1C1D20]/10 dark:border-white/10 transition-colors">
      
      {/* ------------------------------------------------------------- */}
      {/* TOP HANGER & STATUS BAR (Dynamic per Take) */}
      {/* ------------------------------------------------------------- */}
      
      {/* Take 1: Classic Dennis Snellenberg Top Right Wireframe Ball */}
      {take === 'dennis' && (
        <div className="absolute top-28 right-8 sm:right-16 z-20 flex items-center gap-4 animate-fadeIn">
          <div className="text-right hidden sm:block">
            <p className="text-xs uppercase tracking-widest text-[#7D8085] dark:text-[#999D9E] font-medium">Located in</p>
            <p className="text-sm font-normal text-[#1C1D20] dark:text-white">London, United Kingdom</p>
          </div>

          <div className="digital-ball cursor-pointer" title="London, UK · 51.5074° N, 0.1278° W">
            <div className="globe">
              <div className="globe-wrap">
                <div className="globe-circle globe-circle-1" />
                <div className="globe-circle globe-circle-2" />
                <div className="globe-circle globe-circle-3" />
                <div className="globe-circle-hor" />
                <div className="globe-circle-middle" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Take 2: Aristide Benoist Editorial Film Bar */}
      {take === 'editorial' && (
        <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full flex items-center justify-between text-xs font-mono text-[#7D8085] dark:text-[#999D9E] z-20 pb-4 border-b border-[#1C1D20]/10 dark:border-white/10 animate-fadeIn">
          <div className="flex items-center gap-3">
            <span className="text-[#1C1D20] dark:text-white font-medium uppercase tracking-widest">
              Vol. 2026 • Issue 04
            </span>
            <span>/</span>
            <span>London Base • 51.5° N</span>
          </div>
          <div className="flex items-center gap-3">
            <span>Leica Q2 • 28mm Summilux</span>
            <span>/</span>
            <span className="text-[#455CE9]">Available for Select Dialogues</span>
          </div>
        </div>
      )}

      {/* Take 3: Horizon Explorer Live Tech & Optics HUD */}
      {take === 'explorer' && (
        <div className="max-w-7xl mx-auto px-6 sm:px-12 w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 z-20 animate-fadeIn">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 dark:bg-white/10 border border-[#1C1D20]/10 dark:border-white/10 text-xs font-mono backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#455CE9] animate-pulse" />
              <span className="text-[#1C1D20] dark:text-white font-medium">London, UK</span>
              <span className="text-[#7D8085] dark:text-[#999D9E]">•</span>
              <span className="text-[#7D8085] dark:text-[#999D9E]">{localTime} BST</span>
            </div>

            <div className="hidden md:flex items-center gap-1.5 text-xs font-mono text-[#7D8085] dark:text-[#999D9E]">
              <Compass className="w-3.5 h-3.5 text-[#455CE9]" />
              <span>51.5074° N, 0.1278° W</span>
            </div>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            <button
              onClick={handleNextAperture}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/80 dark:bg-white/10 hover:bg-[#455CE9] hover:text-white dark:hover:bg-[#455CE9] dark:hover:text-white border border-[#1C1D20]/10 dark:border-white/10 text-xs font-mono transition-all group"
              title="Click to cycle optical aperture"
            >
              <Aperture className="w-3.5 h-3.5 text-[#455CE9] group-hover:text-white transition-colors" />
              <span>Aperture: {fStops[apertureStop]}</span>
              <span className="text-[10px] opacity-60">Tap</span>
            </button>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------- */}
      {/* HERO CENTERPIECE: PORTRAIT (Tarun's Real LinkedIn Photo) */}
      {/* ------------------------------------------------------------- */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 my-4 sm:my-8">
        
        {/* Take 3 Explorer Perspective Switcher */}
        {take === 'explorer' && (
          <div className="mb-6 p-1 rounded-full bg-white/80 dark:bg-white/10 border border-[#1C1D20]/10 dark:border-white/10 backdrop-blur-md flex items-center shadow-sm animate-fadeIn">
            <button
              onClick={() => setMode('all')}
              className={`px-4 py-1.5 rounded-full text-xs transition-all flex items-center gap-1.5 ${
                mode === 'all'
                  ? 'bg-[#1C1D20] dark:bg-white text-white dark:text-[#1C1D20] font-medium shadow-sm'
                  : 'text-[#6A6C70] dark:text-white/70 hover:text-[#1C1D20]'
              }`}
            >
              <Sparkles className="w-3 h-3" />
              <span>Full Spectrum</span>
            </button>

            <button
              onClick={() => setMode('engineering')}
              className={`px-4 py-1.5 rounded-full text-xs transition-all flex items-center gap-1.5 ${
                mode === 'engineering'
                  ? 'bg-[#455CE9] text-white font-medium shadow-sm'
                  : 'text-[#6A6C70] dark:text-white/70 hover:text-[#1C1D20]'
              }`}
            >
              <Terminal className="w-3 h-3" />
              <span>Platform & DevEx</span>
            </button>

            <button
              onClick={() => setMode('photography')}
              className={`px-4 py-1.5 rounded-full text-xs transition-all flex items-center gap-1.5 ${
                mode === 'photography'
                  ? 'bg-[#455CE9] text-white font-medium shadow-sm'
                  : 'text-[#6A6C70] dark:text-white/70 hover:text-[#1C1D20]'
              }`}
            >
              <Camera className="w-3 h-3" />
              <span>Optics & 21 Nations</span>
            </button>
          </div>
        )}

        {/* The Portrait Frame */}
        <div className="relative w-full max-w-[280px] sm:max-w-xs aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-black/10 dark:border-white/15 group bg-white dark:bg-[#1C1D20]">
          <img
            src="./images/tarun-linkedin.jpg"
            alt="Tarun Sabbineni"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "./images/tarun-portrait.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

          {/* Film Stamp for Take 2 Editorial */}
          {take === 'editorial' && (
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono text-white/90 border border-white/15">
              EXP 2026 • TRI-X 400
            </div>
          )}

          {/* Label on Portrait */}
          <div className="absolute bottom-3 left-3 right-3 text-white">
            <div className="text-[10px] font-mono tracking-widest uppercase opacity-80">
              {take === 'editorial' ? 'EDITORIAL CARTOGRAPHY' : 'DEVELOPER EXPERIENCE & OPTICS'}
            </div>
            <div className="text-base font-medium tracking-tight">
              Tarun Sabbineni
            </div>
          </div>
        </div>

        {/* Explorer mode description */}
        {take === 'explorer' && (
          <div className="mt-4 text-center max-w-md animate-fadeIn">
            {mode === 'all' && (
              <p className="text-xs sm:text-sm text-[#7D8085] dark:text-[#999D9E] font-normal">
                Software engineering leadership in Developer Experience at Barclays, balanced by landscape photography across 21 countries.
              </p>
            )}
            {mode === 'engineering' && (
              <p className="text-xs sm:text-sm text-[#455CE9] font-normal">
                Focused on internal developer platforms, self-service golden paths, CI/CD speed, and resilient systems architecture.
              </p>
            )}
            {mode === 'photography' && (
              <p className="text-xs sm:text-sm text-[#455CE9] font-normal">
                Chasing dawn light in the Pennine Alps, brutalist lines in London, and turquoise atolls across the Indian Ocean.
              </p>
            )}
          </div>
        )}

      </div>

      {/* ------------------------------------------------------------- */}
      {/* HERO SUB-INFORMATION ROW */}
      {/* ------------------------------------------------------------- */}
      <div className="relative z-20 max-w-7xl mx-auto px-8 sm:px-16 w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#1C1D20] dark:bg-white text-white dark:text-[#1C1D20] flex items-center justify-center shrink-0 shadow-sm">
            <ArrowDownRight className="w-4 h-4 transform -rotate-90" />
          </div>
          <div>
            <h4 className="text-xl sm:text-2xl font-light text-[#1C1D20] dark:text-white tracking-tight">
              Software Engineering Manager
            </h4>
            <p className="text-sm text-[#7D8085] dark:text-[#999D9E] font-light">
              Developer Experience & Platform at Barclays
            </p>
          </div>
        </div>

        <div className="text-left sm:text-right">
          <h4 className="text-xl sm:text-2xl font-light text-[#1C1D20] dark:text-white tracking-tight">
            Landscape & Travel Photographer
          </h4>
          <p className="text-sm text-[#7D8085] dark:text-[#999D9E] font-light">
            21 Countries Traversed with Full Frame Optics
          </p>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* USER PREFERRED SCROLLING NAME MARQUEE (Contained strictly in frame) */}
      {/* ------------------------------------------------------------- */}
      <div className="w-full overflow-hidden border-t border-[#1C1D20]/15 dark:border-white/15 py-3 sm:py-5 bg-white/70 dark:bg-[#1C1D20]/70 backdrop-blur-sm select-none">
        <div className="name-marquee-inner flex whitespace-nowrap text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight uppercase leading-none text-[#1C1D20] dark:text-white">
          <span className="flex items-center">
            Tarun Sabbineni<span className="mx-6 sm:mx-10 text-[#1C1D20]/30 dark:text-white/30 font-light">—</span>
          </span>
          <span className="flex items-center">
            Tarun Sabbineni<span className="mx-6 sm:mx-10 text-[#1C1D20]/30 dark:text-white/30 font-light">—</span>
          </span>
          <span className="flex items-center">
            Tarun Sabbineni<span className="mx-6 sm:mx-10 text-[#1C1D20]/30 dark:text-white/30 font-light">—</span>
          </span>
          <span className="flex items-center">
            Tarun Sabbineni<span className="mx-6 sm:mx-10 text-[#1C1D20]/30 dark:text-white/30 font-light">—</span>
          </span>
        </div>
      </div>

    </header>
  );
};
