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
    description: 'Iconic wireframe hanger, pure name marquee, 3D celestial globe, and floating cursor thumbnails.'
  },
  editorial: {
    title: 'Take 2: Aristide Benoist Atelier',
    subtitle: 'High-Fashion Editorial & Fine Art Photography',
    description: 'Magazine typography, film stock metadata, archival visual darkroom, and vintage visa stamps.'
  },
  explorer: {
    title: 'Take 3: Horizon Explorer',
    subtitle: 'Panoramic World & Platform Engineering',
    description: 'See the whole world at once, interactive camera aperture dial, Barclays DevEx pillars, and flight telemetry.'
  }
};

export const TakeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [take, setTakeState] = useState<WebsiteTake>(() => {
    const saved = localStorage.getItem('tarun-take') as WebsiteTake;
    if (saved === 'dennis' || saved === 'editorial' || saved === 'explorer') {
      return saved;
    }
    return 'dennis'; // Default to user's preferred Dennis version
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
