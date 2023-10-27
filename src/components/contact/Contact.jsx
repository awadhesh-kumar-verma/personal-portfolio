import React from 'react'
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import {BsFillSendFill} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import {BiMessageSquareDetail} from 'react-icons/bi';

import { BsPatchCheckFill } from 'react-icons/bs';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ghx7yjk', 'template_dncbe88', form.current, '0XGWXUnZwkegFso37')
        e.target.reset();
      };
    return (
        <section id='contact' >
            <h5>Get In Touch</h5>
            <h2> <BiMessageSquareDetail/> Cont<span className='cont' >act Me</span></h2>

            <div className='container contact__container' >
                <div className='contact__options' >
                    <article className='contact__option' >
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4> <BsPatchCheckFill  className='stl' /> email</h4>
                        <h6>vermaavd17476765@gmail.com</h6>
                        {/* <button>Send a messase</button> */}
                        <a href='mailto:vermaavd17476765@gmail.com' target=''> Send a message </a>
                    </article>
                    <article className='contact__option' >
                        <RiMessengerLine className='contact__option-icon' />
                        <h4 className='a1'> <BsPatchCheckFill  className='stl' /> messenger</h4>
                        {/* <h6>Facebook-Awadhes11803932</h6> */}
                        <a href='https://www.facebook.com/Awadhes11803932' target='' style={{color:'white',marginTop:-9}} className='a1' ><h6>Facebook-Awadhes11803932</h6></a>
                        <br/>
                        <a href='https://m.me/Awadhes11803932' target=''> Send a message</a>
                    </article>
                    <article className='contact__option' >
                        <BsWhatsapp className='contact__option-icon' />
                        <h4> <BsPatchCheckFill  className='stl' /> whatsapp</h4>
                        <h6>+919569616092</h6>
                        <li className='desktop' ><a href='https://web.whatsapp.com/send?phone=+919569616092' target='' >Send a message</a></li>
                        <li className='mobile' ><a href='https://api.whatsapp.com/send?phone=+919569616092' target='' >Send a message</a></li>
                        {/* <a href='https://web.whatsapp.com/send?phone=+919569616092' target='_blank' >Send a message</a>
                        <a href='https://api.whatsapp.com/send?phone=+919569616092' target='_blank' >Send a message</a> */}
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail} >
                    <input type='text' name='name' placeholder='Your Full Name' required />
                    <input type='email' name='email' placeholder='Your Email' required />
                    <textarea name='message' rows='9' placeholder='Your Message' required ></textarea>
                    <button type='submit' className='btn btn-primary btn2' >SUBMIT &nbsp; <BsFillSendFill /> </button>
                </form>
            </div>
        </section>
    )
};

export default Contact;