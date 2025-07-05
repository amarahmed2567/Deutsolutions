import React from "react";
import styles from "./Testimonials.module.css";
import SwaperTestimonials from "../Swapers/HomeSwaper/SwapeTestimonials/SwaperTestimonials";

const testimonials = [
  {
    name: "Ahmed S.",
    country: "Egypt",
    text: "Your team helped me move to Germany without stress. Everything was smooth and professional. Thank you!",
  },
  {
    name: "Lisa M.",
    country: "Germany",
    text: "The AI agent you built saved us hours every day. Highly efficient and easy to use!",
  },
  {
    name: "Khalid R.",
    country: "Dubai",
    text: "We needed urgent certified translations — got them fast and spot on. Excellent service!",
  },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.header}>
        <div className={styles.title}>
          <span className={styles.gradientText}>Testimonials</span>
        </div>
        <div className={styles.heading}>What Our Clients Say</div>
        <div className={styles.subtitle}>
          Real stories from people we've helped — in migration, translation, and tech.
        </div>
      </div>
        <SwaperTestimonials/>
    </section>
  );
};

export default Testimonials;
