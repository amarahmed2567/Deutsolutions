import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './NotFound.module.css';
import { Link } from 'react-router-dom';
import SEO from '../../Components/Utils/SEO';

const NotFound = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <SEO 
        title="Page Not Found"
        titleEn="Page Not Found | DEUTSOLUTIONS - 404 Error"
        titleAr="الصفحة غير موجودة | DEUTSOLUTIONS - خطأ 404"
        titleDe="Seite nicht gefunden | DEUTSOLUTIONS - 404 Fehler"
        description="The page you're looking for doesn't exist. Return to DEUTSOLUTIONS homepage for AI solutions, digital transformation, and German migration services."
        descriptionEn="The page you're looking for doesn't exist. Return to DEUTSOLUTIONS homepage for AI solutions, digital transformation, and German migration services."
        descriptionAr="الصفحة التي تبحث عنها غير موجودة. عد إلى الصفحة الرئيسية لـ DEUTSOLUTIONS للحصول على حلول الذكاء الاصطناعي والتحول الرقمي وخدمات الهجرة الألمانية."
        descriptionDe="Die gesuchte Seite existiert nicht. Kehren Sie zur DEUTSOLUTIONS-Startseite für KI-Lösungen, Digitalisierung und deutsche Migrationsdienste zurück."
        keywords={[
          'Page Not Found',
          '404 Error',
          'DEUTSOLUTIONS Homepage',
          'German Services',
          'AI Solutions',
          'Digital Transformation'
        ]}
        keywordsEn={[
          'Page Not Found',
          '404 Error',
          'DEUTSOLUTIONS Homepage',
          'German Services',
          'AI Solutions',
          'Digital Transformation'
        ]}
        keywordsAr={[
          'الصفحة غير موجودة',
          'خطأ 404',
          'الصفحة الرئيسية DEUTSOLUTIONS',
          'الخدمات الألمانية',
          'حلول الذكاء الاصطناعي',
          'التحول الرقمي'
        ]}
        keywordsDe={[
          'Seite nicht gefunden',
          '404 Fehler',
          'DEUTSOLUTIONS Startseite',
          'Deutsche Dienstleistungen',
          'KI-Lösungen',
          'Digitalisierung'
        ]}
        type="website"
      />
      <div className={styles.container}>
        <div className={styles.illustration}>
      {/* Retro TV SVG illustration */}
      <svg width="220" height="180" viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="30" width="160" height="110" rx="10" fill="#FDF6ED" stroke="#222" strokeWidth="2"/>
        <rect x="35" y="45" width="130" height="80" rx="6" fill="#111" stroke="#222" strokeWidth="2"/>
        <rect x="40" y="50" width="120" height="70" rx="4" fill="#fff"/>
        <rect x="40" y="50" width="17" height="70" fill="#ff5e00"/>
        <rect x="57" y="50" width="17" height="70" fill="#ffb800"/>
        <rect x="74" y="50" width="17" height="70" fill="#00c853"/>
        <rect x="91" y="50" width="17" height="70" fill="#2196f3"/>
        <rect x="108" y="50" width="17" height="70" fill="#9c27b0"/>
        <rect x="125" y="50" width="17" height="70" fill="#fff"/>
        <rect x="40" y="80" width="102" height="18" fill="#111"/>
        <text x="90" y="94" textAnchor="middle" fontFamily="monospace" fontSize="22" fill="#fff">404</text>
        <circle cx="30" cy="50" r="7" fill="#ff5e00" stroke="#222" strokeWidth="2"/>
        <rect x="30" y="120" width="30" height="8" rx="2" fill="#222"/>
        <rect x="60" y="120" width="30" height="8" rx="2" fill="#222"/>
      </svg>
    </div>
    <div className={styles.textSection}>
      <h1 className={styles.title}>{t('notFound.title')}</h1>
      <p className={styles.subtitle}>{t('notFound.subtitle')}</p>
      <Link to="/" className={styles.homeBtn}>&larr; {t('notFound.goHome')}</Link>
    </div>
  </div>
    </>
  );
};

export default NotFound; 