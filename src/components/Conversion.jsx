import React from 'react'
import { motion } from 'framer-motion'
import Img1 from '/src/assets/pexels-fauxels-3184357.jpg'
import Img2 from '/src/assets/pexels-marcus-aurelius-4064027.jpg'
export default function Conversion() {
  const smallContentArr = [
    {
      content: 'Happy Community',
    },
    {
      content: '210% Boost in Engagement',
    },
    {
      content: '172+ Ranked Communities',
    },
  ]
  return (
    <div className='w-full min-h-[300px] mt-[80px] '>
      <div className='max-w-[1200px] h-full mx-auto py-3 sm:py-10'>
        <div className='w-full min-h-[100px]  flex justify-between items-center flex-col md:flex-row'>
          <div className='w-full md:w-[600px]  px-2 lg:px-10'>
            <h1 className='text-3xl sm:text-4xl font-bold'>Join the Conversation</h1>
            <p className='text-[25px] sm:text-4xl font-bold pt-1 sm:pt-5 text-sky-400'>✦ Build Connections</p>
          </div>
          <div className='w-full md:w-[500px] min-h-[100px] '>
            <h1>Discover a vibrant community, share your thoughts, and connect with like-minded individuals. Together, we grow.</h1>
            <p className='bg-sky-400 border-[2px] border-gray-100 rounded-2xl w-[170px] px-2 py-1 mt-2 text-center'>Join Conversations</p>
          </div>
        </div>
        <div className='w-full min-h-[300px] p-2 grid grid-cols-2 sm:grid-cols-3  place-items-center  mt-[60px] gap-5 '>
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }} className='w-full h-[300px] sm:h-full overflow-hidden rounded-2xl col-span-2 shadowLeft backGroundImg' ></motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className='h-[300px] sm:h-full overflow-hidden rounded-2xl w-full backGroundImg2  col-span-2 sm:col-span-1'></motion.div>
        </div>
        <div className='w-full min-h-[200px]  mt-8 flex justify-center items-center flex-col  md:flex-row gap-3 lg:gap-5'>
          <h1 className='w-full px-2 sm:w-[95%] lg:w-[80%] text-[26px] sm:text-3xl lg:text-4xl font-bold text-zinc-900'>Where Connections Thrive and Ideas Flourish <span className='text-[22px] sm:text-3xl text-rose-300'>✦ 2x</span></h1>
          <div className='w-full flex justify-center items-center gap-5 min-h-[150px] md:h-[200px] flex-col sm:flex-row'>
            {smallContentArr.map((item, index) => {
              return (
                <motion.div key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }} className='w-[270px]  sm:w-full  md:w-[150px] lg:w-[190px] h-[80px] bg-gray-100   rounded-2xl  transition-all duration-200 ease-initial origin-bottom  hover:translate-y-[1px] hover:shadow-xl hover:scale-102  flex justify-center items-center gap-4 '>
                  <span className='text-xl'>⦿</span>
                  <h1 className='text-[16px] md:text-[14px] lg:text-[17px]  md:min-w-[70px] lg:w-[120px] '>{item.content}</h1>
                </motion.div>
              )
            })}
          </div>

        </div>
      </div>

    </div>
  )
}
