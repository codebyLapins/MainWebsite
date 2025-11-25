'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown, ChevronRight, ArrowLeft } from 'lucide-react';
import StarBorder from "@/components/StarBorder";
import BlurText from "@/components/BlurText";
import { useLanguage } from "@/context/LanguageContext";

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
    language: "Language",
    // Hero section
    beautiful: "Beautiful.",
    functional: "Functional.",
    yours: "Yours.",
    websites: "Websites",
    webApps: "Web Apps",
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
    aboutTitle: "Website Development",
    aboutName: "",
    aboutRole: "",
    aboutText1: "I'm a web developer and designer focused on creating high-quality, modern digital products that help businesses grow. My work combines clean design, strong technical foundations and a deep understanding of usability.",
    aboutText2: "I specialize in building websites, e-commerce platforms and custom digital solutions that are fast, secure and easy to manage. Whether it's a corporate site, an online store, or a custom-built system, I approach every project with precision, clear communication and long-term thinking.",
    aboutText3: "My goal is simple: deliver results that elevate your brand, streamline your workflow, and create real value for your business.",
    // Service boxes
    shopifyTitle: "Shopify",
    shopifyDesc: "A professional and easy-to-manage online store built on the Shopify platform. Offers ready-to-use integrations, simple product management, and secure payment processing - perfect for launching sales quickly.",
    framerTitle: "Framer",
    framerDesc: "Modern, fast, and visually striking websites built with Framer. Ideal for landing pages, portfolios, and startup projects where design, animations, and an impressive user experience are essential.",
    wordpressTitle: "WordPress",
    wordpressDesc: "A versatile and user-friendly website platform suitable for corporate sites, blogs, and various content-driven solutions. Provides high flexibility and extensive scalability.",
    customTitle: "Custom Development",
    customDesc: "Fully tailored, custom-built solutions created specifically for your business needs. Perfect for unique features, specialized systems, and projects requiring maximum flexibility.",
    woocommerceTitle: "WooCommerce",
    woocommerceDesc: "A powerful WordPress e-commerce solution with unlimited customization options. Allows you to easily create and manage an online store, integrate payments, shipping, and automation.",
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
    language: "Valoda",
    // Hero section
    beautiful: "Skaista.",
    functional: "Funkcionāla.",
    yours: "Tava.",
    websites: "Mājaslapas",
    webApps: "Tīmekļa lietotnes",
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
    aboutTitle: "Mājaslapu izstrāde",
    aboutName: "",
    aboutRole: "",
    aboutText1: "Esmu tīmekļa izstrādātājs un dizainers, kas specializējas modernu, kvalitatīvu digitālo produktu radīšanā, kuri palīdz uzņēmumiem augt. Mans darbs apvieno skaidru dizainu, spēcīgus tehniskos pamatus un dziļu izpratni par lietojamību.",
    aboutText2: "Specializējos mājaslapu, e-komercijas platformu un pielāgotu digitālo risinājumu izstrādē, kas ir ātri, droši un viegli pārvaldāmi. Vai tas būtu korporatīvā vietne, interneta veikals vai pielāgota sistēma — katru projektu veicu ar precizitāti, skaidru komunikāciju un domājot par ilgtermiņa risinājumiem.",
    aboutText3: "Mans mērķis ir vienkāršs: sniegt rezultātus, kas ceļ tavu zīmolu, optimizē darba procesus un rada īstu vērtību tavai uzņēmumam.",
    // Service boxes
    shopifyTitle: "Shopify",
    shopifyDesc: "Profesionāls un ērti pārvaldāms interneta veikals uz Shopify platformas. Piedāvā gatavas integrācijas, ērtu produktu administrēšanu un drošu maksājumu apstrādi - ideāli ātrai pārdošanas uzsākšanai.",
    framerTitle: "Framer",
    framerDesc: "Modernas, ātras un vizuāli izteiksmīgas mājaslapas, veidotas Framer vidē. Ideāli landing lapām, portfolio un startup projektiem, kur svarīgs ir dizains, animācijas un iespaidīga lietotāja pieredze.",
    wordpressTitle: "WordPress",
    wordpressDesc: "Daudzpusīga un viegli pārvaldāma mājaslapu platforma korporatīvām lapām, blogiem un dažādiem satura risinājumiem. Nodrošina augstu elastību un plašas paplašināšanas iespējas.",
    customTitle: "Custom Development",
    customDesc: "Pilnībā pielāgoti, individuāli veidoti risinājumi, kas izstrādāti tieši jūsu biznesa vajadzībām. Ideāli unikālām funkcijām, specifiskām sistēmām un projektiem, kas prasa maksimālu elastību.",
    woocommerceTitle: "WooCommerce",
    woocommerceDesc: "Jaudīgs WordPress e-komercijas risinājums ar neierobežotām pielāgošanas iespējām. Ļauj ērti izveidot un pārvaldīt interneta veikalu, integrēt maksājumus, piegādes un automatizāciju.",
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

