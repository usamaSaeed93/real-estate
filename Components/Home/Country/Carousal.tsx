"use client"
import React, { useState } from 'react';
import './Carousel.css'; // Create a CSS file for styling
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ArrowLeftAltIcon from '@mui/icons-material/ArrowBack';
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/Images/png/carousalImage.png',
    '/Images/png/Image2.png',
    '/Images/png/Image4.png',
    '/Images/png/carousalImage.png',
    // Add more image URLs as needed
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="carousel-container">
         <div className="carousel-buttons justify-end items-center">
        <button onClick={handlePrevClick} className='rotate-180'><ArrowRightAltIcon /></button>
        <button onClick={handleNextClick}><ArrowRightAltIcon /></button>
      </div>
      <div className="carousel gap-5">
        <img
          src={images[currentIndex]}
          alt={`Image ${currentIndex + 1}`}
          width="285"
          height="300"
        />
        <img
          src={images[(currentIndex + 1) % images.length]}
          alt={`Image ${currentIndex + 2}`}
          width="285"
          height="300"
        />
        <img
          src={images[(currentIndex + 2) % images.length]}
          alt={`Image ${currentIndex + 3}`}
          width="285"
          height="300"
        />
         <img
          src={images[(currentIndex + 2) % images.length]}
          alt={`Image ${currentIndex + 3}`}
          width="285"
          height="300"
        />
      </div>
     
    </div>
  );
};

export default Carousel;

