import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaGlobe, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn, MdAccessTime } from "react-icons/md";
import styles from "./ContactUsPage.module.css";

const ContactUsPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "info@deutsolutions.com",
      link: "mailto:info@deutsolutions.com"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+971 4 123 4567",
      link: "tel:+97141234567"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Address",
      value: "Dubai Business Bay, UAE",
      link: "#"
    },
    {
      icon: <FaClock />,
      title: "Working Hours",
      value: "Sun-Thu: 9:00 AM - 6:00 PM",
      link: "#"
    }
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaTwitter />, href: "https://twitter.com", label: "Twitter" },
    { icon: <FaFacebook />, href: "https://facebook.com", label: "Facebook" },
    { icon: <FaInstagram />, href: "https://instagram.com", label: "Instagram" }
  ];

  return (
    <div className={styles.contactPage}>
      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{t('contact.title', 'Get in Touch')}</h1>
          <p className={styles.heroSubtitle}>
            {t('contact.subtitle', 'Ready to start your journey? Let\'s discuss how we can help you achieve your goals.')}
          </p>
        </div>
      </div>

      {/* Main Contact Section */}
      <div className={styles.mainSection}>
        <div className={styles.container}>
          {/* Contact Form */}
          <div className={styles.contactFormSection}>
            <h2 className={styles.sectionTitle}>{t('contact.form.title', 'Send us a Message')}</h2>
            <p className={styles.sectionSubtitle}>
              {t('contact.form.subtitle', 'Fill out the form below and we\'ll get back to you within 24 hours.')}
            </p>
            
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">{t('contact.form.name', 'Full Name')} *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder={t('contact.form.namePlaceholder', 'Enter your full name')}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="email">{t('contact.form.email', 'Email Address')} *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder={t('contact.form.emailPlaceholder', 'Enter your email address')}
                  />
                </div>
              </div>
              
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="phone">{t('contact.form.phone', 'Phone Number')}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder={t('contact.form.phonePlaceholder', 'Enter your phone number')}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="subject">{t('contact.form.subject', 'Subject')} *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder={t('contact.form.subjectPlaceholder', 'What is this about?')}
                  />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message">{t('contact.form.message', 'Message')} *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder={t('contact.form.messagePlaceholder', 'Tell us more about your inquiry...')}
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? t('contact.form.sending', 'Sending...') : t('contact.form.send', 'Send Message')}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className={styles.contactInfoSection}>
            <h2 className={styles.sectionTitle}>{t('contact.info.title', 'Contact Information')}</h2>
            <p className={styles.sectionSubtitle}>
              {t('contact.info.subtitle', 'Get in touch with us through any of these channels.')}
            </p>
            
            <div className={styles.contactInfoGrid}>
              {contactInfo.map((info, index) => (
                <div key={index} className={styles.contactInfoCard}>
                  <div className={styles.contactIcon}>
                    {info.icon}
                  </div>
                  <div className={styles.contactDetails}>
                    <h3>{info.title}</h3>
                    <a href={info.link} className={styles.contactLink}>
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className={styles.socialSection}>
              <h3>{t('contact.social.title', 'Follow Us')}</h3>
              <div className={styles.socialLinks}>
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className={styles.mapSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{t('contact.map.title', 'Find Us')}</h2>
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1783!2d55.2708!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDEyJzE3LjMiTiA1NcKwMTYnMTUuMCJF!5e0!3m2!1sen!2sae!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DEUTSOLUTIONS Location"
            ></iframe>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className={styles.faqSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>{t('contact.faq.title', 'Frequently Asked Questions')}</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3>{t('contact.faq.q1', 'What services do you offer?')}</h3>
              <p>{t('contact.faq.a1', 'We offer German translation, migration support, AI development, and German language coaching services.')}</p>
            </div>
            <div className={styles.faqItem}>
              <h3>{t('contact.faq.q2', 'How long does translation take?')}</h3>
              <p>{t('contact.faq.a2', 'Translation time depends on document length and complexity. We typically deliver within 1-3 business days.')}</p>
            </div>
            <div className={styles.faqItem}>
              <h3>{t('contact.faq.q3', 'Do you provide certified translations?')}</h3>
              <p>{t('contact.faq.a3', 'Yes, we provide certified translations that are accepted by German authorities and institutions.')}</p>
            </div>
            <div className={styles.faqItem}>
              <h3>{t('contact.faq.q4', 'What are your working hours?')}</h3>
              <p>{t('contact.faq.a4', 'We work Sunday to Thursday, 9:00 AM to 6:00 PM UAE time. Emergency services available 24/7.')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
