import React from 'react'
import { Link } from 'react-router-dom'
import logo from '/src/assets/new-maker-removebg-preview.png'
export default function Footer() {
    return (
        <div className='max-w-[1420px] bg-zinc-900 mx-auto min-h-[400px] p-3'>
            <div className='max-w-[1200px] h-full mx-auto  flex justify-center items-center flex-col gap-4'>
                <div className='w-full h-full flex justify-start items-start sm:items-center flex-col sm:flex-row  sm:gap-4 '>
                    <div className='w-full   sm:w-[400px] min-h-[300px]   flex justify-start items-start flex-col'>
                        <div className='w-[200px]   sm:w-[200px] sm:h-[150px] overflow-hidden '><img className='w-full h-full object-contain' src={logo} alt="" /></div>
                        <p className='text-semibold text-gray-100 cursor-pointer text-[16px]'>Discover the power of connection with Communion. Uniting diverse communities through spirituality and innovation, we foster inclusivity, collaboration, and social cohesion for a better world.</p>
                        <div className='w-full sm:w-[220px]  h-[100px] flex justify-start sm:justify-center items-center gap-4'>
                            <div className='w-10 h-10 overflow-hidden flex justify-center items-center  rounded-[50%] hover:bg-zinc-900 hover:text-gray-100 bg-gray-100  transition-all duration-200 text-[16px] ease-linear'><span><i className="fa-brands fa-facebook-f"></i></span></div>
                            <div className='w-10 h-10 overflow-hidden flex justify-center items-center bg-gray-100 rounded-[50%] hover:bg-zinc-900 hover:text-gray-100 transition-all  duration-200 text-[16px] ease-linear'><span><i className="fa-brands fa-twitter"></i></span></div>
                            <div className='w-10 h-10 overflow-hidden flex justify-center text-[16px] items-center  bg-gray-100 rounded-[50%] hover:bg-zinc-900 hover:text-gray-100 transition-all duration-200 ease-linear'><span><i className="fa-brands fa-square-instagram"></i></span></div>
                            <div className='w-10 h-10 overflow-hidden flex justify-center items-center text-[16px] bg-gray-100 rounded-[50%] hover:bg-zinc-900 hover:text-gray-100 transition-all duration-200  ease-linear'><span><i className="fa-brands fa-youtube"></i></span></div>
                        </div>
                    </div>
                    <div className='w-[300px] h-[180px] sm:h-[250px] flex  justify-start  items-start sm:items-center gap-3 px-3 flex-col'>
                        <h1 className='text-gray-100 font-bold text-xl' >Company</h1>
                        <Link to='/' className='text-semibold text-gray-100 hover:text-rose-300 transition-all duration-300 ease-in-out hover:underline cursor-pointer text-[16px]'>Home</Link>
                        <Link to='/about' className='text-semibold text-gray-100 transition-all duration-300 ease-in-out hover:text-rose-300 hover:underline cursor-pointer text-[16px]'>About</Link>
                        <Link to='/events' className='text-semibold text-gray-100 hover:text-rose-300 hover:underline transition-all duration-300 ease-in-out cursor-pointer text-[16px]'>Events</Link>
                    </div>
                    <div className='w-[100%] sm:w-[300px] h-[150px] sm:h-[250px]  flex justify-start px-3 items-start sm:items-center gap-3 flex-col'>
                        <h1 className='text-gray-100 font-bold text-xl'>Contact</h1>
                        <p className='text-semibold text-gray-100 text-[16px]'>contact@communionhub.org</p>
                    </div>
                </div>
                <div className='w-full  h-[1px] bg-gray-100'></div>
                <div className='w-full min-h-[50px] sm:h-[100px]  flex  justify-between items-center p-3 text-gray-600 flex-col sm:flex-row'>
                    <div className=' w-full text-[13px] md:text-[17px] text-center'>Copyright © 2024. All right reserved to Communion</div>
                    <div className='text-[14px]  md:text-[17px] w-full text-center'>
                        <span>Privacy Policy </span>&nbsp;&nbsp;
                        <span>Terms & Conditions</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
