import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {},
    reducers: {
        cacheResults: (state, action) => {
            if (Object.keys(state).length >= 10) {
                const firstKey = Object.keys(state)[0];
                delete state[firstKey];
            }
            return { ...state, ...action.payload };
        }
    }
})

export const { cacheResults } = searchSlice.actions;
export default searchSlice.reducer;