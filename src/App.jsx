import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";
import ContactUsPage from "./Pages/ContactUsPage/ContactUsPage";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Components/Footer/Footer";
import "./App.css"
import { AnimatePresence, motion } from "framer-motion";
import ScrollToTop from "./Components/Utils/ScrollToTop";
import { useTranslation } from "react-i18next";

function App() {
  const location = useLocation();
  const {i18n} = useTranslation()
  return (
    <div lang={i18n.language}>
      <Navbar />
      <div className="AppContainer">
        <AnimatePresence mode="wait">
        <ScrollToTop />
          <Routes location={location} key={location.pathname}>

            //HomePage
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <HomePage />
              </motion.div>
            } />
            //AboutPage
            <Route path="about-us" element={
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <AboutPage />
              </motion.div>
            } />
            //ServicesPage
            <Route path="services" element={
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <ServicesPage />
              </motion.div>
            } />
            //ContactUs Page
            <Route path="/contact-us" element={
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <ContactUsPage />
              </motion.div>
            } />
            <Route path="*" element={
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <NotFound />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}

export default App;
