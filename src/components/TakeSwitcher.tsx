import React, { useState } from 'react';
import { useTake, WebsiteTake, takeNames } from '../context/TakeContext';
import { Sparkles, Info, Check } from 'lucide-react';

export const TakeSwitcher: React.FC = () => {
  const { take, setTake } = useTake();
  const [showInfo, setShowInfo] = useState(false);

  const options: { id: WebsiteTake; label: string; tag: string }[] = [
    { id: 'dennis', label: 'Dennis Minimal', tag: 'Preferred' },
    { id: 'editorial', label: 'Editorial Atelier', tag: 'Aristide' },
    { id: 'explorer', label: 'Horizon Explorer', tag: 'Panoramic' }
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center pointer-events-auto">
      
      {/* Information Flyout */}
      {showInfo && (
        <div className="mb-3 p-4 rounded-2xl bg-white/95 dark:bg-[#1C1D20]/95 backdrop-blur-xl border border-black/10 dark:border-white/15 shadow-2xl max-w-sm text-center animate-fadeIn text-[#1C1D20] dark:text-white">
          <div className="text-xs font-mono font-medium text-[#455CE9] uppercase tracking-wider mb-1">
            {takeNames[take].title}
          </div>
          <div className="text-xs font-normal text-[#55565A] dark:text-[#999D9E] leading-relaxed">
            {takeNames[take].description}
          </div>
        </div>
      )}

      {/* Floating Pill Switcher */}
      <div className="p-1.5 rounded-full bg-white/90 dark:bg-[#1C1D20]/90 backdrop-blur-2xl border border-black/10 dark:border-white/15 shadow-2xl flex items-center gap-1.5 transition-all">
        
        <div className="px-3 py-1 flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-[#7D8085] dark:text-[#999D9E] hidden md:flex border-r border-black/10 dark:border-white/10 pr-3">
          <Sparkles className="w-3 h-3 text-[#455CE9]" />
          <span>Curated Takes</span>
        </div>

        {options.map((opt) => {
          const isActive = take === opt.id;
          return (
            <button
              key={opt.id}
              onClick={() => setTake(opt.id)}
              className={`px-3.5 sm:px-4 py-1.5 rounded-full text-xs transition-all duration-300 flex items-center gap-1.5 ${
                isActive
                  ? 'bg-[#1C1D20] dark:bg-white text-white dark:text-[#1C1D20] font-medium shadow-md'
                  : 'text-[#55565A] dark:text-[#C5C8CD] hover:text-[#1C1D20] dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10'
              }`}
            >
              <span>{opt.label}</span>
              {isActive && <Check className="w-3 h-3" />}
            </button>
          );
        })}

        {/* Info Toggle */}
        <button
          onClick={() => setShowInfo(!showInfo)}
          className="w-7 h-7 rounded-full bg-black/5 dark:bg-white/10 hover:bg-[#455CE9] hover:text-white text-[#7D8085] dark:text-[#999D9E] flex items-center justify-center transition-colors ml-1"
          aria-label="Toggle Take Info"
          title="Explain current design take"
        >
          <Info className="w-3.5 h-3.5" />
        </button>

      </div>
    </div>
  );
};
