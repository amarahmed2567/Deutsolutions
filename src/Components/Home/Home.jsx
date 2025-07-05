import React from "react";
import style from "./Home.module.css"
import AnimatedText from "./AnimatedSubText/AnimatedText"
import Map from "../../assets/svg/map.svg"
import { motion } from "framer-motion";
const {HeroSection,HeroContent,Highlight,Subtext,CtaButton,StatsRow,StatsNumber,StatsNumberText,HeroImage} = style
const Home = () => {
    return(
        <motion.section
          className={HeroSection}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
        <div className={HeroContent}>
          <h1>
            Real impact. Real solutions.<br />
            We're here for your &nbsp; journey in&nbsp;<AnimatedText/>
          </h1>
          <p className={Subtext}>
            Professional German Translation, Immigration Support, and AI-Powered Solutions.
          </p>
          <a href="//sgin-up" className={CtaButton}>Start Your Journey</a>
          <div className={StatsRow}>
            <div>
              <span className={StatsNumber}>100+</span><br /> <span className={StatsNumberText}>Clients</span>
            </div>
            <div>
              <span className={StatsNumber}>500+</span><br /> <span className={StatsNumberText}>Translations</span> 
            </div>
            <div>
              <span className={StatsNumber}>7+</span><br /> <span className={StatsNumberText}>Countries</span> 
            </div>
          </div>
        </div>
        <div className={HeroImage}>
        <img  src={Map} alt="Map Image for Deut" />
        </div>
      </motion.section>
    )
}
export default Home