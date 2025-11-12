'use client';

import { useState } from "react";
import Image from "next/image";
import StarBorder from "@/components/StarBorder";
import BlurText from "@/components/BlurText";

interface NavbarProps {
  currentLang: 'en' | 'lv';
  onLanguageChange: (lang: 'en' | 'lv') => void;
}

export const translations = {
  en: {
    home: "Home",
    services: "Services",
    about: "About",
    works: "Works",
    contact: "Contact",
    website: "Website",
    websiteDev: "Website development",
    websiteMaintenance: "Website maintenance & technical support",
    ecommerce: "E-commerce",
    onlineStore: "Online store development",
    shopifyStore: "Shopify store development",
    design: "Design & Graphics",
    brandIdentity: "Design & brand identity development",
    frontEnd: "Front-End design (UX/UI)",
    // Hero section
    beautiful: "Beautiful.",
    functional: "Functional.",
    yours: "Yours.",
    websites: "Websites",
    webApps: "Web Apps",
    mobileApps: "Mobile Apps",
    ecommerceShort: "E-Commerce",
    getInTouch: "Get in touch",
    learnMore: "Learn More",
    // Contact section
    getInTouchTitle: "Get In Touch",
    readyToStart: "Ready to start your project? Let's discuss how I can help bring your ideas to life.",
    phone: "Phone",
    email: "Email",
    location: "Location",
    locationValue: "Liepāja, Latvia",
    name: "Name",
    yourName: "Your name",
    yourEmail: "your@email.com",
    message: "Message",
    tellAboutProject: "Tell me about your project...",
    sendMessage: "Send Message",
    // About section
    aboutTitle: "About",
    aboutName: "Arturs Lapiņš",
    aboutRole: "Computer Science Student",
    aboutText1: "I'm a computer science student passionate about creating innovative web solutions and applications. I specialize in building modern, responsive websites and apps that combine cutting-edge technology with exceptional user experiences.",
    aboutText2: "Whether you need a stunning website, a custom web application, or mobile app development, I bring creativity and technical expertise to every project.",
    // Works section
    worksTitle: "Works",
    project1: "Project 1",
    project2: "Project 2",
    project3: "Project 3",
    project1Desc: "Exciting projects are in development. Check back soon to see my latest work.",
    project2Desc: "Innovative web solutions combining cutting-edge technology with exceptional user experiences.",
    project3Desc: "Beautiful, functional applications that bring your ideas to life.",
    comingSoon: "Coming Soon",
    // Services section
    servicesTitle: "Services",
    // Footer
    allRightsReserved: "All rights reserved."
  },
  lv: {
    home: "Sākums",
    services: "Pakalpojumi",
    about: "Par mums",
    works: "Darbi",
    contact: "Kontakti",
    website: "Mājaslapa",
    websiteDev: "Mājaslapu izstrāde",
    websiteMaintenance: "Mājaslapu uzturēšana un tehniskais atbalsts",
    ecommerce: "E-komercija",
    onlineStore: "Interneta veikalu izstrāde",
    shopifyStore: "Shopify veikalu izstrāde",
    design: "Dizains un grafika",
    brandIdentity: "Dizaina un zīmola identitātes izstrāde",
    frontEnd: "Front-End dizains (UX/UI)",
    // Hero section
    beautiful: "Skaisti.",
    functional: "Funkcionāli.",
    yours: "Tavs.",
    websites: "Mājaslapas",
    webApps: "Tīmekļa lietotnes",
    mobileApps: "Mobilās lietotnes",
    ecommerceShort: "E-komercija",
    getInTouch: "Sazinies",
    learnMore: "Uzzināt vairāk",
    // Contact section
    getInTouchTitle: "Sazinies ar mums",
    readyToStart: "Gatavs sākt savu projektu? Apspriedīsim, kā es varu palīdzēt īstenot tavas idejas.",
    phone: "Tālrunis",
    email: "E-pasts",
    location: "Atrašanās vieta",
    locationValue: "Liepāja, Latvija",
    name: "Vārds",
    yourName: "Tavs vārds",
    yourEmail: "tavs@epasts.lv",
    message: "Ziņojums",
    tellAboutProject: "Pastāsti par savu projektu...",
    sendMessage: "Nosūtīt ziņojumu",
    // About section
    aboutTitle: "Par mums",
    aboutName: "Arturs Lapiņš",
    aboutRole: "Datorzinātņu students",
    aboutText1: "Es esmu datorzinātņu students, kurš ir aizrautīgs radīt inovatīvus tīmekļa risinājumus un lietotnes. Es specializējos mūsdienīgu, atsaucīgu mājaslapu un lietotņu veidošanā, kas apvieno mūsdienu tehnoloģijas ar izcilu lietotāja pieredzi.",
    aboutText2: "Vai tev ir nepieciešama iespaidīga mājaslapa, pielāgota tīmekļa lietotne vai mobilo lietotņu izstrāde, es katram projektam pienesu radošumu un tehnisko kompetenci.",
    // Works section
    worksTitle: "Darbi",
    project1: "Projekts 1",
    project2: "Projekts 2",
    project3: "Projekts 3",
    project1Desc: "Aizraujoši projekti tiek izstrādāti. Drīzumā šeit varēsi redzēt manus jaunākos darbus.",
    project2Desc: "Inovatīvi tīmekļa risinājumi, kas apvieno mūsdienu tehnoloģijas ar izcilu lietotāja pieredzi.",
    project3Desc: "Skaistas, funkcionālas lietotnes, kas dzīvina tavas idejas.",
    comingSoon: "Drīzumā",
    // Services section
    servicesTitle: "Pakalpojumi",
    // Footer
    allRightsReserved: "Visas tiesības aizsargātas."
  }
};

