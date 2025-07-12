import React, { useEffect } from 'react';

const AnalyticsLoader = () => {
  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    
    if (consent === "true") {
      loadAnalytics();
    }
  }, []);

  const loadAnalytics = () => {
    // تحقق من وجود gtag
    if (window.gtag) {
      // جاهز - قم بتحديث الإعدادات
      window.gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'analytics_storage': 'granted'
      });
      window.gtag('config', 'G-NWCNB6N585');
    } else {
      // أول مرة - قم بتحميل Google Analytics
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-NWCNB6N585";
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
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
          'page_location': window.location.href
        });
        
        console.log('Google Analytics loaded successfully');
      };

      script.onerror = () => {
        console.error('Failed to load Google Analytics');
      };
    }
  };

  return null; // This component doesn't render anything
};

export default AnalyticsLoader; 