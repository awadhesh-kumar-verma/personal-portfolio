import React from 'react'
import './experience.css';
import { BsPatchCheckFill } from 'react-icons/bs';
import { BiBook } from 'react-icons/bi';

const Experience = () => {
    return (
        <section id='experience' >
            <h5>What Skills I Have</h5>
            <h2> <BiBook /> My <span className='exe' >Experience</span></h2>

            <div className='container experience__container' >



                <div className='experience__backend' >
                    <h3>Competitive Programming</h3>
                    <div className='experience__content' >
                        <article className='experience__details' >
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>C</h4>
                                <small className='text-light1' >Intermediate</small>
                            </div>
                        </article>

                        <article className='experience__details' >
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>C++</h4>
                                <small className='text-light1' >Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details' >
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Python</h4>
                                <small className='text-light1' >Intermediate</small>
                            </div>
                        </article>

                        <article className='experience__details' >
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Data Structure</h4>
                                <small className='text-light1' >Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details' >
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>DAA</h4>
                                <small className='text-light1' >Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>



                <div className='experience__frontend' >
                    <h3> Web dev : Frontend</h3>
                    <div className='experience__content' >
                        <article className='experience__details' >
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light1' >Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details' >
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light1' >Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details' >
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light1' >Intermediate</small>
                            </div>
                        </article>

                        <article className='experience__details' >
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>BootStrap</h4>
                                <small className='text-light1' >Experienced</small>
                            </div>
                        </article>

                        {/* <article className='experience__details' >
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Tailwind</h4>
                                <small className='text-light' >Experienced</small>
                            </div>
                        </article> */}

                        <article className='experience__details' >
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>React</h4>
                                <small className='text-light1' >Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>

                {/* END OF FRONTEND */}

                <div className='experience__backend' >
                    <h3>Web dev : Backend</h3>
                    <div className='experience__content' >
                        <article className='experience__details' >
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Node JS</h4>
                                <small className='text-light1' >Intermediate</small>
                            </div>
                        </article>

                        <article className='experience__details' >
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Express JS</h4>
                                <small className='text-light1' >Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details' >
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>MongoDB</h4>
                                <small className='text-light1' >Intermediate</small>
                            </div>
                        </article>

                        {/* <article className='experience__details' >
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>PHP</h4>
                                <small className='text-light' >Experienced</small>
                            </div>
                        </article> */}

                        <article className='experience__details' >
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>MySQL</h4>
                                <small className='text-light1' >Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>


                <div className='experience__frontend' >
                    <h3> Some other Skills</h3>
                    <div className='experience__content' >
                        <article className='experience__details' >
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>LaTex</h4>
                                <small className='text-light1' >Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details' >
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h5>Computer Network</h5>
                                <small className='text-light1' >Intermediate</small>
                            </div>
                        </article>

                        <article className='experience__details' >
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>DBMS</h4>
                                <small className='text-light1' >Experienced</small>
                            </div>
                        </article>

                        <article className='experience__details' >
                            <BsPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Git</h4>
                                <small className='text-light1' >Experienced</small>
                            </div>
                        </article>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experience;