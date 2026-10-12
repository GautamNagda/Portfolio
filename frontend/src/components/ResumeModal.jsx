import React from 'react';
import { X, Download, Printer, ExternalLink, GraduationCap, Briefcase, Award, Code, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal, education, skills, projects, experience, events } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#0f0f18] border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="bg-[#141422] px-6 py-4 border-b border-white/10 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
            <h3 className="text-base font-bold text-white tracking-tight">Gautam Nagda — Resume</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              title="Print Resume"
            >
              <Printer size={16} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Content Area */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 font-sans text-slate-300 text-sm">
          
          {/* Header Summary */}
          <div className="border-b border-white/10 pb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">Gautam Nagda</h1>
            <p className="text-cyan-400 font-mono text-xs sm:text-sm mb-3">
              Full-Stack Developer • Computer Science Engineering Student
            </p>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
              Computer Science student at JECRC Foundation with a 9.3+ GPA, strong foundation in Data Structures &amp; Algorithms, full-stack web applications, and AI integrations. Experienced in high-impact creative storytelling with over 3.4M+ organic reach.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <span>📍 Jaipur / Udaipur, Rajasthan</span>
              <a 
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personal.email}&su=${encodeURIComponent("Gautam Nagda Resume Inquiry")}`}
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-cyan-300 transition-colors"
                title="Compose email on Gmail"
              >
                ✉️ {personal.email}
              </a>
              <a href={personal.github} target="_blank" rel="noreferrer" className="hover:text-cyan-300 transition-colors">
                🔗 github.com/GautamNagda
              </a>
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-300 transition-colors">
                💼 linkedin.com/in/gautam-nagda
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3 flex items-center gap-2">
              <GraduationCap size={14} /> Education
            </h4>
            <div className="space-y-4">
              {education.items.map((edu, idx) => (
                <div key={idx} className="bg-white/[0.02] p-4 rounded-xl border border-white/5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-white font-semibold">
                    <span>{edu.title}</span>
                    <span className="text-cyan-400 font-mono text-xs">{edu.gpa}</span>
                  </div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">{edu.institution} • {edu.duration}</div>
                  {edu.tags && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {edu.tags.map((t, tIdx) => (
                        <span key={tIdx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3 flex items-center gap-2">
              <Code size={14} /> Technical Skills
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-white/[0.02] p-3 rounded-lg border border-white/5">
                <span className="text-white font-medium block mb-1">Languages:</span>
                <span className="text-slate-400 font-mono">C++, Python, JavaScript (ES6+), SQL, HTML5, CSS3</span>
              </div>
              <div className="bg-white/[0.02] p-3 rounded-lg border border-white/5">
                <span className="text-white font-medium block mb-1">Frameworks &amp; Web:</span>
                <span className="text-slate-400 font-mono">React, Node.js, Express.js, Tailwind CSS, REST APIs</span>
              </div>
              <div className="bg-white/[0.02] p-3 rounded-lg border border-white/5">
                <span className="text-white font-medium block mb-1">Databases &amp; Tools:</span>
                <span className="text-slate-400 font-mono">MongoDB, SQL, Git, GitHub, VS Code, Netlify</span>
              </div>
              <div className="bg-white/[0.02] p-3 rounded-lg border border-white/5">
                <span className="text-white font-medium block mb-1">AI &amp; Creative:</span>
                <span className="text-slate-400 font-mono">BERT, NLP, Prompt Engineering, Premiere Pro, Filmora</span>
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3 flex items-center gap-2">
              <CheckCircle2 size={14} /> Key Projects
            </h4>
            <div className="space-y-3">
              <div className="bg-white/[0.02] p-4 rounded-xl border border-white/5">
                <div className="text-white font-semibold flex items-center justify-between">
                  <span>3D Shooting Game</span>
                  <span className="text-xs font-mono text-cyan-400">C++ • OpenGL 3.3 • GLSL</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  First-person 3D game engineered to understand fundamental computer graphics — custom GLSL shaders, camera projection matrices, coordinate spaces, and real-time graphics rendering loops.
                </p>
              </div>

              <div className="bg-white/[0.02] p-4 rounded-xl border border-white/5">
                <div className="text-white font-semibold flex items-center justify-between">
                  <span>IPL Winning Team Prediction ML Model</span>
                  <span className="text-xs font-mono text-cyan-400">Python • Scikit-Learn • ML</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Machine learning predictive system trained on multi-season IPL match datasets, venue parameters, and toss analytics to forecast match winning probabilities.
                </p>
              </div>

              <div className="bg-white/[0.02] p-4 rounded-xl border border-white/5">
                <div className="text-white font-semibold flex items-center justify-between">
                  <span>Speech &amp; Sentiment Analysis (Hackathon Prototype)</span>
                  <span className="text-xs font-mono text-cyan-400">Python • BERT • NLP</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  AI-assisted prototype analyzing voice tone and text transcripts for early acoustic sentiment indicators.
                </p>
              </div>

              <div className="bg-white/[0.02] p-4 rounded-xl border border-white/5">
                <div className="text-white font-semibold flex items-center justify-between">
                  <span>C++ Algorithms &amp; Calculator Suite</span>
                  <span className="text-xs font-mono text-cyan-400">C++ • OOP • Core CS</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Modular object-oriented calculation engines, algorithmic problem solving, and data structure implementations.
                </p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3 flex items-center gap-2">
              <Briefcase size={14} /> Experience
            </h4>
            <div className="space-y-3">
              <div className="bg-white/[0.02] p-4 rounded-xl border border-white/5">
                <div className="text-white font-semibold flex items-center justify-between">
                  <span>Machine Learning Intern — InternPe</span>
                  <span className="text-xs font-mono text-cyan-400">6 Weeks Virtual Internship</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Engineered an IPL winning team prediction ML model analyzing match statistics, venue data, and toss analytics with Python and Scikit-Learn.
                </p>
              </div>

              <div className="bg-white/[0.02] p-4 rounded-xl border border-white/5">
                <div className="text-white font-semibold flex items-center justify-between">
                  <span>Next Gen Video Creator — Himanshu Engineering Services</span>
                  <span className="text-xs font-mono text-cyan-400">Internship</span>
                </div>
                <p className="text-xs text-slate-300 mt-1">
                  Produced promotional and digital storytelling video content combining creative production with AI-assisted video workflows.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="bg-[#141422] px-6 py-4 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono">Updated for 2026 Season</span>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold bg-[#4fd1ff] text-[#0a0a0f] hover:bg-[#38bdf8] transition-all"
            >
              <Download size={13} />
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full text-xs font-medium text-slate-300 hover:text-white bg-white/5 border border-white/10"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
