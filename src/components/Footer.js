import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsFillTelephoneFill } from 'react-icons/bs';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { HiMail } from 'react-icons/hi';

function Footer() {
    return (
        <div className="px-4 pt-24 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
                <div className="md:max-w-md lg:col-span-2">
                    <div className="w-fit flex items-center">
                        <img className="w-20" src="sitescriptlogo.jpg" alt="Logo" />
                        <div className=''>
                            <h2 className='text-4xl font-serif'>siteScript</h2>
                            <h2 className='w-fit mx-auto my-1 text-[5px] [word-spacing:1px]'>WE DESIGN. WE DEVELOP. WE DELIEVR.</h2>
                        </div>
                    </div>
                    <div className="mt-4 lg:max-w-sm">
                        <p className="text-sm text-gray-800">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                            accusantium doloremque laudantium, totam rem aperiam.
                        </p>
                        <p className="mt-4 text-sm text-gray-800">
                            Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                            beatae vitae dicta sunt explicabo.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                    <div>
                        <p className="font-semibold tracking-wide text-[#1C314C]">
                            Company
                        </p>
                        <ul className="mt-2 space-y-2 text-sm">
                            <li>
                                <a
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Meet the Team
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold tracking-wide text-[#1C314C]">Services</p>
                        <ul className="mt-2 space-y-2 text-sm">
                            <li>
                                <a
                                    href="#services"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Web Development
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    App Development
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Software Tools
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Design
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Consulting
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold tracking-wide text-[#1C314C]">Helpful Links</p>
                        <ul className="mt-2 space-y-2 text-sm">
                            <li>
                                <a
                                    href="#contact"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    Get In Touch
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#help"
                                    className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    FAQs
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-semibold tracking-wide text-[#1C314C]">Contact</p>
                        <ul className="mt-2 space-y-2">
                            <li>
                                <a
                                    href='tel: +91 9599791185'
                                    className="tracking-wide text-gray-600 flex text-sm items-center transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    <BsFillTelephoneFill /> +91 9599791185
                                </a>
                            </li>
                            <li>
                                <a
                                    href='tel: +91 8448908359'
                                    className="tracking-wide text-gray-600 flex text-sm items-center transition-colors duration-300 hover:text-deep-purple-accent-400"
                                >
                                    <BsFillTelephoneFill />  +91 8448908359
                                </a>
                            </li>
                            <li>
                                <a href='mailto: info.sitescript@gmail.com' class="flex text-sm items-center">
                                    <HiMail /> info.sitescript@gmail.com</a>
                            </li>
                            <li>
                                <a href='mailto: namanb454@gmail.com' class="flex text-sm items-center">
                                    <HiMail />namanb454@gmail.com</a>
                            </li>
                            <li>
                                <a href='mailto: jainkshitij1530@gmail.com' class="flex text-sm items-center">
                                    <HiMail />jainkshitij1530@gmail.com</a>
                            </li>
                        </ul>
                    </div>


                </div>
            </div>
            <div className="flex justify-between pt-5 pb-10 border-t sm:flex-row ">
                <p className="text-sm text-gray-600">
                    © Copyright 2020 Lorem Inc. All rights reserved.
                </p>
                <div className="">
                    <div className="flex justify-start space-x-3">
                        <a href="https://www.facebook.com/_siteScript_/" target="_blank" rel="noreferrer" class="rounded-full w-6 inline-block mx-1 text-center pt-1 ">
                            <BsFacebook className='w-full h-full' />
                        </a>
                        <a href="https://www.instagram.com/_sitescript_/" target="_blank" rel="noreferrer" class="rounded-full w-6 inline-block mx-1 text-center pt-1">
                            <BsInstagram className='w-full h-full' />
                        </a>
                        <a href="https://twitter.com/_siteScript_" target="_blank" rel="noreferrer" class="rounded-full w-6 inline-block mx-1 text-center pt-1">
                            <FaSquareXTwitter className='w-full h-full' />
                        </a>
                        <a href="https://www.linkedin.com/_siteScript_" target="_blank" rel="noreferrer" class="rounded-full w-6 inline-block mx-1 text-center pt-1">
                            <BsLinkedin className='w-full h-full' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Footer
