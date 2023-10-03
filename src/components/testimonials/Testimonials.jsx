import React from 'react'
import './testimonials.css';
import AVTR1 from '../../assets/avatar10.jpg';
import AVTR2 from '../../assets/avatar11.jpg';
import AVTR3 from '../../assets/avatar12.jpg';
import AVTR4 from '../../assets/avatar13.jpg';
import AVTR5 from '../../assets/avatar14.jpg';
import AVTR6 from '../../assets/avatar15.jpg';

import {LiaCertificateSolid} from 'react-icons/lia';


import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        avatar: AVTR2
    },
    {
        avatar: AVTR3
    },
    {
        avatar: AVTR1
    },
    {
        avatar: AVTR4
    },
    {
        avatar: AVTR5
    },
    {
        avatar: AVTR6
    }
]

const Testimonials = () => {
    return (
        <section id='testimonials' >
            <h5>&nbsp;&nbsp;&nbsp;&nbsp;Some appreciations for me</h5>
            <h2> <LiaCertificateSolid /> My <span className='cert' >Certificates</span></h2>
            <Swiper className='container testimonials__container'
                modules={[Pagination]} 
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }} >
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className='testimonial' >
                                <div className='client__avatar' >
                                    <img src={avatar} alt='No'/>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <div className='back' ></div>
        </section>
    )
};

export default Testimonials;