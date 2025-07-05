import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
import AboutUs from "./Pages/AboutUs";
import ServicesPage from "./Pages/ServicesPage";
import ContactUs from "./Pages/ContactUs";
import NotFound from "./Pages/NotFound";
import Footer from "./Components/Footer/Footer";
import "./App.css"
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <div className="AppContainer">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
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
            <Route path="" element={
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <AboutUs />
              </motion.div>
            } />
            <Route path="" element={
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <ServicesPage />
              </motion.div>
            } />
            <Route path=" " element={
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <ContactUs />
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
    </>
  );
}

export default App;
