import React, { useState } from 'react';
import { Search, Compass, ChevronRight } from 'lucide-react';
import { visitedCountries } from '../data/siteData';
import { CountryDestination } from '../types';

export const TravelAtlas: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<CountryDestination>(visitedCountries[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');

  // Filter countries
  const filteredCountries = visitedCountries.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.region.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = selectedRegion === 'all' || c.region.toLowerCase().includes(selectedRegion.toLowerCase());
    return matchesSearch && matchesRegion;
  });

  const regions = [
    { label: 'All Regions (21)', value: 'all' },
    { label: 'Europe', value: 'europe' },
    { label: 'Asia', value: 'asia' },
    { label: 'Middle East', value: 'middle east' },
    { label: 'Americas', value: 'north america' },
  ];

  // Map coordinates projection for equirectangular SVG map
  // Width 1000, Height 500
  const getMapCoordinates = (lat: number, lng: number) => {
    const x = ((lng + 180) / 360) * 1000;
    const y = ((90 - lat) / 180) * 500;
    return { x, y };
  };

  return (
    <section id="atlas" className="py-24 sm:py-32 border-b border-white/10 bg-[#0E0F12]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono-clean text-[#C5A880] uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#C5A880]" />
              <span>03 / Cartography & Exploration</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans uppercase">
              Travel <span className="font-display italic font-normal text-[#E8E1D5] lowercase">Atlas</span>
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <div className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono-clean text-[#E8E1D5]">
              <span className="text-[#C5A880] font-bold">21</span> Countries Visited
            </div>
            {/* View toggle */}
            <div className="p-1 rounded-full bg-white/[0.04] border border-white/10 flex items-center text-xs">
              <button
                onClick={() => setViewMode('map')}
                className={`px-3 py-1 rounded-full transition-colors ${
                  viewMode === 'map' ? 'bg-[#C5A880] text-[#0E0F12] font-semibold' : 'text-[#88898C] hover:text-white'
                }`}
              >
                Map
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-1 rounded-full transition-colors ${
                  viewMode === 'list' ? 'bg-[#C5A880] text-[#0E0F12] font-semibold' : 'text-[#88898C] hover:text-white'
                }`}
              >
                List Index
              </button>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          {/* Region Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {regions.map((reg) => (
              <button
                key={reg.value}
                onClick={() => setSelectedRegion(reg.value)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono-clean uppercase tracking-wider transition-colors ${
                  selectedRegion === reg.value
                    ? 'bg-white text-[#0E0F12] font-bold'
                    : 'bg-white/[0.03] text-[#88898C] hover:text-white hover:bg-white/[0.07]'
                }`}
              >
                {reg.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#88898C]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 21 countries..."
              className="w-full pl-9 pr-4 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs text-white placeholder-[#88898C] focus:outline-none focus:border-[#C5A880] transition-colors"
            />
          </div>
        </div>

        {/* Interactive Map Mode */}
        {viewMode === 'map' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            {/* World Map SVG Canvas */}
            <div className="lg:col-span-8 rounded-2xl bg-[#141519] border border-white/10 p-6 relative overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between text-xs font-mono-clean text-[#88898C] mb-4">
                <span className="flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-[#C5A880]" />
                  Interactive World Map — Click pins to inspect destination
                </span>
                <span>Mercator-Aligned Grid</span>
              </div>

              {/* World SVG Map */}
              <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden bg-[#0D0E11] border border-white/5">
                <svg
                  viewBox="0 0 1000 500"
                  className="w-full h-full object-cover opacity-80"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* Grid Pattern */}
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="0.5" />
                    </pattern>
                  </defs>

                  <rect width="1000" height="500" fill="url(#grid)" />

                  {/* Stylized Minimal Continental Outlines */}
                  <g fill="rgba(255, 255, 255, 0.07)" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="0.75">
                    {/* North America */}
                    <path d="M 120 70 Q 200 60 260 90 Q 290 140 240 210 Q 190 230 160 170 Q 120 120 120 70 Z" />
                    {/* South America */}
                    <path d="M 270 240 Q 340 260 330 330 Q 300 420 260 450 Q 250 360 260 280 Z" />
                    {/* Europe */}
                    <path d="M 470 90 Q 550 70 560 140 Q 520 180 480 170 Q 450 140 470 90 Z" />
                    {/* Africa */}
                    <path d="M 460 190 Q 560 190 570 280 Q 540 380 490 390 Q 450 300 460 190 Z" />
                    {/* Asia */}
                    <path d="M 570 70 Q 820 60 850 160 Q 800 240 700 240 Q 610 200 570 120 Z" />
                    {/* Australia */}
                    <path d="M 760 320 Q 870 310 860 390 Q 790 410 750 370 Z" />
                  </g>

                  {/* Interactive Visited Country Pins */}
                  {visitedCountries.map((country) => {
                    const { x, y } = getMapCoordinates(country.lat, country.lng);
                    const isSelected = selectedCountry?.id === country.id;
                    return (
                      <g
                        key={country.id}
                        transform={`translate(${x}, ${y})`}
                        onClick={() => setSelectedCountry(country)}
                        className="cursor-pointer group"
                      >
                        {/* Outer Glow Ring on Selected */}
                        {isSelected && (
                          <circle
                            r="14"
                            fill="none"
                            stroke="#C5A880"
                            strokeWidth="1.5"
                            className="animate-ping opacity-60"
                          />
                        )}

                        {/* Pin Dot */}
                        <circle
                          r={isSelected ? "6" : "3.5"}
                          fill={isSelected ? "#C5A880" : "#FFFFFF"}
                          stroke="#0E0F12"
                          strokeWidth="1.5"
                          className="transition-all duration-300 group-hover:scale-150"
                        />

                        {/* Country Code Label */}
                        <text
                          x="0"
                          y={isSelected ? "-10" : "-6"}
                          textAnchor="middle"
                          fill={isSelected ? "#C5A880" : "rgba(255,255,255,0.7)"}
                          fontSize={isSelected ? "9" : "7"}
                          fontWeight={isSelected ? "bold" : "normal"}
                          fontFamily="monospace"
                          className="pointer-events-none select-none transition-all"
                        >
                          {country.code}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Bottom Quick Selector Pill Scroll */}
              <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                {visitedCountries.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCountry(c)}
                    className={`px-3 py-1 rounded-full text-xs font-mono-clean whitespace-nowrap transition-colors ${
                      selectedCountry.id === c.id
                        ? 'bg-[#C5A880] text-[#0E0F12] font-semibold'
                        : 'bg-white/[0.05] text-[#88898C] hover:text-white'
                    }`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Country Inspector Card */}
            <div className="lg:col-span-4 rounded-2xl bg-[#141519] border border-white/10 p-6 shadow-2xl space-y-6">
              {/* Photo Header */}
              <div className="relative rounded-xl overflow-hidden aspect-[16/10] border border-white/10">
                <img
                  src={selectedCountry.photoUrl}
                  alt={selectedCountry.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono-clean text-[#C5A880]">
                  {selectedCountry.yearVisited}
                </div>
                <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono-clean text-white">
                  {selectedCountry.region}
                </div>
              </div>

              {/* Info Details */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white tracking-tight font-sans">
                    {selectedCountry.name}
                  </h3>
                  <span className="text-xs font-mono-clean text-[#88898C]">
                    {selectedCountry.lat.toFixed(2)}°, {selectedCountry.lng.toFixed(2)}°
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#E5E7EB] font-light leading-relaxed">
                  {selectedCountry.travelNotes}
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-2 border-t border-white/10 pt-4">
                <span className="text-xs font-mono-clean text-[#C5A880] uppercase tracking-wider block">
                  Exploration Highlights
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCountry.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5 text-xs text-[#88898C] font-mono-clean"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Accessible Country Fallback List / Grid */}
        <div className={`space-y-4 ${viewMode === 'list' ? 'block' : 'mt-12'}`}>
          <div className="flex items-center justify-between text-xs font-mono-clean text-[#88898C] border-b border-white/10 pb-3">
            <span>All 21 Visited Destinations · Complete Directory</span>
            <span>Region / Year</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCountries.map((c) => (
              <div
                key={c.id}
                onClick={() => {
                  setSelectedCountry(c);
                  setViewMode('map');
                }}
                className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  selectedCountry.id === c.id
                    ? 'bg-[#181A20] border-[#C5A880]/50 shadow-lg'
                    : 'bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.04]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono-clean text-[#C5A880]">{c.code}</span>
                    <span className="text-xs font-mono-clean text-[#88898C]">{c.yearVisited}</span>
                  </div>
                  <h4 className="text-lg font-semibold text-white tracking-tight mb-1">
                    {c.name}
                  </h4>
                  <p className="text-xs text-[#88898C] line-clamp-2 font-light">
                    {c.travelNotes}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono-clean text-[#88898C]">
                  <span>{c.region}</span>
                  <span className="text-white hover:text-[#C5A880] flex items-center gap-1">
                    Inspect <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
