import React, { useState } from "react";
import { SEARCH_SUGGESTION_API } from "../Utils/constant";
import useSuggestion from "../Utils/CustomHook/useSuggestion";
import Suggestions from "./Suggestions";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import UserIcon from "./UserIcon";

const Header = () => {

  const [searchTxt, setSearchTxt] = useState("");
  const suggestedQueries = useSuggestion(SEARCH_SUGGESTION_API, searchTxt);
  console.log("suggestedQueries", suggestedQueries);
  
  return (
    <div className="box-border flex flex-col items-center w-full">
      <div className="fixed z-10 flex h-[68px] w-full items-center justify-between bg-white px-6 dark:bg-black">
        <Logo />

        <div className="flex w-[576px] flex-col items-center">
          <SearchBar
            searchTxt={searchTxt}
            onChange={(e) => setSearchTxt(e.target.value)}
          />
          <div className="fixed mt-10 w-[560px] xxs:max-md:hidden">
            <Suggestions
              setQuery={setSearchTxt}
              suggestedQueries={suggestedQueries}
            />
          </div>
        </div>
        <UserIcon />
      </div>

      <div className="fixed mx-auto mt-10 w-[98%] md:hidden">
        <Suggestions
          setQuery={setSearchTxt}
          suggestedQueries={suggestedQueries}
        />
      </div>
      <div className="h-[68px] w-full"></div>
    </div>
  );
};

export default Header;
