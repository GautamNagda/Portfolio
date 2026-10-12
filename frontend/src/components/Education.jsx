import React from 'react';
import { GraduationCap, Calendar, Award, BookMarked } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Eyebrow Badge */}
        <div className="text-center mb-4 reveal-on-scroll">
          <div className="mono-badge">
            <GraduationCap size={12} />
            <span>{education.badge}</span>
          </div>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white text-center mb-16 reveal-on-scroll delay-100">
          {education.heading}
        </h2>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-[11px] sm:before:left-[15px] before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-cyan-400 before:via-sky-500/40 before:to-white/10">
          
          {education.items.map((item, idx) => (
            <div key={idx} className={`relative group reveal-on-scroll delay-${(idx + 1) * 100}`}>
              
              {/* Timeline Indicator Dot */}
              <div 
                className={`absolute -left-[30px] sm:-left-[39px] top-5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  item.active 
                    ? 'bg-cyan-400 border-[#0a0a0f] shadow-[0_0_12px_#4fd1ff] scale-110' 
                    : 'bg-[#1a1a28] border-slate-500 group-hover:border-cyan-400'
                }`}
              />

              {/* Education Glass Card */}
              <div className="glass-card p-6 sm:p-7 hover-elevate">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                    {item.title}
                  </h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 w-fit">
                    {item.gpa}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs sm:text-sm font-mono text-cyan-400/90 mb-4">
                  <span>{item.institution}</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <Calendar size={12} />
                    {item.duration}
                  </span>
                </div>

                {item.tags && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-white/5 text-slate-300 hover:text-white hover:border-white/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
