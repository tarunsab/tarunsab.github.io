import React, { useState, useEffect } from 'react';

// Multilingual Greetings: Hindi, Telugu, English, Gujarati, etc.
const GREETINGS = [
  { word: "Hello", lang: "English" },
  { word: "नमस्ते", lang: "Hindi" },
  { word: "నమస్కారం", lang: "Telugu" },
  { word: "નમસ્તે", lang: "Gujarati" },
  { word: "வணக்கம்", lang: "Tamil" },
  { word: "ನಮಸ್ಕಾರ", lang: "Kannada" },
  { word: "नमस्कार", lang: "Marathi" },
  { word: "Bonjour", lang: "French" },
  { word: "Tarun Sabbineni", lang: "Personal" },
];

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [index, setIndex] = useState(0);
  const [isSlidingUp, setIsSlidingUp] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (index < GREETINGS.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 160);
      return () => clearTimeout(timer);
    } else {
      // Hold final greeting briefly, then slide up with organic scoop
      const slideTimer = setTimeout(() => {
        setIsSlidingUp(true);
      }, 260);

      const finishTimer = setTimeout(() => {
        setIsFinished(true);
        if (onComplete) onComplete();
      }, 1050);

      return () => {
        clearTimeout(slideTimer);
        clearTimeout(finishTimer);
      };
    }
  }, [index, onComplete]);

  if (isFinished) return null;

  return (
    <div
      className={`fixed inset-0 z-50 pointer-events-none transition-transform ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isSlidingUp ? '-translate-y-full' : 'translate-y-0'
      }`}
      style={{
        transitionDuration: '850ms',
      }}
    >
      {/* Preloader Screen */}
      <div className="relative w-full h-full bg-[#1C1D20] text-white flex flex-col items-center justify-center pointer-events-auto select-none">
        {/* Animated Greeting with Dennis Snellenberg Blue Dot */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#455CE9] shrink-0 animate-ping" />
            <h1
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white tracking-tight"
              style={{
                fontFamily: '"Neue Montreal", "Noto Sans Devanagari", "Noto Sans Telugu", "Noto Sans Gujarati", system-ui, -apple-system, sans-serif'
              }}
            >
              {GREETINGS[index].word}
            </h1>
          </div>
          
          <span className="text-xs uppercase tracking-widest text-[#999D9E] font-mono mt-2">
            {GREETINGS[index].lang}
          </span>
        </div>

        {/* Bottom Curved Scoop Exit (Dennis Snellenberg signature) */}
        <div className="absolute -bottom-16 sm:-bottom-24 left-0 right-0 h-16 sm:h-24 overflow-hidden pointer-events-none">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            className="w-full h-full preserve-3d"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C480,120 960,120 1440,0 L1440,0 L0,0 Z"
              fill="#1C1D20"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
