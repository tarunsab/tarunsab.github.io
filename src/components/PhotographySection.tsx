import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Sliders, MapPin } from 'lucide-react';
import { curatedPhotos } from '../data/siteData';
import { PhotoCategory } from '../types';
import { useTake } from '../context/TakeContext';

export const PhotographySection: React.FC = () => {
  const { take } = useTake();
  const [activeCategory, setActiveCategory] = useState<PhotoCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showGear, setShowGear] = useState<boolean>(false);

  const filteredPhotos = curatedPhotos.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  const currentPhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null && prev < filteredPhotos.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredPhotos.length - 1));
      }
    },
    [lightboxIndex, filteredPhotos.length]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const categories: { label: string; value: PhotoCategory }[] = [
    { label: 'All Collections', value: 'all' },
    { label: 'Landscapes', value: 'landscapes' },
    { label: 'Architecture', value: 'architecture' },
    { label: 'Travel Expeditions', value: 'travel' },
  ];

  const fieldGear = [
    {
      role: 'Primary Camera Body',
      model: 'Sony Alpha 7R V',
      details: '61MP Full-Frame Exmor R BSI CMOS Sensor • BIONZ XR • AI Processing'
    },
    {
      role: 'Rangefinder & Street Body',
      model: 'Leica Q2',
      details: '47.3MP Full-Frame Sensor • Fixed Summilux 28mm f/1.7 ASPH Optics'
    },
    {
      role: 'Landscape Standard Zoom',
      model: 'Sony FE 24-70mm f/2.8 GM II',
      details: 'Dual XD Linear Motors • XA Elements • Nano AR Coating II'
    },
    {
      role: 'Alpine Telephoto',
      model: 'Sony FE 70-200mm f/2.8 GM OSS II',
      details: 'Internal Zoom • Optical SteadyShot • Extreme Lightweight Design'
    }
  ];

  return (
    <section id="photography" className="bg-[#FAFAFA] dark:bg-[#141517] text-[#1C1D20] dark:text-white py-24 sm:py-36 px-6 sm:px-12 lg:px-16 border-b border-[#1C1D20]/10 dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#1C1D20]/15 dark:border-white/15">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#7D8085] dark:text-[#999D9E] font-medium block mb-2">
              03 / Visual Archive & Darkroom
            </span>
            <h2 className="text-4xl sm:text-6xl font-normal tracking-tight text-[#1C1D20] dark:text-white">
              Selected Photography
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Field Gear Button (Shown in Horizon or Darkroom takes) */}
            {(take === 'horizon' || take === 'darkroom') && (
              <button
                onClick={() => setShowGear(!showGear)}
                className="px-4 py-2 rounded-full bg-white dark:bg-white/10 hover:bg-[#455CE9] hover:text-white dark:hover:bg-[#455CE9] dark:hover:text-white text-[#1C1D20] dark:text-white border border-[#1C1D20]/10 dark:border-white/10 transition-all text-xs font-normal flex items-center gap-2 shadow-sm"
              >
                <Camera className="w-3.5 h-3.5" />
                <span>{showGear ? 'Hide Optics Kit' : 'Optics & Field Kit'}</span>
              </button>
            )}

            {/* Category Filter Pills */}
            <div className="p-1 rounded-full bg-[#EAECEF] dark:bg-white/10 flex items-center text-xs font-normal">
              {categories.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setActiveCategory(c.value)}
                  className={`px-3.5 py-1.5 rounded-full transition-all ${
                    activeCategory === c.value
                      ? 'bg-[#1C1D20] dark:bg-white text-white dark:text-[#1C1D20] shadow-sm font-medium'
                      : 'text-[#6A6C70] dark:text-white/70 hover:text-[#1C1D20]'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Collapsible Optics & Field Kit Drawer */}
        {showGear && (
          <div className="p-8 rounded-3xl bg-[#F0F1F4] dark:bg-[#18191B] border border-[#1C1D20]/10 dark:border-white/10 animate-fadeIn shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <Sliders className="w-4 h-4 text-[#455CE9]" />
              <span className="text-xs uppercase tracking-widest text-[#7D8085] dark:text-[#999D9E] font-medium font-mono">
                Hardware Specs • Optical Inventory
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {fieldGear.map((item, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#455CE9] block mb-1">
                    {item.role}
                  </span>
                  <h4 className="text-base font-medium text-[#1C1D20] dark:text-white mb-2">
                    {item.model}
                  </h4>
                  <p className="text-xs text-[#55565A] dark:text-[#999D9E] leading-relaxed">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Editorial Photography Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => setLightboxIndex(idx)}
              className="group cursor-pointer flex flex-col space-y-3"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-[#EAECEF] dark:bg-[#18191B] relative shadow-sm border border-[#1C1D20]/5 dark:border-white/5">
                <img
                  src={photo.url}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#455CE9] text-white flex items-center justify-center text-xs uppercase tracking-widest font-normal shadow-lg">
                    View
                  </div>
                </div>

                {/* Location Badge */}
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-white/90 border border-white/10 flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-[#455CE9]" />
                  <span>{photo.location}</span>
                </div>

                <div className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono text-white/90 border border-white/10">
                  {photo.year}
                </div>
              </div>

              <div className="flex items-center justify-between text-sm pt-1">
                <div>
                  <h4 className="font-normal text-[#1C1D20] dark:text-white group-hover:text-[#455CE9] transition-colors text-base">
                    {photo.title}
                  </h4>
                  <p className="text-xs text-[#7D8085] dark:text-[#999D9E] font-mono">
                    {photo.camera} • {photo.lens}
                  </p>
                </div>
                <span className="text-xs uppercase tracking-wider text-[#7D8085] dark:text-[#999D9E] font-mono">
                  {photo.country}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {currentPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredPhotos.length - 1));
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev !== null && prev < filteredPhotos.length - 1 ? prev + 1 : 0));
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-50"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="max-w-5xl w-full flex flex-col items-center max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[75vh] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={currentPhoto.url}
                alt={currentPhoto.title}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>

            <div className="w-full max-w-2xl text-center mt-6 text-white space-y-2">
              <h3 className="text-xl sm:text-2xl font-normal tracking-tight">
                {currentPhoto.title}
              </h3>
              <p className="text-sm text-white/70 font-light max-w-xl mx-auto">
                {currentPhoto.caption}
              </p>
              <div className="flex items-center justify-center gap-4 text-xs font-mono text-white/50 pt-2">
                <span>{currentPhoto.location}</span>
                <span>•</span>
                <span>{currentPhoto.camera}</span>
                <span>•</span>
                <span>{currentPhoto.lens}</span>
                <span>•</span>
                <span>{currentPhoto.year}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
