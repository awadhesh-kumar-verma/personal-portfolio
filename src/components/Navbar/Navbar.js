import { useRef } from 'react';
// import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';

import {AiOutlineHome} from 'react-icons/ai';
import {BiUser} from 'react-icons/bi';
import {BiBook} from 'react-icons/bi';
import {PiProjectorScreenChartLight} from 'react-icons/pi';
import {LiaCertificateSolid} from 'react-icons/lia';
import {BiMessageSquareDetail} from 'react-icons/bi';

import "./navbar.css";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <a href='#home' ><h3>&lt; Awadhesh &#47;&gt; </h3></a>

            <navi ref={navRef} onClick={showNavbar} >

                <a href='#home'><span className='deco' >Home</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <a href='#about'><span className='deco' >About</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <a href='#experience'><span className='deco' >Experience</span></a>
                <a href='#portfolio'><span className='deco' >Projects</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <a href='#testimonials'>&nbsp;<span className='deco' >Certificates</span></a>
                <a href='#contact'>&nbsp;&nbsp;<span className='deco' >Contact</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                {/* <button className='navi-btn navi-close-btn' onClick={showNavbar} >
                    <FaTimes />
                </button> */}
            </navi>

            <navi2 ref={navRef} onClick={showNavbar} >

                <a href='#home'>< AiOutlineHome />&nbsp; Home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <a href='#about'>< BiUser />&nbsp; About&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <a href='#experience'>< BiBook />&nbsp; Experience</a>
                <a href='#portfolio'>< PiProjectorScreenChartLight /> &nbsp;Projects&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <a href='#testimonials'>&nbsp;< LiaCertificateSolid />&nbsp; Certificates</a>
                <a href='#contact'>&nbsp;&nbsp;< BiMessageSquareDetail />&nbsp; Contact&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                {/* <button className='navi-btn navi-close-btn' onClick={showNavbar} >
                    <FaTimes />
                </button> */}
            </navi2>
            <button className='navi-btn' onClick={showNavbar} >
                <FaBars />
            </button>

        </header>

    );
}

export default Navbar;