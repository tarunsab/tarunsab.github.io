import React from 'react';

export const HomeIntro: React.FC = () => {
  return (
    <section className="bg-white dark:bg-[#141517] text-[#1C1D20] dark:text-white py-24 sm:py-36 px-8 sm:px-16 border-b border-[#1C1D20]/10 dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
        {/* Left Column: Big Statement Headline (Dennis style) */}
        <div className="lg:col-span-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-normal leading-[1.18] tracking-tight text-[#1C1D20] dark:text-white">
            Empowering quantitative research and engineering teams to thrive at financial scale. Research & Quantitative Model Platform Engineering Manager at <span className="font-medium underline decoration-1 underline-offset-8">Vanguard</span> shaping high-performance modeling infrastructure.
          </h2>
        </div>

        {/* Right Column: Narrative + Dennis Snellenberg Magnetic Circular Button */}
        <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-10 pt-2">
          <p className="text-base sm:text-lg text-[#6A6C70] dark:text-[#999D9E] font-light leading-relaxed">
            Leading the Research & Quantitative Model Platform team at Vanguard since Dec 2022 (2 years as EM) following over 3 years building investment systems at J.P. Morgan (Asset Management 2021–2022 & 2019 start). Grounded by Computer Science at Imperial College London (2:1).
          </p>

          {/* Direct Action Link */}
          <div className="pt-2">
            <a
              href="#cv"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#1C1D20] dark:text-white hover:text-[#D97736] transition-colors border-b border-[#1C1D20]/30 dark:border-white/30 pb-1"
            >
              <span>Explore Interactive Career Record</span>
              <span className="text-sm">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
