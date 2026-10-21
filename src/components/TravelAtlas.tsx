import React, { useState } from 'react';
import { Shuffle, Plane, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import { visitedCountries } from '../data/siteData';
import { CountryDestination } from '../types';

export const TravelAtlas: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<CountryDestination>(visitedCountries[4]); // Switzerland default
  const [mapZoom, setMapZoom] = useState<'world' | 'europe'>('world');
  const [activeTab, setActiveTab] = useState<'map' | 'stamps'>('map');
  const [searchQuery, setSearchQuery] = useState('');

  const currentIndex = visitedCountries.findIndex((c) => c.id === selectedCountry.id);

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % visitedCountries.length;
    setSelectedCountry(visitedCountries[nextIdx]);
    if (visitedCountries[nextIdx].region.includes('Europe')) {
      // keep zoom if appropriate
    }
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + visitedCountries.length) % visitedCountries.length;
    setSelectedCountry(visitedCountries[prevIdx]);
  };

  const handleShuffle = () => {
    const randomIdx = Math.floor(Math.random() * visitedCountries.length);
    setSelectedCountry(visitedCountries[randomIdx]);
  };

  // Convert lat/lng to map coordinates (1000 x 500 Mercator space)
  const getCoordinates = (lat: number, lng: number) => {
    const x = ((lng + 180) / 360) * 1000;
    const y = ((90 - lat) / 180) * 500;
    return { x, y };
  };

  const londonCoord = getCoordinates(51.5074, -0.1278);
  const selectedCoord = getCoordinates(selectedCountry.lat, selectedCountry.lng);

  const filteredCountries = visitedCountries.filter(
    (c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.region.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="atlas" className="bg-white dark:bg-[#141517] text-[#1C1D20] dark:text-white py-24 sm:py-32 px-8 sm:px-16 border-b border-[#1C1D20]/10 dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#1C1D20]/15 dark:border-white/15 mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#7D8085] dark:text-[#999D9E] font-medium block mb-2">
              Cartography & Exploration
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-[#1C1D20] dark:text-white">
              Travel Atlas <span className="text-base text-[#455CE9] font-mono ml-3 font-normal">21 Visited Destinations</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* View Mode Toggle */}
            <div className="p-1 rounded-full bg-[#F4F4F6] dark:bg-white/10 flex items-center text-xs font-normal">
              <button
                onClick={() => setActiveTab('map')}
                className={`px-4 py-1.5 rounded-full transition-all ${
                  activeTab === 'map'
                    ? 'bg-[#1C1D20] dark:bg-white text-white dark:text-[#1C1D20] shadow-sm font-medium'
                    : 'text-[#6A6C70] dark:text-white/70 hover:text-[#1C1D20]'
                }`}
              >
                Interactive Map
              </button>
              <button
                onClick={() => setActiveTab('stamps')}
                className={`px-4 py-1.5 rounded-full transition-all ${
                  activeTab === 'stamps'
                    ? 'bg-[#1C1D20] dark:bg-white text-white dark:text-[#1C1D20] shadow-sm font-medium'
                    : 'text-[#6A6C70] dark:text-white/70 hover:text-[#1C1D20]'
                }`}
              >
                Passport Stamps (21)
              </button>
            </div>

            {/* Shuffle Button */}
            <button
              onClick={handleShuffle}
              className="px-3.5 py-1.5 rounded-full bg-[#F4F4F6] dark:bg-white/10 hover:bg-[#455CE9] hover:text-white transition-colors text-xs font-normal flex items-center gap-1.5"
              title="Jump to random destination"
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Random</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Interactive Map View */}
        {activeTab === 'map' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            {/* Vector World Map Stage */}
            <div className="lg:col-span-8 rounded-3xl bg-[#F4F4F6] dark:bg-[#1C1D20] p-4 sm:p-6 border border-[#1C1D20]/10 dark:border-white/10 shadow-sm relative overflow-hidden">
              {/* Map Controls Top Bar */}
              <div className="flex items-center justify-between mb-3 text-xs text-[#7D8085] dark:text-[#999D9E]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#455CE9] animate-pulse" />
                  <span className="font-mono uppercase tracking-wider">
                    {mapZoom === 'world' ? 'Global View' : 'Europe Cluster Focus'}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setMapZoom(mapZoom === 'world' ? 'europe' : 'world')}
                    className="px-3 py-1 rounded-full bg-white dark:bg-white/10 text-xs font-medium text-[#1C1D20] dark:text-white hover:bg-[#455CE9] hover:text-white transition-colors border border-black/5 dark:border-white/5 flex items-center gap-1"
                  >
                    {mapZoom === 'world' ? <ZoomIn className="w-3 h-3" /> : <ZoomOut className="w-3 h-3" />}
                    <span>{mapZoom === 'world' ? 'Zoom Europe (14)' : 'Zoom World'}</span>
                  </button>
                </div>
              </div>

              {/* The SVG Interactive Map */}
              <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden bg-white dark:bg-[#141517] border border-[#1C1D20]/10 dark:border-white/5 shadow-inner select-none">
                <svg
                  viewBox={mapZoom === 'world' ? '0 0 1000 500' : '440 60 210 130'}
                  className="w-full h-full object-cover transition-all duration-700 ease-out"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient id="flightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1C1D20" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#455CE9" stopOpacity="1" />
                    </linearGradient>
                  </defs>

                  {/* Grid Lines */}
                  <g stroke="currentColor" strokeWidth="0.5" className="text-black/[0.04] dark:text-white/[0.04]">
                    <line x1="0" y1="250" x2="1000" y2="250" />
                    <line x1="500" y1="0" x2="500" y2="500" />
                    <circle cx="500" cy="250" r="230" fill="none" />
                  </g>

                  {/* World Continents Vector Outlines */}
                  <g className="fill-[#EAECEF] dark:fill-[#222428] stroke-[#D5D8DC] dark:stroke-[#303338]" strokeWidth="0.75">
                    {/* North America */}
                    <path d="M 100 60 Q 180 50 250 80 Q 280 130 230 200 Q 180 230 150 170 Q 100 120 100 60 Z" />
                    {/* South America */}
                    <path d="M 260 230 Q 330 250 320 320 Q 290 410 250 440 Q 240 350 250 270 Z" />
                    {/* Europe */}
                    <path d="M 460 80 Q 550 60 570 130 Q 530 180 480 170 Q 440 140 460 80 Z" />
                    {/* Africa */}
                    <path d="M 450 180 Q 560 180 570 270 Q 540 380 480 390 Q 430 300 450 180 Z" />
                    {/* Asia */}
                    <path d="M 570 60 Q 840 50 860 160 Q 810 240 690 240 Q 600 200 570 110 Z" />
                    {/* Australia & Oceania */}
                    <path d="M 770 310 Q 880 300 870 390 Q 790 410 750 370 Z" />
                  </g>

                  {/* Flight Path Arc from London to Selected Country */}
                  {selectedCountry.id !== 'gbr' && (
                    <g>
                      <path
                        d={`M ${londonCoord.x} ${londonCoord.y} Q ${(londonCoord.x + selectedCoord.x) / 2} ${
                          Math.min(londonCoord.y, selectedCoord.y) - 35
                        } ${selectedCoord.x} ${selectedCoord.y}`}
                        fill="none"
                        stroke="#455CE9"
                        strokeWidth={mapZoom === 'world' ? "2" : "1"}
                        strokeDasharray="4 4"
                        className="animate-pulse"
                      />
                    </g>
                  )}

                  {/* London Home Base Pin */}
                  <g transform={`translate(${londonCoord.x}, ${londonCoord.y})`}>
                    <circle r={mapZoom === 'world' ? "4" : "2"} fill="#1C1D20" className="dark:fill-white" />
                  </g>

                  {/* 21 Visited Destination Pins (Fully Clickable!) */}
                  {visitedCountries.map((country) => {
                    const coord = getCoordinates(country.lat, country.lng);
                    const isSelected = selectedCountry.id === country.id;
                    const r = mapZoom === 'world' ? (isSelected ? 6 : 3.5) : (isSelected ? 3.5 : 2);

                    return (
                      <g
                        key={country.id}
                        transform={`translate(${coord.x}, ${coord.y})`}
                        onClick={() => setSelectedCountry(country)}
                        className="cursor-pointer group"
                      >
                        {/* Huge transparent click area for easy tap & click */}
                        <circle r={mapZoom === 'world' ? "18" : "8"} fill="transparent" />

                        {/* Pulsing highlight ring on selected */}
                        {isSelected && (
                          <circle
                            r={mapZoom === 'world' ? "12" : "6"}
                            fill="none"
                            stroke="#455CE9"
                            strokeWidth="1.5"
                            className="animate-ping"
                          />
                        )}

                        {/* Core Pin Dot */}
                        <circle
                          r={r}
                          fill={isSelected ? "#455CE9" : "#1C1D20"}
                          className={`transition-all duration-300 group-hover:scale-150 ${
                            isSelected ? 'dark:fill-[#455CE9]' : 'dark:fill-white'
                          }`}
                        />

                        {/* Country Code Label */}
                        <text
                          x="0"
                          y={mapZoom === 'world' ? (isSelected ? -9 : -6) : (isSelected ? -5 : -3)}
                          textAnchor="middle"
                          fill={isSelected ? "#455CE9" : "currentColor"}
                          fontSize={mapZoom === 'world' ? (isSelected ? "10" : "8") : "5"}
                          fontWeight={isSelected ? "bold" : "normal"}
                          fontFamily="sans-serif"
                          className="pointer-events-none select-none text-[#1C1D20] dark:text-white"
                        >
                          {country.code}
                        </text>
                      </g>
                    );
                  })}
                </svg>

                {/* Map Bottom Hint */}
                <div className="absolute bottom-2 left-4 text-[10px] uppercase tracking-widest text-[#7D8085] dark:text-[#999D9E] font-mono pointer-events-none">
                  Click any country pin to inspect destination
                </div>
              </div>

              {/* Quick Country Pills Scroll */}
              <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                {visitedCountries.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCountry(c)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-normal whitespace-nowrap transition-all ${
                      selectedCountry.id === c.id
                        ? 'bg-[#455CE9] text-white font-medium shadow-md'
                        : 'bg-white dark:bg-white/5 text-[#1C1D20] dark:text-white hover:bg-[#EAECEF] dark:hover:bg-white/10'
                    }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Country Detail Inspector Card (With Prev/Next Controls) */}
            <div className="lg:col-span-4 bg-[#F4F4F6] dark:bg-[#1C1D20] rounded-3xl p-6 sm:p-8 border border-[#1C1D20]/10 dark:border-white/10 shadow-sm space-y-6">
              {/* Photo Frame */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative shadow-sm bg-black/10">
                <img
                  src={selectedCountry.photoUrl}
                  alt={selectedCountry.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-mono">
                  {selectedCountry.yearVisited}
                </div>
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-md text-[#1C1D20] dark:text-white text-xs font-medium">
                  <Plane className="w-3.5 h-3.5 text-[#455CE9]" />
                  <span>From London</span>
                </div>
              </div>

              {/* Title & Coordinates */}
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl sm:text-3xl font-normal text-[#1C1D20] dark:text-white tracking-tight">
                    {selectedCountry.name}
                  </h3>
                  <span className="text-xs font-mono text-[#7D8085] dark:text-[#999D9E]">
                    {selectedCountry.code}
                  </span>
                </div>
                <p className="text-sm text-[#55565A] dark:text-[#999D9E] font-light mt-2 leading-relaxed">
                  {selectedCountry.travelNotes}
                </p>
              </div>

              {/* Highlights */}
              <div className="pt-3 border-t border-[#1C1D20]/10 dark:border-white/10">
                <span className="text-xs uppercase tracking-widest text-[#7D8085] dark:text-[#999D9E] font-medium block mb-2">
                  Exploration Highlights
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCountry.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-white dark:bg-white/10 text-xs text-[#1C1D20] dark:text-white font-normal"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stepper Navigation */}
              <div className="pt-2 flex items-center justify-between border-t border-[#1C1D20]/10 dark:border-white/10">
                <button
                  onClick={handlePrev}
                  className="px-4 py-2 rounded-full border border-[#1C1D20]/15 dark:border-white/15 text-xs text-[#1C1D20] dark:text-white hover:bg-[#455CE9] hover:text-white transition-colors flex items-center gap-1"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>Prev</span>
                </button>
                <span className="text-xs font-mono text-[#7D8085] dark:text-[#999D9E]">
                  {currentIndex + 1} / {visitedCountries.length}
                </span>
                <button
                  onClick={handleNext}
                  className="px-4 py-2 rounded-full border border-[#1C1D20]/15 dark:border-white/15 text-xs text-[#1C1D20] dark:text-white hover:bg-[#455CE9] hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>Next</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Passport Stamps Collection */}
        {activeTab === 'stamps' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16 animate-fadeIn">
            {visitedCountries.map((c) => (
              <div
                key={c.id}
                onClick={() => {
                  setSelectedCountry(c);
                  setActiveTab('map');
                }}
                className="group cursor-pointer p-6 rounded-3xl bg-[#F4F4F6] dark:bg-[#1C1D20] border border-[#1C1D20]/10 dark:border-white/10 hover:border-[#455CE9] transition-all flex flex-col justify-between h-52 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-full border-2 border-dashed border-[#455CE9] flex items-center justify-center font-mono font-bold text-xs text-[#455CE9] rotate-[-10deg] group-hover:rotate-0 transition-transform">
                    {c.code}
                  </div>
                  <span className="text-xs font-mono text-[#7D8085] dark:text-[#999D9E]">
                    {c.yearVisited}
                  </span>
                </div>

                <div>
                  <h4 className="text-xl font-normal text-[#1C1D20] dark:text-white group-hover:text-[#455CE9] transition-colors">
                    {c.name}
                  </h4>
                  <span className="text-xs text-[#7D8085] dark:text-[#999D9E] font-light">
                    {c.region}
                  </span>
                </div>

                <div className="text-xs text-[#455CE9] flex items-center gap-1 font-medium">
                  <span>View on Map</span>
                  <Plane className="w-3 h-3" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Filterable Full Country Directory List */}
        <div className="space-y-4 pt-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1C1D20]/10 dark:border-white/10">
            <span className="text-xs uppercase tracking-widest text-[#7D8085] dark:text-[#999D9E] font-medium">
              Complete 21 Countries Directory
            </span>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search destination..."
              className="px-4 py-1.5 rounded-full bg-[#F4F4F6] dark:bg-white/10 text-xs text-[#1C1D20] dark:text-white placeholder-[#7D8085] focus:outline-none focus:ring-1 focus:ring-[#455CE9] max-w-xs"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filteredCountries.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  setSelectedCountry(c);
                  setActiveTab('map');
                  window.location.hash = 'atlas';
                }}
                className={`p-3.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                  selectedCountry.id === c.id
                    ? 'border-[#455CE9] bg-[#455CE9]/5 dark:bg-[#455CE9]/15'
                    : 'border-[#1C1D20]/10 dark:border-white/10 hover:border-[#455CE9] bg-transparent'
                }`}
              >
                <div>
                  <p className="text-sm font-normal text-[#1C1D20] dark:text-white">
                    {c.name}
                  </p>
                  <p className="text-[11px] text-[#7D8085] dark:text-[#999D9E]">
                    {c.region}
                  </p>
                </div>
                <span className="text-xs font-mono text-[#455CE9]">
                  {c.code}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
