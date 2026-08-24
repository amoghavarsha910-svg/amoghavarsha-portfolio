import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolio';
import { TiltCard } from './TiltCard';

export const Education: React.FC = () => {
  return (
    <section id="education" className="relative py-24 bg-[#050508] overflow-hidden">
      {/* Radial Grid */}
      <div className="bg-grid opacity-40" aria-hidden="true" />

      {/* Background radial accent */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#00f2ff]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="section-title-line mb-3">
            <span className="section-title-badge">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>EDUCATION / ACADEMICS</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-[-2px] text-white font-heading">
            Academic Foundation
          </h2>
        </div>

        {/* Vertical Glowing Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-[#00f2ff] space-y-12 ml-2 sm:ml-4">
          
          {EDUCATION_DATA.map((edu, idx) => (
            <div key={idx} className="relative group">
              
              {/* Glowing Node Indicator */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-2 flex items-center justify-center">
                <div className="relative flex h-4 w-4 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f2ff] opacity-60"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00f2ff] border-2 border-[#050508]"></span>
                </div>
              </div>

              {/* Education Content Card */}
              <TiltCard
                id={`education-card-${idx}`}
                maxTilt={4}
                glowColor="rgba(0, 242, 255, 0.2)"
                className="p-6 sm:p-8 glass-panel border-white/10 group-hover:border-[#00f2ff]/40 rounded-2xl"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#00f2ff]/10 border border-[#00f2ff]/30 text-[#00f2ff] text-xs font-mono font-bold uppercase tracking-wider mb-2">
                      <Award className="w-3.5 h-3.5 text-[#00f2ff]" />
                      <span>CGPA: {edu.cgpa}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white font-heading tracking-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-base text-[#38bdf8] font-medium mt-0.5">
                      {edu.institution}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1.5 text-xs font-mono text-[#a0a0a0]">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#00f2ff]" />
                      <span className="text-[#f0f0f0] font-semibold">{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#a0a0a0]" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="mt-5 space-y-2.5">
                  {edu.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#a0a0a0]">
                      <CheckCircle className="w-4 h-4 text-[#00f2ff] shrink-0 mt-0.5" />
                      <span className="text-[#f0f0f0]">{highlight}</span>
                    </div>
                  ))}
                </div>
              </TiltCard>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
