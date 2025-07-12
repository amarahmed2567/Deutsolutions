import React, { useEffect } from 'react';

const GoogleAnalytics = () => {
  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    
    if (consent === "true") {
      console.log('GoogleAnalytics: Consent found, enabling analytics...');
      enableAnalytics();
    } else {
      console.log('GoogleAnalytics: No consent found, analytics disabled');
    }
  }, []);

  const enableAnalytics = () => {
    console.log('GoogleAnalytics: Enabling Google Analytics...');
    
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
      
      console.log('GoogleAnalytics: Google Analytics enabled successfully');
      
      // اختبار إرسال حدث
      setTimeout(() => {
        window.gtag('event', 'test_event', {
          'event_category': 'test',
          'event_label': 'analytics_initialized',
          'value': 1
        });
        console.log('GoogleAnalytics: Test event sent to Google Analytics');
      }, 2000);
    } else {
      console.error('GoogleAnalytics: gtag not found');
    }
  };

  return null;
};

export default GoogleAnalytics; 