import React from "react";
import Slider from "react-slick";
import { motion } from 'framer-motion';
import "./Photos.scss";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lifestyle1 from '../../assets/lifestyle/HD-lifestyle-1.png';
import Lifestyle2 from '../../assets/lifestyle/HD-lifestyle-2.png';
import Lifestyle3 from '../../assets/lifestyle/HD-lifestyle-3.png';
import Lifestyle4 from '../../assets/lifestyle/HD-lifestyle-4.png';
import Lifestyle5 from '../../assets/lifestyle/HD-lifestyle-5.png';
import Lifestyle6 from '../../assets/lifestyle/HD-lifestyle-6.png';
import Lifestyle7 from '../../assets/lifestyle/HD-lifestyle-7.png';
import Lifestyle8 from '../../assets/lifestyle/HD-lifestyle-8.png';
import Lifestyle9 from '../../assets/lifestyle/HD-lifestyle-9.png';
import Lifestyle10 from '../../assets/lifestyle/HD-lifestyle-10.png';
import Lifestyle11 from '../../assets/lifestyle/HD-lifestyle-11.png';
import Lifestyle12 from '../../assets/lifestyle/HD-lifestyle-12.png';
import Lifestyle13 from '../../assets/lifestyle/HD-lifestyle-13.png';
import Lifestyle14 from '../../assets/lifestyle/HD-lifestyle-14.png';
import Lifestyle15 from '../../assets/lifestyle/HD-lifestyle-15.png';
import Lifestyle16 from '../../assets/lifestyle/HD-lifestyle-16.png';



export const Photos = () => {
  var settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <div className="app__photos app__whitebg">
      <div className="app__photos-inner">
        <motion.div
          whileInView={{ y: [150, 0] }}
          transition={{ duration: 1 }}
        >
          <h1 className="head-text"> Photos</h1>
          <Slider {...settings} className="app__flex">
            <div className="app__photos-slider">
              <img src={Lifestyle1} alt="" />
            </div>
            <div className="app__photos-slider">
              <img src={Lifestyle2} alt="" />
            </div>
            <div className="app__photos-slider">
              <img src={Lifestyle3} alt="" />
            </div>
            <div className="app__photos-slider">
              <img src={Lifestyle4} alt="" />
            </div>
            <div className="app__photos-slider">
              <img src={Lifestyle5} alt="" />
            </div>
            <div className="app__photos-slider">
              <img src={Lifestyle6} alt="" />
            </div>
            <div className="app__photos-slider">
              <img src={Lifestyle7} alt="" />
            </div>
            <div className="app__photos-slider">
              <img src={Lifestyle8} alt="" />
            </div>
            <div className="app__photos-slider">
              <img src={Lifestyle9} alt="" />
            </div>
            <div className="app__photos-slider">
              <img src={Lifestyle10} alt="" />
            </div>
            <div className="app__photos-slider">
              <img src={Lifestyle11} alt="" />
            </div>
            <div className="app__photos-slider">
              <img src={Lifestyle12} alt="" />
            </div>
            <div className="app__photos-slider">
              <img src={Lifestyle13} alt="" />
            </div>
            <div className="app__photos-slider">
              <img src={Lifestyle14} alt="" />
            </div>
            <div className="app__photos-slider">
              <img src={Lifestyle15} alt="" />
            </div>
            <div className="app__photos-slider">
              <img src={Lifestyle16} alt="" />
            </div>

          </Slider>
        </motion.div>
      </div>
    </div >
  );
}
