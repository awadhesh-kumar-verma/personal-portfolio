import React from 'react'
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import {BiMessageSquareDetail} from 'react-icons/bi';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ghx7yjk', 'template_dncbe88', form.current, '0XGWXUnZwkegFso37')
        e.target.reset();
        //   .then((result) => {
        //       console.log(result.text);
        //   }, (error) => {
        //       console.log(error.text);
        //   });
      };
    return (
        <section id='contact' >
            <h5>Get In Touch</h5>
            <h2> <BiMessageSquareDetail/> Contact Me</h2>

            <div className='container contact__container' >
                <div className='contact__options' >
                    <article className='contact__option' >
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h6>vermaavd17476765@gmail.com</h6>
                        {/* <button>Send a messase</button> */}
                        <a href='mailto:vermaavd17476765@gmail.com' target='_blank'>Send a message</a>
                    </article>
                    <article className='contact__option' >
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Messenger</h4>
                        {/* <h6>Facebook-Awadhes11803932</h6> */}
                        <a href='https://www.facebook.com/Awadhes11803932' target='_blank' style={{color:'white',marginTop:-9}} ><h6>Facebook-Awadhes11803932</h6></a>
                        <br/>
                        <a href='https://m.me/Awadhes11803932' target='_blank'>Send a message</a>
                    </article>
                    <article className='contact__option' >
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>Whatsapp</h4>
                        <h6>+919569616092</h6>
                        <li className='desktop' ><a href='https://web.whatsapp.com/send?phone=+919569616092' target='_blank' >Send a message</a></li>
                        <li className='mobile' ><a href='https://api.whatsapp.com/send?phone=+919569616092' target='_blank' >Send a message</a></li>
                        {/* <a href='https://web.whatsapp.com/send?phone=+919569616092' target='_blank' >Send a message</a>
                        <a href='https://api.whatsapp.com/send?phone=+919569616092' target='_blank' >Send a message</a> */}
                    </article>
                </div>
                {/* END OF CONTACT OPTIONS */}
                <form ref={form} onSubmit={sendEmail} >
                    <input type='text' name='name' placeholder='Your Full Name' required />
                    <input type='email' name='email' placeholder='Your Email' required />
                    <textarea name='message' rows='7' placeholder='Your Message' required ></textarea>
                    <button type='submit' className='btn btn-primary' >Send Message</button>
                </form>
            </div>
        </section>
    )
};

export default Contact;