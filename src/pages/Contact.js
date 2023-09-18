import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaSquareXTwitter } from 'react-icons/fa6';


function Contact() {
    return (
        <div className='lg:py-24 py-60'>
            <div class="flex justify-center items-center w-screen mx-auto h-screen bg-cover py-24">
                <div class="container mx-auto my-4 lg:px-20">
                    <h1 class="w-fit my-10 font-semibold mx-auto lg:text-4xl text-base text-[#1C314C] tracking-wider">
                        <span>Your Questions Are Important To Us,</span>
                        <br />Don't Hesitate To<span className='font-bold'> Get In Touch. </span></h1>

                    <div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-10 lg:pr-40 mr-auto bg-cover rounded-xl shadow-2xl">
                        <div class="flex">
                            <h1 class="font-semibold text-3xl text-[#1C314C] tracking-wide font-serif">Let's Connect</h1>
                        </div>
                        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                            <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" placeholder="First Name*" />
                            <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" placeholder="Last Name*" />
                            <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="email" placeholder="Email*" />
                            <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="number" placeholder="Phone*" />
                        </div>
                        <div class="my-4">
                            <textarea placeholder="Message*" class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                        </div>
                        <div class="my-2 w-full lg:w-1/4">
                            <button class="mx-auto w-full text-white bg-[#1C314C] border-0 py-2 lg:px-5 px-4 focus:outline-none hover:bg-white hover:text-[#1C314C] lg:text-base text-sm font-semibold shadow-sm shadow-gray-500">Send Message</button>
                        </div>
                    </div>

                    <div
                        class="w-full lg:-mt-[40%] lg:w-2/6 px-8 py-12 ml-auto bg-[#1C314C] rounded-2xl"
                    >
                        <div class="flex flex-col text-white">
                            <div class="flex my-4 w-2/3 lg:w-">
                                <div class="flex flex-col">
                                    <i class="fas fa-phone-alt pt-2 pr-2" />
                                </div>
                                <div class="flex flex-col">
                                    <h2 class="text-3xl my-5 font-semibold tracking-wider">Call Us</h2>
                                    <a href='tel: +91 9599791185' class="text-gray-300 hover:text-white hover:font-semibold tracking-wider">Tel: +91 9599791185</a>
                                    <a href='tel: +91 8448908359' class="text-gray-300 hover:text-white hover:font-semibold tracking-wider">Tel: +91 8448908359</a>
                                    <h2 class="text-3xl my-5 font-semibold tracking-wider">Mail Us</h2>
                                    <a href='mailto: info.sitescript@gmail.com' class="text-gray-300 hover:text-white hover:font-semibold tracking-wider">info.sitescript@gmail.com</a>
                                    <a href='mailto: namanb454@gmail.com' class="text-gray-300 hover:text-white hover:font-semibold tracking-wider">namanb454@gmail.com</a>
                                    <a href='mailto: jainkshitij1530@gmail.com' class="text-gray-300 hover:text-white hover:font-semibold tracking-wider">jainkshitij1530@gmail.com</a>
                                </div>
                            </div>

                            <div class="flex my-4 w-2/3 lg:w-1/2">
                                <a href="https://www.facebook.com/_siteScript_/" target="_blank" rel="noreferrer" class="rounded-full h- w-[15%] inline-block mx-1 text-center pt-1 ">
                                    <BsFacebook className='w-full h-full' />
                                </a>
                                <a href="https://www.instagram.com/_sitescript_/" target="_blank" rel="noreferrer" class="rounded-full h- w-[15%] inline-block mx-1 text-center pt-1">
                                    <BsInstagram className='w-full h-full' />
                                </a>
                                <a href="https://twitter.com/_siteScript_" target="_blank" rel="noreferrer" class="rounded-full h- w-[15%] inline-block mx-1 text-center pt-1">
                                    <FaSquareXTwitter className='w-full h-full' />
                                </a>
                                <a href="https://www.linkedin.com/_siteScript_" target="_blank" rel="noreferrer" class="rounded-full h- w-[15%] inline-block mx-1 text-center pt-1">
                                    <BsLinkedin className='w-full h-full' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- BUY ME A PIZZA AND HELP SUPPORT OPEN-SOURCE RESOURCES --> */}
            {/* <div class="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
                <div>
                    <a title="Buy me a pizza" href="https://www.buymeacoffee.com/Dekartmc" target="_blank" class="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                        <img class="object-cover object-center w-full h-full rounded-full" src="https://img.icons8.com/emoji/48/000000/pizza-emoji.png" />
                    </a>
                </div>
            </div> */}
        </div>
    )
}

export default Contact
