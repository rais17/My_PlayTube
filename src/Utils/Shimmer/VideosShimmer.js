import React from 'react'
import { useSelector } from 'react-redux';

const VideosShimmer = () => {
  const sidebar = useSelector(store => store.toggle.toggleItem);
  return (
    <div className='flex flex-wrap justify-center w-full min-h-screen gap-6 px-3'>
      {
        Array.from({ length: 12 }).map((element, index) => {
          return (
            <div
              class={`${
                sidebar
                  ? `w-full sm:basis-[calc(50%-24px)] at1080:basis-[calc(33%-24px)]`
                  : `w-full sm:basis-[calc(50%-24px)] at1080:basis-[calc(33%-24px)] at1408:basis-[calc(25%-24px)]`
              } animate-pulse flex-col space-y-8 md:flex`}
            >
              <div class="flex aspect-video w-full items-center justify-center rounded bg-gray-300 dark:bg-[#1f1f1f]">
                <svg
                  class="h-10 w-10 text-gray-200 dark:text-gray-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
              </div>
              <div class="w-full">
                <div class="mb-3 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-[#1f1f1f]"></div>
                <div class="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-[#1f1f1f]"></div>
                <div class="h-2 max-w-[360px] rounded-full bg-gray-200 dark:bg-[#1f1f1f]"></div>
              </div>
              <span class="sr-only">Loading...</span>
            </div>
          );
        })
      }
    </div>
  )
}

export default VideosShimmer