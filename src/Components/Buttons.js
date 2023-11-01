import React from 'react'
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { PiShareFat } from "react-icons/pi";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { formatViewCount } from '../Utils/helperFunction';
import { LiaDownloadSolid } from "react-icons/lia";



const Buttons = ({likes}) => {
  return (
    <div className="flex items-center gap-2 xxs:max-sm:w-full">
      <button className="flex items-center gap-2 rounded-full bg-gray-200 bg-opacity-70 px-3 py-1 font-Roboto text-sm font-medium dark:bg-[#1f1f1f] dark:text-gray-200">
        <AiOutlineLike style={{ fontSize: "18" }} />
        <p className="pr-2 border-r-2 border-gray-600">
          {formatViewCount(likes)}
        </p>
        <AiOutlineDislike style={{ fontSize: "18" }} />
      </button>

      <button className="flex items-center gap-2 rounded-full bg-gray-200 bg-opacity-70 px-3 py-1 font-Roboto text-sm font-medium text-[#0f0f0f] dark:bg-[#1f1f1f] dark:text-gray-200">
        <PiShareFat style={{ fontSize: "18" }} />
        Share
      </button>

      <button className="flex items-center gap-2 rounded-full bg-gray-200 bg-opacity-70 px-3 py-1 font-Roboto text-sm font-medium text-[#0f0f0f] dark:bg-[#1f1f1f] dark:text-gray-200">
        <LiaDownloadSolid style={{ fontSize: "18" }} />
        Downlaod
      </button>

      <button className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 bg-opacity-70 dark:bg-[#1f1f1f] dark:text-gray-200">
        <BiDotsHorizontalRounded
          style={{ fontSize: "12", fontWeight: "300" }}
        />
      </button>
    </div>
  );
}

export default Buttons