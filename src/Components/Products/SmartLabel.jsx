import React from "react";
import styles from "./SmartLabel.module.css";
import { NavLink } from "react-router-dom";

const SmartLabel = () => {
  return (
    <div className={styles.smartLabelPage} id="smart-label">
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            Elevate Retail Operations with DeutSolutions Electronic Shelf Labels
          </h1>
          <p className={styles.heroSubtitle}>
            Stop wasting time and money on paper tags. Start achieving perfect pricing, dynamic promotions, and streamlined operations today.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.intro}>
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <div className={styles.introText}>
              <h2>The Future of Retail Pricing is Digital</h2>
              <p>
                In the rapidly evolving retail landscape, maintaining pricing accuracy, executing timely promotions, and optimizing labor costs are critical. DeutSolutions Smart Labels replace static paper labels with intelligent, centrally controlled digital displays, transforming how you manage your store shelves.
              </p>
            </div>
            <div className={styles.introImage}>
              <img src="/media/smart-label/images/IntroImage.jpg" alt="Smart Label Display" />
            </div>
          </div>
        </div>
      </section>

      {/* Display Gallery */}
      <section className={styles.gallery}>
        <div className={styles.container}>
          <h2>Smart Label Display Variations</h2>
          <div className={styles.galleryGrid}>
            {[1, 2, 3, 4, 5].map((num) => (
              <div key={num} className={styles.galleryItem}>
                <img src={`/media/smart-label/images/${num}.jpg`} alt={`Display ${num}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className={styles.videoSection}>
        <div className={styles.container}>
          <h2>Watch the Future of Retail Pricing in Action</h2>
          <p className={styles.videoIntro}>
            You've read about the power and potential of Smart Labels, now it's time to see how this transformative technology works in the real world. This short video, featuring a demonstration in a live retail environment, will bring the concepts of dynamic pricing, perfect accuracy, and operational efficiency to life.
          </p>
          <div className={styles.videoWrapper}>
            <video controls className={styles.video}>
              <source src="/media/smart-label/videos/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className={styles.ctaCenter}>
            <NavLink to="/contact-us" className={styles.cta}>
              Discuss Your Requirements
            </NavLink>
          </div>
        </div>
      </section>

      {/* Benefits Table */}
      <section className={styles.benefits}>
        <div className={styles.container}>
          <h2>Key Benefits at a Glance</h2>
          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Old Paper Tags</th>
                  <th>DeutSolutions Smart Labels</th>
                  <th>The Retail Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Pricing Accuracy</strong></td>
                  <td>Manual entry, high error rate</td>
                  <td>100% synchronized with POS</td>
                  <td>Eliminates shrink & customer disputes.</td>
                </tr>
                <tr>
                  <td><strong>Price Updates</strong></td>
                  <td>Hours of manual labor</td>
                  <td>Instant, store-wide updates</td>
                  <td>Enables dynamic pricing and flash sales.</td>
                </tr>
                <tr>
                  <td><strong>Labor Cost</strong></td>
                  <td>High, recurring expense</td>
                  <td>Near-zero for pricing changes</td>
                  <td>Reallocates staff to customer service.</td>
                </tr>
                <tr>
                  <td><strong>Data Display</strong></td>
                  <td>Limited to basic price/name</td>
                  <td>Unlimited text, images, QR codes</td>
                  <td>Provides rich product info and loyalty integration.</td>
                </tr>
                <tr>
                  <td><strong>Shelf Life</strong></td>
                  <td>Single-use, high waste</td>
                  <td>Multi-year operational life</td>
                  <td>Sustainable and reduces paper consumption.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Complete Solution */}
      <section className={styles.solution}>
        <div className={styles.container}>
          <h2>Our Complete Solution</h2>
          <p className={styles.solutionIntro}>We don't just sell labels; we deliver a managed system.</p>
          <div className={styles.solutionGrid}>
            <div className={styles.solutionCard}>
              <h3>Consultation & Planning</h3>
              <p>Our experts assess your store layout and recommend the optimal network structure and label sizes.</p>
            </div>
            <div className={styles.solutionCard}>
              <h3>Hardware & Installation</h3>
              <p>We provide state-of-the-art ESL tags, access points, and professional installation services to get you up and running quickly.</p>
            </div>
            <div className={styles.solutionCard}>
              <h3>Software & Integration</h3>
              <p>Our intuitive DeutSolutions CMS allows easy control over pricing rules and promotions, seamlessly integrating with your current retail tools.</p>
            </div>
            <div className={styles.solutionCard}>
              <h3>Ongoing Support</h3>
              <p>24/7 technical support and maintenance to ensure uninterrupted performance.</p>
            </div>
          </div>
          <div className={styles.solutionImage}>
            <img src="/media/smart-label/images/Solution.jpg" alt="Complete Solution" />
          </div>
          <div className={styles.ctaCenter}>
            <NavLink to="/contact-us" className={styles.cta}>
              Discuss Your Requirements
            </NavLink>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className={styles.whyChoose}>
        <div className={styles.container}>
          <h2>Why Choose DeutSolutions Smart Labels?</h2>
          <p className={styles.whyIntro}>
            We provide a complete, end-to-end digital labeling solution designed for rapid deployment and maximum reliability.
          </p>
          
          <div className={styles.featureList}>
            <div className={styles.feature}>
              <h3>1. Instantaneous Dynamic Pricing</h3>
              <p>Our system allows you to change prices in seconds, not hours.</p>
              <ul>
                <li>Execute time-of-day pricing (e.g., happy hour deals)</li>
                <li>Automatically drop prices on perishable goods nearing expiration</li>
                <li>React instantly to competitor price changes without lifting a finger</li>
              </ul>
            </div>

            <div className={styles.feature}>
              <h3>2. Unmatched Reliability and Display Quality</h3>
              <p>Utilizing the latest E-Ink/E-Paper technology, our labels are:</p>
              <ul>
                <li><strong>Ultra Low-Power:</strong> Batteries last up to 5-7 years, minimizing maintenance</li>
                <li><strong>Crystal Clear:</strong> High contrast, 180-degree viewing angle, and available in multiple colors (Black, White, Red/Yellow)</li>
                <li><strong>Secure Communication:</strong> Our dedicated RF/BLE network ensures reliable, fast, and encrypted updates across your entire store footprint</li>
              </ul>
            </div>

            <div className={styles.feature}>
              <h3>3. Seamless Integration</h3>
              <p>Our robust API and dedicated integration team ensure the ESL system plugs directly into your existing infrastructure:</p>
              <ul>
                <li>POS System (Point of Sale)</li>
                <li>Inventory/ERP System</li>
                <li>E-commerce Platform (for price parity)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className={styles.downloads}>
        <div className={styles.container}>
          <h2>Know More About Our Solution</h2>
          <p className={styles.downloadsIntro}>
            You've explored how DeutSolutions Smart Labels deliver pricing accuracy, enable dynamic promotions, and slash operational costs. Now, take the next step to fully understand the impact our solution can have on your business. Our comprehensive documents and guides provide all the necessary details to move from inquiry to implementation.
          </p>
          <div className={styles.downloadGrid}>
            <a href="/media/smart-label/docs/Smart Label Flyer.pdf" target="_blank" rel="noopener noreferrer" className={styles.downloadCard}>
              <div className={styles.downloadIcon}>📄</div>
              <h3>Download Flyer</h3>
              <p>Quick overview of our Smart Label solution</p>
            </a>
            <a href="/media/smart-label/docs/Smart Label Presentation.pdf" target="_blank" rel="noopener noreferrer" className={styles.downloadCard}>
              <div className={styles.downloadIcon}>📊</div>
              <h3>Download Presentation</h3>
              <p>Detailed presentation with case studies</p>
            </a>
            <a href="/media/smart-label/docs/Smart Label Technical.pdf" target="_blank" rel="noopener noreferrer" className={styles.downloadCard}>
              <div className={styles.downloadIcon}>⚙️</div>
              <h3>Download Technical Specs</h3>
              <p>Complete technical specifications</p>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCta}>
        <div className={styles.container}>
          <h2>Ready to Digitize Your Shelves?</h2>
          <p>
            Take the first step toward flawless pricing and maximized efficiency. See the system in action and calculate your potential ROI.
          </p>
          <NavLink to="/contact-us" className={styles.ctaLarge}>
            Discuss Your Requirements
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default SmartLabel;
