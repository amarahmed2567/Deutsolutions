import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Pagination } from "swiper/modules";
import TestimontalsData from "./Testimonials.json";
import "swiper/css";
import "./SwaperTestimonials.css";
import "../Swipe.css";

const SwaperTestimonials = () => {
  const testimonials = TestimontalsData.testimonials;
  return (
    <Swiper
      modules={[Pagination,Autoplay]}
      spaceBetween={500}
      slidesPerView={1}
      centeredSlides={true}
      initialSlide={2}
      grabCursor={true}
      autoplay={true}
      pagination={{ clickable: true }}
      breakpoints={{
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className={"swiper" + " " + "testimonialsSwiper"}
    >
      {testimonials.map((t, idx) => (
        <SwiperSlide key={idx} className="slide">
          <div className="Testimonialscard">
            <p className="text">"{t.title}"</p>

            <div className="name">{t.name}</div>
            <span className="testimonial-card__meta">
              {t.role}
              {t.company_name ? ` • ${t.company_name}` : ""}
            </span>

            <div className="stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={i < t.rating ? "starActive" : "starInactive"}
                >
                  ★
                </span>
              ))}
            </div>

            <p className="testimonial-card__text">“{t.text}”</p>

            {t.focus_areas && t.focus_areas.length > 0 && (
              <div className="testimonial-card__tags">
                {t.focus_areas.map((tag, i) => (
                  <span key={i} className="testimonial-tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwaperTestimonials;
