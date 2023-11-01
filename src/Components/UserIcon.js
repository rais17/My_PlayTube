import React from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdOutlineCreateNewFolder } from "react-icons/md";

const UserIcon = () => {
  return (
    <div className="flex items-center px-4 space-x-5 xxs:max-md:hidden">
      <MdOutlineCreateNewFolder
        style={{ fontSize: "26" }}
        className="cursor-pointer dark:text-white"
      />
      <IoMdNotificationsOutline
        style={{ fontSize: "26" }}
        className="cursor-pointer dark:text-white"
      />
      <AiOutlineUserAdd
        style={{ fontSize: "26" }}
        className="cursor-pointer dark:text-white"
      />
    </div>
  );
}

export default UserIcon