import React, { useState } from 'react';
import { useTake, WebsiteTake, takeNames } from '../context/TakeContext';
import { Sparkles, Info, Check } from 'lucide-react';

export const TakeSwitcher: React.FC = () => {
  const { take, setTake } = useTake();
  const [showInfo, setShowInfo] = useState(false);

  const options: { id: WebsiteTake; label: string; tag: string }[] = [
    { id: 'sepia-dennis', label: '1. Sepia Dennis', tag: 'Preferred' },
    { id: 'monocle', label: '2. Editorial Monocle', tag: 'Broadsheet' },
    { id: 'darkroom', label: '3. Kinetic Darkroom', tag: 'Amber' },
    { id: 'horizon', label: '4. Horizon Atelier', tag: 'Spectrum' }
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center pointer-events-auto">
      
      {/* Information Flyout */}
      {showInfo && (
        <div className="mb-3 p-4 rounded-2xl bg-[#F5F2EB]/95 dark:bg-[#1A1917]/95 backdrop-blur-xl border border-black/10 dark:border-white/15 shadow-2xl max-w-sm text-center animate-fadeIn text-[#1C1B18] dark:text-[#F5F2EB]">
          <div className="text-xs font-mono font-medium text-[#455CE9] uppercase tracking-wider mb-1">
            {takeNames[take].title}
          </div>
          <div className="text-[11px] font-mono text-[#7D7A74] mb-1">
            {takeNames[take].subtitle}
          </div>
          <div className="text-xs font-normal text-[#5A5751] dark:text-[#C5C2BA] leading-relaxed">
            {takeNames[take].description}
          </div>
        </div>
      )}

      {/* Floating Pill Switcher */}
      <div className="p-1.5 rounded-full bg-[#FAF8F5]/95 dark:bg-[#181715]/95 backdrop-blur-2xl border border-black/10 dark:border-white/15 shadow-2xl flex items-center gap-1.5 transition-all">
        
        <div className="px-3 py-1 flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-[#7D7A74] hidden md:flex border-r border-black/10 dark:border-white/10 pr-3">
          <Sparkles className="w-3 h-3 text-[#455CE9]" />
          <span>4 Sepia Takes</span>
        </div>

        {options.map((opt) => {
          const isActive = take === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => setTake(opt.id)}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-1.5 ${
                isActive
                  ? 'bg-[#1C1B18] dark:bg-white text-white dark:text-[#1C1B18] shadow-md scale-[1.02]'
                  : 'text-[#5A5751] dark:text-[#C5C2BA] hover:text-[#1C1B18] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10'
              }`}
            >
              <span>{opt.label}</span>
              {isActive && <Check className="w-3 h-3 text-[#455CE9]" />}
            </button>
          );
        })}

        {/* Info Toggle */}
        <button
          onClick={() => setShowInfo(!showInfo)}
          className="w-7 h-7 rounded-full bg-black/5 dark:bg-white/10 hover:bg-[#455CE9] hover:text-white text-[#7D7A74] flex items-center justify-center transition-colors ml-1"
          aria-label="Toggle Take Info"
          title="Explain active take"
        >
          <Info className="w-3.5 h-3.5" />
        </button>

      </div>
    </div>
  );
};
