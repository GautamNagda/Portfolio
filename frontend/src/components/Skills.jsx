import React from 'react';
import { Cpu, Terminal, Layout, Server, Database, Wrench, Sparkles, Film } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;

  const getCategoryIcon = (name) => {
    switch (name) {
      case 'Programming': return <Terminal size={18} className="text-cyan-400" />;
      case 'Frontend': return <Layout size={18} className="text-sky-400" />;
      case 'Backend': return <Server size={18} className="text-indigo-400" />;
      case 'Database': return <Database size={18} className="text-emerald-400" />;
      case 'Tools': return <Wrench size={18} className="text-amber-400" />;
      case 'AI': return <Sparkles size={18} className="text-cyan-300" />;
      case 'Creative': return <Film size={18} className="text-fuchsia-400" />;
      default: return <Cpu size={18} className="text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Eyebrow Badge */}
        <div className="text-center mb-4 reveal-on-scroll">
          <div className="mono-badge">
            <Cpu size={12} />
            <span>{skills.badge}</span>
          </div>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white text-center mb-16 max-w-2xl mx-auto reveal-on-scroll delay-100">
          {skills.heading}
        </h2>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.categories.map((category, idx) => {
            const isAI = category.featured;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-7 rounded-2xl transition-all duration-300 reveal-on-scroll delay-${((idx % 4) + 1) * 100} hover-elevate ${
                  isAI
                    ? 'bg-gradient-to-br from-cyan-950/30 to-[#12121a]/80 border border-cyan-400/40 shadow-[0_0_30px_rgba(79,209,255,0.12)] hover:border-cyan-400 hover:shadow-[0_0_40px_rgba(79,209,255,0.25)]'
                    : 'glass-card'
                }`}
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center transition-transform group-hover:scale-110">
                    {getCategoryIcon(category.name)}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                    {category.name}
                    {isAI && (
                      <span className="text-[10px] font-mono uppercase bg-cyan-400/20 text-cyan-300 px-2 py-0.5 rounded-full border border-cyan-400/30">
                        Specialized
                      </span>
                    )}
                  </h3>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 cursor-default ${
                        isAI
                          ? 'bg-cyan-950/40 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 hover:scale-105 hover:bg-cyan-900/40'
                          : 'bg-white/[0.04] text-slate-300 border border-white/5 hover:text-white hover:border-white/20 hover:scale-105 hover:bg-white/[0.08]'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
