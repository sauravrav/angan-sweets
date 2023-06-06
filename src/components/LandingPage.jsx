import React, { useEffect, useState } from 'react';

const LandingPage = () => {
  const slides = [
    {
      imageSrc: '/assets/images/boondi-laddu-slider.png',
      title: 'A Delicate Bundle of Joy',
      subtitle: 'Mota Boondi Laddu',
      description: 'Make your moments sweeter with our flavoursome sweets made from fresh ingredients to savour your sweet tooth.',
      buttonLink: 'moota-bundi-laddu.html',
      buttonText: 'Order Now'
    },
    {
      imageSrc: '/assets/images/barfi-slider.jpg',
      title: 'Relishing the Rich Taste of Fine Cashews',
      subtitle: 'Kaju Barfi',
      description: 'Choose among Angan\'s Sweets, Order Online and enjoy your sweet time at your home!',
      buttonLink: 'kaju-barfi.html',
      buttonText: 'Order Now'
    },
    // Add more slides as needed
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [slides.length]);

  const handleSlideChange = (slideIndex) => {
    setActiveSlide(slideIndex);
  };

  return (
    <div className="banner-cara">
      <div className="slides-container">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === activeSlide ? 'active' : ''}`}
          >
            <div className="banner-bg img-wrap">
              <img src={slide.imageSrc} alt="banner" />
            </div>
            <div className="container">
              <div className="info-content">
                <h3 className="page-title">
                  {slide.title}
                  <span className="inner-page-title orange">{slide.subtitle}</span>
                </h3>
                <p>{slide.description}</p>
                <div className="custom-button">
                  <a href={slide.buttonLink}>{slide.buttonText}</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === activeSlide ? 'active' : ''}`}
            onClick={() => handleSlideChange(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
