import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';

//react Icons
import { MdAirplaneTicket } from "react-icons/md";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import 'swiper/css/autoplay';

//css styles
import "./SwaperServicesSection.css"

//image
import migrationImg from "../../../../assets/images/migration.png";
import aiImg from "../../../../assets/images/ai.jpg";
import translationImg from "../../../../assets/images/Trans.jpeg";
import germanImg from "../../../../assets/images/DeutschKurs.jpg";


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
          effect={'coverflow'}
          grabCursor={true}
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          initialSlide={1}
          breakpoints={{
            480: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
       
          modules={[ Autoplay]}
          className="mySwiper"
        >

        {services.map((s, i) => (
        <SwiperSlide key={i} className="card">
            <img src={s.img} alt={s.title} className="cardImg" />
            <div className="cardContent">
                <h3 className="cardTitle"> 
                    <span className="cardIcon">
                    <MdAirplaneTicket className='Icon'></MdAirplaneTicket>
                    </span>
                {s.title}</h3>
                <p className="cardDesc">{s.desc}</p>
                <div className="btn-contenar">
                <button className="btnlight">learn more</button>
                <button className="cardBtn">{s.btn}</button>
                </div>
            </div>
        </SwiperSlide>
         
          ))}
        </Swiper>

      </>
    );
  }
  export default SwaperServicesSection