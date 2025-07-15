import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./PrivacyBanner.css";

const PrivacyBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const { t, i18n } = useTranslation();

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

  const handleReject = () => {
    localStorage.setItem("cookie_consent", "false");
    setShowBanner(false);
    // لا تفعّل Google Analytics
  };

  const [showAdvanced, setShowAdvanced] = useState(false);
  const handleAdvanced = () => {
    setShowAdvanced(true);
  };

  // لغات مدعومة
  const languages = [
    { code: 'ar', label: 'العربية', flag: '🇸🇦' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  ];

  if (!showBanner) return null;

  return (
    <>
      <div className="cookie-banner-blur-bg" />
      <div className="cookie-banner center-banner">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '18px', minWidth: 240 }}>
          <p style={{ margin: '0 0 18px 0', textAlign: 'center' }}>
            {t('privacy.banner.message')}
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
            <button onClick={handleAccept} style={{ width: '100%' }}>
              {t('privacy.banner.accept')}
            </button>
            <button onClick={handleReject} style={{ background: '#eee', color: '#222', width: '100%' }}>
              {t('privacy.banner.reject', 'رفض')}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyBanner;

