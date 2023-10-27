import "./Style.css";
import { useLayoutEffect } from "react";
import Carousel from "../carousel/Carousel";
import testimonial_icon from "../../images/Vector.svg";
import gsap from "gsap";

export default function Testimonial() {
  let tl = gsap.timeline();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".testimonial", 0, { css: { visibility: "visible" } });

      tl.from(".testimonial", 1, {
        opacity: 0,
        y: 40,
        ease: "power4.inOut",
        stagger: {
          amount: 1,
        },
      });
    });

    return () => ctx.revert();
  }, []);
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
