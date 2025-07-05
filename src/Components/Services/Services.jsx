import React, { useRef } from "react";
import styles from "./Services.module.css";
import SwaperServicesSection from "../Swapers/HomeSwaper/SwaperServicesSection/SwaperServicesSection"


const Services = () => {
  const carouselRef = useRef(null);

  const scroll = (dir) => {
    if (!carouselRef.current) return;
    const width = carouselRef.current.offsetWidth;
    carouselRef.current.scrollBy({ left: dir * (width * 0.7), behavior: "smooth" });
  };

  return (
    <section className={styles.servicesSection} id="#services">
      <div className={styles.header}>
          <h2 className={styles.headline}>
            <span className={styles.gradient}>Services</span>
            <br />
            <span className={styles.bold}>Explore Our Core Services</span>
          </h2>
          <p className={styles.subtext}>
            From smart translation to AI-powered automation and full migration support
            we're here to make things simple, fast, and human.
          </p>
        </div>

      <div className={styles.SwaperContenar}> 
         <SwaperServicesSection/>
      </div>

    </section>
  );
};

export default Services;
