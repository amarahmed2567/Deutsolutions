import React from 'react';
import { useTranslation } from 'react-i18next';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "../Swipe.css"
// import { EffectCoverflow, Autoplay } from 'swiper/modules';

//react Icons
import { MdAirplaneTicket, MdTranslate } from "react-icons/md";
import { FaRobot, FaBookOpen } from "react-icons/fa";

//css styles
import "./SwaperServicesSection.css"

//image
import migrationImg from "../../../../assets/images/migration.png";
import aiImg from "../../../../assets/images/ai.jpg";
import translationImg from "../../../../assets/images/Trans.jpeg";
import germanImg from "../../../../assets/images/DeutschKurs.jpg";
import { Link } from 'react-router-dom';


  const SwaperServicesSection = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      title: t('services.items.translation.title'),
      img: translationImg,
      icon: <MdTranslate className="Icon" style={{color: '#0070f3'}} />,
      desc: t('services.items.translation.description'),
      btn: t('services.items.translation.button'),
      link:"/translation"
    },
    {
      title: t('services.items.migration.title'),
      img: migrationImg,
      icon: <MdAirplaneTicket className="Icon" style={{color: '#e67700'}} />,
      desc: t('services.items.migration.description'),
      btn: t('services.items.migration.button'),
      link:"/migration"
    },
    {
      title: t('services.items.ai.title'),
      img: aiImg,
      icon: <FaRobot className="Icon" style={{color: '#d90429'}} />,
      desc: t('services.items.ai.description'),
      btn: t('services.items.ai.button'),
      link:"/ai"
    },
    {
      title: t('services.items.german.title'),
      img: germanImg,
      icon: <FaBookOpen className="Icon" style={{color: '#009e60'}} />,
      desc: t('services.items.german.description'),
      btn: t('services.items.german.button'),
      link:"/german"
    }
  ];
  
  return (
    <>
      <Swiper
         modules={[Pagination,Autoplay]}
         spaceBetween={100}
         slidesPerView={1}
         centeredSlides={true} 
         initialSlide={1} 
         autoplay={true}
         grabCursor={true}
         breakpoints={{
           768: { slidesPerView: 2 },
           1024: { slidesPerView: 3 },
         }}
         className={"swiper"+"swiperServices"} 
      >

      {services.map((s, i) => (
      <SwiperSlide key={i}  className='slider'>
        <div className="card">
          <img src={s.img} alt={s.title} className="cardImg" />
          <div className="cardContent">
              <h3 className="cardTitle"> 
                <span className="cardIcon">{s.icon}</span>
                {s.title}
              </h3>
              <p className="cardDesc">{s.desc}</p>
              <div className="btn-contenar">
              <Link to={s.link} className="btnlight">{t('services.learnMore')}</Link>
              <Link to={s.link} className="cardBtn">{s.btn}</Link>
              </div>
          </div>
          </div>
      </SwiperSlide>
       
        ))}
      </Swiper>

    </>
  );
};

export default SwaperServicesSection;