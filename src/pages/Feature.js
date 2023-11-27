import React, { useEffect } from 'react';
import '../Feature.css';
import gsap from 'gsap';

const GridComponent = () => {
    const boxStyle = {
        backgroundColor: 'white',
        // boxShadow: '0px 0px 15px ',
    }
    const boxData = [
        { imageUrl: 'features/js.png', heading: 'JavaScript' },
        { imageUrl: 'features/reactjs.png', heading: 'React JS' },
        { imageUrl: 'features/nextjs.png', heading: 'Next JS' },
        { imageUrl: 'features/mongodb.png', heading: 'MongoDB' },
        { imageUrl: 'features/nodejs.png', heading: 'Node JS' },
        { imageUrl: 'features/django.png', heading: 'Django' },
        { imageUrl: 'features/auth0.png', heading: 'Auth0' },
        { imageUrl: 'features/firebase.png', heading: 'Firebase' },
        { imageUrl: 'features/asp.png', heading: 'ASP.NET' },
        { imageUrl: 'features/sanity.png', heading: 'Sanity' },
        { imageUrl: 'features/bootstrap.png', heading: 'Bootstrap' },
        { imageUrl: 'features/tailwind.png', heading: 'Tailwind CSS' },
        { imageUrl: 'features/cleancode.png', heading: 'Clean Code' },
        { imageUrl: 'features/googlefont.png', heading: 'Google Font' },
        { imageUrl: 'features/customize.png', heading: 'Easy To Customize' },
        { imageUrl: 'features/fontawesomepro.png', heading: 'Font Awesome Pro' },
        { imageUrl: 'features/responsive.png', heading: 'Responsive Layout' },
        { imageUrl: 'features/oneclickdemo.png', heading: 'One Click Demo' },
        { imageUrl: 'features/speedoptimized.png', heading: 'Speed Optimized' },
        { imageUrl: 'features/unlimitedcolor.png', heading: 'Unlimited Color Option' },
        { imageUrl: 'features/googleads.png', heading: 'Google Ads' },
    ];

    const Style1 = {
        backgroundColor: 'white',
        textAlign: 'center',
        paddingTop: '6rem',
        fontWeight: 'bold',
        background: 'white',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: '',
        fontFamily: 'candara',
    };
    const Style2 = {
        fontFamily: 'Trebuchet MS',
        backgroundColor: '#ec634b',
        textAlign: 'center',
        color: 'black',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: '',
        paddingTop: '1rem',
    };

    // GSAP 
    useEffect(() => {
        const tl = gsap.timeline();
        tl.from(".title", { x: 200, duration: 1 });
        tl.from(".title2", { x: -200, duration: 1 });

    })


    return (
        <div>
            <h1 className='lg:text-2xl text-lg text-[#b6984b] tracking-wider title' id='title' style={Style1}>AWESOME FEATURES</h1>
            <h2 className='lg:text-3xl text-xl font-extrabold text-black tracking-widest title2' id='title2' style={Style2}>
                Enjoy Our Exclusive Features And a Wide Range of Websites.
            </h2>
            <div className='text-white'>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        {/* <div className="flex flex-wrap -m-4">
                            {boxData.map(data => {
                                return (
                                    <div className="lg:w-1/6 md:w-1/2 p-5 w-1/2 ">
                                        <div style={boxStyle} className='lg:mx-5 py-5 rounded-xl shadow-md shadow-slate-300'>
                                            <a className="  block relative lg:w-[30%] w-[40%] rounded mx-auto overflow-hidden ">
                                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={data.imageUrl} />
                                            </a>
                                            <div className='w-fit mx-auto text-center'>
                                                <h3 className='font-semibold text-[#0D2232]'>{data.heading}</h3>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div> */}
                        <div className="grid lg:grid-cols-12 grid-cols-6 gap-y-5  items-center gap-x-5 sm:gap-x-6 lg:gap-x-8">
                            {boxData.map(data => {
                                return (
                                    <div className=" col-span-2 md:col-span-2 items-center justify-center">
                                        <img className="rounded-3xl w-[40%] mx-auto" src={data.imageUrl} alt="Twitter" />
                                        <h2 className='lg:block hidden text-center lg:text-base font-semibold'>{data.heading}</h2>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
};

export default GridComponent;