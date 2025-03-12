import React from 'react'
import { motion } from 'framer-motion'
import moments from '../Moments'
export default function Connection() {
    return (
        <div className='max-w-[1420px]  min-h-[300px] mx-auto bg-zinc-900 text-gray-100 py-10 lg:py-[60px] '>
            <div className='max-w-[1200px] h-full mx-auto flex justify-center items-center gap-3 flex-col'>
                <h1 className='text-3xl sm:text-4xl font-bold w-full lg:w-[50%] text-center mx-auto'>Moments of Connection We've Made So Far...</h1>
                <p className='w-[80%] lg:w-[50%] mx-auto text-center'>Explore the impactful connections we've fostered so far, bringing together diverse communities through shared experiences, collaboration, and innovation.</p>
                <button className='text-[18px] w-[250px] font-semibold bg-black text-gray-100 px-3 py-2  rounded-2xl mx-auto'>View All Moments</button>
                <div className='w-full min-h-[500px]  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-start  mt-[50px] gap-4'>
                    {
                        moments.map((item, index) => {
                            return (
                                <motion.div key={index}
                                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                    whileInView={{ opacity: 1, y: 0, scale: [1, 0.5, 1] }}
                                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                                    viewport={{ once: true }} className={`w-[100%] xl:w-[350px] h-[500px] p-2 ${index == 1 ? 'lg:h-[480px]' : 'lg:h-[400px]'} ${index == 3 || index == 5 ? 'lg:h-[480px] lg:-mt-[80px]' : 'lg:h-[400px]'}  rounded-2xl`}>
                                    <div className={`w-full rounded-2xl h-[300px] rotate-0 hover:rotate-4 transition-all duration-200 ease-linear ${index == 1 ? 'lg:h-[300px]' : 'lg:h-[250px]'} ${index == 3 || index == 5 ? 'lg:h-[300px]' : 'lg:h-[250px]'} overflow-hidden`}><img className='w-full h-full object-cover' src={item.img} alt="" /></div>
                                    <h1 className='text-2xl px-3 pt-3 font-semibold'>{item.Heading}</h1>
                                    <p className='text-[17px] px-3 pt-3'>{item.content}</p>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
