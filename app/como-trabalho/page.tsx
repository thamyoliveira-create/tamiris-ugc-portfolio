'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ClipboardList, FileText, Video, Sparkles, ChevronDown, Check, ArrowRight, MessageCircle, Smartphone, Laptop, Tablet, Mic, Lightbulb, Aperture } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function ComoTrabalhoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const steps = [
    {
      number: "01",
      title: "Briefing & Ideação",
      description: "Leio o briefing da sua marca com atenção: produto, objetivo, público, mensagens obrigatórias e o que não pode aparecer. Tudo isso é seguido à risca no vídeo.",
      icon: ClipboardList,
      color: "border-[#03E39D]"
    },
    {
      number: "02",
      title: "Roteiro & Aprovação",
      description: "Escrevo o roteiro seguindo o briefing, mas com o meu jeito de falar, pra não soar como comercial. Você aprova antes de eu gravar.",
      icon: FileText,
      color: "border-[#FB58A7]"
    },
    {
      number: "03",
      title: "Gravação & Edição",
      description: "Gravo na minha casa, no cenário de sempre, e edito com legendas e cortes pra ficar gostoso de assistir.",
      icon: Video,
      color: "border-[#F4B6DF]"
    },
    {
      number: "04",
      title: "Entrega & Ajustes",
      description: "Envio a primeira versão via Google Drive. Fazemos a rodada de ajustes caso precise de alguma alteração e você recebe os arquivos prontos para veicular.",
      icon: Sparkles,
      color: "border-[#03E39D]"
    }
  ];

  const equipment: { icon: React.ElementType; name: string; desc: string; photo?: string }[] = [
    { icon: Smartphone, name: "iPhone 16", desc: "Grava tudo em vertical, com imagem bonita e nítida.", photo: "/equipamento/iphone.jpg" },
    { icon: Mic, name: "Microfone de lapela sem fio", desc: "Kaidi com 2 microfones, pra voz sair limpa e dar pra gravar em dupla.", photo: "/equipamento/microfone.jpg" },
    { icon: Aperture, name: "Tripé com ring light", desc: "Celular firme e rosto bem iluminado.", photo: "/equipamento/tripe.jpg" },
    { icon: Lightbulb, name: "Luz LED portátil", desc: "Encaixa no celular e salva quando a luz natural não colabora.", photo: "/equipamento/luz-led.jpg" },
    { icon: Sparkles, name: "Luminária de efeito colorido", desc: "Dá aquele clima de cor no fundo, tipo pôr do sol ou neon.", photo: "/equipamento/luminaria.jpg" },
    { icon: Laptop, name: "MacBook", desc: "Onde eu edito, organizo e entrego os arquivos.", photo: "/equipamento/macbook.jpg" },
    { icon: Tablet, name: "iPad Pro", desc: "Pra roteiro, teleprompter e edição rápida.", photo: "/equipamento/ipad.jpg" },
  ];

  const packages = [
    {
      name: "Roteiro Autoral",
      price: "R$ 80",
      unit: "por roteiro",
      tag: "Para quem grava em casa",
      desc: "Só o roteiro, pra quem já tem quem grave.",
      features: [
        "2 opções de começo pro vídeo",
        "Indicação de cenas e falas",
        "1 rodada de ajustes"
      ],
      cta: "Quero roteiros",
      highlight: false
    },
    {
      name: "Vídeo UGC Individual",
      price: "R$ 200",
      unit: "por vídeo",
      tag: "Mais pedido 🔥",
      desc: "Do roteiro ao vídeo editado, pronto pra postar.",
      features: [
        "Roteiro seguindo o briefing",
        "Gravação e edição com legendas",
        "Até 2 rodadas de ajustes"
      ],
      cta: "Pedir 1 vídeo",
      highlight: true
    },
    {
      name: "Pacote de Vídeos",
      price: "R$ 500",
      unit: "3 vídeos",
      tag: "Melhor Custo x Benefício",
      desc: "Três vídeos pra marca testar ângulos diferentes.",
      features: [
        "3 vídeos com abordagens diferentes",
        "Bom pra testar o que funciona melhor",
        "Até 2 rodadas de ajustes por vídeo"
      ],
      cta: "Pedir pacote",
      highlight: false
    }
  ];

  const faqs = [
    {
      q: "Qual é o prazo médio de entrega?",
      a: "Após a chegada do produto na minha casa e aprovação do roteiro, a primeira versão do vídeo é entregue em até 5 a 7 dias úteis. Precisa com urgência? Dá para negociar taxa express!"
    },
    {
      q: "Como funcionam os direitos de uso de imagem?",
      a: "Os pacotes padrão já incluem licença de veiculação em anúncios pagos (Dark Posts / Meta Ads / TikTok Ads) por 90 a 180 dias. Se precisar de veiculação perpétua ou em TV/outdoors, alinhamos no orçamento."
    },
    {
      q: "Quantas revisões estão inclusas?",
      a: "Estão inclusas até 2 rodadas de ajustes de edição (cortes, legendas, música, ritmo). Ajustes que exijam refazer a gravação por mudança de briefing pré-aprovado podem ter custo adicional simbólico."
    },
    {
      q: "Você envia o produto de volta?",
      a: "Geralmente os produtos ficam comigo para possíveis novos conteúdos ou são descartados se forem perecíveis. Se a marca precisar de devolução de produtos de alto valor, basta fornecer a etiqueta de retorno dos Correios."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF5FB] text-[#1A0F1C]">
      <Navbar />

      <main className="flex-1">
        {/* HEADER SECTION */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-4">
          <span className="font-mono text-xs text-[#C01A6E] font-bold uppercase tracking-wider bg-[#F4B6DF] px-3 py-1 rounded-full">
            Fluxo Transparente
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-[#1A0F1C] tracking-tight">
            Como funciona a <span className="text-gradient">nossa parceria</span>
          </h1>
          <p className="text-lg text-[#1A0F1C]/80 max-w-2xl mx-auto">
            Tudo combinado com você, etapa por etapa, sem surpresa no final.
          </p>
        </section>

        {/* 4 STEPS SECTION */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className={`bg-[#FFF5FB] p-8 rounded-3xl border-2 ${step.color} shadow-lg flex flex-col justify-between space-y-6 transform hover:-translate-y-2 transition-transform duration-300 relative`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-3xl font-black text-[#FB58A7]">
                        {step.number}
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-[#1A0F1C] text-[#FFF5FB] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#03E39D]" />
                      </div>
                    </div>
                    <h3 className="text-xl font-black text-[#1A0F1C]">{step.title}</h3>
                    <p className="text-sm text-[#1A0F1C]/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* EQUIPAMENTO */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
            <span className="font-mono text-xs text-[#C01A6E] font-bold uppercase tracking-wider bg-[#F4B6DF] px-3 py-1 rounded-full">
              Meu equipamento
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A0F1C]">
              Nada de estúdio, mas tudo <span className="text-gradient">pensado com carinho</span>
            </h2>
            <p className="text-[#1A0F1C]/80">
              Ainda tô começando, então meu setup é simples. Mas é o suficiente pra entregar vídeo bonito, bem iluminado e com som limpo.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {equipment.map((item) => (
              <div key={item.name} className="bg-[#FFF5FB] border-2 border-[#F4B6DF] rounded-2xl overflow-hidden">
                {item.photo && (
                  <div className="relative aspect-square">
                    <Image src={item.photo} alt={item.name} fill sizes="(min-width: 768px) 33vw, 50vw" className="object-cover" />
                  </div>
                )}
                <div className="p-5 flex gap-4 items-start">
                <div className="w-11 h-11 shrink-0 rounded-xl bg-marca flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-[#1A0F1C]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#1A0F1C]">{item.name}</h3>
                  <p className="text-sm text-[#1A0F1C]/70">{item.desc}</p>
                </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES / PACKAGES (Dark Section for visual rhythm) */}
        <section className="py-24 bg-[#1A0F1C] text-[#FFF5FB] mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
              <span className="font-mono text-xs text-[#03E39D] uppercase tracking-wider bg-[#03E39D]/10 px-3 py-1 rounded-full border border-[#03E39D]/30">
                Formatos
              </span>
              <h2 className="text-3xl sm:text-5xl font-black">
                Tipos de <span className="text-[#FB58A7]">Entrega</span>
              </h2>
              <p className="text-[#FFF5FB]/70 text-sm sm:text-base">
                Escolha o formato que faz mais sentido pra sua marca.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {packages.map((pkg, idx) => (
                <div
                  key={idx}
                  className={`rounded-3xl p-8 flex flex-col justify-between space-y-6 relative ${
                    pkg.highlight
                      ? 'bg-[#241528] border-2 border-[#03E39D] shadow-2xl scale-105 z-10'
                      : 'bg-[#1F1221] border border-[#FB58A7]/30 shadow-lg'
                  }`}
                >
                  <div className="space-y-4">
                    <span className="font-mono text-xs text-[#03E39D] font-bold uppercase tracking-wider bg-[#03E39D]/10 px-3 py-1 rounded-full inline-block">
                      {pkg.tag}
                    </span>
                    <h3 className="text-2xl font-black text-[#FFF5FB]">{pkg.name}</h3>
                    <p className="flex items-baseline gap-2">
                      <span className="text-4xl font-black text-[#03E39D]">{pkg.price}</span>
                      <span className="font-mono text-xs text-[#F4B6DF]">{pkg.unit}</span>
                    </p>
                    <p className="text-[#FFF5FB]/80 text-sm leading-relaxed">{pkg.desc}</p>

                    <div className="pt-4 border-t border-[#FFF5FB]/10 space-y-3">
                      {pkg.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-sm text-[#FFF5FB]/90">
                          <Check className="w-4 h-4 text-[#03E39D] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6">
                    <Link
                      href={`/contato?interesse=${encodeURIComponent(pkg.name)}`}
                      className={`w-full py-4 rounded-full font-black text-center flex items-center justify-center gap-2 transition-all ${
                        pkg.highlight
                          ? 'bg-marca text-[#1A0F1C] hover:opacity-95 shadow-xl'
                          : 'bg-[#FFF5FB] text-[#1A0F1C] hover:bg-[#F4B6DF]'
                      }`}
                    >
                      {pkg.cta} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <span className="font-mono text-xs text-[#C01A6E] font-bold uppercase tracking-wider bg-[#F4B6DF] px-3 py-1 rounded-full">
              Tire suas dúvidas
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#1A0F1C]">
              Perguntas <span className="text-gradient">Frequentes</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#FFF5FB] border-2 border-[#F4B6DF] rounded-2xl overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left font-bold text-lg text-[#1A0F1C] flex items-center justify-between gap-4 focus:outline-none hover:text-[#C01A6E]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-[#FB58A7] transition-transform duration-300 shrink-0 ${
                      openFaq === idx ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-[#1A0F1C]/80 text-base leading-relaxed border-t border-[#F4B6DF]/50 pt-4 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Direct CTA */}
          <div className="mt-16 text-center">
            <p className="text-sm font-mono text-[#00795A] mb-4">Ainda ficou com alguma dúvida específica?</p>
            <a
              href="https://wa.me/5516993782499?text=Oi%20Tamiris!%20Fiquei%20com%20uma%20dúvida%20sobre%20os%20vídeos%20UGC..."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#03E39D] text-[#1A0F1C] font-extrabold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              Tirar dúvida direto no WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
