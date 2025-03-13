import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoadingEffect from "./LoadingEffect";
import SecondEventBox from "./SecondEventBox";
import Opportunity from "./Opportunity";
import AddEvents from "./AddEvents";
import EmptyData from "./EmptyData";
import ShowLoadData from "./ShowLoadData";

export default function Events() {
  const categories = ["Religious", "Charity", "Social"];
  const [mainData, setMainData] = useState([]);
  const [data, setData] = useState([]);
  const [lastItem, setLastItem] = useState(4);
  const [isLoading, setIsLoading] = useState(true); // Initial loading effect
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fetch data
  useEffect(() => {
    fetch("https://communion-hub-server.vercel.app/events", {
      method: "GET",
      // headers: {
      //   "Content-Type": "application/json",
      //   "X-Master-Key": "$2a$10$5wJahouHL9KEgb/2wIQKR.19Ou3RBuZcmoPARWNj03Nhzj76HV6dq",
      // },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
        setMainData(data.slice(0, 4)); // First 4 records
      })
      .catch((error) => console.error("Fetch error:", error))
      .finally(() => setIsLoading(false)); // Stop loading when done
  }, []);

  // Handle Load More Items
  const handleNextItems = () => {
    setIsLoading(true);
    setTimeout(() => {
      let moreData = [];
      if (activeCategory) {
        const filtered = data.filter((item) => item.category === activeCategory);
        moreData = filtered.slice(0, lastItem + 4);
      } else {
        moreData = data.slice(0, lastItem + 4);
      }
      setMainData(moreData);
      setLastItem((prev) => prev + 4);
      setIsLoading(false);
    }, 800);
  };

  // Handle Filter By Category
  const handleCategoryAccordingData = (CategorySample) => {
    setIsLoading(true);
    setTimeout(() => {
      setActiveCategory(CategorySample);
      const filteredData = data.filter((item) => item.category === CategorySample);
      setMainData(filteredData.slice(0, 4));
      setLastItem(4);
      setIsLoading(false);
    }, 1000);
  };

  // Add New Event
  const addNewEvent = (event) => {
    setData((prev) => [...prev, event]);
    if (!activeCategory || event.category === activeCategory) {
      setMainData((prev) => [event, ...prev]);
    }
  };

  // Check if more data available to load
  const hasMoreItems = () => {
    const source = activeCategory
      ? data.filter((item) => item.category === activeCategory)
      : data;
    return mainData.length < source.length;
  };

  return (
    <div className="max-w-[1420px] min-h-[300px] mx-auto mt-[50px]">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-4">
        {/* Heading */}
        <h1 className="font-bold text-zinc-900 text-center text-[25px] sm:text-4xl">
          We Helped Communities Connect & Flourish
        </h1>
        <h2 className="text-[25px] sm:text-4xl font-bold text-rose-300">
          ✦ Upcoming Events
        </h2>

        {/* Categories */}
        <div className="flex gap-5 h-[70px] justify-center items-center">
          {categories.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleCategoryAccordingData(item)}
              className="w-[70px] sm:w-[100px] h-[35px] cursor-pointer hover:opacity-75 bg-gray-100 border border-black rounded-2xl flex justify-center items-center text-[14px] sm:text-[16px] font-bold"
            >
              {item}
            </div>
          ))}
        </div>

        {/* Loading Effect */}
        {isLoading && <LoadingEffect />}

        {/* Main Data */}
        {!isLoading && data.length > 0 ? (
          <div className="w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
          lg:grid-cols-4 gap-3 xl:gap-7 mt-5 place-items-center">
            <AnimatePresence>
              {mainData.map((item, index) => (
                <motion.div
                  key={item.id || index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="w-full xl:w-[270px] pb-4 min-h-[450px] bg-gray-100 rounded-2xl overflow-hidden pt-4 px-3 group"
                >
                  <div className="w-[98%] h-[250px] sm:h-[200px] overflow-hidden mx-auto rounded-2xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300"
                    />
                  </div>
                  <h1 className="text-xl pt-5 font-bold">{item.title}</h1>
                  <h2 className="text-[17px] pt-1 flex items-center gap-2">
                    <i className="fa-solid fa-calendar-days text-[20px]" /> {item.date}
                  </h2>
                  <h2 className="text-[17px] pt-1 flex items-center gap-2">
                    <i className="fa-solid fa-location-dot text-[20px]" /> {item.location}
                  </h2>
                  <p className="text-[16px] font-semibold pt-2 text-rose-300">{item.description}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : <ShowLoadData />}

        {/* Empty Data */}
        {!isLoading && mainData.length === 0 && <EmptyData />}

        {/* Load More Button */}
        {!isLoading && hasMoreItems() && (
          <div className="flex justify-center items-center w-full h-[100px]">
            <button
              onClick={handleNextItems}
              className="text-[18px] font-bold text-gray-100 bg-zinc-900 px-4 py-2 rounded-2xl hover:opacity-90"
            >
              Load More
            </button>
          </div>
        )}

        {/* Other Components */}
        <SecondEventBox />
        <Opportunity />
        <AddEvents data={data} onEventAdded={addNewEvent} />
      </div>
    </div>
  );
}
