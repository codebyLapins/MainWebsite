'use client';

import { useState } from "react";
import Navbar, { translations } from "@/components/Navbar";
import FuzzyText from "@/components/FuzzyText";
import ShinyText from "@/components/ShinyText";
import RotatingText from "@/components/RotatingText";
import MagicBento from "@/components/MagicBento";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import Dither from "@/components/Dither";

export default function Home() {
  const [currentLang, setCurrentLang] = useState<'en' | 'lv'>('en');
  const t = translations[currentLang];

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Dither Background for Entire Page */}
      <div className="fixed inset-0 w-full h-full" style={{ zIndex: 0 }}>
        <Dither
          waveColor={[0.3, 0.2, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.2}
          colorNum={4}
          waveAmplitude={0.37}
          waveFrequency={3.7}
          waveSpeed={0.03}
        />
      </div>

      {/* Navigation */}
      <Navbar currentLang={currentLang} onLanguageChange={setCurrentLang} />

      {/* Hero Section - Full Screen */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Hero Content */}
        <div className="relative z-20 text-center px-6 max-w-4xl flex flex-col items-center justify-center w-full mx-auto">
          <div className="flex flex-col items-center w-full" style={{ textShadow: '0 2px 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6)' }}>
            <div className="w-full flex justify-center mb-3 md:mb-4">
              <div style={{ fontSize: '3.5rem', fontWeight: 900, color: '#ffffff' }} className="md:hidden">
                <FuzzyText
                  baseIntensity={0.13}
                  hoverIntensity={0.72}
                  enableHover={false}
                  fontSize="3.5rem"
                  fontWeight={900}
                  color="#ffffff"
                >
                  {t.beautiful}
                </FuzzyText>
              </div>
              <div className="hidden md:block">
                <FuzzyText
                  baseIntensity={0.13}
                  hoverIntensity={0.72}
                  enableHover={true}
                  fontSize="6rem"
                  fontWeight={900}
                  color="#ffffff"
                >
                  {t.beautiful}
                </FuzzyText>
              </div>
            </div>
            <div className="w-full flex justify-center mb-3 md:mb-4">
              <div style={{ fontSize: '3.5rem', fontWeight: 900, color: '#ffffff' }} className="md:hidden">
                <FuzzyText
                  baseIntensity={0.13}
                  hoverIntensity={0.72}
                  enableHover={false}
                  fontSize="3.5rem"
                  fontWeight={900}
                  color="#ffffff"
                >
                  {t.functional}
                </FuzzyText>
              </div>
              <div className="hidden md:block">
                <FuzzyText
                  baseIntensity={0.13}
                  hoverIntensity={0.72}
                  enableHover={true}
                  fontSize="6rem"
                  fontWeight={900}
                  color="#ffffff"
                >
                  {t.functional}
                </FuzzyText>
              </div>
            </div>
            <div className="w-full flex justify-center mb-2">
              <div style={{ fontSize: '3.5rem', fontWeight: 900, color: '#ffffff' }} className="md:hidden">
                <FuzzyText
                  baseIntensity={0.13}
                  hoverIntensity={0.72}
                  enableHover={false}
                  fontSize="3.5rem"
                  fontWeight={900}
                  color="#ffffff"
                >
                  {t.yours}
                </FuzzyText>
              </div>
              <div className="hidden md:block">
                <FuzzyText
                  baseIntensity={0.13}
                  hoverIntensity={0.72}
                  enableHover={true}
                  fontSize="6rem"
                  fontWeight={900}
                  color="#ffffff"
                >
                  {t.yours}
                </FuzzyText>
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-8 w-full flex justify-center">
            <RotatingText
              texts={[t.websites, t.webApps, t.mobileApps, t.ecommerceShort]}
              mainClassName="px-5 py-2.5 bg-[#33496b] text-white overflow-hidden rounded-lg text-base md:text-2xl font-semibold shadow-lg"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mt-8 md:mt-12 w-full px-6 sm:px-0">
            <a
              href="#contact"
              className="w-full sm:w-auto max-w-[280px] px-6 py-3 md:px-8 md:py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 text-center text-sm md:text-base shadow-lg"
            >
              <ShinyText text={t.getInTouch} speed={3} />
            </a>
            <a
              href="#about"
              className="w-full sm:w-auto max-w-[280px] px-6 py-3 md:px-8 md:py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all transform hover:scale-105 text-center text-sm md:text-base shadow-lg"
            >
              <ShinyText text={t.learnMore} speed={3} />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="pt-0 pb-16 md:pb-24 px-4 md:px-0 relative" style={{ zIndex: 30 }}>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center text-white relative z-10">{t.servicesTitle}</h2>
        <div className="relative z-10">
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="74, 56, 143"
            language={currentLang}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 px-4 md:px-6 relative z-10">
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center text-white">{t.aboutTitle}</h2>
          <div className="bg-zinc-900 rounded-2xl p-6 md:p-8 border border-[#4a388f]/20 font-[family-name:var(--font-ibm-plex-mono)] mb-8 md:mb-12">
            <p className="text-base md:text-xl leading-relaxed text-gray-300 mb-4 md:mb-6">
              {t.aboutText1}
            </p>
            <p className="text-base md:text-xl leading-relaxed text-gray-300 mb-4 md:mb-6">
              {t.aboutText2}
            </p>
            <p className="text-base md:text-xl leading-relaxed text-gray-300">
              {t.aboutText3}
            </p>
          </div>

          {/* Service Feature Boxes */}
          <div className="flex flex-col gap-4">
            {/* Shopify Box */}
            <a
              href="/services/shopify"
              className="group bg-zinc-900 rounded-xl p-6 border border-[#4a388f]/20 hover:border-[#4a388f]/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,56,143,0.3)] cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 p-3 bg-[#4a388f]/10 rounded-lg group-hover:bg-[#4a388f]/20 transition-colors">
                  <img src="/1shopify.svg" alt="Shopify" className="w-12 h-12" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2 font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.shopifyTitle}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.shopifyDesc}
                  </p>
                </div>
              </div>
            </a>

            {/* Framer Box */}
            <a
              href="/services/framer"
              className="group bg-zinc-900 rounded-xl p-6 border border-[#4a388f]/20 hover:border-[#4a388f]/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,56,143,0.3)] cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 p-3 bg-[#4a388f]/10 rounded-lg group-hover:bg-[#4a388f]/20 transition-colors">
                  <img src="/1framer.svg" alt="Framer" className="w-12 h-12" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2 font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.framerTitle}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.framerDesc}
                  </p>
                </div>
              </div>
            </a>

            {/* WordPress Box */}
            <a
              href="/services/wordpress"
              className="group bg-zinc-900 rounded-xl p-6 border border-[#4a388f]/20 hover:border-[#4a388f]/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,56,143,0.3)] cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 p-3 bg-[#4a388f]/10 rounded-lg group-hover:bg-[#4a388f]/20 transition-colors">
                  <img src="/1wordpress.svg" alt="WordPress" className="w-12 h-12" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2 font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.wordpressTitle}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.wordpressDesc}
                  </p>
                </div>
              </div>
            </a>

            {/* Custom Development Box */}
            <a
              href="/services/custom"
              className="group bg-zinc-900 rounded-xl p-6 border border-[#4a388f]/20 hover:border-[#4a388f]/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,56,143,0.3)] cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 p-3 bg-[#4a388f]/10 rounded-lg group-hover:bg-[#4a388f]/20 transition-colors">
                  <img src="/1custom.svg" alt="Custom Development" className="w-12 h-12" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2 font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.customTitle}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.customDesc}
                  </p>
                </div>
              </div>
            </a>

            {/* WooCommerce Box */}
            <a
              href="/services/woocommerce"
              className="group bg-zinc-900 rounded-xl p-6 border border-[#4a388f]/20 hover:border-[#4a388f]/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,56,143,0.3)] cursor-pointer"
            >
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0 p-3 bg-[#4a388f]/10 rounded-lg group-hover:bg-[#4a388f]/20 transition-colors">
                  <img src="/1wcommerce.svg" alt="WooCommerce" className="w-12 h-12" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2 font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.woocommerceTitle}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.woocommerceDesc}
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Works Section */}
      <section id="works" className="py-16 md:py-24 px-4 md:px-6 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 md:mb-16 text-center text-white relative z-10">{t.worksTitle}</h2>

        {/* Mobile: Simple stacked layout */}
        <div className="md:hidden flex flex-col gap-6 max-w-xl mx-auto relative z-10">
          <div className="bg-gradient-to-br from-[#4a388f] to-purple-900 rounded-2xl p-6 flex flex-col justify-between min-h-[280px]">
            <div>
              <h3 className="text-2xl font-bold mb-3">{t.project1}</h3>
              <p className="text-sm text-gray-200 mb-3">
                {t.project1Desc}
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-white/20 text-white rounded-full text-xs">React</span>
                <span className="px-3 py-1 bg-white/20 text-white rounded-full text-xs">Next.js</span>
              </div>
            </div>
            <div className="text-xs text-gray-300 mt-4">{t.comingSoon}</div>
          </div>

          <div className="bg-gradient-to-br from-purple-900 to-[#4a388f] rounded-2xl p-6 flex flex-col justify-between min-h-[280px]">
            <div>
              <h3 className="text-2xl font-bold mb-3">{t.project2}</h3>
              <p className="text-sm text-gray-200 mb-3">
                {t.project2Desc}
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-white/20 text-white rounded-full text-xs">TypeScript</span>
                <span className="px-3 py-1 bg-white/20 text-white rounded-full text-xs">Tailwind</span>
              </div>
            </div>
            <div className="text-xs text-gray-300 mt-4">{t.comingSoon}</div>
          </div>

          <div className="bg-gradient-to-br from-[#33496b] to-[#4a388f] rounded-2xl p-6 flex flex-col justify-between min-h-[280px]">
            <div>
              <h3 className="text-2xl font-bold mb-3">{t.project3}</h3>
              <p className="text-sm text-gray-200 mb-3">
                {t.project3Desc}
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-white/20 text-white rounded-full text-xs">Mobile</span>
                <span className="px-3 py-1 bg-white/20 text-white rounded-full text-xs">Web</span>
              </div>
            </div>
            <div className="text-xs text-gray-300 mt-4">{t.comingSoon}</div>
          </div>
        </div>

        {/* Desktop: ScrollStack layout */}
        <div className="hidden md:block max-w-5xl mx-auto relative z-10" style={{ isolation: 'isolate' }}>
          <ScrollStack
            itemDistance={120}
            itemScale={0.03}
            itemStackDistance={25}
            baseScale={0.85}
            useWindowScroll={true}
          >
            <ScrollStackItem>
              <div className="bg-gradient-to-br from-[#4a388f] to-purple-900 h-full rounded-2xl p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">{t.project1}</h3>
                  <p className="text-sm md:text-lg text-gray-200 mb-3 md:mb-4">
                    {t.project1Desc}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-white/20 text-white rounded-full text-xs md:text-sm">React</span>
                    <span className="px-3 py-1 bg-white/20 text-white rounded-full text-xs md:text-sm">Next.js</span>
                  </div>
                </div>
                <div className="text-xs md:text-sm text-gray-300 mt-4">{t.comingSoon}</div>
              </div>
            </ScrollStackItem>
            <ScrollStackItem>
              <div className="bg-gradient-to-br from-purple-900 to-[#4a388f] h-full rounded-2xl p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">{t.project2}</h3>
                  <p className="text-sm md:text-lg text-gray-200 mb-3 md:mb-4">
                    {t.project2Desc}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-white/20 text-white rounded-full text-xs md:text-sm">TypeScript</span>
                    <span className="px-3 py-1 bg-white/20 text-white rounded-full text-xs md:text-sm">Tailwind</span>
                  </div>
                </div>
                <div className="text-xs md:text-sm text-gray-300 mt-4">{t.comingSoon}</div>
              </div>
            </ScrollStackItem>
            <ScrollStackItem>
              <div className="bg-gradient-to-br from-[#33496b] to-[#4a388f] h-full rounded-2xl p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">{t.project3}</h3>
                  <p className="text-sm md:text-lg text-gray-200 mb-3 md:mb-4">
                    {t.project3Desc}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-white/20 text-white rounded-full text-xs md:text-sm">Mobile</span>
                    <span className="px-3 py-1 bg-white/20 text-white rounded-full text-xs md:text-sm">Web</span>
                  </div>
                </div>
                <div className="text-xs md:text-sm text-gray-300 mt-4">{t.comingSoon}</div>
              </div>
            </ScrollStackItem>
          </ScrollStack>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 px-4 md:px-6 relative z-10">
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center text-white">{t.getInTouchTitle}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Contact Form Box */}
            <div className="bg-zinc-950 rounded-2xl p-6 md:p-8 border border-[#4a388f]/20">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 md:mb-6">{t.sendMessage}</h3>
              <p className="text-sm md:text-base text-gray-300 mb-6 md:mb-8">
                {t.readyToStart}
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">{t.name}</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zinc-900 border border-[#4a388f]/20 rounded-lg focus:outline-none focus:border-[#4a388f] transition-colors text-sm md:text-base"
                    placeholder={t.yourName}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">{t.email}</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zinc-900 border border-[#4a388f]/20 rounded-lg focus:outline-none focus:border-[#4a388f] transition-colors text-sm md:text-base"
                    placeholder={t.yourEmail}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">{t.message}</label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zinc-900 border border-[#4a388f]/20 rounded-lg focus:outline-none focus:border-[#4a388f] transition-colors resize-none text-sm md:text-base"
                    placeholder={t.tellAboutProject}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-200 text-sm">
                    {currentLang === 'en' ? 'Message sent successfully!' : 'Ziņojums veiksmīgi nosūtīts!'}
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm">
                    {currentLang === 'en' ? 'Failed to send message. Please try again.' : 'Neizdevās nosūtīt ziņojumu. Lūdzu, mēģiniet vēlreiz.'}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 md:py-4 bg-[#4a388f] text-white rounded-lg font-semibold hover:bg-[#9b7fd9] transition-all transform hover:scale-105 text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (currentLang === 'en' ? 'Sending...' : 'Sūta...') : t.sendMessage}
                </button>
              </form>
            </div>

            {/* Contact Information Box */}
            <div className="bg-zinc-950 rounded-2xl p-6 md:p-8 border border-[#4a388f]/20 flex flex-col">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 md:mb-6">{t.getInTouchTitle}</h3>
              <p className="text-sm md:text-base text-gray-300 mb-6 md:mb-8">
                {t.readyToStart}
              </p>

              <div className="space-y-6 flex-grow">
                {/* Phone */}
                <div className="flex flex-col p-4 bg-zinc-900 rounded-lg border border-[#4a388f]/10">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-5 h-5 text-[#4a388f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <p className="text-sm text-[#4a388f] font-semibold">{t.phone}</p>
                  </div>
                  <a href="tel:+37124928643" className="text-white hover:text-[#9b7fd9] transition-colors text-base md:text-lg ml-8">+371 24928643</a>
                </div>

                {/* Email */}
                <div className="flex flex-col p-4 bg-zinc-900 rounded-lg border border-[#4a388f]/10">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-5 h-5 text-[#4a388f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm text-[#4a388f] font-semibold">{t.email}</p>
                  </div>
                  <a href="mailto:info@codebylapins.com" className="text-white hover:text-[#9b7fd9] transition-colors text-base md:text-lg ml-8 break-all">info@codebylapins.com</a>
                </div>

                {/* Location */}
                <div className="flex flex-col p-4 bg-zinc-900 rounded-lg border border-[#4a388f]/10">
                  <div className="flex items-center gap-3 mb-2">
                    <svg className="w-5 h-5 text-[#4a388f]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-sm text-[#4a388f] font-semibold">{t.location}</p>
                  </div>
                  <p className="text-white text-base md:text-lg ml-8">{t.locationValue}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-zinc-950 border-t border-white/10 relative z-10">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; 2025 CodeByLapins. {t.allRightsReserved}</p>
        </div>
      </footer>
    </div>
  );
}
