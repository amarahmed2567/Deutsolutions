import React, { useEffect } from 'react';

const AnalyticsTest = () => {
  useEffect(() => {
    // اختبار Google Analytics بعد 3 ثوان
    setTimeout(() => {
      testAnalytics();
    }, 3000);
  }, []);

  const testAnalytics = () => {
    console.log('Testing Google Analytics...');
    
    if (window.gtag) {
      console.log('✅ gtag is available');
      
      // إرسال حدث اختبار
      window.gtag('event', 'test_event', {
        'event_category': 'test',
        'event_label': 'analytics_test',
        'value': 1
      });
      
      console.log('✅ Test event sent to Google Analytics');
      
      // اختبار إرسال page_view
      window.gtag('event', 'page_view', {
        'page_title': document.title,
        'page_location': window.location.href
      });
      
      console.log('✅ Page view event sent to Google Analytics');
      
    } else {
      console.log('❌ gtag is not available');
    }
  };

  const manualTest = () => {
    console.log('Manual test triggered');
    testAnalytics();
  };

  const checkConsent = () => {
    const consent = localStorage.getItem("cookie_consent");
    console.log('Cookie consent status:', consent);
    
    if (consent === "true") {
      console.log('✅ User has consented to cookies');
    } else {
      console.log('❌ User has not consented to cookies');
    }
  };

  return (
    <div style={{ 
      position: 'fixed', 
      top: '10px', 
      right: '10px', 
      background: '#333', 
      color: 'white', 
      padding: '10px', 
      borderRadius: '5px',
      fontSize: '12px',
      zIndex: 1111111111111
    }}>
      <div>Analytics Test</div>
      <button 
        onClick={manualTest}
        style={{
          background: '#f0b90b',
          color: '#000',
          border: 'none',
          padding: '5px 10px',
          borderRadius: '3px',
          cursor: 'pointer',
          marginTop: '5px',
          marginRight: '5px'
        }}
      >
        Test GA
      </button>
      <button 
        onClick={checkConsent}
        style={{
          background: '#007bff',
          color: '#fff',
          border: 'none',
          padding: '5px 10px',
          borderRadius: '3px',
          cursor: 'pointer',
          marginTop: '5px'
        }}
      >
        Check Consent
      </button>
    </div>
  );
};

export default AnalyticsTest; 