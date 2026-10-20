import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Code2, Layers, Cpu, ShieldCheck, CheckCircle2, ChevronUp } from 'lucide-react';
import { publicProjects, personalBio } from '../data/siteData';
import { Project } from '../types';

export const WorkSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const strengths = [
    {
      title: "Platform Engineering",
      desc: "Architecting self-service internal developer platforms, multi-tenant container orchestrators, and automated infrastructure guardrails at enterprise scale.",
      icon: Layers
    },
    {
      title: "Developer Ergonomics",
      desc: "Pruning developer cognitive overload. Establishing fast golden paths, sub-second local inner loops, and declarative build and deployment systems.",
      icon: Code2
    },
    {
      title: "Distributed Observability",
      desc: "Deep instrumentation across distributed microservice topologies using eBPF probes, OpenTelemetry, real-time SLI/SLO dashboards, and statistical canary gates.",
      icon: Cpu
    },
    {
      title: "Resilience & Governance",
      desc: "Leading engineering teams through high-stakes architectural evolutions, zero-trust security postures, and strict financial compliance standards without compromising velocity.",
      icon: ShieldCheck
    }
  ];

  return (
    <section id="work" className="py-24 sm:py-32 border-b border-white/10 bg-[#0E0F12]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header: Dennis / Oliur Editorial Eyebrow */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono-clean text-[#C5A880] uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#C5A880]" />
              <span>01 / Engineering Leadership</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans uppercase">
              Work & <span className="font-display italic font-normal text-[#E8E1D5] lowercase">Architecture</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#88898C] max-w-md font-light leading-relaxed">
            Software Engineering Manager at <span className="text-white font-medium">Barclays</span>. Focusing on developer productivity, platform reliability, and resilient cloud systems.
          </p>
        </div>

        {/* Current Role Overview Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#141519] border border-white/10 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-[#C5A880]/15 text-[#C5A880] text-xs font-mono-clean uppercase tracking-wider">
                Current Position · London
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Software Engineering Manager
              </h3>
              <p className="text-base text-[#E8E1D5] font-light">
                Developer Experience & Platform Engineering · Barclays
              </p>
            </div>

            <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[#88898C] font-light leading-relaxed">
              <p>
                Directing strategic platform initiatives that elevate engineering velocity for thousands of distributed developers. Championing standardized Kubernetes execution runtimes, unified CI/CD observability pipelines, and automated canary deployment gates.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {["Kubernetes", "Go", "Distributed Systems", "OpenTelemetry", "Cloud Architecture", "Developer Platforms", "Engineering Leadership"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/5 text-xs text-white/80 font-mono-clean"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Core Pillars / Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {strengths.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group p-6 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:border-white/15 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center text-[#C5A880] group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono-clean text-[#88898C]">0{idx + 1}</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{s.title}</h4>
                <p className="text-xs sm:text-sm text-[#88898C] font-light leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Dennis Snellenberg Style Interactive Projects Table */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono-clean text-[#88898C] uppercase tracking-widest">
            <span>Curated Public Systems (GitHub)</span>
            <span className="hidden sm:inline">Domain & Role</span>
          </div>

          <div className="divide-y divide-white/10">
            {publicProjects.map((project, idx) => {
              const isExpanded = selectedProject?.id === project.id;
              return (
                <div
                  key={project.id}
                  className="group transition-colors"
                >
                  {/* Clickable Row */}
                  <button
                    onClick={() => setSelectedProject(isExpanded ? null : project)}
                    className="w-full py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left group-hover:px-4 transition-all duration-300 rounded-xl"
                  >
                    <div className="flex items-start md:items-center gap-6">
                      <span className="text-sm font-mono-clean text-[#88898C] group-hover:text-[#C5A880] transition-colors pt-1 md:pt-0">
                        0{idx + 1}
                      </span>
                      <div>
                        <h4 className="text-xl sm:text-2xl md:text-3xl font-medium text-white group-hover:text-[#C5A880] transition-colors tracking-tight font-sans">
                          {project.title}
                        </h4>
                        <span className="text-xs text-[#88898C] md:hidden block mt-1">
                          {project.category} · {project.role}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 self-end md:self-auto">
                      <div className="hidden md:flex flex-col text-right">
                        <span className="text-sm text-white font-medium">{project.category}</span>
                        <span className="text-xs text-[#88898C] font-mono-clean">{project.year} · {project.role}</span>
                      </div>

                      <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white group-hover:bg-[#C5A880] group-hover:text-[#0E0F12] group-hover:border-[#C5A880] transition-all duration-300">
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
                      </div>
                    </div>
                  </button>

                  {/* Expanded Project Details Drawer */}
                  {isExpanded && (
                    <div className="px-4 pb-8 pt-2 grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-white/5 animate-fadeIn">
                      <div className="lg:col-span-7 space-y-4">
                        <p className="text-base text-[#E5E7EB] leading-relaxed font-light">
                          {project.description}
                        </p>

                        <div className="space-y-2 pt-2">
                          <span className="text-xs font-mono-clean text-[#C5A880] uppercase tracking-wider block">
                            Key Achievements & Impact
                          </span>
                          <ul className="space-y-2">
                            {project.achievements.map((item, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#88898C]">
                                <CheckCircle2 className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 pt-4">
                          {project.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded bg-white/[0.05] border border-white/10 text-xs font-mono-clean text-white/90"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="pt-4 flex items-center gap-4">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#0E0F12] hover:bg-[#C5A880] text-xs uppercase tracking-widest font-semibold transition-colors"
                          >
                            <Github className="w-4 h-4" />
                            <span>View Source Code</span>
                          </a>
                        </div>
                      </div>

                      {/* Project Preview Image */}
                      <div className="lg:col-span-5">
                        <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-video lg:aspect-auto lg:h-full min-h-[220px]">
                          <img
                            src={project.previewImage}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                            <span className="text-xs font-mono-clean text-[#C5A880]">
                              {project.category} Control Plane
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* GitHub Footnote / Privacy Notice from spec */}
        <div className="mt-12 p-6 rounded-xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono-clean text-[#88898C]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Strict privacy adherence: Only curated public GitHub repositories are featured. Confidential employer internals omitted.</span>
          </div>
          <a
            href={personalBio.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#C5A880] flex items-center gap-1 transition-colors underline shrink-0"
          >
            <span>Explore All Repositories</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};
