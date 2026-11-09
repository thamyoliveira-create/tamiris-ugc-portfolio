'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Play, Sparkles, MessageCircle, ArrowRight, CheckCircle2, Flame } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import VideoModal from '@/components/VideoModal';
import VideoMarquee from '@/components/VideoMarquee';
import { VIDEOS, BRANDS, VideoItem } from '@/data/videos';

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF5FB] text-[#1A0F1C]">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32 bg-[#FFF5FB] border-b border-[#F4B6DF]/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-[#F4B6DF]/50 px-4 py-2 rounded-full border border-[#FB58A7]/30">
                  <Flame className="w-4 h-4 text-[#C01A6E]" />
                  <span className="font-mono text-xs font-bold text-[#C01A6E] tracking-wide uppercase">
                    Vida real, do jeitinho que é
                  </span>
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-[#1A0F1C]">
                  Conteúdo de <span className="text-gradient">gente de verdade</span>, pra gente de verdade.
                </h1>

                <p className="text-lg sm:text-xl text-[#1A0F1C]/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                  Oi, eu sou a Tamiris! Professora, engenheira, cabelo azul e uma rotina corrida igual à sua. Gravo no meu quarto, do meu jeito, mostrando como as coisas que eu uso entram no meu dia a dia. Sem cara de comercial.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                  <Link
                    href="/videos"
                    className="w-full sm:w-auto bg-marca text-[#1A0F1C] font-extrabold px-8 py-4 rounded-full shadow-lg hover:opacity-95 transition-all transform hover:scale-105 flex items-center justify-center gap-2 text-base"
                  >
                    <Play className="w-5 h-5 fill-current" />
                    Ver vídeos
                  </Link>
                  <Link
                    href="/contato"
                    className="w-full sm:w-auto border-2 border-[#1A0F1C] text-[#1A0F1C] font-extrabold px-8 py-4 rounded-full hover:bg-[#1A0F1C] hover:text-[#FFF5FB] transition-all flex items-center justify-center gap-2 text-base"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Bora conversar
                  </Link>
                </div>

                <div className="pt-6 flex items-center justify-center lg:justify-start gap-6 text-xs font-mono text-[#00795A]">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#03E39D]" /> Marcas como Sleep Cycle e Fluencify</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#03E39D]" /> Sigo o briefing da sua marca, do meu jeito</span>
                </div>
              </div>

              {/* Hero Animated Svg / Visual */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-72 h-72 sm:w-96 sm:h-96 bg-marca rounded-3xl p-3 shadow-2xl flex items-center justify-center rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="w-full h-full rounded-2xl relative overflow-hidden">
                    <Image
                      src="/fotos/tamiris-1.jpg"
                      alt="Tamiris, criadora de conteúdo UGC"
                      fill
                      priority
                      className="object-cover"
                    />
                  </div>
                                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BRANDS TICKER / SECTION */}
        <section className="bg-[#1A0F1C] text-[#FFF5FB] py-12 border-y border-[#FB58A7]/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <p className="font-mono text-xs uppercase tracking-widest text-[#FB58A7]">
              Marcas com quem já trabalhei
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-16 opacity-90">
              {BRANDS.map((b, i) => (
                <div key={i} className="flex items-center gap-3 text-xl sm:text-2xl font-black tracking-tight text-[#FFF5FB] hover:text-[#03E39D] transition-colors">
                  {b.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={b.logo} alt={`Logo ${b.name}`} width={44} height={44} className="h-11 w-11 rounded-xl object-contain bg-white p-1" />
                  ) : (
                    <span className="h-11 w-11 rounded-xl bg-marca text-[#1A0F1C] flex items-center justify-center text-lg">{b.name[0]}</span>
                  )}
                  {b.name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED VIDEOS SECTION */}
        <section className="py-20">
          <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="font-mono text-xs text-[#C01A6E] font-bold uppercase tracking-wider bg-[#F4B6DF] px-3 py-1 rounded-full">
                Meus vídeos
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#1A0F1C] mt-3">
                Um pouco do <span className="text-gradient">meu dia a dia</span>
              </h2>
            </div>
            <Link
              href="/videos"
              className="mt-4 md:mt-0 font-extrabold text-[#C01A6E] hover:text-[#1A0F1C] flex items-center gap-2 transition-colors group"
            >
              Ver todos os vídeos <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          </div>
          <VideoMarquee videos={VIDEOS} onSelect={setSelectedVideo} />
        </section>

        {/* CTA FINAL SECTION */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
          <div className="bg-marca p-10 sm:p-16 rounded-3xl shadow-2xl relative overflow-hidden space-y-6">
            <div className="absolute -top-12 -left-12 w-40 h-40 bg-white/20 rounded-full blur-2xl" />
            <h2 className="text-3xl sm:text-5xl font-black text-[#1A0F1C] tracking-tight">
              Seu produto combina com a minha rotina?
            </h2>
            <p className="text-lg text-[#1A0F1C]/90 max-w-2xl mx-auto font-medium">
              Me conta sobre a sua marca. Se fizer sentido pra mim, vai fazer sentido pra quem me assiste. A conversa é direto pelo WhatsApp.
            </p>
            <div className="pt-4">
              <Link
                href="/contato"
                className="inline-flex items-center gap-3 bg-[#1A0F1C] text-[#FFF5FB] font-extrabold px-10 py-5 rounded-full shadow-2xl hover:bg-[#241528] transition-all transform hover:scale-105 text-lg"
              >
                <MessageCircle className="w-6 h-6 text-[#03E39D]" />
                Me chama no WhatsApp
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />

      {/* Video Modal */}
      <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </div>
  );
}
