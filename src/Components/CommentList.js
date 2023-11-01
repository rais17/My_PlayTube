import Comment from './Comment';
import React from 'react'

const CommentList = ({comments}) => {
  return (
    <div className='w-full'>
      {comments.map((comment) => {
        return (
          <div className="w-full space-y-5" key={comment.id}>
            <Comment {...comment} />

            <div className="pl-8">
              <CommentList comments={comment.children} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CommentList