import React from 'react';
import { ArrowRight, Mail, MapPin, Award, Terminal, Code2, Sparkles, FileText } from 'lucide-react';
import { PERSONAL_INFO, STATS } from '../data/portfolio';
import { Scene3D } from './Scene3D';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-[#050508]"
    >
      {/* Radial Grid Background */}
      <div className="bg-grid opacity-60" aria-hidden="true" />
      <div className="bg-radial-gradient absolute inset-0 pointer-events-none" aria-hidden="true" />

      {/* Interactive 3D Background */}
      <Scene3D />

      {/* Ambient Glow Accents */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00f2ff]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-[#7000ff]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Hero Top Badge */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00f2ff]/10 border border-[#00f2ff]/30 text-[#00f2ff] text-[11px] font-mono font-bold tracking-[2px] uppercase shadow-[0_0_15px_rgba(0,242,255,0.2)] backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f2ff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00f2ff]"></span>
            </span>
            <span>Available for Internships</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/15 text-[#f0f0f0] text-xs font-mono backdrop-blur-md">
            <Award className="w-3.5 h-3.5 text-[#00f2ff]" />
            <span className="font-bold text-white">{PERSONAL_INFO.cgpa} CGPA</span>
            <span className="text-[#a0a0a0]">/ 10</span>
          </div>
        </div>

        {/* Intro Subtitle */}
        <p className="text-[#a0a0a0] font-mono text-xs sm:text-sm tracking-[3px] uppercase mb-2 flex items-center gap-2">
          <Terminal className="w-4 h-4 text-[#00f2ff]" />
          <span>Hi, I'm</span>
        </p>

        {/* Main Name Heading with Ultra-Bold Typography */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-[-3px] text-white font-heading mb-3 leading-[0.95] select-none">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#f0f0f0] to-[#a0a0a0]">
            Amoghavarsha
          </span>
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f2ff] via-[#38bdf8] to-[#7000ff]">
            K A
          </span>
        </h1>

        {/* Professional Title with High Contrast */}
        <div className="relative inline-block mb-6 mt-2">
          <h2 className="text-xl sm:text-3xl font-light tracking-wide text-[#a0a0a0] flex items-center justify-center gap-2">
            <span className="text-white font-medium">Software Developer</span>
            <span className="text-[#00f2ff]">&amp;</span>
            <span>Engineering Student</span>
          </h2>
        </div>

        {/* Short Description */}
        <p className="max-w-2xl text-base sm:text-lg text-[#a0a0a0] mb-8 leading-relaxed font-normal">
          {PERSONAL_INFO.bioHeadline}
        </p>

        {/* Main CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12">
          <button
            id="hero-view-projects-btn"
            onClick={scrollToProjects}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 btn-primary-bold text-sm"
          >
            <span>View My Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            id="hero-contact-btn"
            onClick={scrollToContact}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 btn-outline-bold text-sm backdrop-blur-md"
          >
            <Mail className="w-4 h-4 text-[#00f2ff]" />
            <span>Contact Me</span>
          </button>

          <button
            id="hero-resume-btn"
            onClick={onOpenResumeModal}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-white/30 text-sm font-semibold transition-all backdrop-blur-md"
          >
            <FileText className="w-4 h-4 text-[#00f2ff]" />
            <span>Resume.pdf</span>
          </button>
        </div>

        {/* Integrated Quick Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl mb-8">
          <div className="glass-panel p-3.5 rounded-xl text-center border-white/10">
            <span className="block font-heading font-black text-2xl sm:text-3xl text-[#00f2ff] tracking-tight">
              {PERSONAL_INFO.cgpa}
            </span>
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#a0a0a0]">
              Current CGPA
            </span>
          </div>

          <div className="glass-panel p-3.5 rounded-xl text-center border-white/10">
            <span className="block font-heading font-black text-2xl sm:text-3xl text-[#00f2ff] tracking-tight">
              03+
            </span>
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#a0a0a0]">
              Practical Projects
            </span>
          </div>

          <div className="glass-panel p-3.5 rounded-xl text-center border-white/10">
            <span className="block font-heading font-black text-2xl sm:text-3xl text-[#00f2ff] tracking-tight">
              04
            </span>
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#a0a0a0]">
              Core Languages
            </span>
          </div>

          <div className="glass-panel p-3.5 rounded-xl text-center border-white/10">
            <span className="block font-heading font-black text-2xl sm:text-3xl text-[#00f2ff] tracking-tight">
              2026
            </span>
            <span className="text-[10px] uppercase font-mono tracking-wider text-[#a0a0a0]">
              Graduation Year
            </span>
          </div>
        </div>

        {/* Secondary Location & College Indicator */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-[#a0a0a0]">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#00f2ff]" />
            <span>Shivamogga, Karnataka, India</span>
          </div>
          <span className="text-white/20 hidden sm:inline">•</span>
          <div>
            <span>Alva's Institute of Engineering and Technology</span>
          </div>
        </div>
      </div>
    </section>
  );
};
