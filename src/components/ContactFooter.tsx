import React, { useState } from 'react';
import { ArrowUpRight, Copy, Check, Mail, Github, Linkedin, Camera, MapPin } from 'lucide-react';
import { personalBio } from '../data/siteData';

export const ContactFooter: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalBio.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="relative bg-[#07080A] text-white pt-24 pb-12 overflow-hidden border-t border-white/10">
      {/* Dennis Snellenberg Curved Top Border SVG Transition */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-[#0E0F12] rounded-b-[40px] sm:rounded-b-[80px] pointer-events-none" />

      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#C5A880]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Top Eyebrow */}
        <div className="flex items-center gap-2 text-xs font-mono-clean text-[#C5A880] uppercase tracking-widest mb-12">
          <span className="w-2 h-2 rounded-full bg-[#C5A880]" />
          <span>05 / Connection & Dialogue</span>
        </div>

        {/* Dennis Snellenberg Big Magnetic Call to Action */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pb-20 border-b border-white/10">
          <div className="lg:col-span-8 space-y-6">
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white font-sans uppercase leading-[0.95]">
              Let's create <br />
              <span className="font-display italic font-normal text-[#E8E1D5] lowercase">
                something lasting.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#88898C] font-light max-w-xl leading-relaxed">
              Whether you want to discuss platform engineering architecture, developer experience golden paths, or exchange photographic perspectives on world geographies.
            </p>
          </div>

          {/* Dennis Snellenberg Signature Circular Magnetic Action */}
          <div className="lg:col-span-4 flex flex-col items-start lg:items-center justify-center">
            <a
              href={`mailto:${personalBio.email}`}
              className="group relative w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-[#C5A880] text-[#0E0F12] flex flex-col items-center justify-center text-center p-6 transition-transform duration-500 hover:scale-105 shadow-[0_20px_50px_rgba(197,168,128,0.25)]"
            >
              <div className="flex items-center gap-1.5 text-xs font-mono-clean uppercase tracking-widest font-semibold mb-1">
                <span>Say Hello</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <span className="text-base sm:text-lg font-bold font-sans">
                Get in Touch
              </span>
              <span className="text-[10px] text-[#0E0F12]/70 font-mono-clean mt-2">
                Response within 24h
              </span>
            </a>
          </div>
        </div>

        {/* Email Copy Pill & Social Links */}
        <div className="py-12 border-b border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Quick Copy Email */}
          <div className="flex items-center gap-3">
            <div className="px-5 py-3 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono-clean flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#C5A880]" />
              <span className="text-white text-sm">{personalBio.email}</span>
            </div>
            <button
              onClick={copyEmail}
              className="p-3 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white transition-colors"
              title="Copy email address"
              aria-label="Copy email address"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
            {copied && (
              <span className="text-xs text-emerald-400 font-mono-clean animate-fadeIn">
                Copied to clipboard!
              </span>
            )}
          </div>

          {/* Social Profiles */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono-clean uppercase tracking-wider text-[#88898C]">
            <a
              href={personalBio.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] text-white hover:text-[#C5A880] transition-colors flex items-center gap-1.5 border border-white/5"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={personalBio.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] text-white hover:text-[#C5A880] transition-colors flex items-center gap-1.5 border border-white/5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="#photography"
              className="px-4 py-2 rounded-full bg-white/[0.03] hover:bg-white/[0.08] text-white hover:text-[#C5A880] transition-colors flex items-center gap-1.5 border border-white/5"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>Photography</span>
            </a>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-clean text-[#88898C]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {personalBio.name}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#C5A880]" />
              <span>London, United Kingdom</span>
            </span>
            <span>Static Build · Vite & TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
