import React from 'react'

function Marketing() {
    return (
        <div className='lg:py-24'>

            <h1 className='pt-10 lg:text-4xl text-2xl text-center font-semibold text-[#0D2232] tracking-wider'>Marketing
                <span className='text-[#b6984b] font-bold'> Strategy</span></h1>

            {/* Website Design */}
            <div class=" px-4 lg:py-24 py-10 sm:px-6 lg:px-8 mx-auto">
                <div class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
                    <div>
                        <img class="rounded-xl" src="responsivedesign.jpg" alt="Optimize Website" />
                    </div>
                    <div class="mt-5 sm:mt-10 lg:mt-0">
                        <div class="space-y-6 sm:space-y-8">
                            <div class="space-y-2 md:space-y-4">
                                <h2 class="text-2xl font-semibold uppercase text-[#0D2232] lg:text-4xl tracking-wide">
                                    Boost customer retention with an <span className='font-bold text-[#b6984b] tracking-wide'>optimized website</span>
                                </h2>
                                <p class="text-gray-500">
                                    An engaging website is vital for customer retention. It offers easy navigation, relevant content, and responsive service. Optimizing it creates a lasting impact, promotes interaction, and delivers a consistent user experience. Customizing user journeys and streamlining conversion paths cultivates loyalty and promotes recurring transactions.
                                </p>
                            </div>
                            <ul role="list" class="space-y-2 sm:space-y-4">
                                <li class="flex space-x-3">
                                    <span class="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-[#b6984b] text-white">
                                        <svg class="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>

                                    <span class="text-sm sm:text-base text-gray-500">
                                        <span class="font-bold">Easy & fast</span> designing
                                    </span>
                                </li>

                                <li class="flex space-x-3">
                                    <span class="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-[#b6984b] text-white">
                                        <svg class="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>

                                    <span class="text-sm sm:text-base text-gray-500">
                                        Powerful <span class="font-bold">features</span>
                                    </span>
                                </li>

                                <li class="flex space-x-3">
                                    <span class="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-[#b6984b] text-white">
                                        <svg class="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>

                                    <span class="text-sm sm:text-base text-gray-500">
                                        User Experience <span class="font-bold">Design</span>
                                    </span>
                                </li>
                            </ul>
                            <div class="flex w-fit my-8">
                                <a href='#contact' class="inline-flex text-white bg-[#b6984b] border-0 py-2 px-5 focus:outline-none hover:bg-white hover:text-[#b6984b] text-sm font-semibold shadow-sm shadow-gray-500 transition-all">Get Your Website</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Paid Advertising */}
            <div class="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl lg:py-24 py-10 lg:pt-0 ">
                <div class="w-full h-64 lg:w-1/2 lg:h-auto">
                    <img class="h-full w-full object-cover" src="paidadvertising.jpg" />
                </div>
                <div
                    class="max-w-lg bg-white md:max-w-2xl md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12 ">
                    <div class="flex flex-col p-12 md:px-16 px-5">
                        <h2 class="text-2xl font-semibold uppercase text-[#0D2232] lg:text-4xl tracking-wide">Paid <span className='font-bold text-[#b6984b] tracking-wide'>Advertising</span></h2>
                        <p class="mt-4 tracking-wide text-[#0D2232B2] font-semibold">
                            With paid advertising, businesses can easily track and measure the success of their campaigns through various analytics tools, allowing them to make data-driven decisions and optimize their marketing strategies.
                        </p>
                        <div class="flex w-fit mt-8">
                            <a href='#contact' class="inline-flex text-white bg-[#b6984b] border-0 py-2 px-5 focus:outline-none hover:bg-white hover:text-[#b6984b] text-sm font-semibold shadow-sm shadow-gray-500 transition-all">Grow Now</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Advertising */}
            <div class="max-w-[85rem] px-5 sm:px-6 lg:px-8 lg:py-24 py-10 mx-auto">

                <div class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
                    <div>
                        <img class="rounded-xl" src="videoadvertising.jpg" alt="Optimize Website" />
                    </div>
                    <div class="mt-5 sm:mt-10 lg:mt-0">
                        <div class="space-y-6 sm:space-y-8 ">
                            <div class="space-y-2 md:space-y-4">
                                <h2 class="text-2xl font-semibold uppercase text-[#0D2232] lg:text-4xl tracking-wide">
                                    Video <span className='font-bold text-[#b6984b] tracking-wide'>Advertising</span>
                                </h2>
                                <p class="text-gray-500">
                                    Video advertising has transformed business operations by captivating audiences with its ability to tell stories and leave lasting impressions. This powerful medium conveys messages, emotionally engages viewers, and enhances brand recall. It's an essential tool for businesses to connect, communicate, and succeed in the digital age.
                                </p>
                            </div>
                            <ul role="list" class="space-y-2 sm:space-y-4">
                                <li class="flex space-x-3">
                                    <span class="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-[#b6984b] text-white">
                                        <svg class="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>

                                    <span class="text-sm sm:text-base text-gray-500">
                                        <span class="font-bold">Brand </span> awareness
                                    </span>
                                </li>

                                <li class="flex space-x-3">
                                    <span class="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-[#b6984b] text-white">
                                        <svg class="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>

                                    <span class="text-sm sm:text-base text-gray-500">
                                        Increased <span class="font-bold">Engagement</span>
                                    </span>
                                </li>

                                <li class="flex space-x-3">
                                    <span class="mt-0.5 h-5 w-5 flex justify-center items-center rounded-full bg-[#b6984b] text-white">
                                        <svg class="flex-shrink-0 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>

                                    <span class="text-sm sm:text-base text-gray-500">
                                        Dynamic <span class="font-bold">Remarketing</span>
                                    </span>
                                </li>
                            </ul>
                            <div class="flex w-fit my-8">
                                <a href='#contact' class="inline-flex text-white bg-[#b6984b] border-0 py-2 px-5 focus:outline-none hover:bg-white hover:text-[#b6984b] text-sm font-semibold shadow-sm shadow-gray-500 transition-all">Get Your Video</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Social Media Marketing */}
            <div class=" px-5 lg:py-24 py-10 sm:px-6 lg:px-8 mx-auto bg-[#0D2232]">
                <div class="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
                    <h2 class="text-2xl lg:text-4xl text-white font-semibold tracking-wide">
                        Social Media <span className='font-bold text-[#b6984b] tracking-wide'>Marketing</span>
                    </h2>
                    <p class="mt-3 text-gray-300 tracking-widest">
                        The powerful and flexible theme for all kinds of businesses.
                    </p>
                </div>

                <div class="mx-auto grid grid-cols-9 gap-6 lg:gap-8 tracking-widest">
                    <div class="col-span-12 sm:col-span-3 text-center">
                        <div class="mt-2 sm:mt-6">
                            <h3 class="text-lg font-semibold text-white">
                                Connect Globally
                            </h3>
                        </div>
                    </div>

                    <div class="col-span-12 sm:col-span-3 text-center">
                        <div class="mt-2 sm:mt-6">
                            <h3 class="text-lg font-semibold text-white ">
                                Audience Targeting
                            </h3>
                        </div>
                    </div>
                    <div class="col-span-12 sm:col-span-3 text-center">
                        <div class="mt-2 sm:mt-6">
                            <h3 class="text-lg font-semibold text-white ">
                                Consistent Branding
                            </h3>
                        </div>
                    </div>
                </div>

                <div class="mt-10 grid lg:grid-cols-10 grid-cols-10 gap-y-5  items-center gap-x-5 sm:gap-x-6 lg:gap-x-8">
                    <div class=" col-span-2 md:col-span-2">
                        <img class="rounded-3xl" src="socialmedia/twitter.avif" alt="Twitter" />
                    </div>
                    <div class="col-span-2 md:col-span-2">
                        <img class="rounded-3xl" src="socialmedia/whatsapp.avif" alt="Whatsapp" />
                    </div>
                    <div class="col-span-2 md:col-span-2">
                        <img class="rounded-3xl" src="socialmedia/facebook.avif" alt="Facebook" />
                    </div>
                    <div class="col-span-2 md:col-span-2">
                        <img class="rounded-3xl" src="socialmedia/instagram.avif" alt="Instagram" />
                    </div>
                    <div class="col-span-2 md:col-span-2">
                        <img class="rounded-3xl" src="socialmedia/linkedin.avif" alt="LinkedIn" />
                    </div>
                </div>

                <p className='text-white/80 text-base mt-10 font-semibold text-justify'>
                    Social media marketing uses engaging content on platforms like Facebook, Instagram, Twitter, and LinkedIn to promote products, services, or brands. It boosts brand awareness, drives website traffic, and achieves business objectives. Key tasks include content creation, community management, advertising, and performance analysis.
                </p>
            </div>
        </div>
    )
}

export default Marketing
