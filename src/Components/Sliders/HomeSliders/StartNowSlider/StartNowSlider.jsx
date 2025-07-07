import React, { useState } from 'react';
import styles from './StartNowSlider.module.css';
import { Link } from 'react-router-dom';

const StartNowSlider = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={styles.sliderContainer}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      tabIndex={0}
      style={{ outline: 'none' }}
    >
      <div className={styles.sectionBackground}>
        <div className={
          styles.gradientPill + ' ' + styles.leftPill + (hovered ? ' ' + styles.pillAnimated : '')
        }></div>
        <div className={
          styles.gradientPill + ' ' + styles.rightPill + (hovered ? ' ' + styles.pillAnimated : '')
        }></div>
      </div>
      <div className={styles.content}>
        <h2 className={styles.heading}>Ready to <span>Take the Next Step?</span></h2>
        <Link to={'/sgin-up'} className={"btn-larg" + ' Btn-small'}>Start Your Journey</Link>
      </div>
    </div>
  );
};

export default StartNowSlider;
