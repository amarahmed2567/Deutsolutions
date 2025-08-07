import React from 'react';
import { useTranslation } from 'react-i18next';

const Disclaimer = () => {
  const { t } = useTranslation();
  return (
    <div className="legal-page">
      <h1>{t('legal.disclaimer.title')}</h1>
      <p>{t('legal.disclaimer.content')}</p>
    </div>
  );
};

export default Disclaimer;