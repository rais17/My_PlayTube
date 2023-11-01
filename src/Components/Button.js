import React from 'react'
import { useDispatch } from 'react-redux';
import { addQuery } from '../Utils/Slices/searchQuerySlice';
import { useNavigate } from 'react-router-dom';

const Button = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(addQuery(item));
    navigate("/searchpage");
  }
  return (
    <button
      onClick={handleClick}
      className="h-8 rounded-md dark:text-gray-300 bg-[#f0efef] px-4 font-Roboto text-sm font-normal  text-[#0f0f0f] transition-all duration-200 hover:bg-gray-500 hover:text-white dark:bg-[#1F1F1F]"
    >
      {item}
    </button>
  );
}

export default Button