import React from "react";
import { useTranslation } from "react-i18next";
import { MdTranslate, MdAirplaneTicket, MdSchool } from "react-icons/md";
import { FaRobot, FaBookOpen, FaGlobeEurope } from "react-icons/fa";
import translationImg from "../../assets/images/Trans.jpeg";
import migrationImg from "../../assets/images/migration.png";
import aiImg from "../../assets/images/ai.jpg";
import germanImg from "../../assets/images/DeutschKurs.jpg";
import { Link } from "react-router-dom";
import styles from "./ServicesPage.module.css";

const serviceData = [
  {
    icon: <MdTranslate />,
    iconBg: 'linear-gradient(63.61deg, #F9B434 14.16%, #E90004 86.73%)',
    img: translationImg,
    titleKey: 'services.items.translation.title',
    descKey: 'services.items.translation.description',
    btnKey: 'services.items.translation.button',
    link: "/translation",
    details: 'We provide certified and culturally accurate translation services for legal, technical, and business documents. Our team ensures your message is clear and effective in Arabic, English, and German.'
  },
  {
    icon: <FaGlobeEurope />,
    iconBg: 'linear-gradient(63.61deg, #00c6fb 14.16%, #005bea 86.73%)',
    img: migrationImg,
    titleKey: 'services.items.migration.title',
    descKey: 'services.items.migration.description',
    btnKey: 'services.items.migration.button',
    link: "/migration",
    details: 'From visa guidance to document preparation, we support you at every step of your migration journey to Germany. Our experts make the process smooth and stress-free.'
  },
  {
    icon: <FaRobot />,
    iconBg: 'linear-gradient(63.61deg, #d90429 14.16%, #ff6600 86.73%)',
    img: aiImg,
    titleKey: 'services.items.ai.title',
    descKey: 'services.items.ai.description',
    btnKey: 'services.items.ai.button',
    link: "/ai",
    details: 'We build custom AI agents and automation tools to help your business save time, reduce costs, and deliver better customer experiences. Let us help you innovate.'
  },
  {
    icon: <FaBookOpen />,
    iconBg: 'linear-gradient(63.61deg, #009e60 14.16%, #00c853 86.73%)',
    img: germanImg,
    titleKey: 'services.items.german.title',
    descKey: 'services.items.german.description',
    btnKey: 'services.items.german.button',
    link: "/german",
    details: 'Our German language coaching is designed for all levels, with a focus on practical communication and cultural understanding. Start your language journey with us.'
  },
  {
    icon: <MdSchool />,
    iconBg: 'linear-gradient(63.61deg, #f7971e 14.16%, #ffd200 86.73%)',
    img: germanImg,
    titleKey: 'services.items.education.title',
    descKey: 'services.items.education.description',
    btnKey: 'services.items.education.button',
    link: "/education",
    details: 'Get expert advice and support for studying in Germany and Europe, from choosing the right university to preparing your application.'
  }
];

const ServicesPage = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.servicesContainer}>
      <h1 className={styles.servicesTitle}>{t('services.title')}</h1>
      <p className={styles.servicesSubtitle}>{t('services.subtitle')}</p>
      <div className={styles.servicesGrid}>
        {serviceData.map((s, i) => (
          <div key={i} className={styles.serviceCard}>
            <img src={s.img} alt={t(s.titleKey)} className={styles.serviceImg} />
            <div className={styles.serviceIcon} style={{background: s.iconBg}}>{s.icon}</div>
            <div className={styles.serviceName}>{t(s.titleKey)}</div>
            <div className={styles.serviceDesc}>{t(s.descKey)}</div>
            <div className={styles.serviceDetails}>{s.details}</div>
            <Link to={s.link} className={styles.cardBtn}>{t(s.btnKey)}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ServicesPage; 