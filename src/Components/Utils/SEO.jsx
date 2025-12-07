import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

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
  const location = useLocation();
  const currentLang = i18n.language;
  
  // Get base URL
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://deutsolutions.com';
  const currentUrl = url || `${baseUrl}${location.pathname}`;
  
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

  // Generate language alternate URLs
  const getAlternateUrl = (lang) => {
    const path = location.pathname;
    // Remove language prefix if exists
    const cleanPath = path.replace(/^\/(en|ar|de)/, '') || '/';
    return `${baseUrl}/${lang}${cleanPath === '/' ? '' : cleanPath}`;
  };

  // Generate breadcrumbs based on path
  const generateBreadcrumbs = () => {
    const path = location.pathname;
    const pathSegments = path.split('/').filter(Boolean);
    const breadcrumbs = [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": baseUrl
      }
    ];

    let currentPath = '';
    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      const name = segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      breadcrumbs.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": name,
        "item": `${baseUrl}${currentPath}`
      });
    });

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs
    };
  };

  // Structured data for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DEUTSOLUTIONS",
    "url": baseUrl,
    "logo": `${baseUrl}/logo-icon-small.png`,
    "description": currentDescription,
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Technohub 1, Dubai Silicon Oasis",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
        "postalCode": "00000",
        "addressCountry": "AE"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Frankfurter Str. 100",
        "addressLocality": "Eschborn",
        "postalCode": "65760",
        "addressCountry": "DE"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@deutsolutions.com",
      "telephone": "+971-55-467-6933",
      "availableLanguage": ["English", "Arabic", "German"]
    },
    "sameAs": [
      "https://facebook.com/deutsolutions",
      "https://twitter.com/deutsolutions",
      "https://linkedin.com/company/deutsolutions",
      "https://instagram.com/deutsolutions",
      "https://youtube.com/deutsolutions"
    ]
  };

  // WebSite schema with SearchAction
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "DEUTSOLUTIONS",
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>
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
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={`${baseUrl}${image}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="DEUTSOLUTIONS" />
      <meta property="og:locale" content={currentLang === 'ar' ? 'ar_AR' : currentLang === 'de' ? 'de_DE' : 'en_US'} />
      {currentLang !== 'en' && <meta property="og:locale:alternate" content="en_US" />}
      {currentLang !== 'ar' && <meta property="og:locale:alternate" content="ar_AR" />}
      {currentLang !== 'de' && <meta property="og:locale:alternate" content="de_DE" />}
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={currentTitle} />
      <meta name="twitter:description" content={currentDescription} />
      <meta name="twitter:image" content={`${baseUrl}${image}`} />
      <meta name="twitter:site" content="@deutsolutions" />
      <meta name="twitter:creator" content="@deutsolutions" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#ff5e00" />
      <meta name="msapplication-TileColor" content="#ff5e00" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Language Alternates */}
      <link rel="alternate" hreflang="en" href={getAlternateUrl('en')} />
      <link rel="alternate" hreflang="ar" href={getAlternateUrl('ar')} />
      <link rel="alternate" hreflang="de" href={getAlternateUrl('de')} />
      <link rel="alternate" hreflang="x-default" href={getAlternateUrl('en')} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(generateBreadcrumbs())}
      </script>
    </Helmet>
  );
};

export default SEO; 