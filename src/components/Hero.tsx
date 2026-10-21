import React, { useState } from 'react';
import { Camera, Terminal, Sparkles, ArrowDownRight } from 'lucide-react';
import { useTake } from '../context/TakeContext';

type DisciplineMode = 'all' | 'engineering' | 'photography';

export const Hero: React.FC = () => {
  const { take } = useTake();
  const [mode, setMode] = useState<DisciplineMode>('all');

  return (
    <header className="relative min-h-[96vh] bg-[#F7F5F0] dark:bg-[#141311] text-[#1C1B18] dark:text-[#F3EFE6] flex flex-col justify-between pt-28 sm:pt-32 pb-0 overflow-hidden border-b border-[#1C1B18]/10 dark:border-white/10 transition-colors">
      
      {/* Top Right Hanger with Dennis Snellenberg Spinning Digital Globe */}
      <div className="absolute top-28 right-8 sm:right-16 z-20 flex items-center gap-4">
        <div className="text-right hidden sm:block font-mono text-xs text-[#7D7A74]">
          <p className="uppercase tracking-widest text-[#455CE9] dark:text-[#D97736]">Located in</p>
          <p className="font-normal text-[#1C1B18] dark:text-[#F3EFE6]">London, United Kingdom</p>
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

      {/* Hero Centerpiece: Portrait Card with LinkedIn Display Picture */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 my-4 sm:my-8">
        
        {/* Horizon Take Perspective Switcher */}
        {take === 'horizon' && (
          <div className="mb-6 p-1 rounded-full bg-white/80 dark:bg-white/10 border border-[#1C1B18]/10 dark:border-white/10 backdrop-blur-md flex items-center shadow-sm animate-fadeIn">
            <button
              onClick={() => setMode('all')}
              className={`px-4 py-1.5 rounded-full text-xs transition-all flex items-center gap-1.5 ${
                mode === 'all'
                  ? 'bg-[#1C1B18] dark:bg-white text-white dark:text-[#1C1B18] font-medium shadow-sm'
                  : 'text-[#6A6C70] dark:text-white/70 hover:text-[#1C1B18]'
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
                  : 'text-[#6A6C70] dark:text-white/70 hover:text-[#1C1B18]'
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
                  : 'text-[#6A6C70] dark:text-white/70 hover:text-[#1C1B18]'
              }`}
            >
              <Camera className="w-3 h-3" />
              <span>Optics & 21 Nations</span>
            </button>
          </div>
        )}

        {/* The Portrait Frame */}
        <div className="relative w-full max-w-[280px] sm:max-w-xs aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-black/10 dark:border-white/15 group bg-white dark:bg-[#1D1B18]">
          <img
            src="./images/tarun-linkedin.jpg"
            alt="Tarun Sabbineni"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "./images/tarun-portrait.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

          {/* Label on Portrait */}
          <div className="absolute bottom-3 left-3 right-3 text-white">
            <div className="text-[10px] font-mono tracking-widest uppercase opacity-80">
              DEVELOPER EXPERIENCE & OPTICS
            </div>
            <div className="text-base font-medium tracking-tight">
              Tarun Sabbineni
            </div>
          </div>
        </div>

        {/* Dynamic Context Tagline */}
        <p className="text-xs sm:text-sm text-[#7D7A74] dark:text-[#8F8A80] max-w-md text-center mt-4 font-light">
          Software engineering leadership in Developer Experience at Barclays, balanced by landscape photography across 21 countries.
        </p>

      </div>

      {/* Hero Sub-information Row */}
      <div className="relative z-20 max-w-7xl mx-auto px-8 sm:px-16 w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-8 font-sans">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#1C1B18] dark:bg-white text-white dark:text-[#1C1B18] flex items-center justify-center shrink-0 shadow-sm">
            <ArrowDownRight className="w-4 h-4 transform -rotate-90" />
          </div>
          <div>
            <h4 className="text-xl sm:text-2xl font-light text-[#1C1B18] dark:text-[#F3EFE6] tracking-tight">
              Software Engineering Manager
            </h4>
            <p className="text-sm text-[#7D7A74] dark:text-[#8F8A80] font-light">
              Developer Experience & Platform at Barclays
            </p>
          </div>
        </div>

        <div className="text-left sm:text-right">
          <h4 className="text-xl sm:text-2xl font-light text-[#1C1B18] dark:text-[#F3EFE6] tracking-tight">
            Landscape & Travel Photographer
          </h4>
          <p className="text-sm text-[#7D7A74] dark:text-[#8F8A80] font-light">
            21 Countries Traversed with Full Frame Optics
          </p>
        </div>
      </div>

      {/* Contained Scrolling Name Marquee */}
      <div className="w-full overflow-hidden border-t border-[#1C1B18]/15 dark:border-white/10 py-3 sm:py-5 bg-white/70 dark:bg-[#1D1B18]/70 backdrop-blur-sm select-none">
        <div className="name-marquee-inner flex whitespace-nowrap text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight uppercase leading-none text-[#1C1B18] dark:text-[#F3EFE6]">
          <span className="flex items-center">
            Tarun Sabbineni<span className="mx-6 sm:mx-10 text-[#1C1B18]/30 dark:text-white/30 font-light">—</span>
          </span>
          <span className="flex items-center">
            Tarun Sabbineni<span className="mx-6 sm:mx-10 text-[#1C1B18]/30 dark:text-white/30 font-light">—</span>
          </span>
          <span className="flex items-center">
            Tarun Sabbineni<span className="mx-6 sm:mx-10 text-[#1C1B18]/30 dark:text-white/30 font-light">—</span>
          </span>
          <span className="flex items-center">
            Tarun Sabbineni<span className="mx-6 sm:mx-10 text-[#1C1B18]/30 dark:text-white/30 font-light">—</span>
          </span>
        </div>
      </div>

    </header>
  );
};
