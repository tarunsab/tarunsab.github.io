import React, { useState, useEffect, useRef } from 'react';
import { Shuffle, ArrowUpRight, Plane } from 'lucide-react';
import { visitedCountries } from '../data/siteData';
import { CountryDestination } from '../types';

export const TravelAtlas: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<CountryDestination>(visitedCountries[4]); // Switzerland by default
  const [activeTab, setActiveTab] = useState<'globe' | 'passport'>('globe');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Globe rotation state
  const rotationRef = useRef({ phi: 0.6, theta: 0.8 });
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });

  // Filter countries by region
  const filteredCountries = visitedCountries.filter((c) => {
    if (selectedRegion === 'all') return true;
    return c.region.toLowerCase().includes(selectedRegion.toLowerCase());
  });

  // Pick random country & spin
  const handleRandomCountry = () => {
    const randomIndex = Math.floor(Math.random() * visitedCountries.length);
    const country = visitedCountries[randomIndex];
    setSelectedCountry(country);

    // Target rotation based on lat/lng
    const targetTheta = (country.lng * Math.PI) / 180 + Math.PI / 2;
    const targetPhi = (country.lat * Math.PI) / 180;
    rotationRef.current = { phi: -targetPhi, theta: -targetTheta };
  };

  // 3D Canvas Interactive Particle Globe
  useEffect(() => {
    if (activeTab !== 'globe') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    // Handle high DPI
    const dpr = window.devicePixelRatio || 1;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const radius = Math.min(width, height) * 0.42;
    const centerX = width / 2;
    const centerY = height / 2;

    // Generate globe surface points (dots)
    const DOTS_COUNT = 380;
    const dots: { phi: number; theta: number }[] = [];
    for (let i = 0; i < DOTS_COUNT; i++) {
      const phi = Math.acos(-1 + (2 * i) / DOTS_COUNT) - Math.PI / 2;
      const theta = Math.sqrt(DOTS_COUNT * Math.PI) * phi;
      dots.push({ phi, theta });
    }

    // Convert lat/lng to 3D point on sphere
    const latLngToVector = (lat: number, lng: number, r: number) => {
      const phi = (lat * Math.PI) / 180;
      const theta = (lng * Math.PI) / 180;

      // Apply current rotation
      const currentTheta = theta + rotationRef.current.theta;
      const currentPhi = phi + rotationRef.current.phi;

      const x = r * Math.cos(currentPhi) * Math.sin(currentTheta);
      const y = -r * Math.sin(currentPhi);
      const z = r * Math.cos(currentPhi) * Math.cos(currentTheta);

      return { x, y, z };
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Auto-spin if not dragging
      if (!isDraggingRef.current) {
        rotationRef.current.theta += 0.003;
      }

      // Draw faint globe sphere glow
      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        radius * 0.7,
        centerX,
        centerY,
        radius * 1.05
      );
      gradient.addColorStop(0, 'rgba(69, 92, 233, 0.03)');
      gradient.addColorStop(0.85, 'rgba(69, 92, 233, 0.08)');
      gradient.addColorStop(1, 'rgba(69, 92, 233, 0)');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 1.05, 0, Math.PI * 2);
      ctx.fill();

      // Draw wireframe outline ring
      ctx.strokeStyle = 'rgba(28, 29, 32, 0.12)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
      ctx.stroke();

      // Render surface dots
      dots.forEach((dot) => {
        const curTheta = dot.theta + rotationRef.current.theta;
        const curPhi = dot.phi + rotationRef.current.phi;

        const x = radius * Math.cos(curPhi) * Math.sin(curTheta);
        const y = -radius * Math.sin(curPhi);
        const z = radius * Math.cos(curPhi) * Math.cos(curTheta);

        if (z > 0) {
          const alpha = (z / radius) * 0.45;
          ctx.fillStyle = `rgba(28, 29, 32, ${alpha})`;
          ctx.beginPath();
          ctx.arc(centerX + x, centerY + y, 1.2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Render London Home Pin
      const london = latLngToVector(51.5074, -0.1278, radius);
      if (london.z > 0) {
        ctx.fillStyle = '#1C1D20';
        ctx.beginPath();
        ctx.arc(centerX + london.x, centerY + london.y, 4, 0, Math.PI * 2);
        ctx.fill();
      }

      // Render 21 Visited Destination Pins
      visitedCountries.forEach((country) => {
        const pt = latLngToVector(country.lat, country.lng, radius);
        const isSelected = selectedCountry.id === country.id;

        if (pt.z > 0) {
          const depthAlpha = pt.z / radius;

          // Draw Flight Arc from London to Selected Country
          if (isSelected && london.z > -radius * 0.2) {
            ctx.strokeStyle = '#455CE9';
            ctx.lineWidth = 2;
            ctx.setLineDash([4, 4]);
            ctx.beginPath();
            ctx.moveTo(centerX + london.x, centerY + london.y);
            const midX = (london.x + pt.x) / 2;
            const midY = (london.y + pt.y) / 2 - 40;
            ctx.quadraticCurveTo(centerX + midX, centerY + midY, centerX + pt.x, centerY + pt.y);
            ctx.stroke();
            ctx.setLineDash([]);
          }

          // Pin marker
          if (isSelected) {
            // Pulsing highlight ring
            ctx.strokeStyle = '#455CE9';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(centerX + pt.x, centerY + pt.y, 10, 0, Math.PI * 2);
            ctx.stroke();

            ctx.fillStyle = '#455CE9';
            ctx.beginPath();
            ctx.arc(centerX + pt.x, centerY + pt.y, 5, 0, Math.PI * 2);
            ctx.fill();

            // Label
            ctx.font = '500 12px "Neue Montreal", sans-serif';
            ctx.fillStyle = '#1C1D20';
            ctx.fillText(country.name, centerX + pt.x + 12, centerY + pt.y + 4);
          } else {
            ctx.fillStyle = `rgba(69, 92, 233, ${Math.max(0.2, depthAlpha)})`;
            ctx.beginPath();
            ctx.arc(centerX + pt.x, centerY + pt.y, 3.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    // Mouse interaction: Drag to rotate
    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - previousMousePositionRef.current.x;
      const deltaY = e.clientY - previousMousePositionRef.current.y;

      rotationRef.current.theta += deltaX * 0.006;
      rotationRef.current.phi = Math.max(-1.2, Math.min(1.2, rotationRef.current.phi + deltaY * 0.006));

      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    canvas.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [activeTab, selectedCountry]);

  return (
    <section id="atlas" className="bg-white text-[#1C1D20] py-24 sm:py-32 px-8 sm:px-16 border-b border-[#1C1D20]/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#1C1D20]/15 mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#999D9E] font-medium block mb-2">
              Exploration & Cartography
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-[#1C1D20]">
              Travel Atlas <span className="text-base text-[#455CE9] font-mono ml-3 font-normal">21 Countries Explored</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {/* View Mode Toggle */}
            <div className="p-1 rounded-full bg-[#F4F4F4] flex items-center text-xs font-normal">
              <button
                onClick={() => setActiveTab('globe')}
                className={`px-4 py-1.5 rounded-full transition-all ${
                  activeTab === 'globe' ? 'bg-[#1C1D20] text-white shadow-sm' : 'text-[#6A6C70] hover:text-[#1C1D20]'
                }`}
              >
                3D Interactive Globe
              </button>
              <button
                onClick={() => setActiveTab('passport')}
                className={`px-4 py-1.5 rounded-full transition-all ${
                  activeTab === 'passport' ? 'bg-[#1C1D20] text-white shadow-sm' : 'text-[#6A6C70] hover:text-[#1C1D20]'
                }`}
              >
                Passport Stamps (21)
              </button>
            </div>

            {/* Random Destination Button */}
            <button
              onClick={handleRandomCountry}
              className="p-2.5 rounded-full bg-[#F4F4F4] hover:bg-[#455CE9] hover:text-white transition-colors text-[#1C1D20]"
              title="Spin to random destination"
              aria-label="Spin to random destination"
            >
              <Shuffle className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3D Interactive Globe Mode */}
        {activeTab === 'globe' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* 3D Canvas Globe Viewport */}
            <div className="lg:col-span-7 flex flex-col items-center">
              <div className="relative w-full aspect-square max-w-[540px] cursor-grab active:cursor-grabbing select-none flex items-center justify-center">
                <canvas ref={canvasRef} className="w-full h-full" />
                <div className="absolute bottom-2 text-center text-xs uppercase tracking-widest text-[#999D9E] font-medium pointer-events-none">
                  Click and drag to spin globe · Click destination to inspect
                </div>
              </div>

              {/* Horizontal Country Quick Pills */}
              <div className="w-full overflow-x-auto flex items-center gap-2 pt-6 pb-2 scrollbar-none">
                {visitedCountries.map((country) => (
                  <button
                    key={country.id}
                    onClick={() => {
                      setSelectedCountry(country);
                      const targetTheta = (country.lng * Math.PI) / 180 + Math.PI / 2;
                      const targetPhi = (country.lat * Math.PI) / 180;
                      rotationRef.current = { phi: -targetPhi, theta: -targetTheta };
                    }}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-normal whitespace-nowrap transition-all ${
                      selectedCountry.id === country.id
                        ? 'bg-[#455CE9] text-white font-medium shadow-md scale-105'
                        : 'bg-[#F4F4F4] text-[#1C1D20] hover:bg-[#E9EAEB]'
                    }`}
                  >
                    {country.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Country Polaroid / Destination Card */}
            <div className="lg:col-span-5">
              <div className="bg-[#F8F8F8] rounded-3xl p-8 border border-[#1C1D20]/10 shadow-lg space-y-6">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden relative shadow-sm">
                  <img
                    src={selectedCountry.photoUrl}
                    alt={selectedCountry.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-mono">
                    {selectedCountry.yearVisited}
                  </div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#1C1D20] text-xs font-medium">
                    <Plane className="w-3.5 h-3.5 text-[#455CE9]" />
                    <span>Flight from London</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-3xl font-normal text-[#1C1D20] tracking-tight">
                      {selectedCountry.name}
                    </h3>
                    <span className="text-xs font-mono text-[#999D9E]">
                      {selectedCountry.lat.toFixed(1)}°N, {selectedCountry.lng.toFixed(1)}°E
                    </span>
                  </div>
                  <p className="text-sm text-[#55565A] font-light mt-2 leading-relaxed">
                    {selectedCountry.travelNotes}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1C1D20]/10">
                  <span className="text-xs uppercase tracking-widest text-[#999D9E] font-medium block mb-2">
                    Highlights
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedCountry.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-white text-xs text-[#1C1D20] border border-[#1C1D20]/10 font-normal"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Passport Stamp Collection Mode */}
        {activeTab === 'passport' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Region Filter */}
            <div className="flex flex-wrap items-center gap-2">
              {['All', 'Europe', 'Asia', 'Middle East', 'Americas'].map((reg) => (
                <button
                  key={reg}
                  onClick={() => setSelectedRegion(reg.toLowerCase())}
                  className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-colors ${
                    selectedRegion === reg.toLowerCase()
                      ? 'bg-[#1C1D20] text-white font-medium'
                      : 'bg-[#F4F4F4] text-[#1C1D20] hover:bg-[#E9EAEB]'
                  }`}
                >
                  {reg}
                </button>
              ))}
            </div>

            {/* Passport Stamps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredCountries.map((c) => (
                <div
                  key={c.id}
                  onClick={() => {
                    setSelectedCountry(c);
                    setActiveTab('globe');
                  }}
                  className="group cursor-pointer p-6 rounded-2xl bg-[#F8F8F8] border border-[#1C1D20]/10 hover:border-[#455CE9] transition-all duration-300 flex flex-col justify-between h-56 relative overflow-hidden"
                >
                  {/* Stamp Graphic */}
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 rounded-full border-2 border-dashed border-[#455CE9]/40 flex items-center justify-center text-xs font-mono font-bold text-[#455CE9] rotate-[-12deg] group-hover:rotate-0 transition-transform">
                      {c.code}
                    </div>
                    <span className="text-xs font-mono text-[#999D9E]">
                      {c.yearVisited}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-xl font-normal text-[#1C1D20] group-hover:text-[#455CE9] transition-colors">
                      {c.name}
                    </h4>
                    <span className="text-xs text-[#999D9E] font-light block mt-0.5">
                      {c.region}
                    </span>
                  </div>

                  <div className="pt-2 border-t border-[#1C1D20]/10 flex items-center justify-between text-xs text-[#6A6C70]">
                    <span className="truncate max-w-[150px]">{c.highlights[0]}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#455CE9] shrink-0" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
