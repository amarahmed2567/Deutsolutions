import React, { useEffect } from 'react';

const AnalyticsLoader = () => {
  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    
    if (consent === "true") {
      console.log('Consent found, loading analytics...');
      loadAnalytics();
    } else {
      console.log('No consent found, analytics not loaded');
    }
  }, []);

  const loadAnalytics = () => {
    console.log('AnalyticsLoader: Loading Google Analytics...');
    
    // تحقق من وجود gtag
    if (window.gtag) {
      console.log('AnalyticsLoader: gtag already exists, updating consent...');
      // جاهز - قم بتحديث الإعدادات
      window.gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'analytics_storage': 'granted'
      });
      window.gtag('config', 'G-NWCNB6N585');
    } else {
      console.log('AnalyticsLoader: Loading gtag script...');
      // أول مرة - قم بتحميل Google Analytics
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-NWCNB6N585";
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        console.log('AnalyticsLoader: gtag script loaded successfully');
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
        
        console.log('AnalyticsLoader: Google Analytics configured successfully');
        
        // إرسال حدث page_view
        gtag('event', 'page_view', {
          'page_title': document.title,
          'page_location': window.location.href
        });
      };

      script.onerror = (error) => {
        console.error('AnalyticsLoader: Failed to load Google Analytics script:', error);
      };
    }
  };

  return null; // This component doesn't render anything
};

export default AnalyticsLoader; 