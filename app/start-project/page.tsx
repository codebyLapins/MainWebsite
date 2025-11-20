'use client';

import { useState, FormEvent } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const translations = {
  en: {
    backToHome: '← Back to Home',
    pageTitle: 'Start Your Project',
    pageSubtitle: 'Fill out this form to request a custom quote for your website or e-commerce project.',

    // Section 1
    section1: '1. Company Information',
    companyName: 'Company Name',
    companyNamePlaceholder: 'Your company name',
    contactPerson: 'Contact Person (Name)',
    contactPersonPlaceholder: 'John Doe',
    email: 'Email',
    emailPlaceholder: 'your@email.com',
    phone: 'Phone Number',
    phonePlaceholder: '+371 12345678',
    existingWebsite: 'Existing Website (if any)',
    existingWebsitePlaceholder: 'https://yourwebsite.com',
    socialMedia: 'Social Media Links',
    socialMediaPlaceholder: 'Facebook: ...\nInstagram: ...\nLinkedIn: ...',

    // Section 2
    section2: '2. Project Goals',
    mainGoal: 'Main Goal of the New Website',
    mainGoalPlaceholder: 'Describe what you want to achieve with this website...',
    targetAudience: 'Target Audience',
    targetAudiencePlaceholder: 'Who are your primary customers/users?',
    problemsToSolve: 'What Problems Should This Website Solve?',
    problemsToSolvePlaceholder: 'Optional: List specific problems or pain points...',

    // Section 3
    section3: '3. Design & Style',
    brandGuidelines: 'Do You Have Existing Brand Guidelines?',
    brandYes: 'Yes',
    brandNo: 'No',
    brandPartially: 'Partially',
    uploadNote: 'Logo / Brand Files',
    uploadNoteText: 'Please send logo and brand files to the email provided after form submission',
    websitesLike: 'Websites You Like (links + what you like about them)',
    websitesLikePlaceholder: 'https://example.com - I like the clean design and animations',
    designStyle: 'Preferred Design Style (select all that apply)',
    styleModern: 'Modern',
    styleMinimal: 'Minimal',
    styleDark: 'Dark / Dark mode',
    styleLight: 'Light',
    styleCorporate: 'Corporate',
    styleCreative: 'Creative / animated',
    styleSimple: 'Very simple / clean',
    preferredColors: 'Preferred Colors or Brand Colors',
    preferredColorsPlaceholder: 'e.g., Blue, White, #4a388f',

    // Section 4
    section4: '4. Functionality',
    needEcommerce: 'Do You Need an Online Store (E-commerce)?',
    ecommerceYes: 'Yes',
    ecommerceNo: 'No',
    ecommerceMaybe: 'Maybe later',
    numberOfProducts: 'If Yes, Approximate Number of Products',
    products10: 'Up to 10',
    products50: '10–50',
    products200: '50–200',
    products200plus: '200+',
    productsNotSure: 'Not sure',
    integrations: 'Required Integrations',
    intPayment: 'Payment (Stripe / PayPal / bank)',
    intShipping: 'Shipping integrations',
    intAccounting: 'Accounting / inventory systems',
    intCRM: 'CRM',
    intAnalytics: 'Google Analytics / Meta Pixel',
    intOther: 'Other',
    intOtherPlaceholder: 'Specify other integrations...',
    contactForms: 'Contact / Inquiry Forms Needed?',
    formsYes: 'Yes',
    formsNo: 'No',
    languages: 'Languages for the Website',
    langLatvian: 'Latvian',
    langEnglish: 'English',
    langRussian: 'Russian',
    langOther: 'Other',
    langOtherPlaceholder: 'Specify other languages...',
    blogSection: 'Blog / Articles Section Needed?',
    blogYes: 'Yes',
    blogNo: 'No',
    customFunctionality: 'Any Specific Features or Custom Functionality?',
    customFunctionalityPlaceholder: 'Optional: Describe custom features you need...',

    // Section 5
    section5: '5. Content',
    provideContent: 'Will You Provide the Website Text Content?',
    contentYes: 'Yes',
    contentNo: 'No',
    contentPartially: 'Partially',
    contentNeedHelp: 'Need copywriting help',
    provideImages: 'Will You Provide Images for the Website?',
    imagesYes: 'Yes',
    imagesNo: 'No',
    imagesNotSure: 'Not sure yet',

    // Section 6
    section6: '6. Technical',
    platform: 'Preferred Platform',
    platformWordPress: 'WordPress',
    platformShopify: 'Shopify',
    platformWebflow: 'Webflow',
    platformCustom: 'Custom coded',
    platformNotSure: 'Not sure – please advise',
    hasHosting: 'Do You Already Have Hosting?',
    hostingYes: 'Yes',
    hostingNo: 'No',
    hostingNotSure: 'Not sure',
    domain: 'Do You Already Have a Domain?',
    domainPlaceholder: 'e.g., mybusiness.lv',
    needEmail: 'Do You Need Professional Email Setup (info@yourdomain)?',
    emailYes: 'Yes',
    emailNo: 'No',
    emailMaybe: 'Maybe later',

    // Section 7
    section7: '7. Page Structure',
    sections: 'Which Sections Do You Need on the Website?',
    secHome: 'Home',
    secAbout: 'About',
    secServices: 'Services',
    secPortfolio: 'Portfolio / Work',
    secBlog: 'Blog / News',
    secFAQ: 'FAQ',
    secContact: 'Contact',
    secTeam: 'Team',
    secOther: 'Other',
    secOtherPlaceholder: 'Specify other sections...',
    additionalPages: 'Additional Pages or Special Sections',
    additionalPagesPlaceholder: 'Optional: Describe any additional pages needed...',

    // Section 8
    section8: '8. Timeline & Budget',
    startDate: 'Preferred Project Start Date',
    launchDate: 'Preferred Launch / Deadline',
    budget: 'Estimated Budget',
    budget100: '~100€',
    budget200: '100–200€',
    budget400: '200–400€',
    budget600: '400–600€',
    budget1300: '1000–1300€',
    budget2000plus: '2000+',
    budgetQuote: 'I would like a custom quote',

    // Section 9
    section9: '9. After-launch Services',
    needMaintenance: 'Do You Need Ongoing Maintenance?',
    maintenanceYes: 'Yes',
    maintenanceNo: 'No',
    maintenanceNotSure: 'Not sure',
    updateFrequency: 'How Often Do You Expect Changes/Updates?',
    freqRarely: 'Rarely',
    freqMonthly: 'Once a month',
    freq2to4: '2–4 times a month',
    freqRegularly: 'Regularly',
    needTraining: 'Do You Want Training on How to Manage the Website Yourself?',
    trainingYes: 'Yes',
    trainingNo: 'No',
    trainingMaybe: 'Maybe',

    // Section 10
    section10: '10. Additional Notes',
    additionalNotes: 'Anything Else I Should Know Before Sending a Proposal?',
    additionalNotesPlaceholder: 'Optional: Any additional information, requirements, or questions...',

    // Form actions
    submitButton: 'Submit Project Request',
    submitting: 'Sending...',
    successTitle: 'Request Sent Successfully!',
    successMessage: 'Thank you for your project request. I will review your information and get back to you within 24-48 hours with a custom proposal.',
    errorTitle: 'Error',
    errorMessage: 'Failed to send your request. Please try again or contact me directly via email.',
    tryAgain: 'Try Again',
    required: 'Required',
    optional: 'Optional'
  },
  lv: {
    backToHome: '← Atpakaļ uz sākumu',
    pageTitle: 'Uzsākt Projektu',
    pageSubtitle: 'Aizpildiet šo formu, lai pieprasītu individuālu piedāvājumu jūsu mājaslapas vai e-komercijas projektam.',

    // Section 1
    section1: '1. Uzņēmuma Informācija',
    companyName: 'Uzņēmuma Nosaukums',
    companyNamePlaceholder: 'Jūsu uzņēmuma nosaukums',
    contactPerson: 'Kontaktpersona (Vārds)',
    contactPersonPlaceholder: 'Jānis Bērziņš',
    email: 'E-pasts',
    emailPlaceholder: 'jusu@epasts.lv',
    phone: 'Tālruņa Numurs',
    phonePlaceholder: '+371 12345678',
    existingWebsite: 'Esošā Mājaslapa (ja ir)',
    existingWebsitePlaceholder: 'https://jusumajaslapa.lv',
    socialMedia: 'Sociālo Tīklu Saites',
    socialMediaPlaceholder: 'Facebook: ...\nInstagram: ...\nLinkedIn: ...',

    // Section 2
    section2: '2. Projekta Mērķi',
    mainGoal: 'Galvenais Mērķis Jaunajai Mājaslapai',
    mainGoalPlaceholder: 'Aprakstiet, ko vēlaties sasniegt ar šo mājaslapu...',
    targetAudience: 'Mērķauditorija',
    targetAudiencePlaceholder: 'Kas ir jūsu galvenie klienti/lietotāji?',
    problemsToSolve: 'Kādas Problēmas Šai Mājaslapai Vajadzētu Atrisināt?',
    problemsToSolvePlaceholder: 'Neobligāti: Uzskaitiet konkrētas problēmas...',

    // Section 3
    section3: '3. Dizains un Stils',
    brandGuidelines: 'Vai Jums Ir Esošas Zīmola Vadlīnijas?',
    brandYes: 'Jā',
    brandNo: 'Nē',
    brandPartially: 'Daļēji',
    uploadNote: 'Logo / Zīmola Faili',
    uploadNoteText: 'Lūdzu, nosūtiet logo un zīmola failus uz e-pastu, kas tiks norādīts pēc formas iesniegšanas',
    websitesLike: 'Mājaslapas, Kas Jums Patīk (saites + kas jums pie tām patīk)',
    websitesLikePlaceholder: 'https://piemers.lv - Man patīk viņu tīrais dizains un animācijas',
    designStyle: 'Vēlamais Dizaina Stils (atzīmējiet visus piemērotos)',
    styleModern: 'Moderns',
    styleMinimal: 'Minimālistisks',
    styleDark: 'Tumšs / Tumšais režīms',
    styleLight: 'Gaišs',
    styleCorporate: 'Korporatīvs',
    styleCreative: 'Radošs / animēts',
    styleSimple: 'Ļoti vienkāršs / tīrs',
    preferredColors: 'Vēlamās Krāsas vai Zīmola Krāsas',
    preferredColorsPlaceholder: 'piemēram, Zils, Balts, #4a388f',

    // Section 4
    section4: '4. Funkcionalitāte',
    needEcommerce: 'Vai Nepieciešams Interneta Veikals (E-komercija)?',
    ecommerceYes: 'Jā',
    ecommerceNo: 'Nē',
    ecommerceMaybe: 'Varbūt vēlāk',
    numberOfProducts: 'Ja Jā, Aptuvens Produktu Skaits',
    products10: 'Līdz 10',
    products50: '10–50',
    products200: '50–200',
    products200plus: '200+',
    productsNotSure: 'Neesmu drošs',
    integrations: 'Nepieciešamās Integrācijas',
    intPayment: 'Maksājumi (Stripe / PayPal / banka)',
    intShipping: 'Piegādes integrācijas',
    intAccounting: 'Grāmatvedība / inventāra sistēmas',
    intCRM: 'CRM',
    intAnalytics: 'Google Analytics / Meta Pixel',
    intOther: 'Citas',
    intOtherPlaceholder: 'Norādiet citas integrācijas...',
    contactForms: 'Nepieciešamas Kontaktformas / Pieprasījumu Formas?',
    formsYes: 'Jā',
    formsNo: 'Nē',
    languages: 'Valodas Mājaslapai',
    langLatvian: 'Latviešu',
    langEnglish: 'Angļu',
    langRussian: 'Krievu',
    langOther: 'Citas',
    langOtherPlaceholder: 'Norādiet citas valodas...',
    blogSection: 'Nepieciešama Emuāra / Rakstu Sadaļa?',
    blogYes: 'Jā',
    blogNo: 'Nē',
    customFunctionality: 'Kādas Specifiskas Funkcijas vai Pielāgota Funkcionalitāte?',
    customFunctionalityPlaceholder: 'Neobligāti: Aprakstiet pielāgotās funkcijas...',

    // Section 5
    section5: '5. Saturs',
    provideContent: 'Vai Jūs Nodrošināsiet Mājaslapas Teksta Saturu?',
    contentYes: 'Jā',
    contentNo: 'Nē',
    contentPartially: 'Daļēji',
    contentNeedHelp: 'Nepieciešama palīdzība ar tekstu rakstīšanu',
    provideImages: 'Vai Jūs Nodrošināsiet Attēlus Mājaslapai?',
    imagesYes: 'Jā',
    imagesNo: 'Nē',
    imagesNotSure: 'Vēl nezinu',

    // Section 6
    section6: '6. Tehniskā Daļa',
    platform: 'Vēlamā Platforma',
    platformWordPress: 'WordPress',
    platformShopify: 'Shopify',
    platformWebflow: 'Webflow',
    platformCustom: 'Pielāgots kods',
    platformNotSure: 'Neesmu drošs – lūdzu ieteiciet',
    hasHosting: 'Vai Jums Jau Ir Hostings?',
    hostingYes: 'Jā',
    hostingNo: 'Nē',
    hostingNotSure: 'Neesmu drošs',
    domain: 'Vai Jums Jau Ir Domēns?',
    domainPlaceholder: 'piemēram, mansbizness.lv',
    needEmail: 'Vai Nepieciešama Profesionāla E-pasta Iestatīšana (info@jusudomens)?',
    emailYes: 'Jā',
    emailNo: 'Nē',
    emailMaybe: 'Varbūt vēlāk',

    // Section 7
    section7: '7. Lapas Struktūra',
    sections: 'Kādas Sadaļas Nepieciešamas Mājaslapā?',
    secHome: 'Sākums',
    secAbout: 'Par mums',
    secServices: 'Pakalpojumi',
    secPortfolio: 'Portfolio / Darbi',
    secBlog: 'Emuārs / Ziņas',
    secFAQ: 'BUJ',
    secContact: 'Kontakti',
    secTeam: 'Komanda',
    secOther: 'Citas',
    secOtherPlaceholder: 'Norādiet citas sadaļas...',
    additionalPages: 'Papildu Lapas vai Īpašas Sadaļas',
    additionalPagesPlaceholder: 'Neobligāti: Aprakstiet papildu nepieciešamās lapas...',

    // Section 8
    section8: '8. Laika Grafiks un Budžets',
    startDate: 'Vēlamais Projekta Sākuma Datums',
    launchDate: 'Vēlamais Palaišanas / Termiņa Datums',
    budget: 'Paredzamais Budžets',
    budget100: '~100€',
    budget200: '100–200€',
    budget400: '200–400€',
    budget600: '400–600€',
    budget1300: '1000–1300€',
    budget2000plus: '2000+',
    budgetQuote: 'Vēlos saņemt individuālu piedāvājumu',

    // Section 9
    section9: '9. Pakalpojumi Pēc Palaišanas',
    needMaintenance: 'Vai Nepieciešama Pastāvīga Uzturēšana?',
    maintenanceYes: 'Jā',
    maintenanceNo: 'Nē',
    maintenanceNotSure: 'Neesmu drošs',
    updateFrequency: 'Cik Bieži Sagaidāt Izmaiņas/Atjauninājumus?',
    freqRarely: 'Reti',
    freqMonthly: 'Reizi mēnesī',
    freq2to4: '2–4 reizes mēnesī',
    freqRegularly: 'Regulāri',
    needTraining: 'Vai Vēlaties Apmācību, Kā Pašiem Pārvaldīt Mājaslapu?',
    trainingYes: 'Jā',
    trainingNo: 'Nē',
    trainingMaybe: 'Varbūt',

    // Section 10
    section10: '10. Papildu Piezīmes',
    additionalNotes: 'Vai Ir Vēl Kaut Kas, Kas Man Jāzina Pirms Piedāvājuma Nosūtīšanas?',
    additionalNotesPlaceholder: 'Neobligāti: Jebkāda papildu informācija, prasības vai jautājumi...',

    // Form actions
    submitButton: 'Iesniegt Projekta Pieprasījumu',
    submitting: 'Sūta...',
    successTitle: 'Pieprasījums Veiksmīgi Nosūtīts!',
    successMessage: 'Paldies par jūsu projekta pieprasījumu. Es pārskatīšu jūsu informāciju un atbildēšu 24-48 stundu laikā ar individuālu piedāvājumu.',
    errorTitle: 'Kļūda',
    errorMessage: 'Neizdevās nosūtīt jūsu pieprasījumu. Lūdzu, mēģiniet vēlreiz vai sazinieties ar mani tieši pa e-pastu.',
    tryAgain: 'Mēģināt Vēlreiz',
    required: 'Obligāts',
    optional: 'Neobligāts'
  }
};

