import React, {useEffect} from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { addQuery } from '../Utils/Slices/searchQuerySlice';
import { toggleSuggestion } from '../Utils/Slices/suggestionSlice';
import { useNavigate } from 'react-router-dom';



const SearchBar = ({ searchTxt, onChange }) => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleClick = () => {
    dispatch(addQuery(searchTxt));
    dispatch(toggleSuggestion(false));
    navigate("/searchpage");
  }

  return (
    <div className="flex w-full">
      <input
        className="search-bar w-full rounded-l-full border border-gray-300 py-[6px] pl-4 font-Roboto text-base font-normal dark:bg-[#121212] dark:text-gray-300"
        type="text"
        placeholder="Search"
        value={searchTxt}
        onChange={onChange}
        onBlur={() => dispatch(toggleSuggestion(false))}
        onClick={() => dispatch(toggleSuggestion(true))}
      />

      <button
        onClick={handleClick}
        className="rounded-r-full border border-gray-300  bg-[#F0F0F0] px-4 dark:bg-[#1f1f1f]"
      >
        <AiOutlineSearch style={{ fontSize: "24" }} className='dark:text-gray-300' />
      </button>
    </div>
  );
}

export default SearchBar