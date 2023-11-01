import React from 'react'
// import { useSelector } from 'react-redux'
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import useYouTube from '../Utils/CustomHook/useYouTube';
import { YOUTUBE_MOST_POPULAR_URL } from '../Utils/constant';
import SuggestedVideoShimmer from '../Utils/Shimmer/SuggestedVideoShimmer';
import LiveChat from './LiveChat';

const SuggestedVideos = ({categoryId}) => {

  const { data, isLoading } = useYouTube(YOUTUBE_MOST_POPULAR_URL + `videoCategoryId=${categoryId}`);
  const items = data?.items;

  return isLoading ? (
    <SuggestedVideoShimmer />
  ) : (
      <div className=' w-full lg:max-w-[25rem] space-y-3 '>
        <LiveChat />
      <div className="flex flex-col w-full gap-y-6 sm:gap-y-2">
        {items.map((item) => {
          return (
            <Link
              to={`/watch/${item.id}`}
              key={item.id}
              style={{ display: "contents" }}
            >
              <VideoCard
                {...item}
                className={`flex-col gap-2 xxs:max-sm:-mx-4 sm:flex-row`}
                imageWidth={`w-full sm:max-w-[10.5rem]`}
                isDefault={false}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SuggestedVideos

