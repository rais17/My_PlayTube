import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "../Slices/toggleSlice";
import suggestionSlice from "../Slices/suggestionSlice";
import searchQuerySlice from "../Slices/searchQuerySlice";
import liveChatSlice from "../Slices/liveChatSlice";

const store = configureStore({
  reducer: {
    toggle: toggleSlice,
    suggestion: suggestionSlice,
    searchQuery: searchQuerySlice,
    chat: liveChatSlice,
  },
});

export default store;