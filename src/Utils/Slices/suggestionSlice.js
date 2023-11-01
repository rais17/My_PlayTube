import { createSlice } from "@reduxjs/toolkit";

const suggestionSlice = createSlice({
    name: 'suggestion',
    initialState: {
        item: {},
        isVisible: true
    },
    reducers: {
        cacheResult: (state, action) => {
            state = Object.assign(state.item, action.payload);
        },

        toggleSuggestion: (state, action) => { 
            state.isVisible = action.payload;
        }
    }
});

export const { cacheResult, toggleSuggestion } = suggestionSlice.actions;
export default suggestionSlice.reducer;