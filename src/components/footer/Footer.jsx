import React from 'react'
import './footer.css';
// import {FaFacebookF} from 'react-icons/fa';
// import {FiInstagram} from 'react-icons/fi';
// import {IoLogoTwitter} from 'react-icons/io';
// import {BsGithub} from 'react-icons/bs';
// import {FaLinkedinIn} from 'react-icons/fa';
import {TbSitemap} from 'react-icons/tb';
import Li from '../../assets/Linkedin1.png';
import fa from '../../assets/facebook.png';
import insta from '../../assets/instagram1.jpg';
import Twitter from '../../assets/Twitter.png';
import git from '../../assets/github.png';


const Footer = () => {
    return (
        <footer id='footer' >
            {/* <a href='#' className='footer__logo'>Awadhesh</a> */}
            <span><TbSitemap/></span>
            {/* <a href='#' className='footer__logo'>&nbsp; Sitemap</a> */}

            <ul className='permalinks' >
                <li> <a href='#home' >Home</a> </li>
                <li> <a href='#about' >About</a> </li>
                <li> <a href='#experience' >Experience</a> </li>
                {/* <li> <a href='#services' >Services</a> </li> */}
                <li> <a href='#portfolio' >Portfolio</a> </li>
                {/* <li> <a href='#testimonials' >Testimonials</a> </li> */}
                <li> <a href='#contact' >Contact</a> </li>
            </ul>

            <div className='footer__socials' >
                {/* <a href='https://www.linkedin.com/in/awadhesh-kumar-verma-636982255' target='' > <FaLinkedinIn /> </a>
                <a href='https://facebook.com/Awadhes11803932' target='' > <FaFacebookF /> </a>
                <a href='https://www.instagram.com/at_official_210321' target='' > <FiInstagram /> </a>
                <a href='https://twitter.com/Awadhes11803932' target='' > <IoLogoTwitter /> </a>
                <a href='https://github.com/awadhesh-kumar-verma' target='' > < BsGithub /> </a> */}

                
                <a href='https://facebook.com/Awadhes11803932' target='' > <img src={fa} alt='sorry'/> </a>
                <a href='https://www.instagram.com/at_official_210321' target='' > <img src={insta} alt='sorry'/> </a>
                <a href='https://www.linkedin.com/in/awadhesh-kumar-verma-636982255' target='' > <img src={Li} alt='sorry'/> </a>
                <a href='https://twitter.com/Awadhes11803932' target='' > <img src={Twitter} alt='sorry'/> </a>
                <a href='https://github.com/awadhesh-kumar-verma' target='' > <img src={git} alt='sorry'/> </a>
            </div>

            <div className='footer__copyright' >
                <small> &copy; awadhesh-verma. All rights reserved </small>
            </div>
        </footer>
    )
};

export default Footer;