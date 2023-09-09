import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href='https://linkedin.com/in/awadhesh-kumar-verma-636982255'  target=''><BsLinkedin /></a>
            <a href='https://github.com/vermaavd17476765' target=''><FaGithub /></a>
        </div>
    );
};

export default HeaderSocials;