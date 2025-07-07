import React from "react";
import About from "../../Components/About/About";
import StatsCards from "../../Components/About/StatsCards/StatsCards";
import MissionSection from "../../Components/About/MissionSection";
import styles from "./AboutPage.module.css"

const AboutPage = ()=>{
    return(
        <div className={styles.AboutHeader}>
        <About/>
        <MissionSection />
        <StatsCards />
        </div>
    )
}

export default AboutPage