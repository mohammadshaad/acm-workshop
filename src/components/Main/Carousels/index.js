import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index} className=''>
          <img src={image} alt={`Slide ${index}`} className="w-1/2 relative top-1/3 left-1/4 mb-0"/>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
