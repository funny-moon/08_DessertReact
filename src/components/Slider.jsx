import React from "react";
import { sliderData } from "../data/sliderData";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";

const Slider = ({ title }) => {
  return (
    <section id="sliderType">
      <h2 className="blind">{title}</h2>

      <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        className="hero"
      >
        {sliderData.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <img src={slide.img} alt="" />
            <div className="desc">
              <div className="container">
                <span>{slide.subtitle}</span>
                <h3>{slide.title}</h3>
                <p>{slide.desc}</p>
                <div className="btn">
                  <a href="/">자세히 보기</a>
                  <a href="/">사이트 보기</a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
