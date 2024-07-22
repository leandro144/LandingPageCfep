import React from "react";
import Slider from "react-slick";
import banner from '../assets/banner.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png'

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: 'blue' }}
      onClick={onClick}
    />
  );
}

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: 'blue' }}
      onClick={onClick}
    />
  );
}

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="banner">
            <a href="https://www.cfepmembros.com.br/inscricao">
                <img className="image-banner" src={banner2} alt="Banner 2" />
            </a>
        </div>
        <div className="banner">
            <a href="https://www.cfepmembros.com.br/inscricao">
                <img className="image-banner" src={banner} alt="Banner 2" />
            </a>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
