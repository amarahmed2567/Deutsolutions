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
      // لو وافق قبل كده، حمّل Google Analytics
      loadAnalytics();
    }
  }, []);

  const loadAnalytics = () => {
    console.log('Loading Google Analytics...');
    
    // تحقق من وجود gtag
    if (window.gtag) {
      console.log('gtag already exists, updating consent...');
      // جاهز - قم بتحديث الإعدادات
      window.gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'analytics_storage': 'granted'
      });
      window.gtag('config', 'G-NWCNB6N585');
    } else {
      console.log('Loading gtag script...');
      // أول مرة - قم بتحميل Google Analytics
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-NWCNB6N585";
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        console.log('gtag script loaded successfully');
        window.dataLayer = window.dataLayer || [];
        function gtag() { 
          window.dataLayer.push(arguments); 
        }
        window.gtag = gtag;
        
        // تهيئة gtag
        gtag('js', new Date());
        
        // تحديث إعدادات الموافقة
        gtag('consent', 'update', {
          'ad_storage': 'granted',
          'ad_user_data': 'granted',
          'ad_personalization': 'granted',
          'analytics_storage': 'granted'
        });
        
        // تكوين Google Analytics
        gtag('config', 'G-NWCNB6N585', {
          'page_title': document.title,
          'page_location': window.location.href,
          'send_page_view': true
        });
        
        console.log('Google Analytics configured successfully');
        
        // إرسال حدث page_view
        gtag('event', 'page_view', {
          'page_title': document.title,
          'page_location': window.location.href
        });
      };

      script.onerror = (error) => {
        console.error('Failed to load Google Analytics script:', error);
      };
    }
  };

  const handleAccept = () => {
    console.log('User accepted cookies');
    localStorage.setItem("cookie_consent", "true");
    setShowBanner(false);
    loadAnalytics();
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

