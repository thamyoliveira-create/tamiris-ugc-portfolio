'use client';
import React, { useState } from 'react';
import { Send, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    brand: '',
    contentTypes: [] as string[],
    budget: '',
    deadline: '',
    message: '',
  });

  const [error, setError] = useState('');

  const handleCheckboxChange = (type: string) => {
    if (formData.contentTypes.includes(type)) {
      setFormData({
        ...formData,
        contentTypes: formData.contentTypes.filter((t) => t !== type),
      });
    } else {
      setFormData({
        ...formData,
        contentTypes: [...formData.contentTypes, type],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validação dos campos obrigatórios
    if (!formData.name || !formData.email || !formData.brand || formData.contentTypes.length === 0) {
      setError('Por favor, preencha os campos obrigatórios: Nome, E-mail, Marca e selecione pelo menos um Tipo de Conteúdo.');
      return;
    }

    setError('');

    const contentStr = formData.contentTypes.join(', ');
    const whatsappMessage = `Oi Tamiris! Vim pelo seu site 👋
Nome: ${formData.name}
E-mail: ${formData.email}
Marca: ${formData.brand}
Conteúdo: ${contentStr}
Orçamento: R$ ${formData.budget || 'Não informado'}
Prazo: ${formData.deadline || 'Não informado'}
Mensagem: ${formData.message || 'Nenhuma mensagem adicional'}`;

    const encoded = encodeURIComponent(whatsappMessage);
    const url = `https://wa.me/5516993782499?text=${encoded}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF5FB] text-[#1A0F1C]">
      <Navbar />

      <main className="flex-1 py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <span className="font-mono text-xs text-[#C01A6E] font-bold uppercase tracking-wider bg-[#F4B6DF] px-3 py-1 rounded-full">
            VAMOS CONVERSAR?
          </span>
          <h1 className="text-4xl sm:text-6xl font-black text-[#1A0F1C] tracking-tight">
            Bora fazer <span className="text-gradient">história?</span>
          </h1>
          <p className="text-lg text-[#1A0F1C]/80 max-w-xl mx-auto">
            Conta pra mim sobre sua marca, seu produto e aquela ideia meio maluca. Eu respondo rapidinho, prometo não deixar no vácuo 😉
          </p>
        </div>

        {/* Card Menta com Formulário */}
        <div className="bg-[#03E39D]/15 border-2 border-[#03E39D] rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#03E39D]/30 rounded-full blur-3xl pointer-events-none" />

          {error && (
            <div className="mb-8 bg-[#C01A6E] text-[#FFF5FB] p-4 rounded-2xl text-sm font-semibold shadow-md animate-shake">
              ⚠️ {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Nome */}
              <div>
                <label className="block font-mono text-xs font-bold text-[#00795A] uppercase mb-2">
                  Seu Nome *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Mariana Silva"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#FFF5FB] border-2 border-[#00795A]/30 rounded-2xl px-4 py-3.5 text-[#1A0F1C] font-medium focus:outline-none focus:border-[#00795A]"
                />
              </div>

              {/* E-mail */}
              <div>
                <label className="block font-mono text-xs font-bold text-[#00795A] uppercase mb-2">
                  Seu E-mail *
                </label>
                <input
                  type="email"
                  required
                  placeholder="mariana@suamarca.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#FFF5FB] border-2 border-[#00795A]/30 rounded-2xl px-4 py-3.5 text-[#1A0F1C] font-medium focus:outline-none focus:border-[#00795A]"
                />
              </div>
            </div>

            {/* Nome da Marca */}
            <div>
              <label className="block font-mono text-xs font-bold text-[#00795A] uppercase mb-2">
                Nome da Marca / Empresa *
              </label>
              <input
                type="text"
                required
                placeholder="Ex: Sua Marca Cosméticos"
                value={formData.brand}
                onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                className="w-full bg-[#FFF5FB] border-2 border-[#00795A]/30 rounded-2xl px-4 py-3.5 text-[#1A0F1C] font-medium focus:outline-none focus:border-[#00795A]"
              />
            </div>

            {/* Tipo de conteúdo desejado (Checkboxes) */}
            <div>
              <label className="block font-mono text-xs font-bold text-[#00795A] uppercase mb-3">
                Tipo de Conteúdo Desejado (Selecione pelo menos um) *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {['Vídeo UGC', 'Roteiro', 'Pacote de Vídeos'].map((type) => {
                  const isChecked = formData.contentTypes.includes(type);
                  return (
                    <div
                      key={type}
                      onClick={() => handleCheckboxChange(type)}
                      className={`cursor-pointer p-4 rounded-2xl border-2 transition-all flex items-center justify-between ${
                        isChecked
                          ? 'bg-[#03E39D] border-[#00795A] text-[#1A0F1C] font-bold shadow-md'
                          : 'bg-[#FFF5FB] border-[#00795A]/30 text-[#1A0F1C]/80 hover:border-[#00795A]'
                      }`}
                    >
                      <span className="text-sm font-semibold">{type}</span>
                      <div className={`w-5 h-5 rounded-md border flex items-center justify-center ${isChecked ? 'bg-[#1A0F1C] border-[#1A0F1C] text-[#03E39D]' : 'border-[#00795A]/50'}`}>
                        {isChecked && <CheckCircle2 className="w-4 h-4 fill-current" />}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Orçamento estimado */}
              <div>
                <label className="block font-mono text-xs font-bold text-[#00795A] uppercase mb-2">
                  Orçamento Estimado (R$)
                </label>
                <input
                  type="text"
                  placeholder="Ex: 1.500 ou A combinar"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-[#FFF5FB] border-2 border-[#00795A]/30 rounded-2xl px-4 py-3.5 text-[#1A0F1C] font-medium focus:outline-none focus:border-[#00795A]"
                />
              </div>

              {/* Prazo desejado */}
              <div>
                <label className="block font-mono text-xs font-bold text-[#00795A] uppercase mb-2">
                  Prazo Desejado para Entrega
                </label>
                <input
                  type="text"
                  placeholder="Ex: Até o final do mês"
                  value={formData.deadline}
                  onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                  className="w-full bg-[#FFF5FB] border-2 border-[#00795A]/30 rounded-2xl px-4 py-3.5 text-[#1A0F1C] font-medium focus:outline-none focus:border-[#00795A]"
                />
              </div>
            </div>

            {/* Mensagem sobre o projeto */}
            <div>
              <label className="block font-mono text-xs font-bold text-[#00795A] uppercase mb-2">
                Mensagem sobre o Projeto
              </label>
              <textarea
                rows={4}
                placeholder="Conta um pouco sobre a ideia, tom de voz desejado, link do produto ou redes sociais..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-[#FFF5FB] border-2 border-[#00795A]/30 rounded-2xl p-4 text-[#1A0F1C] font-medium focus:outline-none focus:border-[#00795A]"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4 text-center">
              <button
                type="submit"
                className="w-full bg-marca text-[#1A0F1C] font-black py-5 px-8 rounded-2xl shadow-xl hover:opacity-95 transition-all transform hover:scale-[1.01] flex items-center justify-center gap-3 text-lg"
              >
                <MessageCircle className="w-6 h-6 fill-current" />
                Enviar pelo WhatsApp 🚀
              </button>
              <p className="text-xs font-mono text-[#00795A] mt-3">
                Ao clicar, você será redirecionado para o WhatsApp com sua mensagem formatada automaticamente.
              </p>
            </div>
          </form>
        </div>
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
