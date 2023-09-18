import React from 'react'
import './about.css';
import ME from '../../assets/awad1 (1).png';
import { FiAward } from 'react-icons/fi';
import { PiCertificateBold } from 'react-icons/pi';
import { VscFolderLibrary } from 'react-icons/vsc';
import { BiUser } from 'react-icons/bi';

const About = () => {
    return (
        <section id='about' >
            <h5>Get to Know</h5>
            <h2> <BiUser /> Abo<span className='about2' >ut Me</span></h2>

            <div className='container about__container' >
                <div className='about__me' >
                    <div className='about__me-image' >
                        <img src={ME} alt='About' />
                    </div>
                </div>

                <div className='about__content' >
                    <div className='about__cards' >
                        <article className='art about__card' >
                            <FiAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>&raquo; 2+ Years Working</small>
                        </article>

                        <article className='about__card' >
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>&raquo; 10+ Completed</small>
                        </article>
                    </div>

                    <div className='internship' >
                        <div className='intern'>
                            <div><PiCertificateBold className='icon' /></div>
                            <h5>Internships: </h5>
                            <ul>
                                <li> &raquo; InternPe - Web Development </li>
                                <li> &raquo; Bharat Intern - Full Stack Web Development</li>
                                <li> &raquo; Effervescene, IIIT Allahabad - Web Development Frontend</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <p className='intro' >
                &raquo; Hi, I'm Awadhesh Kumar Verma! 🚀 , a passionate and motivated MERN Stack Developer 💻with a strong problem solving mindset🤝, Pursuing Bachelor's degree(B.Tech) via Computer Science💻.
                <br/>
                <br/>
                &raquo; I have the ability🚰to work with C, C++, python, DSA and MERN Stack Development, Can work well under pressure and make the best😑of any situation and Passionate individual with great interpersonal and communication🎯skills.
                <br/>
                <br/>
                &raquo; Feel free🆓to explore my projects on GitHub and connect with me on LinkedIn😑.
            </p>

            <a href='https://www.linkedin.com/in/awadhesh-kumar-verma-636982255' className='butt' >LinkedIn</a>
            <a href='https://github.com/awadhesh-kumar-verma' className='btn btn-primary butt' >GitHub</a>
        </section>
    );
};

export default About;