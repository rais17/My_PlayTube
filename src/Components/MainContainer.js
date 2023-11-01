import React from "react";
import FilterButtonList from "./FilterButtonList";
import VideoContainer from "./VideoContainer";
import { ButtonList } from "../Utils/constant";

const MainContainer = () => {
  return (
    <div className="w-full sm:px-6 space-y-9">
      <FilterButtonList ButtonList={ButtonList} />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
