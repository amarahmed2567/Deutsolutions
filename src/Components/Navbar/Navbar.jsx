import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.svg"
import styles from "./Navbar.module.css"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.NavbarSection}>
      <div className={styles.NavbarLogo}>
        <img src={Logo} alt="DEUTSOLUTIONS logo" />
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
    </nav>
  );
};

export default Navbar; 