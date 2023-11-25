import React from 'react'

function Marketing() {
    return (
        <div className='lg:py-24'>

            <h1 className='py-10 lg:text-4xl text-2xl text-center font-semibold text-[#1C314C] tracking-wider'>Marketing
                <span className='text-[#b6984b] font-bold'> Strategy</span></h1>

            {/* Website Design */}
            <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 mx-auto">

                <div class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
                    <div>
                        <img class="rounded-xl" src="responsivedesign.jpg" alt="Optimize Website" />
                    </div>
                    <div class="mt-5 sm:mt-10 lg:mt-0">
                        <div class="space-y-6 sm:space-y-8">
                            <div class="space-y-2 md:space-y-4">
                                <h2 class="text-2xl font-semibold uppercase text-[#1C314C] lg:text-4xl tracking-wide">
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
                                <button class="inline-flex text-white bg-[#b6984b] border-0 py-2 px-5 focus:outline-none hover:bg-white hover:text-[#b6984b] text-sm font-semibold shadow-sm shadow-gray-500 transition-all">Get Your Website</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Paid Advertising */}
            <div class="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl lg:py-24 lg:pt-0 ">
                <div class="w-full h-64 lg:w-1/2 lg:h-auto">
                    <img class="h-full w-full object-cover" src="paidadvertising.jpg" />
                </div>
                <div
                    class="max-w-lg bg-white md:max-w-2xl md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12 ">
                    <div class="flex flex-col p-12 md:px-16 ">
                        <h2 class="text-2xl font-semibold uppercase text-[#1C314C] lg:text-4xl">Paid <span className='font-bold text-[#b6984b] tracking-wide'>Advertising</span></h2>
                        <p class="mt-4 tracking-wide text-[#1C314CB2] font-semibold">
                            With paid advertising, businesses can easily track and measure the success of their campaigns through various analytics tools, allowing them to make data-driven decisions and optimize their marketing strategies.
                        </p>
                        <div class="flex w-fit my-8">
                            <button class="inline-flex text-white bg-[#b6984b] border-0 py-2 px-5 focus:outline-none hover:bg-white hover:text-[#b6984b] text-sm font-semibold shadow-sm shadow-gray-500 transition-all">Grow Now</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Advertising */}
            <div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 lg:py-24 mx-auto">

                <div class="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
                    <div>
                        <img class="rounded-xl" src="videoadvertising.jpg" alt="Optimize Website" />
                    </div>
                    <div class="mt-5 sm:mt-10 lg:mt-0">
                        <div class="space-y-6 sm:space-y-8 ">
                            <div class="space-y-2 md:space-y-4">
                                <h2 class="text-2xl font-semibold uppercase text-[#1C314C] lg:text-4xl tracking-wide">
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
                                <button class="inline-flex text-white bg-[#b6984b] border-0 py-2 px-5 focus:outline-none hover:bg-white hover:text-[#b6984b] text-sm font-semibold shadow-sm shadow-gray-500 transition-all">Get Your Video</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Marketing
