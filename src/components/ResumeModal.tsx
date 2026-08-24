import React, { useEffect, useState } from 'react';
import {
  X,
  Download,
  Printer,
  FileText,
  Mail,
  Phone,
  MapPin,
  Award,
  GraduationCap,
  Briefcase,
  Layers,
  Sparkles,
  Info,
  CheckCircle2,
  Trophy
} from 'lucide-react';
import confetti from 'canvas-confetti';
import {
  PERSONAL_INFO,
  RESUME_FILE_PATH,
  SKILLS,
  PROJECTS,
  EDUCATION_DATA,
  CERTIFICATION_PLATFORMS,
  ACTIVITIES,
  LANGUAGES
} from '../data/portfolio';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloadNote, setDownloadNote] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownload = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
      });
    } catch {
      // Ignored if confetti fails
    }

    fetch(RESUME_FILE_PATH, { method: 'HEAD' })
      .then((res) => {
        if (res.ok) {
          const link = document.createElement('a');
          link.href = RESUME_FILE_PATH;
          link.download = 'Amoghavarsha_K_A_Resume.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          setDownloadNote(
            `Note: Place your PDF file at "public${RESUME_FILE_PATH}". In the meantime, you can use the "Print / Save PDF" button below to generate a clean PDF immediately!`
          );
        }
      })
      .catch(() => {
        setDownloadNote(
          `Note: Place your PDF file at "public${RESUME_FILE_PATH}". In the meantime, you can use the "Print / Save PDF" button below to generate a clean PDF immediately!`
        );
      });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-[#0a0a10] border border-white/15 shadow-2xl shadow-[#00f2ff]/10 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Action Toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0d0d18]/90 backdrop-blur-md">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-[#00f2ff]" />
            <h3 id="resume-modal-title" className="text-base font-bold text-white font-heading">
              Resume Preview
            </h3>
            <span className="text-xs font-mono uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-[#00f2ff]/10 border border-[#00f2ff]/30 text-[#00f2ff]">
              Verified Data
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              id="resume-print-btn"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg btn-outline-bold text-xs font-mono"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              id="resume-download-btn"
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg btn-primary-bold text-xs font-mono"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              id="resume-modal-close-btn"
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors ml-2"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Informative Note */}
        {downloadNote && (
          <div className="px-6 py-3 bg-[#00f2ff]/10 border-b border-[#00f2ff]/20 flex items-start gap-2.5 text-xs text-[#00f2ff]">
            <Info className="w-4 h-4 shrink-0 mt-0.5 text-[#00f2ff]" />
            <span>{downloadNote}</span>
          </div>
        )}

        {/* Scrollable Printable ATS Resume Sheet */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-[#050508] print:bg-white print:text-black">
          
          {/* Header */}
          <div className="border-b border-white/10 pb-6 print:border-black">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-black text-white print:text-black font-heading tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-[#00f2ff] print:text-cyan-700 font-bold text-lg mt-0.5">
                  {PERSONAL_INFO.title}
                </p>
                <p className="text-xs text-[#a0a0a0] print:text-slate-600 font-mono mt-1">
                  {PERSONAL_INFO.roleSubtitle}
                </p>
              </div>

              <div className="space-y-1.5 text-xs font-mono text-[#a0a0a0] print:text-slate-700">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#00f2ff] print:text-black" />
                  <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#00f2ff] print:text-black" />
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:underline">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#00f2ff] print:text-black" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-[#00f2ff] print:text-cyan-800 border-b border-white/10 print:border-slate-300 pb-1.5 mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </h2>
            {EDUCATION_DATA.map((edu, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                  <span className="font-bold text-white print:text-black">{edu.degree}</span>
                  <span className="font-mono text-xs text-[#a0a0a0] print:text-slate-600">{edu.period}</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#a0a0a0] print:text-slate-700">
                  <span>{edu.institution}</span>
                  <span className="font-mono text-[#00f2ff] print:text-cyan-700 font-semibold">
                    CGPA: {edu.cgpa}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-[#00f2ff] print:text-cyan-800 border-b border-white/10 print:border-slate-300 pb-1.5 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              <span>Technical Skills</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {SKILLS.map((skill) => (
                <div key={skill.id} className="flex items-baseline gap-2">
                  <span className="font-bold text-white print:text-black font-mono w-28 shrink-0">
                    {skill.name}:
                  </span>
                  <span className="text-[#a0a0a0] print:text-slate-700">
                    {skill.description}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-[#00f2ff] print:text-cyan-800 border-b border-white/10 print:border-slate-300 pb-1.5 mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Key Technical Projects</span>
            </h2>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="space-y-1.5 text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <span className="font-bold text-white print:text-black text-sm font-heading">
                      {proj.title}
                    </span>
                    <span className="font-mono text-[#a0a0a0] print:text-slate-600">
                      Tech: {proj.technologies.join(', ')}
                    </span>
                  </div>
                  <p className="text-[#a0a0a0] print:text-slate-700 leading-relaxed">
                    {proj.shortDescription}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Platforms & Certifications */}
          <div>
            <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-[#00f2ff] print:text-cyan-800 border-b border-white/10 print:border-slate-300 pb-1.5 mb-3 flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>Certifications &amp; Continuous Learning</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              {CERTIFICATION_PLATFORMS.map((plat) => (
                <div key={plat.id} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/5 print:border-slate-200">
                  <div className="font-bold text-white print:text-black">{plat.name}</div>
                  <div className="text-[#a0a0a0] print:text-slate-600 text-[11px] mt-0.5">{plat.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Activities & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-[#00f2ff] print:text-cyan-800 border-b border-white/10 print:border-slate-300 pb-1.5 mb-3 flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                <span>Activities</span>
              </h2>
              {ACTIVITIES.map((act, idx) => (
                <div key={idx} className="text-xs text-[#a0a0a0] print:text-slate-700 leading-relaxed">
                  <span className="font-bold text-white print:text-black">{act.title}: </span>
                  {act.description}
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-sm font-mono font-bold uppercase tracking-wider text-[#00f2ff] print:text-cyan-800 border-b border-white/10 print:border-slate-300 pb-1.5 mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Languages</span>
              </h2>
              <div className="text-xs text-[#a0a0a0] print:text-slate-700 flex flex-wrap gap-2">
                {LANGUAGES.map((lang) => (
                  <span
                    key={lang.name}
                    className="px-2.5 py-1 rounded bg-white/[0.03] border border-white/10 print:border-slate-300"
                  >
                    <strong className="text-white print:text-black">{lang.name}</strong> ({lang.level})
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
