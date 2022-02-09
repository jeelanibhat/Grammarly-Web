import React, { useState } from "react";
import Slider from "react-slick";
import "../assets/style.css";

const SliderTop = () => {
  const [rightContent, SetRightContent] = useState([
    {
      title: "1. Clear, confident communication",
      description: "Take the guesswork out of great writing.",
    },
    {
      title: "2. Clear, confident communication",
      description: "Take the guesswork out of great writing.",
    },
    {
      title: "3. Clear, confident communication",
      description: "Take the guesswork out of great writing.",
    },
    {
      title: "4. Clear, confident communication",
      description: "Take the guesswork out of great writing.",
    },
  ]);

  // slider settings
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="slider__wrapper pb-0">
      <div className="slider__wrapper-inner">
        {/* slider left side */}
        <div className="slider__left">
          <Slider {...settings}>
            <div className="slider__left-box">
              <div className="slider__left-content">
                <img src={require("../assets/images/slide1a.png")} alt="" />
                <img src={require("../assets/images/slide1b.png")} alt="" />
              </div>
            </div>

            <div
              className="slider__left-box animated"
              data-animation-in="fadeInUp"
              data-delay-in="0.3"
            >
              <div className="slider__left-content">
                <img src={require("../assets/images/slide1a.png")} alt="" />
                <img src={require("../assets/images/slide1b.png")} alt="" />
              </div>
            </div>

            <div className="slider__left-box">
              <div className="slider__left-content">
                <img src={require("../assets/images/slide1a.png")} alt="" />
                <img src={require("../assets/images/slide1b.png")} alt="" />
              </div>
            </div>
            <div className="slider__left-box">
              <div className="slider__left-content">
                <img src={require("../assets/images/slide1a.png")} alt="" />
                <img src={require("../assets/images/slide1b.png")} alt="" />
              </div>
            </div>
          </Slider>
        </div>

        {/* slider right side */}
        <div className="slider__right">
          {rightContent.map((item, index) => (
            <div className="slider__right-box" key={index}>
              <div className="slider__right-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SliderTop;
