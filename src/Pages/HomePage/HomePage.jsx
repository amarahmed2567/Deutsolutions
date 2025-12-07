import React from "react";
import Home from "../../Components/Home/Home";
import About from "../../Components/About/About";
import Services from "../../Components/Services/Services";
import ProductsSliderHome from "../../Components/Products/ProductsSliderHome";
import StartNowSlider from "../../Components/Sliders/HomeSliders/StartNowSlider/StartNowSlider";
import Testimonials from "../../Components/Testimonials/Testimonials";
import { motion } from "framer-motion";
import CardsSlider from "../../Components/Sliders/HomeSliders/CardsSlider/CardsSlider";
import SEO from "../../Components/Utils/SEO";

const sectionAnim = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.7, ease: "easeOut" }
};

const HomePage = () => {
  return (
    <>
      <SEO 
        title="Home"
        titleEn="Home | DEUTSOLUTIONS - AI, Digital Transformation & German Migration Services"
        titleAr="الرئيسية | DEUTSOLUTIONS - حلول الذكاء الاصطناعي والتحول الرقمي وخدمات الهجرة الألمانية"
        titleDe="Startseite | DEUTSOLUTIONS - KI, Digitale Transformation & Deutsche Migrationsdienste"
        description="DEUTSOLUTIONS - Leading provider of AI solutions, digital transformation consulting, and German migration services. Transform your business and achieve your German dreams with expert guidance."
        descriptionEn="DEUTSOLUTIONS - Leading provider of AI solutions, digital transformation consulting, and German migration services. Transform your business and achieve your German dreams with expert guidance."
        descriptionAr="DEUTSOLUTIONS - المزود الرائد لحلول الذكاء الاصطناعي واستشارات التحول الرقمي وخدمات الهجرة الألمانية. حول عملك وحقق أحلامك الألمانية مع إرشادنا المتخصص."
        descriptionDe="DEUTSOLUTIONS - Führender Anbieter von KI-Lösungen, Digitalisierungsberatung und deutschen Migrationsdiensten. Transformieren Sie Ihr Unternehmen und verwirklichen Sie Ihre deutschen Träume mit unserer fachkundigen Beratung."
        keywords={[
          'AI Solutions Germany',
          'Digital Transformation Consulting',
          'German Migration Services',
          'German Immigration',
          'Business Solutions Germany',
          'Technology Consulting Europe',
          'German Work Visa',
          'German Residence Permit',
          'German Language Course',
          'European Business Solutions'
        ]}
        keywordsEn={[
          'AI Solutions Germany',
          'Digital Transformation Consulting',
          'German Migration Services',
          'German Immigration',
          'Business Solutions Germany',
          'Technology Consulting Europe',
          'German Work Visa',
          'German Residence Permit',
          'German Language Course',
          'European Business Solutions'
        ]}
        keywordsAr={[
          'حلول الذكاء الاصطناعي ألمانيا',
          'استشارات التحول الرقمي',
          'خدمات الهجرة الألمانية',
          'الهجرة الألمانية',
          'حلول الأعمال ألمانيا',
          'استشارات التكنولوجيا أوروبا',
          'تأشيرة العمل الألمانية',
          'إقامة ألمانيا',
          'دورة اللغة الألمانية',
          'حلول الأعمال الأوروبية'
        ]}
        keywordsDe={[
          'KI-Lösungen Deutschland',
          'Digitalisierungsberatung',
          'Deutsche Migrationsdienste',
          'Deutsche Einwanderung',
          'Geschäftslösungen Deutschland',
          'Technologieberatung Europa',
          'Deutsches Arbeitsvisum',
          'Deutsche Aufenthaltserlaubnis',
          'Deutschkurs',
          'Europäische Geschäftslösungen'
        ]}
        type="website"
      />
      <Home />
      <motion.div {...sectionAnim} className="ComponentsRow"><ProductsSliderHome /></motion.div>
      <motion.div {...sectionAnim} className="ComponentsRow"><Services /></motion.div>
      <motion.div {...sectionAnim} className="ComponentsRow"><About/></motion.div>
      <motion.div {...sectionAnim} className="ComponentsRow"><StartNowSlider/></motion.div>
      <motion.div {...sectionAnim} className="ComponentsRow"><Testimonials/></motion.div>
    </>
  );
};

export default HomePage; 