import React from 'react'
import './awad.css';
import CTA from './CTA';
import ME from '../../assets/awad (1).png';
import HeaderSocials from './HeaderSocials';
import { HiArrowNarrowRight } from 'react-icons/hi';

import { TypeAnimation } from 'react-type-animation';

const Awad = () => {
    return (
        <main id="home" >
            <div className='container header__container'>
                <h5 className='hello' >Hi There, I'm</h5>
                <p><span className='name' >Awadhesh Kumar</span> Verma</p>
                {/* <h5 className='texti text' >MERN Stack Developer || Competitive Programmer </h5> */}
                {/* <EFFECT /> */}

                <h5>
                <TypeAnimation className='texti' 
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        '➡️ MERN Stack Developer',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        '➡️ Competitive Programmer',
                        1000,
                        '➡️ UI/UX Developer',
                        1000,
                        '➡️ Open-Source Contributor',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '1.3em', display: 'inline-block' }}
                    repeat={Infinity}
                />
                </h5>


                <CTA />
                <div className='sose' >
                    <HeaderSocials />

                    <div className='me'>
                        <img src={ME} alt='me' />
                    </div>

                    <a href='#contact' className='scroll__down'>Scroll Down &nbsp;<HiArrowNarrowRight /> </a>
                </div>
            </div>
        </main>
    )
};

export default Awad;