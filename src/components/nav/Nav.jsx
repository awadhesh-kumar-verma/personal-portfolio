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

const Nav = () => {
    const [activeNav,setActiveNav] = useState('#');
    return (
        <nav>
            <a href='#home' onClick={ ()=> setActiveNav('#home') } className={activeNav === '#home' ? 'active' : '' } ><AiOutlineHome /></a>
            <a href='#about' onClick={ ()=> setActiveNav('#about') } className={activeNav === '#about' ? 'active' : '' } ><BiUser /></a>
            <a href='#experience' onClick={ ()=> setActiveNav('#experience') } className={activeNav === '#experience' ? 'active' : '' }><BiBook /></a>
            <a href='#portfolio' onClick={ ()=> setActiveNav('#portfolio') } className={activeNav === '#portfolio' ? 'active' : '' }><PiProjectorScreenChartLight /></a>
            <a href='#testimonials' onClick={ ()=> setActiveNav('#testimonials') } className={activeNav === '#testimonials' ? 'active' : '' }><LiaCertificateSolid /></a>
            <a href='#contact' onClick={ ()=> setActiveNav('#contact') } className={activeNav === '#contact' ? 'active' : '' }><BiMessageSquareDetail /></a>
            <a href='#footer' onClick={ ()=> setActiveNav('#footer') } className={activeNav === '#footer' ? 'active' : '' }><TbSitemap /></a>
        </nav>
    );
};

export default Nav; 