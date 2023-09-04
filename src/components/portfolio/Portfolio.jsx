import React from 'react'
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpeg';
import IMG2 from '../../assets/To-do-list.png';
import {PiProjectorScreenChartLight} from 'react-icons/pi';

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
    },
    {
        id: 3,
        image: IMG1,
        title: 'Music Player 🎹 ',
        github: 'https://github.com/awadhesh-kumar-verma/Music.github.io',
        demo: 'https://awadhesh-kumar-verma.github.io/Music.github.io/'
    },
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
    },
    {
        id: 3,
        image: IMG1,
        title: 'Music Player 🎹 ',
        github: 'https://github.com/awadhesh-kumar-verma/Music.github.io',
        demo: 'https://awadhesh-kumar-verma.github.io/Music.github.io/'
    },
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
    },
    {
        id: 3,
        image: IMG1,
        title: 'Music Player 🎹 ',
        github: 'https://github.com/awadhesh-kumar-verma/Music.github.io',
        demo: 'https://awadhesh-kumar-verma.github.io/Music.github.io/'
    }
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