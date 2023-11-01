import React from 'react'

const LiveMessage = ({name, message}) => {
  return (
    <div className="flex items-baseline w-full gap-2">
      <div className='flex items-center gap-4'>
        <div class="flex min-h-[32px] h-8 w-8 min-w-[32px] items-center justify-center overflow-hidden rounded-full bg-gray-100 dark:bg-gray-600">
                  <span class="font-medium text-sm text-gray-600 dark:text-gray-300">{name.charAt(0)}</span>
        </div>
        <h1 className="text-xs font-medium text-gray-600 font-Roboto dark:text-gray-400">{name}</h1>
      </div>
      <p className="text-sm font-normal text-black sm:text-xs font-Roboto dark:text-white">{message}</p>
    </div>
  );
}

export default LiveMessage