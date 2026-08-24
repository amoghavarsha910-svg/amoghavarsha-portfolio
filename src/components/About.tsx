import React, { useEffect, useState, useRef } from 'react';
import { User, CheckCircle2, Cpu, Database, Code, BookOpen, Terminal } from 'lucide-react';
import { PERSONAL_INFO, STATS } from '../data/portfolio';
import { TiltCard } from './TiltCard';

export const About: React.FC = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative py-24 bg-[#050508] overflow-hidden">
      {/* Radial grid */}
      <div className="bg-grid opacity-40" aria-hidden="true" />

      {/* Decorative ambient background */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#00f2ff]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#7000ff]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="section-title-line mb-3">
            <span className="section-title-badge">
              <User className="w-3.5 h-3.5" />
              <span>PROFILE / BACKGROUND</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-[-2px] text-white font-heading">
            Engineering Depth &amp; Focus
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Narrative Card */}
          <div className="lg:col-span-7 flex flex-col">
            <TiltCard
              id="about-narrative-card"
              className="p-6 sm:p-8 flex-1 flex flex-col justify-between border-white/10 glass-panel"
              maxTilt={4}
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-[#00f2ff]/80" />
                  </div>
                  <span className="text-xs font-mono text-[#a0a0a0]">student_developer_profile.md</span>
                </div>

                <p className="text-[#f0f0f0] text-base sm:text-lg leading-relaxed font-normal">
                  {PERSONAL_INFO.aboutP1}
                </p>

                <p className="text-[#a0a0a0] text-base leading-relaxed">
                  {PERSONAL_INFO.aboutP2}
                </p>

                {/* Practical Focus Badges */}
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/10">
                    <Code className="w-4 h-4 text-[#00f2ff] shrink-0" />
                    <span className="text-xs text-[#f0f0f0] font-medium">Programming &amp; Logic</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/10">
                    <Database className="w-4 h-4 text-[#38bdf8] shrink-0" />
                    <span className="text-xs text-[#f0f0f0] font-medium">Database &amp; SQL Systems</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/10">
                    <Cpu className="w-4 h-4 text-[#7000ff] shrink-0" />
                    <span className="text-xs text-[#f0f0f0] font-medium">Hardware Sensors &amp; IoT</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/10">
                    <BookOpen className="w-4 h-4 text-[#00f2ff] shrink-0" />
                    <span className="text-xs text-[#f0f0f0] font-medium">Continuous Learning</span>
                  </div>
                </div>
              </div>

              {/* Developer Motto Footer */}
              <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-[#00f2ff]">
                <CheckCircle2 className="w-4 h-4 text-[#00f2ff] shrink-0" />
                <span>"Building practical solutions &amp; continuously sharpening technical depth."</span>
              </div>
            </TiltCard>
          </div>

          {/* Right Column: Key Animated Statistics */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {STATS.map((stat, idx) => (
              <TiltCard
                key={stat.label}
                id={`stat-card-${idx}`}
                className="p-6 flex flex-col items-center justify-center text-center group border-white/10 glass-panel hover:border-[#00f2ff]/40"
                maxTilt={8}
              >
                <div className="text-4xl sm:text-5xl md:text-6xl font-black font-heading text-[#00f2ff] mb-2 tracking-tight">
                  {hasAnimated ? (
                    <AnimatedCounter
                      target={stat.value}
                      isDecimal={stat.isDecimal}
                      suffix={stat.suffix}
                    />
                  ) : (
                    <span>0{stat.suffix}</span>
                  )}
                </div>
                <div className="text-xs font-mono uppercase tracking-wider text-[#a0a0a0] group-hover:text-white transition-colors">
                  {stat.label}
                </div>
                <div className="w-8 h-0.5 bg-white/10 rounded-full mt-3 group-hover:w-16 group-hover:bg-[#00f2ff] transition-all duration-300" />
              </TiltCard>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

// Sub-component for smooth animated number counting
interface AnimatedCounterProps {
  target: number;
  isDecimal?: boolean;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ target, isDecimal = false, suffix = '' }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1600; // ms
    const steps = 40;
    const stepTime = duration / steps;
    const increment = target / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCurrent(target);
        clearInterval(timer);
      } else {
        setCurrent(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {isDecimal ? current.toFixed(2) : Math.round(current)}
      {suffix}
    </span>
  );
};
