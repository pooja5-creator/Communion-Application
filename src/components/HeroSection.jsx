import React from 'react'
import { motion } from 'framer-motion'
import Img1 from '/src/assets/small-card-1.1e5a2ac892007f821b2a.png'
import Img2 from '/src/assets/small-card-2.bd207a83f52c1a02bbc0.png'
import CommunityImg1 from '/src/assets/communityImg-1.jpg'
import CommunityImg2 from '/src/assets/communityImg-2.jpg'
import CommunityImg3 from '/src/assets/communityImg-3.jpg'
export default function HeroSection({serviceRef}) {
  const images = [
    {
      img: CommunityImg1
    },
    {
      img: CommunityImg2
    },
    {
      img: CommunityImg3
    },
  ]

  const handleScrollToService=()=>{
    serviceRef.current.scrollIntoView({ behavior: "smooth" })
  }
  return (
    <motion.div className='w-full min-h-[250px] ' >
      <div className='max-w-[1200px] h-full  mx-auto flex justify-center  items-center gap-1 sm:gap-3 flex-col md:flex-row '>
        <div className='w-full sm:w-[80%] min-h-[240px] '>
          <div className='w-full  h-full flex justify-center items-center flex-wrap'>
            <div className='w-full  flex justify-center gap-1 items-center'><h1 className='text-[33px] sm:text-5xl md:text-[34px] lg:text-[40px] xl:text-5xl font-bold'>Unite, Innovate,</h1>
              <div className='w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] overflow-hidden'><img className='w-full h-full object-contain' src={Img1} alt="" /></div>
            </div>
            <div className='w-full  flex justify-center gap-1 items-center'>
              <div className='w-[40px] sm:w-[60px] h-[40px] sm:h-[60px] overflow-hidden'><img className='w-full h-full object-contain' src={Img2} alt="" /></div>
              <h1 className='text-[33px] sm:text-5xl md:text-[33px] lg:text-[40px] xl:text-5xl font-bold'> Connect , Inspires</h1>
            </div>
            <div className='w-full  flex justify-center gap-1 items-center'>
              <h1 className='text-[33px] sm:text-[24px] sm:text-5xl md:text-[33px] lg:text-[40px] xl:text-5xl font-bold'>Together</h1>
              <div className='w-[170px] sm:w-[200px] md:w-[150px] lg:w-[200px] px-2 relative h-[50px] lg:h-[60px] rounded-4xl bg-gray-100 flex justify-start items-center gap-2'>
                <div className='w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] overflow-hidden'><img className='w-full h-full object-contain' src={Img2} alt="" /></div>
                <div className='w-[40px] lg:w-[60px] h-[40px] lg:h-[60px] overflow-hidden -ml-6'><img className='w-full h-full object-contain' src={Img2} alt="" /> </div>
                <h1 className='text-[15px] text-zinc-900 z-50 relative'>8+ more</h1>
              </div>
            </div>
            <div className='w-[190px] sm:w-[200px] md:w-[170px] lg:w-[200px] hover:opacity-90 transition-all duration-300 ease-in-out cursor-pointer h-[40px] font-semibold flex mt-6 justify-center items-center rounded-2xl bg-zinc-900 text-sky-400' onClick={handleScrollToService}>View Our Services</div>

          </div>

        </div>
        <div className='w-full  h-[400px]  flex justify-start items-center gap-3 lg:gap-10'>
          {
            images.map((image, index) => {
              return (
                <div className={`w-full xl:w-[200px] h-[300px] rounded-[100px] overflow-hidden transition-all duration-300 ${index === 0 && 'mt-[100px] hover:mt-[80px]'} ${index === 1 && 'mt-[20px] hover:mt-[0px]'} ${index === 2 && '-mt-[60px] hover:-mt-[80px]'}  ease-linear`} key={index}><img className='w-full h-full object-cover' src={image.img} alt="" /></div>
              )
            })
          }

        </div>
      </div>

    </motion.div>
  )
}
