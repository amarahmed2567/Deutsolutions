import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Testimonials.module.css";
import SwaperTestimonials from "../Swapers/HomeSwaper/SwapeTestimonials/SwaperTestimonials";

const Testimonials = () => {
  const { t } = useTranslation();
  
  const testimonials = t('testimonials.items', { returnObjects: true });
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.header}>
        <div className={styles.title}>
          <span className={styles.gradientText}>{t('testimonials.title')}</span>
        </div>
        <div className={styles.heading}>{t('testimonials.subtitle')}</div>
        <div className={styles.subtitle}>
          {t('testimonials.description')}
        </div>
      </div>
        <SwaperTestimonials/>
    </section>
  );
};

export default Testimonials;
