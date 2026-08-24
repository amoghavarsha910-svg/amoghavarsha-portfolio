import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Sparkles } from 'lucide-react';
import { NAV_LINKS, PERSONAL_INFO } from '../data/portfolio';

interface NavbarProps {
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResumeModal }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050508]/90 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo with Bold Typography Gradient */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-2 text-2xl font-extrabold tracking-tighter text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00f2ff] rounded-lg p-1"
          aria-label={`${PERSONAL_INFO.name} Portfolio Home`}
        >
          <span className="font-heading font-black text-2xl tracking-tighter bg-gradient-to-r from-[#00f2ff] to-[#7000ff] bg-clip-text text-transparent">
            AK.
          </span>
          <span className="hidden sm:inline-block text-[10px] uppercase font-mono tracking-widest text-[#a0a0a0] px-2 py-0.5 rounded bg-white/5 border border-white/10">
            DEV
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`relative px-3.5 py-1.5 text-xs uppercase tracking-wider font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00f2ff] ${
                  isActive ? 'text-[#00f2ff]' : 'text-[#a0a0a0] hover:text-white'
                }`}
              >
                {isActive && (
                  <span
                    className="absolute inset-x-2 bottom-0 h-0.5 bg-[#00f2ff] shadow-[0_0_10px_#00f2ff]"
                    aria-hidden="true"
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            id="nav-resume-btn"
            onClick={onOpenResumeModal}
            className="flex items-center gap-2 text-xs uppercase tracking-wider font-bold font-mono px-4 py-2 rounded-lg btn-primary-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00f2ff]"
          >
            <FileText className="w-3.5 h-3.5 text-[#050508]" />
            <span>Resume.pdf</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="mobile-resume-btn-sm"
            onClick={onOpenResumeModal}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#00f2ff] hover:bg-[#00f2ff]/10 transition-colors"
            aria-label="View Resume"
          >
            <FileText className="w-4 h-4" />
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00f2ff]"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-[#0a0a10]/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl transition-all"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm uppercase tracking-wider font-semibold transition-all ${
                    isActive
                      ? 'bg-[#00f2ff]/15 text-[#00f2ff] border border-[#00f2ff]/30'
                      : 'text-[#a0a0a0] hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <Sparkles className="w-4 h-4 text-[#00f2ff]" />}
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg btn-primary-bold text-sm"
            >
              <FileText className="w-4 h-4" />
              <span>View & Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
