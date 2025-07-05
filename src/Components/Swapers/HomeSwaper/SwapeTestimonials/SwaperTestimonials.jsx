import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import"./SwaperTestimonials.css";

const testimonials = [
  {
    text: `Your team helped me move to Germany without stress. Everything was smooth and professional. Thank you!`,
    name: "Ahmed S., Egypt",
    rating: 4,
  },
  {
    text: `The AI agent you built saved us hours every day. Highly efficient and easy to use!`,
    name: "Lisa M., Germany",
    rating: 4,
  },
  {
    text: `We needed urgent certified translations — got them fast and spot on. Excellent service!`,
    name: "Khalid R., Dubai",
    rating: 4,
  },
  {
    text: `We needed urgent certified translations — got them fast and spot on. Excellent service!`,
    name: "Khalid R., Dubai",
    rating: 4,
  },
  {
    text: `We needed urgent certified translations — got them fast and spot on. Excellent service!`,
    name: "Khalid R., Dubai",
    rating: 4,
  },
];

const SwaperTestimonials = () => {
  return (
    <Swiper
    modules={[Pagination]}
    spaceBetween={500}
    slidesPerView={1}
    centeredSlides={true} 
    initialSlide={2} 
    grabCursor={true}
    breakpoints={{
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
    className={"swiper" + " " + "testimonialsSwiper"} // أضف هذا الكلاس
  >
        {testimonials.map((t, idx) => (
          <SwiperSlide key={idx} className="slide">
            <div className="Testimonialscard">
              <div className="avatar" />
              <p className="text">"{t.text}"</p>
              <div className="name">{t.name}</div>
              <div className="stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < t.rating ? "starActive" : "starInactive"}>★</span>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
  );
};

export default SwaperTestimonials;