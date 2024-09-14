import './OfferSlider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from 'react';
import offer1 from '../../assets/offer1.jpg'
import offer2 from '../../assets/offer2.jpg'

const OfferSlider = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default to 3 slides per frame for larger screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Screen width of 1024px and below
        settings: {
          slidesToShow: 2, // Show 2 slides per frame on medium-sized screens
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600, // Screen width of 600px and below (small mobile devices)
        settings: {
          slidesToShow: 1, // Show 1 slide per frame on small screens
          slidesToScroll: 1,
        }
      }
    ]
  };

  const openModal = (imgSrc) => {
    setCurrentImage(imgSrc);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className='OfferSlider'>
        <div className="slider-container">
          <Slider {...settings}>
            <div className="slider-item-offer" onClick={() => openModal(offer1)}>
              <img src={offer1} alt="Slide 1" />
            </div>
            <div className="slider-item-offer" onClick={() => openModal(offer2)}>
              <img src={offer2} alt="Slide 1" />
            </div>
            <div className="slider-item-offer" onClick={() => openModal(offer1)}>
              <img src={offer1} alt="Slide 1" />
            </div>
            <div className="slider-item-offer" onClick={() => openModal(offer2)}>
              <img src={offer2} alt="Slide 1" />
            </div>
            <div className="slider-item-offer" onClick={() => openModal(offer1)}>
              <img src={offer1} alt="Slide 1" />
            </div>
          </Slider>
        </div>

        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content">
              <span className="close-button" onClick={closeModal}>&times;</span>
              <img src={currentImage} alt="Large view" className="modal-image" />
            </div>
          </div>
        )}
    </div>
  )
}

export default OfferSlider;
