import React from "react";

const CommentShimmer = () => {
  return (
    <div className="max-w-4xl px-4 py-10 mx-auto">
      {Array.from({ length: 6 }).map((el, index) => {
        return (
          <div key={index} className="w-full py-4 space-y-4 animate-pulse">
            <div className="w-3/4 space-y-2">
              <div className="h-2.5 w-full rounded-md bg-gray-200 dark:bg-[#1f1f1f]"></div>
              <div className="h-2 w-1/3 rounded-md bg-gray-200 dark:bg-[#1f1f1f]"></div>
              <div className="h-2.5 w-2/4 rounded-md bg-gray-200 dark:bg-[#1f1f1f]"></div>
            </div>

            <div className="w-full pl-10 space-y-2">
              <div className="h-2.5 w-1/3 rounded-md bg-gray-200 dark:bg-[#1f1f1f]"></div>
              <div className="h-2.5 w-1/2 rounded-md bg-gray-200 dark:bg-[#1f1f1f]"></div>
            </div>

            <div className="w-1/2 space-y-2">
              <div className="h-2 w-2/3 rounded-md bg-gray-200 dark:bg-[#1f1f1f]"></div>
              <div className="h-2.5 w-1/3 rounded-md bg-gray-200 dark:bg-[#1f1f1f]"></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CommentShimmer;
