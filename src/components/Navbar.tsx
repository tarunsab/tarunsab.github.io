import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Volume2, VolumeX, MapPin, Clock } from 'lucide-react';
import { personalBio } from '../data/siteData';

interface NavbarProps {
  activeSection: string;
  isAudioPlaying: boolean;
  toggleAudio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  isAudioPlaying,
  toggleAudio
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [localTime, setLocalTime] = useState('');

  // Live London Time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(now);
      setLocalTime(`${timeString} GMT+1`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Scroll detection for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Photography', href: '#photography' },
    { label: 'Travel Atlas', href: '#atlas' },
    { label: 'Beyond Work', href: '#beyond' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'py-3.5 bg-[#0E0F12]/85 backdrop-blur-md border-b border-white/5 shadow-2xl'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo / Personal Monogram */}
          <a
            href="#"
            className="group flex items-center gap-3 text-white font-medium tracking-tight text-base sm:text-lg"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#C5A880] transition-transform duration-300 group-hover:scale-125" />
            <span className="font-semibold tracking-tight transition-colors duration-200 group-hover:text-[#C5A880]">
              {personalBio.name}
            </span>
            <span className="hidden md:inline-block text-xs uppercase tracking-widest text-[#88898C] border-l border-white/10 pl-3">
              Eng Leader & Photographer
            </span>
          </a>

          {/* Center: Live London Time / Dennis Snellenberg status badge */}
          <div className="hidden lg:flex items-center gap-4 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-xs text-[#88898C] font-mono-clean">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[#E8E1D5]">{personalBio.location.split(',')[0]}</span>
            </div>
            <span className="text-white/20">|</span>
            <div className="flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-[#C5A880]" />
              <span>{localTime || '20:14 GMT+1'}</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs uppercase tracking-wider font-medium rounded-full transition-all duration-300 ${
                    isActive
                      ? 'text-[#0E0F12] bg-[#E8E1D5]'
                      : 'text-[#88898C] hover:text-white hover:bg-white/[0.05]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            {/* Ambient Sound Toggle Button */}
            <button
              onClick={toggleAudio}
              className={`ml-2 p-2 rounded-full border transition-all duration-300 ${
                isAudioPlaying
                  ? 'border-[#C5A880] text-[#C5A880] bg-[#C5A880]/10 shadow-[0_0_15px_rgba(197,168,128,0.2)]'
                  : 'border-white/10 text-[#88898C] hover:text-white hover:border-white/25'
              }`}
              title={isAudioPlaying ? 'Mute ambient piano' : 'Play ambient piano'}
              aria-label="Toggle ambient audio"
            >
              {isAudioPlaying ? <Volume2 className="w-3.5 h-3.5 animate-pulse" /> : <VolumeX className="w-3.5 h-3.5" />}
            </button>
          </nav>

          {/* Mobile Menu & Audio Trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleAudio}
              className={`p-2 rounded-full border text-xs ${
                isAudioPlaying
                  ? 'border-[#C5A880] text-[#C5A880] bg-[#C5A880]/10'
                  : 'border-white/10 text-[#88898C]'
              }`}
              aria-label="Toggle ambient piano"
            >
              {isAudioPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 text-white text-xs uppercase tracking-widest flex items-center gap-2 transition-colors border border-white/10"
              aria-label="Toggle Menu"
            >
              <span>{mobileMenuOpen ? 'Close' : 'Menu'}</span>
              {mobileMenuOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Dennis Snellenberg Full-Screen Sliding Mobile Menu */}
      <div
        className={`fixed inset-0 z-30 bg-[#0E0F12]/98 backdrop-blur-2xl transition-all duration-500 md:hidden flex flex-col justify-between p-8 pt-28 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-8'
        }`}
      >
        <div className="flex flex-col gap-6">
          <p className="text-xs uppercase tracking-widest text-[#88898C] border-b border-white/10 pb-3">
            Navigation Index
          </p>
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="group flex items-center justify-between text-3xl sm:text-4xl font-display font-medium text-white hover:text-[#C5A880] transition-colors py-1"
            >
              <span>{link.label}</span>
              <span className="text-sm font-mono-clean text-[#88898C] group-hover:text-[#C5A880] flex items-center gap-1">
                0{idx + 1}
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </a>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 space-y-4">
          <div className="flex items-center justify-between text-xs font-mono-clean text-[#88898C]">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#C5A880]" /> {personalBio.location}
            </span>
            <span>{localTime}</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-[#88898C]">
            <a href={personalBio.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href={personalBio.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href={`mailto:${personalBio.email}`} className="text-[#C5A880] hover:underline">
              {personalBio.email}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
