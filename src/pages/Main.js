import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import About from './About'
import Services from './Services'

function Main() {
    return (
        <div>

            <div>
                <Navbar />
            </div>

            <div className=''>
                {/* <Header /> */}
            </div>

            <div id='about'>
                <About />
            </div>

            <div id='services'>
                <Services />
            </div>
        </div>
    )
}

export default Main
