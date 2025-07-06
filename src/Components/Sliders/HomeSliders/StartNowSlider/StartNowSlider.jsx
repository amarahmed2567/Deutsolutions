import React from 'react';
import styles from './StartNowSlider.module.css';
import { Link } from 'react-router-dom';

const StartNowSlider = () => (
  <div className={styles.sliderContainer}>
     <div className={styles.sectionBackground}>
        <div className={styles.gradientPill + ' ' + styles.leftPill}></div>
        <div className={styles.gradientPill + ' ' + styles.rightPill}></div>
     </div>
    <div className={styles.content}>
      <h2 className={styles.heading}>Ready to <span>Take the Next Step?</span></h2>
      
      <Link to={'/sgin-up'}  className="Btn-small">Start Your Journey</Link>
    </div>
  </div>
);

export default StartNowSlider;
