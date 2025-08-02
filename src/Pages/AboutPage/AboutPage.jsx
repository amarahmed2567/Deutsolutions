import React from "react";
import About from "../../Components/About/About";
import StatsCards from "../../Components/About/StatsCards/StatsCards";
import MissionSection from "../../Components/About/MissionSection";
import styles from "./AboutPage.module.css"
import { useTranslation } from "react-i18next";
import SEO from "../../Components/Utils/SEO";

const AboutPage = ()=>{
    const { t } = useTranslation();
    return(
        <>
            <SEO 
                title="About Us"
                titleEn="About Us | DEUTSOLUTIONS - Our Mission & Values"
                titleAr="من نحن | DEUTSOLUTIONS - مهمتنا وقيمنا"
                titleDe="Über uns | DEUTSOLUTIONS - Unsere Mission & Werte"
                description="Learn about DEUTSOLUTIONS - our mission, values, and commitment to providing exceptional AI solutions, digital transformation services, and German migration support. Discover our story and expertise."
                descriptionEn="Learn about DEUTSOLUTIONS - our mission, values, and commitment to providing exceptional AI solutions, digital transformation services, and German migration support. Discover our story and expertise."
                descriptionAr="تعرف على DEUTSOLUTIONS - مهمتنا وقيمنا والتزامنا بتقديم حلول الذكاء الاصطناعي الاستثنائية وخدمات التحول الرقمي والدعم الشامل للهجرة الألمانية. اكتشف قصتنا وخبرتنا."
                descriptionDe="Erfahren Sie mehr über DEUTSOLUTIONS - unsere Mission, Werte und unser Engagement für außergewöhnliche KI-Lösungen, Digitalisierungsdienstleistungen und deutsche Migrationsunterstützung. Entdecken Sie unsere Geschichte und Expertise."
                keywords={[
                    'About DEUTSOLUTIONS',
                    'Company Mission',
                    'German Business Values',
                    'AI Expertise',
                    'Digital Transformation Team',
                    'Migration Consultants',
                    'German Business Culture',
                    'European Technology Experts',
                    'Professional Services Germany',
                    'Trusted Migration Partners'
                ]}
                keywordsEn={[
                    'About DEUTSOLUTIONS',
                    'Company Mission',
                    'German Business Values',
                    'AI Expertise',
                    'Digital Transformation Team',
                    'Migration Consultants',
                    'German Business Culture',
                    'European Technology Experts',
                    'Professional Services Germany',
                    'Trusted Migration Partners'
                ]}
                keywordsAr={[
                    'عن DEUTSOLUTIONS',
                    'مهمة الشركة',
                    'قيم الأعمال الألمانية',
                    'خبرة الذكاء الاصطناعي',
                    'فريق التحول الرقمي',
                    'مستشارو الهجرة',
                    'ثقافة الأعمال الألمانية',
                    'خبراء التكنولوجيا الأوروبية',
                    'الخدمات المهنية ألمانيا',
                    'شركاء الهجرة الموثوقون'
                ]}
                keywordsDe={[
                    'Über DEUTSOLUTIONS',
                    'Unternehmensmission',
                    'Deutsche Geschäftswerte',
                    'KI-Expertise',
                    'Digitalisierungsteam',
                    'Migrationsberater',
                    'Deutsche Geschäftskultur',
                    'Europäische Technologieexperten',
                    'Professionelle Dienstleistungen Deutschland',
                    'Vertrauenswürdige Migrationspartner'
                ]}
                type="website"
            />
            <div className={styles.AboutHeader}>
                <div>
                    <h1 className="minTeitle">{t('about.title')}</h1>
                    <p className="minSubtitle">{t('about.subtitle2')}</p>
                </div>
                <About/>
                <MissionSection />
                <StatsCards />
            </div>
        </>
    )
}

export default AboutPage