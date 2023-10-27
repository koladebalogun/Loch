import './Style.css'
import React from 'react'
import Carousel from '../carousel/Carousel'
import testimonial_icon from "../../images/Vector.svg";



export default function Testimonial() {
  return (
    <div className="testimonial">
      <div className="testimonial_header">
        <h1>Testimonials</h1>
        <hr />
      </div>

      <div className="testimonial_carousel_wrapper">
        <div className="testimonial_icon">
          <img src={testimonial_icon} alt="testimonial-icon" />
        </div>
        <Carousel />
      </div>
    </div>
  );
}
