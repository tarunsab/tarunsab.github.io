import React from 'react';

export const HomeIntro: React.FC = () => {
  return (
    <section className="bg-white text-[#1C1D20] py-24 sm:py-36 px-8 sm:px-16 border-b border-[#1C1D20]/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
        {/* Left Column: Big Statement Headline (Dennis style) */}
        <div className="lg:col-span-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-normal leading-[1.18] tracking-tight text-[#1C1D20]">
            Empowering distributed engineering teams to thrive at enterprise scale. Software Engineering Manager at <span className="font-medium underline decoration-1 underline-offset-8">Barclays</span> shaping developer experience and cloud platforms.
          </h2>
        </div>

        {/* Right Column: Narrative + Dennis Snellenberg Magnetic Circular Button */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-10 pt-2">
          <p className="text-base sm:text-lg text-[#6A6C70] font-light leading-relaxed">
            The combination of my commitment to platform reliability, developer ergonomics, and the quiet observation of travel photography positions me in a thoughtful place in technical leadership.
          </p>

          {/* Dennis Snellenberg Signature Circular Button */}
          <div className="pt-4">
            <a
              href="#work"
              className="btn-round w-36 h-36 sm:w-44 sm:h-44 bg-[#1C1D20] hover:bg-[#455CE9] text-white rounded-full flex items-center justify-center text-center p-4 transition-all duration-300 shadow-xl"
            >
              <span className="text-sm uppercase tracking-widest font-normal">
                Explore Work
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
