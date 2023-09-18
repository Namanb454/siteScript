import React from 'react'

function About() {

    const card = [
        {
            'img': 'aboutus1.png',
            'heading': 'Integrity',
            'desc': 'We conduct our business with the highest ethical standards, ensuring honesty, transparency, and trust in all our interactions.'
        },
        {
            'img': 'aboutus2.png',
            'heading': 'Innovation',
            'desc': 'We foster a culture of innovation, constantly exploring new ideas and technologies to bring fresh perspectives to our clients.'
        },
        {
            'img': 'aboutus3.png',
            'heading': 'Collaboration',
            'desc': 'We work closely with our clients, understanding their needs and involving them throughout the solution-building process.'
        },
        {
            'img': 'aboutus4.png',
            'heading': 'Excellence',
            'desc': 'We strive for excellence in everything we do. From the quality of our solutions to the professionalism of our team, excellence is our benchmark.'
        },
    ]

    const whychoose = [
        {
            'heading': 'Expertise:',
            'desc': 'Our team comprises skilled professionals with years of experience across various IT domains. We have the expertise to address your specific requirements.'
        },
        {
            'heading': 'Client-Centric Approach:',
            'desc': "We value understanding our clients' needs to create successful IT solutions. Through listening, learning, and collaboration, we ensure the solutions we offer meet your objectives."
        },
        {
            'heading': 'Innovation:',
            'desc': "We embrace the ever-changing technology landscape by staying current with trends and advancements, providing cutting-edge solutions for your business's competitive advantage."
        },
        {
            'heading': 'Reliability:',
            'desc': 'We value the importance of technology in your operations. Therefore, we prioritize reliable and consistent services. Rest assured, our solutions work seamlessly every day.'
        },
        {
            'heading': 'End-to-End Solutions:',
            'desc': 'We provide comprehensive solutions for startups and established enterprises, covering everything from digital presence to IT infrastructure, including consulting, development, implementation, and ongoing support.'
        },
    ]


    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex lg:px-20 px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img class="object-cover object-center " alt="hero" src="aboutus.png" />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 class="title-font sm:text-xl text-lg mb-4 font-semibold text-[#1C314C] tracking-widest">About Us
                        </h1>
                        <h1 class="title-font sm:text-4xl text-2xl mb-4 font-bold text-[#1C314C] tracking-wider">Who We Are?

                        </h1>
                        <p class="mb-8 leading-relaxed text-[#1C314CB2] font-semibold text-justify tracking-wide">Our company specializes in designing, developing, and delivering reliable IT solutions that empower businesses to  achieve uninterrupted growth and success.We are committed to providing top-notch services that meet the unique needs of our clients  and help them stay ahead of the competition.At siteScript, we don't just solve problems; we anticipate them and pave the way for your uninterrupted growth and success. </p>
                        <div class="flex w-full justify-center">
                            <button class="mx-auto inline-flex text-white bg-[#1C314C] border-0 py-2 px-5 focus:outline-none hover:bg-white hover:text-[#1C314C] text-sm font-semibold shadow-sm shadow-gray-500">Read More</button>
                        </div>
                    </div>
                </div>
            </section>


            {/* Cards */}
            <section class="text-gray-600 body-font">
                <div class="container px-5 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        {card.map(data => {
                            return (
                                <div class="p-4 md:w-1/4">
                                    <div class="h-full bg-[#D9D9D94D] overflow-hidden">
                                        <img class=" object-cover mx-auto my-10 object-center" src={data.img} alt="blog" />
                                        <div class="px-6 text-center">
                                            <h1 class="title-font text-xl font-semibold text-black mb-3 tracking-widest">{data.heading}</h1>
                                            <p class="leading-relaxed mb-3 text-sm text-justify text-[#1C314CB2] tracking-wide">{data.desc}</p>
                                            <div class="flex items-center flex-wrap ">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>



            <section class="text-gray-600 body-font py-24">

                <h1 className='py-10 lg:text-4xl text-2xl text-center text-black tracking-wider'>Why Choose <span className='text-[#1C314C] font-bold'>siteScript?</span></h1>

                <div class="container px-5 mx-auto flex flex-wrap">
                    <div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        {whychoose.map(data => {
                            return (
                                <div class="flex flex-col mb-5 lg:items-start items-center">
                                    <div class="flex-grow">
                                        <h2 class="text-black text-xl title-font font-semibold tracking-widest">{data.heading}</h2>
                                        <p class="leading-relaxed text-[#1C314CB2] text-sm tracking-wide text-justify">{data.desc}</p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <div class="lg:w-1/2 my-20 w-full mb-10 lg:mb-0  overflow-hidden">
                        <div className='relative'>
                            <img className='absolute left-36' src='box1.png' alt='box' />
                            <img alt="feature" class="absolute object-cover z-10 w-[50%] object-center mx-auto top-5 left-20" src="aboutus5.png" />
                            <img alt="feature" class="absolute object-cover z-10 w-[50%] object-center mx-auto top-36 left-52" src="aboutus6.png" />
                            <img className='absolute mx-auto top-16 left-[18%]' src='box2.png' alt='box' />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
