import React from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { BsCameraReels } from "react-icons/bs";
import { MdOutlineSubscriptions } from "react-icons/md";
import { PiFileVideoThin } from "react-icons/pi";
import { GoHistory } from "react-icons/go";
import { RxVideo } from "react-icons/rx";
import { BsStopwatch } from "react-icons/bs"
import { SlLike } from "react-icons/sl"
import {IoIosArrowDown} from "react-icons/io"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ThemeBtn from './ThemeBtn';

const Sidebar = () => {

  const isWatchPage = useSelector(store => store.toggle.isWatchPage)
  
  return (
    <div className={`h-screen ${isWatchPage ? "" : `at1300:min-w-[240px]`}`}>
      <div className="fixed z-10 h-full min-w-[240px] bg-white px-3 dark:bg-black">
        <div className="w-full pb-3 border-b-2">
          <div className="flex w-full items-center space-x-6 rounded-lg bg-[#F0EFEF] px-3 py-2 dark:bg-[#1f1f1f]">
            <AiOutlineHome
              style={{ fontSize: "20" }}
              className="dark:text-gray-300"
            />
            <Link to="/">
              <h1 className="font-Roboto text-sm font-normal text-[#0f0f0f] dark:text-gray-300">
                Home
              </h1>
            </Link>
          </div>

          <div className="cursor-pointer flex w-full items-center space-x-6 rounded-lg px-3 py-2 hover:bg-[#F0EFEF] dark:hover:bg-[#1f1f1f]">
            <BsCameraReels
              style={{ fontSize: "20" }}
              className="dark:text-gray-300"
            />
            <h1 className="font-Roboto text-sm font-normal text-[#0f0f0f] dark:text-gray-300">
              Shorts
            </h1>
          </div>

          <div className="cursor-pointer flex w-full items-center space-x-6 rounded-lg px-3 py-2 transition-all duration-200 hover:bg-[#F0EFEF] dark:hover:bg-[#1f1f1f]">
            <MdOutlineSubscriptions
              style={{ fontSize: "20" }}
              className="dark:text-gray-300"
            />
            <h1 className="font-Roboto text-sm font-normal text-[#0f0f0f] dark:text-gray-300">
              Subscription
            </h1>
          </div>
        </div>

        <div className="w-full pb-3 mt-3 border-b-2">
          <div className="cursor-pointer flex w-full items-center space-x-6 rounded-lg px-3 py-2 transition-all duration-200 hover:bg-[#F0EFEF] dark:hover:bg-[#1f1f1f]">
            <PiFileVideoThin
              style={{ fontSize: "20" }}
              className="dark:text-gray-300"
            />
            <h1 className="font-Roboto text-sm font-normal text-[#0f0f0f] dark:text-gray-300">
              Library
            </h1>
          </div>

          <div className="cursor-pointer flex w-full items-center space-x-6 rounded-lg px-3 py-2 transition-all duration-200 hover:bg-[#F0EFEF] dark:hover:bg-[#1f1f1f]">
            <GoHistory
              style={{ fontSize: "20" }}
              className="dark:text-gray-300"
            />
            <h1 className="font-Roboto text-sm font-normal text-[#0f0f0f] dark:text-gray-300">
              History
            </h1>
          </div>

          <div className="cursor-pointer flex w-full items-center space-x-6 rounded-lg px-3 py-2 transition-all duration-200 hover:bg-[#F0EFEF] dark:hover:bg-[#1f1f1f] ">
            <RxVideo
              style={{ fontSize: "20" }}
              className="dark:text-gray-300"
            />
            <h1 className="font-Roboto text-sm font-normal text-[#0f0f0f] dark:text-gray-300">
              Your Videos
            </h1>
          </div>

          <div className="cursor-pointer flex w-full items-center space-x-6 rounded-lg px-3 py-2 transition-all duration-200 hover:bg-[#F0EFEF] dark:hover:bg-[#1f1f1f]">
            <BsStopwatch
              style={{ fontSize: "20" }}
              className="dark:text-gray-300"
            />
            <h1 className="font-Roboto text-sm font-normal text-[#0f0f0f] dark:text-gray-300">
              Watch Later
            </h1>
          </div>

          <div className="cursor-pointer flex w-full items-center space-x-6 rounded-lg px-3 py-2 transition-all duration-200 hover:bg-[#F0EFEF] dark:hover:bg-[#1f1f1f]">
            <SlLike style={{ fontSize: "20" }} className="dark:text-gray-300" />
            <h1 className="font-Roboto text-sm font-normal text-[#0f0f0f] dark:text-gray-300">
              Like Videos
            </h1>
          </div>

          <div className="cursor-pointer flex w-full items-center space-x-6 rounded-lg px-3 py-2 transition-all duration-200 hover:bg-[#F0EFEF] dark:hover:bg-[#1f1f1f]">
            <IoIosArrowDown
              style={{ fontSize: "20" }}
              className="dark:text-gray-300"
            />
            <h1 className="font-Roboto text-sm font-normal text-[#0f0f0f] dark:text-gray-300">
              Show more
            </h1>
          </div>
        </div>

        
          <ThemeBtn />
        
      </div>
    </div>
  );
}

export default Sidebar