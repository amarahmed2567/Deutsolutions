import React from "react";
import styles from "./SmartLabel.module.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ProductsVideo from "./ProductsVideo"
import SEO from "../Utils/SEO";

const SmartLabel = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title="Smart Label"
        titleEn="Smart Label | DEUTSOLUTIONS - Dynamic Pricing Solution"
        titleAr="العلامة الذكية | DEUTSOLUTIONS - حل التسعير الديناميكي"
        titleDe="Smart Label | DEUTSOLUTIONS - Dynamische Preisgestaltungslösung"
        description="DEUTSOLUTIONS Smart Label - Revolutionary dynamic pricing solution for retail. Update prices instantly across all locations with our innovative e-ink display technology."
        descriptionEn="DEUTSOLUTIONS Smart Label - Revolutionary dynamic pricing solution for retail. Update prices instantly across all locations with our innovative e-ink display technology."
        descriptionAr="DEUTSOLUTIONS Smart Label - حل تسعير ديناميكي ثوري للبيع بالتجزئة. قم بتحديث الأسعار فورًا عبر جميع المواقع باستخدام تقنية عرض الحبر الإلكتروني المبتكرة."
        descriptionDe="DEUTSOLUTIONS Smart Label - Revolutionäre dynamische Preisgestaltungslösung für den Einzelhandel. Aktualisieren Sie Preise sofort an allen Standorten mit unserer innovativen E-Ink-Display-Technologie."
        keywords={[
          'Smart Label',
          'Dynamic Pricing',
          'E-ink Display',
          'Retail Technology',
          'Digital Price Tags',
          'Electronic Shelf Labels',
          'Retail Automation',
          'Price Management System',
          'Smart Retail Solutions',
          'E-commerce Pricing'
        ]}
        keywordsEn={[
          'Smart Label',
          'Dynamic Pricing',
          'E-ink Display',
          'Retail Technology',
          'Digital Price Tags',
          'Electronic Shelf Labels',
          'Retail Automation',
          'Price Management System',
          'Smart Retail Solutions',
          'E-commerce Pricing'
        ]}
        keywordsAr={[
          'العلامة الذكية',
          'التسعير الديناميكي',
          'عرض الحبر الإلكتروني',
          'تكنولوجيا البيع بالتجزئة',
          'علامات الأسعار الرقمية',
          'ملصقات الرف الإلكترونية',
          'أتمتة البيع بالتجزئة',
          'نظام إدارة الأسعار',
          'حلول البيع بالتجزئة الذكية',
          'تسعير التجارة الإلكترونية'
        ]}
        keywordsDe={[
          'Smart Label',
          'Dynamische Preisgestaltung',
          'E-Ink-Display',
          'Einzelhandelstechnologie',
          'Digitale Preisschilder',
          'Elektronische Regaletiketten',
          'Einzelhandelsautomatisierung',
          'Preisverwaltungssystem',
          'Intelligente Einzelhandelslösungen',
          'E-Commerce-Preisgestaltung'
        ]}
        type="product"
      />
    <div className={styles.smartLabelPage} id="smart-label">
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            {t("smartLabel.hero.title")}
          </h1>
          <p className={styles.heroSubtitle}>
            {t("smartLabel.hero.subtitle")}
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.intro}>
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <div className={styles.introText}>
              <h2>{t("smartLabel.intro.title")}</h2>
              <p>{t("smartLabel.intro.text")}</p>
            </div>
            <div className={styles.introImage}>
              <img
                src="/media/smart-label/images/IntroImage.jpg"
                alt={t("smartLabel.intro.imageAlt")}
              />
            </div>
          </div>
        </div>
      </section>

    {/* products video */}
    <ProductsVideo />

      {/* Display Gallery */}
      <section className={styles.gallery}>
        <div className={styles.container}>
          <h2>{t("smartLabel.gallery.title")}</h2>
          <div className={styles.galleryGrid}>
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className={styles.galleryItem}>
                <img
                  src={`/media/smart-label/images/${num}.jpg`}
                  alt={`${t("smartLabel.gallery.imageAltBase")} ${num}`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className={styles.videoSection}>
        <div className={styles.container}>
          <h2>{t("smartLabel.video.title")}</h2>
          <p className={styles.videoIntro}>
            {t("smartLabel.video.intro")}
          </p>
          <div className={styles.videoWrapper}>
            <video 
              controls 
              className={styles.video}
              title={t("smartLabel.video.title")}
              aria-label={t("smartLabel.video.title")}
            >
              <source src="/media/smart-label/videos/video.mp4" type="video/mp4" />
              {t("smartLabel.video.fallback")}
            </video>
          </div>
          <div className={styles.ctaCenter}>
            <NavLink to="/contact-us" className={styles.cta}>
              {t("smartLabel.video.cta")}
            </NavLink>
          </div>
        </div>
      </section>

      {/* Benefits Table */}
      <section className={styles.benefits}>
        <div className={styles.container}>
          <h2>{t("smartLabel.benefits.title")}</h2>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>{t("smartLabel.benefits.table.feature")}</th>
                  <th>{t("smartLabel.benefits.table.oldPaperTags")}</th>
                  <th>{t("smartLabel.benefits.table.smartLabels")}</th>
                  <th>{t("smartLabel.benefits.table.impact")}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>
                      {t("smartLabel.benefits.table.rows.pricingAccuracy.label")}
                    </strong>
                  </td>
                  <td>{t("smartLabel.benefits.table.rows.pricingAccuracy.old")}</td>
                  <td>{t("smartLabel.benefits.table.rows.pricingAccuracy.smart")}</td>
                  <td>{t("smartLabel.benefits.table.rows.pricingAccuracy.impact")}</td>
                </tr>
                <tr>
                  <td>
                    <strong>
                      {t("smartLabel.benefits.table.rows.priceUpdates.label")}
                    </strong>
                  </td>
                  <td>{t("smartLabel.benefits.table.rows.priceUpdates.old")}</td>
                  <td>{t("smartLabel.benefits.table.rows.priceUpdates.smart")}</td>
                  <td>{t("smartLabel.benefits.table.rows.priceUpdates.impact")}</td>
                </tr>
                <tr>
                  <td>
                    <strong>
                      {t("smartLabel.benefits.table.rows.laborCost.label")}
                    </strong>
                  </td>
                  <td>{t("smartLabel.benefits.table.rows.laborCost.old")}</td>
                  <td>{t("smartLabel.benefits.table.rows.laborCost.smart")}</td>
                  <td>{t("smartLabel.benefits.table.rows.laborCost.impact")}</td>
                </tr>
                <tr>
                  <td>
                    <strong>
                      {t("smartLabel.benefits.table.rows.dataDisplay.label")}
                    </strong>
                  </td>
                  <td>{t("smartLabel.benefits.table.rows.dataDisplay.old")}</td>
                  <td>{t("smartLabel.benefits.table.rows.dataDisplay.smart")}</td>
                  <td>{t("smartLabel.benefits.table.rows.dataDisplay.impact")}</td>
                </tr>
                <tr>
                  <td>
                    <strong>
                      {t("smartLabel.benefits.table.rows.shelfLife.label")}
                    </strong>
                  </td>
                  <td>{t("smartLabel.benefits.table.rows.shelfLife.old")}</td>
                  <td>{t("smartLabel.benefits.table.rows.shelfLife.smart")}</td>
                  <td>{t("smartLabel.benefits.table.rows.shelfLife.impact")}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Complete Solution */}
      <section className={styles.solution}>
        <div className={styles.container}>
          <h2>{t("smartLabel.solution.title")}</h2>
          <p className={styles.solutionIntro}>
            {t("smartLabel.solution.intro")}
          </p>
          <div className={styles.solutionGrid}>
            <div className={styles.solutionCard}>
              <h3>{t("smartLabel.solution.cards.consulting.title")}</h3>
              <p>{t("smartLabel.solution.cards.consulting.text")}</p>
            </div>
            <div className={styles.solutionCard}>
              <h3>{t("smartLabel.solution.cards.hardware.title")}</h3>
              <p>{t("smartLabel.solution.cards.hardware.text")}</p>
            </div>
            <div className={styles.solutionCard}>
              <h3>{t("smartLabel.solution.cards.software.title")}</h3>
              <p>{t("smartLabel.solution.cards.software.text")}</p>
            </div>
            <div className={styles.solutionCard}>
              <h3>{t("smartLabel.solution.cards.support.title")}</h3>
              <p>{t("smartLabel.solution.cards.support.text")}</p>
            </div>
          </div>
          <div className={styles.solutionImage}>
            <img
              src="/media/smart-label/images/Solution.jpg"
              alt={t("smartLabel.solution.imageAlt")}
            />
          </div>
          <div className={styles.ctaCenter}>
            <NavLink to="/contact-us" className={styles.cta}>
              {t("smartLabel.solution.cta")}
            </NavLink>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className={styles.whyChoose}>
        <div className={styles.container}>
          <h2>{t("smartLabel.whyChoose.title")}</h2>
          <p className={styles.whyIntro}>
            {t("smartLabel.whyChoose.intro")}
          </p>
          
          <div className={styles.featureList}>
            <div className={styles.feature}>
              <h3>{t("smartLabel.whyChoose.features.dynamicPricing.title")}</h3>
              <p>{t("smartLabel.whyChoose.features.dynamicPricing.text")}</p>
              <ul>
                {t("smartLabel.whyChoose.features.dynamicPricing.items", {
                  returnObjects: true,
                }).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.feature}>
              <h3>{t("smartLabel.whyChoose.features.reliability.title")}</h3>
              <p>{t("smartLabel.whyChoose.features.reliability.text")}</p>
              <ul>
                {t("smartLabel.whyChoose.features.reliability.items", {
                  returnObjects: true,
                }).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.feature}>
              <h3>{t("smartLabel.whyChoose.features.integration.title")}</h3>
              <p>{t("smartLabel.whyChoose.features.integration.text")}</p>
              <ul>
                {t("smartLabel.whyChoose.features.integration.items", {
                  returnObjects: true,
                }).map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className={styles.downloads}>
        <div className={styles.container}>
          <h2>{t("smartLabel.downloads.title")}</h2>
          <p className={styles.downloadsIntro}>
            {t("smartLabel.downloads.intro")}
          </p>
          <div className={styles.downloadGrid}>
            <a href="/media/smart-label/docs/Smart Label Flyer.pdf" target="_blank" rel="noopener noreferrer" className={styles.downloadCard}>
              <div className={styles.downloadIcon}>📄</div>
              <h3>{t("smartLabel.downloads.flyer.title")}</h3>
              <p>{t("smartLabel.downloads.flyer.text")}</p>
            </a>
            <a href="/media/smart-label/docs/Smart Label Presentation.pdf" target="_blank" rel="noopener noreferrer" className={styles.downloadCard}>
              <div className={styles.downloadIcon}>📊</div>
              <h3>{t("smartLabel.downloads.presentation.title")}</h3>
              <p>{t("smartLabel.downloads.presentation.text")}</p>
            </a>
            <a href="/media/smart-label/docs/Smart Label Technical.pdf" target="_blank" rel="noopener noreferrer" className={styles.downloadCard}>
              <div className={styles.downloadIcon}>⚙️</div>
              <h3>{t("smartLabel.downloads.technical.title")}</h3>
              <p>{t("smartLabel.downloads.technical.text")}</p>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <div className={styles.container}>
          <h2>{t("smartLabel.finalCta.title")}</h2>
          <p>{t("smartLabel.finalCta.text")}</p>
          <NavLink to="/contact-us" className={styles.ctaLarge}>
            {t("smartLabel.finalCta.cta")}
          </NavLink>
        </div>
      </section>
    </div>
    </>
  );
};

export default SmartLabel;
