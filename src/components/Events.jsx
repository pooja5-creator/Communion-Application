import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingEffect from "./LoadingEffect";
import SecondEventBox from "./SecondEventBox";
import Opportunity from "./Opportunity";
import AddEvents from "./AddEvents";
export default function Events() {
  const categories = ["Religious", "Charity", "Social"];
  const [mainData, setMainData] = useState([]);
  const [data, setData] = useState([]);
  const [lastItem, setLastItem] = useState(4);
  const [showEffect, setShowEffect] = useState(false);
  const [activeCategory, setActiveCategory] = useState("");
 
   useEffect(()=>{
        window.scrollTo(0,0)
    },[])
    // https://api.jsonbin.io/v3/b/67d1c3d78561e97a50eaa974
  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/67d1c3d78561e97a50eaa974", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key":
          "$2a$10$5wJahouHL9KEgb/2wIQKR.19Ou3RBuZcmoPARWNj03Nhzj76HV6dq",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setData(data.record);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  useEffect(() => {
    setMainData(data.slice(0, lastItem));
  }, [data, lastItem]);

  const handleNextItems = () => {
    setShowEffect(true);
    setTimeout(() => {
      if (activeCategory) {
        const filtered = data.filter(
          (item) => item.category === activeCategory
        );
        const moreData = filtered.slice(0, lastItem + 4);
        setMainData(moreData);
        setLastItem((prev) => prev + 4);
      } else {
        setLastItem((prev) => prev + 4);
      }
      setShowEffect(false);
    }, 2000);
  };

  const handleCategoryAccordingData = (CategorySample) => {
    setTimeout(() => {
      setActiveCategory(CategorySample);
      const newData = data.filter((item) => item.category === CategorySample);
      setMainData(newData.slice(0, 4));
      setLastItem(4);
    }, 1000);
  };
  const addNewEvent = (event) => {
    setData((prevEvents) => [...prevEvents, event]);

    if (!activeCategory || event.category === activeCategory) {
      setMainData((prevMainData) => [event, ...prevMainData]);
      setLastItem((prev) => prev + 1);
    }
  };

  return (
    <div className="max-w-[1420px] min-h-[300px]  mx-auto mt-[50px]">
      <div className="max-w-[1200px] h-full mx-auto  flex justify-center items-center gap-2 sm:gap-4 flex-col">
        <h1 className=" font-bold text-zinc-900 text-center text-[25px]  sm:text-4xl">
          We Helped Communities Connect & Flourish
        </h1>
        <h2 className="text-[25px] sm:text-4xl font-bold text-rose-300">
          ✦ Upcoming Events
        </h2>
        <div className="w-full h-[70px] flex justify-center items-center gap-5">
          {categories.map((item, index) => {
            return (
              <div
                className="w-[70px] sm:w-[100px] h-[35px] cursor-pointer hover:opacity-75  bg-gray-100 border-[1px] border-black rounded-2xl flex justify-center text-[14px] sm:text-[16px] items-center"
                key={index}
                onClick={() => handleCategoryAccordingData(item)}
              >
                <h1 className="font-bold">{item}</h1>
              </div>
            );
          })}
        </div>
        <div className="w-full min-h-[300px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 xl:gap-7 mt-[50px]  place-items-center">
          <AnimatePresence mode="wait">
            {mainData.map((item, index) => {
              return (
                <motion.div
                  key={item.id || index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="w-full xl:w-[270px] pb-4 sm:pb-2 min-h-[450px] rounded-2xl bg-gray-100 overflow-hidden pt-4 px-3 group"
                >
                  <div className="w-[98%] h-[250px] sm:h-[200px] overflow-hidden mx-auto  rounded-2xl">
                    <img
                      className="w-full h-full object-cover  group-hover:scale-105 transition-all duration-300 ease-linear"
                      src={item.img}
                      alt=""
                    />
                  </div>
                  <h1 className="text-xl pt-5 font-bold">{item.title}</h1>
                  <h1 className="text-[17px] min-h-[30px] pt-1 w-[90%]  flex justify-start items-center gap-4">
                    <span className="text-[20px]">
                      <i className="fa-solid fa-calendar-days"></i>
                    </span>
                    <span className="text-[16px]">{item.date}</span>
                  </h1>
                  <h1 className="text-[17px] h-[30px]  w-[90%]  flex justify-start items-center gap-4">
                    <span className="text-[20px]">
                      <i className="fa-solid fa-location-dot"></i>
                    </span>
                    <span className="text-[16px]">{item.location}</span>
                  </h1>
                  <p className="text-[16px] font-semibold pt-2 text-rose-300">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <div className="flex justify-center items-center w-full h-[100px] relative">
          <button
            className={`text-[18px] font-bold text-gray-100 hover:opacity-90 bg-zinc-900 px-3 py-1 rounded-2xl ${
              (
                activeCategory
                  ? mainData.length >=
                    data.filter((item) => item.category === activeCategory)
                      .length
                  : mainData.length >= data.length
              )
                ? "opacity-50 cursor-not-allowed"
                : "opacity-100"
            }`}
            disabled={
              activeCategory
                ? mainData.length >=
                  data.filter((item) => item.category === activeCategory).length
                : mainData.length >= data.length
            }
            onClick={handleNextItems}
          >
            {(
              activeCategory
                ? mainData.length >=
                  data.filter((item) => item.category === activeCategory).length
                : mainData.length >= data.length
            )
              ? "No"
              : "Load"}
            More
          </button>
          {showEffect ? <LoadingEffect /> : ""}
        </div>
        <SecondEventBox />
        <Opportunity />
        <AddEvents data={data} onEventAdded={addNewEvent} />
      </div>
    </div>
  );
}
