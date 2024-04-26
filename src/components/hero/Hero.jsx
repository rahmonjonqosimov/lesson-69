import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import img1 from "../../assets/images/swiper1.jpg";
import img2 from "../../assets/images/swiper2.jpg";
import img3 from "../../assets/images/swiper3.jpg";

const Hero = () => {
  return (
    <div className="container">
      <Swiper
        scrollbar={{
          hide: true,
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide className="carousel">
          <div className="swiper__text">
            <h2>Lorem, ipsum dolor.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              architecto praesentium, deserunt ipsam laudantium blanditiis magni
              exercitationem sed animi velit totam rem libero minima esse
              sapiente, sit consequatur. Nam, minima?
            </p>
          </div>
          <img className="swiper__img" src={img1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper__text">
            <h2>Lorem, ipsum dolor.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              architecto praesentium, deserunt ipsam laudantium blanditiis magni
              exercitationem sed animi velit totam rem libero minima esse
              sapiente, sit consequatur. Nam, minima?
            </p>
          </div>
          <img className="swiper__img" src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper__text">
            <h2>Lorem, ipsum dolor.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              architecto praesentium, deserunt ipsam laudantium blanditiis magni
              exercitationem sed animi velit totam rem libero minima esse
              sapiente, sit consequatur. Nam, minima?
            </p>
          </div>
          <img className="swiper__img" src={img3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
