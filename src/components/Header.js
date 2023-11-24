import React from 'react'
import { BsChevronDoubleDown } from 'react-icons/bs';

import Typewriter from 'typewriter-effect';

function Header() {
  return (
    <div className='lg:flex w-full lg:h-[100vh] lg:py-20 py-[30%] lg:my-0 bg-cover'
      style={{
        backgroundImage: `url(header.jpg)`,
        // backgroundColor: "#B99470"
      }}>
      <iframe className='lg:w-0 w-full lg:h-[100vh] h-[40vh] lg:ml-auto' src="https://lottie.host/?file=ddf7c79b-d249-404a-8ffb-3936b90496fc/LT2rMZ8aiC.json"></iframe>

      <div className='lg:w-1/2 w-full lg:my-40 mb-[20%] mx-auto text-white text-center'>
        <h2 className='w-fit lg:mx-20 mx-auto flex lg:text-5xl text-4xl font-bold text-center md:mb-10 mb-14' id='signupHeading' >
          WE &nbsp;
          <div className='font-bold text-[#6F94C4EB] tracking-widest' id='signupsubHeading'>

            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: [
                  'DESIGN', 'DEVELOP', 'DELIVER'
                ],
              }} />
          </div>
        </h2>
        <h3 className='w-fit text-white lg:text-base text-xl lg:mx-10 mx-1 lg:my-2 my-5 tracking-widest'>Breathing life into Ideas, Crafting and Creating with Excellence.</h3>
        <h3 className='w-full text-white lg:text-base text-base text-center tracking-widest font-bold'>Your gateway to <span className='text-[#b6984b]'>seamless solutions</span>.</h3>
      </div>
      <div className='mt-auto animate-bounce hover:animate-none mx-auto w-fit'>
        <a href='#about' className='w-fit text-center mx-auto text-white text-2xl'><BsChevronDoubleDown /></a>
      </div>
      <iframe className='lg:w-1/2 w-0 lg:h-[100vh] h-0' src="https://lottie.host/?file=ddf7c79b-d249-404a-8ffb-3936b90496fc/LT2rMZ8aiC.json"></iframe>
    </div>
  )
}

export default Header
