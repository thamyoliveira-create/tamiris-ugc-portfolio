'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Play, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import VideoModal from '@/components/VideoModal';
import { VIDEOS, VideoItem } from '@/data/videos';

export default function VideosPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const categories = ['Todos', 'Humor', 'Review', 'Unboxing', 'Tutorial'];

  const filteredVideos = selectedCategory === 'Todos'
    ? VIDEOS
    : VIDEOS.filter(v => v.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF5FB] text-[#1A0F1C]">
      <Navbar />

      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="font-mono text-xs text-[#C01A6E] font-bold uppercase tracking-wider bg-[#F4B6DF] px-3 py-1 rounded-full">
            Portfólio Completo
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-[#1A0F1C] tracking-tight">
            Galeria de <span className="text-gradient">Vídeos UGC</span>
          </h1>
          <p className="text-lg text-[#1A0F1C]/80 font-normal">
            Explore todos os formatos verticais focados em conversão, humor e identificação real com o consumidor.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-marca text-[#1A0F1C] shadow-lg transform scale-105'
                  : 'bg-[#F4B6DF]/30 text-[#1A0F1C] hover:bg-[#F4B6DF]/60 border border-[#FB58A7]/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="group bg-[#FFF5FB] rounded-3xl overflow-hidden shadow-lg border-2 border-[#F4B6DF] hover:border-[#FB58A7] transition-all duration-300 cursor-pointer flex flex-col transform hover:-translate-y-2"
            >
              {/* Thumbnail 9:16 */}
              <div className="relative aspect-[9/16] bg-[#1A0F1C] overflow-hidden">
                <Image
                  src={video.thumbnailUrl}
                  alt={video.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F1C]/80 via-transparent to-transparent flex items-end p-6">
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-xs bg-[#03E39D] text-[#1A0F1C] px-3 py-1 rounded-full font-bold uppercase shadow-md">
                      {video.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[#1A0F1C]/40">
                    <div className="w-16 h-16 rounded-full bg-marca flex items-center justify-center shadow-xl">
                      <Play className="w-8 h-8 text-[#1A0F1C] fill-current ml-1" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="font-mono text-xs text-[#C01A6E] font-semibold">{video.brand}</span>
                  <h3 className="text-xl font-bold text-[#1A0F1C] group-hover:text-[#C01A6E] transition-colors leading-snug">
                    {video.title}
                  </h3>
                  <p className="text-sm text-[#1A0F1C]/70 line-clamp-2">
                    {video.description}
                  </p>
                </div>
                <div className="flex items-center justify-between text-xs font-mono text-[#1A0F1C]/60 pt-4 border-t border-[#F4B6DF]">
                  <span>{video.views}</span>
                  <span className="text-[#00795A] font-bold flex items-center gap-1">Assistir <ArrowRight className="w-3.5 h-3.5" /></span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl font-bold text-[#1A0F1C]/60">Nenhum vídeo encontrado nesta categoria.</p>
          </div>
        )}
      </main>

      <Footer />
      <WhatsAppFloat />

      {/* Video Modal */}
      <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </div>
  );
}
