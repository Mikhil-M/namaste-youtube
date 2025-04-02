import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import chatReducer from "./chatSlice";
import searchReducer from "./searchSlice";

const store = configureStore({
    reducer: {
        app: appReducer,
        search: searchReducer,
        chat: chatReducer
    }
})

export default store;