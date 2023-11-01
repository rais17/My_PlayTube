import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleSidebar } from '../Utils/Slices/toggleSlice';
// import YouTube_Text_icon from "../Assets/YouTube_Text_icon.png";
import YouTubeIcon from '../Assets/youtube3D_icon.png';
import { RxHamburgerMenu } from "react-icons/rx";

const Logo = () => {
      const dispatch = useDispatch();

      const handleToggle = () => {
        dispatch(toggleSidebar());
      };
  return (
    <div className="flex items-center space-x-4">
      <RxHamburgerMenu onClick={handleToggle} style={{ fontSize: "22",  }} className='cursor-pointer dark:text-white' />

      <a href="/">
        <div className="flex items-center justify-center w-24 h-10 overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src={YouTubeIcon}
            alt="youtube_icon_image"
          />
        </div>
      </a>
    </div>
  );
}

export default Logo