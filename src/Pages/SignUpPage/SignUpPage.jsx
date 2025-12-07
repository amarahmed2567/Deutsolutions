import React, { useState } from "react";
import styles from "./SignUpPage.module.css";
import SignupImg from "../../assets/images/About.jpg";
import { useTranslation } from "react-i18next";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import SEO from "../../Components/Utils/SEO";

const SignUpPage = () => {
  const { t } = useTranslation();
  const services = [
    { value: "translation", label: t("signup.service.translation") },
    { value: "migration", label: t("signup.service.migration") },
    { value: "ai", label: t("signup.service.ai") },
    { value: "languageLearning", label: t("signup.service.languageLearning") },
    { value: "corporateTraining", label: t("signup.service.corporateTraining") },
    { value: "qualityAssurance", label: t("signup.service.qualityAssurance") },
    { value: "consultation", label: t("signup.service.consultation") },
    { value: "outsourcing", label: t("signup.service.outsourcing") },
    { value: "other", label: t("signup.service.other") },
  ];
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
    try {
      await addDoc(collection(db, "sign-up"), form);
      setForm({ name: "", email: "", phone: "", service: "" });
      navigate("/signup-success");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
    setIsSubmitting(false);
  };

  return (
    <>
      <SEO 
        title="Sign Up"
        titleEn="Sign Up | DEUTSOLUTIONS - Join Our Services"
        titleAr="سجل الآن | DEUTSOLUTIONS - انضم إلى خدماتنا"
        titleDe="Registrieren | DEUTSOLUTIONS - Nutzen Sie unsere Dienstleistungen"
        description="Join DEUTSOLUTIONS today! Sign up for our AI solutions, digital transformation services, German migration support, and language courses. Start your journey to success."
        descriptionEn="Join DEUTSOLUTIONS today! Sign up for our AI solutions, digital transformation services, German migration support, and language courses. Start your journey to success."
        descriptionAr="انضم إلى DEUTSOLUTIONS اليوم! سجل للحصول على حلول الذكاء الاصطناعي وخدمات التحول الرقمي ودعم الهجرة الألمانية ودورات اللغة. ابدأ رحلتك نحو النجاح."
        descriptionDe="Schließen Sie sich heute DEUTSOLUTIONS an! Registrieren Sie sich für unsere KI-Lösungen, Digitalisierungsdienstleistungen, deutsche Migrationsunterstützung und Sprachkurse. Starten Sie Ihre Erfolgsreise."
        keywords={[
          'Sign Up DEUTSOLUTIONS',
          'Register German Services',
          'Join AI Solutions',
          'German Migration Registration',
          'Digital Transformation Sign Up',
          'German Language Course Registration',
          'Business Services Registration',
          'Technology Consulting Sign Up',
          'Immigration Services Registration',
          'European Business Registration'
        ]}
        keywordsEn={[
          'Sign Up DEUTSOLUTIONS',
          'Register German Services',
          'Join AI Solutions',
          'German Migration Registration',
          'Digital Transformation Sign Up',
          'German Language Course Registration',
          'Business Services Registration',
          'Technology Consulting Sign Up',
          'Immigration Services Registration',
          'European Business Registration'
        ]}
        keywordsAr={[
          'سجل DEUTSOLUTIONS',
          'سجل الخدمات الألمانية',
          'انضم لحلول الذكاء الاصطناعي',
          'تسجيل الهجرة الألمانية',
          'سجل التحول الرقمي',
          'تسجيل دورة اللغة الألمانية',
          'تسجيل خدمات الأعمال',
          'سجل استشارات التكنولوجيا',
          'تسجيل خدمات الهجرة',
          'تسجيل الأعمال الأوروبية'
        ]}
        keywordsDe={[
          'DEUTSOLUTIONS registrieren',
          'Deutsche Dienstleistungen registrieren',
          'KI-Lösungen beitreten',
          'Deutsche Migrationsregistrierung',
          'Digitalisierung registrieren',
          'Deutschkursregistrierung',
          'Geschäftsdienstregistrierung',
          'Technologieberatung registrieren',
          'Einwanderungsdienstregistrierung',
          'Europäische Geschäftsregistrierung'
        ]}
        type="website"
      />
      <div className={styles.signupContainer}>
        <div className={styles.signupFormSection}>
          <h1 className={styles.signupTitle}>{t("signup.title")}</h1>
          <p className={styles.signupSubtitle}>{t("signup.subtitle")}</p>
        <form className={styles.signupForm} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            name="name"
            placeholder={t("signup.name")}
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder={t("signup.email")}
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            className={styles.input}
            type="tel"
            name="phone"
            placeholder={t("signup.phone")}
            value={form.phone}
            onChange={handleChange}
            required
          />
          <select
            className={styles.input}
            name="service"
            value={form.service}
            onChange={handleChange}
            required
          >
            <option value="" disabled>{t("signup.selectService")}</option>
            {services.map((s) => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
          <button className={styles.signupBtn} type="submit" disabled={isSubmitting}>
            {isSubmitting ? t("signup.submitting") : t("signup.submit")}
          </button>
        </form>
        <div className={styles.loginLink}>{t("signup.haveAccount")} <a href="#">{t("signup.login")}</a></div>
      </div>
      <div className={styles.aboutImageWrapper}>
      <div className={styles.topShape}></div>
      <div className={styles.aboutImage}>
        <img 
        className={styles.aboutVideo}
         src={SignupImg} 
          />
      </div>
      <div className={styles.bottomShape}></div>
    </div>
      </div>
    </>
  );
};

export default SignUpPage; 