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
            'heading': 'Expertise That Matters:',
            'desc': 'Our team consists of experienced professionals who possess extensive knowledge in IT solutions as well as Social Media Marketing. With a focus on innovative technological solutions and the ability to create influential social media strategies, we offer a level of expertise that distinguishes us from others.'
        },
        {
            'heading': 'Client-Centric Approach:',
            'desc': "Our primary focus is on our clients, as they are the core of our operations. We take great pride in our client-centric strategy, which emphasizes transparent processes, open communication, and a collaborative partnership. Our ultimate goal is to prioritize your satisfaction and success."
        },
        {
            'heading': 'Cutting-Edge Technology and Trends:',
            'desc': "In the fast-evolving digital landscape, staying ahead is non-negotiable. Our commitment to innovation means that you benefit from the latest technologies and trends in both IT and social media marketing. Your business deserves nothing less than state-of-the-art solutions."
        },
        {
            'heading': 'Reliability:',
            'desc': 'We value the importance of technology in your operations. Therefore, we prioritize reliable and consistent services. Rest assured, our solutions work seamlessly every day.'
        },
        {
            'heading': 'Competitive Pricing and Value:',
            'desc': 'We offer exceptional quality without breaking the bank. Our competitive pricing provides maximum value for your investment. Your success is our success, and we strive to offer solutions that positively impact your bottom line.'
        },
    ]


    return (
        <div>
            <section className="text-gray-600 body-font scroll-smooth">
                <div className="container mx-auto flex lg:px-20 px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0">
                        <img className="object-cover object-center lg:h-[55vh] h-[35vh] rounded-xl" alt="hero" src="aboutus.avif" />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-xl text-lg mb-4 font-semibold text-[#b6984b] tracking-widest">About Us
                        </h1>
                        <h1 className="title-font sm:text-4xl text-2xl mb-4 font-bold text-[#0D2232] tracking-wider">Who We Are?

                        </h1>
                        <p className="mb-8 leading-relaxed text-[#0D2232B2] font-semibold text-justify tracking-wide">Our company specializes in designing, developing, and delivering reliable IT & Digital Solutions that empower businesses to  achieve uninterrupted growth and success.We are committed to providing top-notch services that meet the unique needs of our clients  and help them stay ahead of the competition. At siteScript, we don't just solve problems; we anticipate them and pave the way for your uninterrupted growth and success. </p>
                        <div className="flex w-full justify-center">
                            <button className="mx-auto inline-flex text-white bg-[#b6984b] border-0 py-2 px-5 focus:outline-none hover:bg-white hover:text-[#b6984b] text-sm font-semibold shadow-sm shadow-gray-500 transition-all">Read More</button>
                        </div>
                    </div>
                </div>
            </section>


            {/* Cards */}
            <section className="text-gray-600 body-font">
                <div className="container px-5 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {card.map(data => {
                            return (
                                <div className="p-4 md:w-1/4">
                                    <div className="h-full bg-[#D9D9D94D] overflow-hidden">
                                        <img className=" object-cover mx-auto my-10 object-center" src={data.img} alt="blog" />
                                        <div className="px-6 text-center">
                                            <h1 className="title-font text-xl font-semibold text-black mb-3 tracking-widest">{data.heading}</h1>
                                            <p className="leading-relaxed mb-3 text-sm text-justify text-[#0D2232B2] tracking-wide">{data.desc}</p>
                                            <div className="flex items-center flex-wrap ">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>



            <section className=" body-font lg:py-24 pt-10">

                <h1 className='py-10 lg:text-4xl text-2xl text-center font-semibold text-[#0D2232] tracking-wider'>Why Choose <span className='text-[#b6984b] font-bold'>siteScript</span>?</h1>

                <div className="container px-5 mx-auto flex flex-wrap">
                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                        {whychoose.map(data => {
                            return (
                                <div className="flex flex-col mb-5 lg:items-start items-center">
                                    <div className="flex-grow">
                                        <h2 className="text-black text-xl title-font font-semibold tracking-widest">{data.heading}</h2>
                                        <p className="leading-relaxed text-[#0D2232B2] text-sm tracking-wide text-justify">{data.desc}</p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <div className="lg:w-1/2 my-20 w-full mb-10 lg:mb-0 overflow-hidden">
                        <div className='relative z-0'>
                            <img className='absolute left-36' src='box1.png' alt='box' />
                            <img alt="feature" className="opacity-90 absolute object-cover z-10 w-[50%] object-center mx-auto top-5 left-20" src="aboutus5.png" />
                            <img alt="feature" className="opacity-90 absolute object-cover z-10 w-[50%] object-center mx-auto top-36 left-52" src="aboutus6.png" />
                            <img className='absolute mx-auto top-16 left-[18%]' src='box2.png' alt='box' />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
