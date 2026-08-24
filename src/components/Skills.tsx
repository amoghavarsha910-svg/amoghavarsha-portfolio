import React, { useState } from 'react';
import {
  Code2,
  FileCode2,
  Coffee,
  Globe,
  Database,
  Cpu,
  Brain,
  Sparkles,
  Layers
} from 'lucide-react';
import { SKILLS } from '../data/portfolio';
import { TiltCard } from './TiltCard';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Programming', 'Web & Database', 'Hardware & Logic'];

  const filteredSkills =
    selectedCategory === 'All'
      ? SKILLS
      : SKILLS.filter((s) => s.category === selectedCategory);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCode2':
        return <FileCode2 className="w-7 h-7 text-[#00f2ff]" />;
      case 'Coffee':
        return <Coffee className="w-7 h-7 text-[#38bdf8]" />;
      case 'Globe':
        return <Globe className="w-7 h-7 text-[#00f2ff]" />;
      case 'Database':
        return <Database className="w-7 h-7 text-[#38bdf8]" />;
      case 'Cpu':
        return <Cpu className="w-7 h-7 text-[#7000ff]" />;
      case 'Brain':
        return <Brain className="w-7 h-7 text-[#a855f7]" />;
      default:
        return <Code2 className="w-7 h-7 text-[#00f2ff]" />;
    }
  };

  return (
    <section id="skills" className="relative py-24 bg-[#050508] overflow-hidden">
      {/* Radial grid */}
      <div className="bg-grid opacity-40" aria-hidden="true" />

      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#7000ff]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#00f2ff]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="section-title-line mb-3">
            <span className="section-title-badge">
              <Layers className="w-3.5 h-3.5" />
              <span>SKILLS / CAPABILITIES</span>
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-[-2px] text-white font-heading">
              Technical Stack &amp; Tooling
            </h2>
            <p className="text-[#a0a0a0] text-sm sm:text-base max-w-md">
              Core programming languages, database architectures, and engineering frameworks utilized across projects.
            </p>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-lg text-xs font-mono uppercase tracking-wider font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00f2ff] ${
                selectedCategory === cat
                  ? 'bg-[#00f2ff] text-[#050508] font-bold shadow-[0_0_15px_rgba(0,242,255,0.4)]'
                  : 'bg-white/[0.03] text-[#a0a0a0] border border-white/10 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3D Interactive Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <TiltCard
              key={skill.id}
              id={`skill-card-${skill.id}`}
              maxTilt={7}
              glowColor="rgba(0, 242, 255, 0.2)"
              className="p-6 group flex flex-col justify-between h-full glass-panel border-white/10 hover:border-[#00f2ff]/40"
            >
              <div>
                {/* Card Top: Icon & Category Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 group-hover:bg-white/[0.08] group-hover:scale-105 transition-all duration-300 shadow-inner">
                    {getSkillIcon(skill.icon)}
                  </div>
                  <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded bg-white/[0.03] border border-white/10 text-[#a0a0a0]">
                    {skill.category}
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="text-2xl font-bold text-white font-heading mb-2 group-hover:text-[#00f2ff] transition-colors flex items-center gap-2 tracking-tight">
                  <span>{skill.name}</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#00f2ff] opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>

                {/* Skill Description */}
                <p className="text-sm text-[#a0a0a0] leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Card Footer Indicator */}
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-[#a0a0a0] group-hover:text-[#00f2ff] transition-colors">
                <span>Application</span>
                <span className="font-semibold text-[#00f2ff]">Active</span>
              </div>
            </TiltCard>
          ))}
        </div>

      </div>
    </section>
  );
};
