import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-white dark:bg-[#141517] text-[#1C1D20] dark:text-white py-24 sm:py-36 px-8 sm:px-16 border-b border-[#1C1D20]/10 dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
        {/* Left Column: Heading */}
        <div className="lg:col-span-5 space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#7D8085] dark:text-[#999D9E] font-medium block">
            Background & Leadership
          </span>
          <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-[#1C1D20] dark:text-white leading-tight">
            Engineering scale, quiet lenses, and court discipline.
          </h2>
        </div>

        {/* Right Column: Clean Editorial Text */}
        <div className="lg:col-span-7 space-y-12">
          <div className="space-y-6 text-base sm:text-lg text-[#55565A] dark:text-[#999D9E] font-light leading-relaxed">
            <p>
              I am a Software Engineering Manager at <span className="text-[#1C1D20] dark:text-white font-normal">Barclays</span> in London, leading developer experience and platform engineering teams. My work centers on pruning cognitive overhead for thousands of distributed engineers through declarative golden paths, high-throughput observability, and automated deployment guardrails.
            </p>
            <p>
              Away from the terminal, I pursue travel and landscape photography across 21 countries. I work primarily with medium format and 35mm prime optics, seeking deliberate architectural geometries, quiet alpine ridges, and unposed human movement.
            </p>
          </div>

          {/* Understated Interest Rows */}
          <div className="border-t border-[#1C1D20]/15 dark:border-white/15 pt-8">
            <span className="text-xs uppercase tracking-widest text-[#7D8085] dark:text-[#999D9E] font-medium block mb-6">
              Things I value
            </span>

            <div className="divide-y divide-[#1C1D20]/10 dark:divide-white/10">
              <div className="py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <span className="text-base text-[#1C1D20] dark:text-white font-normal">Lawn & Hardcourt Tennis</span>
                <span className="text-sm text-[#7D8085] dark:text-[#999D9E] font-light">Tactical geometry, one-handed backhands & weekend league play</span>
              </div>
              <div className="py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <span className="text-base text-[#1C1D20] dark:text-white font-normal">Slow Geographies</span>
                <span className="text-sm text-[#7D8085] dark:text-[#999D9E] font-light">21 countries traversed on foot with patience and prime lenses</span>
              </div>
              <div className="py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <span className="text-base text-[#1C1D20] dark:text-white font-normal">Mechanical Horology & Craft</span>
                <span className="text-sm text-[#7D8085] dark:text-[#999D9E] font-light">Independent watchmaking, spring-drive tolerances & tactile tools</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
