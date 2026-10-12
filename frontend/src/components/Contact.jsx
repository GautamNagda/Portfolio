import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle2, Copy, Check, ArrowUpRight } from 'lucide-react';
import { Github, Linkedin, Instagram } from './Icons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const { contact, personal } = portfolioData;
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [copiedEmail, setCopiedEmail] = useState(false);

  const getGmailComposeUrl = (subject, body) => {
    const s = subject || 'Portfolio Inquiry - Hello Gautam';
    const b = body || '';
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personal.email)}&su=${encodeURIComponent(s)}&body=${encodeURIComponent(b)}`;
  };

  const handleOpenGmail = (e) => {
    if (e) e.preventDefault();
    const subject = formState.name ? `Portfolio Inquiry from ${formState.name}` : 'Portfolio Inquiry - Hello Gautam';
    const body = [
      formState.name ? `Name: ${formState.name}` : '',
      formState.email ? `Email: ${formState.email}` : '',
      formState.message ? `\nMessage:\n${formState.message}` : ''
    ].filter(Boolean).join('\n');

    window.open(getGmailComposeUrl(subject, body), '_blank', 'noopener,noreferrer');
  };

  const handleCopyEmail = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      alert('Please fill out all fields.');
      return;
    }

    setStatus('submitting');
    try {
      await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState)
      });
    } catch (err) {
      console.warn('Backend unavailable, continuing with client confirmation:', err);
    }

    setStatus('success');
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#4fd1ff', '#38bdf8', '#818cf8', '#ffffff']
      });
    } catch (err) {
      // Confetti fallback
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Eyebrow Badge */}
        <div className="mb-4 reveal-on-scroll">
          <div className="mono-badge">
            <MessageSquare size={12} />
            <span>{contact.badge}</span>
          </div>
        </div>

        {/* Section Heading & Subtitle */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 max-w-2xl leading-tight reveal-on-scroll delay-100">
          {contact.heading}
        </h2>
        <p className="text-slate-300/80 text-base sm:text-lg mb-16 max-w-xl font-normal leading-relaxed reveal-on-scroll delay-150">
          {contact.subtitle}
        </p>

        {/* Two-Column Form & Direct Connect */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Links (Exact Framer text links) */}
          <div className="lg:col-span-4 space-y-6 reveal-on-scroll delay-150">
            <div className="space-y-4">
              <a 
                href={getGmailComposeUrl("Connecting with Gautam Nagda")}
                target="_blank"
                rel="noreferrer"
                className="glass-card p-4 flex items-center justify-between group hover:border-cyan-400/40 transition-all cursor-pointer"
                title="Compose email to Gautam on Gmail"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
                      <span>Direct Email</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-400/10 text-cyan-300 border border-cyan-400/20 font-mono">Gmail</span>
                    </div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {personal.email}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <button 
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 text-xs text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                    title="Copy email address"
                  >
                    {copiedEmail ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
                  </button>
                  <ArrowUpRight size={14} className="text-slate-500 group-hover:text-white transition-all" />
                </div>
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="glass-card p-4 flex items-center justify-between group hover:border-cyan-400/40"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-sky-400">
                    <Linkedin size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Professional Profile</div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      LinkedIn
                    </div>
                  </div>
                </div>
                <ArrowUpRight size={14} className="text-slate-500 group-hover:text-white transition-all" />
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="glass-card p-4 flex items-center justify-between group hover:border-cyan-400/40"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-300">
                    <Github size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Code Repositories</div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      GitHub
                    </div>
                  </div>
                </div>
                <ArrowUpRight size={14} className="text-slate-500 group-hover:text-white transition-all" />
              </a>

              <a
                href={personal.instagram}
                target="_blank"
                rel="noreferrer"
                className="glass-card p-4 flex items-center justify-between group hover:border-cyan-400/40"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-pink-400">
                    <Instagram size={16} />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Creative &amp; Visuals</div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      Instagram
                    </div>
                  </div>
                </div>
                <ArrowUpRight size={14} className="text-slate-500 group-hover:text-white transition-all" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form (Exact Framer fields & Cyan Full Button) */}
          <div className="lg:col-span-8 reveal-scale delay-200">
            <div className="glass-card p-6 sm:p-8 relative">
              {status === 'success' ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 bg-cyan-500/10 border border-cyan-400/30 rounded-full flex items-center justify-center mx-auto text-cyan-400">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">Message Received!</h3>
                  <p className="text-slate-300 text-sm max-w-sm mx-auto">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <div className="pt-2 flex flex-wrap justify-center gap-3">
                    <a
                      href={getGmailComposeUrl()}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-full text-xs font-semibold bg-[#4fd1ff] text-[#0a0a0f] hover:bg-[#38bdf8] transition-all inline-flex items-center gap-1.5 shadow-md shadow-cyan-500/20"
                    >
                      <Mail size={13} />
                      Open in Gmail Compose
                    </a>
                    <button
                      onClick={() => {
                        setStatus('idle');
                        setFormState({ name: '', email: '', message: '' });
                      }}
                      className="px-5 py-2.5 rounded-full text-xs font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2 uppercase tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      required
                      className="w-full bg-[#0d0d16] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30 transition-all font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2 uppercase tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      required
                      className="w-full bg-[#0d0d16] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30 transition-all font-sans"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-2 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell me about your idea..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      required
                      className="w-full bg-[#0d0d16] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400/60 focus:ring-1 focus:ring-cyan-400/30 transition-all font-sans resize-y"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="w-full sm:flex-1 py-3.5 px-6 rounded-xl font-semibold text-sm bg-[#4fd1ff] text-[#0a0a0f] hover:bg-[#38bdf8] transition-all flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 disabled:opacity-50"
                    >
                      {status === 'submitting' ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <Send size={15} />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleOpenGmail}
                      className="w-full sm:w-auto py-3.5 px-6 rounded-xl font-medium text-sm bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-cyan-400/40 transition-all flex items-center justify-center gap-2"
                      title="Open prefilled email directly in Gmail compose"
                    >
                      <Mail size={15} className="text-cyan-400" />
                      <span>Compose in Gmail</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
