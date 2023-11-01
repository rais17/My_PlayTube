import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { VIDEO_BY_ID } from "../Utils/constant";
import useYouTube from "../Utils/CustomHook/useYouTube";
import WatchVideoShimmer from "../Utils/Shimmer/WatchVideoShimmer";
import Iframe from "./Iframe";
import CommentsContainer from "./CommentsContainer";
import VideoAndChannelDetails from "./VideoAndChannelDetails";
import SuggestedVideos from "./SuggestedVideos";
import { closeSidebar, toggleIsWatchPage } from "../Utils/Slices/toggleSlice";
import { useDispatch } from "react-redux";
import SuggestedVideoShimmer from "../Utils/Shimmer/SuggestedVideoShimmer";

const Watch = () => {
  const { id } = useParams();
  console.log("id", id);
  const { data, isLoading } = useYouTube(VIDEO_BY_ID + `id=${id}`);
  console.log("data inside watch page", data);
  console.log("isLoading", isLoading);
  
  const item = data?.items[0];

  console.log("item iniside watch page", item);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeSidebar());

    return () => {
      dispatch(toggleIsWatchPage());
    }
  }, []);

  

  return isLoading ? (
    <WatchVideoShimmer />
  ) : (
    <div className="flex flex-col gap-3 px-3 py-5 mx-auto xxs:max-sm:w-full sm:px-10 lg:flex-row">
      <div className="w-full lg:w-[58.125rem]">
        <Iframe id={id} />
        <VideoAndChannelDetails item={item} />
        <div className={`xxs:max-lg:hidden`}>
          <CommentsContainer />
        </div>
      </div>

      <SuggestedVideos categoryId={item?.snippet?.categoryId} />
      <div className={`lg:hidden`}>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default Watch;
