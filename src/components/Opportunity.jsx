import React from 'react'
import { motion } from 'framer-motion'
export default function Opportunity() {
    const num = [1, 2, 3, 4, 5]
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                delay: 0.3,
                ease: "easeOut",
            }}
            className='w-full backGroundColor3 min-h-[300px] rounded-2xl flex  justify-between items-center gap-5 flex-col md:flex-row  my-5 px-[10px] py-[20px] md:p-[4px] lg:p-[50px]'>
            <div className='w-full md:w-[40%] h-full  flex justify-start items-start gap-3 flex-col'>
                <h1 className='text-2xl lg:text-3xl font-bold text-gray-100 pl-3'>Never Miss an Opportunity to Grow and Connect</h1>
                <div className='w-[100%]  h-[100px] flex justify-start  items-center gap-4 '>
                    <div className='w-[180px] md:w-full lg:w-[40%] h-full flex justify-center items-center'>
                        {
                            num.map((item, index) => {
                                return (
                                    <div className='w-[30px] sm:w-[40px] h-[30px] sm:h-[40px]  rounded-[50%] bg-rose-300 -ml-2' key={index}></div>
                                )
                            })
                        }
                    </div>
                    <h1 className='text-xl font-semibold text-gray-100'>Join the Movement</h1>
                </div>
            </div>
            <div className='w-full md:w-[60%] lg:w-[50%]  h-full'>
                <h1 className='text-[18px] text-gray-100 '>Whether you're looking to make a difference, meet like-minded people, or simply lend a helping hand, there's a place for you here. Join us, and let's make an impact together!</h1>
                <p className='text-gray-100 text-[17px] flex justify-start items-center gap-3'><span className='text-[40px]'>✦</span>
                    <span className=''>Customized workshops tailored to community needs.</span></p>
                <p className='text-gray-100 text-[17px] flex justify-start items-center gap-3'><span className='text-[40px]'>✦</span>
                    <span className=''>Access to resources and materials to implement what you've learned.</span></p>
                <p className='text-gray-100 text-[17px] flex justify-start items-center gap-3'><span className='text-[40px]'>✦</span>
                    <span className=''>Expert guidance to support your journey long after the event</span></p>

            </div>
        </motion.div>
    )
}
