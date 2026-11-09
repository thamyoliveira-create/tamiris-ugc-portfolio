'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Vídeos', href: '/videos' },
    { name: 'Sobre', href: '/sobre' },
    { name: 'Como trabalho', href: '/como-trabalho' },
    { name: 'Contato', href: '/contato' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FFF5FB]/90 backdrop-blur-md border-b border-[#F4B6DF]/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 focus:outline-none">
          <Image
            src="/marca/logotipo-escuro.svg"
            alt="Tamiris UGC Logo"
            width={180}
            height={45}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-semibold text-sm transition-colors hover:text-[#FB58A7] ${
                  isActive ? 'text-[#C01A6E] border-b-2 border-[#FB58A7] pb-1' : 'text-[#1A0F1C]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contato"
            className="bg-marca text-[#1A0F1C] font-extrabold px-6 py-3 rounded-full shadow-md hover:opacity-95 transition-all transform hover:scale-105 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Bora conversar
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#1A0F1C] p-2 rounded-lg hover:bg-[#F4B6DF]/30 focus:outline-none"
          aria-label="Menu"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#FFF5FB] border-b border-[#F4B6DF] px-6 pt-4 pb-6 space-y-4 shadow-lg">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block text-lg font-bold py-2 ${
                  isActive ? 'text-[#C01A6E] pl-2 border-l-4 border-[#FB58A7]' : 'text-[#1A0F1C]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="pt-2">
            <Link
              href="/contato"
              onClick={() => setIsOpen(false)}
              className="w-full bg-marca text-[#1A0F1C] font-extrabold py-3 rounded-full text-center flex items-center justify-center gap-2 shadow-md"
            >
              <MessageCircle className="w-5 h-5" />
              Bora conversar
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
