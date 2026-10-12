import React from 'react';
import { Code2, ArrowUpRight } from 'lucide-react';
import { Github } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function DeveloperSection() {
  const { developerSpotlight } = portfolioData;

  return (
    <section className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Eyebrow Badge */}
        <div className="text-center mb-4 reveal-on-scroll">
          <div className="mono-badge">
            <Code2 size={12} />
            <span>{developerSpotlight.badge}</span>
          </div>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white text-center mb-4 reveal-on-scroll delay-100">
          {developerSpotlight.heading}
        </h2>
        <p className="text-center text-slate-300/80 text-sm sm:text-base max-w-2xl mx-auto mb-8 font-normal reveal-on-scroll delay-150">
          {developerSpotlight.subtitle}
        </p>

        {/* GitHub Button CTA */}
        <div className="flex justify-center mb-16 reveal-on-scroll delay-200">
          <a
            href={developerSpotlight.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-[#4fd1ff] text-[#0a0a0f] hover:bg-[#38bdf8] transition-all transform hover:-translate-y-0.5 shadow-md shadow-cyan-500/20"
          >
            <Github size={16} />
            <span>View GitHub Profile</span>
          </a>
        </div>

        {/* 3 Repo Cards (Framer reference) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {developerSpotlight.repositories.map((repo, idx) => (
            <a
              key={idx}
              href={`https://github.com/GautamNagda/${repo.name}`}
              target="_blank"
              rel="noreferrer"
              className={`glass-card p-6 block group reveal-on-scroll delay-${(idx + 1) * 150} hover-elevate`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-sm font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                  {repo.name}
                </span>
                <ArrowUpRight size={14} className="text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>

              <p className="text-xs font-mono text-slate-400 mb-6">
                {repo.stack}
              </p>

              <div className="flex items-center justify-end text-xs font-mono text-slate-400 pt-3 border-t border-white/5">
                <span className="text-[11px] text-cyan-400/80">Public</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
