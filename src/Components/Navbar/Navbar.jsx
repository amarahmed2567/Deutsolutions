import React, { useState,useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import Logo from "../../assets/images/logo.svg"
import styles from "./Navbar.module.css"; 

const Navbar = () => {
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
    <div className={styles.navbarBack}   style={{
        boxShadow: scrolled
          ? "0 2px 8px 1px rgba(0, 0, 0, 0.112)"
          : "none"
          }}>
    <nav className={styles.NavbarSection}>
      <div className={styles.NavbarLogo}>
        <a href="/">
        <img src={Logo} alt="DEUTSOLUTIONS logo" />
        </a>
      </div>
      <div className={`${styles.navbarLinks} ${menuOpen ? styles.active : ""}`}>
        <NavLink
          to="/"
          end
          className={({ isActive }) => isActive ? styles.active : undefined}
        >
          Home
        </NavLink>
        <NavLink
          to="/about-us"
          className={({ isActive }) => isActive ? styles.active : undefined}
        >
          About Us
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) => isActive ? styles.active : undefined}
        >
          Services
        </NavLink>
        <NavLink
          to="/contact-us"
          className={({ isActive }) => isActive ? styles.active : undefined}
        >
          Contact us
        </NavLink>
      </div>
      <div className={styles.navbarMenuIcon} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
          <motion.div
        style={{
          scaleX: scrollYProgress,
          height: "4px",
          background: "linear-gradient(90deg, #ff5e00 0%, #ffb800 100%)",
          position: "absolute",
          left: 0,
          right: 0,
          bottom:0,
          zIndex: 1000,
          transformOrigin: "0%"
        }}
      />
    </nav>
    </div>
    </>
  );
};

export default Navbar; 
