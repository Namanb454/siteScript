import React from 'react'
import ReadMoreButton from '../components/ReadMoreButton'
// import ReadMoreButton from './ReadMoreButton';

function About() {
    const longText = "At sitescript, we are a leading website making agency and social media marketing agency dedicated to helping local businesses and professional organizations establish a strong online presence. We understand the importance of an engaging and visually appealing website, as well as effective social media strategies, to attract customers and drive success in the digital age. With our team of expert web designers and copywriters, we specialize in creating optimized, high-converting landing pages that are tailored to your unique business needs and goals. We'll work closely with you to understand your vision and translate it into a stunning online platform that reflects your brand identity and captivates your target audience."

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
            'heading': 'Expertise and Experience:',
            'desc': 'With years of experience in the industry, we possess the knowledge and skills necessary to deliver exceptional web design and social media marketing services. Our team stays up-to-date with the latest trends and technologies to ensure your online presence remains relevant and competitive.'
        },
        {
            'heading': 'Tailored Solutions:',
            'desc': "We understand that every business is unique. That's why our approach is fully customized to fit your specific goals and requirements. We take the time to understand your business, target audience, and objectives, allowing us to create a website and social media strategy that speaks directly to your customers and delivers results."
        },
        {
            'heading': 'Results-Driven Approach:',
            'desc': "At sitescript, we are committed to helping our clients achieve tangible results. Whether it's increased website traffic, higher conversion rates, or improved brand visibility, we prioritize measurable outcomes and continuously optimize our strategies to ensure your success."
        },
        {
            'heading': 'Excellent Customer Support:',
            'desc': 'We believe in establishing strong relationships with our clients and providing exceptional customer support. Our team is dedicated to addressing your questions, concerns, and requests promptly, ensuring a smooth and enjoyable experience throughout the entire process.'
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
                        <p className="mb-8 leading-relaxed text-[#0D2232B2] font-semibold text-justify tracking-wide">
                            {/* <ReadMoreButton text={longText} maxChars={200} /> */}
                            <ReadMoreButton text={longText} maxChars={373} />
                        </p>

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
