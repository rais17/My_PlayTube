import React from 'react'
import ChannelInfo from './ChannelInfo';
import Buttons from './Buttons';
import VideoInfo from './VideoInfo';

const VideoAndChannelDetails = ({ item }) => {
  return (
    <div className="flex flex-col w-full gap-2 mt-3">
      <h1 className="text-base font-normal sm:text-lg sm:font-medium font-Roboto dark:text-white">{item.snippet.title}</h1>

      <div className='flex flex-col w-full gap-4 sm:justify-between sm:items-center sm:flex-row'>
        <ChannelInfo channelId={item.snippet.channelId} />
        <Buttons likes={item.statistics.likeCount} />
      </div>
      <VideoInfo item={item} />
    </div>
  );
};

export default VideoAndChannelDetails;