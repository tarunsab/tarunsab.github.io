import React, { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  MapPin, 
  CheckCircle2, 
  ArrowUpRight, 
  Copy, 
  Printer, 
  Building2,
  ChevronRight
} from 'lucide-react';
import { careerMilestones } from '../data/siteData';

export const InteractiveCV: React.FC = () => {
  const [selectedMilestoneId, setSelectedMilestoneId] = useState<string>('vanguard-em');
  const [copied, setCopied] = useState(false);

  const selectedMilestone = careerMilestones.find(m => m.id === selectedMilestoneId) || careerMilestones[0];

  const handleCopySummary = () => {
    const text = `Tarun Sabbineni — Research & Quantitative Model Platform Engineering Manager at Vanguard (Dec 2022 – Present; 2 years as EM). Previously Software Engineer at JPMorgan (2019 – 2022, including J.P. Morgan Asset Management 2021–2022) and Corporate Technology Intern (2018). 2:1 in Computer Science from Imperial College London. London, UK. https://www.linkedin.com/in/tarun-sabbineni-228419b7/`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section 
      id="cv" 
      className="bg-[#F7F5F0] dark:bg-[#141311] text-[#1C1B18] dark:text-[#F3EFE6] py-24 sm:py-32 px-6 sm:px-12 lg:px-16 border-b border-[#1C1B18]/10 dark:border-white/10 transition-colors relative"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#1C1B18]/15 dark:border-white/15">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-[0.2em] text-[#7D7A74] dark:text-[#8F8A80] font-mono">
                02 / CAREER RECORD & LEADERSHIP
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#1C1B18] dark:bg-white" />
              <span className="text-xs font-mono text-[#D97736] uppercase">
                Vanguard & JPMorgan
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-normal tracking-tight">
              Interactive CV
            </h2>

            <p className="text-sm sm:text-base text-[#5A5751] dark:text-[#C5C2BA] max-w-2xl font-light">
              Research & Quantitative Model Platform Engineering Manager at <span className="font-medium text-[#1C1B18] dark:text-white">Vanguard</span> (Dec 2022 – Present; 2 years as EM) with prior software engineering tenure at <span className="font-medium text-[#1C1B18] dark:text-white">JPMorgan</span> (2019 – 2022, including <span className="font-medium text-[#1C1B18] dark:text-white">J.P. Morgan Asset Management</span>), and a 2:1 in Computer Science from <span className="font-medium text-[#1C1B18] dark:text-white">Imperial College London</span>.
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={handleCopySummary}
              className="px-4 py-2 rounded-full border border-[#1C1B18]/20 dark:border-white/20 bg-white/70 dark:bg-white/5 backdrop-blur-sm text-xs font-mono hover:bg-[#1C1B18] hover:text-white dark:hover:bg-white dark:hover:text-[#1C1B18] transition-all flex items-center gap-1.5 shadow-sm"
              title="Copy executive career summary to clipboard"
            >
              {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-4 py-2 rounded-full border border-[#1C1B18]/20 dark:border-white/20 bg-white/70 dark:bg-white/5 backdrop-blur-sm text-xs font-mono hover:bg-[#1C1B18] hover:text-white dark:hover:bg-white dark:hover:text-[#1C1B18] transition-all flex items-center gap-1.5 shadow-sm"
              title="Print or save PDF CV"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <a
              href="https://www.linkedin.com/in/tarun-sabbineni-228419b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-[#1C1B18] text-white dark:bg-white dark:text-[#1C1B18] text-xs font-mono hover:bg-[#D97736] dark:hover:bg-[#D97736] dark:hover:text-white transition-all flex items-center gap-1.5 shadow-sm"
            >
              <span>LinkedIn Profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Career Epoch Timeline Scrubber */}
        <div className="space-y-4">
          <div className="text-xs font-mono text-[#7D7A74] dark:text-[#8F8A80]">
            <span className="uppercase tracking-wider">Select Career Milestone (2015 – Present):</span>
          </div>

          {/* Timeline Bar Track */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {careerMilestones.map((milestone) => {
              const isSelected = milestone.id === selectedMilestone.id;
              const isCurrent = milestone.id === 'vanguard-em';

              return (
                <button
                  key={milestone.id}
                  onClick={() => setSelectedMilestoneId(milestone.id)}
                  className={`text-left p-4 rounded-2xl border transition-all relative flex flex-col justify-between group ${
                    isSelected
                      ? 'bg-white dark:bg-[#1E1D1A] border-[#1C1B18] dark:border-white shadow-lg scale-[1.02]'
                      : 'bg-white/60 dark:bg-white/5 border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 hover:bg-white'
                  }`}
                >
                  {isCurrent && (
                    <span className="absolute -top-2 right-3 px-2 py-0.5 rounded-full bg-[#1C1B18] text-white dark:bg-white dark:text-[#1C1B18] text-[9px] font-mono tracking-widest uppercase shadow-sm">
                      Active
                    </span>
                  )}

                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-[#7D7A74] dark:text-[#8F8A80] block">
                      {milestone.yearRange}
                    </span>
                    <h4 className="text-sm font-medium leading-snug line-clamp-1 group-hover:text-[#D97736] transition-colors">
                      {milestone.company}
                    </h4>
                  </div>

                  <div className="pt-3 mt-3 border-t border-black/5 dark:border-white/5 text-[11px] text-[#5A5751] dark:text-[#C5C2BA] line-clamp-1 font-light">
                    {milestone.role}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Milestone Dossier Card (Dennis Clean Editorial Style) */}
        <div className="bg-white dark:bg-[#1A1917] rounded-3xl p-6 sm:p-10 border border-[#1C1B18]/15 dark:border-white/15 shadow-xl space-y-8 animate-fadeIn">
          
          {/* Top Dossier Bar */}
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-6 border-b border-[#1C1B18]/10 dark:border-white/10">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#F7F5F0] dark:bg-white/10 text-[#1C1B18] dark:text-white border border-[#1C1B18]/15 dark:border-white/15">
                  {selectedMilestone.yearRange}
                </span>

                {selectedMilestone.badge && (
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#D97736]/15 text-[#D97736] border border-[#D97736]/30 font-medium">
                    {selectedMilestone.badge}
                  </span>
                )}

                <span className="text-xs font-mono text-[#7D7A74] flex items-center gap-1 ml-1">
                  <MapPin className="w-3 h-3" />
                  <span>{selectedMilestone.location}</span>
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-normal tracking-tight text-[#1C1B18] dark:text-white pt-1">
                {selectedMilestone.role}
              </h3>

              <div className="flex items-center gap-2 text-sm sm:text-base text-[#5A5751] dark:text-[#C5C2BA]">
                <Building2 className="w-4 h-4 text-[#D97736]" />
                <span className="font-medium text-[#1C1B18] dark:text-white">{selectedMilestone.company}</span>
                {selectedMilestone.division && (
                  <>
                    <span>•</span>
                    <span>{selectedMilestone.division}</span>
                  </>
                )}
              </div>
            </div>

            {/* Metrics Pills */}
            {selectedMilestone.metrics && (
              <div className="flex flex-wrap lg:flex-col gap-2 shrink-0">
                {selectedMilestone.metrics.map((m, idx) => (
                  <div 
                    key={idx} 
                    className="px-4 py-2 rounded-2xl bg-[#F7F5F0] dark:bg-white/5 border border-black/10 dark:border-white/10 text-right"
                  >
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#7D7A74]">
                      {m.label}
                    </div>
                    <div className="text-sm font-medium text-[#1C1B18] dark:text-white">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Narrative Summary */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.15em] text-[#7D7A74]">
              Role Scope & Executive Overview
            </h4>
            <p className="text-base sm:text-lg text-[#33312E] dark:text-[#DCD8CF] font-light leading-relaxed">
              {selectedMilestone.summary}
            </p>
          </div>

          {/* Key Deliverables & Achievements */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.15em] text-[#7D7A74]">
              Key Impact & Deliverables
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {selectedMilestone.achievements.map((ach, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-2xl bg-[#FAF8F5] dark:bg-white/5 border border-black/5 dark:border-white/5 flex items-start gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-[#1C1B18] text-white dark:bg-white dark:text-[#1C1B18] flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono">
                    {idx + 1}
                  </div>
                  <p className="text-sm text-[#4A4843] dark:text-[#C5C2BA] leading-relaxed">
                    {ach}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Technologies Ribbon */}
          <div className="pt-4 border-t border-[#1C1B18]/10 dark:border-white/10 space-y-3">
            <span className="text-xs font-mono uppercase tracking-[0.15em] text-[#7D7A74] block">
              Domain Competencies & Technologies
            </span>
            <div className="flex flex-wrap gap-2">
              {selectedMilestone.skills.map((skill, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 rounded-full bg-[#F7F5F0] dark:bg-white/10 text-[#1C1B18] dark:text-white text-xs font-mono border border-black/10 dark:border-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Complete Career Sequence Accordion at a Glance */}
        <div className="pt-6 space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#7D7A74]">
            Complete Verified Career Sequence
          </h4>

          <div className="divide-y divide-black/10 dark:divide-white/10 border-t border-b border-black/10 dark:border-white/10">
            {careerMilestones.map((item) => (
              <div 
                key={item.id}
                onClick={() => setSelectedMilestoneId(item.id)}
                className={`py-5 px-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer transition-colors ${
                  item.id === selectedMilestone.id 
                    ? 'bg-black/[0.03] dark:bg-white/[0.04]' 
                    : 'hover:bg-black/[0.015] dark:hover:bg-white/[0.02]'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono ${
                    item.isEducation 
                      ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' 
                      : 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300'
                  }`}>
                    {item.isEducation ? <GraduationCap className="w-4 h-4" /> : <Briefcase className="w-4 h-4" />}
                  </div>
                  <div>
                    <h5 className="text-base font-medium text-[#1C1B18] dark:text-white">
                      {item.role}
                    </h5>
                    <p className="text-xs text-[#7D7A74] font-mono">
                      {item.company} {item.division ? `• ${item.division}` : ''}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-[#7D7A74]">
                  <span>{item.yearRange}</span>
                  <ChevronRight className="w-4 h-4 text-[#7D7A74]" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
