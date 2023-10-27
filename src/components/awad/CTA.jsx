import React from 'react';
import CV from '../../assets/Resume.pdf';
import {FiDownload} from 'react-icons/fi';
import {RiKakaoTalkFill} from 'react-icons/ri';

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn1' >Resume &nbsp; <span className='down' > <FiDownload/></span> </a>
            <a href="#contact" className='btn btn-primary' >Let's talk <RiKakaoTalkFill/> </a>
        </div>
    );
};

export default CTA;