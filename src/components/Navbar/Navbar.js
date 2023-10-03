import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import "./navbar.css";

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <a href='#home' ><h3>&lt;&#47;&gt; Awadhesh</h3></a>
            
            <navi ref={navRef} >
                <a href='#home'>Home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <a href='#about'>About&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <a href='#experience'>Experience</a>
                <a href='#portfolio'>Projects&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <a href='#testimonials'>&nbsp;Certificates</a>
                <a href='#contact'>&nbsp;&nbsp;Contact&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <button className='navi-btn navi-close-btn' onClick={showNavbar} >
                    <FaTimes />
                </button>
            </navi>
            <button className='navi-btn' onClick={showNavbar} >
                <FaBars />
            </button>
            
        </header>

    );
}

export default Navbar;