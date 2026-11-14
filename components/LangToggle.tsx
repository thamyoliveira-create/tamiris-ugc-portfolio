'use client';

import { useEffect, useState } from 'react';

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    google?: any;
  }
}

function applyLang(lang: 'pt' | 'en') {
  const combo = document.querySelector<HTMLSelectElement>('.goog-te-combo');
  if (!combo) return false;
  combo.value = lang === 'en' ? 'en' : 'pt';
  combo.dispatchEvent(new Event('change'));
  return true;
}

export default function LangToggle() {
  const [lang, setLang] = useState<'pt' | 'en'>('pt');

  useEffect(() => {
    let saved: 'pt' | 'en' = 'pt';
    try { if (localStorage.getItem('lang') === 'en') saved = 'en'; } catch {}
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLang(saved);
    if (!document.getElementById('gt-script')) {
      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: 'pt', includedLanguages: 'en,pt', autoDisplay: false },
          'gt-element'
        );
        if (saved === 'en') {
          let tries = 0;
          const t = setInterval(() => { if (applyLang('en') || ++tries > 30) clearInterval(t); }, 200);
        }
      };
      const sc = document.createElement('script');
      sc.id = 'gt-script';
      sc.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(sc);
    }
  }, []);

  const choose = (l: 'pt' | 'en') => {
    setLang(l);
    try { localStorage.setItem('lang', l); } catch {}
    applyLang(l);
  };

  const btn = (l: 'pt' | 'en', flag: string, label: string) => (
    <button
      onClick={() => choose(l)}
      aria-label={label}
      title={label}
      className={`notranslate text-xl leading-none rounded-full px-1.5 py-1 transition ${lang === l ? 'bg-[#F4B6DF]/60' : 'opacity-50 hover:opacity-100'}`}
    >
      {flag}
    </button>
  );

  return (
    <div className="flex items-center gap-1 notranslate" translate="no">
      <div id="gt-element" style={{ display: 'none' }} />
      {btn('pt', '🇧🇷', 'Português')}
      {btn('en', '🇺🇸', 'English')}
    </div>
  );
}
