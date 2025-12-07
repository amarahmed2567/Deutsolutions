import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import ServicesPage from "./Pages/ServicesPage/ServicesPage";
import ContactUsPage from "./Pages/ContactUsPage/ContactUsPage";
import NotFound from "./Pages/NotFound/NotFound";
import PrivacyBanner from "./Cookies/PrivacyBanner"
import Footer from "./Components/Footer/Footer";
import SignupPage from "./Pages/SignUpPage/SignUpPage";
import "./App.css"
import { AnimatePresence, motion } from "framer-motion";
import ScrollToTop from "./Components/Utils/ScrollToTop";
import { useTranslation } from "react-i18next";
import LanguageInitializer from "./Components/LanguageSwitcher/LanguageInitializer";
import SignupSuccess from "./Pages/SignUpPage/SignupSuccess";
import LegalPage from './Pages/Legal/LegalPage';
import SmartLabel from './Components/Products/SmartLabel';

function App() {
  const location = useLocation();
  const {i18n} = useTranslation()
  return (
    <div lang={i18n.language}>
      <LanguageInitializer />
      <Navbar />
      <div className="AppContainer">
        <ScrollToTop />
        <AnimatePresence mode="wait">
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
            //SmartLabel Page
            <Route path="/smart-label" element={
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <SmartLabel />
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
         //signup Page
            <Route path="/sign-up" element={
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <SignupPage />
              </motion.div>
            } />
            //SignupSuccess Page
            <Route path="/signup-success" element={<SignupSuccess />} />
            //NotFound Page
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
            <Route path="/legal" element={<LegalPage />} />
            <Route path="/legal/privacy-policy" element={<LegalPage />} />
            <Route path="/legal/terms-of-service" element={<LegalPage />} />
            <Route path="/legal/cookie-policy" element={<LegalPage />} />
            <Route path="/legal/gdpr-compliance" element={<LegalPage />} />
            <Route path="/legal/data-protection" element={<LegalPage />} />
            <Route path="/legal/disclaimer" element={<LegalPage />} />
          </Routes>
        </AnimatePresence>
      </div>
      <PrivacyBanner />
      <Footer />
    </div>
  );
}

export default App;
