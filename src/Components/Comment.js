import React, { useEffect, useState } from "react";
import he from "he";
import { convert } from "html-to-text";
import { convertDateToMonthAndYear } from "../Utils/helperFunction";

const Comment = ({ text, author, created_at }) => {

  return (
    <div className="w-full">
      <p className="text-xs italic font-normal text-gray-600 font-Mullish dark:text-[#aaaaaa]">
        by {author} on {convertDateToMonthAndYear(created_at)}
      </p>
      <p className="text-sm font-medium whitespace-pre-line font-Mullish">
        {convert(he.decode(text), { wordwrap: 120 })}
      </p>
    </div>
  );
};

export default Comment;
