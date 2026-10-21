import React, { useState, useEffect } from 'react';
import { Github, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { publicProjects } from '../data/siteData';
import { Project } from '../types';

export const WorkSection: React.FC = () => {
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

  return (
    <section id="work" className="bg-white dark:bg-[#141517] text-[#1C1D20] dark:text-white py-24 sm:py-32 px-8 sm:px-16 border-b border-[#1C1D20]/10 dark:border-white/10 relative transition-colors">
      {/* Dennis Snellenberg Floating Cursor Thumbnail & View Button */}
      {hoveredProject && (
        <div
          className="fixed pointer-events-none z-50 hidden lg:block -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
          }}
        >
          {/* Floating Image Preview */}
          <div className="w-80 h-96 rounded-2xl overflow-hidden shadow-2xl bg-[#1C1D20] border border-black/10 relative">
            <img
              src={hoveredProject.previewImage}
              alt={hoveredProject.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Floating Blue "View" Circle Button */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#455CE9] text-white flex items-center justify-center text-xs uppercase tracking-widest font-normal shadow-lg">
            View
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        {/* Section Sub-title */}
        <div className="flex items-center justify-between pb-8 border-b border-[#1C1D20]/15 dark:border-white/15">
          <span className="text-xs uppercase tracking-widest text-[#7D8085] dark:text-[#999D9E] font-medium">
            Recent Work
          </span>
          <span className="text-xs uppercase tracking-widest text-[#7D8085] dark:text-[#999D9E] font-medium hidden sm:inline">
            Discipline & Year
          </span>
        </div>

        {/* Dennis Snellenberg Interactive Project Rows */}
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
                  className="w-full py-10 sm:py-14 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left transition-all duration-300 group-hover:px-4"
                >
                  <div className="flex items-baseline gap-6">
                    <h3 className="text-3xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#1C1D20] dark:text-white group-hover:text-[#455CE9] transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-6">
                    <p className="text-base sm:text-lg text-[#7D8085] dark:text-[#999D9E] font-normal group-hover:text-[#1C1D20] dark:group-hover:text-white transition-colors">
                      {project.category} · {project.year}
                    </p>
                    <div className="w-10 h-10 rounded-full border border-[#1C1D20]/20 dark:border-white/20 flex items-center justify-center text-[#1C1D20] dark:text-white group-hover:bg-[#455CE9] group-hover:text-white group-hover:border-transparent transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Expanded Details Drawer */}
                {isSelected && (
                  <div className="pb-12 pt-4 px-4 bg-[#F4F4F6] dark:bg-[#1C1D20] rounded-2xl p-8 mb-8 border border-[#1C1D20]/10 dark:border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fadeIn">
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xs uppercase tracking-widest text-[#455CE9] font-medium">
                          {project.role} · {project.category}
                        </span>
                      </div>
                      <p className="text-base text-[#1C1D20] dark:text-white font-light leading-relaxed">
                        {project.description}
                      </p>

                      <div className="space-y-2 pt-2">
                        <span className="text-xs uppercase tracking-widest text-[#7D8085] dark:text-[#999D9E] block font-medium">
                          Key Achievements
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
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full bg-white dark:bg-white/10 border border-[#1C1D20]/10 dark:border-white/10 text-xs text-[#1C1D20] dark:text-white font-mono"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="pt-4">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1C1D20] dark:bg-white text-white dark:text-[#1C1D20] hover:bg-[#455CE9] dark:hover:bg-[#455CE9] dark:hover:text-white text-xs uppercase tracking-widest font-normal transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          <span>View on GitHub</span>
                        </a>
                      </div>
                    </div>

                    <div className="lg:col-span-5">
                      <div className="aspect-[4/3] rounded-xl overflow-hidden border border-[#1C1D20]/10 dark:border-white/10 shadow-lg">
                        <img
                          src={project.previewImage}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Dennis Snellenberg "More work" centered pill button */}
        <div className="pt-16 flex justify-center">
          <a
            href="https://github.com/sabbineni"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-round px-8 py-5 rounded-full border border-[#1C1D20]/25 dark:border-white/25 text-[#1C1D20] dark:text-white hover:bg-[#1C1D20] hover:text-white dark:hover:bg-white dark:hover:text-[#1C1D20] transition-all text-sm uppercase tracking-widest flex items-center gap-3"
          >
            <span>More work</span>
            <span className="w-5 h-5 rounded-full bg-[#EAECEF] dark:bg-white/20 text-[#1C1D20] dark:text-white text-xs flex items-center justify-center font-mono">
              4
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
