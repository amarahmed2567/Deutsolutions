import React from 'react';
import { useTranslation } from 'react-i18next';

const CookiePolicy = () => {
  const { t } = useTranslation();
  return (
    <div className="legal-page">
      <h1>{t('legal.cookiePolicy.title')}</h1>
      <p>{t('legal.cookiePolicy.content')}</p>
    </div>
  );
};

export default CookiePolicy;