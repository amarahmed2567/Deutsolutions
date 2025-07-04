import React from "react";
import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.Footer}>
    <div className={styles.FooterContent}>
      <span>&copy; {new Date().getFullYear()} Deut. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer; 