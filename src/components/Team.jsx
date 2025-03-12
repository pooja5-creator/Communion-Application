import React from "react";
import Img1 from "/src/assets/businessman-9187782_1920.jpg";
import { motion } from "framer-motion";
export default function Team() {
  const number = [1, 2, 3];
  const count = [1, 2, 3, 4, 5];
  const data = [
    {
      name: "Rohan",
      community: "catholic community",
    },
    {
      name: "Parakash",
      community: "catholic community",
    },
    {
      name: "Ronika",
      community: "catholic community",
    },
    {
      name: "Sojal",
      community: "catholic community",
    },
    {
      name: "Rohan",
      community: "catholic community",
    },
    {
      name: "Rohan",
      community: "catholic community",
    },
    {
      name: "Rohan",
      community: "catholic community",
    },
    {
      name: "Rohan",
      community: "catholic community",
    },
  ];
  const data_1 = data.slice(0, 3);
  const data_2 = data.slice(3, data.length);
  return (
    <div className="max-w-[1420px] min-h-[300px] bg-zinc-900 mx-auto">
      <div className="max-w-[1200px] bg-zinc-900 mx-auto my-10 py-[60px] h-full flex justify-items-center gap-2 flex-col">
        <div className="w-full  min-h-[400px] flex justify-center  items-center flex-col lg:flex-row gap-[20px] xl:gap-[90px] p-2">
          <div className="w-full lg:w-[550px]  min-h-[200px] lg:h-[380px] py-7 flex justify-start items-start gap-4 flex-col ">
            <h1 className="text-3xl xl:text-5xl font-bold text-gray-100">
              Meet Our Social Expert Team
            </h1>
            <p className="text-[15px] xl:text-[17px] text-gray-100">
              Our expert team blends technology, spirituality, and community
              engagement to create an inclusive platform where everyone can
              connect, share, and grow. Meet the passionate people behind
              Communion's vision!
            </p>
            <button className="text-[15px] border-[1px] text-gray-100 border-gray-100 rounded-2xl px-3 py-1">
              Connect With Us
            </button>
          </div>
          <div className="w-[100%] lg:w-[80%] h-full flex justify-center md:justify-start  items-start  md:items-start flex-wrap sm:flex-nowrap  gap-4 sm:gap-10">
            {data_1.map((item, index) => {
              return (
                <motion.div  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.3,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className={`w-[180px] md:w-[220px] relative h-[230px] md:h-[340px] overflow-hidden  rounded-[20px] md:rounded-[100px]  hover:scale-105  transition-all duration-300  ease-linear shadowBottom  bg-cover bg-center flex justify-center items-end ${
                    index == 0 && "md:-mt-[30px]"
                  } ${index == 1 && "md:mt-0"}   ${
                    index == 2 && "md:mt-[30px]"
                  }`}
                  style={{ backgroundImage: `url(${Img1})` }}
                >
                  <div className=" w-[150px] text-gray-100 h-[70px] text-center">
                    <h1 className="font-bold text-[15px] sm:text-xl">
                      {item.name}
                    </h1>
                    <p className="text-[11px] md:text-[16px]">
                      {item.community}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        <div className="w-full min-h-[300px]  flex justify-center md:justify-start items-start flex-wrap sm:flex-nowrap gap-4 md:gap-10">
          {data_2.map((item, index) => {
            return (
              <motion.div key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.3,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className={`w-[180px] md:w-[220px] h-[220px] md:h-[340px] shadowBottom  overflow-hidden rounded-[20px] md:rounded-[100px] hover:scale-105  transition-all duration-300 ease-linear  bg-cover bg-center flex justify-center items-end  ${
                  index == 0 && "md:-mt-[60px]"
                } ${index == 1 && "md:-mt-[30px]"} ${
                  index == 2 && "md:mt-[0px]"
                } ${index == 3 && "md:mt-[30px]"} ${
                  index == 4 && "md:mt-[60px]"
                }`}
                style={{ backgroundImage: `url(${Img1})` }}
              >
                <div className=" w-[150px] text-gray-100 h-[100px] text-center">
                  <h1 className="font-bold text-[15px] md:text-xl">
                    {item.name}
                  </h1>
                  <p className="text-[12px] md:text-[16px]">{item.community}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
