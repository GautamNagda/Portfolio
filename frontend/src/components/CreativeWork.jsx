import React, { useState } from 'react';
import { Film, Play, Eye, Sparkles, X, Video } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CreativeWork() {
  const { creativeWork } = portfolioData;
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <section id="creative-work" className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Eyebrow Badge */}
        <div className="text-center mb-4 reveal-on-scroll">
          <div className="mono-badge">
            <Film size={12} />
            <span>{creativeWork.badge}</span>
          </div>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white text-center mb-4 max-w-3xl mx-auto leading-tight reveal-on-scroll delay-100">
          {creativeWork.heading}
        </h2>
        <p className="text-center text-slate-300/80 text-sm sm:text-base max-w-2xl mx-auto mb-16 font-normal reveal-on-scroll delay-150">
          {creativeWork.subtitle}
        </p>

        {/* 3 Reel Cards Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {creativeWork.items.map((item, idx) => (
            <div
              key={idx}
              onClick={() => {
                if (item.videoUrl) {
                  window.open(item.videoUrl, '_blank', 'noopener,noreferrer');
                } else {
                  setSelectedVideo(item);
                }
              }}
              className={`group cursor-pointer relative rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-300 bg-[#101018] flex flex-col justify-end aspect-[9/14] sm:aspect-[9/13] reveal-on-scroll delay-${(idx + 1) * 150} hover-elevate`}
            >
              {/* Background Artful Scene Simulation matching the screenshot stadium & night sky */}
              <div className="absolute inset-0 z-0">
                {idx === 0 && (
                  <div className="w-full h-full bg-gradient-to-b from-[#251029] via-[#10162f] to-[#08080f] flex flex-col justify-between">
                    {/* Sunset Dusk Sky */}
                    <div className="h-1/2 w-full bg-gradient-to-b from-purple-900/40 via-pink-900/20 to-transparent" />
                    {/* Stadium Silhouette & Floodlights */}
                    <div className="relative h-1/2 w-full flex items-end">
                      <div className="absolute inset-x-0 bottom-0 h-28 bg-[#080a12] border-t border-cyan-500/20">
                        {/* Floodlights glow */}
                        <div className="flex justify-around items-start pt-1 px-4">
                          <span className="w-3 h-2 bg-yellow-100 rounded-full shadow-[0_0_15px_#fef08a]" />
                          <span className="w-3 h-2 bg-yellow-100 rounded-full shadow-[0_0_15px_#fef08a]" />
                          <span className="w-3 h-2 bg-yellow-100 rounded-full shadow-[0_0_15px_#fef08a]" />
                          <span className="w-3 h-2 bg-yellow-100 rounded-full shadow-[0_0_15px_#fef08a]" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {idx === 1 && (
                  <div className="w-full h-full bg-gradient-to-b from-[#0f1b33] via-[#091124] to-[#060810]">
                    <div className="h-1/2 w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-700/30 via-indigo-900/10 to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(#4fd1ff_0.8px,transparent_0.8px)] [background-size:24px_24px] opacity-15" />
                  </div>
                )}

                {idx === 2 && (
                  <div className="w-full h-full bg-gradient-to-b from-[#18181f] via-[#0f121a] to-[#07080d]">
                    {/* Night street vehicle headlight atmosphere */}
                    <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-24 h-24 bg-amber-400/20 rounded-full blur-2xl" />
                    <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-cyan-400/15 rounded-full blur-xl" />
                  </div>
                )}

                {/* Subtle dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent" />
              </div>

              {/* Play Button Center Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                {item.videoUrl ? (
                  <a
                    href={item.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                    className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#4fd1ff] group-hover:text-black group-hover:border-[#4fd1ff] transition-all duration-300 shadow-xl"
                    title="Watch Reel on Instagram"
                    aria-label={`Watch ${item.title} on Instagram`}
                  >
                    <Play size={20} className="ml-1 fill-current" />
                  </a>
                ) : (
                  <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-[#4fd1ff] group-hover:text-black group-hover:border-[#4fd1ff] transition-all duration-300 shadow-xl">
                    <Play size={20} className="ml-1 fill-current" />
                  </div>
                )}
              </div>

              {/* Top View Count Chip */}
              <div className="absolute top-4 right-4 z-10">
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-black/60 backdrop-blur-md border border-white/10 text-cyan-300">
                  <Eye size={12} />
                  {item.views}
                </span>
              </div>

              {/* Bottom Details Info */}
              <div className="relative z-10 p-5 sm:p-6">
                <span className="text-xs font-mono uppercase text-cyan-400 tracking-wider block mb-1">
                  {item.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300/80 line-clamp-2 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Reach Impact Callout Banner */}
        <div className="mt-12 glass-card p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-cyan-500/20 reveal-on-scroll delay-200 hover-elevate">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-400">
              <Sparkles size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white tracking-tight">1,000,000+ Cross-Platform Organic Reach</h4>
              <p className="text-xs sm:text-sm text-slate-400">Content production, timing, color grading and audience engagement.</p>
            </div>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-full text-xs font-semibold bg-white/5 hover:bg-white/10 border border-white/15 text-white transition-all whitespace-nowrap"
          >
            Explore Reels &amp; Edits
          </a>
        </div>

      </div>

      {/* Video Lightbox Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative max-w-lg w-full bg-[#12121e] border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-6">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-white/5 text-slate-400 hover:text-white"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <Video className="text-cyan-400" size={18} />
              <span className="font-mono text-xs uppercase text-cyan-400">{selectedVideo.category}</span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">{selectedVideo.title}</h3>
            <p className="text-slate-300 text-sm mb-6">{selectedVideo.description}</p>

            {selectedVideo.videoUrl ? (
              <a
                href={selectedVideo.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-[9/12] w-full rounded-xl bg-black/80 border border-cyan-500/30 hover:border-cyan-400 flex flex-col items-center justify-center p-6 text-center transition-all group/box"
              >
                <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 mb-3 group-hover/box:scale-110 group-hover/box:bg-[#4fd1ff] group-hover/box:text-[#0a0a0f] transition-all">
                  <Play size={32} className="ml-1 fill-current" />
                </div>
                <p className="text-white font-medium text-sm mb-1 group-hover/box:text-cyan-300 transition-colors">Watch Reel on Instagram</p>
                <p className="text-xs text-slate-400 max-w-xs">
                  {selectedVideo.views} views • Click to open in Instagram
                </p>
              </a>
            ) : (
              <div className="aspect-[9/12] w-full rounded-xl bg-black/80 border border-white/5 flex flex-col items-center justify-center p-6 text-center">
                <Play size={40} className="text-cyan-400 mb-3 animate-pulse" />
                <p className="text-white font-medium text-sm mb-1">Interactive Video Showcase</p>
                <p className="text-xs text-slate-400 max-w-xs">
                  Generated with Premiere Pro, Filmora &amp; CapCut workflows. {selectedVideo.views} views achieved organically.
                </p>
              </div>
            )}

            <div className="mt-6 flex justify-end gap-3">
              {selectedVideo.videoUrl && (
                <a
                  href={selectedVideo.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full text-xs font-semibold bg-[#4fd1ff] text-[#0a0a0f] hover:bg-[#38bdf8] transition-all flex items-center gap-1.5 shadow-md shadow-cyan-500/20"
                >
                  <Play size={12} className="fill-current" />
                  Watch on Instagram
                </a>
              )}
              <button
                onClick={() => setSelectedVideo(null)}
                className="px-5 py-2 rounded-full text-xs font-semibold bg-white/10 text-white hover:bg-white/20 transition-all"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
