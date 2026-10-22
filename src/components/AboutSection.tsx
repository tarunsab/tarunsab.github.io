import React from 'react';
import { Activity, Compass, Coffee, Keyboard } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const passions = [
    {
      icon: Activity,
      title: 'Competitive Tennis',
      subtitle: 'All-court baseline endurance & Wimbledon regular',
      description: 'Lawn and hardcourt tactical geometry, topspin depth, and weekend league play across London clubs.'
    },
    {
      icon: Compass,
      title: 'Cartography & Slow Travel',
      subtitle: '21 nations traversed on foot with prime optics',
      description: 'Chasing architectural silhouettes from Lisbon to Kyoto, alpine sunrise ridgelines in Zermatt, and coral gradients in the Maldives.'
    },
    {
      icon: Keyboard,
      title: 'Mechanical Craft & Hardware',
      subtitle: 'Custom ergonomic split keyboards & tactile tolerances',
      description: 'Hand-lubricated mechanical switches, custom keycap profiles, and an obsession with clean ergonomic desktop setups.'
    },
    {
      icon: Coffee,
      title: 'Specialty Coffee Chemistry',
      subtitle: '9-bar espresso pressure profiling & V60 pourovers',
      description: 'Single-origin Ethiopian and Colombian roasts, precise extraction ratios, and morning sensory rituals.'
    }
  ];

  return (
    <section id="about" className="bg-white dark:bg-[#141517] text-[#1C1D20] dark:text-white py-24 sm:py-36 px-6 sm:px-12 lg:px-16 border-b border-[#1C1D20]/10 dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#7D8085] dark:text-[#999D9E] font-medium block">
              05 / Identity & Philosophy
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-[#1C1D20] dark:text-white leading-tight">
              Engineering leadership, systems architecture, and thoughtful craft.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#55565A] dark:text-[#999D9E] font-light leading-relaxed">
            <p>
              I am the Research and Quantitative Model Platform Engineering Manager at <span className="text-[#1C1D20] dark:text-white font-normal">Vanguard</span> in London, leading teams building quantitative modeling platforms, distributed research compute infrastructure, and algorithmic pipelines. I have served as an Engineering Manager for 2 years, having joined Vanguard in December 2022.
            </p>
            <p>
              Prior to Vanguard, I spent over 3 years at <span className="text-[#1C1D20] dark:text-white font-normal">JPMorgan</span> (starting in 2019 following a 6-month software engineering internship in 2018), with my final period in <span className="text-[#1C1D20] dark:text-white font-normal">J.P. Morgan Asset Management</span> (2021–2022) building portfolio and market data services. My technical foundation was forged at <span className="text-[#1C1D20] dark:text-white font-normal">Imperial College London</span>, where I graduated with a 2:1 in Computer Science.
            </p>
            <p>
              Away from the codebase, I maintain active personal pursuits in tennis, travel across 21 countries, mechanical keyboards, and landscape photography.
            </p>
          </div>
        </div>

        {/* Beyond Work / Life & Discipline Grid */}
        <div className="pt-8 border-t border-[#1C1D20]/15 dark:border-white/15">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xs uppercase tracking-widest text-[#7D8085] dark:text-[#999D9E] font-medium">
              Beyond The Build • Craft & Discipline
            </span>
            <span className="text-xs font-mono text-[#7D8085] dark:text-[#999D9E] hidden sm:inline">
              Personal Interests
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {passions.map((passion, i) => {
              const Icon = passion.icon;
              return (
                <div
                  key={i}
                  className="p-6 rounded-3xl bg-[#F4F4F6] dark:bg-[#18191B] border border-[#1C1D20]/10 dark:border-white/10 flex flex-col justify-between hover:border-[#455CE9]/40 transition-colors"
                >
                  <div>
                    <div className="w-10 h-10 rounded-2xl bg-white dark:bg-white/10 flex items-center justify-center text-[#455CE9] mb-5 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-lg font-medium text-[#1C1D20] dark:text-white mb-1">
                      {passion.title}
                    </h4>
                    <p className="text-xs text-[#455CE9] font-mono mb-3">
                      {passion.subtitle}
                    </p>
                    <p className="text-xs text-[#55565A] dark:text-[#999D9E] leading-relaxed">
                      {passion.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
