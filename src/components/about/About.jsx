import React from 'react'
import './about.css';
import ME from '../../assets/awad1 (2).png';
import { FiAward } from 'react-icons/fi';
import { PiCertificateBold } from 'react-icons/pi';
import { VscFolderLibrary } from 'react-icons/vsc';
// import { BiColor} from 'react-icons/bi';
import { BiUser } from 'react-icons/bi';
import {BiSolidRightArrow} from 'react-icons/bi';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import {DiGithub} from 'react-icons/di';

const About = () => {
    return (
        <section id='about' >
            <h5>&nbsp;&nbsp;&nbsp;Get to Know</h5>
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
                            <h5>Expeirence</h5>
                            <small><BiSolidRightArrow/> Fresher</small>
                        </article>

                        <article className='about__card' >
                            <VscFolderLibrary className='about__icon' />
                            <h5>Projects</h5>
                            <small><BiSolidRightArrow/> 10+</small>
                        </article>
                    </div>

                    <div className='internship' >
                        <div className='intern'>
                            <div><PiCertificateBold className='icon' /></div>
                            <h5>Internships: </h5>
                            <ul>
                                <li> <BiSolidRightArrow/> InternPe - Web Development </li>
                                <li> <BiSolidRightArrow/> Bharat Intern - Full Stack Web Development</li>
                                <li> <BiSolidRightArrow/> Effervescene, IIIT Allahabad-Web Development Frontend</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <p className='intro' >
                <span className='som'>&raquo;</span> Hi,I'm <span className='som'>Awadhesh Kumar Verma!</span> 🚀, a passionate and motivated <span className='som'>MERN Stack Developer</span> 💻with a strong problem solving mindset🤝, Pursuing <span className='som'>Bachelor's degree</span>(B.Tech) via <span className='som'>Computer Science</span>💻.
                <br/>
                <br/>
                <span className='som'>&raquo;</span> I have the ability🚰to work with <span className='som'>C</span>, <span className='som'>C++</span>, <span className='som'>python</span>, <span className='som'>DSA</span> and <span className='som'>MERN Stack Development</span>, Can work well under pressure and make the best😑of any situation and Passionate individual with great <span className='som'>interpersonal and communication🎯skills</span>.
                <br/>
                <br/>
                <span className='som'>&raquo;</span> Feel free🆓to explore my projects on <span className='som'>Github</span> and connect with me on <span className='som'>LinkedIn</span>😑.
            </p>

            <a href='https://www.linkedin.com/in/awadhesh-kumar-verma-636982255' className='butt' >LinkedIn <TiSocialLinkedinCircular/> </a>
            <a href='https://github.com/awadhesh-kumar-verma' className='btn btn-primary butt' >GitHub <DiGithub/> </a>
        </section>
    );
};

export default About;