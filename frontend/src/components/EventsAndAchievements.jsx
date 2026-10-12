import React from 'react';
import { Trophy, Calendar, MapPin, Award, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function EventsAndAchievements() {
  const { events, milestones } = portfolioData;

  return (
    <section className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Eyebrow Badge */}
        <div className="text-center mb-4 reveal-on-scroll">
          <div className="mono-badge">
            <Trophy size={12} />
            <span>{events.badge}</span>
          </div>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white text-center mb-16 reveal-on-scroll delay-100">
          {events.heading}
        </h2>

        {/* 3 Hackathon / Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {events.items.map((event, idx) => (
            <div key={idx} className={`glass-card p-6 sm:p-7 flex flex-col justify-between group reveal-on-scroll delay-${(idx + 1) * 150} hover-elevate`}>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight mb-2 group-hover:text-cyan-300 transition-colors">
                  {event.title}
                </h3>
                
                <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 mb-4">
                  <MapPin size={12} />
                  <span>{event.location}</span>
                </div>

                <p className="text-slate-300/80 text-sm leading-relaxed font-normal">
                  {event.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-slate-400">
                <CheckCircle size={13} className="text-cyan-400" />
                <span>Verified Participation</span>
              </div>
            </div>
          ))}
        </div>

        {/* Milestones so far Section (Exact structure from Framer) */}
        <div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white text-center mb-12 reveal-on-scroll delay-100">
            Milestones so far
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((m, idx) => (
              <div key={idx} className={`glass-card p-6 group reveal-scale delay-${((idx % 3) + 1) * 100} hover-elevate`}>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {m.title}
                  </h4>
                  <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:shadow-[0_0_8px_#4fd1ff] transition-all" />
                </div>
                <p className="text-xs sm:text-sm text-slate-400 font-mono">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
