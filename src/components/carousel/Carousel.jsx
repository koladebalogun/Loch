import './Style.css'
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import images from "./images";

export default function Carousel() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="testimonial_container">
      
      <motion.div className="carousel" ref={carousel}>
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -700 }}
          className="inner_carousel"
        >
          {images.map((image, index) => (
            <motion.div className="item" key={index}>
              <motion.div className="item_inner">
                <img src={image} alt="" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
