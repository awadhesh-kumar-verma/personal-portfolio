import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import "./navbar.css";
import ME from '../../assets/logo5.png';

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <a href='#home' ><h3>&lt;&#47;&gt; Awadhesh</h3></a>
            
            <navi ref={navRef} >
                <a href='#home'>Home</a>
                <a href='#about'>About</a>
                <a href='#experience'>Experience</a>
                <a href='#portfolio'>Projects</a>
                <a href='#testimonials'>Certificates</a>
                <a href='#contact'>Contact</a>
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