export default function Navbar() {
  const { currentLang, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const t = translations[currentLang];

  const languages = [
    { code: 'lv' as const, name: 'Latviešu', flag: '/latvia.svg' },
    { code: 'en' as const, name: 'English', flag: '/unitedkingdom.svg' }
  ];

  const currentLanguage = languages.find(lang => lang.code === currentLang)!;

  const services = [
    {
      category: t.website,
      icon: '/website.svg',
      items: [
        { name: t.websiteDev, href: '/services/website-development' },
        { name: t.websiteMaintenance, href: '/services/website-maintenance' },
      ],
    },
    {
      category: t.ecommerce,
      icon: '/ecommerce.svg',
      items: [
        { name: t.onlineStore, href: '/services/online-store' },
        { name: t.shopifyStore, href: '/services/shopify' },
      ],
    },
    {
      category: t.design,
      icon: '/framer.svg',
      items: [
        { name: t.brandIdentity, href: '/services/branding' },
        { name: t.frontEnd, href: '/services/ux-ui-design' },
      ],
    },
  ];

  // Close services panel when main menu closes
  useEffect(() => {
    if (!mobileMenuOpen) {
      setMobileServicesOpen(false);
    }
  }, [mobileMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
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
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {servicesDropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                      <div className="absolute top-0 left-0 right-0 h-4" />

                      <div className="bg-[#1a1a2e]/95 backdrop-blur-md border border-[#4a388f]/40 rounded-2xl shadow-[0_0_30px_rgba(138,43,226,0.4)] min-w-[700px] overflow-hidden">
                        <div className="grid grid-cols-3 gap-6 p-6">
                          {services.map((service, idx) => (
                            <div key={idx} className="space-y-3">
                              <div className="flex items-center gap-3 pb-2 border-b border-[#4a388f]/30">
                                <Image src={service.icon} alt={service.category} width={24} height={24} className="w-6 h-6" />
                                <h3 className="font-semibold text-white text-lg">{service.category}</h3>
                              </div>
                              {service.items.map((item, itemIdx) => (
                                <a
                                  key={itemIdx}
                                  href={item.href}
                                  className="flex items-center gap-2 text-gray-300 hover:text-[#9b7fd9] transition-colors text-sm py-1.5 font-[family-name:var(--font-ibm-plex-mono)]"
                                >
                                  <svg className="w-4 h-4 flex-shrink-0" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <path d="M13.3333 4L6 11.3333L2.66667 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                  {item.name}
                                </a>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <a href="#about" className="hover:text-[#4a388f] hover:scale-110 transition-all duration-200 font-medium">{t.about}</a>
                <a href="#works" className="hover:text-[#4a388f] hover:scale-110 transition-all duration-200 font-medium">{t.works}</a>
                <a href="#contact" className="hover:text-[#4a388f] hover:scale-110 transition-all duration-200 font-medium">{t.contact}</a>

                {/* Language Switcher Desktop - Dropdown */}
                <div
                  className="relative pl-4 border-l border-[#4a388f]/30"
                  onMouseEnter={() => setLangDropdownOpen(true)}
                  onMouseLeave={() => setLangDropdownOpen(false)}
                >
                  <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#4a388f]/20 hover:bg-[#4a388f]/30 transition-all">
                    <Image
                      src={currentLanguage.flag}
                      alt={currentLanguage.name}
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                    <span className="text-xs font-medium text-white">{currentLang.toUpperCase()}</span>
                    <ChevronDown className={`w-3 h-3 text-white transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {langDropdownOpen && (
                    <div className="absolute top-full right-0 pt-2">
                      <div className="bg-[#1a1a2e]/95 backdrop-blur-md border border-[#4a388f]/40 rounded-lg shadow-[0_0_20px_rgba(138,43,226,0.3)] overflow-hidden min-w-[140px]">
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              setLanguage(lang.code);
                              setLangDropdownOpen(false);
                            }}
                            className={`w-full flex items-center gap-3 px-4 py-2.5 transition-colors ${
                              currentLang === lang.code
                                ? 'bg-[#4a388f]/30 text-white'
                                : 'text-gray-300 hover:bg-[#4a388f]/20 hover:text-white'
                            }`}
                          >
                            <Image src={lang.flag} alt={lang.name} width={18} height={18} className="w-[18px] h-[18px]" />
                            <span className="text-sm font-medium">{lang.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden text-white/80 hover:text-white transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </StarBorder>
        </div>
      </nav>

      {/* Mobile Navigation - Main Panel */}
      <div
        className={`fixed inset-0 bg-[#0a0a0f] z-[100] transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#0a0a0f] border-b border-white/10 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="CodeByLapins"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <span className="text-[#6450E0] font-bold text-lg">CodeByLapins</span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="overflow-y-auto h-[calc(100vh-65px)] px-6 py-6">
          <nav className="space-y-2">
            <a
              href="#home"
              onClick={handleNavClick}
              className="flex items-center justify-between py-4 px-4 rounded-lg hover:bg-white/5 transition-colors group"
            >
              <span className="text-white/90 group-hover:text-white text-lg font-medium">
                {t.home}
              </span>
            </a>

            <button
              onClick={() => setMobileServicesOpen(true)}
              className="w-full flex items-center justify-between py-4 px-4 rounded-lg hover:bg-white/5 transition-colors group"
            >
              <span className="text-white/90 group-hover:text-white text-lg font-medium">
                {t.services}
              </span>
              <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-[#6450E0] transition-colors" />
            </button>

            <a
              href="#about"
              onClick={handleNavClick}
              className="flex items-center justify-between py-4 px-4 rounded-lg hover:bg-white/5 transition-colors group"
            >
              <span className="text-white/90 group-hover:text-white text-lg font-medium">
                {t.about}
              </span>
            </a>

            <a
              href="#works"
              onClick={handleNavClick}
              className="flex items-center justify-between py-4 px-4 rounded-lg hover:bg-white/5 transition-colors group"
            >
              <span className="text-white/90 group-hover:text-white text-lg font-medium">
                {t.works}
              </span>
            </a>

            <a
              href="#contact"
              onClick={handleNavClick}
              className="flex items-center justify-between py-4 px-4 rounded-lg hover:bg-white/5 transition-colors group"
            >
              <span className="text-white/90 group-hover:text-white text-lg font-medium">
                {t.contact}
              </span>
            </a>

            {/* Language Switcher Mobile */}
            <div className="pt-6 mt-6 border-t border-white/10">
              <div className="px-4 py-2">
                <span className="text-white/60 text-sm font-medium">{t.language}</span>
              </div>
              <div className="flex gap-2 px-4 pt-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg font-medium transition-colors ${
                      currentLang === lang.code
                        ? 'bg-[#6450E0] text-white'
                        : 'bg-white/5 text-white/70 hover:bg-white/10'
                    }`}
                  >
                    <Image src={lang.flag} alt={lang.name} width={20} height={20} className="w-5 h-5" />
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Services Panel (Second Screen) */}
      <div
        className={`fixed inset-0 bg-[#0a0a0f] z-[110] transform transition-transform duration-300 ease-in-out ${
          mobileServicesOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        {/* Header */}
        <div className="sticky top-0 bg-[#0a0a0f] border-b border-white/10 px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setMobileServicesOpen(false)}
            className="flex items-center gap-2 text-white hover:text-[#6450E0] transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">{t.services}</span>
          </button>
        </div>

        {/* Services List */}
        <div className="overflow-y-auto h-[calc(100vh-65px)] px-6 py-6">
          <div className="space-y-8">
            {services.map((category, idx) => (
              <div key={idx}>
                <h3 className="text-[#6450E0] font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Image src={category.icon} alt={category.category} width={20} height={20} className="w-5 h-5" />
                  {category.category}
                </h3>
                <ul className="space-y-1">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <a
                        href={item.href}
                        onClick={handleNavClick}
                        className="flex items-center justify-between py-3 px-4 rounded-lg hover:bg-white/5 transition-colors group"
                      >
                        <span className="text-white/90 group-hover:text-white text-base">
                          {item.name}
                        </span>
                        <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-[#6450E0] transition-colors" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
