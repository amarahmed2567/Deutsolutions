import React from "react";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Services from "../Components/Services/Services";
import StartNowSlider from "../Components/Sliders/HomeSliders/StartNowSlider/StartNowSlider";
import Testimonials from "../Components/Testimonials/Testimonials";
import { motion } from "framer-motion";
import CardsSlider from "../Components/Sliders/HomeSliders/CardsSlider/CardsSlider";

const sectionAnim = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: "easeOut" }
};

const HomePage = () => {
  return (
    <>
      <Home />
      <motion.div {...sectionAnim}><CardsSlider/></motion.div>
      <motion.div {...sectionAnim}><About/></motion.div>
      <motion.div {...sectionAnim}><Services/></motion.div>
      <motion.div {...sectionAnim}><StartNowSlider/></motion.div>
      <motion.div {...sectionAnim}><Testimonials/></motion.div>
    </>
  );
};

export default HomePage; 