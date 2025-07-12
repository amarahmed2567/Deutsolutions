import React, { useState, useEffect } from "react";
import "./PrivacyBanner.css";

const PrivacyBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

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
    if (window.gtag) {
      // جاهز
      window.gtag('config', 'G-NWCNB6N585');
    } else {
      // أول مرة
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-NWCNB6N585";
      script.async = true;
      document.head.appendChild(script);

      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        function gtag() { window.dataLayer.push(arguments); }
        window.gtag = gtag; // لحفظه لاستخدام لاحق
        gtag('js', new Date());
        gtag('consent', 'update', {
          'ad_storage': 'granted',
          'ad_user_data': 'granted',
          'ad_personalization': 'granted',
          'analytics_storage': 'granted'
        });
        gtag('config', 'G-NWCNB6N585');
      };
    }
  };

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "true");
    setShowBanner(false);
    loadAnalytics();
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner">
      <p>
        نحن نستخدم ملفات تعريف الارتباط لتحسين تجربتك. باستخدام الموقع، فإنك توافق على ذلك.
      </p>
      <button onClick={handleAccept}>موافق</button>
    </div>
  );
};

export default PrivacyBanner;

