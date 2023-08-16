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
                        <article className='about__card' >
                            <FiAward className='about__icon' />
                            <h5>Experience</h5>
                            <small>2+ Years Working</small>
                        </article>



                        <article className='about__card' >
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small>10+ Completed</small>
                        </article>

                        <article className='about__card' >
                            <PiCertificateBold className='about__icon' />
                            <h5>Internships</h5>
                            <small>&nbsp;&nbsp;&nbsp;&nbsp; - InternPe &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</small> <br/>
                            <small>&nbsp;&nbsp;&nbsp;&nbsp; - Bharat Intern &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</small><br/>
                            <small>&nbsp;&nbsp;&nbsp;&nbsp; - Effervescene, IIIT Allahabad</small>

                        </article>
                    </div>

                    <p>
                        Pursuing Bachelors(B.Tech) via Computer Science, ability to work with C, C++, python, DSA and MERN Stack Development, Can work well under pressure and make the best of any situation and Passionate individual with great interpersonal and communication skills.
                    </p>

                    <a href='#contact' className='btn btn-primary' >Let's Talk</a>
                </div>
            </div>
        </section>
    );
};

export default About;