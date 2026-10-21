import React, { useState, useEffect } from 'react';
import { Github, ArrowUpRight, CheckCircle2, Layers, ShieldCheck, Terminal, Code2 } from 'lucide-react';
import { publicProjects } from '../data/siteData';
import { Project } from '../types';
import { useTake } from '../context/TakeContext';

export const WorkSection: React.FC = () => {
  const { take } = useTake();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setTargetPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let animId: number;
    const lerp = () => {
      setMousePos((prev) => ({
        x: prev.x + (targetPos.x - prev.x) * 0.15,
        y: prev.y + (targetPos.y - prev.y) * 0.15,
      }));
      animId = requestAnimationFrame(lerp);
    };
    animId = requestAnimationFrame(lerp);
    return () => cancelAnimationFrame(animId);
  }, [targetPos]);

  const engineeringPillars = [
    {
      icon: Terminal,
      title: 'Developer Experience (DevEx)',
      description: 'Pruning cognitive load for thousands of engineers through standardized self-service Golden Paths and high-velocity tooling.'
    },
    {
      icon: Layers,
      title: 'Internal Developer Platforms',
      description: 'Declarative Kubernetes workflows, automated telemetry, and frictionless cloud-native infrastructure at enterprise scale.'
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise Reliability',
      description: 'Resilient banking distributed architectures, automated deployment guardrails, and mission-critical SLAs.'
    },
    {
      icon: Code2,
      title: 'Open Source Stewardship',
      description: 'Modern TypeScript, Go, containerized microservices, and high-leverage developer CLI tools.'
    }
  ];

  return (
    <section id="work" className="bg-white dark:bg-[#141517] text-[#1C1D20] dark:text-white py-24 sm:py-36 px-6 sm:px-12 lg:px-16 border-b border-[#1C1D20]/10 dark:border-white/10 relative transition-colors">
      
      {/* Floating Cursor Thumbnail Preview (Dennis Signature) */}
      {hoveredProject && (
        <div
          className="fixed pointer-events-none z-50 hidden lg:block -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
          }}
        >
          <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-2xl bg-[#1C1D20] border border-black/10 relative">
            <img
              src={hoveredProject.previewImage}
              alt={hoveredProject.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#455CE9] text-white flex items-center justify-center text-xs uppercase tracking-widest font-normal shadow-lg">
            View
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#1C1D20]/15 dark:border-white/15">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#7D8085] dark:text-[#999D9E] font-medium block mb-2">
              02 / Platform Leadership & Open Source
            </span>
            <h2 className="text-4xl sm:text-6xl font-normal tracking-tight text-[#1C1D20] dark:text-white">
              Selected Work
            </h2>
          </div>
          <p className="text-sm text-[#7D8085] dark:text-[#999D9E] max-w-md font-normal">
            Software Engineering Manager leading Developer Experience & Platform Engineering at Barclays. Curated public GitHub implementations.
          </p>
        </div>

        {/* Engineering Philosophy Pillars (Active in Horizon Atelier Take) */}
        {take === 'horizon' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
            {engineeringPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#F4F4F6] dark:bg-[#18191B] border border-[#1C1D20]/10 dark:border-white/10 flex flex-col justify-between hover:border-[#455CE9]/40 transition-colors"
                >
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-white dark:bg-white/10 flex items-center justify-center text-[#455CE9] mb-4 shadow-sm">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-base font-medium tracking-tight text-[#1C1D20] dark:text-white mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-[#55565A] dark:text-[#999D9E] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Projects Subheader */}
        <div className="flex items-center justify-between pt-4 pb-4 border-b border-[#1C1D20]/15 dark:border-white/15">
          <span className="text-xs uppercase tracking-widest text-[#7D8085] dark:text-[#999D9E] font-medium">
            Recent Work
          </span>
          <span className="text-xs font-mono text-[#7D8085] dark:text-[#999D9E] hidden sm:inline">
            Discipline & Year
          </span>
        </div>

        {/* Project Rows */}
        <ul className="divide-y divide-[#1C1D20]/15 dark:divide-white/15">
          {publicProjects.map((project) => {
            const isSelected = selectedProject?.id === project.id;
            return (
              <li
                key={project.id}
                onMouseEnter={() => setHoveredProject(project)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group"
              >
                <button
                  onClick={() => setSelectedProject(isSelected ? null : project)}
                  className="w-full py-8 sm:py-12 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left transition-all duration-300 group-hover:px-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-6">
                    <h3 className="text-2xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#1C1D20] dark:text-white group-hover:text-[#455CE9] transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map((tech, i) => (
                        <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-black/5 dark:bg-white/10 text-[#7D8085] dark:text-[#999D9E]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <p className="text-sm sm:text-base text-[#7D8085] dark:text-[#999D9E] font-normal group-hover:text-[#1C1D20] dark:group-hover:text-white transition-colors">
                      {project.category} · {project.year}
                    </p>
                    <div className="w-10 h-10 rounded-full border border-[#1C1D20]/20 dark:border-white/20 flex items-center justify-center text-[#1C1D20] dark:text-white group-hover:bg-[#455CE9] group-hover:text-white group-hover:border-transparent transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Expanded Details Drawer */}
                {isSelected && (
                  <div className="pb-10 pt-4 px-6 bg-[#F4F4F6] dark:bg-[#18191B] rounded-3xl p-8 mb-8 border border-[#1C1D20]/10 dark:border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fadeIn shadow-sm">
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs uppercase tracking-widest text-[#455CE9] font-medium">
                          {project.role} · {project.category}
                        </span>
                      </div>
                      <p className="text-base text-[#1C1D20] dark:text-white font-normal leading-relaxed">
                        {project.description}
                      </p>

                      <div className="space-y-2 pt-2">
                        <span className="text-xs uppercase tracking-widest text-[#7D8085] dark:text-[#999D9E] block font-medium">
                          Key Achievements & Architecture
                        </span>
                        <ul className="space-y-2">
                          {project.achievements.map((ach, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-[#55565A] dark:text-[#999D9E]">
                              <CheckCircle2 className="w-4 h-4 text-[#455CE9] shrink-0 mt-0.5" />
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.techStack.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-full text-xs font-mono bg-white dark:bg-white/10 text-[#1C1D20] dark:text-white border border-black/5 dark:border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 pt-4">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1C1D20] dark:bg-white text-white dark:text-[#1C1D20] text-xs font-medium hover:bg-[#455CE9] dark:hover:bg-[#455CE9] dark:hover:text-white transition-all shadow-sm"
                        >
                          <Github className="w-4 h-4" />
                          <span>View on GitHub</span>
                        </a>
                      </div>
                    </div>

                    <div className="lg:col-span-5 aspect-[16/10] rounded-2xl overflow-hidden border border-black/10 dark:border-white/10 shadow-md">
                      <img
                        src={project.previewImage}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

      </div>
    </section>
  );
};
