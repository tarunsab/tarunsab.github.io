import React, { useState, useEffect } from 'react';
import { personalBio } from '../data/siteData';

export const ContactFooter: React.FC = () => {
  const [localTime, setLocalTime] = useState('');

  // Live London Time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/London',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }).format(now);
      setLocalTime(`${timeString} GMT+1`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer id="contact" className="relative bg-[#1C1D20] text-white overflow-hidden">
      {/* Dennis Snellenberg Organic Curved Scoop Transition */}
      <div className="footer-rounded-div">
        <div className="rounded-div" />
      </div>

      <div className="max-w-7xl mx-auto px-8 sm:px-16 pt-16 pb-12 relative z-10">
        {/* Main Footer Header */}
        <div className="space-y-6 pb-16">
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.77 0H12V9.23M12 0L0 12" stroke="white" strokeWidth="1.75" />
            </svg>
          </div>

          {/* Dennis Snellenberg Profile Avatar + "Let's work together" */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-normal tracking-tight text-white leading-[1.05]">
            <span className="flex items-center gap-4 flex-wrap">
              <span className="inline-block w-14 h-14 sm:w-20 sm:h-20 rounded-full overflow-hidden border border-white/20 shrink-0 bg-[#141517]">
                <img
                  src="./images/tarun-portrait.jpg"
                  alt="Tarun Sabbineni"
                  className="w-full h-full object-cover grayscale"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = "https://avatars.githubusercontent.com/u/15095734?v=4";
                  }}
                />
              </span>
              <span>Let’s work</span>
            </span>
            <span>together</span>
          </h2>
        </div>

        {/* Full-width Divider Line + Overlapping Big Circular Button */}
        <div className="relative border-t border-white/20 pt-16 pb-20">
          {/* Dennis Snellenberg Overlapping Giant Circular Magnetic Button */}
          <div className="absolute right-0 sm:right-12 top-0 -translate-y-1/2">
            <a
              href={`mailto:${personalBio.email}`}
              className="btn-round w-36 h-36 sm:w-48 sm:h-48 bg-[#455CE9] hover:bg-[#334BD3] text-white rounded-full flex items-center justify-center text-center p-4 transition-all duration-300 shadow-2xl"
            >
              <span className="text-sm sm:text-base uppercase tracking-widest font-normal">
                Get in touch
              </span>
            </a>
          </div>

          {/* Contact Pills */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${personalBio.email}`}
              className="px-6 py-4 rounded-full border border-white/25 text-white hover:bg-white hover:text-[#1C1D20] transition-colors text-sm font-normal"
            >
              {personalBio.email}
            </a>
            <a
              href={personalBio.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-4 rounded-full border border-white/25 text-white hover:bg-white hover:text-[#1C1D20] transition-colors text-sm font-normal"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>

        {/* Dennis Snellenberg Bottom Meta Footer Row */}
        <div className="border-t border-white/10 pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs text-[#999D9E]">
          <div className="flex items-center gap-12">
            <div>
              <span className="uppercase tracking-widest text-[#6A6C70] block mb-1">Version</span>
              <p className="text-white font-mono">2026 © Edition</p>
            </div>
            <div>
              <span className="uppercase tracking-widest text-[#6A6C70] block mb-1">Local Time</span>
              <p className="text-white font-mono">{localTime || '11:48 PM GMT+1'}</p>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <a href={personalBio.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href={personalBio.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href="#photography" className="hover:text-white transition-colors">
              Photography
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
