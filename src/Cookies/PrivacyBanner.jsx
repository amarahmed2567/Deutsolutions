import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./PrivacyBanner.css";

const PrivacyBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setShowBanner(true);
    } else {
      // لو وافق قبل كده، فعّل Google Analytics
      enableAnalytics();
    }
  }, []);

  const enableAnalytics = () => {

    // تحقق من وجود gtag
    if (window.gtag) {
      
      // تحديث إعدادات الموافقة
      window.gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'analytics_storage': 'granted'
      });
            
      // تكوين Google Analytics
      window.gtag('config', 'G-NWCNB6N585', {
        'page_title': document.title,
        'page_location': window.location.href,
        'send_page_view': true,
        'debug_mode': true
      });
            
      // إرسال حدث page_view
      window.gtag('event', 'page_view', {
        'page_title': document.title,
        'page_location': window.location.href,
        'page_referrer': document.referrer
      });
    }
  };

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "true");
    setShowBanner(false);
    enableAnalytics();
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner">
      <p>
        {t('privacy.banner.message')}
      </p>
      <button onClick={handleAccept}>
        {t('privacy.banner.accept')}
      </button>
    </div>
  );
};

export default PrivacyBanner;

