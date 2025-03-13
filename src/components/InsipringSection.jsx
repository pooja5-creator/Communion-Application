import React from "react";
import ManImg from "/src/assets/businessman-9187782_1920.jpg";
import EventImg1 from "/src/assets/pexels-fauxels-3184357.jpg";
import EventImg2 from "/src/assets/pexels-marcus-aurelius-4064027.jpg";
import EventImg3 from "/src/assets/communityImg-3.jpg";
import EventImg4 from "/src/assets/communityImg-2.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function InsipringSection() {
  const num = [1, 2, 3, 4];
  const data = [
    {
      amount: "98%",
      head_1: "Opportunities",
      head_2: "Expanded",
    },
    {
      amount: "89%",
      head_1: "Attendee ",
      head_2: "Satisfaction",
    },
    {
      amount: "15k+",
      head_1: "Engaged",
      head_2: "Participants",
    },
  ];
  const images = [
    { src: EventImg1, rowSpan: 2, colSpan: 1 },
    { src: EventImg2 },
    { src: EventImg3, rowSpan: 2 },
    { src: EventImg4 },
    { src: EventImg1 },
    { src: EventImg2 },
  ];
  return (
    <div className="max-w-[1420px] min-h-[300px]  mx-auto">
      <div className="max-w-[1200px]  h-full backGroundColor mx-auto p-[5px] sm:p-[20px] lg:p-[50px]">
        <h1 className="text-[30px]  md:text-4xl font-bold text-sky-400">
          Uniting Communities Through
        </h1>
        <h1 className="text-3xl  md:text-4xl font-bold text-rose-300">
          ✦ Inspiring Events
        </h1>
        <div className="w-full min-h-[200px] mt-5 flex justify-between items-center gap-2  flex-col md:flex-row">
          <h1 className="text-[16px] lg:text-[18px] text-gray-100 font-semibold w-full md:w-[50%]">
            At Communion, we're committed to organizing events that foster
            connections, inspire personal and professional growth, and bring
            people together to share meaningful experiences. From workshops to
            conferences, every event is designed to leave a lasting impact on
            our attendees.
          </h1>
          <div className="w-full md:w-[450px]  flex-col min-h-[200px] flex justify-center items-center  gap-5">
            <div className="w-full sm:w-[400px] h-[100px]  flex justify-center items-center gap-3 sm:gap-6 flex-col sm:flex-row">
              <div className="w-full sm:w-[200px] h-[100px] flex justify-start sm:justify-center items-center">
                {num.map((item, index) => {
                  return (
                    <div className="w-10 h-10 -ml-1 overflow-hidden rounded-[50%]" key={index}>
                      <img
                        className="w-full  h-full object-cover"
                        src={ManImg}
                        alt=""
                      />
                    </div>
                  );
                })}
              </div>
              <p className="text-[20px] sm:text-2xl w-full sm:w-[200px] font-semibold text-white">
                Trusted by Over 15k+ Individuals Worldwide
              </p>
            </div>
           <Link to='/events'> <button className="bg-black px-4 cursor-pointer hover:bg-white hover:text-sky-400 transition-all duration-300  ease-linear sm:px-7 py-1 sm:py-2 text-xl rounded-xl text-sky-400  ">
              Explore Events
            </button></Link>
          </div>
        </div>

        <div className="w-full  min-h-[550px] hover:scale-105 transition-all duration-300  ease-linear grid grid-cols-1 px-5 sm:px-1 sm:grid-cols-2 md:grid-cols-4 place-items-center gap-3  mt-10">
          {images.map((image, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeIn" }}
              viewport={{ once: true }}
              
              key={index}
              className={`w-full h-[240px] md:h-full overflow-hidden rounded-2xl 
                        ${index == 0 && "md:row-span-2"}
                        ${index == 3 && "md:row-span-2"}
                          
                        `}
              style={{
                backgroundImage: `url(${image.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></motion.div>
          ))}
        </div>
        <div className="w-full min-h-[250px]  mt-3 flex justify-center items-center gap-5 flex-col md:flex-row">
          <div className="w-[100%]  min-h-[100px] pr-1 sm:pr-6 ">
            <h1 className="text-[25px] sm:text-[30px] lg:text-3xl font-bold text-black">
              Helping You Connect, Learn, and Thrive{" "}
              <span className="text-rose-300">✦ 2x Impact</span>
            </h1>
          </div>
          <div className="w-[100%] min-h-[100px] md:min-h-[200px] flex justify-between items-center">
            {data.map((item, index) => {
              return (
                <div className="w-[150px] h-[100px]  flex justify-center items-center gap-3 flex-col" key={index}>
                  <h1 className="text-3xl sm:text-4xl font-bold">
                    {item.amount}
                  </h1>
                  <p className="text-[14px] text-zinc-900 text-center">
                    {item.head_1} <br /> {item.head_2}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
