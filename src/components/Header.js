import React from 'react'
import Typewriter from 'typewriter-effect';

function Header() {
  return (
    <div className='lg:flex w-full lg:h-[100vh] py-10 lg:my-0 bg-cover'
      style={{
        backgroundImage: `url(header.jpg)`,
      }}>

      <iframe className='lg:w-0 w-full lg:h-[100vh] h-[50vh] lg:ml-auto' src="https://lottie.host/?file=ddf7c79b-d249-404a-8ffb-3936b90496fc/LT2rMZ8aiC.json"></iframe>

      <div className='lg:w-1/2 w-full lg:my-40 my-20 mx-auto text-white text-center'>
        <h2 className='w-fit lg:mx-20 mx-auto flex lg:text-5xl text-2xl font-bold text-center md:mb-10 ' id='signupHeading' >
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
        <h3 className='w-fit text-white lg:text-base text-sm lg:mx-11 mx-2 lg:my-0 my-5 tracking-widest'>Breathing life into Ideas, Crafting and Creating with Excellence.</h3>
        <h3 className='w-full text-white lg:text-base text-sm text-center tracking-widest font-bold'>Your gateway to seamless solutions.</h3>
      </div>
      <iframe className='lg:w-1/2 w-0 lg:h-[100vh] h-0' src="https://lottie.host/?file=ddf7c79b-d249-404a-8ffb-3936b90496fc/LT2rMZ8aiC.json"></iframe>
    </div>
  )
}

export default Header
