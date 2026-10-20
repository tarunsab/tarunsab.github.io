import React from 'react';

export const Hero: React.FC = () => {
  return (
    <header className="relative min-h-screen bg-[#1C1D20] text-white flex flex-col justify-between pt-28 pb-16 overflow-hidden">
      {/* Top Right Hanger with Dennis Snellenberg's exact spinning digital globe */}
      <div className="absolute top-28 right-8 sm:right-16 z-20 flex items-center gap-4">
        <div className="text-right hidden sm:block">
          <p className="text-xs uppercase tracking-widest text-[#999D9E] font-medium">Located in</p>
          <p className="text-sm font-normal text-white">London, United Kingdom</p>
        </div>

        {/* The Dennis Snellenberg Spinning Digital Wireframe Globe */}
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

      {/* Hero Center Personal Image (Tarun's authentic portrait) */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6">
        <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border border-white/10 group bg-[#141517]">
          <img
            src="./images/tarun-portrait.jpg"
            alt="Tarun Sabbineni"
            className="w-full h-full object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-700 opacity-95"
            onError={(e) => {
              // Fallback to direct github avatar if local relative path needs absolute
              (e.currentTarget as HTMLImageElement).src = "https://avatars.githubusercontent.com/u/15095734?v=4";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1D20]/60 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Hero Bottom Information & Subtitle */}
      <div className="relative z-20 max-w-7xl mx-auto px-8 sm:px-16 w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-8">
        <div className="flex items-center gap-3">
          {/* Dennis signature up-right arrow */}
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.77 0H12V9.23M12 0L0 12" stroke="white" strokeWidth="1.75" />
            </svg>
          </div>
          <div>
            <h4 className="text-xl sm:text-2xl font-light text-white tracking-tight">
              Software Engineering Manager
            </h4>
            <p className="text-sm text-[#999D9E] font-light">
              Developer Experience & Platform at Barclays
            </p>
          </div>
        </div>

        <div className="text-left sm:text-right">
          <h4 className="text-xl sm:text-2xl font-light text-white tracking-tight">
            Landscape & Travel Photographer
          </h4>
          <p className="text-sm text-[#999D9E] font-light">
            21 Countries Traversed with Medium Format Optics
          </p>
        </div>
      </div>

      {/* Dennis Snellenberg Signature Big Name Marquee Ticker */}
      <div className="name-marquee-container w-full border-t border-white/10 pt-4 overflow-hidden select-none">
        <div className="name-marquee-inner flex whitespace-nowrap text-[clamp(4.5rem,13vw,12rem)] font-medium leading-[0.85] uppercase tracking-tight text-white">
          <span className="flex items-center">
            Tarun Sabbineni<span className="mx-6 sm:mx-10 text-white/40 font-light">—</span>
          </span>
          <span className="flex items-center">
            Tarun Sabbineni<span className="mx-6 sm:mx-10 text-white/40 font-light">—</span>
          </span>
          <span className="flex items-center">
            Tarun Sabbineni<span className="mx-6 sm:mx-10 text-white/40 font-light">—</span>
          </span>
          <span className="flex items-center">
            Tarun Sabbineni<span className="mx-6 sm:mx-10 text-white/40 font-light">—</span>
          </span>
        </div>
      </div>
    </header>
  );
};
