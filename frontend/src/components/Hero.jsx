import React, { useState } from 'react';
import { ArrowDown, Mail, Sparkles, Copy, Check, Terminal } from 'lucide-react';
import { Github, Linkedin, Instagram } from './Icons';
import { portfolioData } from '../data/portfolioData';
import gautamPhoto from '../assets/gautam-headshot.jpg';

export default function Hero({ onOpenResume }) {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyCode = () => {
    navigator.clipboard.writeText(personal.codeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const floatingBadges = [
    { label: "React", top: "10%", left: "-8%", rotate: "-6deg", delay: "0s" },
    { label: "Node.js", top: "15%", right: "-6%", rotate: "8deg", delay: "-1.5s" },
    { label: "MongoDB", bottom: "18%", left: "-10%", rotate: "6deg", delay: "-3s" },
    { label: "AI", bottom: "12%", right: "-4%", rotate: "-10deg", isCyan: true, delay: "-4.5s" },
    { label: "C++", top: "50%", right: "-12%", rotate: "12deg", delay: "-2s" },
  ];

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative z-10">
        
        {/* Hero Top Grid: Content & Circular Profile Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-12">
          
          {/* Main Hero Copy (7 cols on desktop) */}
          <div className="lg:col-span-7 order-2 lg:order-1 text-left">
            {/* Top Eyebrow Badge (Vesper-inspired liquid metal) */}
            <div className="mb-6 inline-block">
              <div className="vesper-hero-badge">
                <span className="vesper-badge-star">
                  <svg width="15" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.6C12.55 2.6 12.88 3.15 13.08 4.7c.62 4.7 1.52 5.6 6.22 6.22 1.55.2 2.1.53 2.1 1.08s-.55.88-2.1 1.08c-4.7.62-5.6 1.52-6.22 6.22-.2 1.55-.53 2.1-1.08 2.1s-.88-.55-1.08-2.1c-.62-4.7-1.52-5.6-6.22-6.22C3.15 12.88 2.6 12.55 2.6 12s.55-.88 2.1-1.08c4.7-.62 5.6-1.52 6.22-6.22C11.12 3.15 11.45 2.6 12 2.6Z"/>
                  </svg>
                </span>
                <span>{personal.badge}</span>
              </div>
            </div>

            {/* Hero Main Heading with Instrument Serif accent */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6">
              Building Digital Experiences with{' '}
              <span className="vesper-serif-accent text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-400">
                Code, AI
              </span>{' '}
              &amp;{' '}
              <span className="vesper-serif-accent text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-300">
                Creativity.
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed font-normal mb-8 max-w-2xl">
              {personal.subtitle}
            </p>

            {/* CTA Buttons with Vesper liquid-glass language */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#projects"
                className="vesper-btn-solid"
              >
                View My Projects
              </a>
              <a
                href="#contact"
                className="vesper-btn-ghost"
              >
                Let's Connect
              </a>
              <button
                onClick={onOpenResume}
                className="px-5 py-2.5 rounded-full text-sm font-medium text-slate-300 hover:text-white bg-transparent border border-white/10 hover:border-cyan-400/40 transition-all flex items-center gap-2"
              >
                <Sparkles size={14} className="text-cyan-400" />
                View Resume
              </button>
            </div>

            {/* Social Quick Links */}
            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Linkedin size={14} />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={personal.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Instagram size={14} />
                <span>Instagram</span>
              </a>
              <span className="text-slate-700">•</span>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}&su=${encodeURIComponent("Portfolio Inquiry - Hello Gautam")}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                title="Compose email on Gmail"
              >
                <Mail size={14} />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Prominent Circular Profile Photo */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end my-4 lg:my-0">
            <div className="hero-photo-wrapper group animate-float-slow">
              {/* Outer Cyan Ambient Glow Aura */}
              <div className="hero-photo-aura" />
              
              {/* Decorative Concentric Dashed Ring */}
              <div className="hero-photo-ring" />

              {/* Perfectly Circular Photo Frame */}
              <div className="hero-photo-frame w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 aspect-square">
                <img
                  src={gautamPhoto}
                  onError={(e) => { e.currentTarget.src = '/gautam-profile.jpg'; }}
                  alt="Gautam Nagda"
                  className="w-full h-full object-cover object-center rounded-full transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="eager"
                />
              </div>

              {/* Floating Status Pill Attached to Bottom Edge of Circle */}
              <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap px-3.5 py-1 rounded-full text-[11px] font-mono font-medium bg-[#0e0e17]/95 backdrop-blur-md border border-cyan-400/40 text-cyan-300 shadow-xl flex items-center gap-1.5 transition-all group-hover:border-cyan-400 z-10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                <span>Available for Opportunities</span>
              </div>
            </div>
          </div>

        </div>

        {/* Code Mockup Card (Identical to Framer reference) */}
        <div className="relative max-w-3xl mx-auto my-8">
          {/* Floating Pill Badges around code card */}
          {floatingBadges.map((badge, idx) => (
            <div
              key={idx}
              style={{
                top: badge.top,
                bottom: badge.bottom,
                left: badge.left,
                right: badge.right,
                transform: `rotate(${badge.rotate})`,
                animationDelay: badge.delay,
              }}
              className={`absolute hidden md:inline-flex items-center px-3 py-1.5 rounded-full text-xs font-mono font-medium shadow-xl backdrop-blur-md z-20 pointer-events-none transition-all duration-300 animate-float ${
                badge.isCyan
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40'
                  : 'bg-[#181824]/90 text-slate-300 border border-white/10'
              }`}
            >
              {badge.label}
            </div>
          ))}

          {/* Interactive Code Window */}
          <div className="glass-card-static rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#0e0e17]/90">
            {/* Window Title Bar */}
            <div className="bg-[#12121e] px-4 py-2.5 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
              </div>
              <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                <Terminal size={12} className="text-cyan-400" />
                <span>{personal.codeSnippet.filename}</span>
              </div>
              <button
                onClick={handleCopyCode}
                className="text-xs text-slate-400 hover:text-white transition-colors p-1 rounded hover:bg-white/5"
                title="Copy code"
              >
                {copied ? <Check size={13} className="text-green-400" /> : <Copy size={13} />}
              </button>
            </div>

            {/* Code Body */}
            <div className="p-5 font-mono text-xs sm:text-sm text-slate-200 leading-relaxed overflow-x-auto">
              <p>
                <span className="text-purple-400">const</span>{' '}
                <span className="text-cyan-300">gautam</span> = &#123;
              </p>
              <p className="pl-4 sm:pl-6">
                <span className="text-slate-400">role:</span>{' '}
                <span className="text-sky-300">"Full-Stack Developer"</span>,
              </p>
              <p className="pl-4 sm:pl-6">
                <span className="text-slate-400">learning:</span> [
                <span className="text-sky-300">"DSA"</span>,{' '}
                <span className="text-sky-300">"React"</span>,{' '}
                <span className="text-sky-300">"Node.js"</span>,{' '}
                <span className="text-sky-300">"AI"</span>],
              </p>
              <p className="pl-4 sm:pl-6">
                <span className="text-slate-400">building:</span>{' '}
                <span className="text-emerald-400">true</span>
              </p>
              <p>&#125;;</p>
            </div>
          </div>
        </div>

        {/* Stats Row (GPA, Graduation, Reach, Projects) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-12 pt-8 border-t border-white/5">
          {personal.stats.map((stat, i) => (
            <div key={i} className="text-left group">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-1 group-hover:text-cyan-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-300 mb-0.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 font-mono">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
