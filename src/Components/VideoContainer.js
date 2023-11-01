import React from 'react'
import VideoCard from './VideoCard'
import useYouTube from '../Utils/CustomHook/useYouTube'
import { YOUTUBE_MOST_POPULAR_URL } from "../Utils/constant"; 
import VideosShimmer from '../Utils/Shimmer/VideosShimmer';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import useInfiniteScroll from '../Utils/CustomHook/useInfiniteScroll';

const VideoContainer = () => {

  const { data, isLoading } = useYouTube(YOUTUBE_MOST_POPULAR_URL);
  console.log("Data inside VideoContainer", data);
  const toggleItem = useSelector((store) => store.toggle.toggleItem);

  return isLoading ? (
    <VideosShimmer />
  ) : (
    <div className="flex flex-wrap w-full gap-y-11">
      {data?.items?.map((item) => (
        <Link
          to={`/watch/${item.id}`}
          key={item.id}
          style={{ display: "contents" }}
        >
          <VideoCard
            {...item}
            className={`flex-col ${
              toggleItem
                ? "at1408:basis-1/3 at1080:basis-1/3 w-full sm:basis-1/2"
                : "at1408:basis-1/4 at1080:basis-1/3 w-full sm:basis-1/2"
            }`}
            imageWidth={`${
              toggleItem ? `at1300:w-full` : `at1080:max-w-[25rem]`
            } w-full aspect-video`}
            isDefault={true}
          />
        </Link>
      ))}
    </div>
  );
}

export default VideoContainer