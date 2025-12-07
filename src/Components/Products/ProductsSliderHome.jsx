import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styles from "./ProductsSliderHome.module.css";
import productVideo from "../../assets/videos/Product.mp4";
import { IoVolumeMuteSharp, IoVolumeHighSharp } from "react-icons/io5";

const Products = () => {
  const { t } = useTranslation();
  // const videoRef = useRef(null);
  // // Start muted so browsers allow autoplay, user can enable sound via the button
  // const [isMuted, setIsMuted] = useState(true);

  // useEffect(() => {
  //   if (videoRef.current) {
  //     videoRef.current.muted = isMuted;
  //   }
  // }, [isMuted]);

  // const toggleMute = () => {
  //   setIsMuted((prev) => !prev);
  // };

  return (
    <section className={styles.intro}>
      <div className={styles.container}>
        <div className={styles.introVideo}>
          {/* <video
            ref={videoRef}
            className={styles.productVideo}
            src={productVideo}
            autoPlay
            muted={isMuted}
            loop
            playsInline
          /> */}
           <div
            className={styles.productImg}
            src={productVideo}
          ></div>
          <div className={styles.videoOverlay}>
          <h2 className={styles.productsHeadline}> <span className={styles.highlight}>{t('products.title')}</span></h2>
            <h2 className={styles.overlayTitle}>
              {t("products.videoOverlay.title")}
            </h2>
            <p className={styles.overlayText}>
              {t("products.videoOverlay.text")}
            </p>
            <Link
              to={"/smart-label"}
              className={styles.learnMoreBtn}
              style={
                location.pathname === "/smart-label" ? { display: "none" } : {}
              }
            >
              {t("products.learnMore")}
            </Link>
          </div>
          {/* <button
            type="button"
            className={styles.muteButton}
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <IoVolumeMuteSharp /> : <IoVolumeHighSharp />}
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Products;