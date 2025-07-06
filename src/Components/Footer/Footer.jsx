import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Footer.module.css";
import logo from "../../assets/images/logo.svg";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const services = [
  "AI & Digital Solutions",
  "Legal Translation",
  "German Migration",
  "Language Learning",
  "Corporate Training",
  "Quality Assurance"
];
const company = [
  "About Us",
  "Our Process",
  "Success Stories",
  "Careers",
  "Partners",
  "Blog"
];
const support = [
  "Help Center",
  "Documentation",
  "API Reference",
  "System Status",
  "Contact Support",
  "Community"
];
const legal = [
  "Privacy Policy",
  "Terms of Service",
  "Cookie Policy",
  "GDPR Compliance",
  "Data Protection",
  "Disclaimer"
];
const socialLinks = [
  { href: "https://facebook.com", icon: <FaFacebookF />, label: "Facebook" },
  { href: "https://twitter.com", icon: <FaTwitter />, label: "Twitter" },
  { href: "https://linkedin.com", icon: <FaLinkedinIn />, label: "LinkedIn" },
  { href: "https://instagram.com", icon: <FaInstagram />, label: "Instagram" },
  { href: "https://youtube.com", icon: <FaYoutube />, label: "YouTube" },
];

const languages = [
  { code: "en", label: "US EN", flag: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32"><rect x="1" y="4" width="30" height="24" rx="4" ry="4" fill="#fff"></rect><path d="M1.638,5.846H30.362c-.711-1.108-1.947-1.846-3.362-1.846H5c-1.414,0-2.65,.738-3.362,1.846Z" fill="#a62842"></path><path d="M2.03,7.692c-.008,.103-.03,.202-.03,.308v1.539H31v-1.539c0-.105-.022-.204-.03-.308H2.03Z" fill="#a62842"></path><path fill="#a62842" d="M2 11.385H31V13.231H2z"></path><path fill="#a62842" d="M2 15.077H31V16.923000000000002H2z"></path><path fill="#a62842" d="M1 18.769H31V20.615H1z"></path><path d="M1,24c0,.105,.023,.204,.031,.308H30.969c.008-.103,.031-.202,.031-.308v-1.539H1v1.539Z" fill="#a62842"></path><path d="M30.362,26.154H1.638c.711,1.108,1.947,1.846,3.362,1.846H27c1.414,0,2.65-.738,3.362-1.846Z" fill="#a62842"></path><path d="M5,4h11v12.923H1V8c0-2.208,1.792-4,4-4Z" fill="#102d5e"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg> },
  { code: "ar", label: "SA AR", flag: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32"><path d="M5,4h6V28H5c-2.208,0-4-1.792-4-4V8c0-2.208,1.792-4,4-4Z" fill="#ea3323"></path><path d="M10,20v8H27c2.209,0,4-1.791,4-4v-4H10Z"></path><path fill="#fff" d="M10 11H31V21H10z"></path><path d="M27,4H10V12H31v-4c0-2.209-1.791-4-4-4Z" fill="#317234"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg> },
  { code: "de", label: "DE DE", flag: <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32"><path fill="#cc2b1d" d="M1 11H31V21H1z"></path><path d="M5,4H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z"></path><path d="M5,20H27c2.208,0,4,1.792,4,4v4H1v-4c0-2.208,1.792-4,4-4Z" transform="rotate(180 16 24)" fill="#f8d147"></path><path d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z" opacity=".15"></path><path d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z" fill="#fff" opacity=".2"></path></svg> },
];

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div className={styles.subscribeSection}>
        <h2 className={styles.subscribeTitle}>{t('footer.subscribeTitle')}</h2>
        <p className={styles.subscribeDesc}>{t('footer.subscribeDesc')}</p>
        <form className={styles.subscribeForm} onSubmit={e => e.preventDefault()}>
          <input type="email" placeholder={t('footer.subscribePlaceholder')} className={styles.subscribeInput} />
          <button className={styles.subscribeBtn} type="submit">{t('footer.subscribeBtn')} <span>&rarr;</span></button>
        </form>
      </div>
      <div className={styles.mainFooter}>
        <div className={styles.brandCol}>
          <div className={styles.logoRow}>
            <img src={logo} alt="DEUTSOLUTIONS Logo" className={styles.logo} />
          </div>
          <div className={styles.brandDesc}>{t('footer.brandDesc')}</div>
          <div className={styles.contactInfo}>
            <div><FaEnvelope className={styles.contactIcon}/> info@deutsolutions.com</div>
            <div><FaPhone className={styles.contactIcon}/> +971 4 123 4567</div>
            <div><FaMapMarkerAlt className={styles.contactIcon}/> Dubai Business Bay, UAE</div>
          </div>
          <div className={styles.socials}>
            {socialLinks.map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className={styles.socialIcon}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>
        <div className={styles.linksCol}>
          <div className={styles.linksBlock}>
            <h4>{t('footer.services.title')}</h4>
            <ul>{t('footer.services.items', { returnObjects: true }).map(item => <li key={item}>{item}</li>)}</ul>
          </div>
          <div className={styles.linksBlock}>
            <h4>{t('footer.company.title')}</h4>
            <ul>{t('footer.company.items', { returnObjects: true }).map(item => <li key={item}>{item}</li>)}</ul>
          </div>
          <div className={styles.linksBlock}>
            <h4>{t('footer.support.title')}</h4>
            <ul>{t('footer.support.items', { returnObjects: true }).map(item => <li key={item}>{item}</li>)}</ul>
          </div>
          <div className={styles.linksBlock}>
            <h4>{t('footer.legal.title')}</h4>
            <ul>{t('footer.legal.items', { returnObjects: true }).map(item => <li key={item}>{item}</li>)}</ul>
          </div>
        </div>
      </div>
      <div className={styles.bottomFooter}>
        <span>&copy; 2025 DEUTSOLUTIONS. {t('footer.copyright')}</span>
        <div className={styles.languages}>
          {t('footer.availableIn')}
          {languages.map(lang => (
            <button
              key={lang.code}
              className={styles.langBtn + (i18n.language === lang.code ? ' ' + styles.active : '')}
              onClick={() => i18n.changeLanguage(lang.code)}
              aria-current={i18n.language === lang.code ? 'true' : undefined}
              type="button"
            >
              {lang.flag}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer; 