import React from 'react';

export const Hero: React.FC = () => {
  return (
    <header className="relative min-h-[96vh] bg-[#F4F4F6] text-[#1C1D20] flex flex-col justify-between pt-28 sm:pt-32 pb-0 overflow-hidden border-b border-[#1C1D20]/10">
      {/* Top Right Hanger with Dennis Snellenberg's exact spinning digital globe */}
      <div className="absolute top-28 right-8 sm:right-16 z-20 flex items-center gap-4">
        <div className="text-right hidden sm:block">
          <p className="text-xs uppercase tracking-widest text-[#7D8085] font-medium">Located in</p>
          <p className="text-sm font-normal text-[#1C1D20]">London, United Kingdom</p>
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

      {/* Hero Center Personal Image: Tarun's Authentic LinkedIn Photo */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 my-4 sm:my-8">
        <div className="relative w-full max-w-[280px] sm:max-w-sm aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-black/10 group bg-white">
          <img
            src="./images/tarun-linkedin.jpg"
            alt="Tarun Sabbineni"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "./images/tarun-portrait.jpg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Hero Sub-information Row */}
      <div className="relative z-20 max-w-7xl mx-auto px-8 sm:px-16 w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-8">
        <div className="flex items-center gap-3">
          {/* Dennis signature up-right arrow */}
          <div className="w-8 h-8 rounded-full border border-[#1C1D20]/25 flex items-center justify-center shrink-0">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.77 0H12V9.23M12 0L0 12" stroke="#1C1D20" strokeWidth="1.75" />
            </svg>
          </div>
          <div>
            <h4 className="text-xl sm:text-2xl font-light text-[#1C1D20] tracking-tight">
              Software Engineering Manager
            </h4>
            <p className="text-sm text-[#7D8085] font-light">
              Developer Experience & Platform at Barclays
            </p>
          </div>
        </div>

        <div className="text-left sm:text-right">
          <h4 className="text-xl sm:text-2xl font-light text-[#1C1D20] tracking-tight">
            Landscape & Travel Photographer
          </h4>
          <p className="text-sm text-[#7D8085] font-light">
            21 Countries Traversed with Medium Format Optics
          </p>
        </div>
      </div>

      {/* Dennis Snellenberg Signature Scrolling Name Marquee (Contained within frame) */}
      <div className="w-full overflow-hidden border-t border-[#1C1D20]/15 py-3 sm:py-5 bg-white/70 backdrop-blur-sm select-none">
        <div className="name-marquee-inner flex whitespace-nowrap text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight uppercase leading-none text-[#1C1D20]">
          <span className="flex items-center">
            Tarun Sabbineni<span className="mx-6 sm:mx-10 text-[#1C1D20]/30 font-light">—</span>
          </span>
          <span className="flex items-center">
            Tarun Sabbineni<span className="mx-6 sm:mx-10 text-[#1C1D20]/30 font-light">—</span>
          </span>
          <span className="flex items-center">
            Tarun Sabbineni<span className="mx-6 sm:mx-10 text-[#1C1D20]/30 font-light">—</span>
          </span>
          <span className="flex items-center">
            Tarun Sabbineni<span className="mx-6 sm:mx-10 text-[#1C1D20]/30 font-light">—</span>
          </span>
        </div>
      </div>
    </header>
  );
};
