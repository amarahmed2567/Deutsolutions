import React, { useState, useEffect } from "react";
import "./PrivacyBanner.css";

const PrivacyBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    
    localStorage.setItem("cookie_consent", "true");
    setShowBanner(false);
  
    // Google Analytics 
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-NWCNB6N585"; // <-- حط ID بتاعك هنا
    script.async = true;
    document.head.appendChild(script);
  
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-NWCNB6N585');
    };
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
