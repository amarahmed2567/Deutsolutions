import React from "react";
import styles from "./About.module.css";
import teamImg from "../../assets/images/About.jpg"; 

const About = () => (
  <section className={styles.aboutSection} id="#about-us">
    <div className={styles.aboutContent}>
      <h2 className={`scroll-animate ${styles.aboutHeadline}`}><span>About</span> <span className={styles.highlight}>Us</span></h2>
      <p className={`scroll-animate ${styles.aboutText}`}>
        We're a smart, multilingual agency helping people and businesses connect with new opportunities through AI-powered tools, expert translation, and migration support. From individuals seeking a fresh start to enterprises building across borders — we build solutions that move people forward.
      </p>
      <button className={`scroll-animate ${styles.learnMoreBtn}`}>Learn more</button>
    </div>
    <div className={`scroll-animate ${styles.aboutImageWrapper}`}>
      <div className={styles.topShape}></div>
      <div className={styles.aboutImage}>
        <img src={teamImg} alt="Team DEUTSOLUTIONS "  />
      </div>
      <div className={styles.bottomShape}></div>
    </div>
  </section>
);

export default About;
