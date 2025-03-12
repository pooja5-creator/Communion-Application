import React from 'react'
import Img1 from '/src/assets/pexels-fauxels-3184357.jpg'
import Img2 from '/src/assets/communityImg-3.jpg'
import { motion } from 'framer-motion'
export default function Engagement() {
    const numbers = [
        {
            icon: <i className="fas fa-globe"></i>,
            heading: 'Global Connectivity',
            content: 'Connecting people from diverse religious communities worldwide, fostering meaningful engagement.'

        },
        {
            icon: <i className="fas fa-users"></i>,
            heading: 'Foster Inclusive Collaboration and Connect with People Around You',
            content: 'Engage, collaborate, and connect with diverse people to build inclusive and meaningful relationships.'

        },
        {
            icon: <i className="fas fa-microchip"></i>,
            heading: 'Innovative Technology',
            content: 'Utilizing cutting-edge tools to enhance user experience and encourage active participation.'

        },
        {
            icon: <i className="fas fa-seedling"></i>,
            heading: 'Daily Growth',
            content: 'Over 10,000+ daily engagements, creating a thriving community where spirituality and innovation meet.'

        },
    ]
    return (
        <div className='max-w-[1420px] min-h-[400px] py-10  mx-auto p-2'>
            <div className='max-w-[1200px] h-full mx-auto flex justify-center items-center flex-col'>
                <h1 className='text-3xl sm:text-4xl font-bold text-zinc-900 w-full xl:w-[50%] text-center'>More Than <span className='text-rose-300'>10,000+</span> Engagements daily across the world</h1>
                <p className='text-[17px] text-zinc-900 opacity-55 w-full sm:w-[80%] xl:w-[50%] pt-5 text-center'>Experience the power of connection with over 10,000 daily interactions worldwide, uniting diverse communities through innovation, collaboration, and shared spirituality.</p>
                <div className='w-full min-h-[500px] flex justify-center items-center gap-5 flex-col lg:flex-row'>
                    <div className='w-full  h-[550px] flex justify-center items-center gap-5 px-3'>
                        <div className='h-[400px] w-full sm:w-[300px] lg:w-[250px] rounded-[120px] overflow-hidden mt-[100px] hover:mt-[70px] transition-all duration-200 ease-linear'><img className='w-full h-full object-cover' src={Img1} alt="" /></div>
                        <div className='h-[400px] w-full sm:w-[300px] lg:w-[250px] rounded-[120px] overflow-hidden  hover:-mt-[30px] transition-all duration-200 ease-linear'><img className='w-full h-full object-cover' src={Img2} alt="" /></div>
                    </div>
                    <div className='w-full h-full grid grid-cols-1 lg:grid-cols-2 place-items-center gap-5 mt-[60px]'>
                        {numbers.map((item, index) => {
                            return (
                                <motion.div  key={index}
                                    initial={{ opacity: 0, y: 50, scale: 0.5 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ duration: 0.6, delay: index * 0.2, ease: "easeIn" }}
                                    viewport={{ once: true }} className='w-full  h-[270px] sm:h-[200px] lg:h-[330px] rounded-2xl flex justify-start  p-3 bg-red-100 items-start gap-4 flex-col'>
                                    <h1 className='text-5xl'>{item.icon}</h1>
                                    <h1 className='text-xl font-bold '>{item.heading}</h1>
                                    <p className='text-gray-400'>{item.content}</p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
