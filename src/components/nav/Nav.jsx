import React from 'react'
import './nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {BiUser} from 'react-icons/bi';
import {BiBook} from 'react-icons/bi';
import {PiProjectorScreenChartLight} from 'react-icons/pi';
import {LiaCertificateSolid} from 'react-icons/lia';
import {BiMessageSquareDetail} from 'react-icons/bi';
import {TbSitemap} from 'react-icons/tb';
import {useState} from 'react';

import { Tooltip } from '@mui/material';

const Nav = () => {
    const [activeNav,setActiveNav] = useState('#');
    return (
        <nav>
            <Tooltip title="Home" >
            <a href='#home' onClick={ ()=> setActiveNav('#home') } className={activeNav === '#home' ? 'active' : '' } ><AiOutlineHome /></a>
            </Tooltip>
            
            <Tooltip title="About" >
            <a href='#about' onClick={ ()=> setActiveNav('#about') } className={activeNav === '#about' ? 'active' : '' } ><BiUser /></a>
            </Tooltip>

            <Tooltip title="Experience" >
            <a href='#experience' onClick={ ()=> setActiveNav('#experience') } className={activeNav === '#experience' ? 'active' : '' }><BiBook /></a>
            </Tooltip>

            <Tooltip title="Portfolio" >
            <a href='#portfolio' onClick={ ()=> setActiveNav('#portfolio') } className={activeNav === '#portfolio' ? 'active' : '' }><PiProjectorScreenChartLight /></a>
            </Tooltip>

            <Tooltip title="Certifications" >
            <a href='#testimonials' onClick={ ()=> setActiveNav('#testimonials') } className={activeNav === '#testimonials' ? 'active' : '' }><LiaCertificateSolid /></a>
            </Tooltip>

            <Tooltip title="Contact" >
            <a href='#contact' onClick={ ()=> setActiveNav('#contact') } className={activeNav === '#contact' ? 'active' : '' }><BiMessageSquareDetail /></a>
            </Tooltip>

            <Tooltip title="Footer" >
            <a href='#footer' onClick={ ()=> setActiveNav('#footer') } className={activeNav === '#footer' ? 'active' : '' }><TbSitemap /></a>
            </Tooltip>
            
        </nav>
    );
};

export default Nav; 