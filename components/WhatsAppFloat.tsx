import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  const whatsappUrl = "https://wa.me/5516993782499?text=Oi%20Tamiris!%20Vim%20pelo%20seu%20site%20e%20quero%20conversar%20sobre%20um%20projeto%20%F0%9F%91%8B";

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale comigo no WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[#03E39D] text-[#1A0F1C] p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center border-2 border-[#FFF5FB] group"
    >
      <MessageCircle className="w-7 h-7 fill-current" />
      <span className="absolute right-full mr-3 bg-[#1A0F1C] text-[#FFF5FB] px-3 py-1.5 rounded-xl text-xs font-bold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Bora trocar ideia no WhatsApp! 💬
      </span>
    </a>
  );
}
