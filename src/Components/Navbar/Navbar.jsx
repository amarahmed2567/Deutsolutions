import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/images/logo.svg";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={styles.navbarBack}
        style={{
          boxShadow: scrolled
            ? "0 2px 8px 1px rgba(0, 0, 0, 0.112)"
            : "none",
        }}
      >
        <nav className={styles.NavbarSection}>
          <div className={styles.NavbarLogo}>
            <a href="/">
              <img src={Logo} alt="DEUTSOLUTIONS logo" />
            </a>
          </div>
          <div className={`${styles.navbarLinks} ${menuOpen ? styles.active : ""}`}>
            <NavLink to="/" end className={({ isActive }) => (isActive ? styles.active : undefined)}>
              {t("navigation.home")}
            </NavLink>
            <NavLink to="/about-us" className={({ isActive }) => (isActive ? styles.active : undefined)}>
              {t("navigation.aboutUs")}
            </NavLink>
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setMenuOpen("services")}
              onMouseLeave={() => setMenuOpen(false)}
            >
              <NavLink
                to="/services"
                className={({ isActive }) => (isActive ? styles.active : undefined)}
                onClick={() => setMenuOpen(menuOpen === "services" ? false : "services")}
              >
                {t("navigation.services")}
              </NavLink>
              <div className={`${styles.subnav} ${(menuOpen === "services" || (menuOpen && window.innerWidth <= 768)) ? styles.show : ""}`}>
                <NavLink to="/services#translation" className={styles["subnav-link"]} onClick={() => setMenuOpen(false)}>
                  {t("services.items.translation.title")}
                </NavLink>
                <NavLink to="/services#migration" className={styles["subnav-link"]} onClick={() => setMenuOpen(false)}>
                  {t("services.items.migration.title")}
                </NavLink>
                <NavLink to="/services#ai" className={styles["subnav-link"]} onClick={() => setMenuOpen(false)}>
                  {t("services.items.ai.title")}
                </NavLink>
                <NavLink to="/services#german" className={styles["subnav-link"]} onClick={() => setMenuOpen(false)}>
                  {t("services.items.german.title")}
                </NavLink>
              </div>
            </div>
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => setMenuOpen("products")}
              onMouseLeave={() => setMenuOpen(false)}
            >
              <span
                className={styles.navLink}
                onClick={() => setMenuOpen(menuOpen === "products" ? false : "products")}
              >
                Products
              </span>
              <div className={`${styles.subnav} ${(menuOpen === "products" || (menuOpen && window.innerWidth <= 768)) ? styles.show : ""}`}>
                <NavLink to="/smart-label" className={styles["subnav-link"]} onClick={() => setMenuOpen(false)}>
                  Smart Label
                </NavLink>
              </div>
            </div>
            <NavLink to="/contact-us" className={({ isActive }) => (isActive ? styles.active : undefined)}>
              {t("navigation.contactUs")}
            </NavLink>
            <div className={styles.languageSwitcherContainer}>
              <LanguageSwitcher />
            </div>
          </div>
          <div className={styles.mobileControls}>
            <div className={styles.navbarMenuIcon} onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </div>
            <div className={styles.mobileLanguageSwitcher}>
              <LanguageSwitcher />
            </div>
          </div>
          <motion.div
            style={{
              scaleX: scrollYProgress,
              height: "4px",
              background: "linear-gradient(90deg, #ff5e00 0%, #ffb800 100%)",
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1000,
              transformOrigin: "0%",
            }}
          />
        </nav>
      </div>
    </>
  );
};

export default Navbar;
