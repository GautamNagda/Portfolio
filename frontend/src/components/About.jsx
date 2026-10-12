import React from 'react';
import { Target, CheckCircle2, Sparkles, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Eyebrow Badge */}
        <div className="mb-4 reveal-on-scroll">
          <div className="mono-badge">
            <BookOpen size={12} />
            <span>{about.badge}</span>
          </div>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-12 max-w-3xl leading-tight reveal-on-scroll delay-100">
          {about.heading}
        </h2>

        {/* Two-Column Grid: Bio and Current Focus */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Bio Text (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-slate-300 text-base sm:text-lg leading-relaxed font-normal reveal-on-scroll delay-150">
            {about.paragraphs.map((p, idx) => (
              <p key={idx} className="text-slate-300/90">
                {p}
              </p>
            ))}
            
            <div className="pt-4 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono bg-cyan-950/30 border border-cyan-500/25 text-cyan-300 hover-elevate transition-all">
                <Sparkles size={12} />
                JECRC CSE Student
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300 hover-elevate transition-all">
                Full-Stack + AI + Creative
              </span>
            </div>
          </div>

          {/* Current Focus Glass Card (5 cols) */}
          <div className="lg:col-span-5 reveal-scale delay-200">
            <div className="glass-card p-6 sm:p-7 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-cyan-500/15 transition-all" />

              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                  <Target size={16} />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight">Current Focus</h3>
              </div>

              <div className="space-y-3.5">
                {about.currentFocus.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-slate-200 transition-transform duration-200 hover:translate-x-1">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#4fd1ff]" />
                    <span className="font-medium text-slate-300">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Status: Actively Learning &amp; Building</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                  Active
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
