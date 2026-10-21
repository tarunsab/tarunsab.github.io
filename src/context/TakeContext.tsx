import React, { createContext, useContext, useState, useEffect } from 'react';

export type WebsiteTake = 'dennis' | 'editorial' | 'explorer';

interface TakeContextType {
  take: WebsiteTake;
  setTake: (take: WebsiteTake) => void;
  takeNames: Record<WebsiteTake, { title: string; subtitle: string; description: string }>;
}

const TakeContext = createContext<TakeContextType | undefined>(undefined);

export const takeNames: Record<WebsiteTake, { title: string; subtitle: string; description: string }> = {
  dennis: {
    title: 'Take 1: Dennis Snellenberg Purity',
    subtitle: 'Minimalist Motion & Monochrome Luxury',
    description: 'Iconic wireframe hanger, centered portrait card, contained TARUN SABBINENI marquee, 3D dot-matrix globe, and curved scoop footer.'
  },
  editorial: {
    title: 'Take 2: Oliur / Dark Luxury Bento',
    subtitle: 'Obsidian & Champagne Gold Atelier',
    description: 'Executive darkroom aesthetic, camera rangefinder frame, Apple-style 6-cell bento grid, and high-contrast luxury typography.'
  },
  explorer: {
    title: 'Take 3: Aristide Benoist Exhibition',
    subtitle: 'Full-Screen Curated Chapter Storyboard',
    description: 'Radical editorial layout with fixed curator sidebar on the left and interactive full-viewport exhibition chapters on the right.'
  }
};

export const TakeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [take, setTakeState] = useState<WebsiteTake>(() => {
    const saved = localStorage.getItem('tarun-take') as WebsiteTake;
    if (saved === 'dennis' || saved === 'editorial' || saved === 'explorer') {
      return saved;
    }
    return 'dennis'; // Default to Dennis
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
