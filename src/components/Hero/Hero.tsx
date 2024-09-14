import './Hero.css'
import slide2 from '../../assets/istockphoto-1473559425-612x612.jpg'
import slide1 from "../../assets/DALL·E 2024-09-11 12.33.02 - A modern, sleek dental clinic named Pearl Smile Medical Center. The exterior of the clinic features large glass windows, a stylish logo with a pearl g.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import LinkButton from '../LinkButton/LinkButton';
// import { Link } from "react-router-dom";
const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable auto play
        autoplaySpeed: 3000, // Adjust the speed of auto play (3 seconds)
        arrows: true, // Show arrows for manual navigation
      };
  return (
    <div className="ne_hero">
      <div className="slider-container">
      <Slider {...settings}>
        <div className="slider-item">
          <img
            src={slide1}
            alt="Slide 1"
          />
          {/* <div className="slider-content">
            <h2>Distinguished German Cardiology Expertise in Dubai</h2>
            <p>Since 2006</p>
            <div className="slider-buttons">
            <LinkButton ButtonUrl="#" ButtonName="Book Now"/>
              
            </div>
          </div> */}
        </div>
        <div className="slider-item">
          <img
            src={slide2}
            alt="Slide 2"
          />
          {/* <div className="slider-content">
            <h2>Expert Care for Your Heart</h2>
            <p>Your Health, Our Priority</p>
            <div className="slider-buttons">
            <LinkButton ButtonUrl="#" ButtonName="Book Now"/>
            </div>
          </div> */}
        </div>
      </Slider>
    </div>
    </div>
  )
}

export default Hero