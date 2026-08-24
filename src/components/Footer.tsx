import React from 'react';
import { ArrowUp, Github, Mail, Phone, Heart, Code2 } from 'lucide-react';
import { PERSONAL_INFO, GITHUB_USERNAME, NAV_LINKS } from '../data/portfolio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050508] border-t border-white/10 pt-16 pb-12 overflow-hidden text-[#a0a0a0]">
      {/* Radial grid subtle */}
      <div className="bg-grid opacity-30" aria-hidden="true" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/5">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-2xl font-black font-heading text-white tracking-tight"
            >
              <span className="bg-gradient-to-r from-[#00f2ff] to-[#7000ff] bg-clip-text text-transparent">AMOGHAVARSHA</span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#00f2ff] px-2 py-0.5 rounded bg-[#00f2ff]/10 border border-[#00f2ff]/30 font-bold">
                DEV
              </span>
            </a>
            <p className="text-sm text-[#a0a0a0] max-w-sm leading-relaxed font-normal">
              Engineering student at Alva's Institute of Engineering and Technology (2026). Focused on programming, database architectures, and practical technology projects.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                id="footer-email-icon-link"
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-[#a0a0a0] hover:text-[#00f2ff] border border-white/10 transition-colors"
                aria-label="Email Amoghavarsha"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                id="footer-phone-icon-link"
                href={`tel:${PERSONAL_INFO.phone}`}
                className="p-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-[#a0a0a0] hover:text-[#38bdf8] border border-white/10 transition-colors"
                aria-label="Call Amoghavarsha"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                id="footer-github-icon-link"
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-[#a0a0a0] hover:text-white border border-white/10 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-[#00f2ff] transition-colors py-1 flex items-center gap-1.5 font-mono text-xs text-[#a0a0a0]"
                >
                  <span className="text-slate-600">/</span>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Location & Status */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-white font-bold">
              Location &amp; Status
            </h4>
            <p className="text-xs text-[#a0a0a0] font-mono">
              Shivamogga, Karnataka, India
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#00f2ff]/10 border border-[#00f2ff]/30 text-[#00f2ff] text-xs font-mono font-bold">
              <span className="w-2 h-2 rounded-full bg-[#00f2ff] animate-pulse" />
              <span>Open to Opportunities</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#a0a0a0]">
          <div>
            <span>© 2026 {PERSONAL_INFO.name}. Built with React &amp; TypeScript.</span>
          </div>

          <button
            id="back-to-top-btn"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors uppercase tracking-wider font-bold"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#00f2ff]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
