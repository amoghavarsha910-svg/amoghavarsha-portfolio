import React from 'react';
import { Award, ExternalLink, GraduationCap, BookOpen, Terminal, Sparkles } from 'lucide-react';
import { CERTIFICATION_PLATFORMS } from '../data/portfolio';
import { TiltCard } from './TiltCard';

export const Certifications: React.FC = () => {
  const getPlatformIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-[#00f2ff]" />;
      case 'BookOpen':
        return <BookOpen className="w-6 h-6 text-[#38bdf8]" />;
      case 'Terminal':
        return <Terminal className="w-6 h-6 text-[#7000ff]" />;
      default:
        return <Award className="w-6 h-6 text-[#00f2ff]" />;
    }
  };

  return (
    <section id="certifications" className="relative py-20 bg-[#050508] overflow-hidden">
      {/* Radial grid */}
      <div className="bg-grid opacity-40" aria-hidden="true" />

      {/* Background glow */}
      <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-[#7000ff]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="section-title-line mb-3">
            <span className="section-title-badge">
              <Award className="w-3.5 h-3.5" />
              <span>LEARNING / CERTIFICATIONS</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-[-2px] text-white font-heading">
            Continuous Technical Growth
          </h2>
        </div>

        {/* 3 Learning Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATION_PLATFORMS.map((platform) => (
            <TiltCard
              key={platform.id}
              id={`cert-card-${platform.id}`}
              maxTilt={6}
              glowColor="rgba(0, 242, 255, 0.15)"
              className="p-6 flex flex-col justify-between glass-panel border-white/10 group hover:border-[#00f2ff]/40 rounded-2xl"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 group-hover:bg-white/[0.08] transition-colors">
                    {getPlatformIcon(platform.icon)}
                  </div>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-[#00f2ff]/10 border border-[#00f2ff]/30 text-[#00f2ff]">
                    {platform.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white font-heading mb-2 group-hover:text-[#00f2ff] transition-colors flex items-center gap-2 tracking-tight">
                  <span>{platform.name}</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#00f2ff] opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>

                <p className="text-sm text-[#a0a0a0] leading-relaxed mb-6">
                  {platform.description}
                </p>
              </div>

              {/* Editable Placeholder Link Footer */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <a
                  href={platform.certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#00f2ff] hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#00f2ff]"
                  title="Configurable link in src/data/portfolio.ts"
                >
                  <span>Certificate Link</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-[10px] font-mono text-[#a0a0a0]">Configurable</span>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
};
