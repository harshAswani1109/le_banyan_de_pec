import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { IMAGES_URL } from "../../utils/constants";
import styles from "../../styles/home/slider.module.css";

const Slider = () => {
  const images = IMAGES_URL.sliderImages;
  const [currentImage, setCurrentImage] = useState(0);

  function handleNextImage() {
    setCurrentImage((currentImage + 1) % images.length);
  }

  function handlePreviousImage() {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  }

  return (
    <div>
      <AnimatePresence>
        <motion.img
          key={currentImage}
          className="h-96 w-96"
          src={images[currentImage]}
          animate={{ y: 0, opacity: 1 }}
          //   exit={{ y: 0, opacity: 0 }}
        />
      </AnimatePresence>
      <button onClick={handlePreviousImage}>Previous</button>
      <button onClick={handleNextImage}>Next</button>
    </div>
  );
};

export default Slider;
