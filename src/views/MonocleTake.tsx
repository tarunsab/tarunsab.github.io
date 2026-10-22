import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Github, 
  Mail
} from 'lucide-react';
import { publicProjects, visitedCountries } from '../data/siteData';
import { InteractiveCV } from '../components/InteractiveCV';

export const MonocleTake: React.FC = () => {
  const [activeCountryIdx, setActiveCountryIdx] = useState(4); // Switzerland default
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setLocalTime(
        new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Europe/London',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        }).format(now)
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const currentCountry = visitedCountries[activeCountryIdx];

  return (
    <div className="bg-[#F4F0E8] text-[#1E1D1A] min-h-screen selection:bg-[#1E1D1A] selection:text-[#F4F0E8] animate-fadeIn font-serif">
      
      {/* ------------------------------------------------------------- */}
      {/* BROADSHEET MASTHEAD & DENNIS WIREFRAME GLOBE */}
      {/* ------------------------------------------------------------- */}
      <header className="border-b border-[#1E1D1A]/15 pt-28 pb-12 px-6 sm:px-12 lg:px-20 relative">
        <div className="max-w-7xl mx-auto space-y-8">
          
          {/* Top Newspaper Date Line */}
          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-[0.2em] text-[#6E6B64] pb-4 border-b border-[#1E1D1A]/10">
            <div>The London Broadsheet • Issue No. 21</div>
            <div>London Base • {localTime} GMT • 51.5°N, 0.1°W</div>
            <div className="hidden sm:block">Developer Experience & Fine-Art Optics</div>
          </div>

          {/* Masthead Headline with Dennis Spinning Digital Globe */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 pt-4">
            <div className="space-y-4 max-w-3xl">
              <span className="text-xs uppercase tracking-widest text-[#B35B3B] font-mono block">
                Editorial Portfolio & Engineering Leadership
              </span>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-[#1E1D1A] leading-[1.05]">
                Engineering high-leverage scale. Framing deliberate landscapes.
              </h1>
            </div>

            {/* Dennis Snellenberg Spinning Digital Globe in Sepia */}
            <div className="flex flex-col items-end gap-3 shrink-0 self-end md:self-auto">
              <div className="digital-ball cursor-pointer" title="London LHR Base · 51.5074° N">
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
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#6E6B64]">
                Global Axis • London
              </span>
            </div>
          </div>

          {/* Portrait & Dual-Column Introduction */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8 border-t border-[#1E1D1A]/10">
            <div className="lg:col-span-4">
              <div className="relative aspect-[4/5] max-w-xs rounded-2xl overflow-hidden border border-[#1E1D1A]/20 shadow-xl bg-white p-2">
                <img
                  src="./images/tarun-linkedin.jpg"
                  alt="Tarun Sabbineni"
                  className="w-full h-full object-cover rounded-xl"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "./images/tarun-portrait.jpg";
                  }}
                />
                <div className="absolute bottom-4 left-4 px-2 py-0.5 rounded bg-black/70 text-[10px] font-mono text-white">
                  Tarun Sabbineni • London 2026
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 font-sans space-y-6 text-base text-[#4A4843] leading-relaxed">
              <p className="text-lg text-[#1E1D1A] font-serif font-normal leading-snug">
                "Research and quantitative model platform engineering manager at Vanguard (Dec 2022 – Present; 2 years as EM) with prior engineering at JPMorgan and 2:1 from Imperial Computer Science."
              </p>
              <p className="text-sm">
                Leading the Research & Quantitative Model Platform team across high-performance model infrastructure and distributed financial research systems. Prior experience spans over 3 years at JPMorgan Chase (starting in 2019, with J.P. Morgan Asset Management 2021–2022).
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-2 font-mono text-xs text-[#6E6B64]">
                <span>Quant & Research Platform EM @ Vanguard</span>
                <span>•</span>
                <span>Ex-JPMorgan Asset Management</span>
                <span>•</span>
                <span>Imperial CS 2:1</span>
              </div>
            </div>
          </div>

        </div>

        {/* User Preferred Contained Name Marquee */}
        <div className="mt-12 -mx-6 sm:-mx-12 lg:-mx-20 overflow-hidden border-t border-b border-[#1E1D1A]/15 py-3 sm:py-4 bg-[#EBE7DF] select-none font-sans">
          <div className="name-marquee-inner flex whitespace-nowrap text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight uppercase leading-none text-[#1E1D1A]">
            <span className="flex items-center">
              Tarun Sabbineni<span className="mx-6 sm:mx-10 text-[#1E1D1A]/30 font-light">—</span>
            </span>
            <span className="flex items-center">
              Tarun Sabbineni<span className="mx-6 sm:mx-10 text-[#1E1D1A]/30 font-light">—</span>
            </span>
            <span className="flex items-center">
              Tarun Sabbineni<span className="mx-6 sm:mx-10 text-[#1E1D1A]/30 font-light">—</span>
            </span>
            <span className="flex items-center">
              Tarun Sabbineni<span className="mx-6 sm:mx-10 text-[#1E1D1A]/30 font-light">—</span>
            </span>
          </div>
        </div>
      </header>

      {/* ------------------------------------------------------------- */}
      {/* INTERACTIVE CV & CAREER DOSSIER */}
      {/* ------------------------------------------------------------- */}
      <InteractiveCV />

      {/* ------------------------------------------------------------- */}
      {/* BROADSHEET WORK PLATES */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 px-6 sm:px-12 lg:px-20 border-b border-[#1E1D1A]/15 font-sans">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#1E1D1A]/15">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B35B3B]">
                Section II • Engineering Architecture
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-normal tracking-tight text-[#1E1D1A] mt-1">
                Selected Public Implementations
              </h2>
            </div>
            <a
              href="https://github.com/tarunsab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-[#1E1D1A] hover:text-[#B35B3B] flex items-center gap-1.5"
            >
              <Github className="w-4 h-4" />
              <span>github.com/tarunsab</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {publicProjects.slice(0, 3).map((proj) => (
              <div 
                key={proj.id}
                className="p-6 rounded-2xl bg-white border border-[#1E1D1A]/15 shadow-sm flex flex-col justify-between hover:border-[#B35B3B] transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#6E6B64]">
                    <span>{proj.category}</span>
                    <span>{proj.year}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-normal text-[#1E1D1A]">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-[#555] leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#1E1D1A]/10 mt-6 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {proj.techStack.slice(0, 2).map((t, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F4F0E8] text-[#555]">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full border border-[#1E1D1A]/20 flex items-center justify-center hover:bg-[#1E1D1A] hover:text-white transition-colors"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* BROADSHEET CARTOGRAPHY & PASSPORT PLATES */}
      {/* ------------------------------------------------------------- */}
      <section className="py-20 px-6 sm:px-12 lg:px-20 border-b border-[#1E1D1A]/15">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#1E1D1A]/15 font-sans">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#B35B3B]">
                Section III • Cartographic Archive
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif font-normal tracking-tight text-[#1E1D1A] mt-1">
                21 Horizons Traversed
              </h2>
            </div>
            <div className="text-xs font-mono text-[#6E6B64]">
              London (LHR) Flight Outpost
            </div>
          </div>

          {/* Destination Selector Ribbon */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar font-sans">
            {visitedCountries.map((c, i) => (
              <button
                key={c.id}
                onClick={() => setActiveCountryIdx(i)}
                className={`px-3 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all ${
                  i === activeCountryIdx
                    ? 'bg-[#1E1D1A] text-white font-medium'
                    : 'bg-white border border-[#1E1D1A]/15 text-[#555] hover:text-[#1E1D1A]'
                }`}
              >
                {c.code} • {c.name}
              </button>
            ))}
          </div>

          {/* Broadsheet Featured Dossier Plate */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-10 rounded-3xl border border-[#1E1D1A]/15 shadow-sm">
            <div className="lg:col-span-7 aspect-[16/10] rounded-2xl overflow-hidden relative">
              <img
                src={currentCountry.photoUrl}
                alt={currentCountry.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 left-3 px-3 py-1 rounded bg-black/70 text-white font-mono text-xs">
                {currentCountry.region} • Class of {currentCountry.yearVisited}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono text-[#B35B3B] uppercase tracking-wider">
                Official Entry • {currentCountry.code}
              </div>
              <h3 className="text-3xl sm:text-4xl font-serif font-normal text-[#1E1D1A]">
                {currentCountry.name}
              </h3>
              <p className="text-xs font-mono text-[#6E6B64]">
                Coordinates: {currentCountry.lat.toFixed(2)}° N, {currentCountry.lng.toFixed(2)}° E
              </p>
              <p className="text-sm font-sans text-[#4A4843] leading-relaxed">
                {currentCountry.travelNotes}
              </p>
              <div className="pt-4 border-t border-[#1E1D1A]/10 flex flex-wrap gap-2">
                {currentCountry.highlights.map((h, idx) => (
                  <span key={idx} className="text-xs font-mono px-3 py-1 rounded-full bg-[#F4F0E8] text-[#555]">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* BROADSHEET FOOTER */}
      {/* ------------------------------------------------------------- */}
      <footer className="py-16 px-6 sm:px-12 lg:px-20 bg-[#EBE7DF] border-t border-[#1E1D1A]/15 font-sans">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-serif font-normal text-[#1E1D1A]">Tarun Sabbineni</h4>
            <p className="text-xs font-mono text-[#6E6B64]">Quant & Research Platform EM @ Vanguard • Ex-JPMorgan • Imperial CS 2:1</p>
          </div>
          <div className="flex items-center gap-4">
            <a href="mailto:contact@tarunsabbineni.com" className="px-5 py-2.5 rounded-full bg-[#1E1D1A] text-white text-xs font-mono hover:bg-[#B35B3B] transition-colors flex items-center gap-2">
              <Mail className="w-3.5 h-3.5" />
              <span>contact@tarunsabbineni.com</span>
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
};
