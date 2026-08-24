import React, { useEffect } from 'react';
import { X, Github, ExternalLink, CheckCircle2, ShieldAlert, Database, Radio, Sparkles, Layers, Info } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const getProjectIcon = (name: string) => {
    switch (name) {
      case 'shield-alert':
        return <ShieldAlert className="w-8 h-8 text-[#00f2ff]" />;
      case 'database':
        return <Database className="w-8 h-8 text-[#38bdf8]" />;
      case 'radio':
        return <Radio className="w-8 h-8 text-[#7000ff]" />;
      default:
        return <Sparkles className="w-8 h-8 text-[#00f2ff]" />;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0a0a10] border border-white/15 p-6 sm:p-8 shadow-2xl shadow-[#00f2ff]/10 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="project-modal-close-btn"
          onClick={onClose}
          className="absolute top-6 right-6 p-2.5 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00f2ff]"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4 mb-6 pr-12">
          <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 shadow-inner">
            {getProjectIcon(project.iconName)}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono text-[#00f2ff] font-bold uppercase tracking-widest">
                Project {project.number}
              </span>
            </div>
            <h3 id="project-modal-title" className="text-2xl sm:text-4xl font-black text-white font-heading tracking-tight">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Tech Badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-mono font-semibold rounded-md bg-[#00f2ff]/10 text-[#00f2ff] border border-[#00f2ff]/30"
            >
              #{tech}
            </span>
          ))}
        </div>

        {/* Overview Description */}
        <div className="mb-6 space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-widest text-[#a0a0a0] font-bold flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#00f2ff]" />
            <span>Architecture &amp; Overview</span>
          </h4>
          <p className="text-[#f0f0f0] text-sm sm:text-base leading-relaxed bg-white/[0.02] border border-white/10 p-4 rounded-xl font-normal">
            {project.fullDescription}
          </p>
        </div>

        {/* Key Goals & Architecture Highlights */}
        <div className="mb-8 space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-widest text-[#a0a0a0] font-bold flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#00f2ff]" />
            <span>Key Objectives &amp; Engineering Outcomes</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.goals.map((goal, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-[#a0a0a0] leading-relaxed"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#00f2ff] mt-1.5 shrink-0" />
                <span className="text-[#f0f0f0]">{goal}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Configurable Links Notice & Buttons */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#a0a0a0]">
            <Info className="w-4 h-4 text-[#00f2ff] shrink-0" />
            <span>Repository &amp; demo links connect to your project URL.</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              id="modal-github-link"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg btn-outline-bold text-xs"
            >
              <Github className="w-4 h-4" />
              <span>Source Repository</span>
            </a>

            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-5 py-2.5 rounded-lg btn-primary-bold text-xs"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
