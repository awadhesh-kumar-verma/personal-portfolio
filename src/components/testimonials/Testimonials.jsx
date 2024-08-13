import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar10.jpg";
import AVTR2 from "../../assets/avatar11.jpg";
import AVTR3 from "../../assets/avatar12.jpg";
import AVTR4 from "../../assets/avatar13.jpg";
import AVTR5 from "../../assets/avatar14.jpg";
import AVTR6 from "../../assets/avatar15.jpg";

import { LiaCertificateSolid } from "react-icons/lia";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  {
    label: "Data Structure & Algorithm",
    imgPath: AVTR6,
  },
  {
    label: "Front End | Full Stack Web Development",
    imgPath: AVTR2,
  },
  {
    label: "Back End | Full Stack Web Development",
    imgPath: AVTR3,
  },
  {
    label: "Google Data Analyst - Coursera",
    imgPath: AVTR1,
  },
  {
    label: "Web Development Internship - InternPe",
    imgPath: AVTR4,
  },
  {
    label: "Full Stack Web Development Internship - Bharat Intern",
    imgPath: AVTR5,
  }
];

const data = [
  {
    avatar: AVTR6,
  },
  {
    avatar: AVTR2,
  },
  {
    avatar: AVTR3,
  },
  {
    avatar: AVTR1,
  },
  {
    avatar: AVTR4,
  },
  {
    avatar: AVTR5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>&nbsp;&nbsp;&nbsp;&nbsp;Some appreciations for me</h5>
      <h2>
        {" "}
        <LiaCertificateSolid /> My <span className="cert">Certificates</span>
      </h2>
      <div className="cent0">
        <Swiper
          className="container testimonials__container"
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {data.map(({ avatar }, index) => (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={`Certificate ${index + 1}`} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="back"></div>
      </div>

      <Swiper
        className="cent container testimonials__container"
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {images.map(({ imgPath, label }, index) => (
          <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar">
              <img src={imgPath} alt={label} />
            </div>
            <h5 className="client__name">{label}</h5>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;