import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUpPage.module.css";

const TrophySVG = () => (
  <svg width="100" height="100" viewBox="0 0 120 120" fill="none">
    <circle cx="60" cy="60" r="60" fill="#fff"/>
    <g>
      {/* كأس */}
      <rect x="45" y="80" width="30" height="10" rx="4" fill="#FFC107"/>
      <rect x="50" y="90" width="20" height="8" rx="4" fill="#FFC107"/>
      <path d="M60 20 L65 35 H55 L60 20 Z" fill="#FFC107" stroke="#222" strokeWidth="2"/>
      <ellipse cx="60" cy="40" rx="25" ry="20" fill="#FFC107" stroke="#222" strokeWidth="2"/>
      <ellipse cx="60" cy="40" rx="18" ry="13" fill="#fff" opacity="0.2"/>
      <path d="M35 40 Q30 60 50 65" stroke="#222" strokeWidth="2" fill="none"/>
      <path d="M85 40 Q90 60 70 65" stroke="#222" strokeWidth="2" fill="none"/>
      {/* وجه مبتسم */}
      <circle cx="60" cy="50" r="13" fill="#FFC107"/>
      <path d="M55 55 Q60 60 65 55" stroke="#222" strokeWidth="2" fill="none"/>
      <circle cx="56" cy="50" r="1.5" fill="#222"/>
      <circle cx="64" cy="50" r="1.5" fill="#222"/>
      {/* نجوم ونقاط حول الكأس */}
      <circle cx="35" cy="30" r="3" fill="#FFC107"/>
      <circle cx="90" cy="30" r="2" fill="#FFC107"/>
      <circle cx="30" cy="60" r="2" fill="#FFC107"/>
      <circle cx="100" cy="60" r="2" fill="#FFC107"/>
      <circle cx="60" cy="15" r="2" fill="#FFC107"/>
      <rect x="25" y="35" width="2" height="6" rx="1" fill="#222"/>
      <rect x="93" y="35" width="2" height="6" rx="1" fill="#222"/>
      <rect x="60" y="10" width="2" height="6" rx="1" fill="#222"/>
      <rect x="40" y="25" width="6" height="2" rx="1" fill="#222"/>
      <rect x="80" y="25" width="6" height="2" rx="1" fill="#222"/>
    </g>
  </svg>
);

const SignupSuccess = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
        padding: "24px 8px"
      }}
    >
      <TrophySVG />
      <div style={{ fontWeight: "bold", fontSize: 20, color: "#222", margin: "18px 0 6px" }}>
        Beautifuly
      </div>
      <div style={{ fontWeight: "bold", fontSize: 22, color: "#222", marginBottom: 8 }}>
        Signup success
      </div>
      <div style={{ color: "#666", marginBottom: 24, fontSize: 15 }}>
        Thank you for always believing us
      </div>
      <button
        style={{
          background: "#fff",
          color: "#1976D2",
          border: "2px solid #1976D2",
          borderRadius: 30,
          fontWeight: "bold",
          fontSize: 18,
          padding: "10px 40px",
          marginBottom: 24,
          cursor: "pointer",
          boxShadow: "0 2px 8px #eee",
          transition: "background 0.2s, color 0.2s"
        }}
        onClick={() => navigate("/")}
        onMouseOver={e => {
          e.currentTarget.style.background = "#1976D2";
          e.currentTarget.style.color = "#fff";
        }}
        onMouseOut={e => {
          e.currentTarget.style.background = "#fff";
          e.currentTarget.style.color = "#1976D2";
        }}
      >
        Go to Home
      </button>
      {/* Pagination dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 10 }}>
        <span style={{
          width: 8, height: 8, borderRadius: "50%", background: "#222", display: "inline-block"
        }} />
        <span style={{
          width: 8, height: 8, borderRadius: "50%", background: "#FFC107", display: "inline-block"
        }} />
        <span style={{
          width: 8, height: 8, borderRadius: "50%", background: "#FFC107", display: "inline-block"
        }} />
      </div>
    </div>
  );
};

export default SignupSuccess;