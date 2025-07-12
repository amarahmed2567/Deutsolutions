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
    console.log('Current URL:', window.location.href);
    console.log('Page Title:', document.title);
    
    // تحقق من وجود gtag
    if (window.gtag) {
      console.log('✅ gtag is available');
      
      // تحديث إعدادات الموافقة
      window.gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'analytics_storage': 'granted'
      });
      
      console.log('✅ Consent updated to granted');
      
      // تكوين Google Analytics
      window.gtag('config', 'G-NWCNB6N585', {
        'page_title': document.title,
        'page_location': window.location.href,
        'send_page_view': true,
        'debug_mode': true
      });
      
      console.log('✅ Google Analytics configured');
      
      // إرسال حدث page_view
      window.gtag('event', 'page_view', {
        'page_title': document.title,
        'page_location': window.location.href,
        'page_referrer': document.referrer
      });
      
      console.log('✅ Page view event sent');
      
      // إرسال حدث مخصص للاختبار
      window.gtag('event', 'custom_event', {
        'event_category': 'engagement',
        'event_label': 'cookie_consent_granted',
        'value': 1
      });
      
      console.log('✅ Custom event sent');
      
      // اختبار إرسال حدث بعد ثانيتين
      setTimeout(() => {
        window.gtag('event', 'test_event', {
          'event_category': 'test',
          'event_label': 'privacy_banner_accept',
          'value': 1
        });
        console.log('✅ Test event sent to Google Analytics');
      }, 2000);
      
    } else {
      console.error('❌ gtag is not available');
      console.log('window.gtag:', window.gtag);
      console.log('window.dataLayer:', window.dataLayer);
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

