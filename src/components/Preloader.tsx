import React, { useState, useEffect } from 'react';

const WORDS = [
  "Hello",
  "Bonjour",
  "स्वागत हे",
  "Ciao",
  "Olá",
  "おい",
  "Hallå",
  "Guten tag",
  "Hallo",
  "Tarun"
];

interface PreloaderProps {
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [index, setIndex] = useState(0);
  const [isSlidingUp, setIsSlidingUp] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Cycle through multilingual greetings
    if (index < WORDS.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 160);
      return () => clearTimeout(timer);
    } else {
      // Hold last word briefly, then slide up with Dennis curved scoop
      const slideTimer = setTimeout(() => {
        setIsSlidingUp(true);
      }, 250);

      const finishTimer = setTimeout(() => {
        setIsFinished(true);
        if (onComplete) onComplete();
      }, 1100);

      return () => {
        clearTimeout(slideTimer);
        clearTimeout(finishTimer);
      };
    }
  }, [index, onComplete]);

  if (isFinished) return null;

  return (
    <div
      className={`fixed inset-0 z-50 pointer-events-none transition-transform duration-800 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        isSlidingUp ? '-translate-y-full' : 'translate-y-0'
      }`}
      style={{
        transitionDuration: '850ms',
      }}
    >
      {/* Dark Preloader Background Screen */}
      <div className="relative w-full h-full bg-[#141517] flex items-center justify-center pointer-events-auto">
        {/* Animated Word Counter with Dennis Snellenberg Dot */}
        <div className="flex items-center gap-3 select-none">
          <span className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-white shrink-0 animate-pulse" />
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-normal text-white tracking-tight font-sans">
            {WORDS[index]}
          </h1>
        </div>

        {/* Bottom Curved Div for Organic Scoop Exit (Dennis Snellenberg signature) */}
        <div className="absolute -bottom-16 sm:-bottom-24 left-0 right-0 h-16 sm:h-24 overflow-hidden pointer-events-none">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            className="w-full h-full preserve-3d"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C480,120 960,120 1440,0 L1440,0 L0,0 Z"
              fill="#141517"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
