import React, { useState } from "react";
import Logo from "/src/assets/Logo.png";
import { NavLink, Link } from "react-router-dom";
export default function Header() {
  const [showSideBar, setShowSideBar] = useState(false);
  const linksArr = [
    {
      link: "",
      name: "Home",
    },
    {
      link: "about",
      name: "About",
    },
    {
      link: "events",
      name: "Events",
    },
  ];

  return (
    <div className="w-full bg-gray-100 h-[100px] shadowGive sticky top-0 z-50">
      <div className="max-w-[1200px] h-full mx-auto flex justify-between items-center relative ">
        <Link to='/'> <div className="w-[150px]  sm:w-[180px]  overflow-hidden">
          <img
            className="w-full h-full object-contain"
            src={Logo}
            alt="Communion Logo"
          />
        </div></Link>
        <nav className="w-[300px] h-full justify-start gap-10 items-center hidden sm:flex">
          {linksArr.map((linkItem, index) => {
            return (
              <NavLink key={index}
                to={`/${linkItem.link}`}
                className={({ isActive }) =>
                  isActive
                    ? `text-sky-400 linksClass  border-t-[3px] border-sky-400 `
                    : "text-red-300 linksClass border-t-[3px] border-transparent "
                }
              >
                {linkItem.name}
              </NavLink>
            );
          })}
        </nav>
        <div
          className="w-[40px] h-[40px] bg-white rounded-[5px] absolute right-3 top-10 cursor-pointer hover:bg-zinc-900 hover:text-gray-100 transition-all duration-300 ease-linear flex justify-center items-center sm:hidden "
          onClick={() => setShowSideBar(true)}
        >
          <span className="text-2xl">
            <i className="fa-solid fa-bars"></i>
          </span>
        </div>
        <div
          className={`flex flex-col w-[180px] h-[200px] rounded-2xl fixed  top-3 right-0 bg-white shadow-lg transition-transform duration-500 ease-in-out  ${showSideBar ? "translate-x-0" : "translate-x-[100%] "}`}
        >
          <span
            className="text-xl text-rose-300 self-end pr-5 pt-4 cursor-pointer"
            onClick={() => setShowSideBar(false)}
          >
            <i className="fa-solid fa-xmark"></i>
          </span>
          {linksArr.map((item, index) => (
            <Link key={index}
              to={`/${item.link}`}
              className="text-[22px] font-bold hover:bg-rose-300 transition-all duration-300 ease-linear hover:text-zinc-900 w-full pl-3"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
