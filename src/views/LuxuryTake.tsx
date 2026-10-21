import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Mail, 
  Camera, 
  Sparkles, 
  Plane
} from 'lucide-react';
import { publicProjects, curatedPhotos, visitedCountries } from '../data/siteData';

export const LuxuryTake: React.FC = () => {
  const selectedPhotoIdx = 0;
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

  const featuredPhoto = curatedPhotos[selectedPhotoIdx];

  return (
    <div className="bg-[#090A0D] text-white min-h-screen selection:bg-[#C5A880] selection:text-black animate-fadeIn font-sans">
      
      {/* ------------------------------------------------------------- */}
      {/* LUXURY ATELIER HERO */}
      {/* ------------------------------------------------------------- */}
      <section className="relative pt-32 pb-20 px-6 sm:px-12 lg:px-20 border-b border-white/10 overflow-hidden">
        
        {/* Ambient Subtle Gold Glow */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#455CE9]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          
          {/* Top Metadata Strip */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-12 text-xs font-mono text-[#8C9099]">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-[#C5A880]" />
              <span className="text-white uppercase tracking-widest font-medium">Tarun Sabbineni</span>
              <span>/</span>
              <span>London LHR Base • {localTime} GMT</span>
            </div>

            <div className="hidden sm:flex items-center gap-4">
              <span>Barclays Platform Leadership</span>
              <span>•</span>
              <span className="text-[#C5A880]">21 Nations Traversed</span>
            </div>
          </div>

          {/* Asymmetric Split Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Bold Luxury Typography */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#C5A880]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Executive Portfolio & Optical Archive</span>
              </div>

              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight leading-[1.02] text-white">
                Engineering Scale. <br />
                <span className="font-serif italic text-[#C5A880]">Capturing</span> Light.
              </h1>

              <p className="text-base sm:text-lg text-[#9EA3AE] max-w-xl font-light leading-relaxed">
                Software Engineering Manager in Developer Experience at Barclays in London, orchestrating self-service internal developer platforms. Balanced by landscape and architectural photography across 21 countries.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#bento"
                  className="px-6 py-3.5 rounded-full bg-[#C5A880] text-black font-medium text-xs uppercase tracking-wider hover:bg-white transition-all shadow-lg shadow-[#C5A880]/20 flex items-center gap-2"
                >
                  <span>Explore Bento Dossier</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="https://github.com/tarunsab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/15 text-white border border-white/10 text-xs uppercase tracking-wider font-medium transition-all flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repositories</span>
                </a>
              </div>
            </div>

            {/* Right: Executive Rangefinder Portrait Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#111216] p-2 group">
                
                {/* Inner Image with Rangefinder Watermarks */}
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

                  {/* Rangefinder Crosshairs & Frame Overlay */}
                  <div className="absolute top-4 left-4 text-[10px] font-mono text-[#C5A880] tracking-widest uppercase">
                    [+] EXPEDITIONS: 21
                  </div>
                  <div className="absolute top-4 right-4 text-[10px] font-mono text-white/70">
                    ISO 400 • F/2.8
                  </div>

                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#C5A880]">
                      LEADERSHIP PROFILE
                    </div>
                    <div className="text-xl font-medium tracking-tight">
                      Tarun Sabbineni
                    </div>
                    <div className="text-xs text-[#9EA3AE] font-mono">
                      DevEx & Platform @ Barclays
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* OLIUR / APPLE STYLE EXECUTIVE BENTO GRID */}
      {/* ------------------------------------------------------------- */}
      <section id="bento" className="py-24 px-6 sm:px-12 lg:px-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C5A880]">
                Curated Bento Grid
              </span>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white mt-1">
                Executive Dossier
              </h2>
            </div>
            <p className="text-xs font-mono text-[#8C9099]">
              Engineering Leadership & Photographic Optics at a Glance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Cell 1: Barclays Platform Engineering (Spans 8 cols) */}
            <div className="md:col-span-8 p-8 rounded-3xl bg-[#111216] border border-white/10 hover:border-[#C5A880]/40 transition-colors flex flex-col justify-between relative overflow-hidden group">
              <div className="space-y-4 z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C5A880]" />
                  <span className="text-xs font-mono text-[#C5A880] uppercase tracking-wider">
                    Software Engineering Management
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
                  Developer Experience & Platform at Barclays
                </h3>
                <p className="text-sm text-[#9EA3AE] max-w-xl font-light leading-relaxed">
                  Leading platform engineering initiatives across enterprise cloud systems. Establishing self-service internal developer platforms (IDP), standardizing golden paths, and accelerating deployment velocity for thousands of distributed developers.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 z-10 border-t border-white/10 mt-6">
                <div>
                  <div className="text-xl font-mono text-white font-medium">Enterprise</div>
                  <div className="text-[11px] text-[#8C9099] font-mono">Banking Scale</div>
                </div>
                <div>
                  <div className="text-xl font-mono text-[#C5A880] font-medium">DevEx</div>
                  <div className="text-[11px] text-[#8C9099] font-mono">Internal Platforms</div>
                </div>
                <div>
                  <div className="text-xl font-mono text-white font-medium">K8s & Cloud</div>
                  <div className="text-[11px] text-[#8C9099] font-mono">Resilient Architecture</div>
                </div>
                <div>
                  <div className="text-xl font-mono text-[#C5A880] font-medium">DORA</div>
                  <div className="text-[11px] text-[#8C9099] font-mono">High Velocity</div>
                </div>
              </div>
            </div>

            {/* Cell 2: 21 Countries Traversed (Spans 4 cols) */}
            <div className="md:col-span-4 p-8 rounded-3xl bg-[#111216] border border-white/10 hover:border-[#C5A880]/40 transition-colors flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#C5A880] uppercase tracking-wider">
                    Expedition Atlas
                  </span>
                  <Plane className="w-4 h-4 text-[#C5A880]" />
                </div>
                <div className="text-6xl font-light text-white font-mono">
                  21
                </div>
                <h4 className="text-xl font-normal text-white">
                  Sovereign Nations Traversed
                </h4>
                <p className="text-xs text-[#9EA3AE] leading-relaxed">
                  Spanning the United Kingdom, Switzerland, Maldives, Indonesia, Japan/Singapore, UAE, Greece, France, and the Americas.
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4">
                {visitedCountries.slice(0, 8).map((c) => (
                  <span key={c.id} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#9EA3AE] border border-white/5">
                    {c.code}
                  </span>
                ))}
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#C5A880]/20 text-[#C5A880]">
                  +13 More
                </span>
              </div>
            </div>

            {/* Cell 3: Featured Alpine Photograph Preview (Spans 5 cols) */}
            <div className="md:col-span-5 rounded-3xl overflow-hidden bg-[#111216] border border-white/10 relative group aspect-[4/3] sm:aspect-auto flex flex-col justify-end p-6">
              <img
                src={featuredPhoto.url}
                alt={featuredPhoto.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

              <div className="relative z-10 space-y-2">
                <div className="flex items-center gap-2 text-[10px] font-mono text-[#C5A880] uppercase tracking-widest">
                  <Camera className="w-3.5 h-3.5" />
                  <span>{featuredPhoto.location}</span>
                </div>
                <h4 className="text-xl font-normal text-white">
                  {featuredPhoto.title}
                </h4>
                <p className="text-xs text-[#C5C8CD] line-clamp-1 font-mono">
                  {featuredPhoto.camera} • {featuredPhoto.lens}
                </p>
              </div>
            </div>

            {/* Cell 4: Curated GitHub Projects (Spans 7 cols) */}
            <div className="md:col-span-7 p-8 rounded-3xl bg-[#111216] border border-white/10 hover:border-[#C5A880]/40 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
                  <span className="text-xs font-mono text-[#C5A880] uppercase tracking-wider">
                    Selected Public Engineering Repos
                  </span>
                  <a
                    href="https://github.com/tarunsab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-white/60 hover:text-white flex items-center gap-1"
                  >
                    <span>github.com/tarunsab</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="space-y-4">
                  {publicProjects.slice(0, 3).map((proj) => (
                    <a
                      key={proj.id}
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all flex items-center justify-between group"
                    >
                      <div>
                        <div className="text-base font-normal text-white group-hover:text-[#C5A880] transition-colors">
                          {proj.title}
                        </div>
                        <div className="text-xs text-[#8C9099] line-clamp-1">
                          {proj.description}
                        </div>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#8C9099] group-hover:text-[#C5A880] transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ------------------------------------------------------------- */}
      {/* LUXURY ATELIER FOOTER */}
      {/* ------------------------------------------------------------- */}
      <footer className="py-20 px-6 sm:px-12 lg:px-20 border-t border-white/10 bg-[#060709]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-light text-white">
              Tarun Sabbineni
            </h3>
            <p className="text-xs text-[#8C9099] font-mono mt-1">
              Engineering Leadership & Visual Cartography • London, UK
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:contact@tarunsabbineni.com"
              className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-[#C5A880] hover:text-black text-xs font-mono transition-all flex items-center gap-2"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Get in Touch</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/tarunsab"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
};
