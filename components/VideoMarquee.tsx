'use client';

import Image from 'next/image';
import { Play } from 'lucide-react';
import { VideoItem } from '@/data/videos';

interface Props {
  videos: VideoItem[];
  onSelect: (v: VideoItem) => void;
}

export default function VideoMarquee({ videos, onSelect }: Props) {
  // duplica a lista para o carrossel rodar sem emenda
  const loop = [...videos, ...videos];

  return (
    <div className="marquee-mask overflow-hidden py-4">
      <div className="marquee-track flex gap-6 w-max">
        {loop.map((video, i) => (
          <button
            key={`${video.id}-${i}`}
            onClick={() => onSelect(video)}
            aria-hidden={i >= videos.length}
            tabIndex={i >= videos.length ? -1 : 0}
            className="group relative w-[240px] h-[426px] shrink-0 rounded-2xl overflow-hidden shadow-xl border-2 border-[#03E39D] bg-[#1A0F1C] text-left"
          >
            <Image
              src={video.thumbnailUrl}
              alt={video.title}
              fill
              sizes="240px"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F1C]/90 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-14 h-14 rounded-full bg-marca flex items-center justify-center shadow-xl">
                <Play className="w-7 h-7 text-[#1A0F1C] fill-current ml-1" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 space-y-1">
              <span className="font-mono text-xs text-[#03E39D] font-semibold">{video.brand}</span>
              <p className="text-sm font-bold text-[#FFF5FB] leading-snug">{video.title}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
