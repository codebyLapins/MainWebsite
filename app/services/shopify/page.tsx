'use client';

import Link from 'next/link';
import { useState } from 'react';

const translations = {
  en: {
    backToHome: '← Back to Home',
    title: 'Shopify Store Development',
    description: 'Shopify is the fastest way to launch a professional online store with powerful features and simple management. I build custom Shopify stores tailored to your brand and business model.',
    features: 'Features',
    featuresList: [
      'Custom Shopify theme design',
      'Product, variant & inventory setup',
      'Payment & shipping integration',
      'App integrations (reviews, CRM, upsell, subscriptions)',
      'Speed optimization',
      'Training on how to use Shopify',
      'Ongoing support & maintenance'
    ],
    whoThisIsFor: 'Who this is for',
    whoText: 'Brands, startups, digital creators, dropshippers, subscription businesses.',
    cta: 'Get in Touch'
  },
  lv: {
    backToHome: '← Atpakaļ uz sākumu',
    title: 'Shopify veikalu izstrāde',
    description: 'Shopify ir ātrākais un vienkāršākais veids, kā izveidot profesionālu interneta veikalu ar jaudīgām funkcijām. Izstrādāju pielāgotus Shopify veikalus, kas atbilst jūsu zīmolam, nišai un biznesa modelim.',
    features: 'Iespējas',
    featuresList: [
      'Pielāgots Shopify tēmas dizains',
      'Produktu, variantu un krājumu iestatīšana',
      'Maksājumu un piegādes integrācija',
      'App integrācijas (atsauksmes, CRM, upsell, abonēšana u.c.)',
      'Veiktspējas optimizācija',
      'Apmācība, kā lietot Shopify',
      'Uzturēšana un tehniskais atbalsts'
    ],
    whoThisIsFor: 'Kam tas piemērots',
    whoText: 'Zīmoliem, startupiem, digitālajiem satura veidotājiem, dropshipping veikaliem, abonēšanas modeļiem.',
    cta: 'Sazinies'
  }
};

export default function ShopifyPage() {
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

          {/* Features */}
          <div className="mb-12 bg-zinc-900 rounded-2xl p-8 border border-[#4a388f]/20">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white font-[family-name:var(--font-ibm-plex-mono)]">
              {t.features}
            </h2>
            <ul className="space-y-3">
              {t.featuresList.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-300 font-[family-name:var(--font-ibm-plex-mono)]">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-[#9b7fd9]" width="20" height="20" viewBox="0 0 16 16" fill="none">
                    <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Who This Is For */}
          <div className="mb-12 bg-zinc-900 rounded-2xl p-8 border border-[#4a388f]/20">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white font-[family-name:var(--font-ibm-plex-mono)]">
              {t.whoThisIsFor}
            </h2>
            <p className="text-gray-300 font-[family-name:var(--font-ibm-plex-mono)]">
              {t.whoText}
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
