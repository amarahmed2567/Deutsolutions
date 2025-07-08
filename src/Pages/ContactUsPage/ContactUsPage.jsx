import React, { useState } from "react";
import styles from "./ContactUsPage.module.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1000);
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactContentRow}>
        {/* Social Media Column */}
        <div className={styles.socialColumn}>
          <h2 className={styles.socialTitle}>Connect with us</h2>
          <div className={styles.socialIconsRow}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={`${styles.socialIcon} ${styles.facebook}`}> <FaFacebookF /> </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={`${styles.socialIcon} ${styles.instagram}`}> <FaInstagram /> </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={`${styles.socialIcon} ${styles.linkedin}`}> <FaLinkedinIn /> </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={`${styles.socialIcon} ${styles.twitter}`}> <FaTwitter /> </a>
          </div>
        </div>
        {/* Contact Form Column */}
        <div className={styles.formColumn}>
          <h1 className={styles.formTitle}>Contact Us</h1>
          <form className={styles.contactFormModern} onSubmit={handleSubmit}>
            <input
              className={styles.formInput}
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              required
            />
            <input
              className={styles.formInput}
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              required
            />
            <input
              className={styles.formInput}
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Subject"
              required
            />
            <textarea
              className={styles.formTextarea}
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Message"
              rows={4}
              required
            ></textarea>
            <button 
              className={styles.gradientBtn} 
              type="submit" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
      {/* Map Section */}
      <div className={styles.mapSection}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1783!2d55.2708!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzE3LjMiTiA1NcKwMTYnMTUuMCJF!5e0!3m2!1sen!2sae!4v1234567890"
          width="100%"
          height="340"
          style={{ border: 0, borderRadius: '18px', boxShadow: '0 4px 24px rgba(0,0,0,0.07)' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="DEUTSOLUTIONS Location"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUsPage;
