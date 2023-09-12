import React from 'react'
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me1.png';
import HeaderSocials from './HeaderSocials';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Header = () => {
    return (
        <header id="home">
            <div className='container header__container'>
                <h5 className='hello' >Hi There, I'm</h5>
                <p><span className='name' >Awadhesh Kumar</span> Verma</p>
                <h5 className='texti text' >MERN Stack Developer || Competitive Programmer </h5>
                <CTA />
                <div className='sose' >
                    <HeaderSocials />

                    <div className='me'>
                        <img src={ME} alt='me' />
                    </div>

                    <a href='#contact' className='scroll__down'>Scroll Down &nbsp;<HiArrowNarrowRight /> </a>
                </div>

            </div>
        </header>
    )
};

export default Header;