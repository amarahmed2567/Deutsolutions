import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./About.module.css";
import teamImg from "../../assets/images/About.jpg"; 
import { Link } from "react-router-dom";

const About = () => {
  const { t } = useTranslation();
  
  return (
  <section className={styles.aboutSection} id="#about-us">
    <div className={styles.aboutContent}>
      <h2 className={styles.aboutHeadline}><span>{t('about.title').split(' ')[0]}</span> <span className={styles.highlight}>{t('about.title').split(' ')[1]}</span></h2>
      <p className={styles.aboutText}>
        {t('about.description')}
      </p>
      <Link to={'/about-us'}  className={styles.learnMoreBtn}>{t('about.learnMore')}</Link>

    </div>
    <div className={styles.aboutImageWrapper}>
      <div className={styles.topShape}></div>
      <div className={styles.aboutImage}>
        <img src={teamImg} alt="Team DEUTSOLUTIONS "  />
      </div>
      <div className={styles.bottomShape}></div>
    </div>
  </section>
  );
};

export default About;