export default function StartProjectPage() {
  const { currentLang: lang, setLanguage: setLang } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const t = translations[lang];

  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    existingWebsite: '',
    socialMedia: '',
    mainGoal: '',
    targetAudience: '',
    problemsToSolve: '',
    brandGuidelines: '',
    websitesLike: '',
    designStyle: [] as string[],
    preferredColors: '',
    needEcommerce: '',
    numberOfProducts: '',
    integrations: [] as string[],
    integrationsOther: '',
    contactForms: '',
    languages: [] as string[],
    languagesOther: '',
    blogSection: '',
    customFunctionality: '',
    provideContent: '',
    provideImages: '',
    platform: '',
    hasHosting: '',
    domain: '',
    needEmail: '',
    sections: [] as string[],
    sectionsOther: '',
    additionalPages: '',
    startDate: '',
    launchDate: '',
    budget: '',
    needMaintenance: '',
    updateFrequency: '',
    needTraining: '',
    additionalNotes: ''
  });

  const handleCheckboxChange = (field: 'designStyle' | 'integrations' | 'languages' | 'sections', value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-project-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          companyName: '',
          contactPerson: '',
          email: '',
          phone: '',
          existingWebsite: '',
          socialMedia: '',
          mainGoal: '',
          targetAudience: '',
          problemsToSolve: '',
          brandGuidelines: '',
          websitesLike: '',
          designStyle: [],
          preferredColors: '',
          needEcommerce: '',
          numberOfProducts: '',
          integrations: [],
          integrationsOther: '',
          contactForms: '',
          languages: [],
          languagesOther: '',
          blogSection: '',
          customFunctionality: '',
          provideContent: '',
          provideImages: '',
          platform: '',
          hasHosting: '',
          domain: '',
          needEmail: '',
          sections: [],
          sectionsOther: '',
          additionalPages: '',
          startDate: '',
          launchDate: '',
          budget: '',
          needMaintenance: '',
          updateFrequency: '',
          needTraining: '',
          additionalNotes: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Submit error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="max-w-2xl w-full text-center">
          <div className="bg-zinc-900 rounded-2xl p-8 md:p-12 border border-[#4a388f]/20">
            <div className="w-16 h-16 bg-[#4a388f] rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-ibm-plex-mono)]">
              {t.successTitle}
            </h1>
            <p className="text-lg text-gray-300 mb-8 font-[family-name:var(--font-ibm-plex-mono)]">
              {t.successMessage}
            </p>
            <Link
              href="/"
              className="inline-block px-8 py-4 bg-[#4a388f] hover:bg-[#5a48af] text-white rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,56,143,0.5)] font-[family-name:var(--font-ibm-plex-mono)]"
            >
              {t.backToHome}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (submitStatus === 'error') {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="max-w-2xl w-full text-center">
          <div className="bg-zinc-900 rounded-2xl p-8 md:p-12 border border-red-500/20">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 font-[family-name:var(--font-ibm-plex-mono)]">
              {t.errorTitle}
            </h1>
            <p className="text-lg text-gray-300 mb-8 font-[family-name:var(--font-ibm-plex-mono)]">
              {t.errorMessage}
            </p>
            <button
              onClick={() => setSubmitStatus('idle')}
              className="inline-block px-8 py-4 bg-[#4a388f] hover:bg-[#5a48af] text-white rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,56,143,0.5)] font-[family-name:var(--font-ibm-plex-mono)]"
            >
              {t.tryAgain}
            </button>
          </div>
        </div>
      </div>
    );
  }

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

      {/* Form Content */}
      <div className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white font-[family-name:var(--font-ibm-plex-mono)]">
              {t.pageTitle}
            </h1>
            <p className="text-lg text-gray-300 font-[family-name:var(--font-ibm-plex-mono)]">
              {t.pageSubtitle}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Section 1: Company Information */}
            <div className="bg-zinc-900 rounded-2xl p-6 md:p-8 border border-[#4a388f]/20">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white font-[family-name:var(--font-ibm-plex-mono)]">
                {t.section1}
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.companyName} <span className="text-gray-500 text-xs">({t.optional})</span>
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                    placeholder={t.companyNamePlaceholder}
                    className="w-full px-4 py-3 bg-zinc-800 border border-[#4a388f]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#4a388f] font-[family-name:var(--font-ibm-plex-mono)]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.contactPerson} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                    placeholder={t.contactPersonPlaceholder}
                    className="w-full px-4 py-3 bg-zinc-800 border border-[#4a388f]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#4a388f] font-[family-name:var(--font-ibm-plex-mono)]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.email} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder={t.emailPlaceholder}
                    className="w-full px-4 py-3 bg-zinc-800 border border-[#4a388f]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#4a388f] font-[family-name:var(--font-ibm-plex-mono)]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.phone} <span className="text-gray-500 text-xs">({t.optional})</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder={t.phonePlaceholder}
                    className="w-full px-4 py-3 bg-zinc-800 border border-[#4a388f]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#4a388f] font-[family-name:var(--font-ibm-plex-mono)]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.existingWebsite} <span className="text-gray-500 text-xs">({t.optional})</span>
                  </label>
                  <input
                    type="url"
                    value={formData.existingWebsite}
                    onChange={(e) => setFormData({...formData, existingWebsite: e.target.value})}
                    placeholder={t.existingWebsitePlaceholder}
                    className="w-full px-4 py-3 bg-zinc-800 border border-[#4a388f]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#4a388f] font-[family-name:var(--font-ibm-plex-mono)]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.socialMedia} <span className="text-gray-500 text-xs">({t.optional})</span>
                  </label>
                  <textarea
                    value={formData.socialMedia}
                    onChange={(e) => setFormData({...formData, socialMedia: e.target.value})}
                    placeholder={t.socialMediaPlaceholder}
                    rows={3}
                    className="w-full px-4 py-3 bg-zinc-800 border border-[#4a388f]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#4a388f] font-[family-name:var(--font-ibm-plex-mono)]"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Project Goals */}
            <div className="bg-zinc-900 rounded-2xl p-6 md:p-8 border border-[#4a388f]/20">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white font-[family-name:var(--font-ibm-plex-mono)]">
                {t.section2}
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.mainGoal} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    value={formData.mainGoal}
                    onChange={(e) => setFormData({...formData, mainGoal: e.target.value})}
                    placeholder={t.mainGoalPlaceholder}
                    rows={4}
                    className="w-full px-4 py-3 bg-zinc-800 border border-[#4a388f]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#4a388f] font-[family-name:var(--font-ibm-plex-mono)]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.targetAudience} <span className="text-gray-500 text-xs">({t.optional})</span>
                  </label>
                  <textarea
                    value={formData.targetAudience}
                    onChange={(e) => setFormData({...formData, targetAudience: e.target.value})}
                    placeholder={t.targetAudiencePlaceholder}
                    rows={3}
                    className="w-full px-4 py-3 bg-zinc-800 border border-[#4a388f]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#4a388f] font-[family-name:var(--font-ibm-plex-mono)]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.problemsToSolve} <span className="text-gray-500 text-xs">({t.optional})</span>
                  </label>
                  <textarea
                    value={formData.problemsToSolve}
                    onChange={(e) => setFormData({...formData, problemsToSolve: e.target.value})}
                    placeholder={t.problemsToSolvePlaceholder}
                    rows={3}
                    className="w-full px-4 py-3 bg-zinc-800 border border-[#4a388f]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#4a388f] font-[family-name:var(--font-ibm-plex-mono)]"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Design & Style */}
            <div className="bg-zinc-900 rounded-2xl p-6 md:p-8 border border-[#4a388f]/20">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white font-[family-name:var(--font-ibm-plex-mono)]">
                {t.section3}
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.brandGuidelines} <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    {['brandYes', 'brandNo', 'brandPartially'].map((key) => (
                      <label key={key} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="brandGuidelines"
                          required
                          value={key}
                          checked={formData.brandGuidelines === key}
                          onChange={(e) => setFormData({...formData, brandGuidelines: e.target.value})}
                          className="w-4 h-4 text-[#4a388f] focus:ring-[#4a388f]"
                        />
                        <span className="text-gray-300 font-[family-name:var(--font-ibm-plex-mono)]">{t[key as keyof typeof t]}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="bg-zinc-800/50 p-4 rounded-lg">
                  <p className="text-sm text-gray-400 font-[family-name:var(--font-ibm-plex-mono)]">
                    <strong>{t.uploadNote}:</strong> {t.uploadNoteText}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.websitesLike} <span className="text-gray-500 text-xs">({t.optional})</span>
                  </label>
                  <textarea
                    value={formData.websitesLike}
                    onChange={(e) => setFormData({...formData, websitesLike: e.target.value})}
                    placeholder={t.websitesLikePlaceholder}
                    rows={3}
                    className="w-full px-4 py-3 bg-zinc-800 border border-[#4a388f]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#4a388f] font-[family-name:var(--font-ibm-plex-mono)]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3 font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.designStyle}
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {['styleModern', 'styleMinimal', 'styleDark', 'styleLight', 'styleCorporate', 'styleCreative', 'styleSimple'].map((key) => (
                      <label key={key} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.designStyle.includes(key)}
                          onChange={() => handleCheckboxChange('designStyle', key)}
                          className="w-4 h-4 text-[#4a388f] focus:ring-[#4a388f] rounded"
                        />
                        <span className="text-gray-300 font-[family-name:var(--font-ibm-plex-mono)]">{t[key as keyof typeof t]}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.preferredColors} <span className="text-gray-500 text-xs">({t.optional})</span>
                  </label>
                  <input
                    type="text"
                    value={formData.preferredColors}
                    onChange={(e) => setFormData({...formData, preferredColors: e.target.value})}
                    placeholder={t.preferredColorsPlaceholder}
                    className="w-full px-4 py-3 bg-zinc-800 border border-[#4a388f]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#4a388f] font-[family-name:var(--font-ibm-plex-mono)]"
                  />
                </div>
              </div>
            </div>

            {/* Section 4: Functionality */}
            <div className="bg-zinc-900 rounded-2xl p-6 md:p-8 border border-[#4a388f]/20">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white font-[family-name:var(--font-ibm-plex-mono)]">
                {t.section4}
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.needEcommerce} <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    {['ecommerceYes', 'ecommerceNo', 'ecommerceMaybe'].map((key) => (
                      <label key={key} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="needEcommerce"
                          required
                          value={key}
                          checked={formData.needEcommerce === key}
                          onChange={(e) => setFormData({...formData, needEcommerce: e.target.value})}
                          className="w-4 h-4 text-[#4a388f] focus:ring-[#4a388f]"
                        />
                        <span className="text-gray-300 font-[family-name:var(--font-ibm-plex-mono)]">{t[key as keyof typeof t]}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {formData.needEcommerce === 'ecommerceYes' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2 font-[family-name:var(--font-ibm-plex-mono)]">
                      {t.numberOfProducts}
                    </label>
                    <select
                      value={formData.numberOfProducts}
                      onChange={(e) => setFormData({...formData, numberOfProducts: e.target.value})}
                      className="w-full px-4 py-3 bg-zinc-800 border border-[#4a388f]/30 rounded-lg text-white focus:outline-none focus:border-[#4a388f] font-[family-name:var(--font-ibm-plex-mono)]"
                    >
                      <option value="">Select...</option>
                      {['products10', 'products50', 'products200', 'products200plus', 'productsNotSure'].map((key) => (
                        <option key={key} value={key}>{t[key as keyof typeof t]}</option>
                      ))}
                    </select>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3 font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.integrations}
                  </label>
                  <div className="space-y-2">
                    {['intPayment', 'intShipping', 'intAccounting', 'intCRM', 'intAnalytics', 'intOther'].map((key) => (
                      <label key={key} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.integrations.includes(key)}
                          onChange={() => handleCheckboxChange('integrations', key)}
                          className="w-4 h-4 text-[#4a388f] focus:ring-[#4a388f] rounded"
                        />
                        <span className="text-gray-300 font-[family-name:var(--font-ibm-plex-mono)]">{t[key as keyof typeof t]}</span>
                      </label>
                    ))}
                  </div>
                  {formData.integrations.includes('intOther') && (
                    <input
                      type="text"
                      value={formData.integrationsOther}
                      onChange={(e) => setFormData({...formData, integrationsOther: e.target.value})}
                      placeholder={t.intOtherPlaceholder}
                      className="mt-2 w-full px-4 py-3 bg-zinc-800 border border-[#4a388f]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#4a388f] font-[family-name:var(--font-ibm-plex-mono)]"
                    />
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.contactForms} <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    {['formsYes', 'formsNo'].map((key) => (
                      <label key={key} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="contactForms"
                          required
                          value={key}
                          checked={formData.contactForms === key}
                          onChange={(e) => setFormData({...formData, contactForms: e.target.value})}
                          className="w-4 h-4 text-[#4a388f] focus:ring-[#4a388f]"
                        />
                        <span className="text-gray-300 font-[family-name:var(--font-ibm-plex-mono)]">{t[key as keyof typeof t]}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3 font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.languages}
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {['langLatvian', 'langEnglish', 'langRussian', 'langOther'].map((key) => (
                      <label key={key} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.languages.includes(key)}
                          onChange={() => handleCheckboxChange('languages', key)}
                          className="w-4 h-4 text-[#4a388f] focus:ring-[#4a388f] rounded"
                        />
                        <span className="text-gray-300 font-[family-name:var(--font-ibm-plex-mono)]">{t[key as keyof typeof t]}</span>
                      </label>
                    ))}
                  </div>
                  {formData.languages.includes('langOther') && (
                    <input
                      type="text"
                      value={formData.languagesOther}
                      onChange={(e) => setFormData({...formData, languagesOther: e.target.value})}
                      placeholder={t.langOtherPlaceholder}
                      className="mt-2 w-full px-4 py-3 bg-zinc-800 border border-[#4a388f]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#4a388f] font-[family-name:var(--font-ibm-plex-mono)]"
                    />
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.blogSection} <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    {['blogYes', 'blogNo'].map((key) => (
                      <label key={key} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="blogSection"
                          required
                          value={key}
                          checked={formData.blogSection === key}
                          onChange={(e) => setFormData({...formData, blogSection: e.target.value})}
                          className="w-4 h-4 text-[#4a388f] focus:ring-[#4a388f]"
                        />
                        <span className="text-gray-300 font-[family-name:var(--font-ibm-plex-mono)]">{t[key as keyof typeof t]}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.customFunctionality} <span className="text-gray-500 text-xs">({t.optional})</span>
                  </label>
                  <textarea
                    value={formData.customFunctionality}
                    onChange={(e) => setFormData({...formData, customFunctionality: e.target.value})}
                    placeholder={t.customFunctionalityPlaceholder}
                    rows={3}
                    className="w-full px-4 py-3 bg-zinc-800 border border-[#4a388f]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#4a388f] font-[family-name:var(--font-ibm-plex-mono)]"
                  />
                </div>
              </div>
            </div>

            {/* Section 5: Content */}
            <div className="bg-zinc-900 rounded-2xl p-6 md:p-8 border border-[#4a388f]/20">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white font-[family-name:var(--font-ibm-plex-mono)]">
                {t.section5}
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.provideContent} <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    {['contentYes', 'contentNo', 'contentPartially', 'contentNeedHelp'].map((key) => (
                      <label key={key} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="provideContent"
                          required
                          value={key}
                          checked={formData.provideContent === key}
                          onChange={(e) => setFormData({...formData, provideContent: e.target.value})}
                          className="w-4 h-4 text-[#4a388f] focus:ring-[#4a388f]"
                        />
                        <span className="text-gray-300 font-[family-name:var(--font-ibm-plex-mono)]">{t[key as keyof typeof t]}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.provideImages} <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    {['imagesYes', 'imagesNo', 'imagesNotSure'].map((key) => (
                      <label key={key} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="provideImages"
                          required
                          value={key}
                          checked={formData.provideImages === key}
                          onChange={(e) => setFormData({...formData, provideImages: e.target.value})}
                          className="w-4 h-4 text-[#4a388f] focus:ring-[#4a388f]"
                        />
                        <span className="text-gray-300 font-[family-name:var(--font-ibm-plex-mono)]">{t[key as keyof typeof t]}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6: Technical */}
            <div className="bg-zinc-900 rounded-2xl p-6 md:p-8 border border-[#4a388f]/20">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white font-[family-name:var(--font-ibm-plex-mono)]">
                {t.section6}
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.platform} <span className="text-red-500">*</span>
                  </label>
                  <select
                    required
                    value={formData.platform}
                    onChange={(e) => setFormData({...formData, platform: e.target.value})}
                    className="w-full px-4 py-3 bg-zinc-800 border border-[#4a388f]/30 rounded-lg text-white focus:outline-none focus:border-[#4a388f] font-[family-name:var(--font-ibm-plex-mono)]"
                  >
                    <option value="">Select...</option>
                    {['platformWordPress', 'platformShopify', 'platformWebflow', 'platformCustom', 'platformNotSure'].map((key) => (
                      <option key={key} value={key}>{t[key as keyof typeof t]}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.hasHosting} <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    {['hostingYes', 'hostingNo', 'hostingNotSure'].map((key) => (
                      <label key={key} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="hasHosting"
                          required
                          value={key}
                          checked={formData.hasHosting === key}
                          onChange={(e) => setFormData({...formData, hasHosting: e.target.value})}
                          className="w-4 h-4 text-[#4a388f] focus:ring-[#4a388f]"
                        />
                        <span className="text-gray-300 font-[family-name:var(--font-ibm-plex-mono)]">{t[key as keyof typeof t]}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.domain} <span className="text-gray-500 text-xs">({t.optional})</span>
                  </label>
                  <input
                    type="text"
                    value={formData.domain}
                    onChange={(e) => setFormData({...formData, domain: e.target.value})}
                    placeholder={t.domainPlaceholder}
                    className="w-full px-4 py-3 bg-zinc-800 border border-[#4a388f]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#4a388f] font-[family-name:var(--font-ibm-plex-mono)]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.needEmail} <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    {['emailYes', 'emailNo', 'emailMaybe'].map((key) => (
                      <label key={key} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="needEmail"
                          required
                          value={key}
                          checked={formData.needEmail === key}
                          onChange={(e) => setFormData({...formData, needEmail: e.target.value})}
                          className="w-4 h-4 text-[#4a388f] focus:ring-[#4a388f]"
                        />
                        <span className="text-gray-300 font-[family-name:var(--font-ibm-plex-mono)]">{t[key as keyof typeof t]}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Section 7: Page Structure */}
            <div className="bg-zinc-900 rounded-2xl p-6 md:p-8 border border-[#4a388f]/20">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white font-[family-name:var(--font-ibm-plex-mono)]">
                {t.section7}
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3 font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.sections}
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {['secHome', 'secAbout', 'secServices', 'secPortfolio', 'secBlog', 'secFAQ', 'secContact', 'secTeam', 'secOther'].map((key) => (
                      <label key={key} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.sections.includes(key)}
                          onChange={() => handleCheckboxChange('sections', key)}
                          className="w-4 h-4 text-[#4a388f] focus:ring-[#4a388f] rounded"
                        />
                        <span className="text-gray-300 font-[family-name:var(--font-ibm-plex-mono)]">{t[key as keyof typeof t]}</span>
                      </label>
                    ))}
                  </div>
                  {formData.sections.includes('secOther') && (
                    <input
                      type="text"
                      value={formData.sectionsOther}
                      onChange={(e) => setFormData({...formData, sectionsOther: e.target.value})}
                      placeholder={t.secOtherPlaceholder}
                      className="mt-2 w-full px-4 py-3 bg-zinc-800 border border-[#4a388f]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#4a388f] font-[family-name:var(--font-ibm-plex-mono)]"
                    />
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.additionalPages} <span className="text-gray-500 text-xs">({t.optional})</span>
                  </label>
                  <textarea
                    value={formData.additionalPages}
                    onChange={(e) => setFormData({...formData, additionalPages: e.target.value})}
                    placeholder={t.additionalPagesPlaceholder}
                    rows={3}
                    className="w-full px-4 py-3 bg-zinc-800 border border-[#4a388f]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#4a388f] font-[family-name:var(--font-ibm-plex-mono)]"
                  />
                </div>
              </div>
            </div>

            {/* Section 8: Timeline & Budget */}
            <div className="bg-zinc-900 rounded-2xl p-6 md:p-8 border border-[#4a388f]/20">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white font-[family-name:var(--font-ibm-plex-mono)]">
                {t.section8}
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.startDate} <span className="text-gray-500 text-xs">({t.optional})</span>
                  </label>
                  <input
                    type="date"
                    value={formData.startDate}
                    onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                    className="w-full px-4 py-3 bg-zinc-800 border border-[#4a388f]/30 rounded-lg text-white focus:outline-none focus:border-[#4a388f] font-[family-name:var(--font-ibm-plex-mono)]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.launchDate} <span className="text-gray-500 text-xs">({t.optional})</span>
                  </label>
                  <input
                    type="date"
                    value={formData.launchDate}
                    onChange={(e) => setFormData({...formData, launchDate: e.target.value})}
                    className="w-full px-4 py-3 bg-zinc-800 border border-[#4a388f]/30 rounded-lg text-white focus:outline-none focus:border-[#4a388f] font-[family-name:var(--font-ibm-plex-mono)]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.budget} <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    {['budget100', 'budget200', 'budget400', 'budget600', 'budget1300', 'budget2000plus', 'budgetQuote'].map((key) => (
                      <label key={key} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="budget"
                          required
                          value={key}
                          checked={formData.budget === key}
                          onChange={(e) => setFormData({...formData, budget: e.target.value})}
                          className="w-4 h-4 text-[#4a388f] focus:ring-[#4a388f]"
                        />
                        <span className="text-gray-300 font-[family-name:var(--font-ibm-plex-mono)]">{t[key as keyof typeof t]}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Section 9: After-launch Services */}
            <div className="bg-zinc-900 rounded-2xl p-6 md:p-8 border border-[#4a388f]/20">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white font-[family-name:var(--font-ibm-plex-mono)]">
                {t.section9}
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.needMaintenance} <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    {['maintenanceYes', 'maintenanceNo', 'maintenanceNotSure'].map((key) => (
                      <label key={key} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="needMaintenance"
                          required
                          value={key}
                          checked={formData.needMaintenance === key}
                          onChange={(e) => setFormData({...formData, needMaintenance: e.target.value})}
                          className="w-4 h-4 text-[#4a388f] focus:ring-[#4a388f]"
                        />
                        <span className="text-gray-300 font-[family-name:var(--font-ibm-plex-mono)]">{t[key as keyof typeof t]}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.updateFrequency} <span className="text-gray-500 text-xs">({t.optional})</span>
                  </label>
                  <select
                    value={formData.updateFrequency}
                    onChange={(e) => setFormData({...formData, updateFrequency: e.target.value})}
                    className="w-full px-4 py-3 bg-zinc-800 border border-[#4a388f]/30 rounded-lg text-white focus:outline-none focus:border-[#4a388f] font-[family-name:var(--font-ibm-plex-mono)]"
                  >
                    <option value="">Select...</option>
                    {['freqRarely', 'freqMonthly', 'freq2to4', 'freqRegularly'].map((key) => (
                      <option key={key} value={key}>{t[key as keyof typeof t]}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2 font-[family-name:var(--font-ibm-plex-mono)]">
                    {t.needTraining} <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    {['trainingYes', 'trainingNo', 'trainingMaybe'].map((key) => (
                      <label key={key} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="needTraining"
                          required
                          value={key}
                          checked={formData.needTraining === key}
                          onChange={(e) => setFormData({...formData, needTraining: e.target.value})}
                          className="w-4 h-4 text-[#4a388f] focus:ring-[#4a388f]"
                        />
                        <span className="text-gray-300 font-[family-name:var(--font-ibm-plex-mono)]">{t[key as keyof typeof t]}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Section 10: Additional Notes */}
            <div className="bg-zinc-900 rounded-2xl p-6 md:p-8 border border-[#4a388f]/20">
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white font-[family-name:var(--font-ibm-plex-mono)]">
                {t.section10}
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2 font-[family-name:var(--font-ibm-plex-mono)]">
                  {t.additionalNotes} <span className="text-gray-500 text-xs">({t.optional})</span>
                </label>
                <textarea
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({...formData, additionalNotes: e.target.value})}
                  placeholder={t.additionalNotesPlaceholder}
                  rows={5}
                  className="w-full px-4 py-3 bg-zinc-800 border border-[#4a388f]/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#4a388f] font-[family-name:var(--font-ibm-plex-mono)]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-4 bg-[#4a388f] hover:bg-[#5a48af] text-white rounded-full font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,56,143,0.5)] font-[family-name:var(--font-ibm-plex-mono)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t.submitting : t.submitButton}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
