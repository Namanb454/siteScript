import React, { useState } from 'react'
import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
    const [userData, setuserData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: ""
    });

    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setuserData({ ...userData, [name]: value })
    }

    // connect with Database 
    const submitData = async (event) => {
        event.preventDefault();
        const { firstName, lastName, phone, email, message } = userData;

        if (firstName && lastName && phone && email && message) {
            const res = await fetch("https://sitescript15-default-rtdb.firebaseio.com/userDataRecords.json",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        firstName, lastName, phone, email, message
                    }),
                }
            );

            if (res) {
                setuserData({
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    message: "",
                })
                // alert("Data Stored");
                // toast("Wow so easy !");
                toast.success('Done! Our team will contact you soon.', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                // toast.success("Our team will contact you soon");

            }
            else {
                toast.error('Invalid Credentials', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        }
        else {
            // alert("Unfilled");
            toast.error('Invalid Credentials', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };


    return (

        <div className='lg:py-24 py-60'>
            <div className="flex justify-center items-center w-screen mx-auto h-screen bg-cover py-24">
                <div className="container mx-auto my-4 lg:px-20">
                    <h1 className="w-fit my-10 font-semibold mx-auto lg:text-4xl text-base text-[#0D2232] tracking-wider text-center">
                        <span>Ready To Grow Your Business And</span>
                        <br />Online Presence?<span className='font-bold text-[#b6984b]'> Contact Us </span></h1>

                    <form method='POST' className="w-full py-8 px-4 my-4 md:px-12 lg:w-9/12 lg:pl-10 lg:pr-40 mr-auto bg-cover rounded-xl shadow-2xl">
                        <div className="flex">
                            <h1 className="font-semibold text-3xl text-[#0D2232] tracking-wide font-serif">Let's Connect</h1>
                        </div>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                            <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline border shadow-sm border-slate-300 placeholder-slate-400 focus:border-white focus:ring-[#0D2232] focus:bg-white block sm:text-sm focus:ring-1"
                                type="text" name='firstName' placeholder="First Name*" value={userData.firstName} onChange={postUserData} />
                            <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline border shadow-sm border-slate-300 placeholder-slate-400 focus:border-white focus:ring-[#0D2232] focus:bg-white block sm:text-sm focus:ring-1"
                                type="text" name='lastName' placeholder="Last Name*" value={userData.lastName} onChange={postUserData} />
                            <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline border shadow-sm border-slate-300 placeholder-slate-400 focus:border-white focus:ring-[#0D2232] focus:bg-white block sm:text-sm focus:ring-1"
                                type="email" name='email' placeholder="Email*" value={userData.email} onChange={postUserData} />
                            <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline border shadow-sm border-slate-300 placeholder-slate-400 focus:border-white focus:ring-[#0D2232] focus:bg-white block sm:text-sm focus:ring-1"
                                type="number" name='phone' placeholder="Phone*" value={userData.phone} onChange={postUserData} />
                        </div>
                        <div className="my-4">
                            <textarea type='text' name='message' placeholder="Message*" value={userData.message} onChange={postUserData} className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline border shadow-sm border-slate-300 placeholder-slate-400 focus:border-[white] focus:ring-[#0D2232] focus:bg-white block sm:text-sm focus:ring-1"></textarea>
                        </div>
                        <div className="my-2 w-full lg:w-1/4">
                            <button type='submit' onClick={submitData} className="mx-auto w-full text-white bg-[#b6984b] border-0 py-2 lg:px-5 px-4 focus:outline-none hover:bg-white hover:text-[#b6984b] lg:text-base text-sm font-semibold shadow-sm shadow-gray-500 transition-all">Send Message</button>
                        </div>
                    </form>

                    <div
                        className="w-full lg:-mt-[40%] lg:w-2/6 px-8 py-12 ml-auto bg-[#0D2232] rounded-2xl"
                    >
                        <div className="flex flex-col text-white">
                            <div className="flex my-4 w-2/3 lg:w-">
                                <div className="flex flex-col">
                                    <i className="fas fa-phone-alt pt-2 pr-2" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-3xl my-5 font-semibold tracking-wider text-[#b6984b]">Call Us</h2>
                                    <a href='tel: +91 9599791185' className="text-gray-300 hover:text-white hover:font-semibold tracking-wider">Tel: +91 9599791185</a>
                                    <a href='tel: +91 8448908359' className="text-gray-300 hover:text-white hover:font-semibold tracking-wider">Tel: +91 8448908359</a>
                                    <h2 className="text-3xl my-5 font-semibold tracking-wider text-[#b6984b]">Mail Us</h2>
                                    <a href='mailto: info.sitescript@gmail.com' className="text-gray-300 hover:text-white hover:font-semibold tracking-wider">info.sitescript@gmail.com</a>
                                    <a href='mailto: namanb454@gmail.com' className="text-gray-300 hover:text-white hover:font-semibold tracking-wider">namanb454@gmail.com</a>
                                    <a href='mailto: jainkshitij1530@gmail.com' className="text-gray-300 hover:text-white hover:font-semibold tracking-wider">jainkshitij1530@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex my-4 w-2/3 lg:w-1/2 ">
                                <a href="https://www.facebook.com/profile.php?id=61553868025255" target="_blank" rel="noreferrer" className="rounded-full h- w-[15%] inline-block mx-1 text-center pt-1 ">
                                    <BsFacebook className='w-full h-full' />
                                </a>
                                <a href="https://www.instagram.com/_sitescript_/" target="_blank" rel="noreferrer" className="rounded-full h- w-[15%] inline-block mx-1 text-center pt-1">
                                    <BsInstagram className='w-full h-full' />
                                </a>
                                <a href="https://twitter.com/_siteScript_" target="_blank" rel="noreferrer" className="rounded-full h- w-[15%] inline-block mx-1 text-center pt-1">
                                    <FaSquareXTwitter className='w-full h-full' />
                                </a>
                                <a href="https://www.linkedin.com/company/sitescriptitsolution/" target="_blank" rel="noreferrer" className="rounded-full h- w-[15%] inline-block mx-1 text-center pt-1">
                                    <BsLinkedin className='w-full h-full' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- BUY ME A PIZZA AND HELP SUPPORT OPEN-SOURCE RESOURCES --> */}
            {/* <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
                <div>
                    <a title="Buy me a pizza" href="https://www.buymeacoffee.com/Dekartmc" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                        <img className="object-cover object-center w-full h-full rounded-full" src="https://img.icons8.com/emoji/48/000000/pizza-emoji.png" />
                    </a>
                </div>
            </div> */}
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

        </div>
    )
}

export default Contact
