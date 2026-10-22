import React, { createContext, useContext, useState, useEffect } from 'react';

export type WebsiteTake = 'sepia-dennis' | 'monocle' | 'darkroom' | 'horizon';

interface TakeContextType {
  take: WebsiteTake;
  setTake: (take: WebsiteTake) => void;
  takeNames: Record<WebsiteTake, { title: string; subtitle: string; description: string }>;
}

const TakeContext = createContext<TakeContextType | undefined>(undefined);

export const takeNames: Record<WebsiteTake, { title: string; subtitle: string; description: string }> = {
  'sepia-dennis': {
    title: 'Option 1: Sepia Dennis (Pure Synthesis)',
    subtitle: 'Dennis Snellenberg Motion in Warm Linen Sepia',
    description: 'The exact Dennis hero, spinning wireframe globe, centered LinkedIn card, name marquee, and 3D globe—bathed in warm sepia linen.'
  },
  'monocle': {
    title: 'Option 2: Editorial Monocle (Broadsheet)',
    subtitle: 'Classic Broadsheet Typography & Archival Plates',
    description: 'Magazine-grade editorial typography, dual-column broadsheet intro, passport plates, and Dennis motion details.'
  },
  'darkroom': {
    title: 'Option 3: Kinetic Darkroom (Amber Sepia)',
    subtitle: 'Warm Darkroom Safelight & Medium Format Focus',
    description: 'Deep bistre & warm amber palette, film negative frame, camera optics inventory, and glowing flight corridors.'
  },
  'horizon': {
    title: 'Option 4: Horizon Atelier (Full Spectrum)',
    subtitle: 'Luminous Alabaster Sepia with Interactive Pillars',
    description: 'Perspective discipline switcher, Vanguard engineering pillars, interactive CV, panoramic world atlas, and Dennis curved footer.'
  }
};

export const TakeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [take, setTakeState] = useState<WebsiteTake>(() => {
    const saved = localStorage.getItem('tarun-take') as WebsiteTake;
    if (saved === 'sepia-dennis' || saved === 'monocle' || saved === 'darkroom' || saved === 'horizon') {
      return saved;
    }
    return 'sepia-dennis'; // Default to Option 1: Sepia Dennis
  });

  useEffect(() => {
    localStorage.setItem('tarun-take', take);
  }, [take]);

  const setTake = (newTake: WebsiteTake) => {
    setTakeState(newTake);
  };

  return (
    <TakeContext.Provider value={{ take, setTake, takeNames }}>
      {children}
    </TakeContext.Provider>
  );
};

export const useTake = () => {
  const context = useContext(TakeContext);
  if (!context) {
    throw new Error('useTake must be used within a TakeProvider');
  }
  return context;
};
