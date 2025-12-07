import React ,{useRef,useState,useEffect } from "react"
import styles from "./ProductsSliderHome.module.css";
import productVideo from "../../assets/videos/Product.mp4";
import { IoVolumeMuteSharp, IoVolumeHighSharp } from "react-icons/io5";

const ProductsVideo = ()=>{
    const videoRef = useRef(null);
  // Start muted so browsers allow autoplay, user can enable sound via the button
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

    return(
    <section className={styles.intro}>
    <div className={styles.container}>
    <div className={styles.introVideo}>
        <video
        ref={videoRef}
        className={styles.productVideo}
        src={productVideo}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        />

<button
            type="button"
            className={styles.muteButton}
            onClick={toggleMute}
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? <IoVolumeMuteSharp /> : <IoVolumeHighSharp />}
          </button>
     </div>
  
  </div>
  </section>

    )
}
export default ProductsVideo
