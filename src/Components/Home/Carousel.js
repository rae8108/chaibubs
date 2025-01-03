import React, { useState } from 'react';
import './Carousel.css';  
import image1 from '../../images/scmedia/scmedia1.jpg';
import image2 from '../../images/scmedia/scmedia2.jpg';
import image3 from '../../images/scmedia/scmedia3.jpg';
import image4 from '../../images/scmedia/scmedia4.jpg';

const images = [image1, image2, image3, image4]; 

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <section className="carousel">
        <button className="carousel__button carousel__button--left" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="carousel__track-container">
          <ul
            className="carousel__track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <li key={index} className="carousel__slide">
                <img src={image} alt={`carousel-img-${index}`} />
              </li>
            ))}
          </ul>
        </div>

        <button className="carousel__button carousel__button--right" onClick={nextSlide}>
          &#10095;
        </button>
      </section>
    </div>
  );
}
