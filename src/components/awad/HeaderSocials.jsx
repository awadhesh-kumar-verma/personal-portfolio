import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import {FaFacebookF} from 'react-icons/fa';

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href='https://linkedin.com/in/awadhesh-kumar-verma-636982255'  target=''><BsLinkedin /></a>
            <a href='https://github.com/awadhesh-kumar-verma' target=''><FaGithub /></a>
            <a href='https://www.facebook.com/Awadhes11803932' target=''><FaFacebookF /></a>
        </div>
    );
};

export default HeaderSocials;