import React from 'react';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  return (
    <div className="legal-page">
      <h1>{t('legal.privacyPolicy.title')}</h1>
      <p>{t('legal.privacyPolicy.content')}</p>
    </div>
  );
};

export default PrivacyPolicy;