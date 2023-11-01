import React, { useState } from 'react'
import { formatViewCount } from '../Utils/helperFunction';

const VideoInfo = ({ item }) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState(item.snippet.description.slice(0, 50));

  const handleClick = () => {
    
    if (isOpen) {
      setText(item.snippet.description.slice(0, 50));
      setIsOpen(false)
    }
    else {
      setText(item.snippet.description);
      setIsOpen(true)
    }
  }

  return (
    <div className="mt-2 rounded-2xl bg-gray-100 bg-opacity-50 p-3 transition-all duration-200 hover:bg-opacity-100 dark:bg-[#1f1f1f]">
      <p className="text-sm font-semibold font-Roboto dark:text-white">
        {formatViewCount(item.statistics.viewCount)} views
      </p>
      <pre className="text-sm font-normal whitespace-pre-line font-Roboto dark:text-white">
        {text}
      </pre>
      <button
        onClick={handleClick}
        className="py-4 text-sm font-medium font-Roboto dark:text-white"
      >
        {isOpen ? "Show less" : "...more"}
      </button>
    </div>
  );
}

export default VideoInfo