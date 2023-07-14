import React, { useState } from 'react';
import '../Carousel/Carousel.sass'; // Ajoute tes styles personnalisés ici
import arrowPrev from '../../../assets/arrow-prev.svg';
import arrowNext from '../../../assets/arrow-next.svg';

function BackgroundImage({ images }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="carousel-container">
            <div className="carousel-slide">
                {images.map((image, index) => (
                    <div key={index} className={`carousel-slide-item ${activeIndex === index ? 'active' : ''}`}>
                        <img src={image} alt={`${index + 1}`} />
                    </div>
                ))}
            </div>
            <div className="carousel-arrow left" onClick={handlePrevSlide}>
                <img src={arrowPrev} alt="Previous" />
            </div>
            <div className="carousel-arrow right" onClick={handleNextSlide}>
                <img src={arrowNext} alt="Next" />
            </div>
            <div className="carousel-counter">{`${activeIndex + 1}/${images.length}`}</div>
        </div>
    );
}

export default BackgroundImage;
