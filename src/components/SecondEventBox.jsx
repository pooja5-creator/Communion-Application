import React from "react";
import Img from "/src/assets/communityImg-2.jpg";
import { motion } from "framer-motion";
export default function SecondEventBox() {
  const data = [
    {
      icon: <i class="fa-solid fa-magnifying-glass-location"></i>,
      heading: "Expert-Led Sessions",
      content: "Learn from professionals who are leaders in their fields.",
    },
    {
      icon: <i class="fa-solid fa-list-check"></i>,
      heading: "Interactive Learning",
      content: "Engage in hands-on activities that enhance your skills.",
    },
    {
      icon: <i class="fa-solid fa-face-smile"></i>,
      heading: "Networking Opportunities",
      content: "Build connections that last beyond the event.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut",
      }}
      className="w-full min-h-[300px] flex justify-center items-center gap-6 mt-[40px] flex-col px-1"
    >
      <h1 className="text-[25px] sm:text-4xl text-center font-bold text-zinc-900">
        Discover What Sets Communion Events Apart
      </h1>
      <h1 className="text-[25px] sm:text-4xl font-bold text-rose-300 -mt-3">
        ✦ Who We Are
      </h1>
      <div className="w-full min-h-[300px] flex justify-center flex-col lg:flex-row gap-10 items-center mt-5">
        <div className="w-full lg:w-[40%] h-[300px] md:h-[400px] m-2 lg:h-full overflow-hidden rounded-2xl">
          <img className="w-full h-full object-cover" src={Img} alt="" />
        </div>
        <div className="w-full lg:w-[40%] h-full px-3 flex justify-start items-start gap-3 flex-col">
          <h1 className="text-2xl sm:text-3xl font-bold text-zinc-900">
            Where Creativity Meets Community Impact
          </h1>
          <div className="w-[100%] h-[300px]  flex justify-start  items-start flex-col gap-3">
            {data.map((item, index) => {
              return (
                <div
                  className="w-full h-[100px] flex justify-start items-center gap-4"
                  key={index}
                >
                  <div className="w-[50px] h-[50px] rounded-xl flex justify-center items-center bg-gray-100">
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <div>
                    <h1 className="text-[18px] font-semibold">
                      {item.heading}
                    </h1>
                    <p>{item.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
