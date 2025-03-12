import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import team from '/src/assets/pexels-mart-production-7550397 (1).jpg'
export default function About() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <motion.div className='max-w-[1420px] min-h-[300px]  mx-auto mb-10 p-2'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeIn" }}
    >
      <div className='max-w-[1200px] h-full mx-auto flex justify-center items-center gap-3 flex-col '>
        <h1 className='text-[35px] sm:text-[43px] font-bold text-center mt-10'>We All  Are Here For You </h1>
        <p className='text-xl w-full sm:w-[90%] text-center text-gray-400'>Our mission is to build meaningful connections through seamless
          communication and shared experiences. With Communion, you can create groups,
          join discussions, and uplift each other — anytime, anywhere.</p>
        <div className='w-full md:w-[70%] h-[400px] overflow-hidden mt-10 rounded-2xl'><img className='w-full h-full object-cover' src={team} alt="" /></div>
        <div className='w-full min-h-[250px] bg-gray-100 mt-10 p-5'>
          <h1 className='text-2xl sm:text-3xl font-bold'>Why Choose Communion?</h1>
          <p className='text-xl pt-3'><span className='text-2xl text-rose-300'>✦</span> Private & Secure: Your conversations stay within your community.</p>
          <p className='text-xl '><span className='text-2xl text-rose-300'>✦</span> Easy to Use: Clean and intuitive design for all age groups.</p>
          <p className='text-xl '><span className='text-2xl text-rose-300'>✦</span> Stay Connected: Share messages, events, and prayers instantly.</p>
          <p className='text-xl '><span className='text-2xl text-rose-300'>✦</span> Faith-Centered: Built to encourage positivity, support, and faith-based interactions.</p>

        </div>
       </div>
    </motion.div>
  )
}
