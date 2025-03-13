import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import HeroSection from './HeroSection';
import RocksSection from './RocksSection';
import Conversion from './Conversion';
import InsipringSection from './InsipringSection';
import Engagement from './Engagement';
import Connection from './Connection';
import GlobalUsers from './GlobalUsers';
import Team from './Team';


export default function Home() {
  const animationProps = {
    initial: { opacity: 0, y: 50, scale: 0.95 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: "easeOut" },
  };
  useEffect(()=>{
      window.scrollTo(0,0)
    },[])
    const serviceRef=useRef(null)
  return (
    <div className='w-full min-h-[300px]'>
      <div className='max-w-[1420px] min-h-[250px] mx-auto flex justify-center items-center flex-col gap-2'>
        <h1 className='text-[25px] sm:text-[30px] md:text-[40px] font-bold text-zinc-900 text-center'>
          Welcome to Your New Community!
        </h1>
        <p className='text-[20px] sm:text-[24px] text-gray-400 text-center'>
          Bringing people of all faiths together through meaningful events and a supportive community.
        </p>
        <div className='w-[70%] mt-2 h-[2px] backgroundColor'></div>
      </div>

      <motion.div {...animationProps}><HeroSection serviceRef={serviceRef}/></motion.div>
      <motion.div {...animationProps}><RocksSection serviceRef={serviceRef}/></motion.div>
      <motion.div {...animationProps}><Conversion /></motion.div>
      <motion.div {...animationProps}><InsipringSection /></motion.div>
      <motion.div {...animationProps}><Engagement /></motion.div>
      <motion.div {...animationProps}><Connection /></motion.div>
      <motion.div {...animationProps}><GlobalUsers /></motion.div>
      <motion.div {...animationProps}><Team /></motion.div>

      
    </div>
  );
}
