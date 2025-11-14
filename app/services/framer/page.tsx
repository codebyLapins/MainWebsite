'use client';

import Link from 'next/link';
import { useState } from 'react';

const translations = {
  en: {
    backToHome: '← Back to Home',
    title: 'Framer Website Development',
    description: 'Modern, fast, and visually striking websites built with Framer. Ideal for landing pages, portfolios, and startup projects where design, animations, and an impressive user experience are essential.',
    whatYouReceive: 'What you receive',
    features: [
      'Custom Framer website design',
      'Smooth animations and micro-interactions',
      'Fully responsive across all devices',
      'Fast loading speeds',
      'SEO optimization',
      'CMS integration for easy content updates',
      'Professional, modern aesthetics'
    ],
    perfectFor: 'Perfect for',
    perfectForText: 'Landing pages, portfolios, creative agencies, startups, product showcases, and personal brands.',
    cta: 'Get in Touch'
  },
  lv: {
    backToHome: '← Atpakaļ uz sākumu',
    title: 'Framer',
    description: 'Modernas, ātras un vizuāli izteiksmīgas mājaslapas, veidotas Framer vidē. Ideāli landing lapām, portfolio un startup projektiem, kur svarīgs ir dizains, animācijas un iespaidīga lietotāja pieredze.',
    whatYouReceive: 'Ko jūs saņemat',
    features: [
      'Pielāgots Framer mājaslapas dizains',
      'Plūstošas animācijas un mikrointerakcijas',
      'Pilnībā responsīvs visām ierīcēm',
      'Ātrs ielādes ātrums',
      'SEO optimizācija',
      'CMS integrācija ērtai satura pārvaldībai',
      'Profesionāla, moderna estētika'
    ],
    perfectFor: 'Ideāli piemērots',
    perfectForText: 'Landing lapām, portfolios, radošām aģentūrām, startupiem, produktu prezentācijām un personiskajiem zīmoliem.',
    cta: 'Sazinies'
  }
};

export default function FramerPage() {
  const [lang, setLang] = useState<'en' | 'lv'>('lv');
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a2e]/80 backdrop-blur-md border-b border-[#4a388f]/30">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-white hover:text-[#9b7fd9] transition-colors font-semibold">
            {t.backToHome}
          </Link>
          <div className="flex gap-2">
            <button
              onClick={() => setLang('lv')}
              className={`px-3 py-1 rounded ${lang === 'lv' ? 'bg-[#4a388f] text-white' : 'text-gray-400 hover:text-white'}`}
            >
              LV
            </button>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1 rounded ${lang === 'en' ? 'bg-[#4a388f] text-white' : 'text-gray-400 hover:text-white'}`}
            >
              EN
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white font-[family-name:var(--font-ibm-plex-mono)]">
              {t.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-[family-name:var(--font-ibm-plex-mono)]">
              {t.description}
            </p>
          </div>

          {/* What You Receive */}
          <div className="mb-12 bg-zinc-900 rounded-2xl p-8 border border-[#4a388f]/20">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white font-[family-name:var(--font-ibm-plex-mono)]">
              {t.whatYouReceive}
            </h2>
            <ul className="space-y-3">
              {t.features.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300 font-[family-name:var(--font-ibm-plex-mono)]">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#9b7fd9]" width="20" height="20" viewBox="0 0 16 16" fill="none">
                    <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Perfect For */}
          <div className="mb-12 bg-zinc-900 rounded-2xl p-8 border border-[#4a388f]/20">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white font-[family-name:var(--font-ibm-plex-mono)]">
              {t.perfectFor}
            </h2>
            <p className="text-gray-300 font-[family-name:var(--font-ibm-plex-mono)]">
              {t.perfectForText}
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/#contact"
              className="inline-block px-8 py-4 bg-[#4a388f] hover:bg-[#5a48af] text-white rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,56,143,0.5)] font-[family-name:var(--font-ibm-plex-mono)]"
            >
              {t.cta}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