export default function Navbar({ currentLang, onLanguageChange }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const t = translations[currentLang];

  const languages = [
    { code: 'lv' as const, name: 'Latviešu', flag: '/latvia.svg' },
    { code: 'en' as const, name: 'English', flag: '/unitedkingdom.svg' }
  ];

  const currentLanguage = languages.find(lang => lang.code === currentLang)!;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-center mt-2 md:mt-8 px-3 md:px-4">
        <StarBorder
          as="div"
          color="#ff00ff"
          speed="6s"
          thickness={1}
          className="bg-[#1a1a2e]/80 backdrop-blur-md rounded-full py-5 md:py-6 shadow-[0_0_30px_rgba(138,43,226,0.4)] border border-[#4a388f]/30 relative"
        >
          <div className="flex items-center justify-between w-full px-6 md:px-12 gap-8 md:gap-16">
            <div className="flex items-center gap-2 md:gap-3">
              <Image
                src="/logo.svg"
                alt="CodeByLapins"
                width={32}
                height={32}
                className="w-8 h-8 md:w-10 md:h-10 rounded-lg object-contain"
                style={{ imageRendering: 'crisp-edges' }}
                priority
              />
              <BlurText
                text="CodeByLapins"
                delay={50}
                animateBy="characters"
                direction="top"
                className="text-sm md:text-xl font-semibold text-white"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8 md:gap-12 items-center text-white text-sm md:text-base">
              <a href="#home" className="hover:text-[#4a388f] hover:scale-110 transition-all duration-200 font-medium">{t.home}</a>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button className="hover:text-[#4a388f] hover:scale-110 transition-all duration-200 font-medium flex items-center gap-1">
                  {t.services}
                  <svg className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {servicesDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                    {/* Invisible hover area */}
                    <div className="absolute top-0 left-0 right-0 h-4" />

                    <div className="bg-[#1a1a2e]/95 backdrop-blur-md border border-[#4a388f]/40 rounded-2xl shadow-[0_0_30px_rgba(138,43,226,0.4)] min-w-[700px] overflow-hidden">
                      <div className="grid grid-cols-3 gap-6 p-6">
                        {/* Website Section */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 pb-2 border-b border-[#4a388f]/30">
                            <Image src="/website.svg" alt="Website" width={24} height={24} className="w-6 h-6" />
                            <h3 className="font-semibold text-white text-lg">{t.website}</h3>
                          </div>
                          <a href="#services" className="block text-gray-300 hover:text-[#9b7fd9] transition-colors text-sm py-1.5">
                            {t.websiteDev}
                          </a>
                          <a href="#services" className="block text-gray-300 hover:text-[#9b7fd9] transition-colors text-sm py-1.5">
                            {t.websiteMaintenance}
                          </a>
                        </div>

                        {/* E-commerce Section */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 pb-2 border-b border-[#4a388f]/30">
                            <Image src="/ecommerce.svg" alt="E-commerce" width={24} height={24} className="w-6 h-6" />
                            <h3 className="font-semibold text-white text-lg">{t.ecommerce}</h3>
                          </div>
                          <a href="#services" className="block text-gray-300 hover:text-[#9b7fd9] transition-colors text-sm py-1.5">
                            {t.onlineStore}
                          </a>
                          <a href="#services" className="block text-gray-300 hover:text-[#9b7fd9] transition-colors text-sm py-1.5">
                            {t.shopifyStore}
                          </a>
                        </div>

                        {/* Design & Graphics Section */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 pb-2 border-b border-[#4a388f]/30">
                            <Image src="/framer.svg" alt="Design" width={24} height={24} className="w-6 h-6" />
                            <h3 className="font-semibold text-white text-lg">{t.design}</h3>
                          </div>
                          <a href="#services" className="block text-gray-300 hover:text-[#9b7fd9] transition-colors text-sm py-1.5">
                            {t.brandIdentity}
                          </a>
                          <a href="#services" className="block text-gray-300 hover:text-[#9b7fd9] transition-colors text-sm py-1.5">
                            {t.frontEnd}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <a href="#about" className="hover:text-[#4a388f] hover:scale-110 transition-all duration-200 font-medium">{t.about}</a>
              <a href="#works" className="hover:text-[#4a388f] hover:scale-110 transition-all duration-200 font-medium">{t.works}</a>
              <a href="#contact" className="hover:text-[#4a388f] hover:scale-110 transition-all duration-200 font-medium">{t.contact}</a>

              {/* Language Dropdown */}
              <div
                className="relative ml-4"
                onMouseEnter={() => setLanguageDropdownOpen(true)}
                onMouseLeave={() => setLanguageDropdownOpen(false)}
              >
                <button className="flex items-center gap-1.5 hover:scale-110 transition-all duration-200">
                  <Image
                    src={currentLanguage.flag}
                    alt={currentLanguage.code.toUpperCase()}
                    width={28}
                    height={28}
                    className="w-7 h-7 rounded"
                  />
                  <svg className={`w-3 h-3 transition-transform ${languageDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {languageDropdownOpen && (
                  <div className="absolute top-full right-0 pt-4">
                    {/* Invisible hover area */}
                    <div className="absolute top-0 right-0 left-0 h-4" />

                    <div className="bg-[#1a1a2e]/95 backdrop-blur-md border border-[#4a388f]/40 rounded-xl shadow-[0_0_30px_rgba(138,43,226,0.4)] overflow-hidden min-w-[160px]">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            onLanguageChange(lang.code);
                            setLanguageDropdownOpen(false);
                          }}
                          className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-[#4a388f]/20 transition-colors ${
                            currentLang === lang.code ? 'bg-[#4a388f]/10' : ''
                          }`}
                        >
                          <Image
                            src={lang.flag}
                            alt={lang.code.toUpperCase()}
                            width={24}
                            height={24}
                            className="w-6 h-6 rounded"
                          />
                          <span className="text-white text-sm font-medium">{lang.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col gap-1 p-2"
              aria-label="Toggle menu"
            >
              <span className="w-1 h-1 bg-white rounded-full"></span>
              <span className="w-1 h-1 bg-white rounded-full"></span>
              <span className="w-1 h-1 bg-white rounded-full"></span>
            </button>

            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
              <div className="absolute top-full mt-2 right-0 bg-[#1a1a2e]/95 backdrop-blur-md border border-[#4a388f]/40 rounded-2xl py-4 px-6 flex flex-col gap-3 shadow-lg shadow-[#4a388f]/20 md:hidden min-w-[200px]">
                <a href="#home" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#9b7fd9] transition-colors font-medium text-white text-sm">{t.home}</a>

                {/* Mobile Services Accordion */}
                <div>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="flex items-center justify-between w-full hover:text-[#9b7fd9] transition-colors font-medium text-white text-sm"
                  >
                    {t.services}
                    <svg className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileServicesOpen && (
                    <div className="mt-2 ml-4 space-y-3 border-l-2 border-[#4a388f]/30 pl-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <Image src="/website.svg" alt="Website" width={16} height={16} className="w-4 h-4" />
                          <span className="text-xs font-semibold text-[#9b7fd9]">{t.website}</span>
                        </div>
                        <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-white text-xs py-1">
                          {t.websiteDev}
                        </a>
                        <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-white text-xs py-1">
                          {t.websiteMaintenance}
                        </a>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <Image src="/ecommerce.svg" alt="E-commerce" width={16} height={16} className="w-4 h-4" />
                          <span className="text-xs font-semibold text-[#9b7fd9]">{t.ecommerce}</span>
                        </div>
                        <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-white text-xs py-1">
                          {t.onlineStore}
                        </a>
                        <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-white text-xs py-1">
                          {t.shopifyStore}
                        </a>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <Image src="/framer.svg" alt="Design" width={16} height={16} className="w-4 h-4" />
                          <span className="text-xs font-semibold text-[#9b7fd9]">{t.design}</span>
                        </div>
                        <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-white text-xs py-1">
                          {t.brandIdentity}
                        </a>
                        <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-white text-xs py-1">
                          {t.frontEnd}
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#9b7fd9] transition-colors font-medium text-white text-sm">{t.about}</a>
                <a href="#works" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#9b7fd9] transition-colors font-medium text-white text-sm">{t.works}</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#9b7fd9] transition-colors font-medium text-white text-sm">{t.contact}</a>

                {/* Mobile Language Switcher */}
                <div className="pt-2 border-t border-[#4a388f]/30 mt-2 space-y-1">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        onLanguageChange(lang.code);
                        setMobileMenuOpen(false);
                      }}
                      className={`w-full flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-[#4a388f]/20 transition-colors ${
                        currentLang === lang.code ? 'bg-[#4a388f]/10' : ''
                      }`}
                    >
                      <Image
                        src={lang.flag}
                        alt={lang.code.toUpperCase()}
                        width={20}
                        height={20}
                        className="w-5 h-5 rounded"
                      />
                      <span className="text-white text-sm">{lang.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </StarBorder>
      </div>
    </nav>
  );
}
