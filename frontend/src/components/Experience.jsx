import React from 'react';
import { Briefcase, Building2, Calendar, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;
  const items = experience.items || [experience];

  return (
    <section id="experience" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Eyebrow Badge */}
        <div className="text-center mb-4 reveal-on-scroll">
          <div className="mono-badge">
            <Briefcase size={12} />
            <span>{experience.badge}</span>
          </div>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white text-center mb-16 reveal-on-scroll delay-100">
          {experience.heading}
        </h2>

        {/* Experience Cards Stack */}
        <div className="space-y-8">
          {items.map((item, idx) => (
            <div
              key={item.id || idx}
              className={`glass-card p-6 sm:p-8 lg:p-10 relative overflow-hidden group transition-all duration-300 hover:border-cyan-400/40 reveal-on-scroll delay-${(idx + 1) * 150} hover-elevate`}
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/15 transition-all" />

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-2 mt-1 text-cyan-400 font-mono text-sm sm:text-base">
                    <Building2 size={16} />
                    <span>{item.company}</span>
                    {item.duration && (
                      <>
                        <span className="text-slate-600">•</span>
                        <span className="text-slate-400 text-xs sm:text-sm font-sans flex items-center gap-1">
                          <Calendar size={13} />
                          {item.duration}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  {item.type}
                </span>
              </div>

              <p className="text-slate-300/90 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-white/10 text-slate-300 hover:border-cyan-400/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
