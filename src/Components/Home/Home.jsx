import React from "react";
import { useTranslation } from "react-i18next";
import style from "./Home.module.css"
import AnimatedText from "./AnimatedSubText/AnimatedText"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import NetworkSphere from "./NetworkSphere"
const {HeroSection,HeroContent,HeroContentText,MinVarText,Subtext,StatsRow,StatsNumber,StatsNumberText,HeroImage,HerImg} = style
const Home = () => {
  const { t } = useTranslation();
    return(
        <motion.section
          className={HeroSection}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
        <div className={HeroContent}>
          <div className={HeroContentText}> 
            <h1>
              {t('home.hero.title')} <br />
            <span className={MinVarText}>{t('home.hero.min-var-text')} &nbsp;<AnimatedText/></span>
            </h1>
          </div>
          <p className={Subtext}>
            {t('home.hero.description')}
          </p>
          <Link to={'/sign-up'} className="btn-larg">{t('home.hero.cta')}</Link>
          <div className={StatsRow}>
            <div>
              <span className={StatsNumber}>100+</span><br /> <span className={StatsNumberText}>{t('home.stats.clients')}</span>
            </div>
            <div>
              <span className={StatsNumber}>500+</span><br /> <span className={StatsNumberText}>{t('home.stats.translations')}</span> 
            </div>
            <div>
              <span className={StatsNumber}>7+</span><br /> <span className={StatsNumberText}>{t('home.stats.countries')}</span> 
            </div>
          </div>
        </div>
        <div className={HeroImage}>
        {/* <DotLottieReact
         className={HerImg}
          src="https://lottie.host/dc07ab64-cce3-4fba-8d5f-8f87d218c1db/A0tSAg3i4V.lottie"
          // https://lottie.host/f57517fb-64dd-431b-b9a3-4a80d070090e/ML7CF5MMxU.lottie
          loop
          autoplay
        /> */}
         <NetworkSphere />
        </div>
      </motion.section>
    )
}
export default Home