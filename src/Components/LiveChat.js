import React, { useEffect, useState } from "react";
import LiveMessage from "./LiveMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/Slices/liveChatSlice";
import {
  randomNameGenarator,
  randomMessageGenarator,
} from "../Utils/helperFunction";
import LiveCommentUser from "./LiveCommentUser";

const LiveChat = () => {
  const [showChat, setShowChat] = useState(true);
  const dispatch = useDispatch();
    const liveMessage = useSelector((store) => store.chat.messages);
    
    const handleChatVisibility = () => {
        setShowChat(prev => !prev);
    }

  useEffect(() => {
    const interval = setInterval(() => {
      // API Polling
      dispatch(
        addMessage({
          name: randomNameGenarator(),
          message: randomMessageGenarator(),
        }),
      );
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full border rounded-lg dark:border-slate-900 xxs:max-sm:my-6">
      <div className={`${showChat ? `` : `hidden`} w-full`}>
        <div className="flex h-[60vh] w-full flex-col-reverse gap-2 overflow-y-auto px-4 py-2 dark:bg-black">
          {liveMessage.map((mess, i) => {
            return <LiveMessage key={i} {...mess} />;
          })}
        </div>
        <LiveCommentUser />
      </div>

      <h1 onClick={handleChatVisibility} className="dark:hover:bg-[#1f1f1f] w-full py-2 px-20 text-sm font-medium text-center transition-all duration-200 rounded-full cursor-pointer hover:bg-gray-200 font-Roboto dark:text-white">
        {showChat ? `Hide Chat` : `Show Chat`}
      </h1>
    </div>
  );
};

export default LiveChat;
