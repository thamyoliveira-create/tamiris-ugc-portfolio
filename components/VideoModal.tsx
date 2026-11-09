'use client';

import React from 'react';
import { X, Play, Tag, Sparkles } from 'lucide-react';
import { VideoItem } from '@/data/videos';

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
}

export default function VideoModal({ video, onClose }: VideoModalProps) {
  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#1A0F1C]/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#FFF5FB] rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl border-4 border-[#FB58A7] relative flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-[#1A0F1C] text-[#FFF5FB] p-2 rounded-full hover:bg-[#FB58A7] transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Left: Vertical Video player simulation / Video */}
        <div className="w-full md:w-1/2 bg-[#1A0F1C] flex items-center justify-center p-6 relative min-h-[450px]">
          <div className="relative w-[240px] h-[426px] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#03E39D]">
            <video
              src={video.videoUrl}
              poster={video.thumbnailUrl}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right: Info */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs bg-[#03E39D]/20 text-[#00795A] px-3 py-1 rounded-full font-bold uppercase tracking-wider flex items-center gap-1">
                <Tag className="w-3 h-3" /> {video.category}
              </span>
              <span className="font-mono text-xs text-[#C01A6E] font-semibold bg-[#F4B6DF]/50 px-3 py-1 rounded-full">
                {video.brand}
              </span>
            </div>

            <h3 className="text-2xl font-black text-[#1A0F1C] leading-tight">
              {video.title}
            </h3>

            <p className="text-[#1A0F1C]/80 text-base leading-relaxed">
              {video.description}
            </p>

            <div className="bg-[#F4B6DF]/30 p-4 rounded-2xl border border-[#FB58A7]/30 flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-[#C01A6E] shrink-0" />
              <p className="text-xs text-[#00795A] font-medium">
                Vídeo UGC em formato 9:16 otimizado para Reels, TikTok e Shorts com foco total em conversão e engajamento.
              </p>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-[#F4B6DF] flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/5516993782499?text=Oi%20Tamiris!%20Vi%20o%20vídeo%20"${encodeURIComponent(video.title)}"%20para%20a%20marca%20${encodeURIComponent(video.brand)}%20e%20quero%20um%20parecido!`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-marca text-[#1A0F1C] font-extrabold py-3.5 px-6 rounded-2xl text-center shadow-lg hover:opacity-95 transition-all flex items-center justify-center gap-2 text-sm"
            >
              Quero um vídeo assim
            </a>
            <button
              onClick={onClose}
              className="px-6 py-3.5 rounded-2xl border-2 border-[#1A0F1C] font-bold text-[#1A0F1C] hover:bg-[#1A0F1C] hover:text-[#FFF5FB] transition-all text-sm"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
