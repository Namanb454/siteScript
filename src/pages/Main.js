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

function Main() {
    return (

        <div>

            <div>
                <Navbar />
            </div>

            {/* <div> */}
            {/* <Header /> */}
            {/* </div> */}

            <div id='about'>
                <About />
            </div>

            <div id='services'>
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
