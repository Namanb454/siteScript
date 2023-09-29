import React, { useState, useEffect, useRef } from 'react';
// import { BsFillCartFill } from "react-icons/bs";
// import { HiMiniBars4 } from "react-icons/hi";
import {
    SmoothScroll,
    initTE,
} from "tw-elements";

// import { Link } from 'react-router-dom';
initTE({ SmoothScroll });
const Navbar = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    let menuRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setIsNavOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        }
    })

    const navbar = [
        // { 'id': '1', 'nav': 'Intro', 'link': '#' },
        { 'id': '2', 'nav': 'Who We Are', 'link': '#about' },
        { 'id': '3', 'nav': 'What We Do', 'link': '#services' },
        { 'id': '4', 'nav': 'Our Focus', 'link': '#features' },
        // { 'id': '4', 'nav': 'Contact Us', 'link': '#contack' },
        { 'id': '5', 'nav': 'Demo', 'link': '#Demo' },
        { 'id': '5', 'nav': 'Help', 'link': '#help' },
    ];
    const [navSize, setnavSize] = useState();
    const [navColor, setnavColor] = useState("transparent");
    const [textcolor, settextcolor] = useState("white");
    const listenScrollEvent = () => {
        // window.scrollY > 10 ? setnavColor("white") : setnavColor("transparent");
        // window.scrollY > 10 ? setnavSize("5rem") : setnavSize("5rem");
        // window.scrollY > 10 ? settextcolor("#6527BE") : settextcolor("white");
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);
    return (
        <nav className='absolute bg-transparent w-full lg:my-3 my-1 scroll-smooth hover:scroll-auto' style={{

            height: navSize,
            transition: "all 0.5s",
            color: textcolor,
        }}>
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className=" w-full flex items-center lg:my-3 lg:pt-0 pt-5">
                        <a href='/' className="w-fit lg:mx-0 flex items-center">
                            <img className="lg:w-16 w-[15%] rounded-full" src="sitescriptlogo.jpg" alt="Logo" />
                            <div className=''>
                                <h2 className='lg:text-4xl text-xl mx-2 font-serif'>siteScript</h2>
                                <h2 className='w-fit mx-auto lg:my-1 my-0 text-[5px] [word-spacing:1px]'>WE DESIGN. WE DEVELOP. WE DELIEVR.</h2>
                            </div>
                        </a>
                        <div className="hidden md:block ml-auto">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navbar.map(data => {

                                    return (
                                        <a key={data.id}
                                            href={data.link}
                                            data-te-smooth-scroll-init
                                            className="transition-all relative group tracking-wide px-3 py-2 rounded-md text-base hover:tracking-widest scroll-smooth hover:scroll-auto" 
                                        >
                                            <span>{data.nav}</span>
                                            <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-white group-hover:w-1/2 group-hover:transition-all "></span>
                                            <span className="absolute -bottom-1 right-1/2 w-0 h-[2px] bg-white group-hover:w-1/2 group-hover:transition-all"></span>
                                        </a>

                                    )
                                })}

                                <a href='#contact'
                                    className="text-white font-semibold bg-transparent  border-2 border-white hover:border-[#6F94C4EB] hover:tracking-wide transition-all hover:text-[#6F94C4EB] px-5 py-[7px] rounded-lg text-base"
                                >
                                    Contact Us
                                </a>

                            </div>
                        </div>
                    </div>



                    <section className="MOBILE-MENU flex lg:hidden md:ml-auto" ref={menuRef}>
                        <div
                            className="HAMBURGER-ICON space-y-2"
                            onClick={() => setIsNavOpen((prev) => !prev)}
                        >
                            <span className="block h-0.5 w-7 bg-white "></span>
                            <span className="block h-0.5 w-7 bg-white "></span>
                            <span className="block h-0.5 w-7 bg-white "></span>
                        </div>

                        <div className={isNavOpen ? "showMenuNav rounded-b-2xl" : "hideMenuNav"}>
                            <div
                                className="absolute top-0  right-0 md:px-10 px-3 py-[4%]"
                                onClick={() => setIsNavOpen(false)}
                            >
                                <svg
                                    className="h-9 w-10 text-[#1C314C]"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                            <div
                                className={`${isNavOpen ? 'block' : 'hidden'
                                    } md:hidden bg-transparent`}
                                id="mobile-Homeu"
                                ref={menuRef}
                            >
                                <div className="pt-10 pb-10 space-y-0.5 transition-all mx-5 sm:px-3" ref={menuRef}>
                                    <div className="w-fit flex items-center">
                                        <img className="lg:w-20 w-[15%]" src="sitescriptlogo.jpg" alt="Logo" />
                                        <div className=''>
                                            <h2 className='lg:text-4xl text-[#1C314C] mx-1 text-xl font-serif'>siteScript</h2>
                                            <h2 className='w-fit mx-auto text-[5px] text-[#1C314C] [word-spacing:1px]'>WE DESIGN. WE DEVELOP. WE DELIEVR.</h2>
                                        </div>
                                    </div>

                                    {navbar.map(data => {
                                        return (

                                            <a key={data.id}
                                                href={data.link}
                                                className="text-[#1C314C] w-[50%] tracking-wide transition-all block px-3 py-2 rounded-md text-base"
                                            >
                                                {data.nav}
                                            </a>
                                        )
                                    })}
                                    <a
                                        href="#contact"
                                        className="w-fit text-white font-semibold bg-[#1C314C] hover:bg-white border-2 border-[#1C314C] transition-all hover:text-[#1C314C] block px-5 py-[5px] rounded-md text-sm"
                                    >
                                        Contact Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 40vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
                </div>
            </div>

            {/* Mobile Homeu, toggle classes based on Homeu state */}

        </nav>
    );
};

export default Navbar;
