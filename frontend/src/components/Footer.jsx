import React from 'react';
import { ArrowUp, Mail, Code2, Heart } from 'lucide-react';
import { Github, Linkedin, Instagram } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Creative Work', href: '#creative-work' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#08080d] pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5 reveal-on-scroll">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
                <Code2 size={15} />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">{personal.name}</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-mono">
              Computer Science Student • Developer • Creator
            </p>
            <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
              Engineering high-performance web applications, exploring conversational and agentic AI, and crafting compelling digital narratives.
            </p>
          </div>

          {/* Quick Nav Links (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300">Quick Navigation</h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-400 hover:text-cyan-300 transition-colors py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Socials & Back to Top (3 cols) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300">Connect</h4>
            <div className="flex items-center gap-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                title="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                title="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={personal.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                title="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}&su=${encodeURIComponent("Connecting with Gautam Nagda")}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-white flex items-center justify-center transition-all"
                title="Send email via Gmail"
              >
                <Mail size={16} />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-all mt-2"
            >
              <ArrowUp size={12} className="text-cyan-400" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © {new Date().getFullYear()} Gautam Nagda. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Built with React &amp; Tailwind CSS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span className="text-cyan-300">Inspired by Framer</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
