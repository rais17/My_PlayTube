import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../Utils/Slices/toggleSlice';
import YouTubeIcon from '../Assets/youtube3D_icon.png';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";


const Logo = () => {
      const dispatch = useDispatch();
      const toggle = useSelector(store => store.toggle.toggleItem);

      const handleToggle = () => {
        dispatch(toggleSidebar());
      };
  return (
    <div className="flex items-center space-x-4">
      {!toggle ? (
        <RxHamburgerMenu
          onClick={handleToggle}
          style={{ fontSize: "22" }}
          className="cursor-pointer dark:text-white"
        />
      ) : (
          <RxCross2
            onClick={handleToggle}
            style={{ fontSize: "22" }}
            className="cursor-pointer dark:text-white" />
      )}

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
