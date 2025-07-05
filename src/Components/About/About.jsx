import React from "react";
import styles from "./About.module.css";
import teamImg from "../../assets/images/About.jpg"; 
import { Link } from "react-router-dom";

const About = () => (
  <section className={styles.aboutSection} id="#about-us">
    <div className={styles.aboutContent}>
      <h2 className={styles.aboutHeadline}><span>About</span> <span className={styles.highlight}>Us</span></h2>
      <p className={styles.aboutText}>
        We're a smart, multilingual agency helping people and businesses connect with new opportunities through AI-powered tools, expert translation, and migration support. From individuals seeking a fresh start to enterprises building across borders — we build solutions that move people forward.
      </p>
      <Link to={'/about-us'}  className={styles.learnMoreBtn}>Learn more</Link>

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

export default About;
