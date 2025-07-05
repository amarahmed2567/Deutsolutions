import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/images/logo.svg";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const socialLinks = [
  { href: "https://facebook.com", label: "Facebook", icon: <FaFacebookF className="icon" /> },
  { href: "https://twitter.com", label: "Twitter", icon: <FaTwitter  className="icon" /> },
  { href: "https://linkedin.com", label: "LinkedIn", icon: <FaLinkedinIn   className="icon"/> },
];

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact-us", label: "Contact" },
];

const Footer = () => (
  <footer className={styles.Footer}>
    <div className={styles.topSection}>
      <div className={styles.logoSocials}>
        <img src={logo} alt="Deut Logo" className={styles.logo} />
        <div className={styles.socials}>
          {socialLinks.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className={styles.socialIcon}>
              {s.icon}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.quickLinksSection}>
        <h4 className={styles.quickLinksTitle}>Quick Links</h4>
        <ul className={styles.quickLinks}>
          {quickLinks.map((l) => (
            <li key={l.label}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>
      </div>
    </div>
    <div className={styles.FooterContent}>
      <span>&copy; {new Date().getFullYear()} Deut. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer; 