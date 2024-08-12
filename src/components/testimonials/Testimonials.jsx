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
import 'swiper/css';
import 'swiper/css/pagination';

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

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
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

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
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          {data.map(({ avatar }, index) => (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="back"></div>
      </div>

      <Box sx={{ maxWidth: 598, flexGrow: 1 }} className="cent">
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            bgcolor: "background.default",
          }}
        >
          <Typography>{images[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    display: "block",
                    maxWidth: 598,
                    overflow: "hidden",
                    width: "100%",
                    aspectRatio: "1/1",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </section>
  );
};

export default Testimonials;
