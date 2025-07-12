import React, { useEffect, useState } from 'react';

const GoogleAnalyticsDebug = () => {
  const [debugInfo, setDebugInfo] = useState({});

  useEffect(() => {
    // اختبار Google Analytics بعد تحميل الصفحة
    setTimeout(() => {
      testGoogleAnalytics();
    }, 1000);
  }, []);

  const testGoogleAnalytics = () => {
    console.log('🔍 Testing Google Analytics...');
    
    const info = {
      gtagAvailable: !!window.gtag,
      dataLayerAvailable: !!window.dataLayer,
      consent: localStorage.getItem("cookie_consent"),
      currentUrl: window.location.href,
      pageTitle: document.title,
      userAgent: navigator.userAgent
    };
    
    setDebugInfo(info);
    console.log('Debug Info:', info);
    
    if (window.gtag) {
      console.log('✅ gtag is available');
      
      // اختبار إرسال حدث
      window.gtag('event', 'debug_test', {
        'event_category': 'debug',
        'event_label': 'analytics_test',
        'value': 1,
        'custom_parameter': 'test_value'
      });
      
      console.log('✅ Debug event sent');
      
      // اختبار إرسال page_view
      window.gtag('event', 'page_view', {
        'page_title': document.title,
        'page_location': window.location.href,
        'page_referrer': document.referrer
      });
      
      console.log('✅ Page view event sent');
      
    } else {
      console.log('❌ gtag is not available');
    }
  };

  const sendTestEvent = () => {
    if (window.gtag) {
      window.gtag('event', 'manual_test', {
        'event_category': 'manual',
        'event_label': 'user_clicked_test',
        'value': 1
      });
      console.log('✅ Manual test event sent');
    }
  };

  const checkDataLayer = () => {
    console.log('DataLayer contents:', window.dataLayer);
  };

  const clearConsent = () => {
    localStorage.removeItem("cookie_consent");
    console.log('✅ Consent cleared');
    window.location.reload();
  };

  return (
    <div style={{ 
      position: 'fixed', 
      top: '10px', 
      left: '10px', 
      background: '#000', 
      color: 'white', 
      padding: '15px', 
      borderRadius: '5px',
      fontSize: '12px',
      zIndex: 111111111,
      maxWidth: '300px'
    }}>
      <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>GA Debug</div>
      
      <div style={{ marginBottom: '10px' }}>
        <div>gtag: {debugInfo.gtagAvailable ? '✅' : '❌'}</div>
        <div>dataLayer: {debugInfo.dataLayerAvailable ? '✅' : '❌'}</div>
        <div>Consent: {debugInfo.consent || 'none'}</div>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <button 
          onClick={testGoogleAnalytics}
          style={{
            background: '#f0b90b',
            color: '#000',
            border: 'none',
            padding: '5px 10px',
            borderRadius: '3px',
            cursor: 'pointer',
            fontSize: '11px'
          }}
        >
          Test GA
        </button>
        
        <button 
          onClick={sendTestEvent}
          style={{
            background: '#28a745',
            color: '#fff',
            border: 'none',
            padding: '5px 10px',
            borderRadius: '3px',
            cursor: 'pointer',
            fontSize: '11px'
          }}
        >
          Send Event
        </button>
        
        <button 
          onClick={checkDataLayer}
          style={{
            background: '#007bff',
            color: '#fff',
            border: 'none',
            padding: '5px 10px',
            borderRadius: '3px',
            cursor: 'pointer',
            fontSize: '11px'
          }}
        >
          Check DataLayer
        </button>
        
        <button 
          onClick={clearConsent}
          style={{
            background: '#dc3545',
            color: '#fff',
            border: 'none',
            padding: '5px 10px',
            borderRadius: '3px',
            cursor: 'pointer',
            fontSize: '11px'
          }}
        >
          Clear Consent
        </button>
      </div>
    </div>
  );
};

export default GoogleAnalyticsDebug; 