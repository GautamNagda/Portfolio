import React, { useState } from 'react';
import { Layers, ExternalLink, Terminal, Sparkles, Activity, Play, Box, Crosshair, TrendingUp, Trophy } from 'lucide-react';
import { Github } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;

  const featured = projects.items.filter(item => item.featured !== false);
  const practice = projects.items.filter(item => item.featured === false);

  return (
    <section id="projects" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Eyebrow Badge */}
        <div className="text-center mb-4 reveal-on-scroll">
          <div className="mono-badge">
            <Layers size={12} />
            <span>{projects.badge}</span>
          </div>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white text-center mb-16 reveal-on-scroll delay-100">
          {projects.heading}
        </h2>

        {/* Major Featured Projects Stack */}
        <div className="space-y-12 mb-16">
          {featured.map((project, idx) => (
            <div
              key={project.id}
              className="glass-card-static rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/40 transition-all duration-500 group bg-[#11111a]/80 reveal-on-scroll hover-elevate"
            >
              {/* Card Visual Banner Header */}
              <div className="relative h-48 sm:h-64 lg:h-72 w-full overflow-hidden bg-[#0c0c14] border-b border-white/5">
                {project.imageType === 'opengl' ? (
                  // Stylized 3D OpenGL 3.3 Computer Graphics Viewport Preview
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117] via-[#090b10] to-[#05070a] flex flex-col justify-between p-5 sm:p-6 overflow-hidden">
                    {/* 3D Perspective Grid Background */}
                    <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#4fd1ff_1px,transparent_1px),linear-gradient(to_bottom,#4fd1ff_1px,transparent_1px)] bg-[size:32px_32px] [transform:perspective(500px)_rotateX(60deg)_translateY(-20px)] origin-bottom pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090b10] via-transparent to-[#090b10]/80 pointer-events-none" />

                    {/* Top HUD */}
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Box className="text-cyan-400" size={18} />
                        <span className="font-mono text-xs uppercase tracking-widest text-cyan-300 font-semibold">
                          OpenGL 3.3 Core Pipeline
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded bg-black/60 border border-emerald-400/30 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          60 FPS • Real-Time
                        </span>
                      </div>
                    </div>

                    {/* Center 3D Target Reticle HUD */}
                    <div className="relative z-10 flex flex-col items-center justify-center my-auto pointer-events-none">
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                        <div className="absolute inset-0 border-2 border-cyan-400/30 rounded-lg animate-pulse" />
                        <div className="absolute inset-1.5 border border-dashed border-cyan-300/40 rounded-full" />
                        <Crosshair className="text-cyan-300" size={28} />
                        <span className="absolute -top-3 text-[9px] font-mono bg-cyan-950/90 border border-cyan-400/40 text-cyan-300 px-1.5 py-0.5 rounded">
                          Z: -12.4m
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-cyan-300/80 mt-2 tracking-wider">
                        [ 3D RAYCAST HITBOX • CAMERA FOV 75° ]
                      </span>
                    </div>

                    {/* Bottom HUD Badges */}
                    <div className="relative z-10 flex flex-wrap items-center gap-2 sm:gap-3">
                      <div className="bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-xs font-mono text-slate-300">
                        Shaders: <span className="text-cyan-300 font-semibold">GLSL 330 core</span>
                      </div>
                      <div className="bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-xs font-mono text-slate-300 hidden sm:block">
                        Transform: <span className="text-cyan-300 font-semibold">MVP Matrices</span>
                      </div>
                      <div className="bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-xs font-mono text-slate-300">
                        VBO/VAO: <span className="text-emerald-400 font-semibold">Active</span>
                      </div>
                    </div>
                  </div>
                ) : project.imageType === 'ml' ? (
                  // Stylized IPL Match Winning Prediction ML Analytics Preview
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0a101f] via-[#0d1629] to-[#0a101f] flex flex-col justify-between p-5 sm:p-6 overflow-hidden">
                    <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px]" />

                    {/* Top HUD */}
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="text-cyan-400" size={18} />
                        <span className="font-mono text-xs uppercase tracking-widest text-cyan-300 font-semibold">
                          IPL Win Predictor • InternPe ML
                        </span>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-black/60 border border-cyan-400/30 text-[11px] font-mono text-cyan-300">
                        Scikit-Learn • 88.4% Acc
                      </span>
                    </div>

                    {/* Center Match Analytics HUD */}
                    <div className="relative z-10 max-w-xl mx-auto w-full bg-black/50 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-white/10 shadow-2xl">
                      <div className="flex items-center justify-between text-xs font-mono text-slate-300 mb-2">
                        <span className="text-cyan-300 font-bold flex items-center gap-1.5">
                          <Trophy size={13} className="text-amber-400" /> Chennai Super Kings
                        </span>
                        <span className="text-slate-400 font-bold">vs</span>
                        <span className="text-slate-200 font-bold">Mumbai Indians</span>
                      </div>

                      {/* Win Probability Bar */}
                      <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden flex mb-2">
                        <div className="bg-gradient-to-r from-cyan-400 to-sky-400 h-full w-[64%]" />
                        <div className="bg-slate-700 h-full w-[36%]" />
                      </div>

                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                        <span className="text-cyan-400 font-semibold">64% Win Probability</span>
                        <span>Venue: Wankhede • Toss: Bat First</span>
                        <span className="text-slate-300">36%</span>
                      </div>
                    </div>

                    {/* Bottom HUD Badges */}
                    <div className="relative z-10 flex items-center gap-3">
                      <div className="bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-xs font-mono text-slate-300">
                        Internship: <span className="text-cyan-300 font-semibold">6-Week InternPe</span>
                      </div>
                      <div className="bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-xs font-mono text-slate-300 hidden sm:block">
                        Features: <span className="text-emerald-400 font-semibold">Toss, Venue &amp; Form</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Stylized AI Waveform Sentiment Visual Preview
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-cyan-950/40 to-slate-950 flex flex-col justify-between p-6 overflow-hidden">
                    <div className="absolute inset-0 opacity-25">
                      <svg className="w-full h-full" viewBox="0 0 800 200" preserveAspectRatio="none">
                        <path
                          d="M0,100 C150,20 250,180 400,90 C550,0 650,190 800,100 L800,200 L0,200 Z"
                          fill="rgba(79, 209, 255, 0.08)"
                        />
                        <path
                          d="M0,100 Q200,10 400,100 T800,100"
                          fill="none"
                          stroke="#4fd1ff"
                          strokeWidth="2.5"
                          className="animate-pulse"
                        />
                        <path
                          d="M0,110 Q220,180 440,110 T800,110"
                          fill="none"
                          stroke="#38bdf8"
                          strokeWidth="1.5"
                          opacity="0.6"
                        />
                      </svg>
                    </div>

                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Activity className="text-cyan-400" size={20} />
                        <span className="font-mono text-xs uppercase tracking-widest text-cyan-300">Acoustic &amp; Sentiment NLP Engine</span>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-black/50 border border-cyan-400/30 text-[11px] font-mono text-cyan-300">
                        BERT Model + MFCC
                      </span>
                    </div>

                    <div className="relative z-10 flex items-center gap-3">
                      <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs font-mono text-slate-300">
                        Speech Tone: <span className="text-cyan-300 font-semibold">Analyzed</span>
                      </div>
                      <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs font-mono text-slate-300">
                        Confidence: <span className="text-emerald-400 font-semibold">94.2%</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Details Body */}
              <div className="p-6 sm:p-8">
                <span className="text-xs font-mono font-medium text-cyan-400 tracking-wider uppercase block mb-2">
                  {project.category}
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-300/90 text-sm sm:text-base leading-relaxed mb-6 max-w-3xl">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-white/10 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Card Action Buttons */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-200 hover:text-white transition-all"
                  >
                    <Github size={14} />
                    View Code
                  </a>
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#4fd1ff] text-[#0a0a0f] hover:bg-[#38bdf8] transition-all shadow-md shadow-cyan-500/20"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Practice & Game Logic Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {practice.map((item, idx) => (
            <div
              key={item.id}
              className={`glass-card p-6 sm:p-7 flex flex-col justify-between group reveal-on-scroll delay-${(idx + 1) * 150} hover-elevate`}
            >
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider block mb-2">
                  {item.category}
                </span>

                <h3 className="text-xl font-bold text-white tracking-tight mb-3 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-300/80 text-sm leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-white/[0.04] border border-white/5 text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <a
                  href={item.codeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-medium text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 hover:text-white transition-all"
                >
                  <Github size={13} />
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
