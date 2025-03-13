import React from 'react'
import { motion } from 'framer-motion'
export default function RocksSection({serviceRef}) {
    const data = [
        {
            icon: <i className="fa-solid fa-group-arrows-rotate"></i>,
            heading: 'Unifying Communities',
            content: `Communion bridges diverse religious communities, becoming the social`
        },
        {
            icon: <i className="fa-brands fa-yelp"></i>,
            heading: 'Innovative and Fun',
            content: `Experience faith in a fresh way through our interactive features, engaging events, and modern approach to`
        },
        {
            icon: <i className="fas fa-chart-line"></i>,
            heading: 'Promoting Unity',
            content: `We foster understanding and harmony between different faith communities through`
        },
    ]

 return (
        <div className='max-w-[1420px] mx-auto min-h-[400px] mt-[100px] scroll-mt-[180px] bg-zinc-900 ' ref={serviceRef}>
            <div className='max-w-[1200px] h-full  mx-auto px-2 py-5 lg:p-10 flex justify-center items-center gap-7 flex-col'>
                <h1 className='text-[35px] sm:text-4xl font-semibold text-gray-100 text-center'>Why Communion Rocks!</h1>
                <div className='w-full mt-6 min-h-[350px] flex justify-center items-center gap-5  xl:px-10  flex-col lg:flex-row'>
                    <div className='w-full lg:w-[350px] xl:w-[40%]  text-gray-100 flex justify-start items-start flex-col gap-4 min-h-[120px] '>
                        <h1 className='text-[17px]'> Communion is not just another platform—it's a vibrant space that unites diverse faiths,
                            beliefs, and traditions. By promoting collaboration and connection, we're fostering a
                            world where differences become strengths and unity becomes the norm.</h1>
                        <p className='text-xl'>Why Join Us?</p>
                    </div>
                    <div className='w-[100%] h-full grid grid-cols-1 sm:grid-cols-3  place-items-center gap-5  sm:gap-2  md:gap-6 py-5'>
                        {
                            data.map((item, index) => {
                                return (
                                    <motion.div  key={index}
                                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ duration: 0.6, delay: index * 0.3, ease: "easeOut" }}
                                        viewport={{ once: true }}
                                        className='w-[280px] sm:w-[100%] p-4 h-[280px] sm:h-[300px] bg-gray-100 rounded-2xl flex justify-start items-start gap-4 flex-col text-zinc-900'>
                                        <h1 className='text-4xl'>{item.icon}</h1>
                                        <h1 className='text-[18px] md:text-xl font-bold'>{item.heading}</h1>
                                        <p className='sm:min-h-[100px] text-[16px] sm:text-[14px] md:text-[16px] '>{item.content}</p>
                                        <button className='font-semibold border-zinc-900 px-2 py-1 border-[1px] rounded-2xl'>Learn More</button>

                                    </motion.div>

                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
