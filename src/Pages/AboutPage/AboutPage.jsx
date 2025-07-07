import React from "react";
import About from "../../Components/About/About";
import StatsCards from "../../Components/About/StatsCards/StatsCards";
import MissionSection from "../../Components/About/MissionSection";
import styles from "./AboutPage.module.css"
import { useTranslation } from "react-i18next";

const AboutPage = ()=>{
    const { t } = useTranslation();
    return(
        <div className={styles.AboutHeader}>
    <div>
        <h1 className="minTeitle">{t('about.title')}</h1>
        <p className="minSubtitle">{t('about.subtitle2')}</p>
      </div>
        <About/>
        <MissionSection />
        <StatsCards />
        </div>
    )
}

export default AboutPage