import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuery } from "../Utils/Slices/searchQuerySlice";
import { toggleSuggestion } from "../Utils/Slices/suggestionSlice";
import { Link, useNavigate } from "react-router-dom";

const Suggestions = ({ suggestedQueries, setQuery }) => {

  const isVisible = useSelector(store => store.suggestion.isVisible);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (suggestion) => {
    setQuery(suggestion);
    dispatch(addQuery(suggestion));
    dispatch(toggleSuggestion(false));
    navigate("/searchpage");
  }

  return (
    suggestedQueries && (
      <div
        className={`mt-2 w-full ${
          suggestedQueries.length === 0 || !isVisible ? "hidden" : ""
        } space-y-1 rounded-lg bg-white dark:bg-[#1f1f1f] px-2 py-4 shadow-md`}
      >
        {suggestedQueries.map((suggestion, i) => (

          <h1
              key={i}
              onMouseDown={() => handleClick(suggestion)}
              className="cursor-pointer font-Roboto text-base font-normal tracking-wide text-[#030303] dark:text-gray-300"
            >
              {suggestion}
            </h1>

        ))}
      </div>
    )
  );
};

export default Suggestions;
