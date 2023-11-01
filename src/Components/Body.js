import React from 'react'
import Sidebar from "./Sidebar"
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Body = () => {

  const toggleItem = useSelector((store) => store.toggle.toggleItem)

  return (
    <div className="flex w-full">
      {toggleItem && <Sidebar />}
      <Outlet />
    </div>
  );
}

export default Body