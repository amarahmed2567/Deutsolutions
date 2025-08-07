import React from 'react';
import { useTranslation } from 'react-i18next';

const DataProtection = () => {
  const { t } = useTranslation();
  return (
    <div className="legal-page">
      <h1>{t('legal.dataProtection.title')}</h1>
      <p>{t('legal.dataProtection.content')}</p>
    </div>
  );
};

export default DataProtection;