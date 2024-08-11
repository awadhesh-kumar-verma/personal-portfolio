import React from 'react';
import { BiLogoLinkedin } from 'react-icons/bi';
import Li from '../../assets/Linkedin1.png';
import { FaGithub } from 'react-icons/fa';
import git2 from '../../assets/github2.png';
// import {FaFacebookF} from 'react-icons/fa';
import fa from '../../assets/messenger.png';
import insta from '../../assets/instagram.png';
import { BsMessenger } from "react-icons/bs";
import { PiInstagramLogoBold } from "react-icons/pi";

const HeaderSocials = () => {
    return (
        <div>
            <div id='id1'>
                {/* <a href='https://linkedin.com/in/awadhesh-kumar-verma-636982255'  target=''><BiLogoLinkedin /></a> */}
                <a href='https://linkedin.com/in/awadhesh-kumar-verma-636982255' target=''> <img src={Li} alt='sorry'/> </a>
                {/* <a href='https://github.com/awadhesh-kumar-verma' target=''><FaGithub /></a> */}
                <a href='https://github.com/awadhesh-kumar-verma' target='' className='aa2'> <img src={git2} alt='sorry'/> </a>
                {/* <a href='https://www.facebook.com/Awadhes11803932' target=''><FaFacebookF /></a> */}
                <a href='https://m.me/Awadhes11803932' target=''> <img src={fa} alt='sorry'/> </a>
                <a href='https://www.instagram.com/at_official_210321' target=''> <img src={insta} alt='sorry'/> </a>
            </div>
            <div className='.header__socials1' id='id2'>
                <a href='https://linkedin.com/in/awadhesh-kumar-verma-636982255'  target=''> <span className='cls' > <BiLogoLinkedin /></span></a>
                <a href='https://github.com/awadhesh-kumar-verma' target=''> <span className='cls' > <FaGithub /></span></a>
                <a href='https://m.me/Awadhes11803932' target=''> <span className='cls' > <BsMessenger /></span></a>
                <a href='https://www.instagram.com/at_official_210321' target=''> <span className='cls' > <PiInstagramLogoBold /></span></a>
            </div>
        </div>

    );
};

export default HeaderSocials;