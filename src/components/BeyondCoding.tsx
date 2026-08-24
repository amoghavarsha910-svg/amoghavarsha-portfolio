import React from 'react';
import { Trophy, Globe2, Compass, ShieldCheck, Heart } from 'lucide-react';
import { ACTIVITIES, LANGUAGES } from '../data/portfolio';
import { TiltCard } from './TiltCard';

export const BeyondCoding: React.FC = () => {
  return (
    <section id="beyond-coding" className="relative py-20 bg-[#050508] overflow-hidden">
      {/* Radial grid */}
      <div className="bg-grid opacity-40" aria-hidden="true" />

      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-[#00f2ff]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="section-title-line mb-3">
            <span className="section-title-badge">
              <Compass className="w-3.5 h-3.5" />
              <span>COMMUNICATION &amp; ACTIVITIES</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-[-2px] text-white font-heading">
            Beyond the Terminal
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Sports & Teamwork Activity Card */}
          <div className="lg:col-span-7 flex flex-col">
            {ACTIVITIES.map((activity, idx) => (
              <TiltCard
                key={idx}
                id={`activity-card-${idx}`}
                maxTilt={4}
                glowColor="rgba(0, 242, 255, 0.2)"
                className="p-6 sm:p-8 flex-1 flex flex-col justify-between glass-panel border-white/10 group hover:border-[#00f2ff]/40 rounded-2xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-[#00f2ff]">
                      <Trophy className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 rounded bg-[#00f2ff]/10 border border-[#00f2ff]/30 text-[#00f2ff]">
                      {activity.category}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-white font-heading mb-3 tracking-tight">
                    {activity.title}
                  </h3>

                  <p className="text-[#f0f0f0] text-base leading-relaxed mb-6 font-normal">
                    {activity.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {activity.values.map((val, vIdx) => (
                      <div
                        key={vIdx}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.02] border border-white/10 text-xs text-[#a0a0a0]"
                      >
                        <ShieldCheck className="w-4 h-4 text-[#00f2ff] shrink-0" />
                        <span className="text-[#f0f0f0] font-medium">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#a0a0a0]">
                  <span>Mindset</span>
                  <span className="text-[#00f2ff] font-bold">Resilience &amp; Collaboration</span>
                </div>
              </TiltCard>
            ))}
          </div>

          {/* Languages Card */}
          <div className="lg:col-span-5 flex flex-col">
            <TiltCard
              id="languages-card"
              maxTilt={4}
              glowColor="rgba(112, 0, 255, 0.2)"
              className="p-6 sm:p-8 flex-1 flex flex-col justify-between glass-panel border-white/10 group hover:border-[#7000ff]/40 rounded-2xl"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-[#7000ff]">
                    <Globe2 className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 rounded bg-white/[0.03] border border-white/10 text-[#a0a0a0]">
                    Communication
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white font-heading mb-2 tracking-tight">
                  Languages
                </h3>
                <p className="text-sm text-[#a0a0a0] mb-6">
                  Multilingual communication proficiency for collaborative and global technical environments.
                </p>

                <div className="space-y-3">
                  {LANGUAGES.map((lang) => (
                    <div
                      key={lang.name}
                      className="p-3.5 rounded-xl bg-white/[0.02] border border-white/10 flex items-center justify-between transition-all hover:bg-white/[0.05] hover:border-[#00f2ff]/30"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-2 h-2 rounded-full bg-[#00f2ff]" />
                        <span className="font-bold text-white text-sm sm:text-base">
                          {lang.name}
                        </span>
                      </div>
                      <span className="text-xs font-mono font-medium text-[#a0a0a0]">
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#a0a0a0]">
                <span className="flex items-center gap-1.5 text-[#00f2ff]">
                  <Heart className="w-3.5 h-3.5" />
                  <span>Shivamogga, Karnataka</span>
                </span>
                <span className="text-[#a0a0a0]">Active</span>
              </div>
            </TiltCard>
          </div>

        </div>

      </div>
    </section>
  );
};
