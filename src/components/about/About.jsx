import React from 'react'
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FiAward } from 'react-icons/fi';
import { PiCertificateBold } from 'react-icons/pi';
import { VscFolderLibrary } from 'react-icons/vsc';
import { BiUser } from 'react-icons/bi';

const About = () => {
    return (
        <section id='about' >
            <h5>Get to Know</h5>
            <h2> <BiUser /> About Me</h2>

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
                &raquo; Pursuing Bachelors(B.Tech) via Computer Science, ability to work with C, C++, python, DSA and MERN Stack Development, Can work well under pressure and make the best of any situation and Passionate individual with great interpersonal and communication skills.
            </p>

            <a href='#contact' className='btn btn-primary butt' >Let's Talk</a>
        </section>
    );
};

export default About;