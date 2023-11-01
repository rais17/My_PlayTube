import React, { useState } from 'react'
import useYouTube from '../Utils/CustomHook/useYouTube';
import { COMMENTS_URL } from "../Utils/constant";
import CommentList from './CommentList';
import CommentShimmer from '../Utils/Shimmer/CommentShimmer';

const CommentsContainer = () => {

    const { data: commentsData, isLoading: commentsIsLoading } = useYouTube(COMMENTS_URL);

  return commentsIsLoading ? (
    <CommentShimmer />
  ) : (
    <div className="my-4 w-full rounded-2xl bg-gray-100 bg-opacity-50 p-4 dark:bg-[#1f1f1f] dark:text-gray-200">
      <h1 className="text-lg font-bold tracking-wide font-Roboto">
        {commentsData.children.length} Comments
      </h1>
      <CommentList comments={commentsData.children} />
    </div>
  );
}

export default CommentsContainer