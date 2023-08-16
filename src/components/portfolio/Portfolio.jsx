import React from 'react'
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpeg';
import IMG2 from '../../assets/To-do-list.png';
// import IMG3 from '../../assets/portfolio3.jpg';
// import IMG4 from '../../assets/portfolio4.jpg';
// import IMG5 from '../../assets/portfolio5.png';
// import IMG6 from '../../assets/portfolio6.jpg';
import {PiProjectorScreenChartLight} from 'react-icons/pi';

// DO NOT USE THE IMAGES IN THE PRODUCTION

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Music Player 🎹 ',
        github: 'https://github.com/awadhesh-kumar-verma/Music.github.io',
        demo: 'https://awadhesh-kumar-verma.github.io/Music.github.io/'
    },
    {
        id: 2,
        image: IMG2,
        title: 'To Do List',
        github: 'https://github.com/awadhesh-kumar-verma/To-di-list.github.io',
        demo: 'https://awadhesh-kumar-verma.github.io/To-di-list.github.io/'
    }
    // {
    //     id: 3,
    //     image: IMG3,
    //     title: 'Figma dashboard UI kit for data design web apps',
    //     github: 'https://github.com',
    //     demo: 'https://cdn.dribbble.com/userupload/9005348/file/original-8361e2038996c1224efca8480d4a101f.jpg?resize=1504x1128'
    // },
    // {
    //     id: 4,
    //     image: IMG4,
    //     title: 'Maintaining Task & Trackimg progress',
    //     github: 'https://github.com',
    //     demo: 'https://cdn.dribbble.com/userupload/9005348/file/original-8361e2038996c1224efca8480d4a101f.jpg?resize=1504x1128'
    // },
    // {
    //     id: 5,
    //     image: IMG5,
    //     title: 'Charts templates & infographics in Figma',
    //     github: 'https://github.com',
    //     demo: 'https://cdn.dribbble.com/userupload/9005348/file/original-8361e2038996c1224efca8480d4a101f.jpg?resize=1504x1128'
    // },
    // {
    //     id: 6,
    //     image: IMG6,
    //     title: 'Charts templates & infographics in Figma',
    //     github: 'https://github.com',
    //     demo: 'https://cdn.dribbble.com/userupload/9005348/file/original-8361e2038996c1224efca8480d4a101f.jpg?resize=1504x1128'
    // }
]

const Portfolio = () => {
    return (
        <section id='portfolio' >
            <h5>My recent Work</h5>
            <h2> <PiProjectorScreenChartLight/> Portfolio</h2>

            <div className='container portfolio__container' >
            {
                data.map(({id, image, title, github, demo}) => {
                    return (
                        <article key={id} className='portfolio__item' >
                            <div className='portfolio__item-image' >
                                <img src={image} alt={title} />
                            </div>
                            <h3> {title} </h3>
                            <div className='portfolio__item-cta' >
                                <a href={github} className='btn' target=''>Github</a>
                                <a href={demo} className='btn btn-primary' target=''>Live Demo</a>
                            </div>
                        </article>
                    )
                })
            }
            </div>
        </section>
    );
};

export default Portfolio;










// import React from 'react'
// import './portfolio.css';
// import IMG1 from '../../assets/portfolio1.jpg';
// import IMG2 from '../../assets/portfolio2.jpg';
// import IMG3 from '../../assets/portfolio3.jpg';
// import IMG4 from '../../assets/portfolio4.jpg';
// import IMG5 from '../../assets/portfolio5.png';
// import IMG6 from '../../assets/portfolio6.jpg';

// const Portfolio = () => {
//     return (
//         <section id='portfolio' >
//             <h5>My recent Work</h5>
//             <h2>Portfolio</h2>

//             <div className='container portfolio__container' >
//                 <article className='portfolio__item' >
//                     <div className='portfolio__item-image' >
//                         <img src={IMG1} alt='' />
//                     </div>
//                     <h3>This is a portfolio item title</h3>
//                     <div className='portfolio__item-cta'>
//                         <a href='https://github.com' className='btn' target='_blank' >Github</a>
//                         <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank' >Live Demo</a>
//                     </div>
//                 </article>
//                 <article className='portfolio__item' >
//                     <div className='portfolio__item-image' >
//                         <img src={IMG2} alt='' />
//                     </div>
//                     <h3>This is a portfolio item title</h3>
//                     <div className='portfolio__item-cta'>
//                         <a href='https://github.com' className='btn' target='_blank' >Github</a>
//                         <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank' >Live Demo</a>
//                     </div>
//                 </article>
//                 <article className='portfolio__item' >
//                     <div className='portfolio__item-image' >
//                         <img src={IMG3} alt='' />
//                     </div>
//                     <h3>This is a portfolio item title</h3>
//                     <div className='portfolio__item-cta'>
//                         <a href='https://github.com' className='btn' target='_blank' >Github</a>
//                         <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank' >Live Demo</a>
//                     </div>
//                 </article>
//                 <article className='portfolio__item' >
//                     <div className='portfolio__item-image' >
//                         <img src={IMG4} alt='' />
//                     </div>
//                     <h3>This is a portfolio item title</h3>
//                     <div className='portfolio__item-cta'>
//                         <a href='https://github.com' className='btn' target='_blank' >Github</a>
//                         <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank' >Live Demo</a>
//                     </div>
//                 </article>
//                 <article className='portfolio__item' >
//                     <div className='portfolio__item-image' >
//                         <img src={IMG5} alt='' />
//                     </div>
//                     <h3>This is a portfolio item title</h3>
//                     <div className='portfolio__item-cta'>
//                         <a href='https://github.com' className='btn' target='_blank' >Github</a>
//                         <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank' >Live Demo</a>
//                     </div>
//                 </article>
//                 <article className='portfolio__item' >
//                     <div className='portfolio__item-image' >
//                         <img src={IMG6} alt='' />
//                     </div>
//                     <h3>This is a portfolio item title</h3>
//                     <div className='portfolio__item-cta'>
//                         <a href='https://github.com' className='btn' target='_blank' >Github</a>
//                         <a href='https://dribbble.com/Alien_pixels' className='btn btn-primary' target='_blank' >Live Demo</a>
//                     </div>
//                 </article>
//             </div>
//         </section>
//     );
// };

// export default Portfolio;