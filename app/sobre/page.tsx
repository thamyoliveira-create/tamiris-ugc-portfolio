import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, Sparkles, Heart, Coffee, Laugh, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { FUN_FACTS } from '@/data/videos';

export const metadata = {
  title: "Sobre a Tamiris | Humor & Vida Real UGC",
  description: "Conheça a Tamiris: professora, engenheira e criadora de conteúdo sobre a vida real.",
};

export default function SobrePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF5FB] text-[#1A0F1C]">
      <Navbar />

      <main className="flex-1">
        {/* HERO / BIO SECTION */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Foto Tamiris */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-80 h-[460px] sm:w-96 sm:h-[520px] rounded-3xl overflow-hidden p-3 bg-marca shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#1A0F1C]">
                  <Image
                    src="/fotos/tamiris-2.jpg"
                    alt="Tamiris UGC Creator"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-[#1A0F1C]/80 backdrop-blur-md p-4 rounded-xl border border-[#03E39D]">
                    <p className="text-[#03E39D] font-mono text-xs font-bold uppercase">Criadora Autoral</p>
                    <p className="text-[#FFF5FB] font-bold text-sm">Pronta para transformar seu produto em conversa de bar</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Texto de apresentação */}
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs text-[#C01A6E] font-bold uppercase tracking-wider bg-[#F4B6DF] px-3 py-1 rounded-full">
                Quem sou eu
              </span>
              <h1 className="text-4xl sm:text-6xl font-black text-[#1A0F1C] tracking-tight leading-tight">
                Oi, sou a Tamiris! <br />
                Faço vídeos que as pessoas <span className="text-gradient">realmente assistem</span> até o fim.
              </h1>

              <div className="space-y-4 text-base sm:text-lg text-[#1A0F1C]/85 leading-relaxed font-normal">
                <p>
                  Sou a Tamiris. De dia, professora. No resto do tempo, tentando dormir melhor, me organizar e não esquecer a garrafinha de água em casa. Meus vídeos são isso: a minha vida como ela é.
                </p>
                <p>
                  Comecei gravando por diversão, falando dos perrengues que todo mundo passa. Aí percebi que as pessoas se viam nos meus vídeos, e é esse o ponto: quem me assiste confia porque se reconhece.
                </p>
                <p>
                  Só falo de produto que eu usaria de verdade. E quando fecho uma parceria, sigo o briefing da marca direitinho, só que contando do meu jeito, pra continuar soando natural.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/contato"
                  className="bg-marca text-[#1A0F1C] font-extrabold px-8 py-4 rounded-full shadow-lg hover:opacity-95 transition-all transform hover:scale-105 flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Bora criar juntas?
                </Link>
                <Link
                  href="/videos"
                  className="border-2 border-[#1A0F1C] text-[#1A0F1C] font-extrabold px-8 py-4 rounded-full hover:bg-[#1A0F1C] hover:text-[#FFF5FB] transition-all"
                >
                  Ver meus vídeos
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* RANDOM FUN FACTS SECTION (Dark Plum Background for contrast) */}
        <section className="py-24 bg-[#1A0F1C] text-[#FFF5FB] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
              <span className="font-mono text-xs text-[#03E39D] uppercase tracking-wider bg-[#03E39D]/10 px-3 py-1 rounded-full border border-[#03E39D]/30">
                Vida Real
              </span>
              <h2 className="text-3xl sm:text-5xl font-black">
                Fatos 100% Aleatórios <span className="text-[#FB58A7]">sobre mim</span>
              </h2>
              <p className="text-[#FFF5FB]/70 text-sm sm:text-base">
                Para você me conhecer além dos 60 segundos de tela.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {FUN_FACTS.map((fact, index) => (
                <div
                  key={index}
                  className={`${fact.color} p-8 rounded-3xl shadow-xl flex flex-col justify-between space-y-4 transform hover:-translate-y-2 transition-all duration-300`}
                >
                  <h3 className="text-xl font-black">{fact.title}</h3>
                  <p className="text-sm font-semibold opacity-90 leading-relaxed">
                    {fact.text}
                  </p>
                  <div className="pt-2 flex justify-end opacity-50">
                    <Sparkles className="w-6 h-6" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STYLE & VALUES */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs text-[#C01A6E] font-bold uppercase tracking-wider bg-[#F4B6DF] px-3 py-1 rounded-full">
              Meu Estilo
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#1A0F1C] mt-3">
              Os 3 pilares do meu <span className="text-gradient">conteúdo UGC</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FFF5FB] p-8 rounded-3xl border-2 border-[#F4B6DF] shadow-md space-y-4 hover:border-[#FB58A7] transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-[#03E39D] flex items-center justify-center text-[#1A0F1C]">
                <Laugh className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-[#1A0F1C]">1. Humor Identificável</h3>
              <p className="text-[#1A0F1C]/80 leading-relaxed text-sm">
                Nada de piada forçada ou texto robótico. O humor vem das pequenas frustrações diárias que todo mundo passa e adora rir junto.
              </p>
            </div>

            <div className="bg-[#FFF5FB] p-8 rounded-3xl border-2 border-[#F4B6DF] shadow-md space-y-4 hover:border-[#FB58A7] transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-[#FB58A7] flex items-center justify-center text-[#1A0F1C]">
                <Heart className="w-7 h-7 fill-current" />
              </div>
              <h3 className="text-2xl font-black text-[#1A0F1C]">2. Conexão Genuína</h3>
              <p className="text-[#1A0F1C]/80 leading-relaxed text-sm">
                A gravação é próxima, dinâmica e em cenários reais da casa, gerando a sensação de conselho sincero de melhor amiga.
              </p>
            </div>

            <div className="bg-[#FFF5FB] p-8 rounded-3xl border-2 border-[#F4B6DF] shadow-md space-y-4 hover:border-[#FB58A7] transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-[#F4B6DF] flex items-center justify-center text-[#1A0F1C]">
                <Sparkles className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-black text-[#1A0F1C]">3. Foco em Conversão</h3>
              <p className="text-[#1A0F1C]/80 leading-relaxed text-sm">
                Falo do jeito que falo com as minhas amigas. Se eu indico, é porque indicaria pra elas também.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
