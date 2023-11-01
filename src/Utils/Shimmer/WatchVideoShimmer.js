import React from "react";
import VideoCardShimmer from "./VideoCardShimmer";

const WatchVideoShimmer = () => {
  return (
    <div className="flex flex-col w-screen gap-5 px-10 mt-8 xxs:max-lg:items-center lg:flex-row">
      <div className="flex w-full flex-col gap-3 lg:w-[58.125rem]">
        <div
          role="status"
          class="flex aspect-video w-full animate-pulse items-center justify-center rounded-lg bg-gray-300 dark:bg-[#1f1f1f]"
        >
          <svg
            class="h-10 w-10 text-gray-200 dark:text-gray-700"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
          </svg>
          <span class="sr-only">Loading...</span>
        </div>

        <div class="mt-4 flex items-center space-x-3">
          <svg
            class="h-10 w-10 text-gray-200 dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
          <div>
            <div class="mb-2 h-2.5 w-32 rounded-full bg-gray-200 dark:bg-[#1f1f1f]"></div>
            <div class="h-2 w-48 rounded-full bg-gray-200 dark:bg-[#1f1f1f]"></div>
          </div>
        </div>
      </div>

      <div className="flex h-[70vh] w-full flex-col gap-3 lg:w-[25rem]">
        <VideoCardShimmer />
        <VideoCardShimmer />
        <VideoCardShimmer />
        <VideoCardShimmer />
        <VideoCardShimmer />
      </div>
    </div>
  );
};

export default WatchVideoShimmer;
