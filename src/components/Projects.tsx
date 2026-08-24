import React, { useState } from 'react';
import {
  FolderGit2,
  ShieldAlert,
  Database,
  Radio,
  Github,
  ArrowUpRight,
  Sparkles,
  Info
} from 'lucide-react';
import { PROJECTS } from '../data/portfolio';
import { Project } from '../types';
import { TiltCard } from './TiltCard';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getProjectIcon = (name: string) => {
    switch (name) {
      case 'shield-alert':
        return <ShieldAlert className="w-6 h-6 text-[#00f2ff] group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />;
      case 'database':
        return <Database className="w-6 h-6 text-[#38bdf8] group-hover:-translate-y-1 group-hover:scale-110 transition-transform duration-300" />;
      case 'radio':
        return <Radio className="w-6 h-6 text-[#7000ff] group-hover:animate-pulse group-hover:scale-110 transition-transform duration-300" />;
      default:
        return <FolderGit2 className="w-6 h-6 text-[#00f2ff]" />;
    }
  };

  return (
    <section id="projects" className="relative py-24 bg-[#050508] overflow-hidden">
      {/* Radial Grid */}
      <div className="bg-grid opacity-40" aria-hidden="true" />

      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[#00f2ff]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="section-title-line mb-3">
            <span className="section-title-badge">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>PROJECTS / PORTFOLIO</span>
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-[-2px] text-white font-heading">
              Practical Engineering Work
            </h2>
            <p className="text-[#a0a0a0] text-sm sm:text-base max-w-md">
              Hardware sensor safety, relational database systems, and emergency mesh communication networks.
            </p>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <TiltCard
              key={project.id}
              id={`project-card-${project.id}`}
              maxTilt={6}
              glowColor="rgba(0, 242, 255, 0.2)"
              className="relative group flex flex-col justify-between p-6 sm:p-7 glass-panel border-white/10 hover:border-[#00f2ff]/40 cursor-pointer transition-all duration-300 rounded-2xl"
              onClick={() => setSelectedProject(project)}
            >
              {/* Massive background number watermark (Bold Typography signature) */}
              <span className="absolute right-5 top-4 text-5xl font-black font-heading text-white/[0.04] group-hover:text-[#00f2ff]/20 transition-colors duration-300 select-none pointer-events-none">
                {project.number}
              </span>

              <div>
                {/* Card Top: Numbering badge & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#00f2ff] font-bold">
                    PROJ {project.number}
                  </span>
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 group-hover:bg-white/[0.08] transition-all duration-300">
                    {getProjectIcon(project.iconName)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white font-heading mb-3 group-hover:text-[#00f2ff] transition-colors flex items-center gap-2 tracking-tight">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 text-[#00f2ff]" />
                </h3>

                {/* Description */}
                <p className="text-sm text-[#a0a0a0] leading-relaxed mb-6 line-clamp-4">
                  {project.shortDescription}
                </p>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-[11px] font-mono font-medium rounded-md bg-white/[0.03] text-[#f0f0f0] border border-white/10 group-hover:border-[#00f2ff]/30 transition-colors"
                    >
                      #{tech}
                    </span>
                  ))}
                </div>

                {/* Bottom Actions */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="text-xs font-bold font-mono uppercase tracking-wider text-[#00f2ff] hover:text-white flex items-center gap-1.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#00f2ff]"
                  >
                    <span>Inspect Details</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#a0a0a0] hover:text-white border border-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00f2ff]"
                    title="View GitHub Repository"
                    aria-label={`View GitHub repository for ${project.title}`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Informative Note */}
        <div className="mt-10 text-center flex items-center justify-center gap-2 text-xs font-mono text-[#a0a0a0]">
          <Info className="w-4 h-4 text-[#00f2ff]" />
          <span>Click any card to inspect full technical goals and architectural specifications.</span>
        </div>

      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
