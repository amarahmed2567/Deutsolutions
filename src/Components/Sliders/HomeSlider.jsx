import React from 'react';
import styles from './HomeSlider.module.css';
import { Link } from 'react-router-dom';

const HomeSlider = () => (
  <div className={styles.sliderContainer}>
     <div className={styles.sectionBackground}></div>
    <div className={styles.gradientPill + ' ' + styles.leftPill}></div>
    <div className={styles.content}>
      <h2 className={styles.heading}>Ready to <span>Take the Next Step?</span></h2>
      
      <Link to={'/sgin-up'}  className={styles.ctaButton}>Start Your Journey</Link>
    </div>
    <div className={styles.gradientPill + ' ' + styles.rightPill}></div>
  </div>
);

export default HomeSlider;
