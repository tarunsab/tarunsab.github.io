import React from 'react';
import { ArrowDownRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <header className="relative min-h-[90vh] bg-[#F7F5F0] dark:bg-[#141311] text-[#1C1B18] dark:text-[#F3EFE6] flex flex-col justify-between pt-28 sm:pt-32 pb-0 overflow-hidden border-b border-[#1C1B18]/10 dark:border-white/10 transition-colors">
      
      {/* Top Right Hanger with Dennis Snellenberg Spinning Digital Globe */}
      <div className="absolute top-28 right-8 sm:right-16 z-20 flex items-center gap-4">
        <div className="text-right hidden sm:block font-mono text-xs text-[#7D7A74]">
          <p className="uppercase tracking-widest text-[#455CE9] dark:text-[#D97736]">Located in</p>
          <p className="font-normal text-[#1C1B18] dark:text-[#F3EFE6]">London, United Kingdom</p>
        </div>

        <div className="digital-ball select-none" title="London, UK · 51.5074° N, 0.1278° W">
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
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 my-6 sm:my-10">
        
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
            <div className="text-[10px] font-mono tracking-widest uppercase opacity-80 text-[#D97736]">
              QUANT & RESEARCH PLATFORMS • VANGUARD
            </div>
            <div className="text-base font-medium tracking-tight">
              Tarun Sabbineni
            </div>
          </div>
        </div>

        {/* Dynamic Context Tagline */}
        <p className="text-xs sm:text-sm text-[#7D7A74] dark:text-[#8F8A80] max-w-xl text-center mt-5 font-light leading-relaxed">
          Research and Quantitative Model Platform Engineering Manager at Vanguard (Dec 2022 – Present; 2 years as EM). Previously engineered investment platforms at J.P. Morgan (Asset Management 2021–2022 & 2019 start) following Computer Science at Imperial College London (2:1).
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
              Quant & Research Platform EM
            </h4>
            <p className="text-sm text-[#7D7A74] dark:text-[#8F8A80] font-light">
              Vanguard • Dec 2022 – Present (2 Years as EM)
            </p>
          </div>
        </div>

        <div className="text-left sm:text-right">
          <h4 className="text-xl sm:text-2xl font-light text-[#1C1B18] dark:text-[#F3EFE6] tracking-tight">
            Ex-JPMorgan & Imperial CS (2:1)
          </h4>
          <p className="text-sm text-[#7D7A74] dark:text-[#8F8A80] font-light">
            J.P. Morgan Asset Management (2021–2022) & 2019 Start
          </p>
        </div>
      </div>

      {/* Static Clean Sub-Border Bar (No Scrolling Marquee) */}
      <div className="w-full border-t border-[#1C1B18]/15 dark:border-white/10 py-5 sm:py-6 bg-white/40 dark:bg-[#1D1B18]/40 backdrop-blur-sm select-none">
        <div className="max-w-7xl mx-auto px-8 sm:px-16 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span className="text-xl sm:text-2xl font-light tracking-tight uppercase text-[#1C1B18] dark:text-[#F3EFE6]">
            Tarun Sabbineni
          </span>
          <span className="text-xs font-mono text-[#7D7A74] tracking-wider uppercase">
            Research & Quantitative Model Platforms • Vanguard London
          </span>
        </div>
      </div>

    </header>
  );
};
