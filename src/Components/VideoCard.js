import React, { useEffect } from 'react'
import { formatViewCount } from '../Utils/helperFunction';
import { convertDateToMonthAndYear } from '../Utils/helperFunction';
import { CHANNEL_URL } from '../Utils/constant';
import useYouTube from '../Utils/CustomHook/useYouTube';

const VideoCard = ({ snippet, statistics = "", className = "", ...props }) => {
  
  
  const { channelId } = snippet;
  const { data } = useYouTube(CHANNEL_URL + channelId);
  const channelData = data?.items[0];
  const thumbnailUrl = channelData?.snippet?.thumbnails?.default?.url;

  let imageUrl;
  if (props.isSearchPage)
    imageUrl = snippet?.thumbnails?.medium?.url;
  else
     imageUrl = snippet?.thumbnails?.maxres?.url;

  const formattedViewCount = formatViewCount(statistics?.viewCount);
  

  return (
    <div className={`flex ${className} cursor-pointer gap-1 px-2`}>
      <div className={`${props.imageWidth}`}>
        <img
          className="object-contain w-full rounded-lg shadow-lg"
          src={imageUrl}
          alt="content"
          loading="lazy"
        />
      </div>

      <div
        className={`${props.isDefault ? `flex gap-x-4` : `xxs:max-sm:px-4`}`}
      >
        <img
          className={`${
            props.isDefault ? `mt-2 h-8 w-8 rounded-full` : `hidden`
          }`}
          src={thumbnailUrl}
          alt=""
        />
        <div>
          <h1
            className={` font-Roboto ${
              props.isDefault
                ? `text-base ${props.isSearchPage ? `` : `mt-2`}`
                : `${
                    props.isSearchPage
                      ? `text-lg font-normal text-[#0f0f0f]`
                      : `text-sm`
                  }`
            } font-medium text-[#0f0f0f] dark:text-white`}
          >
            {props.isDefault
              ? snippet.title.slice(0, 70)
              : !props.isSearchPage
              ? snippet.title.slice(0, 50)
              : snippet.title.slice(0, 100)}
          </h1>

          <div>
            <div
              className={`${
                props.isSearchPage ? "flex-col-reverse" : " "
              } flex flex-col`}
            >
              <div className="flex items-center gap-1">
                <img
                  className={`${
                    props.isDefault
                      ? `hidden`
                      : `${props.isSearchPage ? `h-5 w-5` : `h-4 w-4`}`
                  } rounded-full`}
                  src={thumbnailUrl}
                  alt=""
                />
                <h2
                  className={`mt-1 font-Roboto ${
                    props.isDefault ? "text-sm" : "text-xs"
                  } font-normal text-[#0f0f0f] dark:text-[#aaaaaa] ${
                    props.isSearchPage ? "py-5" : ""
                  }`}
                >
                  {snippet.channelTitle}
                </h2>
              </div>

              <div className={`flex items-center gap-2`}>
                <h2
                  className={`font-Roboto ${
                    props.isDefault ? "text-sm" : "text-xs"
                  } font-normal text-[#606060] dark:text-[#aaaaaa]`}
                >
                  {formattedViewCount && formattedViewCount} views
                </h2>

                <h2
                  className={`font-Roboto ${
                    props.isDefault ? "text-sm" : "text-xs"
                  } font-normal text-[#606060] dark:text-[#aaaaaa]`}
                >
                  {convertDateToMonthAndYear(snippet.publishedAt)}
                </h2>
              </div>
            </div>

            <h2
              className={`${
                props.isSearchPage
                  ? "block font-Roboto text-xs font-normal text-[#606060]"
                  : "hidden"
              }`}
            >
              {snippet.description}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard