import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import { useTranslation } from "react-i18next";
import Logo from "../../assets/images/logo.svg";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredSubmenu, setHoveredSubmenu] = useState(null);
  const [openSubmenu, setOpenSubmenu] = useState(null);

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
          <div className={`${styles.navbarLinks} ${mobileMenuOpen ? styles.active : ""}`}>
            <NavLink to="/" end className={({ isActive }) => (isActive ? styles.active : undefined)} onClick={() => setMobileMenuOpen(false)}>
              {t("navigation.home")}
            </NavLink>
            <NavLink to="/about-us" className={({ isActive }) => (isActive ? styles.active : undefined)} onClick={() => setMobileMenuOpen(false)}>
              {t("navigation.aboutUs")}
            </NavLink>
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => {
                if (window.innerWidth > 768) {
                  setHoveredSubmenu("services");
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth > 768) {
                  setHoveredSubmenu(null);
                }
              }}
            >
              <div className={styles.navLinkWithArrow}>
                <NavLink
                  to="/services"
                  className={({ isActive }) => (isActive ? styles.active : undefined)}
                  onClick={(e) => {
                    if (window.innerWidth <= 768) {
                      e.preventDefault();
                      setOpenSubmenu(openSubmenu === "services" ? null : "services");
                    }
                  }}
                >
                  {t("navigation.services")}
                </NavLink>
                <span
                  className={`${styles.arrowIcon} ${(hoveredSubmenu === "services" || openSubmenu === "services") ? styles.arrowRotated : ""}`}
                  onClick={() => {
                    if (window.innerWidth <= 768) {
                      setOpenSubmenu(openSubmenu === "services" ? null : "services");
                    }
                  }}
                >
                  <FaChevronDown />
                </span>
              </div>
              <div className={`${styles.subnav} ${(hoveredSubmenu === "services" || openSubmenu === "services") ? styles.show : ""}`}>
                <NavLink to="/services#translation" className={styles["subnav-link"]} onClick={() => {
                  setMobileMenuOpen(false);
                  setOpenSubmenu(null);
                }}>
                  {t("services.items.translation.title")}
                </NavLink>
                <NavLink to="/services#migration" className={styles["subnav-link"]} onClick={() => {
                  setMobileMenuOpen(false);
                  setOpenSubmenu(null);
                }}>
                  {t("services.items.migration.title")}
                </NavLink>
                <NavLink to="/services#ai" className={styles["subnav-link"]} onClick={() => {
                  setMobileMenuOpen(false);
                  setOpenSubmenu(null);
                }}>
                  {t("services.items.ai.title")}
                </NavLink>
                <NavLink to="/services#german" className={styles["subnav-link"]} onClick={() => {
                  setMobileMenuOpen(false);
                  setOpenSubmenu(null);
                }}>
                  {t("services.items.german.title")}
                </NavLink>
              </div>
            </div>
            <div
              style={{ position: "relative" }}
              onMouseEnter={() => {
                if (window.innerWidth > 768) {
                  setHoveredSubmenu("products");
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth > 768) {
                  setHoveredSubmenu(null);
                }
              }}
            >
              <div className={styles.navLinkWithArrow}>
                <span
                  className={styles.navLink}
                  onClick={() => {
                    if (window.innerWidth <= 768) {
                      setOpenSubmenu(openSubmenu === "products" ? null : "products");
                    }
                  }}
                >
                  {t("navigation.products")}
                </span>
                <span
                  className={`${styles.arrowIcon} ${(hoveredSubmenu === "products" || openSubmenu === "products") ? styles.arrowRotated : ""}`}
                  onClick={() => {
                    if (window.innerWidth <= 768) {
                      setOpenSubmenu(openSubmenu === "products" ? null : "products");
                    }
                  }}
                >
                  <FaChevronDown />
                </span>
              </div>
              <div className={`${styles.subnav} ${(hoveredSubmenu === "products" || openSubmenu === "products") ? styles.show : ""}`}>
                <NavLink to="/smart-label" className={styles["subnav-link"]} onClick={() => {
                  setMobileMenuOpen(false);
                  setOpenSubmenu(null);
                }}>
                  {t("navigation.smartLabel")}
                </NavLink>
              </div>
            </div>
            <NavLink to="/contact-us" className={({ isActive }) => (isActive ? styles.active : undefined)} onClick={() => setMobileMenuOpen(false)}>
              {t("navigation.contactUs")}
            </NavLink>
            <div className={styles.languageSwitcherContainer}>
              <LanguageSwitcher />
            </div>
          </div>
          <div className={styles.mobileControls}>
            <div className={styles.navbarMenuIcon} onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              if (mobileMenuOpen) {
                setOpenSubmenu(null);
              }
            }}>
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
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
