import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  CheckCircle2,
  ChevronRight,
  Activity,
  Keyboard,
  Coffee,
  Compass,
  X
} from 'lucide-react';
import { publicProjects, curatedPhotos, visitedCountries } from '../data/siteData';

export const ExhibitionTake: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState<'intro' | 'platform' | 'atlas' | 'darkroom' | 'beyond'>('intro');
  const [activeCountryIdx, setActiveCountryIdx] = useState(4); // Switzerland default
  const [lightboxPhoto, setLightboxPhoto] = useState<any>(null);
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

  const chapters = [
    { id: 'intro', num: '01', title: 'Introduction & Essence' },
    { id: 'platform', num: '02', title: 'Engineering Leadership (Vanguard)' },
    { id: 'atlas', num: '03', title: '21 Horizons (Expedition Atlas)' },
    { id: 'darkroom', num: '04', title: 'Darkroom Gallery (Optics)' },
    { id: 'beyond', num: '05', title: 'Beyond Work (Craft & Court)' }
  ];

  const currentCountry = visitedCountries[activeCountryIdx];

  return (
    <div className="bg-[#FAF9F5] text-[#1A1A1A] min-h-screen selection:bg-[#1A1A1A] selection:text-white flex flex-col lg:flex-row animate-fadeIn font-serif">
      
      {/* ------------------------------------------------------------- */}
      {/* LEFT: FIXED CURATOR SIDEBAR (Aristide Benoist Inspired) */}
      {/* ------------------------------------------------------------- */}
      <aside className="w-full lg:w-[32%] lg:min-h-screen border-b lg:border-b-0 lg:border-r border-[#1A1A1A]/10 p-8 sm:p-12 flex flex-col justify-between bg-[#F4F2EC] shrink-0 font-sans">
        
        {/* Top Identity */}
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-[#7A7A7A] pb-4 border-b border-[#1A1A1A]/10">
            <span>Exhibition Catalogue</span>
            <span>London {localTime} GMT</span>
          </div>

          <div>
            <h1 className="text-3xl sm:text-4xl font-normal tracking-tight font-serif text-[#1A1A1A]">
              Tarun Sabbineni
            </h1>
            <p className="text-xs uppercase tracking-wider font-mono text-[#7A7A7A] mt-1">
              Engineering Manager & Landscape Photographer
            </p>
          </div>

          <p className="text-xs leading-relaxed text-[#555] font-light">
            Curated digital retrospective detailing software engineering leadership at Vanguard alongside prior engineering at JPMorgan and 21 world destinations.
          </p>
        </div>

        {/* Chapter Index Navigation */}
        <nav className="my-8 sm:my-12">
          <div className="text-[10px] font-mono uppercase tracking-widest text-[#7A7A7A] mb-4">
            Curated Chapters
          </div>
          <ul className="space-y-1">
            {chapters.map((chap) => {
              const isActive = activeChapter === chap.id;
              return (
                <li key={chap.id}>
                  <button
                    onClick={() => setActiveChapter(chap.id as any)}
                    className={`w-full text-left py-2 px-3 rounded-xl text-xs transition-all flex items-center justify-between ${
                      isActive
                        ? 'bg-[#1A1A1A] text-white font-medium shadow-sm'
                        : 'text-[#555] hover:text-[#1A1A1A] hover:bg-black/5'
                    }`}
                  >
                    <span className="font-mono text-[10px] opacity-60 mr-2">{chap.num}</span>
                    <span className="truncate flex-1">{chap.title}</span>
                    {isActive && <ChevronRight className="w-3.5 h-3.5 ml-2" />}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer Contact */}
        <div className="pt-6 border-t border-[#1A1A1A]/10 space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-[#7A7A7A]">
            <span>Base: London LHR</span>
            <span>51.5° N, 0.1° W</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="mailto:contact@tarunsabbineni.com"
              className="px-4 py-2 rounded-full bg-[#1A1A1A] text-white text-xs font-mono hover:bg-[#455CE9] transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>
            <a
              href="https://github.com/tarunsab"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white border border-[#1A1A1A]/15 flex items-center justify-center text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white border border-[#1A1A1A]/15 flex items-center justify-center text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </aside>

      {/* ------------------------------------------------------------- */}
      {/* RIGHT: EXPANSIVE CHAPTER STAGE */}
      {/* ------------------------------------------------------------- */}
      <main className="flex-1 p-8 sm:p-14 lg:p-20 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          
          {/* --------------------------------------------------------- */}
          {/* CHAPTER 01: INTRODUCTION & ESSENCE */}
          {/* --------------------------------------------------------- */}
          {activeChapter === 'intro' && (
            <div className="space-y-12 animate-fadeIn">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#7A7A7A] block">
                  Chapter 01 / Identity & Core Philosophy
                </span>
                <h2 className="text-4xl sm:text-6xl font-normal tracking-tight font-serif text-[#1A1A1A]">
                  Pruning cognitive friction, chasing quiet light.
                </h2>
              </div>

              {/* Editorial Split: Portrait & Biography */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center pt-4">
                <div className="sm:col-span-5">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-[#1A1A1A]/15 shadow-xl relative bg-neutral-200">
                    <img
                      src="./images/tarun-linkedin.jpg"
                      alt="Tarun Sabbineni"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "./images/tarun-portrait.jpg";
                      }}
                    />
                    <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/60 text-[10px] font-mono text-white">
                      London Base • 2026
                    </div>
                  </div>
                </div>

                <div className="sm:col-span-7 space-y-4 font-sans text-sm text-[#444] leading-relaxed">
                  <p>
                    I operate at the intersection of enterprise software engineering leadership and thoughtful craft. At <span className="font-medium text-[#1A1A1A]">Vanguard</span> in London, I lead engineering teams focused on building intuitive, resilient internal platforms.
                  </p>
                  <p>
                    Prior to Vanguard, I spent 2019 to 2022 at JPMorgan (including J.P. Morgan Asset Management) and earned First Class Honours in engineering from UCL.
                  </p>
                  <div className="pt-4 flex items-center gap-3 font-mono text-xs text-[#7A7A7A]">
                    <span>Role: Engineering Manager @ Vanguard</span>
                    <span>•</span>
                    <span>Ex-JPMorgan</span>
                    <span>•</span>
                    <span>UCL 1st Class</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* --------------------------------------------------------- */}
          {/* CHAPTER 02: PLATFORM ARCHITECTURE */}
          {/* --------------------------------------------------------- */}
          {activeChapter === 'platform' && (
            <div className="space-y-12 animate-fadeIn font-sans">
              <div className="space-y-2 font-serif">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#7A7A7A] block">
                  Chapter 02 / Engineering Leadership @ Vanguard
                </span>
                <h2 className="text-4xl sm:text-6xl font-normal tracking-tight text-[#1A1A1A]">
                  Developer Experience & Platform Engineering
                </h2>
              </div>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-white border border-[#1A1A1A]/10 shadow-sm space-y-2">
                  <Terminal className="w-5 h-5 text-[#455CE9]" />
                  <h4 className="text-base font-medium text-[#1A1A1A]">Self-Service Golden Paths</h4>
                  <p className="text-xs text-[#555] leading-relaxed">
                    Standardizing declarative Kubernetes deployments and CI/CD pipelines to elevate DORA velocity across banking teams.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-[#1A1A1A]/10 shadow-sm space-y-2">
                  <CheckCircle2 className="w-5 h-5 text-[#455CE9]" />
                  <h4 className="text-base font-medium text-[#1A1A1A]">Cognitive Overhead Reduction</h4>
                  <p className="text-xs text-[#555] leading-relaxed">
                    Automating compliance, telemetry, and security guardrails directly into internal developer tooling.
                  </p>
                </div>
              </div>

              {/* Public Repositories */}
              <div className="space-y-4 pt-6">
                <div className="text-xs font-mono uppercase tracking-widest text-[#7A7A7A]">
                  Selected Public GitHub Repositories
                </div>

                <div className="divide-y divide-[#1A1A1A]/10 border-t border-b border-[#1A1A1A]/10">
                  {publicProjects.map((p) => (
                    <div key={p.id} className="py-5 flex items-baseline justify-between gap-4">
                      <div>
                        <h4 className="text-lg font-serif font-normal text-[#1A1A1A]">{p.title}</h4>
                        <p className="text-xs text-[#666] mt-0.5">{p.description}</p>
                        <div className="flex gap-1.5 mt-2">
                          {p.techStack.map((t, idx) => (
                            <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/5 text-[#555]">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <a
                        href={p.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-[#455CE9] hover:underline shrink-0 flex items-center gap-1"
                      >
                        <span>GitHub</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* --------------------------------------------------------- */}
          {/* CHAPTER 03: 21 HORIZONS ATLAS */}
          {/* --------------------------------------------------------- */}
          {activeChapter === 'atlas' && (
            <div className="space-y-12 animate-fadeIn font-sans">
              <div className="space-y-2 font-serif">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#7A7A7A] block">
                  Chapter 03 / Cartography
                </span>
                <h2 className="text-4xl sm:text-6xl font-normal tracking-tight text-[#1A1A1A]">
                  21 Visited Horizons
                </h2>
              </div>

              {/* Country Carousel / Selector */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
                {visitedCountries.map((c, i) => (
                  <button
                    key={c.id}
                    onClick={() => setActiveCountryIdx(i)}
                    className={`px-3 py-1.5 rounded-full text-xs font-mono whitespace-nowrap transition-all ${
                      i === activeCountryIdx
                        ? 'bg-[#1A1A1A] text-white font-medium'
                        : 'bg-white border border-[#1A1A1A]/10 text-[#555] hover:text-[#1A1A1A]'
                    }`}
                  >
                    {c.code} · {c.name}
                  </button>
                ))}
              </div>

              {/* Featured Country Dossier */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#1A1A1A]/10 shadow-sm space-y-6">
                <div className="aspect-[16/10] rounded-2xl overflow-hidden relative">
                  <img
                    src={currentCountry.photoUrl}
                    alt={currentCountry.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded bg-black/60 text-white font-mono text-xs">
                    Class of {currentCountry.yearVisited} • {currentCountry.region}
                  </div>
                </div>

                <div className="flex items-baseline justify-between">
                  <h3 className="text-3xl font-serif font-normal text-[#1A1A1A]">
                    {currentCountry.name}
                  </h3>
                  <span className="text-xs font-mono text-[#7A7A7A]">
                    {currentCountry.lat.toFixed(2)}° N, {currentCountry.lng.toFixed(2)}° E
                  </span>
                </div>

                <p className="text-sm text-[#444] leading-relaxed">
                  {currentCountry.travelNotes}
                </p>

                <div className="pt-4 border-t border-[#1A1A1A]/10 flex flex-wrap gap-2">
                  {currentCountry.highlights.map((h, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-[#F4F2EC] text-[#555] font-mono">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* --------------------------------------------------------- */}
          {/* CHAPTER 04: DARKROOM GALLERY */}
          {/* --------------------------------------------------------- */}
          {activeChapter === 'darkroom' && (
            <div className="space-y-12 animate-fadeIn font-sans">
              <div className="space-y-2 font-serif">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#7A7A7A] block">
                  Chapter 04 / Darkroom
                </span>
                <h2 className="text-4xl sm:text-6xl font-normal tracking-tight text-[#1A1A1A]">
                  Curated Medium Format Archive
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {curatedPhotos.map((photo) => (
                  <div
                    key={photo.id}
                    onClick={() => setLightboxPhoto(photo)}
                    className="cursor-pointer group space-y-3"
                  >
                    <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-200 border border-[#1A1A1A]/10 shadow-sm relative">
                      <img
                        src={photo.url}
                        alt={photo.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/60 text-[10px] font-mono text-white">
                        {photo.location}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-base font-serif font-normal text-[#1A1A1A] group-hover:text-[#455CE9]">
                        {photo.title}
                      </h4>
                      <p className="text-xs font-mono text-[#7A7A7A]">
                        {photo.camera} • {photo.year}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* --------------------------------------------------------- */}
          {/* CHAPTER 05: BEYOND WORK */}
          {/* --------------------------------------------------------- */}
          {activeChapter === 'beyond' && (
            <div className="space-y-12 animate-fadeIn font-sans">
              <div className="space-y-2 font-serif">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#7A7A7A] block">
                  Chapter 05 / Personal World
                </span>
                <h2 className="text-4xl sm:text-6xl font-normal tracking-tight text-[#1A1A1A]">
                  Court, Craft & Daily Rituals
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-white border border-[#1A1A1A]/10 shadow-sm space-y-2">
                  <Activity className="w-5 h-5 text-[#455CE9]" />
                  <h4 className="text-base font-medium text-[#1A1A1A]">Competitive Tennis</h4>
                  <p className="text-xs text-[#555] leading-relaxed">
                    All-court baseline strategy, topspin depth, and weekend league tennis across London clubs. Wimbledon tournament regular.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-[#1A1A1A]/10 shadow-sm space-y-2">
                  <Keyboard className="w-5 h-5 text-[#455CE9]" />
                  <h4 className="text-base font-medium text-[#1A1A1A]">Mechanical Keyboards & Craft</h4>
                  <p className="text-xs text-[#555] leading-relaxed">
                    Custom ergonomic split boards, hand-lubricated tactile switches, and tailored keycap profiles for high-leverage typing.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-[#1A1A1A]/10 shadow-sm space-y-2">
                  <Coffee className="w-5 h-5 text-[#455CE9]" />
                  <h4 className="text-base font-medium text-[#1A1A1A]">Specialty Coffee Chemistry</h4>
                  <p className="text-xs text-[#555] leading-relaxed">
                    Single-origin Ethiopian roasts, 9-bar espresso pressure profiling, and precise V60 pour-over morning rituals.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-[#1A1A1A]/10 shadow-sm space-y-2">
                  <Compass className="w-5 h-5 text-[#455CE9]" />
                  <h4 className="text-base font-medium text-[#1A1A1A]">Slow Cartography</h4>
                  <p className="text-xs text-[#555] leading-relaxed">
                    21 countries explored on foot with prime optics, seeking deliberate compositions and unhurried natural light.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Lightbox */}
      {lightboxPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxPhoto(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
            onClick={() => setLightboxPhoto(null)}
          >
            <X className="w-5 h-5" />
          </button>
          <div className="max-w-4xl text-center space-y-4">
            <img src={lightboxPhoto.url} alt={lightboxPhoto.title} className="max-h-[80vh] mx-auto rounded-xl shadow-2xl" />
            <h3 className="text-xl font-serif text-white">{lightboxPhoto.title}</h3>
            <p className="text-xs font-mono text-white/60">{lightboxPhoto.location} • {lightboxPhoto.camera}</p>
          </div>
        </div>
      )}

    </div>
  );
};
