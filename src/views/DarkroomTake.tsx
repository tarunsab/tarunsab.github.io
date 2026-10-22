import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Camera, 
  Terminal
} from 'lucide-react';
import { InteractiveCV } from '../components/InteractiveCV';
import { TravelAtlas } from '../components/TravelAtlas';

export const DarkroomTake: React.FC = () => {
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

  const fieldGear = [
    { model: 'Sony Alpha 7R V', role: '61MP Full-Frame Body', note: 'AI Autofocus & BIONZ XR Processing' },
    { model: 'Leica Q2', role: 'Summilux 28mm f/1.7', note: 'Fixed High-Microcontrast Prime' },
    { model: 'FE 24-70mm f/2.8 GM II', role: 'Standard Zoom', note: 'Landscape & Street Walkaround' },
    { model: 'FE 70-200mm f/2.8 GM II', role: 'Telephoto Prime', note: 'Alpine Ridges & Compressed Perspective' }
  ];

  return (
    <div className="bg-[#141311] text-[#F3EFE6] min-h-screen selection:bg-[#D97736] selection:text-black animate-fadeIn font-sans">
      
      {/* ------------------------------------------------------------- */}
      {/* KINETIC DARKROOM HERO (Amber Sepia Dennis Synthesis) */}
      {/* ------------------------------------------------------------- */}
      <header className="relative min-h-[96vh] flex flex-col justify-between pt-28 sm:pt-32 pb-0 overflow-hidden border-b border-white/10">
        
        {/* Ambient Darkroom Amber Safelight Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#D97736]/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Top Right Hanger with Amber Wireframe Digital Globe */}
        <div className="absolute top-28 right-8 sm:right-16 z-20 flex items-center gap-4">
          <div className="text-right hidden sm:block font-mono text-xs text-[#8F8A80]">
            <p className="uppercase tracking-widest text-[#D97736]">Darkroom Axis</p>
            <p className="text-[#F3EFE6]">London LHR • {localTime} GMT</p>
          </div>

          <div className="digital-ball cursor-pointer" title="London Base · 51.5°N">
            <div className="globe">
              <div className="globe-wrap">
                <div className="globe-circle globe-circle-1 !border-[#D97736]" />
                <div className="globe-circle globe-circle-2 !border-[#D97736]/70" />
                <div className="globe-circle globe-circle-3 !border-[#D97736]/50" />
                <div className="globe-circle-hor !border-[#D97736]/40" />
                <div className="globe-circle-middle !border-[#D97736]" />
              </div>
            </div>
          </div>
        </div>

        {/* Centered Portrait Card: Film Negative Aesthetic */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 my-4 sm:my-8">
          
          <div className="relative w-full max-w-[280px] sm:max-w-xs aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-[#D97736]/30 bg-[#1D1B18] p-2 group">
            
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <img
                src="./images/tarun-linkedin.jpg"
                alt="Tarun Sabbineni"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "./images/tarun-portrait.jpg";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />

              <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/60 text-[10px] font-mono text-[#D97736] border border-[#D97736]/30">
                TRI-X 400 • FRAME 21
              </div>

              <div className="absolute bottom-3 left-3 text-white">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#D97736]">
                  VANGUARD ENGINEERING LEADERSHIP
                </div>
                <div className="text-base font-medium">Tarun Sabbineni</div>
              </div>
            </div>

          </div>

          <p className="text-xs sm:text-sm text-[#8F8A80] max-w-lg text-center mt-4 font-light">
            Software Engineering Manager at Vanguard (Dec 2022 – Present; 2 years as EM). Ex-JPMorgan Asset Management & Corporate Technology • UCL First Class Honours.
          </p>
        </div>

        {/* Hero Sub-information Row */}
        <div className="relative z-20 max-w-7xl mx-auto px-8 sm:px-16 w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-8 font-sans">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0">
              <Terminal className="w-4 h-4 text-[#D97736]" />
            </div>
            <div>
              <h4 className="text-xl sm:text-2xl font-light text-[#F3EFE6] tracking-tight">
                Software Engineering Manager
              </h4>
              <p className="text-sm text-[#8F8A80] font-light">
                Vanguard • Dec 2022 – Present (2 Years as EM)
              </p>
            </div>
          </div>

          <div className="text-left sm:text-right">
            <h4 className="text-xl sm:text-2xl font-light text-[#F3EFE6] tracking-tight">
              Ex-JPMorgan & UCL Alum
            </h4>
            <p className="text-sm text-[#8F8A80] font-light">
              Asset Management & Corporate Technology (2018–2022)
            </p>
          </div>
        </div>

        {/* User Preferred Contained Name Marquee */}
        <div className="w-full overflow-hidden border-t border-white/10 py-3 sm:py-5 bg-[#181714] select-none">
          <div className="name-marquee-inner flex whitespace-nowrap text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tight uppercase leading-none text-[#F3EFE6]">
            <span className="flex items-center">
              Tarun Sabbineni<span className="mx-6 sm:mx-10 text-[#D97736] font-light">—</span>
            </span>
            <span className="flex items-center">
              Tarun Sabbineni<span className="mx-6 sm:mx-10 text-[#D97736] font-light">—</span>
            </span>
            <span className="flex items-center">
              Tarun Sabbineni<span className="mx-6 sm:mx-10 text-[#D97736] font-light">—</span>
            </span>
            <span className="flex items-center">
              Tarun Sabbineni<span className="mx-6 sm:mx-10 text-[#D97736] font-light">—</span>
            </span>
          </div>
        </div>

      </header>

      {/* ------------------------------------------------------------- */}
      {/* INTERACTIVE CV & CAREER TIMELINE */}
      {/* ------------------------------------------------------------- */}
      <InteractiveCV />

      {/* ------------------------------------------------------------- */}
      {/* OPTICS & FIELD KIT DRAWER */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 px-6 sm:px-12 lg:px-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#D97736]">
                Optical Inventory
              </span>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#F3EFE6] mt-1">
                Field Optics & Camera Kit
              </h2>
            </div>
            <Camera className="w-5 h-5 text-[#D97736]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {fieldGear.map((g, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#1D1B18] border border-white/10 space-y-2">
                <span className="text-[10px] font-mono text-[#D97736] uppercase tracking-wider block">
                  {g.role}
                </span>
                <h4 className="text-base font-medium text-[#F3EFE6]">
                  {g.model}
                </h4>
                <p className="text-xs text-[#8F8A80] leading-relaxed">
                  {g.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* AMBER SEPIA TRAVEL ATLAS */}
      {/* ------------------------------------------------------------- */}
      <TravelAtlas />

      {/* ------------------------------------------------------------- */}
      {/* DARKROOM FOOTER */}
      {/* ------------------------------------------------------------- */}
      <footer className="py-20 px-6 sm:px-12 lg:px-20 bg-[#0E0D0C] border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-light text-[#F3EFE6]">Tarun Sabbineni</h3>
            <p className="text-xs text-[#8F8A80] font-mono mt-1">Software Engineering Manager @ Vanguard • Ex-JPMorgan • UCL 1st Class</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:contact@tarunsabbineni.com" className="px-5 py-2.5 rounded-full bg-[#D97736] text-black font-medium text-xs font-mono hover:bg-white transition-colors flex items-center gap-2">
              <Mail className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
};
