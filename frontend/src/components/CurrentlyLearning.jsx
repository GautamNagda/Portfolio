import React from 'react';
import { Compass, Code, Brain, Briefcase } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CurrentlyLearning() {
  const { currentlyLearning } = portfolioData;

  const getIcon = (idx) => {
    switch(idx) {
      case 0: return <Code size={16} className="text-cyan-400" />;
      case 1: return <Brain size={16} className="text-sky-400" />;
      default: return <Briefcase size={16} className="text-indigo-400" />;
    }
  };

  return (
    <section className="py-20 relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Eyebrow Badge */}
        <div className="text-center mb-4 reveal-on-scroll">
          <div className="mono-badge">
            <Compass size={12} />
            <span>{currentlyLearning.badge}</span>
          </div>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white text-center mb-14 reveal-on-scroll delay-100">
          {currentlyLearning.heading}
        </h2>

        {/* 3 Columns Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentlyLearning.items.map((item, idx) => (
            <div key={idx} className={`glass-card p-6 sm:p-7 flex flex-col justify-between reveal-on-scroll delay-${(idx + 1) * 150} hover-elevate`}>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center transition-transform group-hover:scale-110">
                      {getIcon(idx)}
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 font-semibold">
                    {item.progress}%
                  </span>
                </div>

                {/* Progress Bar (Exact design from reference) */}
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden mb-5">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-[#4fd1ff] rounded-full transition-all duration-1000 shadow-[0_0_10px_#4fd1ff]"
                    style={{ width: `${item.progress}%` }}
                  />
                </div>

                <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                <span>In Continuous Progress</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
