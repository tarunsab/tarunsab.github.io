import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { curatedPhotos } from '../data/siteData';
import { PhotoCategory } from '../types';

export const PhotographySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<PhotoCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos = curatedPhotos.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  const currentPhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  // Keyboard navigation
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
    { label: 'Travel', value: 'travel' },
  ];

  return (
    <section id="photography" className="bg-white text-[#1C1D20] py-24 sm:py-32 px-8 sm:px-16 border-b border-[#1C1D20]/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-[#1C1D20]/15 mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#999D9E] font-medium block mb-2">
              Visual Archive
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-[#1C1D20]">
              Selected Photography
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((c) => (
              <button
                key={c.value}
                onClick={() => setActiveCategory(c.value)}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === c.value
                    ? 'bg-[#1C1D20] text-white'
                    : 'bg-[#F4F4F4] text-[#1C1D20] hover:bg-[#E9EAEB]'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dennis-style Editorial Photography Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => setLightboxIndex(idx)}
              className="group cursor-pointer flex flex-col space-y-3"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#F1F1F1] relative shadow-sm border border-[#1C1D20]/5">
                <img
                  src={photo.url}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#455CE9] text-white flex items-center justify-center text-xs uppercase tracking-widest font-normal shadow-lg">
                    View
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm pt-1">
                <h4 className="font-normal text-[#1C1D20] group-hover:text-[#455CE9] transition-colors">
                  {photo.title}
                </h4>
                <span className="text-xs text-[#999D9E] font-mono">
                  {photo.country} · {photo.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dennis Snellenberg Full-Screen Lightbox */}
      {currentPhoto && lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-[#1C1D20]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-12 text-white animate-fadeIn">
          {/* Lightbox Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/15">
            <span className="text-xs font-mono text-[#999D9E] uppercase tracking-widest">
              0{lightboxIndex + 1} / 0{filteredPhotos.length} — {currentPhoto.title}
            </span>
            <button
              onClick={() => setLightboxIndex(null)}
              className="p-3 rounded-full bg-white/10 hover:bg-[#455CE9] transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Lightbox Image Container */}
          <div className="relative flex-1 flex items-center justify-center my-6">
            <button
              onClick={() => setLightboxIndex(lightboxIndex > 0 ? lightboxIndex - 1 : filteredPhotos.length - 1)}
              className="absolute left-2 sm:left-6 p-4 rounded-full bg-black/40 hover:bg-[#455CE9] transition-colors text-white"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <img
              src={currentPhoto.url}
              alt={currentPhoto.title}
              className="max-h-[72vh] max-w-full object-contain rounded-xl shadow-2xl"
            />

            <button
              onClick={() => setLightboxIndex(lightboxIndex < filteredPhotos.length - 1 ? lightboxIndex + 1 : 0)}
              className="absolute right-2 sm:right-6 p-4 rounded-full bg-black/40 hover:bg-[#455CE9] transition-colors text-white"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Footer Info */}
          <div className="max-w-3xl mx-auto w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/15 pt-4 text-xs font-mono text-[#999D9E]">
            <div>
              <p className="text-white text-sm font-sans">{currentPhoto.location}, {currentPhoto.country}</p>
              <p className="mt-0.5">{currentPhoto.caption}</p>
            </div>
            {currentPhoto.camera && (
              <div className="text-right shrink-0">
                <span className="text-white">{currentPhoto.camera}</span> · {currentPhoto.lens}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
