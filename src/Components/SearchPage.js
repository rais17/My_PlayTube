import React from 'react'
import { useSelector } from 'react-redux'
import useYouTube from "../Utils/CustomHook/useYouTube";
import { YOUTUBE_SEARCH_URL } from "../Utils/constant";
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import { ButtonList } from '../Utils/constant';
import FilterButtonList from './FilterButtonList';
import SearchShimmer from '../Utils/Shimmer/SearchShimmer';

const SearchPage = () => {

  const query = useSelector(store => store.searchQuery.query);

  const { data, isLoading } = useYouTube(YOUTUBE_SEARCH_URL + query);
  console.log("data isndie searchpage for liveeeeeee chattttttttt", data);
  const items = data?.items;

  console.log("searchDataInside SearchPage", items);
  
  return isLoading ? (
    <SearchShimmer />
  ) : (
    <div className="mx-auto w-full max-w-[1200px] space-y-4">
      <FilterButtonList ButtonList={ButtonList} />
      <div className="mx-auto flex max-w-[1200px] flex-col xxs:max-sm:gap-y-[2.75rem] sm:gap-y-3">
        {items?.map((item) => {
          return (
            <Link
              key={item.id.videoId}
              to={`/watch/${item.id.videoId}`}
              style={{ display: "contents" }}
            >
              <VideoCard
                key={item.id.videoId}
                className={`flex-col gap-4 xxs:max-at600:items-center at600:flex-row`}
                {...item}
                imageWidth={`sm:max-w-[360px] w-full`}
                isDefault={false}
                isSearchPage={true}
                id={item.id.videoId}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default SearchPage
