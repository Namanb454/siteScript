import React from 'react'

function Services() {
    const service = [
        {
            'img': 'service1.png', 'heading': 'Website & App Development', 'desc': 'Our websites and app are completely responsive, optimized for sales, and built with cutting-edge technology.',
        },
        {
            'img': 'service4.png', 'heading': 'Software Tools', 'desc': 'We specialize in the development of top-quality software tools tailored to enhance the efficiency and productivity of your business operations.',
        },
        {
            'img': 'service2.png', 'heading': 'Social Media Marketing', 'desc': 'Our mobile development services deliver top-notch iOS and Android apps that optimize your business operations and boost productivity, ensuring superior performance.',
        },
        {
            'img': 'service7.png', 'heading': 'Video, Design & Editing', 'desc': 'Our designs are aesthetically pleasing and strategically crafted to minimize bounce and churn rates, earning high praise from end users for their effectiveness.',
        },
        {
            'img': 'service6.png', 'heading': 'SEO Optimization', 'desc': 'Get noticed online and expand your business with our comprehensive website creation and social media marketing services. Your success starts here.',
        },
        // {
        //     'img': 'service3.png', 'heading': 'Block Chain Development', 'desc': 'Unlock the power of blockchain technology with our expert solutions, paving the way for secure, transparent, and efficient business operations.',
        // },
        // {
        //     'img': 'service5.png', 'heading': 'Data Analyst', 'desc': 'Transform data into actionable insights. Our data analysis services decode the information maze, guiding your decisions with precision.',
        // },

        // {
        //     'img': 'service8.png', 'heading': 'Content Writing', 'desc': "Words that resonate, stories that engage. Elevate your brand's voice with our compelling content writing services.",
        // },
        // {
        //     'img': 'service9.png', 'heading': 'IT Support', 'desc': " We provide dependable IT support so you can focus on what matters most – your business. We don't just provide services; we deliver integrated solutions that empower your business to thrive in the digital age.",
        // },
    ]
    const bag2 = [
        {
            'img': "https://via.placeholder.com/500"
        },
    ]
    return (
        <div className=''>
            <section className="py-24 text-white bg-[#0D2232] body-font">
                <div className='pb-10'>
                    <h1 className='pb-5 lg:text-4xl text-2xl text-center text-white tracking-wider'>What We Do <span className='text-[#b6984b] font-bold'>As Experts</span></h1>
                    <p className='text-center lg:text-xl text-sm text-[#FFFFFFB2] tracking-widest'>Explore our comprehensive range of services, neatly categorized into 5 key areas:</p>
                </div>
                <div className="container px-5 mx-auto">
                    <div className="flex flex-wrap -m-4 py-10">
                        {service.map(data => {
                            return (
                                <div className="xl:w-1/5 lg:w-1/2 md:w-full w-[80%] mx-auto py-0 border-l-2 border-[#b6984b] border-opacity-60">
                                    <div className="lg:h-24 h-20 px-5 py-5 rounded-xl text-center relative"
                                        style={{
                                            backgroundImage: `url(${data.img})`,
                                            margin: "0px 10px",
                                        }}>
                                        <div className='text-left'>
                                            <h1 className="title-font sm:text-xl text-xl font-semibold tracking-wider text-white mb-3">{data.heading}</h1>
                                        </div>
                                    </div>
                                    <div className='lg:h-44 h-36 bg-cover px-5 py-5 rounded-xl text-center relative'>
                                        <p className="text-gray-200 leading-relaxed text-sm text-justify tracking-normal">{data.desc}</p>
                                    </div>
                                    <div className="flex w-full justify-start lg:my-0 my-5">
                                        <a href='#contact' className="mx-5 rounded-full inline-flex text-white bg-[#b6984b] border-0 py-2 px-5 focus:outline-none hover:bg-white hover:text-[#b6984b] text-sm font-semibold shadow-sm shadow-gray-500 transition-all">Grow Now</a>
                                    </div>
                                </div>

                            )
                        })}
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Services
