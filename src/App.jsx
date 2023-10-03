import React from 'react';

import Navbar from './components/Navbar/Navbar';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Awad from './components/awad/Awad';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';

const App = () => {
    return (
        <>
            <Navbar />
            <Awad />
            <Nav />
            <About />
            <Experience />
            <Portfolio />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
};

export default App;