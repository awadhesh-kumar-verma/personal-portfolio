import React from 'react'
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';


import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        id:1,
        avatar: AVTR1,
        name: 'Tina Snow',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. eaque eos voluptatem eius dolorem maiores nihil at rem ullam reprehenderit qidem quia deserunt, molestiae, eligendi amet repellat molestias quos totam.'
    },
    {
        id:2,
        avatar: AVTR2,
        name: 'Shatta Wale',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. eaque eos voluptatem eius dolorem maiores nihil at rem ullam reprehenderit qidem quia deserunt, molestiae, eligendi amet repellat molestias quos totam.'
    },
    {
        id:3,
        avatar: AVTR3,
        name: 'Kwame Despite',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. eaque eos voluptatem eius dolorem maiores nihil at rem ullam reprehenderit qidem quia deserunt, molestiae, eligendi amet repellat molestias quos totam.'
    },
    {
        id:4,
        avatar: AVTR4,
        name: 'Nana Ama McBrown',
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. eaque eos voluptatem eius dolorem maiores nihil at rem ullam reprehenderit qidem quia deserunt, molestiae, eligendi amet repellat molestias quos totam.'
    }
]

const Testimonials = () => {
    return (
        <section id='testimonials' >
            <h5>Review from clients</h5>
            <h2>Testinomials</h2>

            <Swiper className='container testimonials__container' 
            // install Swider modules
                modules={[Pagination]} 
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }} >
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className='testimonial' >
                                <div className='client__avatar' >
                                    <img src={avatar} />
                                </div>
                                <h5 className='client__name' > {name} </h5>
                                <small className='client__review' >
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
};

export default Testimonials;





// const Testimonials = () => {
//     return (
//         <section id='testimonials' >
//             <h5>Review from clients</h5>
//             <h2>Testinomials</h2>

//             <div className='container testimonials__container' >
//                 <article className='testimonial' >
//                     <div className='client__avatar' >
//                         <img src={AVTR1} alt='Avatar one' />
//                     </div>
//                     <h5 className='client__name' >Ernest Achiever</h5>
//                     <small className='client__review' >
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. eaque eos voluptatem eius dolorem maiores nihil at rem ullam reprehenderit qidem quia deserunt, molestiae, eligendi amet repellat molestias quos totam.
//                     </small>
//                 </article>
//                 <article className='testimonial' >
//                     <div className='client__avatar' >
//                         <img src={AVTR2} alt='Avatar one' />
//                     </div>
//                     <h5 className='client__name' >Ernest Achiever</h5>
//                     <small className='client__review' >
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. eaque eos voluptatem eius dolorem maiores nihil at rem ullam reprehenderit qidem quia deserunt, molestiae, eligendi amet repellat molestias quos totam.
//                     </small>
//                 </article>
//                 <article className='testimonial' >
//                     <div className='client__avatar' >
//                         <img src={AVTR3} alt='Avatar one' />
//                     </div>
//                     <h5 className='client__name' >Ernest Achiever</h5>
//                     <small className='client__review' >
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. eaque eos voluptatem eius dolorem maiores nihil at rem ullam reprehenderit qidem quia deserunt, molestiae, eligendi amet repellat molestias quos totam.
//                     </small>
//                 </article>
//                 <article className='testimonial' >
//                     <div className='client__avatar' >
//                         <img src={AVTR4} alt='Avatar one' />
//                     </div>
//                     <h5 className='client__name' >Ernest Achiever</h5>
//                     <small className='client__review' >
//                         Lorem ipsum dolor sit amet consectetur adipisicing elit. eaque eos voluptatem eius dolorem maiores nihil at rem ullam reprehenderit qidem quia deserunt, molestiae, eligendi amet repellat molestias quos totam.
//                     </small>
//                 </article>
//             </div>
//         </section>
//     )
// };