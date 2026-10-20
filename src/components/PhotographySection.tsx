import React, { useState, useEffect, useCallback } from 'react';
import { MapPin, Calendar, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { curatedPhotos } from '../data/siteData';
import { PhotoCategory } from '../types';

export const PhotographySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<PhotoCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos = curatedPhotos.filter((photo) => {
    if (activeCategory === 'all') return true;
    return photo.category === activeCategory;
  });

  const currentPhoto = lightboxIndex !== null ? filteredPhotos[lightboxIndex] : null;

  // Keyboard navigation for lightbox
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

  // Lock scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightboxIndex]);

  const categories: { label: string; value: PhotoCategory }[] = [
    { label: 'All Collections', value: 'all' },
    { label: 'Landscapes', value: 'landscapes' },
    { label: 'Architecture', value: 'architecture' },
    { label: 'Travel & Urban', value: 'travel' },
  ];

  return (
    <section id="photography" className="py-24 sm:py-32 border-b border-white/10 bg-[#0E0F12]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono-clean text-[#C5A880] uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#C5A880]" />
              <span>02 / Creative Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans uppercase">
              Selected <span className="font-display italic font-normal text-[#E8E1D5] lowercase">Photography</span>
            </h2>
          </div>

          <div className="text-right flex flex-col items-start md:items-end">
            <p className="text-xs font-mono-clean text-[#88898C] uppercase tracking-wider">
              Medium Format & 35mm Prime Optics
            </p>
            <p className="text-sm text-[#E8E1D5] font-light">
              Curated travel, alpine landscapes & structural geometry
            </p>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-medium transition-all duration-300 ${
                  activeCategory === cat.value
                    ? 'bg-[#E8E1D5] text-[#0E0F12] shadow-md'
                    : 'bg-white/[0.04] text-[#88898C] hover:text-white hover:bg-white/[0.08]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <span className="text-xs font-mono-clean text-[#88898C]">
            Showing {filteredPhotos.length} curated frames
          </span>
        </div>

        {/* Photography Grid: Aristide Benoist Editorial Masonry / Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setLightboxIndex(index)}
              className="group cursor-pointer flex flex-col space-y-3"
            >
              {/* Image Frame with luxury hover treatment */}
              <div className="relative overflow-hidden rounded-2xl bg-[#16181D] aspect-[4/3] sm:aspect-[4/5] border border-white/10">
                <img
                  src={photo.url}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Subtle vignette & hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-between p-6">
                  <div className="flex justify-between items-start">
                    <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-mono-clean text-white/90 uppercase tracking-widest">
                      {photo.category}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Caption revealed on hover */}
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-1.5 text-xs text-[#C5A880] font-mono-clean mb-1">
                      <MapPin className="w-3 h-3" />
                      <span>{photo.location}</span>
                    </div>
                    <h3 className="text-lg font-display text-white font-medium leading-snug">
                      {photo.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Sub-card metadata strip */}
              <div className="flex items-center justify-between text-xs font-mono-clean text-[#88898C] px-1">
                <span>{photo.country}</span>
                <span className="text-[#C5A880]">{photo.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Immersive Lightbox */}
      {currentPhoto && lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-[#0E0F12]/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 animate-fadeIn">
          {/* Lightbox Top Bar */}
          <div className="flex items-center justify-between text-xs font-mono-clean text-[#88898C] border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <span className="text-[#C5A880] font-bold">
                0{lightboxIndex + 1} / 0{filteredPhotos.length}
              </span>
              <span className="hidden sm:inline text-white/40">|</span>
              <span className="hidden sm:inline text-white font-sans">{currentPhoto.title}</span>
            </div>

            <button
              onClick={() => setLightboxIndex(null)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Lightbox Main Stage */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            {/* Prev Button */}
            <button
              onClick={() => setLightboxIndex(lightboxIndex > 0 ? lightboxIndex - 1 : filteredPhotos.length - 1)}
              className="absolute left-2 sm:left-6 z-10 p-3 rounded-full bg-black/60 hover:bg-[#C5A880] hover:text-[#0E0F12] text-white border border-white/20 transition-all duration-300"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Displayed Image */}
            <div className="max-w-5xl max-h-[75vh] p-2 flex flex-col items-center justify-center">
              <img
                src={currentPhoto.url}
                alt={currentPhoto.title}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-white/10"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={() => setLightboxIndex(lightboxIndex < filteredPhotos.length - 1 ? lightboxIndex + 1 : 0)}
              className="absolute right-2 sm:right-6 z-10 p-3 rounded-full bg-black/60 hover:bg-[#C5A880] hover:text-[#0E0F12] text-white border border-white/20 transition-all duration-300"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Bottom Metadata Drawer */}
          <div className="bg-[#141519] border border-white/10 rounded-xl p-4 sm:p-6 max-w-4xl mx-auto w-full">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/5 pb-3">
              <div>
                <h3 className="text-lg font-display text-white">{currentPhoto.title}</h3>
                <p className="text-xs text-[#88898C] font-mono-clean flex items-center gap-2 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>{currentPhoto.location}, {currentPhoto.country}</span>
                  <span>·</span>
                  <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>{currentPhoto.year}</span>
                </p>
              </div>

              {currentPhoto.camera && (
                <div className="text-xs font-mono-clean text-right text-[#C5A880] bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/5">
                  <div>{currentPhoto.camera}</div>
                  <div className="text-[10px] text-[#88898C]">{currentPhoto.lens}</div>
                </div>
              )}
            </div>

            <p className="text-xs sm:text-sm text-[#E5E7EB] font-light mt-3 leading-relaxed">
              {currentPhoto.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
