import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import comment from '../Comments'; 
import { useEffect } from 'react';

export default function GlobalUsers() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const totalItems = comment.length;


  useEffect(() => {
    const updateItemsPerPage = () => {
      const width = window.innerWidth;
      if (width < 640) setItemsPerPage(1); 
      else if (width < 1024) setItemsPerPage(2); 
      else setItemsPerPage(3);
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);


  const handleNextItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 > totalItems - itemsPerPage ? 0 : prevIndex + 1
    );
  };

  const handlePreviousItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - itemsPerPage : prevIndex - 1
    );
  };


  const activeCardAnimation = {
    initial: { opacity: 0.5 },
    animate: {
      opacity: [0, 0.3, 0.6, 1],
      transition: { duration: 0.5, ease: 'easeIn' },
      scale: [0.95, 1.02, 1],
    },

  }
  const normalCardAnimation = {
    initial: { opacity: 0.5 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    scale: [0.95, 1.02, 1],

  };

  return (
    <div className='max-w-[1420px] min-h-[300px]  mx-auto p-2'>
      <div className='max-w-[1200px] h-full mx-auto flex justify-center items-center gap-5 flex-col mt-[50px] sm:mt-[100px]'>
        <h1 className='text-4xl sm:text-5xl w-full lg:w-[50%] text-center font-bold text-zinc-900 pt-8'>
          Trusted by Over 1500+ Active Global Users
        </h1>
        <p className='w-[90%] lg:w-[50%] text-center text-[20px] text-gray-300'>
          Join a growing community of over 1500 users worldwide who trust us to
          connect, engage, and thrive together.
        </p>

        <div className='w-[100%]  h-[300px] overflow-hidden relative  mt-10'>
          <AnimatePresence mode='wait'>
            <motion.div
              className='flex gap-10'
              animate={{ x: `-${currentIndex * (100 / itemsPerPage)}%` }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              {comment.map((item, index) => (
                <motion.div
                  key={index}
                  className={` w-[90%] sm:w-[250px] md:w-[300px] lg:w-[350px] h-[250px] rounded-2xl flex justify-start items-start flex-col p-3 ${index === 1 || index === 3 ? 'bg-zinc-900 text-gray-100' : 'bg-gray-100 text-zinc-900'} 
                  shrink-0`}
                  {...(index === currentIndex + 1
                    ? activeCardAnimation
                    : normalCardAnimation)}
                >
                  <p className='line-clamp-3'>{item.comment}</p>
                  <div className='w-full h-[100px] flex justify-start items-center gap-3 mt-3'>
                    <div className='w-10 h-10 overflow-hidden rounded-full'>
                      <img
                        className='w-full h-full object-cover'
                        src={item.img}
                        alt='user'

                      />
                    </div>
                    <div>
                      <h1>{item.name}</h1>
                      <p>{item.country}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation buttons */}
        <div className='w-full h-[40px] -mt-5 flex justify-center items-center gap-3'>
          <span
            className='w-10 h-10 rounded-full bg-sky-400  hover:bg-gray-100  transition-all duration-300 ease-linear flex justify-center items-center text-[16px] cursor-pointer'
            onClick={handlePreviousItem}
          >
            <i className='fa-solid fa-chevron-left'></i>
          </span>
          <span
            className='w-10 h-10 rounded-full bg-sky-400 hover:bg-gray-100  transition-all duration-300 ease-linear flex justify-center items-center text-[16px] cursor-pointer'
            onClick={handleNextItem}
          >
            <i className='fa-solid fa-chevron-right'></i>
          </span>
        </div>
      </div>
    </div>
  );
}
