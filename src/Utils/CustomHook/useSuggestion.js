import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cacheResult } from "../Slices/suggestionSlice";

const useSuggestion = (url, query) => {
  const [suggestedQueries, setSuggestedQueries] = useState("");
  const dispatch = useDispatch();
  const suggestion = useSelector((store) => store.suggestion.item);

  useEffect(() => {

    let timeOut;
    if(!query) setSuggestedQueries([])
    else if (suggestion[query]) setSuggestedQueries(suggestion[query]); // Checking cache result before making an api call
    else timeOut = setTimeout(() => searchSuggestion(), 200); // Debouncing
    
    return () => {
      clearTimeout(timeOut); // Clearing setTimeout
    };
    
  }, [query]);
     
    const searchSuggestion = async () => {
      const response = await fetch(url + query);
      const result = await response.json();

      setSuggestedQueries(result[1]);

      dispatch(cacheResult({ [query]: result[1] })); // Cache result
    };

  return suggestedQueries;
};

export default useSuggestion;
