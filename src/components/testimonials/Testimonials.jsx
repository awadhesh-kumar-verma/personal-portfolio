import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar10.jpg";
import AVTR2 from "../../assets/avatar11.jpg";
import AVTR3 from "../../assets/avatar12.jpg";
import AVTR4 from "../../assets/avatar13.jpg";
import AVTR5 from "../../assets/avatar14.jpg";
import AVTR6 from "../../assets/avatar15.jpg";

import { LiaCertificateSolid } from "react-icons/lia";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";

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
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="No" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="back"></div>

      {/* <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={AVTR1} className="d-block w-50 mx-auto" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>
                Some representative placeholder content for the first slide.
              </p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={AVTR2} className="d-block w-50 mx-auto" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={AVTR3} className="d-block w-50 mx-auto" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={AVTR4} className="d-block w-50 mx-auto" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={AVTR5} className="d-block w-50 mx-auto" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={AVTR6} className="d-block w-50 mx-auto" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Some representative placeholder content for the third slide.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
    </section>
  );
};

export default Testimonials;
