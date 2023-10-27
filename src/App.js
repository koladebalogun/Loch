import "./App.css";
import { useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import cohorts from "./images/Cohorts.svg";
import Bell from "./images/Bell.svg";
import Eye from "./images/Eye.svg";
import SignupForm from "./components/form/SignupForm";
import Testimonial from "./components/testimonial/Testimonial";
import Slider from "./components/slider/Slider";

function App() {
  let tl = gsap.timeline();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".App", 0, { css: { visibility: "visible" } });

      tl.from(
        ".banner_header, .banner_slider, .section_image, .section_content",
        1,
        {
          opacity: 0,
          y: 40,
          ease: "power4.inOut",
          stagger: {
            amount: 1,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="App">
      <div className="contents">
        <div className="wrapper">
          <div className="container">
            <div className="banner_wrapper">
              <div className="banner_content">
                <div className="banner_header">
                  <div className="notification_icon">
                    <img src={Bell} alt="notification icon" />
                  </div>
                  <h1>
                    Get notified when a <br /> highly correlated <br /> whale
                    makes a move
                  </h1>
                  <p>
                    Find out when a certain whale moves more than any preset
                    amount on-chain or when a dormant whale you care about
                    becomes active.
                  </p>
                </div>

                <Slider />
              </div>
            </div>
          </div>

          <section>
            <div className="section_inner">
              <div className="section_image">
                <img src={cohorts} alt="cohorts" />
              </div>

              <div className="section_content">
                <div className="eye_icon">
                  <img src={Eye} alt="eye icon" />
                </div>

                <div>
                  <h1>
                    Watch what the
                    <br /> whales are doing
                  </h1>

                  <p>
                    All whales are not equal. Know exactly
                    <br /> what the whales impacting YOUR
                    <br /> portfolio are doing.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Testimonial />
        </div>

        <SignupForm />
      </div>
    </div>
  );
}

export default App;
