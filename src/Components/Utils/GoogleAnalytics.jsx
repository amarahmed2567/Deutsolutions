import React, { useEffect } from 'react';

const GoogleAnalytics = () => {
  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    
    if (consent === "true") {
      initializeGoogleAnalytics();
    }
  }, []);

  const initializeGoogleAnalytics = () => {
    // Google Analytics Measurement ID
    const GA_MEASUREMENT_ID = 'G-NWCNB6N585';
    
    console.log('Initializing Google Analytics with ID:', GA_MEASUREMENT_ID);
    
    // إنشاء dataLayer إذا لم يكن موجوداً
    window.dataLayer = window.dataLayer || [];
    
    // تعريف gtag function
    function gtag() {
      window.dataLayer.push(arguments);
    }
    
    // تعيين gtag كمتغير عام
    window.gtag = gtag;
    
    // تهيئة gtag
    gtag('js', new Date());
    
    // تحميل Google Analytics script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    
    script.onload = () => {
      console.log('Google Analytics script loaded successfully');
      
      // تكوين Google Analytics
      gtag('config', GA_MEASUREMENT_ID, {
        'page_title': document.title,
        'page_location': window.location.href,
        'send_page_view': true
      });
      
      // تحديث إعدادات الموافقة
      gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'analytics_storage': 'granted'
      });
      
      // إرسال حدث page_view
      gtag('event', 'page_view', {
        'page_title': document.title,
        'page_location': window.location.href
      });
      
      console.log('Google Analytics initialized successfully');
      
      // اختبار إرسال حدث
      setTimeout(() => {
        gtag('event', 'test_event', {
          'event_category': 'test',
          'event_label': 'analytics_initialized',
          'value': 1
        });
        console.log('Test event sent to Google Analytics');
      }, 2000);
    };
    
    script.onerror = (error) => {
      console.error('Failed to load Google Analytics script:', error);
    };
    
    // إضافة script إلى head
    document.head.appendChild(script);
  };

  return null;
};

export default GoogleAnalytics; 