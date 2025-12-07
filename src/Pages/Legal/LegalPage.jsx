import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import SEO from '../../Components/Utils/SEO';
import styles from './LegalPage.module.css';

const LegalPage = () => {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    // Extract hash from URL (e.g., #privacy-policy)
    const hash = location.hash.replace('#', '');
    if (hash) {
      // Wait for DOM to be ready
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const yOffset = -100;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const legalSections = [
    {
      id: 'privacy-policy',
      titleKey: 'legal.privacyPolicy.title',
      contentKey: 'legal.privacyPolicy.content'
    },
    {
      id: 'terms-of-service',
      titleKey: 'legal.termsOfService.title',
      contentKey: 'legal.termsOfService.content'
    },
    {
      id: 'cookie-policy',
      titleKey: 'legal.cookiePolicy.title',
      contentKey: 'legal.cookiePolicy.content'
    },
    {
      id: 'gdpr-compliance',
      titleKey: 'legal.gdprCompliance.title',
      contentKey: 'legal.gdprCompliance.content'
    },
    {
      id: 'data-protection',
      titleKey: 'legal.dataProtection.title',
      contentKey: 'legal.dataProtection.content'
    },
    {
      id: 'disclaimer',
      titleKey: 'legal.disclaimer.title',
      contentKey: 'legal.disclaimer.content'
    }
  ];

  return (
    <>
      <SEO 
        title="Legal"
        titleEn="Legal | DEUTSOLUTIONS - Privacy Policy, Terms & Legal Information"
        titleAr="القانونية | DEUTSOLUTIONS - سياسة الخصوصية والشروط والمعلومات القانونية"
        titleDe="Rechtliches | DEUTSOLUTIONS - Datenschutz, AGB & Rechtliche Informationen"
        description="DEUTSOLUTIONS legal information including privacy policy, terms of service, cookie policy, GDPR compliance, data protection, and disclaimer."
        descriptionEn="DEUTSOLUTIONS legal information including privacy policy, terms of service, cookie policy, GDPR compliance, data protection, and disclaimer."
        descriptionAr="المعلومات القانونية لـ DEUTSOLUTIONS بما في ذلك سياسة الخصوصية وشروط الخدمة وسياسة ملفات تعريف الارتباط والامتثال لـ GDPR وحماية البيانات وإخلاء المسؤولية."
        descriptionDe="Rechtliche Informationen von DEUTSOLUTIONS einschließlich Datenschutzerklärung, Nutzungsbedingungen, Cookie-Richtlinie, GDPR-Compliance, Datenschutz und Haftungsausschluss."
        keywords={[
          'Privacy Policy',
          'Terms of Service',
          'Cookie Policy',
          'GDPR Compliance',
          'Data Protection',
          'Legal Information'
        ]}
        keywordsEn={[
          'Privacy Policy',
          'Terms of Service',
          'Cookie Policy',
          'GDPR Compliance',
          'Data Protection',
          'Legal Information'
        ]}
        keywordsAr={[
          'سياسة الخصوصية',
          'شروط الخدمة',
          'سياسة ملفات تعريف الارتباط',
          'الامتثال لـ GDPR',
          'حماية البيانات',
          'معلومات قانونية'
        ]}
        keywordsDe={[
          'Datenschutzerklärung',
          'Nutzungsbedingungen',
          'Cookie-Richtlinie',
          'GDPR-Compliance',
          'Datenschutz',
          'Rechtliche Informationen'
        ]}
        type="website"
      />
      <div className={styles.legalContainer}>
        <div className={styles.legalHeader}>
          <h1 className="minTeitle">{t('legal.title') || 'Legal Information'}</h1>
          <p className="minSubtitle">{t('legal.subtitle') || 'Our legal policies and terms'}</p>
        </div>
        
        <div className={styles.legalContent}>
          {legalSections.map((section, index) => (
            <section key={section.id} id={section.id} className={styles.legalSection}>
              <h2 className={styles.sectionTitle}>{t(section.titleKey)}</h2>
              <div className={styles.sectionContent}>
                {t(section.contentKey).split('\n').map((paragraph, idx) => (
                  paragraph.trim() && (
                    <p key={idx} className={styles.paragraph}>
                      {paragraph}
                    </p>
                  )
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
};

export default LegalPage;

