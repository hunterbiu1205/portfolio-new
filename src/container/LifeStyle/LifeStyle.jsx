import React from "react";
import Slider from "react-slick";
import "./LifeStyle.scss";
import { AppWrap } from '../../wrapper';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LifeStyle = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="app__lifestyle app__flex">
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
};

export default AppWrap(LifeStyle, 'lifestyle');