import React from 'react';
import CV from '../../assets/Resume.pdf';
import {FiDownload} from 'react-icons/fi';
import {RiKakaoTalkFill} from 'react-icons/ri';

import Tooltip from '@mui/material/Tooltip';

const CTA = () => {
    return (
        <div className='cta'>
            <Tooltip title="Download Resume" >
                <a href={CV} download className='btn1' >Resume &nbsp; <span className='down' > <FiDownload/></span> </a>
            </Tooltip>

            <Tooltip title="Contact" >
            <a href="#contact" className='btn btn-primary' >Let's talk <RiKakaoTalkFill/> </a>
            </Tooltip>
        </div>
    );
};

export default CTA;