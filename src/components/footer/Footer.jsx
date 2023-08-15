import React from 'react'
import './footer.css';
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';
import {BsGithub} from 'react-icons/bs';
import {FaLinkedinIn} from 'react-icons/fa';
import {TbSitemap} from 'react-icons/tb';



const Footer = () => {
    return (
        <footer id='footer' >
            {/* <a href='#' className='footer__logo'>Awadhesh</a> */}
            <span><TbSitemap/></span>
            {/* <a href='#' className='footer__logo'>&nbsp; Sitemap</a> */}

            <ul className='permalinks' >
                <li> <a href='#' >Home</a> </li>
                <li> <a href='#about' >About</a> </li>
                <li> <a href='#experience' >Experience</a> </li>
                {/* <li> <a href='#services' >Services</a> </li> */}
                <li> <a href='#portfolio' >Portfolio</a> </li>
                {/* <li> <a href='#testimonials' >Testimonials</a> </li> */}
                <li> <a href='#contact' >Contact</a> </li>
            </ul>

            <div className='footer__socials' >
                <a href='https://www.linkedin.com/in/awadhesh-kumar-verma-636982255' target='_blank' > <FaLinkedinIn /> </a>
                <a href='https://facebook.com/Awadhes11803932' target='_blank' > <FaFacebookF /> </a>
                <a href='https://www.instagram.com/at_official_210321' target='_blank' > <FiInstagram /> </a>
                <a href='https://twitter.com/Awadhes11803932' target='_blank' > <IoLogoTwitter /> </a>
                <a href='https://github.com/awadhesh-kumar-verma' target='_blank' > < BsGithub /> </a>
            </div>

            <div className='footer__copyright' >
                <small> &copy; awadhesh-verma. All rights reserved </small>
            </div>
        </footer>
    )
};

export default Footer;