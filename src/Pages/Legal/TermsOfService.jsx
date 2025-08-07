import React from 'react';
import { useTranslation } from 'react-i18next';

const TermsOfService = () => {
  const { t } = useTranslation();
  return (
    <div className="legal-page">
      <h1>{t('legal.termsOfService.title')}</h1>
      <p>{t('legal.termsOfService.content')}</p>
    </div>
  );
};

export default TermsOfService;