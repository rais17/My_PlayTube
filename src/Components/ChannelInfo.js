import React, { useState } from 'react'
import { CHANNEL_URL } from '../Utils/constant'
import useYouTube from '../Utils/CustomHook/useYouTube'
import { formatViewCount } from '../Utils/helperFunction';

const ChannelInfo = ({ channelId }) => {

  const { data, isLoading } = useYouTube(CHANNEL_URL + channelId);
  const channelData = data?.items[0];

  const thumbnailUrl = channelData?.snippet?.thumbnails?.default?.url;
  const title  = channelData?.snippet?.title;
  const subscriberCount = channelData?.statistics?.subscriberCount;

  let formattedViewCount;
  if (subscriberCount) formattedViewCount = formatViewCount(subscriberCount);
  
   
  console.log("channelInfo", channelData);
  return (
    <div className='flex items-center'> 
      <img
        className="w-10 rounded-full"
        src={thumbnailUrl}
        alt="channelThumbnail"
      />

      <div className='ml-3'>
        <h1 className="text-sm font-normal sm:font-medium sm:text-base font-Roboto dark:text-white">{title}</h1>
        <h2 className="font-Roboto text-xs font-normal text-[#606060] dark:text-[#aaaaaa]">
          {formattedViewCount} subscribers
        </h2>
      </div>

      <button className='px-4 py-1 font-normal text-white bg-black dark:bg-[#1f1f1f] dark:text-gray-200 rounded-full sm:text-sm sm:font-medium ml-7 font-Roboto'>Subscribe</button>
    </div>
  );
}

export default ChannelInfo