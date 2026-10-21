import React, { useState, useEffect, useRef, useMemo } from 'react';
import worldMap from '@svg-maps/world';
import createGlobe from 'cobe';
import { 
  Shuffle, 
  Plane, 
  ChevronLeft, 
  ChevronRight, 
  Compass, 
  MapPin, 
  Grid, 
  Globe2, 
  Map as MapIcon,
  ArrowUpRight
} from 'lucide-react';
import { visitedCountries } from '../data/siteData';
import { CountryDestination } from '../types';
import { useTheme } from '../context/ThemeContext';
import { useTake } from '../context/TakeContext';

// Aviation & expedition metadata for each destination
const destinationMeta: Record<string, { airportCode: string; airportName: string; flightDuration: string; distance: string; localScript: string }> = {
  gbr: { airportCode: 'LHR', airportName: 'London Heathrow (Base)', flightDuration: 'Home Base', distance: '0 km', localScript: 'United Kingdom' },
  fra: { airportCode: 'CDG', airportName: 'Paris Charles de Gaulle', flightDuration: '1h 15m', distance: '340 km', localScript: 'République française' },
  bel: { airportCode: 'BRU', airportName: 'Brussels National', flightDuration: '1h 05m', distance: '320 km', localScript: 'België / Belgique' },
  nld: { airportCode: 'AMS', airportName: 'Amsterdam Schiphol', flightDuration: '1h 10m', distance: '360 km', localScript: 'Nederland' },
  che: { airportCode: 'ZRH', airportName: 'Zurich Kloten', flightDuration: '1h 40m', distance: '780 km', localScript: 'Schweiz / Suisse' },
  deu: { airportCode: 'BER', airportName: 'Berlin Brandenburg', flightDuration: '1h 50m', distance: '930 km', localScript: 'Deutschland' },
  esp: { airportCode: 'MAD', airportName: 'Madrid Barajas', flightDuration: '2h 20m', distance: '1,260 km', localScript: 'España' },
  prt: { airportCode: 'LIS', airportName: 'Lisbon Humberto Delgado', flightDuration: '2h 40m', distance: '1,580 km', localScript: 'Portugal' },
  grc: { airportCode: 'ATH', airportName: 'Athens International', flightDuration: '3h 40m', distance: '2,390 km', localScript: 'Ελλάδα' },
  bgr: { airportCode: 'SOF', airportName: 'Sofia Airport', flightDuration: '3h 15m', distance: '2,020 km', localScript: 'България' },
  hrv: { airportCode: 'DBV', airportName: 'Dubrovnik Airport', flightDuration: '2h 30m', distance: '1,680 km', localScript: 'Hrvatska' },
  mne: { airportCode: 'TIV', airportName: 'Tivat Adriatic', flightDuration: '2h 45m', distance: '1,840 km', localScript: 'Crna Gora' },
  lie: { airportCode: 'ACH', airportName: 'Altenrhein St. Gallen', flightDuration: '1h 45m', distance: '790 km', localScript: 'Liechtenstein' },
  ita: { airportCode: 'FCO', airportName: 'Rome Fiumicino', flightDuration: '2h 25m', distance: '1,430 km', localScript: 'Italia' },
  ind: { airportCode: 'DEL', airportName: 'Indira Gandhi International', flightDuration: '8h 50m', distance: '6,710 km', localScript: 'भारत / India' },
  sgp: { airportCode: 'SIN', airportName: 'Singapore Changi', flightDuration: '13h 05m', distance: '10,880 km', localScript: 'Singapore' },
  mys: { airportCode: 'KUL', airportName: 'Kuala Lumpur International', flightDuration: '12h 40m', distance: '10,550 km', localScript: 'Malaysia' },
  are: { airportCode: 'DXB', airportName: 'Dubai International', flightDuration: '6h 55m', distance: '5,470 km', localScript: 'الإمارات العربية المتحدة' },
  mdv: { airportCode: 'MLE', airportName: 'Velana International Malé', flightDuration: '10h 20m', distance: '8,520 km', localScript: 'ދިވެހިރާއްޖެ' },
  idn: { airportCode: 'DPS', airportName: 'Ngurah Rai Bali', flightDuration: '14h 30m', distance: '11,720 km', localScript: 'Indonesia' },
  usa: { airportCode: 'JFK', airportName: 'John F. Kennedy New York', flightDuration: '7h 45m', distance: '5,570 km', localScript: 'United States of America' }
};

