import React from 'react';
import { ArrowDownRight, Camera, Terminal, Globe2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-12 overflow-hidden bg-noise">
      {/* Background ambient lighting accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#C5A880]/10 via-[#E8E1D5]/5 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-2/3 right-10 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] pointer-events-none rounded-full" />

      {/* Main Hero Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full z-10">
        {/* Top Eyebrow row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 text-xs font-mono-clean text-[#88898C] uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
            <span>51.5074° N, 0.1278° W · London, UK</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/5">
            <Terminal className="w-3 h-3 text-[#C5A880]" />
            <span className="text-white/80">Platform Eng & Visual Storytelling</span>
          </div>
        </div>

        {/* Dennis Snellenberg Huge Editorial Name Title */}
        <div className="space-y-2 mb-10">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.2rem] font-bold tracking-tight text-white leading-[0.92] uppercase font-sans">
            Tarun <br />
            <span className="font-display italic font-normal text-[#E8E1D5] lowercase tracking-normal">
              Sabbineni
            </span>
          </h1>
        </div>

        {/* Dual Proposition Grid: Dennis / Oliur Clean Editorial Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-4 pb-12 border-b border-white/10">
          {/* Left Column: Short bio / thesis */}
          <div className="lg:col-span-7 space-y-4">
            <p className="text-lg sm:text-xl md:text-2xl text-[#E5E7EB] font-light leading-relaxed max-w-2xl">
              Software Engineering Manager at <span className="text-white font-medium">Barclays</span> shaping <span className="text-[#C5A880]">Developer Experience</span> & distributed platform architecture.
            </p>
            <p className="text-sm sm:text-base text-[#88898C] leading-relaxed max-w-xl font-light">
              Equally committed to the quiet art of travel, landscape and architectural photography across 21 countries. One coherent identity: engineering rigour balanced with visual curiosity.
            </p>

            {/* Quick action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href="#work"
                className="btn-magnetic inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#F8F7F4] text-[#0E0F12] text-xs uppercase tracking-widest font-semibold hover:bg-[#C5A880] transition-colors"
              >
                <span>View Engineering</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href="#photography"
                className="btn-magnetic inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] hover:bg-white/10 border border-white/10 text-white text-xs uppercase tracking-widest font-medium transition-colors"
              >
                <Camera className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Photography Portfolio</span>
              </a>

              <a
                href="#atlas"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-full text-[#88898C] hover:text-white text-xs uppercase tracking-widest font-medium transition-colors"
              >
                <Globe2 className="w-3.5 h-3.5" />
                <span>Travel Atlas (21)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Key metrics / Dennis-style circular preview */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-start sm:items-center justify-end gap-6">
            {/* Visual Thumbnail Showcase Card */}
            <div className="group relative w-full sm:w-64 h-36 rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#16181D]">
              <img
                src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=600&q=80"
                alt="Swiss Alps Alpine Solitude"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-75 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-3.5">
                <span className="text-[10px] font-mono-clean text-[#C5A880] uppercase tracking-wider">
                  Featured Shutter
                </span>
                <span className="text-xs text-white font-medium truncate">
                  Zermatt, Alps · 2025
                </span>
              </div>
            </div>

            {/* Quick Stat Pill */}
            <div className="grid grid-cols-2 gap-4 w-full sm:w-auto">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-2xl font-bold text-white font-sans">21</div>
                <div className="text-[11px] font-mono-clean text-[#88898C] uppercase tracking-wider">
                  Destinations
                </div>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-2xl font-bold text-[#C5A880] font-sans">10k+</div>
                <div className="text-[11px] font-mono-clean text-[#88898C] uppercase tracking-wider">
                  Dev Community
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dennis Snellenberg Signature Marquee Ticker */}
      <div className="w-full overflow-hidden border-t border-b border-white/10 py-4 bg-[#111216]/60 backdrop-blur-sm mt-8">
        <div className="animate-marquee whitespace-nowrap text-xs sm:text-sm font-mono-clean uppercase tracking-[0.25em] text-[#88898C] flex items-center gap-12">
          <span className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
            TARUN SABBINENI
          </span>
          <span>·</span>
          <span>SOFTWARE ENGINEERING MANAGER</span>
          <span>·</span>
          <span className="text-white">DEVELOPER EXPERIENCE & PLATFORM</span>
          <span>·</span>
          <span>TRAVEL & LANDSCAPE PHOTOGRAPHY</span>
          <span>·</span>
          <span className="text-[#C5A880]">21 COUNTRIES TRAVERSED</span>
          <span>·</span>
          <span>KUBERNETES & DISTRIBUTED SYSTEMS</span>
          <span>·</span>
          <span>ARCHITECTURAL MINIMALISM</span>
          <span>·</span>
          <span>ACOUSTIC PIANO & TACTICAL TENNIS</span>
          <span>·</span>
          <span className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
            TARUN SABBINENI
          </span>
          <span>·</span>
          <span>SOFTWARE ENGINEERING MANAGER</span>
          <span>·</span>
          <span className="text-white">DEVELOPER EXPERIENCE & PLATFORM</span>
          <span>·</span>
          <span>TRAVEL & LANDSCAPE PHOTOGRAPHY</span>
          <span>·</span>
          <span className="text-[#C5A880]">21 COUNTRIES TRAVERSED</span>
          <span>·</span>
          <span>KUBERNETES & DISTRIBUTED SYSTEMS</span>
          <span>·</span>
          <span>ARCHITECTURAL MINIMALISM</span>
          <span>·</span>
          <span>ACOUSTIC PIANO & TACTICAL TENNIS</span>
          <span>·</span>
        </div>
      </div>
    </section>
  );
};
