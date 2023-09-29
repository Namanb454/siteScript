import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import About from './About'
import Services from './Services'
import Feature from './Feature'
import Contact from './Contact'
// import { FaQ } from 'react-icons/fa6'
import Accordion from './Accordion'
import Footer from '../components/Footer'
import {
    SmoothScroll,
    initTE,
} from "tw-elements";

initTE({ SmoothScroll });

function Main() {
    return (

        <div className='scroll-smooth hover:scroll-auto' data-te-smooth-scroll-init>

            <div className=' bg-white scroll-smooth'>
                <Navbar />
            </div>

            <div className='scroll-smooth'>
                <Header />
            </div>

            <div id='about' className='scroll-smooth'>
                <About />
            </div>

            <div id='services' className='scroll-smooth'>
                <Services />
            </div>

            <div id='features'>
                <Feature />
            </div>

            <div id='contact'>
                <Contact />
            </div>

            <div id='help'>
                <Accordion />
            </div>

            <div id=''>
                <Footer />
            </div>
        </div>
    )
}

export default Main
