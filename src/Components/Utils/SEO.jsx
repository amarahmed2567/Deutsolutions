import React from 'react';
// import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const SEO = ({ 
  title, 
  description, 
  keywords = [], 
  image = '/logo-icon-small.png',
  url = '',
  type = 'website',
  // Multi-language support
  titleEn = '',
  titleAr = '',
  titleDe = '',
  descriptionEn = '',
  descriptionAr = '',
  descriptionDe = '',
  keywordsEn = [],
  keywordsAr = [],
  keywordsDe = []
}) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  
  // Base keywords for all pages
  const baseKeywords = [
    'DEUTSOLUTIONS',
    'Deutsch Solutions',
    'German Solutions',
    'AI Solutions',
    'Digital Transformation',
    'German Migration',
    'German Immigration',
    'Deutschland Immigration',
    'Artificial Intelligence',
    'Machine Learning',
    'Digital Innovation',
    'German Business',
    'German Technology',
    'German Education',
    'German Language',
    'Deutsch Kurs',
    'German Course',
    'Migration Services',
    'Immigration Services',
    'Business Solutions',
    'Technology Solutions',
    'Digital Solutions',
    'Consulting Services',
    'German Consulting',
    'European Business',
    'EU Immigration',
    'German Work Permit',
    'German Visa',
    'Blue Card Germany',
    'German Residence Permit'
  ];

  // Language-specific keywords
  const langKeywords = {
    en: [
      'German immigration services',
      'AI consulting Germany',
      'Digital transformation Germany',
      'German business solutions',
      'European technology consulting',
      'German work visa',
      'German residence permit',
      'German language course',
      'German business consulting',
      'European digital solutions'
    ],
    ar: [
      'خدمات الهجرة الألمانية',
      'استشارات الذكاء الاصطناعي ألمانيا',
      'التحول الرقمي ألمانيا',
      'حلول الأعمال الألمانية',
      'استشارات التكنولوجيا الأوروبية',
      'تأشيرة العمل الألمانية',
      'إقامة ألمانيا',
      'دورة اللغة الألمانية',
      'استشارات الأعمال الألمانية',
      'الحلول الرقمية الأوروبية'
    ],
    de: [
      'Deutsche Einwanderungsdienste',
      'KI-Beratung Deutschland',
      'Digitale Transformation Deutschland',
      'Deutsche Geschäftslösungen',
      'Europäische Technologieberatung',
      'Deutsches Arbeitsvisum',
      'Deutsche Aufenthaltserlaubnis',
      'Deutschkurs',
      'Deutsche Geschäftsberatung',
      'Europäische digitale Lösungen'
    ]
  };

  // Multi-language titles
  const titles = {
    en: titleEn || title || 'DEUTSOLUTIONS - AI, Digital Transformation & German Migration Services',
    ar: titleAr || title || 'DEUTSOLUTIONS - حلول الذكاء الاصطناعي والتحول الرقمي وخدمات الهجرة الألمانية',
    de: titleDe || title || 'DEUTSOLUTIONS - KI, Digitale Transformation & Deutsche Migrationsdienste'
  };

  // Multi-language descriptions
  const descriptions = {
    en: descriptionEn || description || 'DEUTSOLUTIONS provides expert AI consulting, digital transformation services, and comprehensive German migration support. Transform your business and achieve your German dreams with our professional guidance.',
    ar: descriptionAr || description || 'تقدم DEUTSOLUTIONS استشارات الذكاء الاصطناعي المتخصصة، وخدمات التحول الرقمي، والدعم الشامل للهجرة الألمانية. حول عملك وحقق أحلامك الألمانية مع إرشادنا المهني.',
    de: descriptionDe || description || 'DEUTSOLUTIONS bietet professionelle KI-Beratung, Digitalisierungsdienstleistungen und umfassende Unterstützung bei der deutschen Einwanderung. Transformieren Sie Ihr Unternehmen und verwirklichen Sie Ihre deutschen Träume mit unserer fachkundigen Beratung.'
  };

  // Multi-language keywords
  const pageKeywords = {
    en: keywordsEn.length > 0 ? keywordsEn : keywords,
    ar: keywordsAr.length > 0 ? keywordsAr : keywords,
    de: keywordsDe.length > 0 ? keywordsDe : keywords
  };

  // Combine base keywords with language-specific and page-specific keywords
  const allKeywords = [
    ...baseKeywords,
    ...langKeywords[currentLang] || [],
    ...pageKeywords[currentLang] || []
  ].join(', ');

  // Get current language content
  const currentTitle = titles[currentLang] || titles.en;
  const currentDescription = descriptions[currentLang] || descriptions.en;

  return (
    // <Helmet>
    <>
      {/* Basic Meta Tags */}
      <title>{currentTitle}</title>
      <meta name="description" content={currentDescription} />
      <meta name="keywords" content={allKeywords} />
      <meta name="author" content="DEUTSOLUTIONS" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content={currentLang} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={currentTitle} />
      <meta property="og:description" content={currentDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url || window.location.href} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="DEUTSOLUTIONS" />
      <meta property="og:locale" content={currentLang === 'ar' ? 'ar_AR' : currentLang === 'de' ? 'de_DE' : 'en_US'} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={currentTitle} />
      <meta name="twitter:description" content={currentDescription} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url || window.location.href} />
      
      {/* Language Alternates */}
      <link rel="alternate" hreflang="en" href={url.replace(/\/[a-z]{2}\//, '/en/')} />
      <link rel="alternate" hreflang="ar" href={url.replace(/\/[a-z]{2}\//, '/ar/')} />
      <link rel="alternate" hreflang="de" href={url.replace(/\/[a-z]{2}\//, '/de/')} />
      <link rel="alternate" hreflang="x-default" href={url.replace(/\/[a-z]{2}\//, '/en/')} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "DEUTSOLUTIONS",
          "url": "https://deutsolutions.com",
          "logo": "https://deutsolutions.com/logo-icon-small.png",
          "description": currentDescription,
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "Germany"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "availableLanguage": ["English", "Arabic", "German"]
          },
          "sameAs": [
            "https://facebook.com/deutsolutions",
            "https://twitter.com/deutsolutions",
            "https://linkedin.com/company/deutsolutions"
          ]
        })}
      </script>
    {/* </Helmet> */}
    </>
  );
};

export default SEO; 