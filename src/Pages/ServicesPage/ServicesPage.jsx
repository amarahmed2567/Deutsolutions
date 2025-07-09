import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { MdTranslate, MdAirplaneTicket, MdSchool } from "react-icons/md";
import { FaRobot, FaBookOpen, FaGlobeEurope, FaCheckCircle, FaGlobe, FaFileAlt, FaSmile, FaPlane, FaProjectDiagram, FaBrain, FaUserGraduate, FaLanguage } from "react-icons/fa";
import translationImg from "../../assets/images/Trans.jpeg";
import migrationImg from "../../assets/images/migration.png";
import aiImg from "../../assets/images/ai.jpg";
import germanImg from "../../assets/images/DeutschKurs.jpg";
import { Link } from "react-router-dom";
import styles from "./ServicesPage.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const serviceData = [
  {
    img: translationImg,
    titleKey: 'services.items.translation.title',
    descKey: 'services.items.translation.description',
    btnKey: 'services.items.translation.button',
    link: "/translation",

    features: [
      { icon: <FaLanguage color="#f9b434" />, value: '100+', label: 'Languages' },
      { icon: <FaFileAlt color="#f9b434" />, value: '2,000+', label: 'Documents' },
      { icon: <FaSmile color="#f9b434" />, value: '99%', label: 'Satisfaction' },
    ]
  },
  {
    img: migrationImg,
    titleKey: 'services.items.migration.title',
    descKey: 'services.items.migration.description',
    btnKey: 'services.items.migration.button',
    link: "migration",
    features: [
      { icon: <FaGlobe color="#00c6fb" />, value: '50+', label: 'Countries' },
      { icon: <FaPlane color="#00c6fb" />, value: '500+', label: 'Applications' },
      { icon: <FaSmile color="#00c6fb" />, value: '98%', label: 'Success' },
    ]
  },
  {
    img: aiImg,
    titleKey: 'services.items.ai.title',
    descKey: 'services.items.ai.description',
    btnKey: 'services.items.ai.button',
    link: "ai",
    features: [
      { icon: <FaBrain color="#d90429" />, value: '30+', label: 'AI Projects' },
      { icon: <FaProjectDiagram color="#d90429" />, value: '10+', label: 'Years Exp.' },
      { icon: <FaSmile color="#d90429" />, value: '95%', label: 'Custom Solutions' },
    ]
  },
  {
    img: germanImg,
    titleKey: 'services.items.german.title',
    descKey: 'services.items.german.description',
    btnKey: 'services.items.german.button',
    link: "german",
    features: [
      { icon: <FaUserGraduate color="#009e60" />, value: '1,000+', label: 'Students' },
      { icon: <FaLanguage color="#009e60" />, value: 'All Levels', label: 'Courses' },
      { icon: <FaSmile color="#009e60" />, value: '99%', label: 'Satisfaction' },
    ]
  }
];

const ServicesPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className={styles.servicesContainer}>
      <div>
        <h1 className="minTeitle">{t('services.title')}</h1>
        <p className="minSubtitle">{t('services.subtitle')}</p>
      </div>
      <div className={styles.servicesGrid}>
        {serviceData.map((s, i) => (
          <div
            key={i}
            id={s.link}
            className={styles.serviceRow}
            style={{ flexDirection: i % 2 === 0 ? 'row' : 'row-reverse' }}
          >
            <div className={styles.serviceImgWrapper} data-aos={i % 2 === 0 ? 'fade-right' : 'fade-left'}>
              <img src={s.img} alt={t(s.titleKey)} className={styles.serviceImg} />
            </div>
            <div className={styles.serviceContent} data-aos={i % 2 === 0 ? 'fade-left' : 'fade-right'}>
              <div className={styles.serviceIcon} style={{ background: s.iconBg }}>{s.icon}</div>
              <div className={styles.serviceName}>{t(s.titleKey)}</div>
              <div  className={styles.serviceDesc}>
                {t(`services.items.${s.descKey.split('.')[2]}.longDescription`)}
              </div>
              <div className={styles.serviceFeatures}>
                {s.features && s.features.map((f, idx) => (
                  <div key={idx} className={styles.featureBox}>
                    <span className={styles.featureIcon}>{f.icon}</span>
                    <span className={styles.featureValue}>{f.value}</span>
                    <span className={styles.featureLabel}>{f.label}</span>
                  </div>
                ))}
              </div>
              <div className={styles.serviceDetails}>{s.details}</div>
              <Link to={s.link} className={styles.cardBtn}>{t(s.btnKey)}</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ServicesPage; 