import './Style.css'
import card1 from "../../images/Card1.svg";
import card2 from "../../images/Card2.svg";
import card3 from "../../images/Card3.svg";

export default function Slider() {
  return (
    <div className="banner_slider">
      <div className="banner_slider_inner">
        <div className="banner_slide">
          <img src={card1} alt="card-1" />
        </div>
        <div className="banner_slide">
          <img src={card2} alt="card-2" />
        </div>
        <div className="banner_slide">
          <img src={card3} alt="card-3" />
        </div>
      </div>
    </div>
  );
}
