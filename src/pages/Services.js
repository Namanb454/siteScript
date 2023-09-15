import React from 'react'

function Services() {
    const service = [
        {
            'img': 'service1.png', 'heading': 'Web Development', 'desc': 'Our websites are completely responsive, optimized for sales, and built with cutting-edge technology.',
        },
        {
            'img': 'service2.png', 'heading': 'App Development', 'desc': 'Our mobile development services deliver top-notch iOS and Android apps that optimize your business operations and boost productivity, ensuring superior performance.',
        },
        {
            'img': 'service3.png', 'heading': 'Block Chain Development', 'desc': 'Unlock the power of blockchain technology with our expert solutions, paving the way for secure, transparent, and efficient business operations.',
        },
        {
            'img': 'service4.png', 'heading': 'Software Tools', 'desc': 'We specialize in the development of top-quality software tools tailored to enhance the efficiency and productivity of your business operations.',
        },
        {
            'img': 'service5.png', 'heading': 'Data Analyst', 'desc': 'Transform data into actionable insights. Our data analysis services decode the information maze, guiding your decisions with precision.',
        },
        {
            'img': 'service6.png', 'heading': 'Search Engine Optimization', 'desc': 'Drive your digital success with our SEO mastery. We help you climb the search rankings, so your business shines in the online spotlight.',
        },
        {
            'img': 'service7.png', 'heading': 'Design', 'desc': 'Our designs are aesthetically pleasing and strategically crafted to minimize bounce and churn rates, earning high praise from end users for their effectiveness.',
        },
        {
            'img': 'service8.png', 'heading': 'Content Writing', 'desc': "Words that resonate, stories that engage. Elevate your brand's voice with our compelling content writing services.",
        },
        {
            'img': 'service9.png', 'heading': 'IT Support', 'desc': " We provide dependable IT support so you can focus on what matters most – your business. We don't just provide services; we deliver integrated solutions that empower your business to thrive in the digital age.",
        },
    ]
    const bag2 = [
        {
            'img': "https://via.placeholder.com/500"
        },
    ]
    return (
        <div>
            <section class="py-24 text-white bg-[#1C314C] body-font">
                <div className='pb-10'>
                    <h1 className='pb-5 text-4xl text-center text-white tracking-wider'>What We Do <span className='text-white font-bold'>As Experts</span></h1>
                    <p className='text-center text-xl text-[#FFFFFFB2] tracking-widest'>Explore our comprehensive range of services, neatly categorized into 9 key areas:</p>
                </div>
                <div class="container px-5 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        {service.map(data => {
                            return (
                                <div class="p-10 lg:w-1/3">
                                    <div class="h-full bg-cover px-10 py-5 rounded-xl text-center relative"
                                        style={{
                                            backgroundImage: `url(${data.img})`,
                                        }}>
                                        <h1 class="title-font sm:text-xl text-xl font-semibold tracking-wider text-white mb-3">{data.heading}</h1>
                                        <p class="leading-relaxed text-sm text-justify tracking-tight">{data.desc}</p>
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
