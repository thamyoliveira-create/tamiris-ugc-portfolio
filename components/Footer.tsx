'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, Send, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1A0F1C] text-[#FFF5FB] border-t border-[#FB58A7]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo & Bio */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/marca/logotipo-claro.svg"
                alt="Tamiris UGC Logo"
                width={180}
                height={45}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-[#FFF5FB]/80 max-w-sm text-sm sm:text-base leading-relaxed">
              Professora, engenheira e criadora de conteúdo. Falo da vida real, com humor e sem filtro, e das coisas que fazem parte da minha rotina de verdade.
            </p>
            <div className="pt-2">
              <span className="font-mono text-xs bg-[#03E39D]/10 text-[#03E39D] px-3 py-1.5 rounded-full border border-[#03E39D]/30 inline-block">
                ⚡ Disponível para novas parcerias
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#FB58A7]">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-[#03E39D] transition-colors">Início</Link></li>
              <li><Link href="/videos" className="hover:text-[#03E39D] transition-colors">Vídeos</Link></li>
              <li><Link href="/sobre" className="hover:text-[#03E39D] transition-colors">Sobre a Tamiris</Link></li>
              <li><Link href="/como-trabalho" className="hover:text-[#03E39D] transition-colors">Como trabalho</Link></li>
              <li><Link href="/contato" className="hover:text-[#03E39D] transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#FB58A7]">Redes & Contato</h4>
            <div className="flex flex-col space-y-3 text-sm">
              <a
                href="https://wa.me/5516993782499?text=Oi%20Tamiris!%20Vim%20pelo%20seu%20site%20%F0%9F%91%8B"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#03E39D] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#03E39D]" />
                WhatsApp (16) 99378-2499
              </a>
              <a
                href="https://instagram.com/thamiscreator"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#FB58A7] transition-colors"
              >
                {/* Instagram SVG */}
                <svg className="w-4 h-4 text-[#FB58A7] fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                Instagram @thamiscreator
              </a>
              <a
                href="https://www.tiktok.com/@thamiscreator0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#F4B6DF] transition-colors"
              >
                <Send className="w-4 h-4 text-[#F4B6DF]" />
                TikTok @thamiscreator0
              </a>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-[#FFF5FB]/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FFF5FB]/60 gap-4">
          <p>© 2026 Tamiris UGC. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Feito com <Heart className="w-3.5 h-3.5 text-[#FB58A7] fill-current" /> humor e café ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
