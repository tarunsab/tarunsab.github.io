import React, { useState, useEffect } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { personalBio } from '../data/siteData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Photography', href: '#photography' },
    { label: 'Travel Atlas', href: '#atlas' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Light Theme Header Top Bar */}
      <header className="absolute top-0 left-0 right-0 z-30 py-8 px-8 sm:px-16 flex items-center justify-between text-[#1C1D20]">
        <a
          href="#"
          className="group flex items-center gap-1.5 text-base sm:text-lg font-normal tracking-tight hover:opacity-75 transition-opacity"
        >
          <span className="text-sm">©</span>
          <span className="font-light text-[#7D8085]">Code & Lens by</span>
          <span className="font-medium text-[#1C1D20] transition-transform group-hover:translate-x-0.5">
            {personalBio.name}
          </span>
        </a>

        {/* Right Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-base font-normal">
          <a href="#work" className="text-[#1C1D20] hover:text-[#455CE9] transition-colors py-1">
            Work
          </a>
          <a href="#photography" className="text-[#1C1D20] hover:text-[#455CE9] transition-colors py-1">
            Photography
          </a>
          <a href="#atlas" className="text-[#1C1D20] hover:text-[#455CE9] transition-colors py-1">
            Travel Atlas
          </a>
          <a href="#about" className="text-[#1C1D20] hover:text-[#455CE9] transition-colors py-1">
            About
          </a>
          <a href="#contact" className="text-[#1C1D20] hover:text-[#455CE9] transition-colors py-1">
            Contact
          </a>
        </nav>
      </header>

      {/* Dennis Snellenberg Signature Floating Menu Button */}
      <div
        className={`fixed top-6 right-6 sm:top-8 sm:right-10 z-50 transition-all duration-500 ${
          isScrolled || mobileMenuOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'md:opacity-0 md:scale-75 md:pointer-events-none'
        }`}
      >
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`group w-16 h-16 sm:w-20 sm:h-20 rounded-full flex flex-col items-center justify-center transition-all duration-300 shadow-2xl border ${
            mobileMenuOpen
              ? 'bg-[#455CE9] text-white border-transparent'
              : 'bg-[#1C1D20] text-white hover:bg-[#455CE9] border-black/10'
          }`}
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 transition-transform group-hover:rotate-90 duration-300" />
          ) : (
            <div className="flex flex-col items-center justify-center gap-1.5">
              <span className="w-6 h-[1.5px] bg-white transition-all group-hover:w-7" />
              <span className="w-6 h-[1.5px] bg-white transition-all group-hover:w-4" />
              <span className="text-[10px] uppercase tracking-widest font-normal text-white/90 mt-0.5">
                Menu
              </span>
            </div>
          )}
        </button>
      </div>

      {/* Dennis Snellenberg Full-Screen Nav Overlay Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#1C1D20] text-white transition-all duration-700 ease-[cubic-bezier(0.7,0,0.3,1)] flex flex-col justify-between p-8 sm:p-20 overflow-y-auto ${
          mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-4xl mx-auto w-full pt-16">
          <div className="border-b border-white/20 pb-4 mb-8">
            <span className="text-xs uppercase tracking-widest text-[#999D9E]">
              Navigation
            </span>
          </div>

          <ul className="space-y-4 sm:space-y-6">
            {navLinks.map((link, idx) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex items-baseline justify-between text-4xl sm:text-6xl md:text-7xl font-normal hover:text-[#455CE9] transition-colors"
                >
                  <span className="group-hover:translate-x-3 transition-transform duration-300">
                    {link.label}
                  </span>
                  <span className="text-sm sm:text-base font-mono text-[#999D9E] group-hover:text-[#455CE9]">
                    0{idx + 1}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Socials */}
        <div className="max-w-4xl mx-auto w-full border-t border-white/20 pt-8 mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#999D9E] block mb-1">
              Direct Contact
            </span>
            <a href={`mailto:${personalBio.email}`} className="text-lg text-white hover:text-[#455CE9] transition-colors">
              {personalBio.email}
            </a>
          </div>

          <div className="flex items-center gap-6 text-sm text-[#999D9E]">
            <a href={personalBio.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a href={personalBio.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
