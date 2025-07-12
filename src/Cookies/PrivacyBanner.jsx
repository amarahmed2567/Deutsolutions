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
    console.log('PrivacyBanner: Enabling Google Analytics...');
    
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
        'send_page_view': true
      });
      
      // إرسال حدث page_view
      window.gtag('event', 'page_view', {
        'page_title': document.title,
        'page_location': window.location.href
      });
      
      console.log('PrivacyBanner: Google Analytics enabled successfully');
      
      // اختبار إرسال حدث
      setTimeout(() => {
        window.gtag('event', 'test_event', {
          'event_category': 'test',
          'event_label': 'privacy_banner_accept',
          'value': 1
        });
        console.log('PrivacyBanner: Test event sent to Google Analytics');
      }, 2000);
    } else {
      console.error('PrivacyBanner: gtag not found');
    }
  };

  const handleAccept = () => {
    console.log('User accepted cookies');
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