// Precise SVG centroid coordinates on the 1010 x 666 world map projection
const countryCentroids: Record<string, { cx: number; cy: number }> = {
  gb: { cx: 230, cy: 135 },
  fr: { cx: 236, cy: 154 },
  be: { cx: 242, cy: 144 },
  nl: { cx: 242, cy: 139 },
  ch: { cx: 247, cy: 152 },
  de: { cx: 248, cy: 138 },
  es: { cx: 216, cy: 172 },
  pt: { cx: 204, cy: 178 },
  gr: { cx: 271, cy: 172 },
  bg: { cx: 274, cy: 161 },
  hr: { cx: 258, cy: 156 },
  me: { cx: 263, cy: 161 },
  li: { cx: 249, cy: 152 },
  it: { cx: 254, cy: 160 },
  in: { cx: 348, cy: 215 },
  sg: { cx: 401, cy: 258 },
  my: { cx: 400, cy: 250 },
  ae: { cx: 326, cy: 202 },
  mv: { cx: 346, cy: 262 },
  id: { cx: 420, cy: 275 },
  us: { cx: 120, cy: 220 }
};

export const TravelAtlas: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const { take } = useTake();

  // Selected destination (default to Switzerland for rich visuals)
  const [selectedCountry, setSelectedCountry] = useState<CountryDestination>(visitedCountries[4]);
  
  // Active view: 'globe' (preferred 3D) vs 'panoramic' (whole world) vs 'archive' (passport stamps)
  // Default based on active take, but user can click to switch anytime
  const [activeView, setActiveView] = useState<'globe' | 'panoramic' | 'archive'>(() => {
    if (take === 'dennis') return 'globe';
    if (take === 'editorial') return 'archive';
    return 'panoramic';
  });

  // Sync default view when take changes
  useEffect(() => {
    if (take === 'dennis') setActiveView('globe');
    else if (take === 'editorial') setActiveView('archive');
    else if (take === 'explorer') setActiveView('panoramic');
  }, [take]);

  const [selectedRegion, setSelectedRegion] = useState<string>('all');

  // 3D Globe Refs
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const currentPhi = useRef(-1.71);
  const currentTheta = useRef(0.81);
  const targetPhi = useRef(-1.71);
  const targetTheta = useRef(0.81);

  // Map 2-letter codes for lookup
  const visitedCodesMap = useMemo(
    () => new Map(visitedCountries.map((c) => [c.code.toLowerCase(), c])),
    []
  );

  // Compute 3D target angles when selected country changes
  useEffect(() => {
    const lonRad = (selectedCountry.lng * Math.PI) / 180;
    const latRad = (selectedCountry.lat * Math.PI) / 180;
    targetPhi.current = -lonRad - Math.PI / 2;
    targetTheta.current = Math.max(-0.75, Math.min(0.75, latRad));
  }, [selectedCountry]);

  // Mount 3D WebGL Globe if in globe view
  useEffect(() => {
    if (activeView !== 'globe' || !canvasRef.current) return;

    const markers = visitedCountries.map((c) => {
      const isSelected = c.id === selectedCountry.id;
      return {
        location: [c.lat, c.lng] as [number, number],
        size: isSelected ? 0.08 : 0.035,
        color: isSelected 
          ? [0.27, 0.36, 0.91] as [number, number, number]
          : isDark 
            ? [0.85, 0.88, 0.92] as [number, number, number] 
            : [0.18, 0.19, 0.22] as [number, number, number],
        id: c.id
      };
    });

    const arcs = selectedCountry.id !== 'gbr' ? [
      {
        from: [51.5074, -0.1278] as [number, number],
        to: [selectedCountry.lat, selectedCountry.lng] as [number, number],
        color: [0.27, 0.36, 0.91] as [number, number, number]
      }
    ] : [];

    let animId: number;
    let globe: any = null;

    try {
      globe = createGlobe(canvasRef.current, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 2, 2),
        width: 800,
        height: 800,
        phi: currentPhi.current,
        theta: currentTheta.current,
        dark: isDark ? 1 : 0,
        diffuse: isDark ? 1.2 : 1.4,
        mapSamples: 20000,
        mapBrightness: isDark ? 6 : 4,
        baseColor: isDark ? [0.15, 0.16, 0.18] : [0.91, 0.92, 0.94],
        markerColor: isDark ? [0.95, 0.95, 0.98] : [0.15, 0.16, 0.18],
        glowColor: isDark ? [0.27, 0.36, 0.91] : [0.72, 0.80, 0.98],
        arcColor: [0.27, 0.36, 0.91],
        arcWidth: 0.8,
        arcHeight: 0.3,
        markers,
        arcs
      });

      const loop = () => {
        if (pointerInteracting.current === null) {
          let diffPhi = (targetPhi.current - currentPhi.current) % (Math.PI * 2);
          if (diffPhi > Math.PI) diffPhi -= Math.PI * 2;
          if (diffPhi < -Math.PI) diffPhi += Math.PI * 2;

          if (Math.abs(diffPhi) < 0.005 && Math.abs(targetTheta.current - currentTheta.current) < 0.005) {
            targetPhi.current += 0.0015;
            currentPhi.current += 0.0015;
          } else {
            currentPhi.current += diffPhi * 0.06;
            currentTheta.current += (targetTheta.current - currentTheta.current) * 0.06;
          }
        }

        if (globe) {
          globe.update({
            phi: currentPhi.current,
            theta: currentTheta.current
          });
        }

        animId = requestAnimationFrame(loop);
      };

      animId = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(animId);
        if (globe) globe.destroy();
      };
    } catch (err) {
      console.warn("WebGL globe fallback:", err);
      return () => {
        cancelAnimationFrame(animId);
        if (globe) globe.destroy();
      };
    }
  }, [activeView, isDark, selectedCountry]);

  // Stepper
  const currentIndex = visitedCountries.findIndex((c) => c.id === selectedCountry.id);

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % visitedCountries.length;
    setSelectedCountry(visitedCountries[nextIdx]);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + visitedCountries.length) % visitedCountries.length;
    setSelectedCountry(visitedCountries[prevIdx]);
  };

  const handleShuffle = () => {
    const randomIdx = Math.floor(Math.random() * visitedCountries.length);
    setSelectedCountry(visitedCountries[randomIdx]);
  };

  const activeMeta = destinationMeta[selectedCountry.id] || {
    airportCode: selectedCountry.code,
    airportName: selectedCountry.name,
    flightDuration: 'Direct',
    distance: 'Variable',
    localScript: selectedCountry.name
  };

  const regions = [
    { id: 'all', label: 'All Continents (21)' },
    { id: 'Western Europe', label: 'Western Europe (5)' },
    { id: 'Southern Europe', label: 'Southern Europe (6)' },
    { id: 'Central Europe', label: 'Central Europe (2)' },
    { id: 'Asia', label: 'Asia & Middle East (6)' },
    { id: 'North America', label: 'Americas (1)' }
  ];

  const filteredCountries = visitedCountries.filter((c) => {
    if (selectedRegion === 'all') return true;
    if (selectedRegion === 'Asia') {
      return c.region.includes('Asia') || c.region.includes('Middle East');
    }
    return c.region.includes(selectedRegion);
  });

  // Pre-split unvisited vs visited locations for optimal rendering performance (zero lag)
  const { unvisitedPaths, visitedPaths } = useMemo(() => {
    const unvisited: Array<{ id: string; name: string; path: string }> = [];
    const visited: Array<{ id: string; name: string; path: string; data: CountryDestination }> = [];

    (worldMap.locations as Array<{ id: string; name: string; path: string }>).forEach((loc) => {
      const code = loc.id.toLowerCase();
      const v = visitedCodesMap.get(code);
      if (v) {
        visited.push({ ...loc, data: v });
      } else {
        unvisited.push(loc);
      }
    });

    return { unvisitedPaths: unvisited, visitedPaths: visited };
  }, [visitedCodesMap]);

  // Bug-free, smooth Flight arc calculation on flat map
  const flightArc = useMemo(() => {
    const london = countryCentroids['gb'] || { cx: 230, cy: 135 };
    const dest = countryCentroids[selectedCountry.code.toLowerCase()] || { cx: 247, cy: 152 };
    const midX = (london.cx + dest.cx) / 2;
    const dist = Math.hypot(dest.cx - london.cx, dest.cy - london.cy);
    const arcHeight = Math.min(80, Math.max(30, dist * 0.25));
    const midY = Math.min(london.cy, dest.cy) - arcHeight;
    return `M ${london.cx} ${london.cy} Q ${midX} ${midY} ${dest.cx} ${dest.cy}`;
  }, [selectedCountry]);

  return (
    <section 
      id="atlas" 
      className="bg-[#FAFAFA] dark:bg-[#141517] text-[#1C1D20] dark:text-white py-24 sm:py-36 px-6 sm:px-12 lg:px-16 border-b border-[#1C1D20]/10 dark:border-white/10 transition-colors relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#1C1D20]/15 dark:border-white/15 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs uppercase tracking-[0.2em] text-[#7D8085] dark:text-[#999D9E] font-medium">
                04 / Cartography & Global Expeditions
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#455CE9]" />
              <span className="text-xs font-mono text-[#455CE9] uppercase">
                London Base • 21 Destinations
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-normal tracking-tight text-[#1C1D20] dark:text-white">
              Travel Atlas
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* 3 Cartographic Views Switcher: 3D Globe (Preferred) vs Panoramic Map (Whole World) vs Archive */}
            <div className="p-1 rounded-full bg-[#EAECEF] dark:bg-white/10 flex items-center text-xs font-normal shadow-sm">
              <button
                onClick={() => setActiveView('globe')}
                className={`px-3.5 sm:px-4 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                  activeView === 'globe'
                    ? 'bg-[#1C1D20] dark:bg-white text-white dark:text-[#1C1D20] shadow-sm font-medium'
                    : 'text-[#6A6C70] dark:text-white/70 hover:text-[#1C1D20]'
                }`}
                title="3D Dot-Matrix Globe (Preferred smooth experience)"
              >
                <Globe2 className="w-3.5 h-3.5" />
                <span>3D Celestial Globe</span>
              </button>

              <button
                onClick={() => setActiveView('panoramic')}
                className={`px-3.5 sm:px-4 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                  activeView === 'panoramic'
                    ? 'bg-[#1C1D20] dark:bg-white text-white dark:text-[#1C1D20] shadow-sm font-medium'
                    : 'text-[#6A6C70] dark:text-white/70 hover:text-[#1C1D20]'
                }`}
                title="See the whole world at once"
              >
                <MapIcon className="w-3.5 h-3.5" />
                <span>Panoramic World</span>
              </button>

              <button
                onClick={() => setActiveView('archive')}
                className={`px-3.5 sm:px-4 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                  activeView === 'archive'
                    ? 'bg-[#1C1D20] dark:bg-white text-white dark:text-[#1C1D20] shadow-sm font-medium'
                    : 'text-[#6A6C70] dark:text-white/70 hover:text-[#1C1D20]'
                }`}
              >
                <Grid className="w-3.5 h-3.5" />
                <span>Passport Archive (21)</span>
              </button>
            </div>

            {/* Random Shuffle Button */}
            <button
              onClick={handleShuffle}
              className="px-4 py-2 rounded-full bg-white dark:bg-white/10 hover:bg-[#455CE9] hover:text-white dark:hover:bg-[#455CE9] dark:hover:text-white text-[#1C1D20] dark:text-white border border-[#1C1D20]/10 dark:border-white/10 transition-all text-xs font-normal flex items-center gap-2 group shadow-sm"
              title="Fly to random destination"
            >
              <Shuffle className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
              <span>Random</span>
            </button>
          </div>
        </div>

        {/* ------------------------------------------------------------------------- */}
        {/* VIEW 1: 3D CELESTIAL GLOBE (Silky Smooth WebGL 60fps Experience) */}
        {/* ------------------------------------------------------------------------- */}
        {activeView === 'globe' && (
          <div className="space-y-12 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Globe Stage */}
              <div className="lg:col-span-7 relative flex flex-col items-center justify-center min-h-[500px] sm:min-h-[580px] rounded-3xl bg-[#F0F1F4] dark:bg-[#18191B] border border-[#1C1D20]/10 dark:border-white/10 p-6 sm:p-10 overflow-hidden shadow-sm">
                
                {/* HUD Header */}
                <div className="w-full flex items-center justify-between text-xs text-[#7D8085] dark:text-[#999D9E] z-10 mb-2 font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#455CE9] animate-ping" />
                    <span className="uppercase tracking-wider">
                      Origin: London LHR (51.5°N, 0.1°W)
                    </span>
                  </div>

                  <div className="flex items-center gap-2 bg-white/70 dark:bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-black/5 dark:border-white/5">
                    <Compass className="w-3 h-3 text-[#455CE9]" />
                    <span>
                      {selectedCountry.lat.toFixed(2)}°N, {selectedCountry.lng.toFixed(2)}°E
                    </span>
                  </div>
                </div>

                {/* The 3D Canvas */}
                <div 
                  className="relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
                  onPointerDown={(e) => {
                    pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
                  }}
                  onPointerUp={() => {
                    pointerInteracting.current = null;
                  }}
                  onPointerOut={() => {
                    pointerInteracting.current = null;
                  }}
                  onMouseMove={(e) => {
                    if (pointerInteracting.current !== null) {
                      const delta = e.clientX - pointerInteracting.current;
                      pointerInteractionMovement.current = delta;
                      targetPhi.current += delta * 0.005;
                      pointerInteracting.current = e.clientX;
                    }
                  }}
                  onTouchStart={(e) => {
                    if (e.touches[0]) {
                      pointerInteracting.current = e.touches[0].clientX - pointerInteractionMovement.current;
                    }
                  }}
                  onTouchEnd={() => {
                    pointerInteracting.current = null;
                  }}
                  onTouchMove={(e) => {
                    if (pointerInteracting.current !== null && e.touches[0]) {
                      const delta = e.touches[0].clientX - pointerInteracting.current;
                      pointerInteractionMovement.current = delta;
                      targetPhi.current += delta * 0.005;
                      pointerInteracting.current = e.touches[0].clientX;
                    }
                  }}
                >
                  <canvas
                    ref={canvasRef}
                    style={{ width: '100%', height: '100%', contain: 'layout paint size', opacity: 1 }}
                    className="w-full h-full"
                  />
                  <div className="absolute inset-0 rounded-full pointer-events-none ring-1 ring-[#455CE9]/20 shadow-[0_0_80px_rgba(69,92,233,0.15)]" />
                </div>

                {/* HUD Footer */}
                <div className="w-full flex items-center justify-between text-xs text-[#7D8085] dark:text-[#999D9E] z-10 mt-2 font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1C1D20]/40 dark:bg-white/40" />
                    <span>DRAG GLOBE TO ROTATE</span>
                  </div>
                  <div>
                    <span>Active Route: LHR ✈ {activeMeta.airportCode}</span>
                  </div>
                </div>
              </div>

              {/* Dossier Side */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <DossierCard 
                  selectedCountry={selectedCountry}
                  activeMeta={activeMeta}
                  currentIndex={currentIndex}
                  totalCount={visitedCountries.length}
                  onPrev={handlePrev}
                  onNext={handleNext}
                />
              </div>

            </div>

            {/* Destination Strip */}
            <DestinationRibbon 
              regions={regions}
              selectedRegion={selectedRegion}
              onSelectRegion={setSelectedRegion}
              filteredCountries={filteredCountries}
              selectedCountry={selectedCountry}
              onSelectCountry={setSelectedCountry}
            />
          </div>
        )}

        {/* ------------------------------------------------------------------------- */}
        {/* VIEW 2: PANORAMIC WORLD MAP (Whole World at Once — Bug-Free & Fast) */}
        {/* ------------------------------------------------------------------------- */}
        {activeView === 'panoramic' && (
          <div className="space-y-12 animate-fadeIn">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Complete Panoramic Map Stage */}
              <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl bg-[#F0F1F4] dark:bg-[#18191B] border border-[#1C1D20]/10 dark:border-white/10 p-5 sm:p-7 shadow-sm relative overflow-hidden">
                
                {/* Top Controls on Map */}
                <div className="flex items-center justify-between mb-4 text-xs font-mono text-[#7D8085] dark:text-[#999D9E]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#455CE9] animate-pulse" />
                    <span className="uppercase tracking-wider">
                      Panoramic World Projection (All 7 Continents)
                    </span>
                  </div>
                  <div className="text-[11px] text-[#455CE9]">
                    All 21 Countries Visible at Once
                  </div>
                </div>

                {/* Bug-Free High-Performance SVG Map */}
                <div className="relative w-full aspect-[1010/580] rounded-2xl overflow-hidden bg-white dark:bg-[#141517] border border-[#1C1D20]/10 dark:border-white/5 shadow-inner select-none">
                  
                  <svg
                    viewBox="0 0 1010 666"
                    className="w-full h-full object-cover"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="flightArcGradFast" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1C1D20" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#455CE9" stopOpacity="1" />
                      </linearGradient>
                    </defs>

                    {/* Subtle Cartographic Lat/Long Grid Lines */}
                    <g stroke="currentColor" strokeWidth="0.3" className="text-black/[0.04] dark:text-white/[0.04]">
                      <line x1="0" y1="333" x2="1010" y2="333" />
                      <line x1="0" y1="180" x2="1010" y2="180" />
                      <line x1="0" y1="480" x2="1010" y2="480" />
                      <line x1="505" y1="0" x2="505" y2="666" />
                      <line x1="250" y1="0" x2="250" y2="666" />
                      <line x1="750" y1="0" x2="750" y2="666" />
                    </g>

                    {/* Static Background Unvisited Continents (Rendered once, zero re-render lag) */}
                    <g className="fill-[#EAECEF] dark:fill-[#202226] stroke-[#D6D9DE] dark:stroke-[#2B2E33] stroke-[0.4] pointer-events-none">
                      {unvisitedPaths.map((loc) => (
                        <path key={loc.id} d={loc.path} />
                      ))}
                    </g>

                    {/* 21 Visited Countries Highlighted & Interactive */}
                    <g>
                      {visitedPaths.map((loc) => {
                        const isSelected = loc.data.id === selectedCountry.id;
                        return (
                          <path
                            key={loc.id}
                            d={loc.path}
                            onClick={() => setSelectedCountry(loc.data)}
                            className={`cursor-pointer transition-colors duration-200 ${
                              isSelected
                                ? 'fill-[#455CE9] stroke-[#3548BE] dark:stroke-[#6378F7] stroke-[1.5]'
                                : 'fill-[#455CE9]/80 dark:fill-[#455CE9]/70 hover:fill-[#3548BE] dark:hover:fill-[#586EF5] stroke-[#3548BE]/40 dark:stroke-[#6378F7]/50 stroke-[0.75]'
                            }`}
                          >
                            <title>{loc.name} ({loc.data.yearVisited})</title>
                          </path>
                        );
                      })}
                    </g>

                    {/* Flight Arc from London to Selected Destination */}
                    {selectedCountry.id !== 'gbr' && (
                      <g>
                        <path
                          d={flightArc}
                          fill="none"
                          stroke="#455CE9"
                          strokeWidth="3.5"
                          strokeOpacity="0.3"
                          strokeLinecap="round"
                        />
                        <path
                          d={flightArc}
                          fill="none"
                          stroke="url(#flightArcGradFast)"
                          strokeWidth="1.75"
                          strokeDasharray="4 3"
                          strokeLinecap="round"
                        />
                      </g>
                    )}

                    {/* Centroid Pins for All 21 Visited Destinations */}
                    {visitedCountries.map((c) => {
                      const coords = countryCentroids[c.code.toLowerCase()];
                      if (!coords) return null;
                      const isSelected = c.id === selectedCountry.id;

                      return (
                        <g 
                          key={`pin-${c.id}`} 
                          className="cursor-pointer"
                          onClick={() => setSelectedCountry(c)}
                        >
                          {isSelected && (
                            <circle
                              cx={coords.cx}
                              cy={coords.cy}
                              r="7"
                              fill="#455CE9"
                              fillOpacity="0.25"
                              className="animate-ping"
                            />
                          )}
                          <circle
                            cx={coords.cx}
                            cy={coords.cy}
                            r={isSelected ? 4 : 2}
                            fill={isSelected ? '#FFFFFF' : '#455CE9'}
                            stroke={isSelected ? '#455CE9' : '#FFFFFF'}
                            strokeWidth="1.2"
                          />
                        </g>
                      );
                    })}

                    {/* London Base Pin */}
                    <g>
                      <circle cx={countryCentroids['gb'].cx} cy={countryCentroids['gb'].cy} r="4" fill="#1C1D20" stroke="#FFFFFF" strokeWidth="1.5" />
                      <circle cx={countryCentroids['gb'].cx} cy={countryCentroids['gb'].cy} r="1.5" fill="#455CE9" />
                    </g>
                  </svg>

                  {/* Badge Overlay */}
                  <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white font-mono text-[10px] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#455CE9]" />
                    <span>21 Visited Nations Illuminated Across Europe, Asia, ME & Americas</span>
                  </div>

                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur-md text-[10px] font-mono text-[#1C1D20] dark:text-white border border-black/5 dark:border-white/5">
                    Click territory to inspect
                  </div>
                </div>

                <div className="w-full flex items-center justify-between text-xs text-[#7D8085] dark:text-[#999D9E] z-10 mt-3 font-mono">
                  <div>Base: London LHR (51.5°N, 0.1°W)</div>
                  <div>Active: {selectedCountry.name} ({activeMeta.airportCode})</div>
                </div>

              </div>

              {/* Dossier Side */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <DossierCard 
                  selectedCountry={selectedCountry}
                  activeMeta={activeMeta}
                  currentIndex={currentIndex}
                  totalCount={visitedCountries.length}
                  onPrev={handlePrev}
                  onNext={handleNext}
                />
              </div>

            </div>

            {/* Destination Strip */}
            <DestinationRibbon 
              regions={regions}
              selectedRegion={selectedRegion}
              onSelectRegion={setSelectedRegion}
              filteredCountries={filteredCountries}
              selectedCountry={selectedCountry}
              onSelectCountry={setSelectedCountry}
            />
          </div>
        )}

        {/* ------------------------------------------------------------------------- */}
        {/* VIEW 3: PASSPORT ARCHIVE (Collector's Visa Stamp Gallery) */}
        {/* ------------------------------------------------------------------------- */}
        {activeView === 'archive' && (
          <div className="animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visitedCountries.map((country) => {
                const meta = destinationMeta[country.id] || {
                  airportCode: country.code,
                  airportName: country.name,
                  flightDuration: 'Direct',
                  distance: 'Variable',
                  localScript: country.name
                };

                return (
                  <div
                    key={country.id}
                    className="group bg-[#F0F1F4] dark:bg-[#18191B] rounded-3xl p-6 border border-[#1C1D20]/10 dark:border-white/10 hover:border-[#455CE9]/40 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-4 border-b border-[#1C1D20]/10 dark:border-white/10 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-[#455CE9] bg-[#455CE9]/10 px-2 py-0.5 rounded">
                            {country.code}
                          </span>
                          <span className="text-xs font-mono text-[#7D8085] dark:text-[#999D9E]">
                            LHR ➔ {meta.airportCode}
                          </span>
                        </div>
                        <span className="text-xs font-mono text-[#7D8085] dark:text-[#999D9E]">
                          {country.yearVisited}
                        </span>
                      </div>

                      <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-4 relative bg-neutral-200 dark:bg-neutral-800">
                        <img
                          src={country.photoUrl}
                          alt={country.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-black/60 text-[10px] text-white font-mono backdrop-blur-sm">
                          {country.region}
                        </div>
                      </div>

                      <h4 className="text-2xl font-normal tracking-tight text-[#1C1D20] dark:text-white mb-1">
                        {country.name}
                      </h4>
                      <p className="text-xs text-[#7D8085] dark:text-[#999D9E] font-mono mb-3">
                        {meta.localScript} • {country.lat.toFixed(2)}°N, {country.lng.toFixed(2)}°E
                      </p>

                      <p className="text-xs text-[#4A4D52] dark:text-[#C5C8CD] line-clamp-2 leading-relaxed mb-4">
                        {country.travelNotes}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#1C1D20]/10 dark:border-white/10 flex items-center justify-between">
                      <div className="text-[10px] font-mono text-[#7D8085] dark:text-[#999D9E]">
                        {country.highlights[0]}
                      </div>
                      <button
                        onClick={() => {
                          setSelectedCountry(country);
                          setActiveView('globe');
                        }}
                        className="px-3 py-1.5 rounded-full bg-white dark:bg-white/10 hover:bg-[#455CE9] hover:text-white dark:hover:bg-[#455CE9] dark:hover:text-white text-xs font-medium transition-colors flex items-center gap-1.5 border border-black/5 dark:border-white/10"
                      >
                        <span>Inspect in 3D</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

// Reusable Editorial Dossier Card Sub-component
interface DossierCardProps {
  selectedCountry: CountryDestination;
  activeMeta: { airportCode: string; airportName: string; flightDuration: string; distance: string; localScript: string };
  currentIndex: number;
  totalCount: number;
  onPrev: () => void;
  onNext: () => void;
}

const DossierCard: React.FC<DossierCardProps> = ({
  selectedCountry,
  activeMeta,
  currentIndex,
  totalCount,
  onPrev,
  onNext
}) => {
  return (
    <div className="bg-[#F0F1F4] dark:bg-[#18191B] rounded-3xl p-6 sm:p-8 border border-[#1C1D20]/10 dark:border-white/10 shadow-sm relative overflow-hidden">
      
      {/* Decorative Subtle Stamp in Background */}
      <div className="absolute top-6 right-6 opacity-10 dark:opacity-5 pointer-events-none select-none font-mono text-6xl font-black">
        {selectedCountry.code}
      </div>

      {/* Top Flight Vector Pill */}
      <div className="flex items-center justify-between gap-4 pb-5 border-b border-[#1C1D20]/10 dark:border-white/10 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-[#455CE9] text-white flex items-center justify-center">
            <Plane className="w-3.5 h-3.5 transform -rotate-45" />
          </div>
          <div>
            <div className="text-xs font-mono font-medium tracking-wider text-[#1C1D20] dark:text-white">
              LON ➔ {activeMeta.airportCode}
            </div>
            <div className="text-[10px] text-[#7D8085] dark:text-[#999D9E]">
              {activeMeta.airportName}
            </div>
          </div>
        </div>

        <div className="text-right">
          <div className="text-xs font-mono text-[#455CE9] font-medium">
            {activeMeta.distance}
          </div>
          <div className="text-[10px] text-[#7D8085] dark:text-[#999D9E]">
            Flight: {activeMeta.flightDuration}
          </div>
        </div>
      </div>

      {/* Cinematic Photography Display */}
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6 group border border-[#1C1D20]/10 dark:border-white/10 bg-neutral-200 dark:bg-neutral-800">
        <img
          src={selectedCountry.photoUrl}
          alt={selectedCountry.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-[10px] text-white font-mono flex items-center gap-1.5 border border-white/15">
          <MapPin className="w-3 h-3 text-[#455CE9]" />
          <span>{selectedCountry.region}</span>
        </div>

        <div className="absolute bottom-3 left-3 text-white">
          <div className="text-[10px] font-mono tracking-widest uppercase opacity-80">
            Class of {selectedCountry.yearVisited}
          </div>
          <div className="text-lg font-medium tracking-tight">
            {selectedCountry.name}
          </div>
        </div>

        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded bg-white/20 backdrop-blur-md text-white font-mono text-xs font-bold border border-white/20">
          {selectedCountry.code}
        </div>
      </div>

      {/* Country Title & Local Script */}
      <div className="mb-4">
        <div className="flex items-baseline justify-between">
          <h3 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#1C1D20] dark:text-white">
            {selectedCountry.name}
          </h3>
          <span className="text-xs font-mono text-[#7D8085] dark:text-[#999D9E]">
            {activeMeta.localScript}
          </span>
        </div>
        <p className="text-xs text-[#7D8085] dark:text-[#999D9E] font-mono mt-1">
          {selectedCountry.region} • {selectedCountry.lat.toFixed(4)}°N, {selectedCountry.lng.toFixed(4)}°E
        </p>
      </div>

      {/* Travelogue & Field Notes */}
      <p className="text-sm leading-relaxed text-[#4A4D52] dark:text-[#C5C8CD] mb-6 font-normal">
        {selectedCountry.travelNotes}
      </p>

      {/* Field Highlights */}
      <div className="mb-6 pt-5 border-t border-[#1C1D20]/10 dark:border-white/10">
        <span className="text-[11px] font-mono uppercase tracking-wider text-[#7D8085] dark:text-[#999D9E] block mb-3">
          Selected Exploration Highlights
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {selectedCountry.highlights.map((highlight, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-2 text-xs text-[#2D2F33] dark:text-[#E2E4E8] bg-white/60 dark:bg-white/5 px-3 py-2 rounded-xl border border-black/5 dark:border-white/5"
            >
              <span className="font-mono text-[10px] text-[#455CE9] font-medium">
                0{idx + 1}
              </span>
              <span className="truncate">{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Passport Visa Stamp */}
      <div className="pt-4 border-t border-[#1C1D20]/10 dark:border-white/10 flex items-center justify-between">
        <div className="inline-flex items-center gap-3 px-3 py-2 rounded-xl border border-[#455CE9]/30 bg-[#455CE9]/5 dark:bg-[#455CE9]/10 transform -rotate-1">
          <div className="w-8 h-8 rounded-full border border-dashed border-[#455CE9] flex items-center justify-center font-mono text-[10px] font-bold text-[#455CE9]">
            {selectedCountry.code}
          </div>
          <div>
            <div className="text-[9px] font-mono tracking-widest uppercase text-[#455CE9] font-bold">
              ENTRY VERIFIED • {selectedCountry.yearVisited}
            </div>
            <div className="text-[10px] text-[#1C1D20]/80 dark:text-white/80 font-mono">
              IMMIGRATION DEPT • {activeMeta.airportCode}
            </div>
          </div>
        </div>

        {/* Stepper & Navigation */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-[#7D8085] dark:text-[#999D9E] mr-2">
            {String(currentIndex + 1).padStart(2, '0')} / {String(totalCount).padStart(2, '0')}
          </span>
          <button
            onClick={onPrev}
            className="w-9 h-9 rounded-full bg-white dark:bg-white/10 hover:bg-[#455CE9] hover:text-white dark:hover:bg-[#455CE9] dark:hover:text-white transition-colors flex items-center justify-center border border-black/5 dark:border-white/10 text-[#1C1D20] dark:text-white"
            aria-label="Previous destination"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={onNext}
            className="w-9 h-9 rounded-full bg-white dark:bg-white/10 hover:bg-[#455CE9] hover:text-white dark:hover:bg-[#455CE9] dark:hover:text-white transition-colors flex items-center justify-center border border-black/5 dark:border-white/10 text-[#1C1D20] dark:text-white"
            aria-label="Next destination"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};

// Reusable Destination Ribbon Sub-component
interface DestinationRibbonProps {
  regions: Array<{ id: string; label: string }>;
  selectedRegion: string;
  onSelectRegion: (reg: string) => void;
  filteredCountries: CountryDestination[];
  selectedCountry: CountryDestination;
  onSelectCountry: (c: CountryDestination) => void;
}

const DestinationRibbon: React.FC<DestinationRibbonProps> = ({
  regions,
  selectedRegion,
  onSelectRegion,
  filteredCountries,
  selectedCountry,
  onSelectCountry
}) => {
  return (
    <div className="pt-6">
      <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar">
        {regions.map((reg) => (
          <button
            key={reg.id}
            onClick={() => onSelectRegion(reg.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs whitespace-nowrap transition-all ${
              selectedRegion === reg.id
                ? 'bg-[#1C1D20] dark:bg-white text-white dark:text-[#1C1D20] font-medium shadow-sm'
                : 'bg-[#F0F1F4] dark:bg-white/5 text-[#6A6C70] dark:text-white/60 hover:text-[#1C1D20] dark:hover:text-white'
            }`}
          >
            {reg.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-2.5 overflow-x-auto py-3 no-scrollbar">
        {filteredCountries.map((c) => {
          const isCurrent = c.id === selectedCountry.id;
          return (
            <button
              key={c.id}
              onClick={() => onSelectCountry(c)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs whitespace-nowrap transition-all border ${
                isCurrent
                  ? 'bg-[#455CE9] text-white border-[#455CE9] shadow-md shadow-[#455CE9]/20 font-medium scale-[1.02]'
                  : 'bg-[#F0F1F4] dark:bg-[#18191B] text-[#1C1D20] dark:text-white/80 border-[#1C1D20]/10 dark:border-white/10 hover:border-[#455CE9]/40 hover:bg-white dark:hover:bg-white/10'
              }`}
            >
              <span className="font-mono opacity-80 text-[10px]">
                {c.code}
              </span>
              <span>{c.name}</span>
              <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                isCurrent ? 'bg-white/20 text-white' : 'bg-black/5 dark:bg-white/10 text-[#7D8085] dark:text-[#999D9E]'
              }`}>
                {c.yearVisited}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
