import './Style.css'
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const overlay = useRef();
  let tl = gsap.timeline();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      tl.from(".intro", 2, {
        opacity: 0,
        y: 40,
        ease: "power4.inOut",
        stagger: {
          amount: 0.5,
        },
      })
        .to(overlay.current, 1.5, {
          yPercent: -100,
        })
        .from(".input, .signup_btn, .signup_notice", 1, {
          opacity: 0,
          y: 40,
          ease: "power4.inOut",
          stagger: {
            amount: 0.5,
          },
        });
    });

    return () => ctx.revert();
  }, []);
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.includes("@") && email.includes(".")) {
          window.open("https://app.loch.one/welcome", "_blank");

    } else {
      toast.error("Please enter a valid email", {
        theme: "colored",
      });
    }
  };


  return (
    <div className="signup">
      <div className="overlay" ref={overlay} />
      <div className="signup_wrapper">
        <h1 className="intro">
          Sign up for
          <br /> exclusive access.
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <input
              type="text"
              required="required"
              value={email}
              onChange={handleEmailChange}
            />
            <span>Your email address</span>
          </div>
          <button type="submit" className="signup_btn">
            Get started
          </button>
        </form>


        <div className="signup_notice">
          <p>You’ll receive an email with an invite link to join.</p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
