import React from 'react';
import { useTranslation } from 'react-i18next';

const GDPRCompliance = () => {
  const { t } = useTranslation();
  return (
    <div className="legal-page">
      <h1>{t('legal.gdprCompliance.title')}</h1>
      <p>{t('legal.gdprCompliance.content')}</p>
    </div>
  );
};

export default GDPRCompliance;