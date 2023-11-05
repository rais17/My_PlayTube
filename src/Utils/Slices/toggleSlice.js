import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: 'toggle',
    initialState: {
        toggleItem: true,
        isWatchPage: false
    },
    reducers: {
        toggleSidebar: (state) => {
            state.toggleItem = !state.toggleItem
        },
        closeSidebar: (state) => {
            state.toggleItem = false;
            state.isWatchPage = true;
        },
        toggleIsWatchPage: (state) => {
            state.isWatchPage = false;
        },
        closeSidebarAtMobile: (state) => {
            state.toggleItem = false;
        }
        
    }
})

export const { toggleSidebar, closeSidebar, toggleIsWatchPage, closeSidebarAtMobile } = toggleSlice.actions;

export default toggleSlice.reducer;
