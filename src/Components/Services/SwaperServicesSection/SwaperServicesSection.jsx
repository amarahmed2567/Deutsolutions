import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import { Virtual} from 'swiper/modules';
//image
import migrationImg from "../../../assets/images/About.jpg";
import aiImg from "../../../assets/images/About.jpg";
import translationImg from "../../../assets/images/About.jpg";
import germanImg from "../../../assets/images/About.jpg";

import styles from "../Services.module.css"

const services = [
    {
      title: "Translation",
      img: translationImg,
      icon: "🌐",
      desc: "Culturally relevant translation between Arabic, English, and German.",
      btn: "Start Now"
    },
    {
      title: "Migration Support",
      img: migrationImg,
      icon: "🧳",
      desc: "Visa guidance, document translation, and full support to help you move to Germany smoothly.",
      btn: "Start Now"
    },
    {
      title: "AI Agent Development",
      img: aiImg,
      icon: "🤖",
      desc: "We build custom AI assistants that help businesses automate support, sales, and data.",
      btn: "Start Now"
    },
    {
      title: "German Language Coaching",
      img: germanImg,
      icon: "📚",
      desc: "Beginner-friendly German lessons, tailored for migrants.",
      btn: "Start Now"
    }
  ];
  
  const SwaperServicesSection = ()=>{
    return (
      <>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
        //   autoplay={{
        //     delay: 2500,
        //     disableOnInteraction: false,
        //   }}
         virtual={true}
          modules={[Virtual]}
          className={styles.mySwiper}
        >

        {services.map((s, i) => (
        <SwiperSlide key={i} className={styles.card}>
            <img src={s.img} alt={s.title} className={styles.cardImg} />
            <div className={styles.cardContent}>
                <span className={styles.cardIcon}>{s.icon}</span>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.desc}</p>
                <button className={styles.cardBtn}>{s.btn}</button>
            </div>
        </SwiperSlide>
         
          ))}
        </Swiper>
      </>
    );
  }
  export default SwaperServicesSection