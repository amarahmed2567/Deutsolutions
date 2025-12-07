import React from "react";
import { useTranslation } from "react-i18next";
import { FaBriefcase, FaGraduationCap, FaUsers, FaHeart, FaRocket, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./CareersPage.module.css";
import SEO from "../../Components/Utils/SEO";

const CareersPage = () => {
  const { t } = useTranslation();
  
  const openPositions = [
    {
      title: "Senior AI Developer",
      department: "Technology",
      location: "Dubai, UAE / Remote",
      type: "Full-time"
    },
    {
      title: "German Language Instructor",
      department: "Education",
      location: "Dubai, UAE",
      type: "Part-time / Full-time"
    },
    {
      title: "Migration Consultant",
      department: "Consulting",
      location: "Dubai, UAE",
      type: "Full-time"
    },
    {
      title: "Digital Transformation Specialist",
      department: "Technology",
      location: "Dubai, UAE / Remote",
      type: "Full-time"
    },
    {
      title: "Business Development Manager",
      department: "Sales",
      location: "Dubai, UAE",
      type: "Full-time"
    },
    {
      title: "Quality Assurance Analyst",
      department: "Quality",
      location: "Dubai, UAE / Remote",
      type: "Full-time"
    }
  ];

  const benefits = [
    { icon: <FaRocket />, title: "Career Growth", description: "Opportunities for professional development and advancement" },
    { icon: <FaGlobe />, title: "Global Exposure", description: "Work with international clients and diverse projects" },
    { icon: <FaGraduationCap />, title: "Learning & Development", description: "Continuous training and skill enhancement programs" },
    { icon: <FaHeart />, title: "Work-Life Balance", description: "Flexible working hours and remote work options" },
    { icon: <FaUsers />, title: "Collaborative Culture", description: "Join a supportive and innovative team environment" },
    { icon: <FaBriefcase />, title: "Competitive Benefits", description: "Attractive compensation and comprehensive benefits package" }
  ];
  
  return (
    <>
      <SEO 
        title="Careers"
        titleEn="Careers | DEUTSOLUTIONS - Join Our Team"
        titleAr="الوظائف | DEUTSOLUTIONS - انضم إلى فريقنا"
        titleDe="Karriere | DEUTSOLUTIONS - Werden Sie Teil unseres Teams"
        description="Join DEUTSOLUTIONS and be part of a dynamic team driving innovation in AI, digital transformation, and German migration services. Explore career opportunities and grow with us."
        descriptionEn="Join DEUTSOLUTIONS and be part of a dynamic team driving innovation in AI, digital transformation, and German migration services. Explore career opportunities and grow with us."
        descriptionAr="انضم إلى DEUTSOLUTIONS وكن جزءًا من فريق ديناميكي يقود الابتكار في الذكاء الاصطناعي والتحول الرقمي وخدمات الهجرة الألمانية. استكشف فرص العمل ونم معنا."
        descriptionDe="Werden Sie Teil von DEUTSOLUTIONS und einem dynamischen Team, das Innovation in KI, Digitalisierung und deutschen Migrationsdiensten vorantreibt. Erkunden Sie Karrieremöglichkeiten und wachsen Sie mit uns."
        keywords={[
          'DEUTSOLUTIONS Careers',
          'Jobs at DEUTSOLUTIONS',
          'Career Opportunities Germany',
          'AI Jobs',
          'Digital Transformation Careers',
          'Work in Dubai'
        ]}
        keywordsEn={[
          'DEUTSOLUTIONS Careers',
          'Jobs at DEUTSOLUTIONS',
          'Career Opportunities Germany',
          'AI Jobs',
          'Digital Transformation Careers',
          'Work in Dubai'
        ]}
        keywordsAr={[
          'وظائف DEUTSOLUTIONS',
          'الوظائف في DEUTSOLUTIONS',
          'فرص العمل ألمانيا',
          'وظائف الذكاء الاصطناعي',
          'وظائف التحول الرقمي',
          'العمل في دبي'
        ]}
        keywordsDe={[
          'DEUTSOLUTIONS Karriere',
          'Jobs bei DEUTSOLUTIONS',
          'Karrieremöglichkeiten Deutschland',
          'KI-Jobs',
          'Digitalisierungskarrieren',
          'Arbeiten in Dubai'
        ]}
        type="website"
      />
      <div className={styles.pageContainer}>
        <div>
          <h1 className="minTeitle">{t('footer.company.items.3')}</h1>
          <p className="minSubtitle">{t('careers.subtitle', { defaultValue: 'Join our innovative team' })}</p>
        </div>
        
        <div className={styles.introSection}>
          <p className={styles.introText}>
            At DEUTSOLUTIONS, we're always looking for talented individuals who share our passion for excellence and innovation. Join us in shaping the future of AI, digital transformation, and German migration services. Be part of a team that values creativity, collaboration, and continuous learning.
          </p>
        </div>

        <div className={styles.benefitsSection}>
          <h2 className={styles.sectionTitle}>Why Join DEUTSOLUTIONS?</h2>
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>{benefit.icon}</div>
                <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                <p className={styles.benefitDescription}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.positionsSection}>
          <h2 className={styles.sectionTitle}>Open Positions</h2>
          <div className={styles.positionsGrid}>
            {openPositions.map((position, index) => (
              <div key={index} className={styles.positionCard}>
                <div className={styles.positionHeader}>
                  <h3 className={styles.positionTitle}>{position.title}</h3>
                  <span className={styles.positionType}>{position.type}</span>
                </div>
                <div className={styles.positionDetails}>
                  <div className={styles.detailItem}>
                    <strong>Department:</strong> {position.department}
                  </div>
                  <div className={styles.detailItem}>
                    <strong>Location:</strong> {position.location}
                  </div>
                </div>
                <Link to="/contact-us" className={styles.applyBtn}>
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>Don't See a Position That Fits?</h2>
          <p className={styles.ctaText}>
            We're always interested in connecting with talented professionals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Link to="/contact-us" className={styles.ctaButton}>
            Send Your Resume
          </Link>
        </div>
      </div>
    </>
  );
};

export default CareersPage;


