'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { ClipboardList, FileText, Video, Sparkles, ChevronDown, Check, ArrowRight, MessageCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function ComoTrabalhoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const steps = [
    {
      number: "01",
      title: "Briefing & Ideação",
      description: "Entendo seu produto, objetivos da campanha, público-alvo e os principais pontos de dor. Aqui alinhamos as ideias malucas e o direcionamento cômico.",
      icon: ClipboardList,
      color: "border-[#03E39D]"
    },
    {
      number: "02",
      title: "Roteiro & Aprovação",
      description: "Escrevo o roteiro completo com ganchos (hooks) potentes, desenvolvimento de humor da vida real e chamada para ação (CTA). Você valida antes de eu ligar a câmera.",
      icon: FileText,
      color: "border-[#FB58A7]"
    },
    {
      number: "03",
      title: "Gravação & Edição",
      description: "Gravação em alta definição (4K/60fps vertical), áudio impecável, cortes dinâmicos, legendas automáticas chamativas e sonoplastia que segura a atenção.",
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

  const packages = [
    {
      name: "Roteiro Autoral",
      tag: "Para quem grava em casa",
      desc: "Roteiro completo de vídeo curto (Reels/TikTok) com ganchos, cenas, falas e referências de atuação.",
      features: [
        "2 opções de ganchos (hooks)",
        "Direcionamento de atuação cômica",
        "Sugestão de trilha e sonoplastia",
        "1 rodada de ajustes"
      ],
      cta: "Quero roteiros",
      highlight: false
    },
    {
      name: "Vídeo UGC Individual",
      tag: "Mais pedido 🔥",
      desc: "Produção completa: do roteiro à entrega do vídeo editado pronto para rodar como anúncio ou post orgânico.",
      features: [
        "Roteiro exclusivo e autoral",
        "Gravação em alta qualidade 9:16",
        "Edição dinâmica com legendas",
        "Direitos de uso inclusos",
        "Até 2 rodadas de ajustes"
      ],
      cta: "Pedir 1 vídeo",
      highlight: true
    },
    {
      name: "Pacote de Vídeos",
      tag: "Melhor Custo x Benefício",
      desc: "Combo de 3 a 5 vídeos para testes A/B de criativos, com diferentes ganchos e ângulos de abordagem.",
      features: [
        "Variação de hooks para teste",
        "Cronograma quinzenal ou mensal",
        "Desconto progressivo por volume",
        "Prioridade na fila de gravação",
        "Relatório de impressões e dicas"
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
            Processo ágil, sem enrolação e com cada etapa validada com você para garantir vídeos que geram conversão de verdade.
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
                Escolha o formato que melhor atende a estratégia de tráfego ou orgânico da sua marca.
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
