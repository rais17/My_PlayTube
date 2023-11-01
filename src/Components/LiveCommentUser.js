import React, { useState } from 'react'
import {IoIosSend} from 'react-icons/io'
import { useDispatch } from 'react-redux';
import { addMessage } from '../Utils/Slices/liveChatSlice';

const LiveCommentUser = () => {

    const [liveTxt, setLiveTxt] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(addMessage({
            name: 'You',
            message: liveTxt
        }));

        setLiveTxt('');
    }

  return (
    
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="w-full px-4 pt-2 pb-8 border-y dark:border-y-slate-800"
      >
        <label
          className="w-full text-sm font-medium text-gray-600 font-Roboto dark:text-gray-400"
          for="userInput"
        >
          You
        </label>
        <div className="flex w-full gap-3">
          <input
            className="w-full border-b-[2px] font-Roboto text-sm font-normal outline-none transition-all duration-700 placeholder:text-gray-600 focus:border-b-blue-500 focus:outline-none dark:border-b-[1px] dark:bg-black dark:text-gray-300"
                      type="text"
                      value={liveTxt}
                      onChange={(e) => setLiveTxt(e.target.value)}
            id="userInput"
            placeholder="Chat..."
          />
          <IoIosSend onClick={(e) => handleSubmit(e)} className='text-2xl cursor-pointer dark:text-blue-600 font-Roboto' />
        </div>
      </form>
    
  );
}

export default LiveCommentUser